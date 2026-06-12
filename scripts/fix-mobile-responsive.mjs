import fs from 'fs';
import path from 'path';

const TEMPLATES_DIR = new URL('../src/app/templates', import.meta.url).pathname.replace(/^\//, '');

const sectionPaddingMap = {
  'py-36': 'py-16 md:py-36',
  'py-32': 'py-16 md:py-32',
  'py-28': 'py-14 md:py-28',
  'py-24': 'py-12 md:py-24',
  'py-20': 'py-10 md:py-20',
  'pt-36': 'pt-16 md:pt-36',
  'pt-32': 'pt-16 md:pt-32',
  'pt-28': 'pt-14 md:pt-28',
  'pt-24': 'pt-12 md:pt-24',
  'pb-36': 'pb-16 md:pb-36',
  'pb-32': 'pb-16 md:pb-32',
  'pb-28': 'pb-14 md:pb-28',
  'pb-24': 'pb-12 md:pb-24',
};

const headingFontMap = {
  'text-[5rem]':   'text-[2.2rem] md:text-[5rem]',
  'text-[4.5rem]': 'text-[2rem] md:text-[4.5rem]',
  'text-[4rem]':   'text-[1.9rem] md:text-[4rem]',
  'text-[3.5rem]': 'text-[1.8rem] md:text-[3.5rem]',
  'text-[3rem]':   'text-[1.7rem] md:text-[3rem]',
  'text-[2.8rem]': 'text-[1.6rem] md:text-[2.8rem]',
  'text-[2.5rem]': 'text-[1.5rem] md:text-[2.5rem]',
  'text-[80px]':   'text-[36px] md:text-[80px]',
  'text-[72px]':   'text-[32px] md:text-[72px]',
  'text-[64px]':   'text-[30px] md:text-[64px]',
  'text-[56px]':   'text-[28px] md:text-[56px]',
  'text-[48px]':   'text-[26px] md:text-[48px]',
  'text-[36px]':   'text-[22px] md:text-[36px]',
};

// en 템플릿의 body/description leading 값 → 1.4
// ko는 그대로 유지 (1.7~1.9가 한글 본문에 적절)
const bodyLeadingTargets = [
  'leading-relaxed',   // 1.625
  'leading-loose',     // 2.0
  'leading-[1.9]',
  'leading-[1.8]',
  'leading-[1.7]',
  'leading-[1.6]',
];

function alreadyResponsive(line, cls) {
  const escaped = cls.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(?:sm|md|lg|xl):${escaped}`).test(line);
}

function processFile(filePath, isKo) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  const lines = content.split('\n');
  const result = lines.map(line => {
    let newLine = line;

    // 섹션 여백
    for (const [from, to] of Object.entries(sectionPaddingMap)) {
      const re = new RegExp(`(?<![a-z:])${from.replace(/[-[\]]/g, '\\$&')}(?![0-9a-z])`, 'g');
      if (re.test(newLine) && !alreadyResponsive(newLine, from)) {
        newLine = newLine.replace(new RegExp(`(?<![a-z:])${from.replace(/[-[\]]/g, '\\$&')}(?![0-9a-z])`, 'g'), to);
      }
    }

    // 헤딩 폰트 크기 (h1/h2/h3 줄만)
    if (/<h[123][\s>]/.test(newLine)) {
      for (const [from, to] of Object.entries(headingFontMap)) {
        if (newLine.includes(from) && !alreadyResponsive(newLine, from)) {
          newLine = newLine.replaceAll(from, to);
        }
      }
    }

    // en 템플릿 body leading → 1.4
    if (!isKo && !/<h[123][\s>]/.test(newLine)) {
      for (const target of bodyLeadingTargets) {
        if (newLine.includes(target)) {
          newLine = newLine.replaceAll(target, 'leading-[1.4]');
        }
      }
    }

    if (newLine !== line) changed = true;
    return newLine;
  });

  if (changed) fs.writeFileSync(filePath, result.join('\n'), 'utf8');
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

let grandTotal = 0;
for (const template of templates) {
  const isKo = template.endsWith('-ko');
  const files = findTsx(path.join(TEMPLATES_DIR, template));
  let count = 0;
  for (const file of files) {
    if (processFile(file, isKo)) count++;
  }
  if (count > 0) {
    console.log(`✅ ${template}: ${count}개 파일`);
    grandTotal += count;
  }
}
console.log(`\n완료: 총 ${grandTotal}개 파일 수정`);
