// scripts/check-images.mjs
import { chromium } from 'playwright';

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

async function run() {
  console.log('Launching Chromium...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const brokenImages = [];

  // Capture failed network responses for images
  page.on('response', (response) => {
    const url = response.url();
    const status = response.status();
    if (url.match(/\.(jpg|jpeg|png|gif|svg|webp)/i) && status >= 400) {
      brokenImages.push({
        page: page.url(),
        src: url,
        reason: `Network HTTP ${status}`,
      });
    }
  });

  for (const path of irPages) {
    const url = `${HOST}${path}`;
    console.log(`Checking page: ${url}`);
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
      
      // Take screenshots of the governance pages for visual multimodal verification
      if (path === '/templates/ir/governance') {
        await page.screenshot({ path: 'C:/Users/nonte/.gemini/antigravity-ide/brain/e6a49e41-9c61-468c-ba9c-ff400581bbdb/governance_en.png' });
        console.log('Saved Governance EN page screenshot!');
      }
      if (path === '/templates/ir-ko/governance') {
        await page.screenshot({ path: 'C:/Users/nonte/.gemini/antigravity-ide/brain/e6a49e41-9c61-468c-ba9c-ff400581bbdb/governance_ko.png' });
        console.log('Saved Governance KO page screenshot!');
      }
      
      // Evaluate image loading properties directly in the page context
      const images = await page.$$eval('img', (elements) => {
        return elements.map(el => ({
          src: el.getAttribute('src') || '',
          complete: el.complete,
          naturalWidth: el.naturalWidth
        }));
      });

      for (const img of images) {
        if (!img.src) {
          brokenImages.push({
            page: url,
            src: 'Missing src',
            reason: 'img tag has no src attribute',
          });
          continue;
        }

        // Avoid checking tiny/invisible spacer pixels or tracker pixels (usually 1x1 or less)
        if (img.naturalWidth === 0) {
          brokenImages.push({
            page: url,
            src: img.src,
            reason: 'Image not rendered (naturalWidth is 0)',
          });
        }
      }
    } catch (err) {
      console.error(`Error checking ${url}:`, err.message);
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

  await browser.close();
  process.exit(brokenImages.length > 0 ? 1 : 0);
}

run().catch(err => {
  console.error('Execution failed:', err);
  process.exit(1);
});
