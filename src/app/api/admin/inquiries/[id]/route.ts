import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import type { InquiryStatus } from "@/types/template";

interface InquiryPatchBody {
  status?: unknown;
  note?: unknown;
}

const inquiryStatuses: InquiryStatus[] = ["new", "in_progress", "done", "cancelled"];

function isInquiryStatus(value: unknown): value is InquiryStatus {
  return typeof value === "string" && inquiryStatuses.includes(value as InquiryStatus);
}

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const body = (await request.json().catch(() => null)) as InquiryPatchBody | null;
  const updates: { status?: InquiryStatus; note?: string | null } = {};

  if (!body) {
    return NextResponse.json({ error: "수정 입력값이 올바르지 않습니다." }, { status: 400 });
  }

  if (body.status !== undefined) {
    if (!isInquiryStatus(body.status)) {
      return NextResponse.json({ error: "문의 상태가 올바르지 않습니다." }, { status: 400 });
    }
    updates.status = body.status;
  }

  if (body.note !== undefined) {
    if (typeof body.note !== "string" && body.note !== null) {
      return NextResponse.json({ error: "메모 입력값이 올바르지 않습니다." }, { status: 400 });
    }
    updates.note = typeof body.note === "string" && body.note.trim().length > 0 ? body.note.trim() : null;
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: "변경할 문의 정보가 없습니다." }, { status: 400 });
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase.from("inquiries").update(updates).eq("id", id).select("*").single();

  if (error) return NextResponse.json({ error: "문의 정보 변경에 실패했습니다." }, { status: 500 });

  return NextResponse.json(data);
}
