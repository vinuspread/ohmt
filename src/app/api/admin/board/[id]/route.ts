import { NextResponse } from "next/server";
import { validateAdminUser } from "@/lib/admin-auth";
import { createAdminClient } from "@/lib/supabase/admin";

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
    .select("id, lang, title, author_name, contact, content, is_secret, answer, answered_at, created_at, updated_at")
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
