import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '../.tmp-screenshots');

import fs from 'fs';
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const BASE = 'http://localhost:3000';

async function shot(page, url, filename, scrollY = 0) {
  await page.goto(url, { waitUntil: 'networkidle' });
  if (scrollY) await page.evaluate(y => window.scrollTo(0, y), scrollY);
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(OUT, filename), fullPage: false });
  console.log('✓', filename);
}

const browser = await chromium.launch({
  executablePath: 'C:\\Users\\nonte\\AppData\\Local\\ms-playwright\\chromium-1223\\chrome-win64\\chrome.exe',
});
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

// Home page — various scroll positions
await shot(page, BASE + '/en/templates/multi-shop', '01-home-hero.png');
await page.evaluate(() => window.scrollTo(0, 900));
await page.waitForTimeout(800);
await page.screenshot({ path: path.join(OUT, '02-home-category.png') });
console.log('✓ 02-home-category.png');

await page.evaluate(() => window.scrollTo(0, 1800));
await page.waitForTimeout(800);
await page.screenshot({ path: path.join(OUT, '03-home-newarrivals.png') });
console.log('✓ 03-home-newarrivals.png');

await page.evaluate(() => window.scrollTo(0, 3200));
await page.waitForTimeout(800);
await page.screenshot({ path: path.join(OUT, '04-home-bestsellers.png') });
console.log('✓ 04-home-bestsellers.png');

await page.evaluate(() => window.scrollTo(0, 5000));
await page.waitForTimeout(800);
await page.screenshot({ path: path.join(OUT, '05-home-reviews-blog.png') });
console.log('✓ 05-home-reviews-blog.png');

// Full page
await page.goto(BASE + '/en/templates/multi-shop', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
await page.screenshot({ path: path.join(OUT, '06-home-full.png'), fullPage: true });
console.log('✓ 06-home-full.png');

// Shop page
await shot(page, BASE + '/en/templates/multi-shop/shop', '07-shop.png');

// Product page
await shot(page, BASE + '/en/templates/multi-shop/product/1', '08-product.png');

// Mobile home
await page.setViewportSize({ width: 390, height: 844 });
await shot(page, BASE + '/en/templates/multi-shop', '09-mobile-home.png');

await browser.close();
console.log('\nAll screenshots saved to .tmp-screenshots/');
