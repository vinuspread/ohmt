import { execFile as execFileCallback } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { promisify } from "node:util";

const execFile = promisify(execFileCallback);
const SOURCE_ROOT = path.resolve(process.env.OHMT_SOURCE_ROOT ?? "E:/Work/OHMT_test");
const TARGET_ROOT = process.cwd();
const LANGUAGES = ["en", "ko"];
const EXCLUDED = new Set(["OHMT013-newspaper"]);
const TEXT_EXTENSIONS = new Set([
  ".css", ".html", ".js", ".json", ".jsx", ".md", ".mjs", ".ts", ".tsx", ".txt", ".yaml", ".yml",
]);
const REQUIRED_FILES = ["_components/TemplateWrapper.tsx", "layout.tsx", "page.tsx", "theme.css", "theme.json"];
const applyChanges = process.argv.includes("--apply");
const skipBackup = process.argv.includes("--skip-backup");
const YOGA_TESTIMONIALS = {
  en: `export const TESTIMONIALS: Testimonial[] = [
  { id: "1", name: "Emma R.", text: "This studio transformed my relationship with movement. The instructors are incredibly attentive and the community is so welcoming.", rating: 5 },
  { id: "2", name: "James K.", text: "I started as a complete beginner and felt supported every step of the way. The meditation sessions have been life-changing.", rating: 5 },
  { id: "3", name: "Nina P.", text: "The Pilates classes completely fixed my back pain. I have never felt stronger or more aligned in my body.", rating: 5 },
  { id: "4", name: "David L.", text: "A serene sanctuary in the middle of the city. Every class leaves me feeling renewed and centered.", rating: 4 },
];

`,
  ko: `export const TESTIMONIALS: Testimonial[] = [
  { id: "1", name: "에마 R.", text: "무리해서 동작을 따라가기보다 몸의 상태를 살피는 법을 배웠습니다. 강사들이 자세를 세심하게 봐줍니다.", rating: 5 },
  { id: "2", name: "제임스 K.", text: "요가가 처음이었지만 기본 자세부터 차근차근 안내해 주어 부담 없이 참여했습니다.", rating: 5 },
  { id: "3", name: "니나 P.", text: "필라테스를 꾸준히 들으면서 몸의 중심을 사용하는 방법을 알게 됐습니다.", rating: 5 },
  { id: "4", name: "데이비드 L.", text: "도심에 있지만 스튜디오 안은 조용해서 수업에 집중하기 좋았습니다.", rating: 4 },
];

`,
};

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function listTemplateDirs(root, language) {
  const directory = path.join(root, "src", "app", language, "templates");
  return (await fs.readdir(directory, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && /^OHMT\d+-/.test(entry.name))
    .map((entry) => entry.name)
    .sort();
}

async function walkFiles(directory) {
  const output = [];
  for (const entry of await fs.readdir(directory, { withFileTypes: true }).catch(() => [])) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) output.push(...await walkFiles(entryPath));
    else output.push(entryPath);
  }
  return output;
}

async function sha256(filePath) {
  return crypto.createHash("sha256").update(await fs.readFile(filePath)).digest("hex");
}

function normalizeRelative(filePath) {
  return filePath.split(path.sep).join("/");
}

function withLanguageSuffix(relativePath, language) {
  const extension = path.extname(relativePath);
  return `${relativePath.slice(0, -extension.length)}-${language}${extension}`;
}

async function buildAssetPlan(slugs) {
  const plan = new Map();
  const conflicts = [];

  for (const slug of slugs) {
    const byLanguage = {};
    for (const language of LANGUAGES) {
      const base = path.join(SOURCE_ROOT, "public", "templates", language, slug);
      const files = await walkFiles(base);
      byLanguage[language] = new Map(files.map((filePath) => [normalizeRelative(path.relative(base, filePath)), filePath]));
    }

    const allRelativePaths = new Set([...byLanguage.en.keys(), ...byLanguage.ko.keys()]);
    const slugPlan = { en: new Map(), ko: new Map(), copies: [] };

    for (const relativePath of [...allRelativePaths].sort()) {
      const enSource = byLanguage.en.get(relativePath);
      const koSource = byLanguage.ko.get(relativePath);

      if (enSource && koSource) {
        const [enHash, koHash] = await Promise.all([sha256(enSource), sha256(koSource)]);
        if (enHash === koHash) {
          slugPlan.en.set(relativePath, relativePath);
          slugPlan.ko.set(relativePath, relativePath);
          slugPlan.copies.push({ source: enSource, relativePath });
        } else {
          const koRelativePath = withLanguageSuffix(relativePath, "ko");
          slugPlan.en.set(relativePath, relativePath);
          slugPlan.ko.set(relativePath, koRelativePath);
          slugPlan.copies.push({ source: enSource, relativePath });
          slugPlan.copies.push({ source: koSource, relativePath: koRelativePath });
          conflicts.push({ slug, relativePath, koRelativePath });
        }
        continue;
      }

      if (enSource) {
        slugPlan.en.set(relativePath, relativePath);
        slugPlan.copies.push({ source: enSource, relativePath });
      }
      if (koSource) {
        slugPlan.ko.set(relativePath, relativePath);
        slugPlan.copies.push({ source: koSource, relativePath });
      }
    }

    plan.set(slug, slugPlan);
  }

  return { plan, conflicts };
}

