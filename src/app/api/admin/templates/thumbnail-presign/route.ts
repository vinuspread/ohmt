import { NextResponse } from "next/server";
import { getAllowedAdminEmails, isAllowedAdminEmail } from "@/lib/admin-auth";
import { createClient } from "@/lib/supabase/server";
import { getPresignedUploadUrl, R2_PUBLIC_DOMAIN } from "@/lib/r2";

export const runtime = "nodejs";

const ALLOWED_CONTENT_TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

const MAX_SIZE_BYTES = 5 * 1024 * 1024;

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });

  const allowedEmails = getAllowedAdminEmails();
  if (!isAllowedAdminEmail(user.email, allowedEmails)) {
    return NextResponse.json({ error: "권한이 없습니다." }, { status: 403 });
  }

  const { contentType, size } = await request.json();
  const extension = ALLOWED_CONTENT_TYPES[contentType];

  if (!extension) {
    return NextResponse.json({ error: "jpg, png, webp 이미지만 업로드할 수 있습니다." }, { status: 400 });
  }

  if (typeof size !== "number" || size > MAX_SIZE_BYTES) {
    return NextResponse.json({ error: "이미지 용량은 5MB 이하여야 합니다." }, { status: 400 });
  }

  const key = `templates/thumbnails/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${extension}`;
  const uploadUrl = await getPresignedUploadUrl(key, contentType);
  const publicUrl = `${R2_PUBLIC_DOMAIN}/${key}`;

  return NextResponse.json({ uploadUrl, publicUrl });
}
