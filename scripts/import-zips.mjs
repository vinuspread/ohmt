import AdmZip from "adm-zip";
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const ZIPS_DIR = "D:\\Work\\ohmytemplate\\zips";
const PROJECT_DIR = "D:\\Work\\ohmytemplate_admin";
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

let supabase = null;
if (SUPABASE_URL && SUPABASE_KEY) {
  supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
}

function detectLang(filename) {
  const lower = filename.toLowerCase();
  if (lower.includes("-ko.zip") || lower.includes("_ko.zip")) return "ko";
  return "en";
}

function extractTemplateKey(filename) {
  const match = filename.match(/^([A-Z]+\d+)-/i);
  return match ? match[1].toUpperCase() : null;
}

async function processZip(zipFile) {
  const lang = detectLang(zipFile);
  const templateKey = extractTemplateKey(zipFile);
  const zipPath = path.join(ZIPS_DIR, zipFile);

  let zip, entries;
  try {
    zip = new AdmZip(zipPath);
    entries = zip.getEntries();
  } catch (e) {
    console.error(`  ✗ zip 열기 실패: ${e.message}`);
    return;
  }

  // Find theme.json to get slug
  const themeEntry = entries.find((e) => {
    const p = e.entryName.replace(/\\/g, "/");
    return p.endsWith("theme.json") && !p.includes("__MACOSX");
  });

  if (!themeEntry) {
    console.error(`  ✗ theme.json 없음: ${zipFile}`);
    return;
  }

  let themeJson;
  try {
    themeJson = JSON.parse(themeEntry.getData().toString("utf-8"));
  } catch (e) {
    console.error(`  ✗ theme.json 파싱 실패 (인코딩 오류): ${zipFile}`);
    return;
  }
  const slug = themeJson.slug;

  // Derive the zip folder name (e.g. "fashion" in "fashion/theme.json" or "" if root)
  const themeEntryPath = themeEntry.entryName.replace(/\\/g, "/");
  const pathParts = themeEntryPath.split("/");
  const zipFolderName = pathParts[0]; 
  const zipFolderPrefix = `${zipFolderName}/`;

  let fileCount = 0;

  for (const entry of entries) {
    if (entry.isDirectory) continue;

    const entryPath = entry.entryName.replace(/\\/g, "/");
    if (entryPath.startsWith("__MACOSX/")) continue;

    let targetPath;

    if (entryPath.startsWith(zipFolderPrefix)) {
      const relPath = entryPath.slice(zipFolderPrefix.length);
      targetPath = path.join(PROJECT_DIR, `src/app/${lang}/templates/${slug}`, relPath);
    } else if (lang === "en" && entryPath.startsWith(`public/templates/${slug}/`)) {
      targetPath = path.join(PROJECT_DIR, entryPath);
    } else {
      // Fallback: If it doesn't start with zipFolderPrefix but we want it
      continue;
    }

    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.writeFileSync(targetPath, entry.getData());
    fileCount++;
  }

  // Supabase upsert (Bypassed if credentials are missing)
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.log(`  ✓ 로컬 파일 추출 완료 (${fileCount}개 파일) — ${slug} [${lang}] (DB 연동 스킵)`);
    return;
  }

  const name = lang === "ko" ? (themeJson.name_ko ?? themeJson.name) : themeJson.name;
  const description = lang === "ko" ? (themeJson.description_ko ?? themeJson.description) : themeJson.description;

  const { data: existing } = await supabase
    .from("templates")
    .select("id")
    .eq("slug", slug)
    .eq("lang", lang)
    .maybeSingle();

  if (existing) {
    const { error } = await supabase
      .from("templates")
      .update({
        name: name ?? slug,
        category: themeJson.category ?? "uncategorized",
        description: description ?? null,
        thumbnail_url: `/templates/${slug}/og-image.jpg`,
        tags: themeJson.tags ?? [],
        ...(templateKey && { template_key: templateKey }),
      })
      .eq("slug", slug)
      .eq("lang", lang);

    if (error) console.error(`  ✗ Supabase update 실패: ${error.message}`);
    else console.log(`  ✓ 업데이트 (${fileCount}개 파일) — ${slug} [${lang}]`);
  } else {
    const keyNum = templateKey ? parseInt(templateKey.replace(/\D/g, ""), 10) : 999;

    const { error } = await supabase.from("templates").insert({
      slug,
      lang,
      name: name ?? slug,
      category: themeJson.category ?? "uncategorized",
      description: description ?? null,
      thumbnail_url: `/templates/${slug}/og-image.jpg`,
      template_key: templateKey ?? null,
      price: 0,
      status: "uploaded",
      sort_order: keyNum,
      is_featured: false,
      tags: themeJson.tags ?? [],
    });

    if (error) console.error(`  ✗ Supabase insert 실패: ${error.message}`);
    else console.log(`  ✓ 신규 등록 (${fileCount}개 파일) — ${slug} [${lang}]`);
  }
}

async function main() {
  const zipFiles = fs
    .readdirSync(ZIPS_DIR)
    .filter((f) => f.toLowerCase().endsWith(".zip"))
    .sort();

  console.log(`총 ${zipFiles.length}개 zip 처리 시작\n`);

  for (const zipFile of zipFiles) {
    process.stdout.write(`${zipFile}\n`);
    await processZip(zipFile);
  }

  console.log("\n완료.");
}

main().catch(console.error);
