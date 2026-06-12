import fs from 'fs';
import path from 'path';

const root = path.resolve();

const pub = new Set();
function walk(dir, prefix) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) walk(path.join(dir, e.name), prefix + e.name + '/');
    else if (e.isFile() && /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(e.name)) pub.add(prefix + e.name);
  }
}
walk(path.join(root, 'public', 'templates'), '');

const missing = [];
function scan(dir) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory() && !e.name.startsWith('node_modules')) scan(path.join(dir, e.name));
    else if (e.isFile() && e.name.endsWith('.tsx')) {
      const lines = fs.readFileSync(path.join(dir, e.name), 'utf-8').split('\n');
      for (let i = 0; i < lines.length; i++) {
        const m = lines[i].match(/"(\/templates\/([^"`$]+\/[^\/"`$]+\.[a-zA-Z]+))"/);
        if (m) {
          const stripped = m[1].replace(/^\/templates\//, '');
          if (!pub.has(stripped)) missing.push({ path: stripped, file: path.relative(root, dir) + '/' + e.name, line: i + 1 });
        }
      }
    }
  }
}
scan(path.join(root, 'src', 'app', 'templates'));

if (missing.length === 0) {
  console.log('All hardcoded image references have matching files in public/templates/');
} else {
  for (const m of missing) console.log('MISSING: ' + m.path + '  (' + m.file + ':' + m.line + ')');
  console.log('\nTotal: ' + missing.length + ' missing images');
}
