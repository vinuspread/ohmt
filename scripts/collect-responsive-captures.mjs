import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { chromium } from "@playwright/test";

const ROOT = process.cwd();

function parseArgs(argv) {
  const options = {
    baseUrl: "http://127.0.0.1:3000",
    concurrency: 4,
    desktopSource: "",
    outputDir: path.join(ROOT, "output", "playwright", "instagram-templates"),
    overwrite: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--base-url") options.baseUrl = argv[++index];
    else if (arg === "--concurrency") options.concurrency = Number(argv[++index]);
    else if (arg === "--desktop-source") options.desktopSource = path.resolve(argv[++index]);
    else if (arg === "--output") options.outputDir = path.resolve(argv[++index]);
    else if (arg === "--overwrite") options.overwrite = true;
  }

  if (!options.desktopSource) throw new Error("--desktop-source 폴더가 필요합니다.");
  if (!Number.isFinite(options.concurrency) || options.concurrency < 1) {
    throw new Error("--concurrency 값은 1 이상의 숫자여야 합니다.");
  }
  return options;
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function targetFromDesktopFile(fileName) {
  const extension = path.extname(fileName);
  const stem = path.basename(fileName, extension);
  const [template, ...segments] = stem.split("__");
  if (!/^OHMT\d+-/.test(template)) return null;
  const routeSegments = segments.length === 1 && segments[0] === "home" ? [] : segments;
  return {
    template,
    route: `/ko/templates/${[template, ...routeSegments].join("/")}`,
    stem,
  };
}

async function settlePage(page) {
  await page.waitForLoadState("domcontentloaded");
  await page.waitForLoadState("networkidle", { timeout: 12_000 }).catch(() => {});
  await page.evaluate(async () => {
    await document.fonts?.ready;
    const images = [...document.images];
    await Promise.all(images.map((image) => image.complete
      ? Promise.resolve()
      : new Promise((resolve) => {
          image.addEventListener("load", resolve, { once: true });
          image.addEventListener("error", resolve, { once: true });
          setTimeout(resolve, 6_000);
        })));

    const step = Math.max(500, Math.floor(window.innerHeight * 0.8));
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 40));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(500);
}

async function runPool(items, concurrency, worker) {
  let cursor = 0;
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      await worker(items[index], index);
    }
  }));
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  await fs.mkdir(options.outputDir, { recursive: true });

  const sourceFiles = (await fs.readdir(options.desktopSource))
    .filter((fileName) => /\.(jpe?g|png|webp)$/i.test(fileName))
    .sort();
  const targets = sourceFiles
    .map((fileName) => ({ fileName, target: targetFromDesktopFile(fileName) }))
    .filter((item) => item.target);

  for (const { fileName, target } of targets) {
    const sourcePath = path.join(options.desktopSource, fileName);
    const desktopPath = path.join(options.outputDir, `${target.stem}--desktop${path.extname(fileName).toLowerCase()}`);
    if (options.overwrite || !await exists(desktopPath)) await fs.copyFile(sourcePath, desktopPath);
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    reducedMotion: "reduce",
  });
  const results = [];

  try {
    await runPool(targets, options.concurrency, async ({ target }, index) => {
      const mobileFile = `${target.stem}--mobile.jpg`;
      const mobilePath = path.join(options.outputDir, mobileFile);
      const url = new URL(target.route, options.baseUrl).toString();

      if (!options.overwrite && await exists(mobilePath)) {
        results.push({ ...target, file: mobileFile, url, status: "existing" });
        return;
      }

      const page = await context.newPage();
      const record = { ...target, file: mobileFile, url, status: "ok" };
      try {
        const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60_000 });
        if (!response || !response.ok()) throw new Error(`HTTP ${response?.status() ?? "no-response"}`);
        await settlePage(page);
        await page.screenshot({
          path: mobilePath,
          type: "jpeg",
          quality: 88,
          fullPage: true,
          animations: "disabled",
        });
        console.log(`[mobile] ${index + 1}/${targets.length} ${target.route}`);
      } catch (error) {
        record.status = "failed";
        record.error = error instanceof Error ? error.message : String(error);
        console.error(`[실패] ${url}: ${record.error}`);
      } finally {
        results.push(record);
        await page.close();
      }
    });
  } finally {
    await context.close();
    await browser.close();
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    source: options.desktopSource,
    baseUrl: options.baseUrl,
    viewport: { width: 390, height: 844, deviceScaleFactor: 2 },
    totals: {
      routes: targets.length,
      desktop: targets.length,
      mobileSucceeded: results.filter((item) => ["ok", "existing"].includes(item.status)).length,
      mobileFailed: results.filter((item) => item.status === "failed").length,
    },
    results: results.sort((a, b) => a.file.localeCompare(b.file)),
  };
  await fs.writeFile(path.join(options.outputDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

  const readme = `# OHMT 인스타그램용 반응형 캡처\n\n- 페이지: ${targets.length}개\n- 데스크톱: 1440px 전체 페이지\n- 모바일: 390px CSS viewport, 2배 해상도(780px) 전체 페이지\n- 파일명: \`{템플릿ID}__{페이지경로}--desktop.jpg\`, \`{템플릿ID}__{페이지경로}--mobile.jpg\`\n- 생성일: ${new Date().toISOString()}\n- 실패: ${manifest.totals.mobileFailed}개\n`;
  await fs.writeFile(path.join(options.outputDir, "README.md"), readme, "utf8");

  console.log(`완료: 데스크톱 ${targets.length}장, 모바일 ${manifest.totals.mobileSucceeded}장`);
  console.log(`저장 위치: ${options.outputDir}`);
  if (manifest.totals.mobileFailed) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
