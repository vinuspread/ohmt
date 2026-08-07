import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { verifyBoardPassword } from "@/lib/board-password";

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  const password = body?.password;

  if (!password) return NextResponse.json({ error: "비밀번호를 입력해주세요." }, { status: 400 });

  const supabase = createAdminClient();
  const { data: post, error } = await supabase
    .from("board_posts")
    .select("id, title, author_name, content, password_hash, is_secret, answer, created_at")
    .eq("id", id)
    .maybeSingle();

  if (error) return NextResponse.json({ error: "게시글 조회에 실패했습니다." }, { status: 500 });
  if (!post) return NextResponse.json({ error: "게시글을 찾을 수 없습니다." }, { status: 404 });

  if (!post.is_secret || !verifyBoardPassword(password, post.password_hash)) {
    return NextResponse.json({ error: "비밀번호가 일치하지 않습니다." }, { status: 401 });
  }

  return NextResponse.json({
    id: post.id,
    title: post.title,
    authorName: post.author_name,
    content: post.content,
    isSecret: true,
    locked: false,
    answer: post.answer,
    createdAt: post.created_at,
  });
}
