/**
 * zip 파일에서 직접 GitHub push + Supabase 업데이트
 * zip 구조: src/app/[lang]/templates/[slug]/ + public/templates/[slug]/
 */
import AdmZip from "adm-zip";
import { Octokit } from "@octokit/rest";
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const ZIPS_DIR = "E:\\Work\\ohmytemplate\\zips";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER;
const GITHUB_REPO = process.env.GITHUB_REPO;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
  console.error("GITHUB_TOKEN / GITHUB_OWNER / GITHUB_REPO 환경변수 필요");
  process.exit(1);
}

const octokit = new Octokit({ auth: GITHUB_TOKEN });
const supabase = SUPABASE_URL && SUPABASE_KEY
  ? createClient(SUPABASE_URL, SUPABASE_KEY)
  : null;

const textExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".css", ".json", ".md", ".svg", ".txt", ".mjs"]);

function detectLang(filename) {
  const lower = filename.toLowerCase();
  if (lower.includes("-ko.zip")) return "ko";
  return "en";
}

function extractTemplateKey(filename) {
  const m = filename.match(/^([A-Z]+\d+)-/i);
  return m ? m[1].toUpperCase() : null;
}

function normalizeEntryPath(p) {
  return p.replace(/\\/g, "/").replace(/^\.\//, "");
}

function isTextFile(p) {
  const ext = p.slice(p.lastIndexOf(".")).toLowerCase();
  return textExtensions.has(ext);
}

async function getCurrentCommit() {
  const { data: ref } = await octokit.git.getRef({ owner: GITHUB_OWNER, repo: GITHUB_REPO, ref: "heads/main" });
  const { data: commit } = await octokit.git.getCommit({ owner: GITHUB_OWNER, repo: GITHUB_REPO, commit_sha: ref.object.sha });
  return { commitSha: ref.object.sha, treeSha: commit.tree.sha };
}

async function createBlobWithRetry(file, retries = 3) {
  const isText = isTextFile(file.path);
  for (let i = 0; i < retries; i++) {
    try {
      const { data: blob } = await octokit.git.createBlob({
        owner: GITHUB_OWNER, repo: GITHUB_REPO,
        content: isText ? file.content.toString("utf-8") : file.content.toString("base64"),
        encoding: isText ? "utf-8" : "base64",
      });
      return { path: file.path, mode: "100644", type: "blob", sha: blob.sha };
    } catch (e) {
      if (i === retries - 1) throw e;
      await new Promise((r) => setTimeout(r, 2000 * (i + 1)));
    }
  }
}

async function pushFiles(files, commitMessage, baseCommitSha, baseTreeSha) {
  // 순차 처리로 GitHub API 부하 감소
  const tree = [];
  for (const file of files) {
    tree.push(await createBlobWithRetry(file));
  }

  const { data: newTree } = await octokit.git.createTree({
    owner: GITHUB_OWNER, repo: GITHUB_REPO,
    base_tree: baseTreeSha,
    tree,
  });

  const { data: newCommit } = await octokit.git.createCommit({
    owner: GITHUB_OWNER, repo: GITHUB_REPO,
    message: commitMessage,
    tree: newTree.sha,
    parents: [baseCommitSha],
  });

  await octokit.git.updateRef({
    owner: GITHUB_OWNER, repo: GITHUB_REPO,
    ref: "heads/main",
    sha: newCommit.sha,
  });

  return newCommit.sha;
}

async function processZip(zipFile, baseCommitSha, baseTreeSha) {
  const lang = detectLang(zipFile);
  const templateKey = extractTemplateKey(zipFile);
  const zipPath = path.join(ZIPS_DIR, zipFile);

  let zip, entries;
  try {
    zip = new AdmZip(zipPath);
    entries = zip.getEntries();
  } catch (e) {
    console.error(`  ✗ zip 열기 실패: ${e.message}`);
    return { commitSha: baseCommitSha, treeSha: baseTreeSha };
  }

  // theme.json 찾기 (src/app/[lang]/templates/[slug]/theme.json)
  const themeEntry = entries.find((e) => {
    const p = normalizeEntryPath(e.entryName);
    return p.endsWith("theme.json") && !p.includes("__MACOSX");
  });

  if (!themeEntry) {
    console.error(`  ✗ theme.json 없음`);
    return { commitSha: baseCommitSha, treeSha: baseTreeSha };
  }

  let themeJson;
  try {
    themeJson = JSON.parse(themeEntry.getData().toString("utf-8"));
  } catch (e) {
    console.error(`  ✗ theme.json 파싱 실패`);
    return { commitSha: baseCommitSha, treeSha: baseTreeSha };
  }

  // zip 구조: [slug]/... + public/templates/[slug]/...
  const themeEntryPath = normalizeEntryPath(themeEntry.entryName);
  const slug = themeEntryPath.split("/")[0];

  // 파일 수집 (GitHub push 대상)
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory) continue;
    const entryPath = normalizeEntryPath(entry.entryName);
    if (entryPath.startsWith("__MACOSX/")) continue;

    if (entryPath.startsWith(`${slug}/`)) {
      // 코드 파일: [slug]/... → src/app/[lang]/templates/[slug]/...
      const relPath = entryPath.slice(slug.length + 1);
      files.push({ path: `src/app/${lang}/templates/${slug}/${relPath}`, content: entry.getData() });
    } else if (entryPath.startsWith("public/templates/")) {
      // 이미지 파일: 그대로
      files.push({ path: entryPath, content: entry.getData() });
    }
  }

  if (files.length === 0) {
    console.error(`  ✗ 추출 파일 없음`);
    return { commitSha: baseCommitSha, treeSha: baseTreeSha };
  }

  // GitHub push
  let newCommitSha, newTreeSha;
  try {
    newCommitSha = await pushFiles(files, `chore: update ${slug} (${lang})`, baseCommitSha, baseTreeSha);
    // 새 tree sha 가져오기
    const { data: newCommit } = await octokit.git.getCommit({ owner: GITHUB_OWNER, repo: GITHUB_REPO, commit_sha: newCommitSha });
    newTreeSha = newCommit.tree.sha;
  } catch (e) {
    console.error(`  ✗ GitHub push 실패: ${e.message}`);
    return { commitSha: baseCommitSha, treeSha: baseTreeSha };
  }

  // Supabase 업데이트
  if (supabase) {
    const name = lang === "ko" ? (themeJson.name_ko ?? themeJson.name) : themeJson.name;
    const description = lang === "ko" ? (themeJson.description_ko ?? themeJson.description) : themeJson.description;

    const { data: existing } = await supabase.from("templates").select("id").eq("slug", slug).eq("lang", lang).maybeSingle();

    if (existing) {
      const { error } = await supabase.from("templates").update({
        name: name ?? slug,
        category: themeJson.category ?? "uncategorized",
        description: description ?? null,
        thumbnail_url: `/templates/${slug}/og-image.jpg`,
        tags: themeJson.tags ?? [],
        ...(templateKey && { template_key: templateKey }),
      }).eq("slug", slug).eq("lang", lang);
      if (error) console.error(`  ✗ Supabase update 실패: ${error.message}`);
      else console.log(`  ✓ 완료 (${files.length}개 파일, GitHub+DB) — ${slug} [${lang}]`);
    } else {
      const keyNum = templateKey ? parseInt(templateKey.replace(/\D/g, ""), 10) : 999;
      const { error } = await supabase.from("templates").insert({
        slug, lang, name: name ?? slug,
        category: themeJson.category ?? "uncategorized",
        description: description ?? null,
        thumbnail_url: `/templates/${slug}/og-image.jpg`,
        template_key: templateKey ?? null,
        price: 0, status: "uploaded", sort_order: keyNum,
        is_featured: false, tags: themeJson.tags ?? [],
      });
      if (error) console.error(`  ✗ Supabase insert 실패: ${error.message}`);
      else console.log(`  ✓ 신규 등록 (${files.length}개 파일, GitHub+DB) — ${slug} [${lang}]`);
    }
  } else {
    console.log(`  ✓ GitHub push 완료 (${files.length}개 파일, DB 스킵) — ${slug} [${lang}]`);
  }

  return { commitSha: newCommitSha, treeSha: newTreeSha };
}

async function main() {
  const RESUME_FROM = "OHMT012-magazine-EN.zip"; // 실패 지점부터 재시작
const allZipFiles = fs.readdirSync(ZIPS_DIR).filter((f) => f.toLowerCase().endsWith(".zip")).sort();
const zipFiles = RESUME_FROM ? allZipFiles.slice(allZipFiles.indexOf(RESUME_FROM)) : allZipFiles;
  console.log(`총 ${zipFiles.length}개 zip 처리 시작\n`);

  let { commitSha, treeSha } = await getCurrentCommit();

  for (const zipFile of zipFiles) {
    console.log(zipFile);
    const result = await processZip(zipFile, commitSha, treeSha);
    commitSha = result.commitSha;
    treeSha = result.treeSha;
  }

  console.log("\n완료.");
}

main().catch(console.error);
