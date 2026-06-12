import fs from 'fs';
import path from 'path';

const TEMPLATES_DIR = new URL('../src/app/templates', import.meta.url).pathname.replace(/^\//, '');

// 헤딩 태그 + 컴포넌트에서 leading 값을 교체
// h1, h2, h3 태그가 있는 줄의 leading-[X] 교체
function processFile(filePath, isKo) {
  const target = isKo ? '1.5' : '1.1';
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // h1, h2, h3 요소가 있는 줄에서 leading-[N] 교체
  const lines = content.split('\n');
  const result = lines.map(line => {
    // 헤딩 태그가 포함된 줄인지 확인
    if (!/<h[123][\s>]/.test(line) && !/className=.*<h[123]/.test(line)) return line;
    // leading-[N] 패턴 교체 (단, leading-none, leading-tight 등 키워드는 제외)
    const newLine = line.replace(/leading-\[([0-9.]+)\]/g, (match, val) => {
      const num = parseFloat(val);
      // 바디 텍스트 leading (1.6 이상)은 건드리지 않음
      if (num >= 1.4 && !isKo) return match;
      if (num >= 1.7) return match;
      return `leading-[${target}]`;
    });
    if (newLine !== line) changed = true;
    return newLine;
  });

  if (changed) {
    fs.writeFileSync(filePath, result.join('\n'), 'utf8');
  }
  return changed;
}

function findTsx(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) files.push(...findTsx(full));
    else if (entry.endsWith('.tsx')) files.push(full);
  }
  return files;
}

const templates = fs.readdirSync(TEMPLATES_DIR).filter(d =>
  fs.statSync(path.join(TEMPLATES_DIR, d)).isDirectory()
);

let total = 0;
for (const template of templates) {
  const isKo = template.endsWith('-ko');
  const files = findTsx(path.join(TEMPLATES_DIR, template));
  let count = 0;
  for (const file of files) {
    if (processFile(file, isKo)) count++;
  }
  if (count > 0) {
    console.log(`✅ ${template} (${isKo ? 'ko→1.5' : 'en→1.1'}): ${count}개 파일`);
    total += count;
  }
}
console.log(`\n완료: 총 ${total}개 파일 수정`);
