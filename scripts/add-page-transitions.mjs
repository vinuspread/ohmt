import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const templatesDir = path.resolve(rootDir, 'src', 'app', 'templates');

// ─── Theme names for templates missing name field ───
const themeNames = {
  'airline':       'Travel Airline',
  'airline-ko':    'Travel Airline',
  'car':           'Automotive Car',
  'car-ko':        'Automotive Car',
  'cosmetic':      'Cosmetic Wellness',
  'cosmetic-ko':   'Cosmetic Wellness',
  'ir':            'Corporate IR',
  'ir-ko':         'Corporate IR',
  'magazine':      'Editorial Magazine',
  'magazine-ko':   'Editorial Magazine',
  'newspaper':     'Press Newspaper',
  'newspaper-ko':  'Press Newspaper',
};

// ─── 1. Add name to theme.json files ───
console.log('=== Step 1: Adding name to theme.json ===');
let nameCount = 0;
for (const [tpl, n] of Object.entries(themeNames)) {
  const themeJsonPath = path.join(templatesDir, tpl, 'theme.json');
  if (!fs.existsSync(themeJsonPath)) continue;
  let content = fs.readFileSync(themeJsonPath, 'utf-8');
  const data = JSON.parse(content);
  if (!data.name) {
    data.name = n;
    fs.writeFileSync(themeJsonPath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
    console.log(`  ${tpl}: added name "${n}"`);
    nameCount++;
  } else {
    console.log(`  ${tpl}: already has name "${data.name}"`);
  }
}
console.log(`  Added ${nameCount} names\n`);

// ─── 2. Find all page.tsx files missing TemplateWrapper ───
console.log('=== Step 2: Finding sub-pages missing TemplateWrapper ===');
function walkPages(dir, depth = 0) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '_components' && entry.name !== '_internal' && entry.name !== 'components') {
      files.push(...walkPages(full, depth + 1));
    } else if (entry.isFile() && entry.name === 'page.tsx') {
      files.push(full);
    }
  }
  return files;
}

function getRelativePath(fromDir, toFile) {
  const rel = path.relative(fromDir, toFile).replace(/\\/g, '/');
  return rel.startsWith('.') ? rel : './' + rel;
}

const allPages = walkPages(templatesDir);
const pagesNeedingWrapper = [];

for (const pagePath of allPages) {
  let content = fs.readFileSync(pagePath, 'utf-8');
  if (content.includes('TemplateWrapper')) continue;
  if (!content.includes('"use client"') && !content.includes("'use client'")) continue;

  // Calculate depth from template root
  const templateRoot = pagePath.substring(0, pagePath.indexOf('src/app/templates/') + 'src/app/templates/'.length);
  const afterTemplate = pagePath.substring(templateRoot.length);
  const segments = afterTemplate.split(/[\\/]/);
  const templateName = segments[0];
  const pageRelPath = segments.slice(1).join('/');
  const depth = segments.length - 1; // -1 because segments includes the page.tsx file
  
  // Calculate relative path to TemplateWrapper
  const twRel = '../'.repeat(depth) + '../../../components/TemplateWrapper';
  const themeRel = '../'.repeat(depth - 1) + 'theme.json'; // -1 because theme.json is in template root, not in the subdir

  pagesNeedingWrapper.push({ path: pagePath, templateName, content, twRel, themeRel, depth });
  console.log(`  ${templateName}/${pageRelPath}`);
}

console.log(`  Found ${pagesNeedingWrapper.length} pages needing TemplateWrapper\n`);

// ─── 3. Add TemplateWrapper to sub-pages ───
console.log('=== Step 3: Adding TemplateWrapper to sub-pages ===');
let wrapperCount = 0;

function findReturnStatement(content) {
  // Find the main return of the page component
  // Look for patterns like `return (` or `return <` 
  const returnMatch = content.match(/\n\s*return\s*\(/);
  if (returnMatch) return returnMatch.index + returnMatch[0].length;
  
  const returnJSX = content.match(/\n\s*return\s*</);
  if (returnJSX) return returnJSX.index + returnJSX[0].length - 1; // before '<'
  
  return -1;
}

function findLastImportLine(content) {
  const lines = content.split('\n');
  let lastImportIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) {
      lastImportIdx = i;
    }
  }
  return lastImportIdx;
}

function addWrapperToPage(pagePath, twRel, themeRel) {
  let content = fs.readFileSync(pagePath, 'utf-8');
  const original = content;

  // Add imports after last import
  const lines = content.split('\n');
  let lastImportIdx = findLastImportLine(content);
  
  const templateWrapperImport = `import { TemplateWrapper } from "${twRel.replace(/\\/g, '/')}";`;
  const themeImport = `import theme from "${themeRel.replace(/\\/g, '/')}";`;
  
  // Insert imports
  if (lastImportIdx >= 0) {
    lines.splice(lastImportIdx + 1, 0, '', themeImport, templateWrapperImport);
  }
  
  content = lines.join('\n');
  
  // Find the return statement and wrap content
  // Strategy: find the JSX root element and wrap it
  // Look for the return ( or return <
  const rx = content.match(/\n(\s*)return\s*\(/);
  if (!rx) {
    console.log(`    SKIP: Cannot find return statement`);
    return false;
  }
  
  const indent = rx[1];
  const returnIdx = rx.index;
  const afterReturn = returnIdx + rx[0].length;
  
  // Find the opening of the main JSX element (skip whitespace and newlines after return ()
  let jsxStart = afterReturn;
  while (jsxStart < content.length && (content[jsxStart] === '\n' || content[jsxStart] === '\r' || content[jsxStart] === ' ')) {
    jsxStart++;
  }
  
  // Find the matching closing paren for the return
  let parenDepth = 0;
  let jsxEnd = -1;
  let inTemplate = false;
  let templateDepth = 0;
  
  for (let i = returnIdx; i < content.length; i++) {
    if (content[i] === '(') parenDepth++;
    if (content[i] === ')') {
      parenDepth--;
      if (parenDepth === 0 && i > afterReturn) {
        jsxEnd = i;
        break;
      }
    }
  }
  
  if (jsxEnd < 0) {
    console.log(`    SKIP: Cannot find matching return paren`);
    return false;
  }
  
  // Insert TemplateWrapper opening after the return (
  const beforeContent = content.substring(0, afterReturn);
  const middleContent = content.substring(afterReturn, jsxEnd);
  const afterContent = content.substring(jsxEnd);
  
  // Strip the outermost paren if needed
  const trimmedMiddle = middleContent.trim();
  
  const newContent = `${beforeContent}
${indent}  <TemplateWrapper theme={theme}>
${indent}    ${trimmedMiddle}
${indent}  </TemplateWrapper>
${afterContent}`;
  
  if (newContent !== original) {
    fs.writeFileSync(pagePath, newContent, 'utf-8');
    return true;
  }
  return false;
}

for (const page of pagesNeedingWrapper) {
  try {
    const result = addWrapperToPage(page.path, page.twRel, page.themeRel);
    if (result) {
      const rel = path.relative(templatesDir, page.path);
      console.log(`  Added: ${rel}`);
      wrapperCount++;
    } else {
      const rel = path.relative(templatesDir, page.path);
      console.log(`  FAILED: ${rel}`);
    }
  } catch (e) {
    console.log(`  ERROR: ${page.path}: ${e.message}`);
  }
}

console.log(`  Added TemplateWrapper to ${wrapperCount} pages\n`);

// ─── 4. Update TemplateWrapper with all transition variants ───
console.log('=== Step 4: Update TemplateWrapper with all variants ===');

console.log('\nDone!');
