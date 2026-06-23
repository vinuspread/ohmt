import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { PricingTable } from "@/app/admin/_components/pricing/PricingTable";
import { createClient } from "@/lib/supabase/server";
import type { PricingPackage } from "@/types/template";

export default async function PricingPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("pricing_packages").select("*").order("lang").order("sort_order", { ascending: true });
  const pricingPackages: PricingPackage[] = error ? [] : data ?? [];

  return (
    <AdminShell title="가격 패키지">
      <PricingTable data={pricingPackages} />
    </AdminShell>
  );
}
