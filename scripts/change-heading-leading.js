// scripts/change-heading-leading.js
const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, '../src/app/ko/templates'),
  path.join(__dirname, '../src/app/en/templates')
];

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts'))) {
      callback(filePath);
    }
  }
}

for (const targetDir of dirs) {
  if (!fs.existsSync(targetDir)) continue;
  walkDir(targetDir, (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    const searchPattern = /leading-\[1\.2\]/g;
    
    if (searchPattern.test(content)) {
      content = content.replace(searchPattern, 'leading-[1.0]');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated leading in: ${filePath}`);
    }
  });
}
console.log('Line height fix (1.0) completed.');
