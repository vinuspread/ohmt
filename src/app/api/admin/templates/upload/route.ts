import { NextResponse } from "next/server";
import { getAllowedAdminEmails, isAllowedAdminEmail } from "@/lib/admin-auth";
import { pushFilesToGitHub } from "@/lib/github";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { extractAndValidateZip } from "@/lib/zip";
import { downloadFromR2, deleteFromR2 } from "@/lib/r2";
import { pullLocalRepoIfDev } from "@/lib/local-fs";

export const runtime = "nodejs";
export const maxDuration = 60;

type UploadLanguage = "en" | "ko";

export async function POST(request: Request) {
  const authError = await validateAdminUser();
  if (authError) return authError;

  let body: { r2Key: string; lang?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "요청 형식이 올바르지 않습니다." }, { status: 400 });
  }

  const { r2Key, lang: langParam } = body;
  const lang: UploadLanguage = langParam === "ko" ? "ko" : "en";

  if (!r2Key || !r2Key.startsWith("uploads/tmp/")) {
    return NextResponse.json({ error: "유효하지 않은 파일 키입니다." }, { status: 400 });
  }

  let buffer: Buffer;
  try {
    buffer = await downloadFromR2(r2Key);
  } catch {
    return NextResponse.json({ error: "파일 다운로드에 실패했습니다." }, { status: 502 });
  }

  let extracted: ReturnType<typeof extractAndValidateZip>;
  try {
    extracted = extractAndValidateZip(buffer, lang);
  } catch (error) {
    await deleteFromR2(r2Key).catch(() => {});
    return NextResponse.json({ error: error instanceof Error ? error.message : "zip 검증 실패" }, { status: 400 });
  }

  const { slug, name, description, themeJson, files } = extracted;
  const supabase = createAdminClient();
  const { data: existing, error: lookupError } = await supabase
    .from("templates")
    .select("id")
    .eq("slug", slug)
    .eq("lang", lang)
    .maybeSingle();

  if (lookupError) {
    return NextResponse.json({ error: "템플릿 확인에 실패했습니다." }, { status: 500 });
  }

  if (existing) {
    return NextResponse.json({ error: `이미 존재하는 템플릿입니다: ${slug} (${lang})` }, { status: 409 });
  }

  let commitSha: string;
  try {
    commitSha = await pushFilesToGitHub(files, `feat: add ${slug} template (${lang})`);
  } catch (error) {
    console.error("GitHub push 실패:", error);
    return NextResponse.json({ error: "GitHub push에 실패했습니다." }, { status: 502 });
  }

  await deleteFromR2(r2Key).catch(() => {});
  await pullLocalRepoIfDev();

  const { error: insertError } = await supabase.from("templates").insert({
    slug,
    lang,
    name,
    category: themeJson.category ?? "uncategorized",
    description,
    thumbnail_url: `/templates/${slug}/thumbnail.jpg`,
    price: 0,
    status: "uploaded",
    sort_order: 999,
    is_featured: false,
    tags: themeJson.tags ?? [],
  });

  if (insertError) {
    console.error("Supabase insert 실패:", insertError);
    return NextResponse.json({ error: "메타데이터 등록에 실패했습니다. GitHub push는 성공했습니다." }, { status: 500 });
  }

  return NextResponse.json(
    {
      slug,
      name,
      githubCommitSha: commitSha,
      templateUrl: `/${lang}/templates/${slug}`,
    },
    { status: 201 }
  );
}

async function validateAdminUser() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });

  const allowedEmails = getAllowedAdminEmails();
  if (allowedEmails.length === 0) return NextResponse.json({ error: "관리자 접근 설정이 필요합니다." }, { status: 403 });
  if (!isAllowedAdminEmail(user.email, allowedEmails)) return NextResponse.json({ error: "권한이 없습니다." }, { status: 403 });

  return null;
}
