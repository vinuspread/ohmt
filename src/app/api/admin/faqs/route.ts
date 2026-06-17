import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import type { TemplateLang } from "@/types/template";

const faqLangs: TemplateLang[] = ["en", "ko"];

interface FaqRequestBody {
  lang?: TemplateLang;
  question?: string;
  answer?: string;
  sort_order?: number;
  is_active?: boolean;
}

function isTemplateLang(value: unknown): value is TemplateLang {
  return typeof value === "string" && faqLangs.includes(value as TemplateLang);
}

function validateFaqBody(body: FaqRequestBody) {
  if (!isTemplateLang(body.lang)) return false;
  if (typeof body.question !== "string" || !body.question.trim()) return false;
  if (typeof body.answer !== "string" || !body.answer.trim()) return false;
  if (body.sort_order !== undefined && typeof body.sort_order !== "number") return false;
  if (body.is_active !== undefined && typeof body.is_active !== "boolean") return false;
  return true;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang");
  const supabase = createAdminClient();

  let query = supabase.from("faqs").select("*").order("sort_order", { ascending: true });

  if (lang) {
    if (!isTemplateLang(lang)) return NextResponse.json({ error: "언어 값이 올바르지 않습니다." }, { status: 400 });
    query = query.eq("lang", lang);
  }

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: "FAQ 목록 조회에 실패했습니다." }, { status: 500 });

  return NextResponse.json(data ?? []);
}

export async function POST(request: Request) {
  const body = (await request.json()) as FaqRequestBody;

  if (!validateFaqBody(body)) {
    return NextResponse.json({ error: "필수 입력값이 올바르지 않습니다." }, { status: 400 });
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("faqs")
    .insert({
      lang: body.lang,
      question: body.question!.trim(),
      answer: body.answer!.trim(),
      sort_order: body.sort_order ?? 0,
      is_active: body.is_active ?? true,
    })
    .select("*")
    .single();

  if (error) return NextResponse.json({ error: "FAQ 생성에 실패했습니다." }, { status: 500 });

  return NextResponse.json(data, { status: 201 });
}
