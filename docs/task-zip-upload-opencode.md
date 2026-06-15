# Task: Zip Upload Pipeline 구현

## 목적

관리자 페이지에서 zip 파일을 업로드하면 템플릿 파일이 GitHub에 push되고, Supabase에 메타데이터가 등록되는 파이프라인을 구현한다.

설계 상세는 `docs/plan-zip-upload.md` 를 반드시 먼저 읽는다.

---

## 사전 작업

### 패키지 설치

```bash
npm install adm-zip @octokit/rest
npm install -D @types/adm-zip
```

### next.config 수정

zip 파일 업로드를 위해 body 크기 제한을 늘린다.

```ts
// next.config.ts (또는 next.config.mjs)
const nextConfig = {
  // 기존 설정 유지하고 아래 추가
  serverExternalPackages: ['adm-zip'],
  experimental: {
    serverActions: {
      bodySizeLimit: '52mb',
    },
  },
};
```

API route body 크기도 별도 설정:

```ts
// src/app/api/admin/templates/upload/route.ts 상단에
export const config = {
  api: { bodyParser: false },
};
```

---

## Step 1. `src/lib/github.ts`

GitHub API를 통해 여러 파일을 한 번의 커밋으로 push하는 함수를 구현한다.

```ts
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const owner = process.env.GITHUB_OWNER!;
const repo = process.env.GITHUB_REPO!;

interface FileEntry {
  path: string;   // 레포 내 경로 (예: src/app/en/templates/furniture/page.tsx)
  content: Buffer;
}

export async function pushFilesToGitHub(
  files: FileEntry[],
  commitMessage: string
): Promise<string> {
  // 1. 현재 main 브랜치 SHA
  const { data: ref } = await octokit.git.getRef({ owner, repo, ref: "heads/main" });
  const latestCommitSha = ref.object.sha;

  // 2. 현재 tree SHA
  const { data: commit } = await octokit.git.getCommit({ owner, repo, commit_sha: latestCommitSha });
  const baseTreeSha = commit.tree.sha;

  // 3. 각 파일의 blob 생성
  const treeItems = await Promise.all(
    files.map(async (file) => {
      const isText = isTextFile(file.path);
      const { data: blob } = await octokit.git.createBlob({
        owner,
        repo,
        content: isText ? file.content.toString("utf-8") : file.content.toString("base64"),
        encoding: isText ? "utf-8" : "base64",
      });
      return {
        path: file.path,
        mode: "100644" as const,
        type: "blob" as const,
        sha: blob.sha,
      };
    })
  );

  // 4. 새 tree 생성
  const { data: newTree } = await octokit.git.createTree({
    owner,
    repo,
    base_tree: baseTreeSha,
    tree: treeItems,
  });

  // 5. 새 commit 생성
  const { data: newCommit } = await octokit.git.createCommit({
    owner,
    repo,
    message: commitMessage,
    tree: newTree.sha,
    parents: [latestCommitSha],
  });

  // 6. main 브랜치 업데이트
  await octokit.git.updateRef({
    owner,
    repo,
    ref: "heads/main",
    sha: newCommit.sha,
  });

  return newCommit.sha;
}

function isTextFile(path: string): boolean {
  const textExtensions = [".ts", ".tsx", ".js", ".jsx", ".css", ".json", ".md", ".txt", ".svg"];
  return textExtensions.some((ext) => path.endsWith(ext));
}
```

---

## Step 2. `src/lib/zip.ts`

zip 파일을 추출하고 구조를 검증하는 함수를 구현한다.

