import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { InquiryTable } from "@/app/admin/_components/orders/InquiryTable";
import { createAdminClient } from "@/lib/supabase/admin";
import type { Inquiry } from "@/types/template";

export const dynamic = "force-dynamic";

export default async function OrdersPage() {
  const supabase = createAdminClient();

  const [inquiriesResult, templatesResult] = await Promise.all([
    supabase.from("inquiries").select("*").order("created_at", { ascending: false }),
    supabase.from("templates").select("name, slug, thumbnail_url, lang").eq("status", "published"),
  ]);

  const inquiries: Inquiry[] = inquiriesResult.error ? [] : inquiriesResult.data ?? [];
  const templates = (templatesResult.data ?? []) as { name: string; slug: string; thumbnail_url: string | null; lang: string }[];

  return (
    <AdminShell title="문의 접수">
      <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
        <InquiryTable data={inquiries} templates={templates} />
      </div>
    </AdminShell>
  );
}
