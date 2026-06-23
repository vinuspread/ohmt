import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { TemplateForm } from "@/app/admin/_components/templates/TemplateForm";
import { Button } from "@/app/admin/_components/ui/Button";
import { createClient } from "@/lib/supabase/server";
import { pullLocalRepoIfDev } from "@/lib/local-fs";
import type { Template } from "@/types/template";

export default async function RegisterTemplatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await pullLocalRepoIfDev();

  const supabase = await createClient();
  const { data, error } = await supabase.from("templates").select("*").eq("id", id).maybeSingle();

  if (error || !data) notFound();
  if (data.status !== "uploaded") redirect(`/admin/templates/${id}`);

  const template = data as Template;

  return (
    <AdminShell
      title={`등록: ${template.name} (${template.lang})`}
      action={
        <Link href="/admin/uploads">
          <Button variant="ghost" size="sm">← 목록</Button>
        </Link>
      }
    >
      <div className="bg-white rounded-xl border border-zinc-200 p-8 max-w-4xl">
        <TemplateForm mode="edit" initialData={template} />
      </div>
    </AdminShell>
  );
}
