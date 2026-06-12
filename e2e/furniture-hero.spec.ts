import { test, expect } from "@playwright/test";

test.describe("Furniture Hero Section - Visual Consistency", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/templates/furniture");
    await page.waitForLoadState("networkidle");
  });

  test("desktop - text is on the left, image is on the right", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(500);

    // Text content should be visually left of the image
    const hero = page.locator("section").first();
    const heroBox = await hero.boundingBox();
    expect(heroBox).not.toBeNull();

    const textBlock = hero.locator("h1").first();
    const textBox = await textBlock.boundingBox();
    expect(textBox).not.toBeNull();

    const imageBlock = hero.locator("img").first();
    const imageBox = await imageBlock.boundingBox();
    expect(imageBox).not.toBeNull();

    // On desktop, text should be left of the image
    expect(textBox!.x + textBox!.width).toBeLessThan(imageBox!.x);
  });

  test("mobile - text is above the image (content-first)", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(500);

    const textBlock = page.locator("h1").first();
    const textBox = await textBlock.boundingBox();
    expect(textBox).not.toBeNull();

    const imageBlock = page.locator("section").first().locator("img").first();
    const imageBox = await imageBlock.boundingBox();
    expect(imageBox).not.toBeNull();

    // On mobile, text should be above the image
    expect(textBox!.y + textBox!.height).toBeLessThan(imageBox!.y);
  });

  test("hero fits in initial viewport on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(500);

    const hero = page.locator("section").first();
    const heroBox = await hero.boundingBox();
    expect(heroBox).not.toBeNull();

    // At minimum the hero should start at viewport top
    expect(heroBox!.y).toBeLessThanOrEqual(80);

    // CTA buttons should be visible without scrolling
    const ctaButton = hero.getByRole("button").first();
    await expect(ctaButton).toBeVisible();
  });

  test("navigation renders on a single line on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(500);

    const nav = page.locator("nav").first();
    const navBox = await nav.boundingBox();
    expect(navBox).not.toBeNull();

    // Nav height should be reasonable
    expect(navBox!.height).toBeLessThanOrEqual(80);
  });

  test("slider navigation controls are accessible", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(500);

    const prevBtn = page.locator("button").filter({ has: page.locator("svg") }).first();
    const nextBtn = page.locator("button").filter({ has: page.locator("svg") }).last();

    await expect(nextBtn).toBeVisible();

    // Click next and verify the slide changed
    const h1 = page.locator("h1").first();
    const initialText = await h1.textContent();
    await nextBtn.click();
    await page.waitForTimeout(600);
    const newText = await h1.textContent();
    expect(newText).not.toBe(initialText);
  });
});

test.describe("Furniture KO Hero Section - Visual Consistency", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/templates/furniture-ko");
    await page.waitForLoadState("networkidle");
  });

  test("desktop - text is on the left, image is on the right", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(500);

    const textBlock = page.locator("h1").first();
    const textBox = await textBlock.boundingBox();
    expect(textBox).not.toBeNull();

    const imageBlock = page.locator("section").first().locator("img").first();
    const imageBox = await imageBlock.boundingBox();
    expect(imageBox).not.toBeNull();

    expect(textBox!.x + textBox!.width).toBeLessThan(imageBox!.x);
  });

  test("mobile - text is above the image (content-first)", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(500);

    const textBlock = page.locator("h1").first();
    const textBox = await textBlock.boundingBox();
    expect(textBox).not.toBeNull();

    const imageBlock = page.locator("section").first().locator("img").first();
    const imageBox = await imageBlock.boundingBox();
    expect(imageBox).not.toBeNull();

    expect(textBox!.y + textBox!.height).toBeLessThan(imageBox!.y);
  });
});
