const { chromium } = require('playwright');

async function captureScreenshots() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport
  await page.setViewportSize({ width: 1920, height: 1080 });

  const baseUrl = 'http://localhost:3000/templates/magazine-ko';

  try {
    console.log('Loading magazine-ko...');
    await page.goto(baseUrl, { waitUntil: 'networkidle' });

    // Full page screenshot
    console.log('✓ Full page screenshot');
    await page.screenshot({ path: 'C:\\temp\\01-magazine-ko-full.png', fullPage: true });

    // Hero section (scroll to top first)
    console.log('✓ Scrolling to Hero...');
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'C:\\temp\\02-magazine-ko-hero.png' });

    // Featured section
    console.log('✓ Scrolling to Featured Grid...');
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'C:\\temp\\03-magazine-ko-featured.png' });

    // Editors Picks
    console.log('✓ Scrolling to Editors Picks...');
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'C:\\temp\\04-magazine-ko-editors.png' });

    // Latest Stories
    console.log('✓ Scrolling to Latest Stories...');
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'C:\\temp\\05-magazine-ko-latest.png' });

    // Newsletter
    console.log('✓ Scrolling to Newsletter...');
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'C:\\temp\\06-magazine-ko-newsletter.png' });

    console.log('\n✅ 스크린샷 캡처 완료!');
    console.log('📁 파일 위치: C:\\temp\\0X-magazine-ko-*.png\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

captureScreenshots();
