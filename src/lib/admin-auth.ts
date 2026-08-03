import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export function getAllowedAdminEmails() {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export function isAllowedAdminEmail(email: string | null | undefined, allowedEmails = getAllowedAdminEmails()) {
  return typeof email === "string" && allowedEmails.includes(email.trim().toLowerCase());
}

export async function validateAdminUser() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });

  const allowedEmails = getAllowedAdminEmails();
  if (allowedEmails.length === 0) return NextResponse.json({ error: "관리자 접근 설정이 필요합니다." }, { status: 403 });
  if (!isAllowedAdminEmail(user.email, allowedEmails)) return NextResponse.json({ error: "권한이 없습니다." }, { status: 403 });

  return null;
}
