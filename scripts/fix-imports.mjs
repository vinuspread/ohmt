import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templatesDir = path.resolve(__dirname, '..', 'src', 'app', 'templates');

function walkDir(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.git') {
      files.push(...walkDir(full));
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
      files.push(full);
    }
  }
  return files;
}

const files = walkDir(templatesDir);
let fixed = 0;

for (const file of files) {
  // Only fix page files and _components files (not files under _components themselves, since those were created fresh with correct paths already)
  // Actually, we need to fix all files that were restored from git and still have old import paths
  let content = fs.readFileSync(file, 'utf-8');
  const original = content;

  // Replace src/components/ with _components/ (preserving the relative depth)
  content = content.replace(/((?:\.\.\/)*)src\/components\//g, '$1_components/');

  // Replace src/lib/ with data/ (preserving the relative depth)
  content = content.replace(/((?:\.\.\/)*)src\/lib\//g, '$1data/');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Fixed: ${path.relative(templatesDir, file)}`);
    fixed++;
  }
}

console.log(`\nFixed ${fixed} files.`);
