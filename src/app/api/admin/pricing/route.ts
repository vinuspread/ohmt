import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import type { TemplateLang } from "@/types/template";

const pricingLangs: TemplateLang[] = ["en", "ko"];

interface PricingRequestBody {
  lang?: TemplateLang;
  slug?: string;
  name?: string;
  description?: string;
  price?: string;
  duration?: string;
  features?: string[];
  is_recommended?: boolean;
  is_active?: boolean;
  sort_order?: number;
}

function isTemplateLang(value: unknown): value is TemplateLang {
  return typeof value === "string" && pricingLangs.includes(value as TemplateLang);
}

function hasText(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function hasValidFeatures(value: unknown) {
  return Array.isArray(value) && value.every((feature) => typeof feature === "string" && feature.trim().length > 0);
}

function validatePricingBody(body: PricingRequestBody) {
  if (!isTemplateLang(body.lang)) return false;
  if (!hasText(body.slug) || !hasText(body.name) || !hasText(body.description) || !hasText(body.price) || !hasText(body.duration)) return false;
  if (!hasValidFeatures(body.features)) return false;
  if (body.is_recommended !== undefined && typeof body.is_recommended !== "boolean") return false;
  if (body.is_active !== undefined && typeof body.is_active !== "boolean") return false;
  if (body.sort_order !== undefined && typeof body.sort_order !== "number") return false;
  return true;
}

export async function GET() {
  const supabase = createAdminClient();
  const { data, error } = await supabase.from("pricing_packages").select("*").order("lang").order("sort_order", { ascending: true });

  if (error) return NextResponse.json({ error: "가격 패키지 목록 조회에 실패했습니다." }, { status: 500 });

  return NextResponse.json(data ?? []);
}

export async function POST(request: Request) {
  const body = (await request.json()) as PricingRequestBody;

  if (!validatePricingBody(body)) {
    return NextResponse.json({ error: "필수 입력값이 올바르지 않습니다." }, { status: 400 });
  }

  const lang = body.lang!;
  const slug = body.slug!.trim();
  const supabase = createAdminClient();

  const { data: existing, error: lookupError } = await supabase.from("pricing_packages").select("id").eq("lang", lang).eq("slug", slug).maybeSingle();
  if (lookupError) return NextResponse.json({ error: "가격 패키지 확인에 실패했습니다." }, { status: 500 });
  if (existing) return NextResponse.json({ error: "이미 사용 중인 언어+슬러그 조합입니다." }, { status: 409 });

  const { data, error } = await supabase
    .from("pricing_packages")
    .insert({
      lang,
      slug,
      name: body.name!.trim(),
      description: body.description!.trim(),
      price: body.price!.trim(),
      duration: body.duration!.trim(),
      features: body.features!.map((feature) => feature.trim()),
      is_recommended: body.is_recommended ?? false,
      is_active: body.is_active ?? true,
      sort_order: body.sort_order ?? 0,
    })
    .select("*")
    .single();

  if (error) return NextResponse.json({ error: "가격 패키지 생성에 실패했습니다." }, { status: 500 });

  return NextResponse.json(data, { status: 201 });
}
