import { NextResponse } from "next/server";
import { getAllowedAdminEmails, isAllowedAdminEmail } from "@/lib/admin-auth";
import { pushFilesToGitHub } from "@/lib/github";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { extractAndValidateZip } from "@/lib/zip";

export const runtime = "nodejs";
export const maxDuration = 60;

type UploadLanguage = "en" | "ko";

export async function POST(request: Request) {
  const authError = await validateAdminUser();
  if (authError) return authError;

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "업로드 요청 형식이 올바르지 않습니다." }, { status: 400 });
  }

  const file = formData.get("file");
  const lang = parseUploadLanguage(formData.get("lang"));

  if (!(file instanceof File) || !isZipFile(file)) {
    return NextResponse.json({ error: "zip 파일만 업로드 가능합니다." }, { status: 400 });
  }

  if (file.size > 50 * 1024 * 1024) {
    return NextResponse.json({ error: "파일 크기는 50MB 이하여야 합니다." }, { status: 400 });
  }

  let extracted: ReturnType<typeof extractAndValidateZip>;
  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    extracted = extractAndValidateZip(buffer, lang);
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "zip 검증 실패" }, { status: 400 });
  }

  const { slug, themeJson, files } = extracted;
  const supabase = createAdminClient();
  const { data: existing, error: lookupError } = await supabase.from("templates").select("id").eq("slug", slug).maybeSingle();

  if (lookupError) {
    return NextResponse.json({ error: "템플릿 확인에 실패했습니다." }, { status: 500 });
  }

  if (lang === "en" && existing) {
    return NextResponse.json({ error: `이미 존재하는 slug입니다: ${slug}` }, { status: 409 });
  }

  if (lang === "ko" && !existing) {
    return NextResponse.json({ error: `영문 템플릿을 먼저 등록해주세요: ${slug}` }, { status: 404 });
  }

  let commitSha: string;
  try {
    commitSha = await pushFilesToGitHub(files, `feat: add ${slug} template (${lang})`);
  } catch (error) {
    console.error("GitHub push 실패:", error);
    return NextResponse.json({ error: "GitHub push에 실패했습니다." }, { status: 502 });
  }

  if (lang === "en") {
    const { error: insertError } = await supabase.from("templates").insert({
      slug,
      name_en: themeJson.name ?? slug,
      name_ko: themeJson.name_ko ?? null,
      category: themeJson.category ?? "uncategorized",
      description_en: themeJson.description ?? null,
      description_ko: themeJson.description_ko ?? null,
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

function parseUploadLanguage(value: FormDataEntryValue | null): UploadLanguage {
  return value === "ko" ? "ko" : "en";
}

function isZipFile(file: File): boolean {
  return file.name.toLowerCase().endsWith(".zip") || file.type === "application/zip" || file.type === "application/x-zip-compressed";
}

async function validateAdminUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });
  }

  const allowedEmails = getAllowedAdminEmails();

  if (allowedEmails.length === 0) {
    return NextResponse.json({ error: "관리자 접근 설정이 필요합니다." }, { status: 403 });
  }

  if (!isAllowedAdminEmail(user.email, allowedEmails)) {
    return NextResponse.json({ error: "권한이 없습니다." }, { status: 403 });
  }

  return null;
}
