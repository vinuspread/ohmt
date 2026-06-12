import fs from 'fs';
import path from 'path';

const templatesDir = path.resolve('src/app/templates');

function walkDir(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDir(full));
    } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
      files.push(full);
    }
  }
  return files;
}

let fixed = 0;

for (const file of walkDir(templatesDir)) {
  if (!file.includes('_components')) continue;

  let content = fs.readFileSync(file, 'utf-8');
  const original = content;

  // 1. Remove one ../ depth from relative imports (files moved up by 1 level)
  content = content.replace(
    /((?:from\s+["']))((?:\.\.\/){2,})([^"']+["'])/g,
    (match, prefix, dots, rest) => {
      const newDots = dots.replace(/^\.\.\//, '');
      return prefix + newDots + rest;
    }
  );

  // 2. Rename lib/ to data/ in imports (src/lib/ was moved to data/)
  content = content.replace(/((?:from\s+["']))((?:\.\.\/)*)lib\/([^"']*["'])/g, (match, prefix, dots, rest) => {
    return prefix + dots + 'data/' + rest;
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`  Fix: ${path.relative(templatesDir, file)}`);
    fixed++;
  }
}

// 3. Handle furniture-ko: move data/t.ts to lib/t.ts
const fukoData = path.join(templatesDir, 'furniture-ko', 'data', 't.ts');
const fukoLib = path.join(templatesDir, 'furniture-ko', 'lib');
const fukoLibFile = path.join(fukoLib, 't.ts');
if (fs.existsSync(fukoData)) {
  if (!fs.existsSync(fukoLib)) fs.mkdirSync(fukoLib, { recursive: true });
  fs.renameSync(fukoData, fukoLibFile);
  console.log('  Move: data/t.ts → lib/t.ts');
}

console.log(`\nFixed ${fixed} files.`);
