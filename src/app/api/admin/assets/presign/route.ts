import { NextResponse } from "next/server";
import { getAllowedAdminEmails, isAllowedAdminEmail } from "@/lib/admin-auth";
import { createClient } from "@/lib/supabase/server";
import { getPresignedUploadUrl, R2_PUBLIC_DOMAIN } from "@/lib/r2";

export const runtime = "nodejs";

const ALLOWED_EXTENSIONS = [".mp4", ".webm", ".mov", ".ogg"];
const CONTENT_TYPES: Record<string, string> = {
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mov": "video/quicktime",
  ".ogg": "video/ogg",
};

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });

  const allowedEmails = getAllowedAdminEmails();
  if (!isAllowedAdminEmail(user.email, allowedEmails)) {
    return NextResponse.json({ error: "권한이 없습니다." }, { status: 403 });
  }

  const { filename } = (await request.json()) as { filename: string };
  if (!filename) return NextResponse.json({ error: "파일명이 필요합니다." }, { status: 400 });

  const dotIndex = filename.lastIndexOf(".");
  const ext = dotIndex >= 0 ? filename.slice(dotIndex).toLowerCase() : "";
  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    return NextResponse.json({ error: `허용되지 않는 형식입니다. (${ALLOWED_EXTENSIONS.join(", ")})` }, { status: 400 });
  }

  // 파일명 중복 방지: 원본명-uuid8자리.ext
  const basename = filename.slice(0, dotIndex);
  const safeName = basename.replace(/[^a-zA-Z0-9가-힣_-]/g, "-").replace(/-{2,}/g, "-").replace(/^-|-$/g, "");
  const uniqueSuffix = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
  const key = `videos/${safeName}-${uniqueSuffix}${ext}`;

  const contentType = CONTENT_TYPES[ext];
  const uploadUrl = await getPresignedUploadUrl(key, contentType);
  const publicUrl = `${R2_PUBLIC_DOMAIN}/${key}`;

  return NextResponse.json({ uploadUrl, key, publicUrl });
}
