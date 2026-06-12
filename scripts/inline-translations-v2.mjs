import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templatesDir = path.resolve(__dirname, '..', 'src', 'app', 'templates');

const templates = fs.readdirSync(templatesDir, { withFileTypes: true })
  .filter(e => e.isDirectory())
  .map(e => e.name);

function walkFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules') {
      files.push(...walkFiles(full));
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
      files.push(full);
    }
  }
  return files;
}

function formatJsonAsObjectLiteral(obj, indent = '  ') {
  const inner = (val, depth) => {
    const pad = indent.repeat(depth);
    const padInner = indent.repeat(depth + 1);
    if (val === null) return 'null';
    if (typeof val === 'string') {
      // Escape backticks, dollar signs, and backslashes for template literals
      const escaped = val
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\${/g, '\\${');
      return `\`${escaped}\``;
    }
    if (typeof val === 'number' || typeof val === 'boolean') return String(val);
    if (Array.isArray(val)) {
      if (val.length === 0) return '[]';
      const items = val.map(v => inner(v, depth + 1));
      if (items.length <= 3 && items.every(i => !i.includes('\n'))) {
        return `[${items.join(', ')}]`;
      }
      return `[\n${items.map(i => `${padInner}${i}`).join(',\n')}\n${pad}]`;
    }
    if (typeof val === 'object') {
      const keys = Object.keys(val);
      if (keys.length === 0) return '{}';
      const entries = keys.map(k => {
        const v = inner(val[k], depth + 1);
        return `${padInner}${JSON.stringify(k)}: ${v}`;
      });
      return `{\n${entries.join(',\n')}\n${pad}}`;
    }
    return JSON.stringify(val);
  };
  return inner(obj, 0);
}

for (const name of templates) {
  const tplDir = path.join(templatesDir, name);
  const translationsDir = path.join(tplDir, 'translations');
  const enJsonPath = path.join(translationsDir, 'en.json');

  if (!fs.existsSync(enJsonPath)) continue;

  console.log(`\n=== Processing: ${name} ===`);

  // Read en.json and convert to JS object literal
  const enData = JSON.parse(fs.readFileSync(enJsonPath, 'utf-8'));

  let foundTranslationFile = false;
  const tsxFiles = walkFiles(tplDir);

  for (const file of tsxFiles) {
    let content = fs.readFileSync(file, 'utf-8');
    const original = content;

    // Skip if no translation-related imports
    if (!content.includes('useTranslations') && !content.includes('getTranslation') && !content.includes('../translations') && !content.includes('./translations')) {
      continue;
    }

    foundTranslationFile = true;
    const rel = path.relative(tplDir, file);
    console.log(`  Processing: ${rel}`);

    // 1. Remove translation import line
    // import { useTranslations, getTranslation } from "../translations"
    // import { useTranslations } from "../translations"
    content = content.replace(/import\s*\{[^}]*useTranslations[^}]*\}\s*from\s*["'][^"']*translations["'];?\s*\n?/g, '');
    // import { getTranslation } from "../translations" (standalone)
    content = content.replace(/import\s*\{[^}]*getTranslation[^}]*\}\s*from\s*["'][^"']*translations["'];?\s*\n?/g, '');

    // 2. Remove unused imports (empty braces)
    content = content.replace(/import\s*\{\s*\}\s*from\s*["']next\/navigation["'];?\s*\n?/g, '');

    // 3. Replace `const lang = getTranslation(searchParams.get('lang'));`
    content = content.replace(/const\s+lang\s*=\s*getTranslation\s*\(\s*searchParams\s*\.\s*get\s*\(\s*['"]lang['"]\s*\)\s*\)\s*;?\s*\n?/g, '');

    // 4. Replace `const lang = langFromSearch || 'en';` or similar patterns
    content = content.replace(/const\s+lang\s*=\s*(langFromSearch|searchParams\.get\(['"]lang['"]\))\s*\|\|\s*['"]en['"]\s*;?\s*\n?/g, '');

    // 5. Detect if `lang` is still used somewhere after this point
    const langUsedElsewhere = /`[^`]*\$\{lang\}[^`]*`/.test(content) ||
      /searchParams\.get\(/.test(content) ||
      /[\s,;]lang[\s,;)\]]/.test(content);

    // 6. Replace `const t = useTranslations(lang);` or `const t = useTranslations('en');`
    // with the inlined en.json data
    const enObjectLiteral = formatJsonAsObjectLiteral(enData);
    
    // Replace `useTranslations(lang)` pattern
    content = content.replace(
      /const\s+t\s*=\s*useTranslations\s*\(\s*(lang|['"]en['"])\s*\)\s*;?\s*\n?/g,
      `const t = ${enObjectLiteral};\n`
    );

    // 7. Handle remaining `useTranslations` variants
    content = content.replace(
      /const\s+t\s*=\s*useTranslations\s*\([^)]*\)\s*;?\s*\n?/g,
      `const t = ${enObjectLiteral};\n`
    );

    // 8. Clean up: if `lang` was used in template literals like `?lang=${lang}`, remove the query param
    if (content.includes('?lang=${lang}')) {
      content = content.replace(/\?lang=\$\{lang\}/g, '');
    }
    if (content.includes('?lang=') && content.includes('lang')) {
      content = content.replace(/\?lang=\$\{lang\}/g, '');
    }

    // 9. Remove `const searchParams = useSearchParams();` if searchParams no longer referenced
    if (!content.includes('searchParams')) {
      content = content.replace(/const\s+searchParams\s*=\s*useSearchParams\s*\(\s*\)\s*;?\s*\n?/g, '');
    }

    // 10. Remove `useSearchParams` from import if no longer referenced
    if (!content.includes('useSearchParams')) {
      // Remove `useSearchParams` from import list
      content = content.replace(/,\s*useSearchParams/g, '');
      content = content.replace(/\buseSearchParams\s*,\s*/g, '');
      // Remove empty import from next/navigation
      content = content.replace(/import\s*\{\s*\}\s*from\s*["']next\/navigation["'];?\s*\n?/g, '');
    }

    // 11. Clean up any remaining `getTranslation` references in code
    if (!content.includes('getTranslation(')) {
      // Remove from imports (already handled above)
    }

    // 12. Clean up double blank lines
    content = content.replace(/\n{4,}/g, '\n\n\n');
    content = content.replace(/\n{3,}/g, '\n\n');

    if (content !== original) {
      fs.writeFileSync(file, content, 'utf-8');
      console.log(`    Modified`);
    }
  }

  // If any tsx files used translations, delete the translations directory
  if (foundTranslationFile) {
    // But check if any file still imports from translations (shouldn't happen)
    const stillReferenced = tsxFiles.some(f => {
      const c = fs.readFileSync(f, 'utf-8');
      return c.includes('translations');
    });
    if (!stillReferenced) {
      fs.rmSync(translationsDir, { recursive: true, force: true });
      console.log(`  Deleted: translations/`);
    } else {
      console.log(`  WARNING: translations/ still referenced, NOT deleting`);
    }
  }
}

console.log('\nDone!');
