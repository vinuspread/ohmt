import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const supabase = createAdminClient();
  const { data: post, error } = await supabase
    .from("board_posts")
    .select("id, title, author_name, content, is_secret, answer, created_at")
    .eq("id", id)
    .maybeSingle();

  if (error) return NextResponse.json({ error: "게시글 조회에 실패했습니다." }, { status: 500 });
  if (!post) return NextResponse.json({ error: "게시글을 찾을 수 없습니다." }, { status: 404 });

  if (post.is_secret) {
    return NextResponse.json({
      id: post.id,
      title: "비밀글입니다",
      authorName: post.author_name,
      isSecret: true,
      locked: true,
      createdAt: post.created_at,
    });
  }

  return NextResponse.json({
    id: post.id,
    title: post.title,
    authorName: post.author_name,
    content: post.content,
    isSecret: false,
    locked: false,
    answer: post.answer,
    createdAt: post.created_at,
  });
}
