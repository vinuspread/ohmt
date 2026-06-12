// tests/ir-images.spec.ts
import { test, expect } from '@playwright/test';

const HOST = 'http://localhost:3000';

const irPages = [
  '/templates/ir',
  '/templates/ir/financials',
  '/templates/ir/governance',
  '/templates/ir/news',
  '/templates/ir/contact',
  '/templates/ir-ko',
  '/templates/ir-ko/financials',
  '/templates/ir-ko/governance',
  '/templates/ir-ko/news',
  '/templates/ir-ko/contact',
];

test('Check for broken images on IR and IR-KO templates', async ({ page }) => {
  const brokenImages: { page: string; src: string; reason: string }[] = [];

  // 네트워크 404/실패 감지
  page.on('response', (response) => {
    const url = response.url();
    const status = response.status();
    if (url.match(/\.(jpg|jpeg|png|gif|svg|webp)/i) && status >= 400) {
      brokenImages.push({
        page: page.url(),
        src: url,
        reason: `Network error: HTTP ${status}`,
      });
    }
  });

  for (const path of irPages) {
    const url = `${HOST}${path}`;
    console.log(`Checking page: ${url}`);
    
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 10000 });
      
      // 페이지 내 모든 img 태그 탐색 및 naturalWidth 검증
      const images = await page.locator('img');
      const count = await images.count();
      
      for (let i = 0; i < count; i++) {
        const img = images.nth(i);
        const src = await img.getAttribute('src');
        
        if (!src) {
          brokenImages.push({
            page: url,
            src: 'Missing src attribute',
            reason: 'img tag has no src',
          });
          continue;
        }

        // 브라우저 내부에서 실제 이미지 크기 검증
        const isLoaded = await img.evaluate((element: HTMLImageElement) => {
          return element.complete && element.naturalWidth > 0;
        });

        if (!isLoaded) {
          brokenImages.push({
            page: url,
            src,
            reason: 'Image failed to load (naturalWidth is 0 or complete is false)',
          });
        }
      }
    } catch (err: any) {
      console.error(`Error loading page ${url}:`, err.message);
    }
  }

  console.log('\n--- Broken Images Report ---');
  if (brokenImages.length > 0) {
    console.log(`Found ${brokenImages.length} broken images:`);
    brokenImages.forEach((img) => {
      console.log(`[Page] ${img.page}\n  -> [Src] ${img.src}\n  -> [Reason] ${img.reason}\n`);
    });
  } else {
    console.log('No broken images found! All images loaded successfully.');
  }
  console.log('----------------------------\n');

  expect(brokenImages.length).toBe(0);
});
