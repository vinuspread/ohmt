import fs from 'fs';
import path from 'path';

const TEMPLATES_DIR = new URL('../src/app/templates', import.meta.url).pathname.replace(/^\//, '');

const templates = fs.readdirSync(TEMPLATES_DIR).filter(d =>
  fs.statSync(path.join(TEMPLATES_DIR, d)).isDirectory()
);

function extractColorMap(themePath) {
  const content = fs.readFileSync(themePath, 'utf8');
  const map = new Map(); // lowercase hex → css var name
  const re = /--(color[\w-]+):\s*#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})\b/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const varName = `--${m[1]}`;
    const hex = m[2].toLowerCase();
    // expand 3-digit hex to 6-digit
    const hex6 = hex.length === 3
      ? hex.split('').map(c => c + c).join('')
      : hex;
    if (!map.has(hex6)) map.set(hex6, varName);
  }
  return map;
}

function findTsx(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) files.push(...findTsx(full));
    else if (entry.endsWith('.tsx') || entry.endsWith('.ts')) files.push(full);
  }
  return files;
}

let grandTotal = 0;

for (const template of templates) {
  const templateDir = path.join(TEMPLATES_DIR, template);
  let themePath = path.join(templateDir, 'theme.css');

  // en 템플릿에 theme.css 없으면 ko 버전 참조
  if (!fs.existsSync(themePath)) {
    const koTheme = path.join(TEMPLATES_DIR, `${template}-ko`, 'theme.css');
    if (fs.existsSync(koTheme)) themePath = koTheme;
    else { console.log(`⚠️  ${template}: theme.css 없음, 건너뜀`); continue; }
  }

  const colorMap = extractColorMap(themePath);
  if (colorMap.size === 0) { console.log(`⚠️  ${template}: 색상 변수 없음`); continue; }

  const files = findTsx(templateDir);
  let templateTotal = 0;

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    for (const [hex6, varName] of colorMap) {
      // case-insensitive replacement of #XXXXXX
      const re = new RegExp(`#${hex6}`, 'gi');
      if (!re.test(content)) continue;
      content = content.replace(new RegExp(`#${hex6}`, 'gi'), `var(${varName})`);
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      const rel = path.relative(TEMPLATES_DIR, file);
      templateTotal++;
    }
  }

  grandTotal += templateTotal;
  console.log(`✅ ${template}: ${templateTotal}개 파일 수정 (${colorMap.size}개 색상 변수)`);
}

console.log(`\n완료: 총 ${grandTotal}개 파일 수정`);
