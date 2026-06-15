import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import type { OrderStatus } from "@/types/template";

const orderStatuses: OrderStatus[] = ["pending", "paid", "cancelled"];

function isOrderStatus(value: unknown): value is OrderStatus {
  return typeof value === "string" && orderStatuses.includes(value as OrderStatus);
}

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const body = (await request.json()) as { status?: unknown };

  if (!isOrderStatus(body.status)) {
    return NextResponse.json({ error: "주문 상태가 올바르지 않습니다." }, { status: 400 });
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase.from("orders").update({ status: body.status }).eq("id", id).select("*").single();

  if (error) return NextResponse.json({ error: "주문 상태 변경에 실패했습니다." }, { status: 500 });

  return NextResponse.json(data);
}
