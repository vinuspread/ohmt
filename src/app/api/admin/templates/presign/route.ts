import { NextResponse } from "next/server";
import { getAllowedAdminEmails, isAllowedAdminEmail } from "@/lib/admin-auth";
import { createClient } from "@/lib/supabase/server";
import { getPresignedUploadUrl } from "@/lib/r2";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });

  const allowedEmails = getAllowedAdminEmails();
  if (!isAllowedAdminEmail(user.email, allowedEmails)) {
    return NextResponse.json({ error: "권한이 없습니다." }, { status: 403 });
  }

  const { filename } = await request.json();
  if (!filename || !filename.endsWith(".zip")) {
    return NextResponse.json({ error: "zip 파일만 허용됩니다." }, { status: 400 });
  }

  const key = `uploads/tmp/${Date.now()}-${filename}`;
  const uploadUrl = await getPresignedUploadUrl(key, "application/zip");

  return NextResponse.json({ uploadUrl, key });
}
