import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

interface CategoryPatchBody {
  name?: string;
  sort_order?: number;
}

function hasInvalidPatch(body: CategoryPatchBody) {
  if (body.name !== undefined && !body.name.trim()) return true;
  if (body.sort_order !== undefined && typeof body.sort_order !== "number") return true;
  return false;
}

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const body = (await request.json()) as CategoryPatchBody;

  if (hasInvalidPatch(body)) {
    return NextResponse.json({ error: "수정 입력값이 올바르지 않습니다." }, { status: 400 });
  }

  const supabase = createAdminClient();

  const { data: current, error: lookupError } = await supabase.from("categories").select("*").eq("id", id).maybeSingle();
  if (lookupError) return NextResponse.json({ error: "카테고리 조회에 실패했습니다." }, { status: 500 });
  if (!current) return NextResponse.json({ error: "카테고리를 찾을 수 없습니다." }, { status: 404 });

  const nextName = body.name?.trim();

  if (nextName && nextName !== current.name) {
    const { data: duplicate, error: duplicateError } = await supabase
      .from("categories")
      .select("id")
      .eq("name", nextName)
      .neq("id", id)
      .maybeSingle();

    if (duplicateError) return NextResponse.json({ error: "카테고리 확인에 실패했습니다." }, { status: 500 });
    if (duplicate) return NextResponse.json({ error: "이미 사용 중인 카테고리 이름입니다." }, { status: 409 });
  }

  const { data, error } = await supabase
    .from("categories")
    .update({ name: nextName ?? current.name, sort_order: body.sort_order ?? current.sort_order })
    .eq("id", id)
    .select("*")
    .single();

  if (error) return NextResponse.json({ error: "카테고리 수정에 실패했습니다." }, { status: 500 });

  if (nextName && nextName !== current.name) {
    const { error: cascadeError } = await supabase.from("templates").update({ category: nextName }).eq("category", current.name);
    if (cascadeError) return NextResponse.json({ error: "카테고리 이름 변경은 됐지만, 연결된 템플릿 갱신에 실패했습니다." }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const supabase = createAdminClient();

  const { data: current, error: lookupError } = await supabase.from("categories").select("*").eq("id", id).maybeSingle();
  if (lookupError) return NextResponse.json({ error: "카테고리 조회에 실패했습니다." }, { status: 500 });
  if (!current) return NextResponse.json({ error: "카테고리를 찾을 수 없습니다." }, { status: 404 });

  const { count, error: usageError } = await supabase
    .from("templates")
    .select("id", { count: "exact", head: true })
    .eq("category", current.name);

  if (usageError) return NextResponse.json({ error: "카테고리 사용 여부 확인에 실패했습니다." }, { status: 500 });
  if (count && count > 0) {
    return NextResponse.json({ error: `이 카테고리를 사용 중인 템플릿이 ${count}개 있어 삭제할 수 없습니다.` }, { status: 409 });
  }

  const { error } = await supabase.from("categories").delete().eq("id", id);
  if (error) return NextResponse.json({ error: "카테고리 삭제에 실패했습니다." }, { status: 500 });

  return NextResponse.json({ success: true });
}
