const { chromium } = require('playwright');

async function captureAllKoHeros() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });

  const templates = [
    'furniture-ko',
    'fashion-ko',
    'sneaker-ko',
    'airline-ko'
  ];

  try {
    for (const template of templates) {
      const url = `http://localhost:3000/templates/${template}`;
      console.log(`📸 Capturing ${template}...`);

      await page.goto(url, { waitUntil: 'networkidle', timeout: 10000 });
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(500);

      const fileName = `C:\\temp\\hero-${template}.png`;
      await page.screenshot({ path: fileName });
      console.log(`   ✓ ${fileName}`);
    }

    console.log('\n✅ 모든 KO 템플릿 Hero 캡처 완료!\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

captureAllKoHeros();
