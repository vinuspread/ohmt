import { NextResponse } from "next/server";
import { getAllowedAdminEmails, isAllowedAdminEmail } from "@/lib/admin-auth";
import { createClient } from "@/lib/supabase/server";
import { listR2Objects, R2_PUBLIC_DOMAIN } from "@/lib/r2";

export const runtime = "nodejs";

const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".mov", ".ogg", ".m4v", ".avi"]);

function isVideoFile(key: string) {
  const ext = key.slice(key.lastIndexOf(".")).toLowerCase();
  return VIDEO_EXTENSIONS.has(ext);
}

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });

  const allowedEmails = getAllowedAdminEmails();
  if (!isAllowedAdminEmail(user.email, allowedEmails)) {
    return NextResponse.json({ error: "권한이 없습니다." }, { status: 403 });
  }

  try {
    const all = await listR2Objects();
    const assets = all
      .filter((obj) => isVideoFile(obj.key) && !obj.key.startsWith("uploads/tmp/"))
      .sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime())
      .map((obj) => ({
        key: obj.key,
        filename: obj.key.includes("/") ? obj.key.slice(obj.key.lastIndexOf("/") + 1) : obj.key,
        publicUrl: `${R2_PUBLIC_DOMAIN}/${obj.key}`,
        size: obj.size,
        lastModified: obj.lastModified.toISOString(),
      }));

    return NextResponse.json(assets);
  } catch (err) {
    console.error("[assets list error]", err);
    return NextResponse.json({ error: "파일 목록을 불러오지 못했습니다." }, { status: 500 });
  }
}
