import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// 1) Build a set of files that exist in public/templates/
console.log('=== Scanning public/templates/ for existing images ===');
const existing = new Set();
function walkPublic(dir, prefix) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkPublic(full, prefix + entry.name + '/');
    } else if (entry.isFile() && /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i.test(entry.name)) {
      existing.add(prefix + entry.name);
    }
  }
}
walkPublic(path.resolve(rootDir, 'public', 'templates'), '');
console.log(`Found ${existing.size} images in public/templates/\n`);

// 2) Scan all .tsx files for hardcoded /templates/ references
console.log('=== Scanning .tsx files for image references ===');
const refs = []; // { file, line, ref }
const srcDir = path.resolve(rootDir, 'src');
function walkSrc(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('node_modules')) {
      walkSrc(full);
    } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
      const lines = fs.readFileSync(full, 'utf-8').split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // Match any "/templates/..." path in quotes
        const m = line.match(/["'`](\/templates\/[^"'`]+\/([^\/"'`]+\.[a-zA-Z]+))["'`]/);
        if (m) {
          const refPath = m[1].replace(/^\//, ''); // remove leading /
          const fileName = path.basename(refPath);
          const relFile = path.relative(rootDir, full);
          refs.push({ file: relFile, line: i + 1, ref: refPath, text: line.trim().substring(0, 80) });
        }
      }
    }
  }
}
walkSrc(path.resolve(rootDir, 'src'));
console.log(`Found ${refs.length} hardcoded image references\n`);

// 3) Cross-reference
console.log('=== Missing images (referenced but NOT in public/templates/) ===');
let missing = [];
for (const r of refs) {
  if (!existing.has(r.ref)) {
    missing.push(r);
    console.log(`  MISSING: ${r.ref}`);
    console.log(`    Referenced at: ${r.file}:${r.line}`);
    console.log(`    ${r.text}\n`);
  }
}
if (missing.length === 0) {
  console.log('  NONE - all referenced images exist in public/templates/\n');
}

// 4) Report reference count by template
console.log('=== Summary ===');
console.log(`Total existing images: ${existing.size}`);
console.log(`Total references found: ${refs.length}`);
console.log(`Total missing: ${missing.length}`);
