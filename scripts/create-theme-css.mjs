import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templatesDir = path.resolve(__dirname, '..', 'src', 'app', 'templates');

const templates = fs.readdirSync(templatesDir, { withFileTypes: true })
  .filter(e => e.isDirectory())
  .map(e => e.name);

// Determine if a color is dark (luminance < 0.5)
function isDark(hex) {
  if (!hex || typeof hex !== 'string') return null;
  const clean = hex.replace('#', '');
  if (clean.length < 6) return null;
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  if (isNaN(r) || isNaN(g) || isNaN(b)) return null;
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.5;
}

function generateCSS(themeJson, templateName) {
  const p = themeJson.theme.palette;
  const t = themeJson.theme.typography;
  const s = themeJson.theme.spacing;

  return `/* ${templateName} Design Tokens */
:root {
  --color-bg: ${p.primary};
  --color-text: ${p.text.main};
  --color-accent: ${p.accent};
  --color-muted: ${p.text.muted};
  --color-border: ${p.ui.border};
  --font-heading: ${t.heading.font};
  --font-body: ${t.body.font};
}
`;
}

function updateLayout(layoutPath, themeJsonPath) {
  let content = fs.readFileSync(layoutPath, 'utf-8');

  // Calculate relative path from layout.tsx to theme.css
  const layoutDir = path.dirname(layoutPath);
  const relPath = path.relative(layoutDir, themeJsonPath.replace('theme.json', 'theme.css'));
  const importPath = relPath.replace(/\\/g, '/');

  const importStatement = `import './theme.css';`;

  // Skip if already imported
  if (content.includes(importStatement)) {
    return false;
  }

  // Add import after the last import statement or after 'use client'
  const lines = content.split('\n');
  let lastImportIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) {
      lastImportIdx = i;
    }
  }

  if (lastImportIdx >= 0) {
    lines.splice(lastImportIdx + 1, 0, importStatement);
  } else {
    // No imports, add after 'use client' or at top
    if (lines[0].includes('use client') || lines[0].includes("use client")) {
      lines.splice(1, 0, '', importStatement);
    } else {
      lines.unshift(importStatement);
    }
  }

  const newContent = lines.join('\n');
  if (newContent !== content) {
    fs.writeFileSync(layoutPath, newContent, 'utf-8');
    return true;
  }
  return false;
}

let countCSS = 0;
let countLayout = 0;

for (const name of templates) {
  const tplDir = path.join(templatesDir, name);
  const themeJsonPath = path.join(tplDir, 'theme.json');
  const layoutPath = path.join(tplDir, 'layout.tsx');

  if (!fs.existsSync(themeJsonPath)) continue;

  console.log(`\n=== ${name} ===`);

  // 1. Read theme.json
  const themeData = JSON.parse(fs.readFileSync(themeJsonPath, 'utf-8'));
  if (!themeData.theme) {
    console.log('  No theme data, skipping');
    continue;
  }

  // 2. Generate theme.css
  const css = generateCSS(themeData, name);
  const cssPath = path.join(tplDir, 'theme.css');
  fs.writeFileSync(cssPath, css, 'utf-8');
  countCSS++;
  console.log(`  Created theme.css`);

  // 3. Update layout.tsx
  if (fs.existsSync(layoutPath)) {
    const updated = updateLayout(layoutPath, themeJsonPath);
    if (updated) {
      countLayout++;
      console.log(`  Updated layout.tsx with import`);
    } else {
      console.log(`  layout.tsx already has import`);
    }
  } else {
    console.log(`  No layout.tsx found`);
  }
}

console.log(`\nDone! Created ${countCSS} theme.css files, updated ${countLayout} layout.tsx files`);