```ts
import AdmZip from "adm-zip";

export interface ExtractedTemplate {
  slug: string;
  themeJson: Record<string, unknown>;
  files: Array<{ repoPath: string; content: Buffer }>;
}

const REQUIRED_FILES = [
  "_components/TemplateWrapper.tsx",
  "layout.tsx",
  "page.tsx",
  "theme.css",
  "theme.json",
];

const FORBIDDEN_PATTERNS = ["src/", "translations/"];

export function extractAndValidateZip(
  buffer: Buffer,
  lang: "en" | "ko" = "en"
): ExtractedTemplate {
  const zip = new AdmZip(buffer);
  const entries = zip.getEntries();

  // slug 폴더 감지: 루트에 폴더가 하나 있어야 함
  const rootDirs = new Set<string>();
  for (const entry of entries) {
    const parts = entry.entryName.split("/");
    if (parts.length > 1 && parts[0]) rootDirs.add(parts[0]);
  }

  // public/ 폴더는 slug 폴더에서 제외
  const slugCandidates = [...rootDirs].filter((d) => d !== "public");
  if (slugCandidates.length !== 1) {
    throw new Error("zip 루트에 템플릿 폴더가 정확히 1개 있어야 합니다.");
  }

  const slug = slugCandidates[0];

  // slug 형식 검증
  if (!/^[a-z][a-z0-9-]*$/.test(slug)) {
    throw new Error(`slug 형식이 올바르지 않습니다: ${slug}`);
  }

  // 금지 패턴 검사
  for (const entry of entries) {
    const relativePath = entry.entryName.replace(`${slug}/`, "");
    for (const pattern of FORBIDDEN_PATTERNS) {
      if (relativePath.startsWith(pattern)) {
        throw new Error(`금지된 경로가 포함되어 있습니다: ${pattern}`);
      }
    }
  }

  // 필수 파일 확인
  for (const required of REQUIRED_FILES) {
    const exists = entries.some(
      (e) => e.entryName === `${slug}/${required}` || e.entryName === `${slug}\\${required}`
    );
    if (!exists) {
      throw new Error(`필수 파일이 없습니다: ${required}`);
    }
  }

  // theme.json 파싱
  const themeEntry = zip.getEntry(`${slug}/theme.json`);
  if (!themeEntry) throw new Error("theme.json을 읽을 수 없습니다.");
  const themeJson = JSON.parse(themeEntry.getData().toString("utf-8"));

  if (!themeJson.slug) throw new Error("theme.json에 slug 필드가 없습니다.");
  if (themeJson.slug !== slug) {
    throw new Error(`theme.json slug(${themeJson.slug})와 폴더명(${slug})이 다릅니다.`);
  }

  // 파일 목록 구성
  const files: Array<{ repoPath: string; content: Buffer }> = [];
  const templateBasePath = `src/app/${lang}/templates/${slug}`;

  for (const entry of entries) {
    if (entry.isDirectory) continue;
    const content = entry.getData();

    if (entry.entryName.startsWith(`${slug}/`)) {
      const relativePath = entry.entryName.slice(slug.length + 1);
      files.push({ repoPath: `${templateBasePath}/${relativePath}`, content });
    } else if (entry.entryName.startsWith("public/") && lang === "en") {
      files.push({ repoPath: entry.entryName, content });
    }
  }

  return { slug, themeJson, files };
}
```

---

## Step 3. `src/app/api/admin/templates/upload/route.ts`

```ts
import { NextResponse } from "next/server";
import { extractAndValidateZip } from "@/lib/zip";
import { pushFilesToGitHub } from "@/lib/github";
import { createAdminClient } from "@/lib/supabase/admin";

export const maxDuration = 60;

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  const lang = (formData.get("lang") as string) || "en";

  if (!file || file.type !== "application/zip" && !file.name.endsWith(".zip")) {
    return NextResponse.json({ error: "zip 파일만 업로드 가능합니다." }, { status: 400 });
  }

  if (file.size > 50 * 1024 * 1024) {
    return NextResponse.json({ error: "파일 크기는 50MB 이하여야 합니다." }, { status: 400 });
  }

  // zip 추출 및 검증
  const buffer = Buffer.from(await file.arrayBuffer());
  let extracted;
  try {
    extracted = extractAndValidateZip(buffer, lang as "en" | "ko");
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "zip 검증 실패" },
      { status: 400 }
    );
  }

  const { slug, themeJson, files } = extracted;

  // slug 중복 확인
  const supabase = createAdminClient();
  const { data: existing } = await supabase
    .from("templates")
    .select("id")
    .eq("slug", slug)
    .maybeSingle();

  if (existing) {
    return NextResponse.json(
      { error: `이미 존재하는 slug입니다: ${slug}` },
      { status: 409 }
    );
  }

  // GitHub push
  let commitSha: string;
  try {
    commitSha = await pushFilesToGitHub(
      files,
      `feat: add ${slug} template (${lang})`
    );
  } catch (err) {
    console.error("GitHub push 실패:", err);
    return NextResponse.json({ error: "GitHub push에 실패했습니다." }, { status: 502 });
  }

  // Supabase 메타데이터 등록 (en 업로드 시에만)
  if (lang === "en") {
    const { error: dbError } = await supabase.from("templates").insert({
      slug,
      name_en: themeJson.name ?? slug,
      name_ko: themeJson.name_ko ?? null,
      category: themeJson.category ?? "uncategorized",
      description_en: themeJson.description ?? null,
      description_ko: themeJson.description_ko ?? null,
      thumbnail_url: `/templates/${slug}/thumbnail.jpg`,
      price: 0,
      status: "draft",
      sort_order: 999,
      is_featured: false,
      tags: themeJson.tags ?? [],
    });

    if (dbError) {
      console.error("Supabase insert 실패:", dbError);
      return NextResponse.json(
        { error: "메타데이터 등록에 실패했습니다. GitHub push는 성공했습니다." },
        { status: 500 }
      );
    }
  }

  return NextResponse.json(
    {
      slug,
      name: themeJson.name ?? slug,
      githubCommitSha: commitSha,
      templateUrl: `/${lang}/templates/${slug}`,
    },
    { status: 201 }
  );
}
```

