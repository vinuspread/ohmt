import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// 1) List all files in public/templates/
console.log('=== Files in public/templates/ ===');
function walk(dir, prefix, result) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, prefix + e.name + '/', result);
    else if (e.isFile()) result.push(prefix + e.name);
  }
}
const publicFiles = [];
walk(path.resolve(rootDir, 'public', 'templates'), '', publicFiles);
const publicSet = new Set(publicFiles);
console.log(`  ${publicFiles.length} files\n`);

// 2) List all files in src/app/templates/*/images/
console.log('=== Files in src/app/templates/*/images/ (not copied to public) ===');
const srcDir = path.resolve(rootDir, 'src', 'app', 'templates');
const srcImages = [];
for (const tpl of fs.readdirSync(srcDir, { withFileTypes: true })) {
  if (!tpl.isDirectory()) continue;
  const imgDir = path.join(srcDir, tpl.name, 'images');
  if (!fs.existsSync(imgDir)) continue;
  for (const f of fs.readdirSync(imgDir)) {
    const full = path.join(imgDir, f);
    if (fs.statSync(full).isFile()) {
      const publicPath = tpl.name + '/' + f;
      srcImages.push(publicPath);
      if (!publicSet.has(publicPath)) {
        console.log(`  NOT IN PUBLIC: ${publicPath}`);
      }
    }
  }
}
console.log(`  ${srcImages.length} source images, ${publicFiles.length} public images\n`);

// 3) Check src images that ARE copied to public
console.log('=== Files in public/templates/ that have NO source in src/ ===');
for (const pf of publicFiles) {
  if (!srcImages.includes(pf)) {
    // Skip SVG icons (common shared icons)
    if (pf.endsWith('.svg')) continue;
    // Skip destination images (airline has pre-placed destination images)
    if (pf.startsWith('airline/destinations/')) continue;
    console.log(`  NO SOURCE: ${pf}`);
  }
}

// 4) Scan .tsx files for HARDCODED (non-template-literal) image references
console.log('\n=== Scanning for hardcoded image references (non-dynamic) ===');
const tsxDir = path.resolve(rootDir, 'src', 'app', 'templates');
const allRefs = [];

function scanTsx(dir) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory() && !e.name.startsWith('node_modules')) scanTsx(full);
    else if (e.isFile() && e.name.endsWith('.tsx')) {
      const content = fs.readFileSync(full, 'utf-8');
      const lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        // Match any "/templates/..." in single or double quotes (not backticks to avoid template literals)
        const m = lines[i].match(/["'](\/templates\/[^"']+\/[^\/"']+\.[a-zA-Z]+)["']/);
        if (m) {
          allRefs.push({ path: m[1].replace(/^\//, ''), file: path.relative(rootDir, full), line: i + 1, text: lines[i].trim().substring(0, 60) });
        }
      }
    }
  }
}
scanTsx(tsxDir);

// Deduplicate references by path
const refsByPath = {};
for (const r of allRefs) {
  if (!refsByPath[r.path]) refsByPath[r.path] = [];
  refsByPath[r.path].push(r);
}

// Check which referenced paths don't exist in public/
console.log(`\n=== Missing images (referenced in code but NOT in public/templates/) ===`);
let missingCount = 0;
for (const [refPath, refs] of Object.entries(refsByPath)) {
  if (!publicSet.has(refPath)) {
    console.log(`  ${refPath}`);
    // Show first reference only
    const r = refs[0];
    console.log(`    ${r.file}:${r.line}  ${r.text}`);
    missingCount++;
  }
}
if (missingCount === 0) console.log('  NONE - all hardcoded image refs exist in public/templates/');

console.log(`\nTotal unique hardcoded refs: ${Object.keys(refsByPath).length}`);
console.log(`Total missing: ${missingCount}`);
