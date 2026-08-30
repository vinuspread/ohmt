import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { chromium } from "@playwright/test";

const ROOT = process.cwd();
const DEFAULT_OUTPUT = path.join(ROOT, "output", "playwright", "instagram-templates");
const DEFAULT_BASE_URL = "http://127.0.0.1:3000";

const viewports = [
  { name: "desktop", width: 1440, height: 1080, deviceScaleFactor: 1 },
  { name: "mobile", width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
];

function parseArgs(argv) {
  const options = {
    allPages: false,
    baseUrl: DEFAULT_BASE_URL,
    concurrency: 4,
    languages: ["ko", "en"],
    outputDir: DEFAULT_OUTPUT,
    startServer: true,
    templates: [],
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--all-pages") options.allPages = true;
    else if (arg === "--no-start-server") options.startServer = false;
    else if (arg === "--base-url") options.baseUrl = argv[++index];
    else if (arg === "--concurrency") options.concurrency = Number(argv[++index]);
    else if (arg === "--languages") options.languages = argv[++index].split(",").map((value) => value.trim()).filter(Boolean);
    else if (arg === "--output") options.outputDir = path.resolve(ROOT, argv[++index]);
    else if (arg === "--templates") options.templates = argv[++index].split(",").map((value) => value.trim()).filter(Boolean);
  }

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

async function listTemplates(language) {
  const templatesDir = path.join(ROOT, "src", "app", language, "templates");
  const entries = await fs.readdir(templatesDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory() && /^OHMT\d+-/.test(entry.name))
    .map((entry) => entry.name)
    .sort();
}

async function walkPages(directory) {
  const pages = [];
  const entries = await fs.readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith("_") || entry.name.startsWith(".")) continue;
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) pages.push(...await walkPages(entryPath));
    else if (entry.name === "page.tsx") pages.push(entryPath);
  }

  return pages;
}

function routeFromPage(language, template, templateDir, pagePath) {
  const relative = path.relative(templateDir, pagePath).split(path.sep);
  relative.pop();
  if (relative.some((segment) => segment.startsWith("[") && segment.endsWith("]"))) return null;
  return `/${[language, "templates", template, ...relative].filter(Boolean).join("/")}`;
}

function safeName(route) {
  return route
    .replace(/^\//, "")
    .replaceAll("/", "--")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/-+/g, "-");
}

async function collectTargets(options) {
  const targets = [];
  const skippedDynamic = [];

  for (const language of options.languages) {
    const templates = await listTemplates(language);
    for (const template of templates) {
      if (options.templates.length && !options.templates.includes(template)) continue;
      const templateDir = path.join(ROOT, "src", "app", language, "templates", template);
      const pagePaths = options.allPages
        ? await walkPages(templateDir)
        : [path.join(templateDir, "page.tsx")];

      for (const pagePath of pagePaths) {
        if (!await exists(pagePath)) continue;
        const route = routeFromPage(language, template, templateDir, pagePath);
        if (!route) {
          skippedDynamic.push(path.relative(ROOT, pagePath).replaceAll(path.sep, "/"));
          continue;
        }
        targets.push({ language, template, route });
      }
    }
  }

  return { targets, skippedDynamic };
}

async function isServerReady(baseUrl) {
  try {
    const response = await fetch(baseUrl, { redirect: "manual", signal: AbortSignal.timeout(2_500) });
    return response.status < 500;
  } catch {
    return false;
  }
}

async function waitForServer(baseUrl, timeoutMs = 120_000) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    if (await isServerReady(baseUrl)) return;
    await new Promise((resolve) => setTimeout(resolve, 1_000));
  }
  throw new Error(`${baseUrl} 서버가 ${timeoutMs / 1000}초 안에 준비되지 않았습니다.`);
}

