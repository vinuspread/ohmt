import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/nonte/.gemini/antigravity-ide/brain/c32bbfe0-84db-4003-a787-172adc8b6c6e';
const destDir = 'E:/Work/ohmytemplate/public/templates/multi-shop';

// Map target filenames to their generated source names in the brain directory (excluding timestamp/extension)
const mappings = {
  'hero-bg.jpg': 'hero_bg',
  'hero-model.jpg': 'hero_model',
  'category-accessories.jpg': 'category_accessories',
  'category-footwear.jpg': 'category_footwear',
  'category-women.jpg': 'category_women',
  'category-men.jpg': 'category_men',
  'product-01.jpg': 'product_01',
  'product-02.jpg': 'product_02',
  'product-03.jpg': 'product_03',
  'product-04.jpg': 'product_04',
  'product-05.jpg': 'product_05',
  'product-06.jpg': 'product_06',
  'product-07.jpg': 'product_07',
  'product-08.jpg': 'product_08',
  'product-09.jpg': 'product_09',
  'product-10.jpg': 'product_10',
  'product-11.jpg': 'product_11',
  
  // Fallbacks due to quota exhaustion
  'about-brand.jpg': 'hero_model', // High-fashion model shot
  'team-01.jpg': 'category_women', // Sofia Laurent profile
  'team-02.jpg': 'category_men', // James Avery profile
  'team-03.jpg': 'category_women', // Mia Chen profile
  'blog-01.jpg': 'category_accessories', // Style guide thumbnail
  'blog-02.jpg': 'product_02', // Canvas bag for sustainable fashion
  'blog-03.jpg': 'category_men', // Men's wardrobe checklist thumbnail
  'thumbnail.jpg': 'hero_bg', // Template showcase/mockup thumbnail
};

// Read files in brain directory
const files = fs.readdirSync(brainDir);

Object.entries(mappings).forEach(([targetName, sourcePrefix]) => {
  // Find matching file in brainDir
  const sourceFile = files.find(f => f.startsWith(sourcePrefix + '_') && f.endsWith('.png'));
  if (sourceFile) {
    const srcPath = path.join(brainDir, sourceFile);
    const destPath = path.join(destDir, targetName);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${sourceFile} -> ${targetName}`);
  } else {
    // If no direct file found (e.g. fallback mapping is used), try to find the actual source prefix file
    const actualSourceFile = files.find(f => f.startsWith(sourcePrefix + '_') && f.endsWith('.png'));
    if (actualSourceFile) {
      const srcPath = path.join(brainDir, actualSourceFile);
      const destPath = path.join(destDir, targetName);
      fs.copyFileSync(srcPath, destPath);
      console.log(`[FALLBACK] Copied ${actualSourceFile} -> ${targetName}`);
    } else {
      console.error(`ERROR: Could not find source file for prefix: ${sourcePrefix}`);
    }
  }
});

console.log('All images deployed successfully!');
