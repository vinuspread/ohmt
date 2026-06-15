import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { TemplateTable } from "@/app/admin/_components/templates/TemplateTable";
import { createClient } from "@/lib/supabase/server";
import type { Template } from "@/types/template";

export default async function TemplatesPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("templates").select("*").order("sort_order", { ascending: true });
  const templates: Template[] = error ? [] : data ?? [];

  return (
    <AdminShell title="Templates">
      <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
        <TemplateTable data={templates} />
      </div>
    </AdminShell>
  );
}