async function startDevServer(options) {
  if (await isServerReady(options.baseUrl)) return null;
  if (!options.startServer) throw new Error(`${options.baseUrl} 서버가 실행 중이지 않습니다.`);

  const command = process.platform === "win32" ? "npm.cmd" : "npm";
  const server = spawn(command, ["run", "dev", "--", "--hostname", "127.0.0.1"], {
    cwd: ROOT,
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
    shell: process.platform === "win32",
    stdio: ["ignore", "pipe", "pipe"],
  });

  server.stdout.on("data", (chunk) => process.stdout.write(`[dev] ${chunk}`));
  server.stderr.on("data", (chunk) => process.stderr.write(`[dev] ${chunk}`));
  await waitForServer(options.baseUrl);
  return server;
}

async function settlePage(page) {
  await page.waitForLoadState("domcontentloaded");
  await page.waitForLoadState("networkidle", { timeout: 10_000 }).catch(() => {});
  await page.evaluate(async () => {
    await document.fonts?.ready;
    const images = [...document.images];
    await Promise.all(images.map((image) => image.complete
      ? Promise.resolve()
      : new Promise((resolve) => {
          image.addEventListener("load", resolve, { once: true });
          image.addEventListener("error", resolve, { once: true });
          setTimeout(resolve, 5_000);
        })));
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(700);
}

async function runPool(items, concurrency, worker) {
  let cursor = 0;
  const runners = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (cursor < items.length) {
      const current = cursor;
      cursor += 1;
      await worker(items[current], current);
    }
  });
  await Promise.all(runners);
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const { targets, skippedDynamic } = await collectTargets(options);
  if (!targets.length) throw new Error("캡처할 템플릿 페이지를 찾지 못했습니다.");

  await fs.mkdir(options.outputDir, { recursive: true });
  const server = await startDevServer(options);
  const browser = await chromium.launch({ headless: true });
  const results = [];

  try {
    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        deviceScaleFactor: viewport.deviceScaleFactor,
        isMobile: viewport.isMobile ?? false,
        hasTouch: viewport.hasTouch ?? false,
        reducedMotion: "reduce",
      });

      await runPool(targets, options.concurrency, async (target, index) => {
        const page = await context.newPage();
        const fileName = `${safeName(target.route)}--${viewport.name}.png`;
        const filePath = path.join(options.outputDir, fileName);
        const url = new URL(target.route, options.baseUrl).toString();
        const record = { ...target, viewport: viewport.name, file: fileName, url, status: "ok" };

        try {
          const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45_000 });
          if (!response || !response.ok()) throw new Error(`HTTP ${response?.status() ?? "no-response"}`);
          await settlePage(page);
          await page.screenshot({ path: filePath, fullPage: false, animations: "disabled" });
          console.log(`[${viewport.name}] ${index + 1}/${targets.length} ${target.route}`);
        } catch (error) {
          record.status = "failed";
          record.error = error instanceof Error ? error.message : String(error);
          console.error(`[실패] ${url}: ${record.error}`);
        } finally {
          results.push(record);
          await page.close();
        }
      });

      await context.close();
    }
  } finally {
    await browser.close();
    if (server) server.kill();
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    baseUrl: options.baseUrl,
    mode: options.allPages ? "all-static-pages" : "template-homepages",
    viewports: viewports.map(({ name, width, height, deviceScaleFactor }) => ({ name, width, height, deviceScaleFactor })),
    totals: {
      pages: targets.length,
      screenshots: results.length,
      succeeded: results.filter((item) => item.status === "ok").length,
      failed: results.filter((item) => item.status === "failed").length,
      skippedDynamicPages: skippedDynamic.length,
    },
    skippedDynamic,
    results: results.sort((a, b) => a.file.localeCompare(b.file)),
  };

  await fs.writeFile(path.join(options.outputDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  console.log(`\n완료: ${manifest.totals.succeeded}/${manifest.totals.screenshots}개 성공`);
  console.log(`저장 위치: ${options.outputDir}`);
  if (manifest.totals.failed) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
