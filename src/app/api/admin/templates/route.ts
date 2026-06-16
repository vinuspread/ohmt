import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import type { TemplateLang, TemplateStatus } from "@/types/template";

const templateStatuses: TemplateStatus[] = ["draft", "published", "archived"];
const templateLangs: TemplateLang[] = ["en", "ko"];

interface TemplateRequestBody {
  slug?: string;
  lang?: TemplateLang;
  name?: string;
  category?: string;
  description?: string | null;
  thumbnail_url?: string | null;
  price?: number;
  status?: TemplateStatus;
  sort_order?: number;
  is_featured?: boolean;
  tags?: string[];
}

function isTemplateStatus(value: unknown): value is TemplateStatus {
  return typeof value === "string" && templateStatuses.includes(value as TemplateStatus);
}

function isTemplateLang(value: unknown): value is TemplateLang {
  return typeof value === "string" && templateLangs.includes(value as TemplateLang);
}

function validateTemplateBody(body: TemplateRequestBody) {
  if (!body.slug || !isTemplateLang(body.lang) || !body.name || !body.category || !isTemplateStatus(body.status)) return false;
  if (typeof body.price !== "number" || typeof body.sort_order !== "number" || typeof body.is_featured !== "boolean") return false;
  if (!Array.isArray(body.tags)) return false;
  return true;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const lang = searchParams.get("lang");
  const supabase = createAdminClient();

  if (slug && lang) {
    const { data, error } = await supabase.from("templates").select("id").eq("slug", slug).eq("lang", lang).maybeSingle();
    if (error) return NextResponse.json({ error: "템플릿 확인에 실패했습니다." }, { status: 500 });
    return NextResponse.json({ exists: Boolean(data) });
  }

  const { data, error } = await supabase.from("templates").select("*").order("sort_order", { ascending: true });
  if (error) return NextResponse.json({ error: "템플릿 목록 조회에 실패했습니다." }, { status: 500 });

  return NextResponse.json(data ?? []);
}

export async function POST(request: Request) {
  const body = (await request.json()) as TemplateRequestBody;

  if (!validateTemplateBody(body)) {
    return NextResponse.json({ error: "필수 입력값이 올바르지 않습니다." }, { status: 400 });
  }

  const supabase = createAdminClient();
  const { data: existing, error: lookupError } = await supabase
    .from("templates")
    .select("id")
    .eq("slug", body.slug)
    .eq("lang", body.lang)
    .maybeSingle();

  if (lookupError) return NextResponse.json({ error: "템플릿 확인에 실패했습니다." }, { status: 500 });
  if (existing) return NextResponse.json({ error: "이미 사용 중인 슬러그+언어 조합입니다." }, { status: 409 });

  const { data, error } = await supabase.from("templates").insert(body).select("*").single();
  if (error) return NextResponse.json({ error: "템플릿 생성에 실패했습니다." }, { status: 500 });

  return NextResponse.json(data, { status: 201 });
}
