import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { OrderTable } from "@/app/admin/_components/orders/OrderTable";
import { createClient } from "@/lib/supabase/server";
import type { Order } from "@/types/template";

export default async function OrdersPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("orders").select("*").order("created_at", { ascending: false });
  const orders: Order[] = error ? [] : data ?? [];

  return (
    <AdminShell title="Orders">
      <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
        <OrderTable data={orders} />
      </div>
    </AdminShell>
  );
}
