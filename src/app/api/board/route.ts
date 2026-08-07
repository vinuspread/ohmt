import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { hashBoardPassword } from "@/lib/board-password";

type BoardLang = "en" | "ko";

interface BoardCreateBody {
  lang?: string;
  title?: string;
  authorName?: string;
  contact?: string;
  content?: string;
  password?: string;
  isSecret?: boolean;
  website?: string; // honeypot: real users never fill this
}

const MAX_TITLE = 120;
const MAX_CONTENT = 4000;
const MAX_NAME = 60;
const MAX_CONTACT = 120;

function isBoardLang(value: unknown): value is BoardLang {
  return value === "en" || value === "ko";
}

export async function GET(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get("lang");
  if (!isBoardLang(lang)) {
    return NextResponse.json({ error: "lang 파라미터가 올바르지 않습니다." }, { status: 400 });
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("board_posts")
    .select("id, title, author_name, is_secret, answer, created_at")
    .eq("lang", lang)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: "게시글 목록 조회에 실패했습니다." }, { status: 500 });
  }

  const posts = (data ?? []).map((post) => ({
    id: post.id,
    title: post.is_secret ? "비밀글입니다" : post.title,
    authorName: post.author_name,
    isSecret: post.is_secret,
    hasAnswer: Boolean(post.answer),
    createdAt: post.created_at,
  }));

  return NextResponse.json({ posts });
}

export async function POST(request: NextRequest) {
  let body: BoardCreateBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "요청 형식이 올바르지 않습니다." }, { status: 400 });
  }

  if (body.website) {
    // honeypot tripped: pretend success, do nothing
    return NextResponse.json({ id: "ok" }, { status: 201 });
  }

  const { lang, title, authorName, contact, content, password, isSecret } = body;

  if (!isBoardLang(lang)) return NextResponse.json({ error: "lang 값이 올바르지 않습니다." }, { status: 400 });
  if (!title?.trim() || title.length > MAX_TITLE) return NextResponse.json({ error: "제목을 확인해주세요." }, { status: 400 });
  if (!authorName?.trim() || authorName.length > MAX_NAME) return NextResponse.json({ error: "이름을 확인해주세요." }, { status: 400 });
  if (!contact?.trim() || contact.length > MAX_CONTACT) return NextResponse.json({ error: "연락처를 확인해주세요." }, { status: 400 });
  if (!content?.trim() || content.length > MAX_CONTENT) return NextResponse.json({ error: "내용을 확인해주세요." }, { status: 400 });
  if (!password || password.length < 4) return NextResponse.json({ error: "비밀번호는 4자 이상이어야 합니다." }, { status: 400 });

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("board_posts")
    .insert({
      lang,
      title: title.trim(),
      author_name: authorName.trim(),
      contact: contact.trim(),
      content: content.trim(),
      password_hash: hashBoardPassword(password),
      is_secret: Boolean(isSecret),
    })
    .select("id")
    .single();

  if (error) {
    return NextResponse.json({ error: "게시글 등록에 실패했습니다." }, { status: 500 });
  }

  return NextResponse.json({ id: data.id }, { status: 201 });
}
