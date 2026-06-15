import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import type { TemplateStatus } from "@/types/template";

const templateStatuses: TemplateStatus[] = ["draft", "published", "archived"];

interface TemplatePatchBody {
  name_en?: string;
  name_ko?: string | null;
  category?: string;
  description_en?: string | null;
  description_ko?: string | null;
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

function hasInvalidPatch(body: TemplatePatchBody) {
  if (body.status !== undefined && !isTemplateStatus(body.status)) return true;
  if (body.price !== undefined && typeof body.price !== "number") return true;
  if (body.sort_order !== undefined && typeof body.sort_order !== "number") return true;
  if (body.is_featured !== undefined && typeof body.is_featured !== "boolean") return true;
  if (body.tags !== undefined && !Array.isArray(body.tags)) return true;
  return false;
}

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const supabase = createAdminClient();
  const { data, error } = await supabase.from("templates").select("*").eq("id", id).maybeSingle();

  if (error) return NextResponse.json({ error: "템플릿 조회에 실패했습니다." }, { status: 500 });
  if (!data) return NextResponse.json({ error: "템플릿을 찾을 수 없습니다." }, { status: 404 });

  return NextResponse.json(data);
}

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const body = (await request.json()) as TemplatePatchBody;

  if (hasInvalidPatch(body)) {
    return NextResponse.json({ error: "수정 입력값이 올바르지 않습니다." }, { status: 400 });
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase.from("templates").update(body).eq("id", id).select("*").single();

  if (error) return NextResponse.json({ error: "템플릿 수정에 실패했습니다." }, { status: 500 });

  return NextResponse.json(data);
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const supabase = createAdminClient();
  const { error } = await supabase.from("templates").delete().eq("id", id);

  if (error) return NextResponse.json({ error: "템플릿 삭제에 실패했습니다." }, { status: 500 });

  return NextResponse.json({ success: true });
}
