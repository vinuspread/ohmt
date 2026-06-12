import fs from 'fs';
import path from 'path';

const templatesDir = path.resolve('src/app/templates');

// Templates that have src/components/ to flatten
const templateNames = [
  'furniture', 'furniture-ko',
  'ir', 'ir-ko',
  'magazine', 'magazine-ko',
  'newspaper', 'newspaper-ko',
  'portfolio', 'portfolio-ko',
  'sneaker', 'sneaker-ko',
];

for (const name of templateNames) {
  const dir = path.join(templatesDir, name);
  const srcComponentsDir = path.join(dir, 'src', 'components');
  const componentsDir = path.join(dir, '_components');
  const srcLibDir = path.join(dir, 'src', 'lib');
  const dataDir = path.join(dir, 'data');

  // Move src/components/* → _components/
  if (fs.existsSync(srcComponentsDir)) {
    if (!fs.existsSync(componentsDir)) {
      fs.mkdirSync(componentsDir, { recursive: true });
    }
    for (const entry of fs.readdirSync(srcComponentsDir, { withFileTypes: true })) {
      const src = path.join(srcComponentsDir, entry.name);
      const dest = path.join(componentsDir, entry.name);
      fs.renameSync(src, dest);
    }
    // Remove empty src/components
    fs.rmdirSync(srcComponentsDir);
    console.log(`  Moved src/components/ → _components/`);
  }

  // Move src/lib/* → data/
  if (fs.existsSync(srcLibDir)) {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    for (const entry of fs.readdirSync(srcLibDir, { withFileTypes: true })) {
      const src = path.join(srcLibDir, entry.name);
      const dest = path.join(dataDir, entry.name);
      fs.renameSync(src, dest);
    }
    fs.rmdirSync(srcLibDir);
    console.log(`  Moved src/lib/ → data/`);
  }
}

// Fix imports in all .tsx/.ts files
console.log('\nFixing imports...');
let fixed = 0;

for (const name of templateNames) {
  const dir = path.join(templatesDir, name);
  walkAndFix(dir, dir, () => { fixed++; });
}

// Also fix _components of OTHER templates that already had _components
// (airline, exhibition, etc.) — some may have old src/ imports too
for (const entry of fs.readdirSync(templatesDir, { withFileTypes: true })) {
  if (entry.isDirectory() && !templateNames.includes(entry.name)) {
    const dir = path.join(templatesDir, entry.name);
    walkAndFix(dir, dir, () => { fixed++; });
  }
}

console.log(`\nFixed ${fixed} files.`);

function walkAndFix(rootDir, dir, onFix) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules') {
      walkAndFix(rootDir, full, onFix);
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) && !full.includes('node_modules')) {
      fixFile(full, rootDir, onFix);
    }
  }
}

function fixFile(filePath, rootDir, onFix) {
  let content;
  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch {
    // skip binary/unreadable files
    return;
  }
  const original = content;

  // Replace src/components/ with _components/ (preserving relative depth)
  content = content.replace(/((?:\.\.\/)*)src\/components\//g, '$1_components/');

  // Replace src/lib/ with data/ (preserving relative depth)
  content = content.replace(/((?:\.\.\/)*)src\/lib\//g, '$1data/');

  // Handle specific case: files in furniture(-ko) translations dir that reference src
  content = content.replace(/((?:\.\.\/)*)src\/translations/g, '$1translations');
  content = content.replace(/((?:\.\.\/)*)src\/theme\.json/g, '$1theme.json');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    const rel = path.relative(rootDir, filePath);
    console.log(`  Fix: ${rel}`);
    onFix();
  }
}
