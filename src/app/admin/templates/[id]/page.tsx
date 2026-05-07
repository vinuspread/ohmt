import { notFound } from "next/navigation";

import { AdminShell } from "@/components/admin/AdminShell";
import { TemplateForm } from "@/components/admin/TemplateForm";
import { requireAdminUser } from "@/lib/admin/auth";
import { listTemplateRuntimeOptions } from "@/lib/admin/runtime-routes";
import { getTemplateById, listTemplateTypes } from "@/lib/admin/store";
import { updateTemplateAction } from "@/app/admin/_actions/templates";

export default async function TemplateEditPage({ params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdminUser();
  if (!admin) return null;

  const { id } = await params;
  const template = await getTemplateById(id);
  if (!template) {
    notFound();
  }

  const templateTypes = await listTemplateTypes();
  const runtimeOptions = await listTemplateRuntimeOptions();

  return (
    <AdminShell title={`템플릿 수정: ${template.name}`} subtitle={`slug: ${template.slug}`} adminEmail={admin.email}>
      <TemplateForm action={updateTemplateAction} templateTypes={templateTypes} runtimeOptions={runtimeOptions} initial={template} />
    </AdminShell>
  );
}
