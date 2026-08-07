import { NextResponse } from "next/server";
import { getAllowedAdminEmails, isAllowedAdminEmail } from "@/lib/admin-auth";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

async function validateAdminUser() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });

  const allowedEmails = getAllowedAdminEmails();
  if (allowedEmails.length === 0) return NextResponse.json({ error: "관리자 접근 설정이 필요합니다." }, { status: 403 });
  if (!isAllowedAdminEmail(user.email, allowedEmails)) return NextResponse.json({ error: "권한이 없습니다." }, { status: 403 });

  return null;
}

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const authError = await validateAdminUser();
  if (authError) return authError;

  const { id } = await context.params;
  const body = (await request.json().catch(() => null)) as { answer?: string } | null;

  if (!body || typeof body.answer !== "string") {
    return NextResponse.json({ error: "답변 내용이 올바르지 않습니다." }, { status: 400 });
  }

  const supabase = createAdminClient();
  const answer = body.answer.trim();
  const { data, error } = await supabase
    .from("board_posts")
    .update({ answer: answer || null, answered_at: answer ? new Date().toISOString() : null })
    .eq("id", id)
    .select("*")
    .single();

  if (error) return NextResponse.json({ error: "답변 저장에 실패했습니다." }, { status: 500 });

  return NextResponse.json(data);
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  const authError = await validateAdminUser();
  if (authError) return authError;

  const { id } = await context.params;
  const supabase = createAdminClient();
  const { error } = await supabase.from("board_posts").delete().eq("id", id);

  if (error) return NextResponse.json({ error: "게시글 삭제에 실패했습니다." }, { status: 500 });

  return NextResponse.json({ success: true });
}
