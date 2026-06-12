// scripts/fix-all-template-paths.js
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../src/app/ko/templates');

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.json'))) {
      callback(filePath);
    }
  }
}

function getTemplateName(filePath) {
  // src/app/ko/templates/[templateName]/...
  const relative = path.relative(targetDir, filePath);
  const parts = relative.split(path.sep);
  return parts[0];
}

walkDir(targetDir, (filePath) => {
  const templateName = getTemplateName(filePath);
  if (!templateName) return;

  let content = fs.readFileSync(filePath, 'utf8');
  const searchPattern = /\/ko\/templates\/\//g;
  
  if (searchPattern.test(content)) {
    const replacement = `/templates/${templateName}/`;
    content = content.replace(searchPattern, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed paths in: ${filePath} (template: ${templateName})`);
  }
});
console.log('Template paths fix completed.');
