import { NextResponse } from "next/server";
import { getAllowedAdminEmails, isAllowedAdminEmail } from "@/lib/admin-auth";
import { createClient } from "@/lib/supabase/server";
import { listR2Objects, R2_PUBLIC_DOMAIN } from "@/lib/r2";

export const runtime = "nodejs";

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });

  const allowedEmails = getAllowedAdminEmails();
  if (!isAllowedAdminEmail(user.email, allowedEmails)) {
    return NextResponse.json({ error: "권한이 없습니다." }, { status: 403 });
  }

  const objects = await listR2Objects("videos/");
  const assets = objects
    .sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime())
    .map((obj) => ({
      key: obj.key,
      filename: obj.key.replace("videos/", ""),
      publicUrl: `${R2_PUBLIC_DOMAIN}/${obj.key}`,
      size: obj.size,
      lastModified: obj.lastModified.toISOString(),
    }));

  return NextResponse.json(assets);
}
