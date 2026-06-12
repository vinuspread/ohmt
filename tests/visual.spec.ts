import { test } from '@playwright/test';

test('capture screenshots', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });

  // 1. Studio Template
  console.log('Navigating to Studio...');
  try {
    await page.goto('http://localhost:44018/templates/studio', { waitUntil: 'networkidle', timeout: 15000 });
    await page.screenshot({ path: 'C:/Users/nonte/.gemini/antigravity-ide/brain/0bd9326c-6dca-473a-99af-4df9e52f4bff/studio_page_screenshot.png' });
    console.log('Saved Studio page screenshot!');
  } catch (err: any) {
    console.error('Studio screenshot error:', err.message);
  }

  // 2. Magazine Template
  console.log('Navigating to Magazine...');
  try {
    await page.goto('http://localhost:44018/templates/magazine', { waitUntil: 'networkidle', timeout: 15000 });
    await page.screenshot({ path: 'C:/Users/nonte/.gemini/antigravity-ide/brain/0bd9326c-6dca-473a-99af-4df9e52f4bff/magazine_page_screenshot.png' });
    console.log('Saved Magazine page screenshot!');
  } catch (err: any) {
    console.error('Magazine screenshot error:', err.message);
  }
});