function transformText(content, language, slug, assetMap, filePath) {
  let output = content.replaceAll("\r\n", "\n").replaceAll("\r", "\n");
  const sourcePrefix = `/templates/${language}/${slug}/`;
  const targetPrefix = `/templates/${slug}/`;

  output = output.replaceAll(sourcePrefix, targetPrefix);
  output = output.replaceAll(`public/templates/${language}/${slug}/`, `public/templates/${slug}/`);

  for (const [sourceRelativePath, targetRelativePath] of assetMap) {
    if (sourceRelativePath !== targetRelativePath) {
      output = output.replaceAll(`${targetPrefix}${sourceRelativePath}`, `${targetPrefix}${targetRelativePath}`);
    }
  }

  if (path.basename(filePath) === "layout.tsx") {
    output = output.replace(/^\s*import\s+DevicePreviewShell\s+from\s+['"][^'"]+['"];?\s*\n/gm, "");
    output = output.replace(/<DevicePreviewShell>\s*/g, "");
    output = output.replace(/\s*<\/DevicePreviewShell>/g, "");
  }

  if (slug === "OHMT022-yoga" && path.basename(filePath) === "constants.ts" && !output.includes("export const TESTIMONIALS")) {
    output = output.replace("Instructor, ScheduleItem", "Instructor, Testimonial, ScheduleItem");
    output = output.replace("export const SCHEDULE", `${YOGA_TESTIMONIALS[language]}export const SCHEDULE`);
  }

  if (slug === "OHMT022-yoga" && path.basename(filePath) === "types.ts" && !output.includes("interface Testimonial")) {
    output = output.replace(
      "export interface ScheduleItem",
      "export interface Testimonial {\n  id: string;\n  name: string;\n  text: string;\n  rating: number;\n}\n\nexport interface ScheduleItem",
    );
  }

  return `${output.replace(/[ \t]+$/gm, "").replace(/\n*$/, "")}\n`;
}

async function getDirtyPaths() {
  const { stdout } = await execFile("git", ["status", "--porcelain", "-z"], { cwd: TARGET_ROOT, encoding: "utf8" });
  const records = stdout.split("\0").filter(Boolean);
  const paths = [];
  for (let index = 0; index < records.length; index += 1) {
    const record = records[index];
    const status = record.slice(0, 2);
    let filePath = record.slice(3);
    if (status.includes("R") || status.includes("C")) filePath = records[++index] ?? filePath;
    paths.push(filePath.replaceAll("\\", "/"));
  }
  return paths;
}

function isInSyncScope(relativePath, slugs) {
  return slugs.some((slug) =>
    LANGUAGES.some((language) => relativePath.startsWith(`src/app/${language}/templates/${slug}/`))
    || relativePath.startsWith(`public/templates/${slug}/`),
  );
}

async function backupDirtyFiles(slugs) {
  const dirtyPaths = (await getDirtyPaths()).filter((relativePath) => isInSyncScope(relativePath, slugs));
  if (!dirtyPaths.length) return null;

  const timestamp = new Date().toISOString().replaceAll(":", "-").replaceAll(".", "-");
  const backupRoot = path.join("C:/tmp", `ohmt-admin-template-sync-backup-${timestamp}`);
  for (const relativePath of dirtyPaths) {
    const sourcePath = path.join(TARGET_ROOT, relativePath);
    if (!await exists(sourcePath)) continue;
    const sourceStat = await fs.stat(sourcePath);
    if (!sourceStat.isFile()) continue;
    const backupPath = path.join(backupRoot, relativePath);
    await fs.mkdir(path.dirname(backupPath), { recursive: true });
    await fs.copyFile(sourcePath, backupPath);
  }
  await fs.writeFile(path.join(backupRoot, "manifest.json"), `${JSON.stringify({ createdAt: new Date().toISOString(), files: dirtyPaths }, null, 2)}\n`);
  return { backupRoot, dirtyPaths };
}

async function buildFilePlan(slugs, assetPlan) {
  const operations = [];

  for (const slug of slugs) {
    for (const language of LANGUAGES) {
      const sourceBase = path.join(SOURCE_ROOT, "src", "app", language, "templates", slug);
      const targetBase = path.join(TARGET_ROOT, "src", "app", language, "templates", slug);
      for (const sourcePath of await walkFiles(sourceBase)) {
        const relativePath = path.relative(sourceBase, sourcePath);
        const targetPath = path.join(targetBase, relativePath);
        const extension = path.extname(sourcePath).toLowerCase();
        const sourceBuffer = await fs.readFile(sourcePath);
        const content = TEXT_EXTENSIONS.has(extension)
          ? Buffer.from(transformText(sourceBuffer.toString("utf8"), language, slug, assetPlan.get(slug)[language], sourcePath), "utf8")
          : sourceBuffer;
        const current = await fs.readFile(targetPath).catch(() => null);
        operations.push({ type: "code", sourcePath, targetPath, content, changed: !current || !current.equals(content), exists: Boolean(current) });
      }
    }

    for (const copy of assetPlan.get(slug).copies) {
      const targetPath = path.join(TARGET_ROOT, "public", "templates", slug, copy.relativePath);
      const content = await fs.readFile(copy.source);
      const current = await fs.readFile(targetPath).catch(() => null);
      operations.push({ type: "asset", sourcePath: copy.source, targetPath, content, changed: !current || !current.equals(content), exists: Boolean(current) });
    }
  }

  return operations;
}

