import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

interface CategoryRequestBody {
  name?: string;
  sort_order?: number;
}

function validateCategoryBody(body: CategoryRequestBody) {
  if (typeof body.name !== "string" || !body.name.trim()) return false;
  if (body.sort_order !== undefined && typeof body.sort_order !== "number") return false;
  return true;
}

export async function GET() {
  const supabase = createAdminClient();
  const { data, error } = await supabase.from("categories").select("*").order("sort_order", { ascending: true });
  if (error) return NextResponse.json({ error: "카테고리 목록 조회에 실패했습니다." }, { status: 500 });

  return NextResponse.json(data ?? []);
}

export async function POST(request: Request) {
  const body = (await request.json()) as CategoryRequestBody;

  if (!validateCategoryBody(body)) {
    return NextResponse.json({ error: "필수 입력값이 올바르지 않습니다." }, { status: 400 });
  }

  const name = body.name!.trim();
  const supabase = createAdminClient();

  const { data: existing, error: lookupError } = await supabase.from("categories").select("id").eq("name", name).maybeSingle();
  if (lookupError) return NextResponse.json({ error: "카테고리 확인에 실패했습니다." }, { status: 500 });
  if (existing) return NextResponse.json({ error: "이미 사용 중인 카테고리 이름입니다." }, { status: 409 });

  const { data, error } = await supabase
    .from("categories")
    .insert({ name, sort_order: body.sort_order ?? 0 })
    .select("*")
    .single();

  if (error) return NextResponse.json({ error: "카테고리 생성에 실패했습니다." }, { status: 500 });

  return NextResponse.json(data, { status: 201 });
}
