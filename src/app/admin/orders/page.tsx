import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { InquiryTable } from "@/app/admin/_components/orders/InquiryTable";
import { OrderTable } from "@/app/admin/_components/orders/OrderTable";
import { createAdminClient } from "@/lib/supabase/admin";
import type { Inquiry, Order } from "@/types/template";

export const dynamic = "force-dynamic";

export default async function OrdersPage() {
  const supabase = createAdminClient();
  const [ordersResult, inquiriesResult] = await Promise.all([
    supabase.from("orders").select("*").order("created_at", { ascending: false }),
    supabase.from("inquiries").select("*").order("created_at", { ascending: false }),
  ]);

  const orders: Order[] = ordersResult.error ? [] : ordersResult.data ?? [];
  const inquiries: Inquiry[] = inquiriesResult.error ? [] : inquiriesResult.data ?? [];

  return (
    <AdminShell title="Orders">
      <div className="space-y-8">
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-500">문의 접수</h2>
          <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
            <InquiryTable data={inquiries} />
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-500">주문 내역</h2>
          <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
            <OrderTable data={orders} />
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
