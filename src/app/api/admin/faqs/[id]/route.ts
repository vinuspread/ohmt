import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

interface FaqPatchBody {
  question?: string;
  answer?: string;
  sort_order?: number;
  is_active?: boolean;
}

function hasInvalidPatch(body: FaqPatchBody) {
  if (body.question !== undefined && (typeof body.question !== "string" || !body.question.trim())) return true;
  if (body.answer !== undefined && (typeof body.answer !== "string" || !body.answer.trim())) return true;
  if (body.sort_order !== undefined && typeof body.sort_order !== "number") return true;
  if (body.is_active !== undefined && typeof body.is_active !== "boolean") return true;
  return false;
}

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const body = (await request.json()) as FaqPatchBody;

  if (hasInvalidPatch(body)) {
    return NextResponse.json({ error: "수정 입력값이 올바르지 않습니다." }, { status: 400 });
  }

  const updates: FaqPatchBody = {};
  if (body.question !== undefined) updates.question = body.question.trim();
  if (body.answer !== undefined) updates.answer = body.answer.trim();
  if (body.sort_order !== undefined) updates.sort_order = body.sort_order;
  if (body.is_active !== undefined) updates.is_active = body.is_active;

  const supabase = createAdminClient();
  const { data, error } = await supabase.from("faqs").update(updates).eq("id", id).select("*").single();

  if (error) return NextResponse.json({ error: "FAQ 수정에 실패했습니다." }, { status: 500 });

  return NextResponse.json(data);
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const supabase = createAdminClient();
  const { error } = await supabase.from("faqs").delete().eq("id", id);

  if (error) return NextResponse.json({ error: "FAQ 삭제에 실패했습니다." }, { status: 500 });

  return NextResponse.json({ success: true });
}