async function validate(slugs) {
  const errors = [];
  const missingAssets = [];

  for (const slug of slugs) {
    for (const language of LANGUAGES) {
      const templateBase = path.join(TARGET_ROOT, "src", "app", language, "templates", slug);
      for (const requiredFile of REQUIRED_FILES) {
        if (!await exists(path.join(templateBase, requiredFile))) errors.push(`${language}/${slug}: ${requiredFile} 없음`);
      }

      const themePath = path.join(templateBase, "theme.json");
      try {
        const theme = JSON.parse(await fs.readFile(themePath, "utf8"));
        if (theme.slug !== slug) errors.push(`${language}/${slug}: theme.json slug 불일치 (${theme.slug})`);
      } catch (error) {
        errors.push(`${language}/${slug}: theme.json 파싱 실패 (${error.message})`);
      }

      const layout = await fs.readFile(path.join(templateBase, "layout.tsx"), "utf8").catch(() => "");
      if (layout.includes("DevicePreviewShell")) errors.push(`${language}/${slug}: DevicePreviewShell 잔존`);

      for (const filePath of await walkFiles(templateBase)) {
        if (!TEXT_EXTENSIONS.has(path.extname(filePath).toLowerCase())) continue;
        const content = await fs.readFile(filePath, "utf8");
        const languagePrefix = `/templates/${language}/${slug}/`;
        if (content.includes(languagePrefix)) errors.push(`${language}/${slug}: 이전 이미지 경로 잔존 (${normalizeRelative(path.relative(templateBase, filePath))})`);

        const assetPattern = new RegExp(
          `/templates/${slug}/([^'"\\s)\\]}]+\\.(?:avif|gif|ico|jpe?g|png|svg|webp|woff2?))`,
          "gi",
        );
        for (const match of content.matchAll(assetPattern)) {
          const relativeAsset = match[1].split("?")[0].split("#")[0];
          const assetPath = path.join(TARGET_ROOT, "public", "templates", slug, relativeAsset);
          if (!await exists(assetPath)) missingAssets.push(`${language}/${slug}: ${relativeAsset}`);
        }
      }
    }
  }

  return { errors: [...new Set(errors)], missingAssets: [...new Set(missingAssets)] };
}

async function main() {
  const sourceTemplates = await listTemplateDirs(SOURCE_ROOT, "en");
  const targetTemplates = await listTemplateDirs(TARGET_ROOT, "en");
  const slugs = sourceTemplates.filter((slug) => targetTemplates.includes(slug) && !EXCLUDED.has(slug));

  if (slugs.length !== 36) throw new Error(`예상한 겹치는 템플릿은 36개지만 ${slugs.length}개를 찾았습니다.`);

  const { plan: assetPlan, conflicts } = await buildAssetPlan(slugs);
  const operations = await buildFilePlan(slugs, assetPlan);
  const changed = operations.filter((operation) => operation.changed);
  const summary = {
    mode: applyChanges ? "apply" : "dry-run",
    source: SOURCE_ROOT,
    target: TARGET_ROOT,
    templates: slugs.length,
    excluded: [...EXCLUDED],
    totalFiles: operations.length,
    changedFiles: changed.length,
    overwrittenFiles: changed.filter((operation) => operation.exists).length,
    addedFiles: changed.filter((operation) => !operation.exists).length,
    assetConflicts: conflicts,
  };

  console.log(JSON.stringify(summary, null, 2));
  if (!applyChanges) {
    console.log("\n드라이런 완료. 실제 반영은 --apply 옵션을 사용하세요.");
    return;
  }

  const backup = changed.length && !skipBackup ? await backupDirtyFiles(slugs) : null;
  if (backup) console.log(`수정 중이던 파일 ${backup.dirtyPaths.length}개 백업: ${backup.backupRoot}`);

  for (const operation of changed) {
    await fs.mkdir(path.dirname(operation.targetPath), { recursive: true });
    await fs.writeFile(operation.targetPath, operation.content);
  }

  const validation = await validate(slugs);
  console.log(JSON.stringify({ validation }, null, 2));
  if (validation.errors.length || validation.missingAssets.length) {
    process.exitCode = 1;
    return;
  }

  console.log(`\n업데이트 완료: ${slugs.length}개 템플릿, ${changed.length}개 파일 반영`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