---

## Step 4. `src/app/admin/_components/templates/UploadForm.tsx`

업로드 UI 컴포넌트. drag & drop + 파일 선택 지원. 업로드 진행 상태를 단계별로 표시한다.

**상태 타입:**
```ts
type UploadStatus = "idle" | "uploading" | "success" | "error";
```

**UI 구성 요소:**
- drag & drop 영역 (dashed border, hover 시 강조)
- 언어 선택 Select (EN / KO)
- 업로드 버튼
- 진행 상태 메시지 (업로드 중... / 성공 / 오류)
- 성공 시: slug, templateUrl, "목록으로" 버튼 표시

**동작:**
1. 파일 선택 또는 drop
2. "업로드" 클릭 → `POST /api/admin/templates/upload` (FormData)
3. 응답에 따라 성공/오류 표시
4. 성공 시 `router.push("/admin/templates")` 후 `router.refresh()`

---

## Step 5. `src/app/admin/templates/upload/page.tsx`

```tsx
import Link from "next/link";
import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { UploadForm } from "@/app/admin/_components/templates/UploadForm";
import { Button } from "@/app/admin/_components/ui/Button";

export default function UploadTemplatePage() {
  return (
    <AdminShell
      title="템플릿 업로드"
      action={
        <Link href="/admin/templates">
          <Button variant="ghost" size="sm">← 목록</Button>
        </Link>
      }
    >
      <div className="bg-white rounded-xl border border-zinc-200 p-8 max-w-2xl">
        <UploadForm />
      </div>
    </AdminShell>
  );
}
```

---

## Step 6. Sidebar에 업로드 링크 추가

`src/app/admin/_components/layout/Sidebar.tsx`의 네비게이션 항목에 업로드 링크를 추가한다.

기존 Templates 항목 아래:
```ts
{ label: "업로드", href: "/admin/templates/upload", icon: UploadIcon }
```

`lucide-react`의 `Upload` 아이콘을 사용한다.

---

## Step 7. 환경변수 추가

`.env.local`에 아래 변수를 추가한다 (실제 값은 사용자가 입력):

```
GITHUB_TOKEN=ghp_...
GITHUB_OWNER=vinuspread
GITHUB_REPO=ohmt
```

Vercel Dashboard → Settings → Environment Variables에도 동일하게 추가 필요.

---

## 검증 체크리스트

- [ ] `npm install adm-zip @octokit/rest @types/adm-zip` 완료
- [ ] `/admin/templates/upload` 페이지 접근 가능
- [ ] zip 드래그 앤 드롭 및 클릭 선택 동작
- [ ] 필수 파일 누락 zip → 400 오류 메시지 표시
- [ ] 중복 slug zip → 409 오류 메시지 표시
- [ ] 정상 zip → GitHub에 커밋 생성 확인
- [ ] Supabase templates 테이블에 레코드 추가 확인 (status: draft)
- [ ] Vercel 자동 배포 트리거 확인
- [ ] Sidebar에 "업로드" 메뉴 표시 확인
