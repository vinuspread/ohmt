import { notFound } from "next/navigation";
import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { TemplateForm } from "@/app/admin/_components/templates/TemplateForm";
import { createClient } from "@/lib/supabase/server";
import type { Template } from "@/types/template";

export default async function EditTemplatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data, error } = await supabase.from("templates").select("*").eq("id", id).maybeSingle();

  if (error || !data) notFound();

  const template = data as Template;

  return (
    <AdminShell title={`수정: ${template.name_en}`}>
      <div className="bg-white rounded-xl border border-zinc-200 p-8 max-w-4xl">
        <TemplateForm mode="edit" initialData={template} />
      </div>
    </AdminShell>
  );
}
