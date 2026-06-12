import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templatesDir = path.resolve(__dirname, '..', 'src', 'app', 'templates');

function flattenJson(obj, prefix = '') {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null) {
      Object.assign(result, flattenJson(value, fullKey));
    } else {
      result[fullKey] = String(value);
    }
  }
  return result;
}

function walkFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules') {
      files.push(...walkFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
      files.push(full);
    }
  }
  return files;
}

const templates = fs.readdirSync(templatesDir, { withFileTypes: true })
  .filter(e => e.isDirectory())
  .map(e => e.name);

for (const name of templates) {
  const tplDir = path.join(templatesDir, name);
  const translationsDir = path.join(tplDir, 'translations');
  const enJsonPath = path.join(translationsDir, 'en.json');

  if (!fs.existsSync(enJsonPath)) continue;

  console.log(`\n=== Processing: ${name} ===`);

  // Read and flatten the translation map
  const enData = JSON.parse(fs.readFileSync(enJsonPath, 'utf-8'));
  const flatMap = flattenJson(enData);

  // Find all .tsx files in this template
  const tsxFiles = walkFiles(tplDir).filter(f => !f.includes('node_modules'));

  for (const file of tsxFiles) {
    let content = fs.readFileSync(file, 'utf-8');
    const original = content;

    // 1. Replace {t.KEY} patterns with actual text
    // Sort keys by length descending to match more specific keys first
    const sortedKeys = Object.keys(flatMap).sort((a, b) => b.length - a.length);
    for (const key of sortedKeys) {
      const value = flatMap[key];
      // Replace {t.KEY} with the text (in JSX or template literals)
      content = content.replace(new RegExp(`\\{t\\.${escapeRegex(key)}\\}`, 'g'), value);
    }

    // 2. Remove translation import lines
    content = content.replace(
      /import\s+\{[^}]*useTranslations[^}]*\}\s+from\s+["'][^"']*translations["'];\s*\n?/g,
      ''
    );
    content = content.replace(
      /import\s+\{[^}]*getTranslation[^}]*\}\s+from\s+["'][^"']*translations["'];\s*\n?/g,
      ''
    );

    // 3. Remove getTranslation + useTranslations setup
    content = content.replace(
      /const\s+lang\s*=\s*getTranslation\s*\(\s*searchParams\s*\.\s*get\s*\(\s*['"]lang['"]\s*\)\s*\)\s*;\s*\n?/g,
      ''
    );
    content = content.replace(
      /const\s+t\s*=\s*useTranslations\s*\(\s*lang\s*\)\s*;\s*\n?/g,
      ''
    );
    // Also handle hardcoded useTranslations('en')
    content = content.replace(
      /const\s+t\s*=\s*useTranslations\s*\(\s*['"]en['"]\s*\)\s*;\s*\n?/g,
      ''
    );

    // 4. Clean up - remove searchParams destructuring if lang was the only use
    // This is tricky - only do if searchParams is no longer referenced
    // Simple pass: remove `const searchParams = useSearchParams();` if no more references
    if (!content.includes('searchParams')) {
      content = content.replace(
        /const\s+searchParams\s*=\s*useSearchParams\s*\(\s*\)\s*;\s*\n?/g,
        ''
      );
      // Also remove useSearchParams from imports if no longer needed
      if (!content.includes('useSearchParams')) {
        content = content.replace(
          /,\s*useSearchParams\b/g, ''
        );
        content = content.replace(
          /\buseSearchParams\s*,\s*/g, ''
        );
        content = content.replace(
          /import\s+\{\s*\}\s+from\s+["']next\/navigation["'];\s*\n?/g, ''
        );
      }
    }

    // 5. Remove import of getTranslation if no longer used
    if (!content.includes('getTranslation')) {
      content = content.replace(
        /,\s*getTranslation\b/g, ''
      );
      content = content.replace(
        /\bgetTranslation\s*,\s*/g, ''
      );
    }

    // 6. Clean up empty imports
    content = content.replace(/import\s+\{\s*\}\s+from\s+["'][^"']*["'];\s*\n?/g, '');

    // 7. Clean up double blank lines
    content = content.replace(/\n{3,}/g, '\n\n');

    if (content !== original) {
      fs.writeFileSync(file, content, 'utf-8');
      const rel = path.relative(tplDir, file);
      console.log(`  Modified: ${rel}`);
    }
  }

  // 8. Delete the translations directory
  fs.rmSync(translationsDir, { recursive: true, force: true });
  console.log(`  Deleted: translations/`);
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

console.log('\nDone!');
