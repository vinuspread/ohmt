import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { FaqManager } from "@/app/admin/_components/faqs/FaqManager";
import { createClient } from "@/lib/supabase/server";
import type { Faq } from "@/types/template";

export default async function FaqsPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("faqs").select("*").order("sort_order", { ascending: true });
  const faqs: Faq[] = error ? [] : data ?? [];

  return (
    <AdminShell title="FAQ">
      <FaqManager data={faqs} />
    </AdminShell>
  );
}
