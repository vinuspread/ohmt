import AdmZip from "adm-zip";
import type { GitHubFileEntry } from "./github";

export interface ExtractedTemplate {
  slug: string;
  themeJson: TemplateThemeJson;
  files: GitHubFileEntry[];
}

export interface TemplateThemeJson {
  slug: string;
  name?: string;
  name_ko?: string;
  category?: string;
  description?: string;
  description_ko?: string;
  tags?: string[];
}

const requiredFiles = ["_components/TemplateWrapper.tsx", "layout.tsx", "page.tsx", "theme.css", "theme.json"];
const forbiddenPathPrefixes = ["src/", "translations/"];
const slugPattern = /^[a-z][a-z0-9-]*$/;
const maxExtractedSize = 100 * 1024 * 1024;
const maxFileCount = 500;

export function extractAndValidateZip(buffer: Buffer, lang: "en" | "ko" = "en"): ExtractedTemplate {
  const zip = new AdmZip(buffer);
  const entries = zip.getEntries();
  const fileEntries = entries.filter((entry) => !entry.isDirectory);

  if (fileEntries.length > maxFileCount) {
    throw new Error(`파일 개수는 ${maxFileCount}개 이하여야 합니다.`);
  }

  const extractedSize = fileEntries.reduce((total, entry) => total + entry.header.size, 0);
  if (extractedSize > maxExtractedSize) {
    throw new Error("압축 해제 후 파일 크기는 100MB 이하여야 합니다.");
  }

  const rootDirs = new Set<string>();
  for (const entry of entries) {
    const normalizedPath = normalizeEntryPath(entry.entryName);
    const [rootDir] = normalizedPath.split("/");
    if (rootDir) rootDirs.add(rootDir);
  }

  const slugCandidates = [...rootDirs].filter((dir) => dir !== "public" && dir !== "__MACOSX");
  if (slugCandidates.length !== 1) {
    throw new Error("zip 루트에 템플릿 폴더가 정확히 1개 있어야 합니다.");
  }

  const slug = slugCandidates[0];
  if (!slugPattern.test(slug)) {
    throw new Error(`slug 형식이 올바르지 않습니다: ${slug}`);
  }

  const normalizedFiles = fileEntries.map((entry) => ({ entry, path: normalizeEntryPath(entry.entryName) }));

  for (const { path } of normalizedFiles) {
    if (isUnsafePath(path)) {
      throw new Error(`허용되지 않는 경로가 포함되어 있습니다: ${path}`);
    }

    if (!path.startsWith(`${slug}/`) && !path.startsWith("public/") && !path.startsWith("__MACOSX/")) {
      throw new Error(`허용되지 않는 루트 경로가 포함되어 있습니다: ${path}`);
    }

    const relativePath = path.startsWith(`${slug}/`) ? path.slice(slug.length + 1) : path;
    if (forbiddenPathPrefixes.some((pattern) => relativePath.startsWith(pattern))) {
      throw new Error(`금지된 경로가 포함되어 있습니다: ${relativePath}`);
    }
  }

  for (const required of requiredFiles) {
    if (!normalizedFiles.some(({ path }) => path === `${slug}/${required}`)) {
      throw new Error(`필수 파일이 없습니다: ${required}`);
    }
  }

  const themeEntry = normalizedFiles.find(({ path }) => path === `${slug}/theme.json`)?.entry;
  if (!themeEntry) throw new Error("theme.json을 읽을 수 없습니다.");

  const themeJson = parseThemeJson(themeEntry.getData().toString("utf-8"));
  if (themeJson.slug !== slug) {
    throw new Error(`theme.json slug(${themeJson.slug})와 폴더명(${slug})이 다릅니다.`);
  }

  const templateBasePath = `src/app/${lang}/templates/${slug}`;
  const files: GitHubFileEntry[] = [];

  for (const { entry, path } of normalizedFiles) {
    if (path.startsWith("__MACOSX/")) continue;

    if (path.startsWith(`${slug}/`)) {
      const relativePath = path.slice(slug.length + 1);
      files.push({ path: `${templateBasePath}/${relativePath}`, content: entry.getData() });
      continue;
    }

    if (lang === "en" && path.startsWith(`public/templates/${slug}/`)) {
      files.push({ path, content: entry.getData() });
    }
  }

  return { slug, themeJson, files };
}

function normalizeEntryPath(path: string): string {
  return path.replaceAll("\\", "/").replace(/^\.\//, "");
}

function isUnsafePath(path: string): boolean {
  return path.startsWith("/") || path.split("/").includes("..");
}

function parseThemeJson(rawJson: string): TemplateThemeJson {
  let parsed: unknown;

  try {
    parsed = JSON.parse(rawJson);
  } catch {
    throw new Error("theme.json 형식이 올바르지 않습니다.");
  }

  if (!isObjectRecord(parsed)) {
    throw new Error("theme.json 형식이 올바르지 않습니다.");
  }

  if (typeof parsed.slug !== "string" || parsed.slug.length === 0) {
    throw new Error("theme.json에 slug 필드가 없습니다.");
  }

  if (!slugPattern.test(parsed.slug)) {
    throw new Error(`theme.json slug 형식이 올바르지 않습니다: ${parsed.slug}`);
  }

  const themeJson: TemplateThemeJson = { slug: parsed.slug };

  if (typeof parsed.name === "string") themeJson.name = parsed.name;
  if (typeof parsed.name_ko === "string") themeJson.name_ko = parsed.name_ko;
  if (typeof parsed.category === "string") themeJson.category = parsed.category;
  if (typeof parsed.description === "string") themeJson.description = parsed.description;
  if (typeof parsed.description_ko === "string") themeJson.description_ko = parsed.description_ko;
  if (Array.isArray(parsed.tags) && parsed.tags.every((tag) => typeof tag === "string")) themeJson.tags = parsed.tags;

  return themeJson;
}

function isObjectRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
