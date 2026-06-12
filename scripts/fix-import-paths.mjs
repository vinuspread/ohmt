import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const templatesDir = path.resolve(rootDir, 'src', 'app', 'templates');
const wrapperPath = path.resolve(rootDir, 'src', 'components', 'TemplateWrapper');

function walkPages(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '_components' && entry.name !== 'components' && entry.name !== '_internal') {
      files.push(...walkPages(full));
    } else if (entry.isFile() && entry.name === 'page.tsx') {
      files.push(full);
    }
  }
  return files;
}

function findTemplateRoot(pagePath) {
  // Find the template root directory by looking for theme.json
  let dir = path.dirname(pagePath);
  while (dir.startsWith(templatesDir)) {
    if (fs.existsSync(path.join(dir, 'theme.json'))) {
      return dir;
    }
    dir = path.dirname(dir);
  }
  return null;
}

let fixedCount = 0;
const allPages = walkPages(templatesDir);

for (const pagePath of allPages) {
  let content = fs.readFileSync(pagePath, 'utf-8');
  const original = content;

  // Only process files that have TemplateWrapper import (not @/ alias)
  if (!content.includes('TemplateWrapper')) continue;
  if (content.includes('from "@/components/TemplateWrapper"') || content.includes("from '@/components/TemplateWrapper'")) continue;

  const templateRoot = findTemplateRoot(pagePath);
  if (!templateRoot) {
    console.log(`SKIP (no theme.json found): ${path.relative(rootDir, pagePath)}`);
    continue;
  }

  // Calculate correct relative path to TemplateWrapper
  const twCorrect = path.relative(path.dirname(pagePath), wrapperPath).replace(/\\/g, '/');

  // Calculate correct relative path to theme.json
  const themeJsonPath = path.join(templateRoot, 'theme.json');
  const themeCorrect = path.relative(path.dirname(pagePath), themeJsonPath).replace(/\\/g, '/');

  // Fix TemplateWrapper import
  content = content.replace(
    /import \{ TemplateWrapper \} from "[^"]+"/,
    `import { TemplateWrapper } from "${twCorrect}"`
  );

  // Fix theme import (must be after TemplateWrapper import in the file)
  // Ensure relative paths start with ./ when in same directory
  const themeImport = themeCorrect.startsWith('.') ? `"${themeCorrect}"` : `"./${themeCorrect}"`;
  content = content.replace(
    /import theme from "[^"]+"/,
    `import theme from ${themeImport}`
  );

  if (content !== original) {
    fs.writeFileSync(pagePath, content, 'utf-8');
    console.log(`FIXED: ${path.relative(rootDir, pagePath)}`);
    console.log(`  TW: ${twCorrect}`);
    console.log(`  Theme: ${themeCorrect}`);
    fixedCount++;
  } else {
    console.log(`OK: ${path.relative(rootDir, pagePath)}`);
  }
}

console.log(`\nFixed ${fixedCount} files`);
