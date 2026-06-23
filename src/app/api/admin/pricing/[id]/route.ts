import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

interface PricingPatchBody {
  name?: string;
  description?: string;
  price?: string;
  duration?: string;
  features?: string[];
  is_recommended?: boolean;
  is_active?: boolean;
  sort_order?: number;
}

function hasInvalidText(value: unknown) {
  return typeof value !== "string" || value.trim().length === 0;
}

function hasInvalidFeatures(value: unknown) {
  return !Array.isArray(value) || value.some((feature) => typeof feature !== "string" || feature.trim().length === 0);
}

function hasInvalidPatch(body: PricingPatchBody) {
  if (body.name !== undefined && hasInvalidText(body.name)) return true;
  if (body.description !== undefined && hasInvalidText(body.description)) return true;
  if (body.price !== undefined && hasInvalidText(body.price)) return true;
  if (body.duration !== undefined && hasInvalidText(body.duration)) return true;
  if (body.features !== undefined && hasInvalidFeatures(body.features)) return true;
  if (body.is_recommended !== undefined && typeof body.is_recommended !== "boolean") return true;
  if (body.is_active !== undefined && typeof body.is_active !== "boolean") return true;
  if (body.sort_order !== undefined && typeof body.sort_order !== "number") return true;
  return false;
}

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const body = (await request.json()) as PricingPatchBody;

  if (hasInvalidPatch(body)) {
    return NextResponse.json({ error: "수정 입력값이 올바르지 않습니다." }, { status: 400 });
  }

  const updates: PricingPatchBody = {};
  if (body.name !== undefined) updates.name = body.name.trim();
  if (body.description !== undefined) updates.description = body.description.trim();
  if (body.price !== undefined) updates.price = body.price.trim();
  if (body.duration !== undefined) updates.duration = body.duration.trim();
  if (body.features !== undefined) updates.features = body.features.map((feature) => feature.trim());
  if (body.is_recommended !== undefined) updates.is_recommended = body.is_recommended;
  if (body.is_active !== undefined) updates.is_active = body.is_active;
  if (body.sort_order !== undefined) updates.sort_order = body.sort_order;

  const supabase = createAdminClient();
  const { data, error } = await supabase.from("pricing_packages").update(updates).eq("id", id).select("*").single();

  if (error) return NextResponse.json({ error: "가격 패키지 수정에 실패했습니다." }, { status: 500 });

  return NextResponse.json(data);
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const supabase = createAdminClient();
  const { error } = await supabase.from("pricing_packages").delete().eq("id", id);

  if (error) return NextResponse.json({ error: "가격 패키지 삭제에 실패했습니다." }, { status: 500 });

  return NextResponse.json({ success: true });
}
