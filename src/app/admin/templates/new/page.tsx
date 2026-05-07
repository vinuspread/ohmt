import { AdminShell } from "@/components/admin/AdminShell";
import { TemplateForm } from "@/components/admin/TemplateForm";
import { createTemplateAction } from "@/app/admin/_actions/templates";
import { requireAdminUser } from "@/lib/admin/auth";
import { listTemplateRuntimeOptions } from "@/lib/admin/runtime-routes";
import { listTemplateTypes } from "@/lib/admin/store";

export default async function NewTemplatePage() {
  const admin = await requireAdminUser();
  if (!admin) return null;

  const templateTypes = await listTemplateTypes();
  const runtimeOptions = await listTemplateRuntimeOptions();

  return (
    <AdminShell
      title="템플릿 등록"
      subtitle="slug는 자동 생성되며 썸네일 3장이 필수입니다."
      adminEmail={admin.email}
    >
      <TemplateForm action={createTemplateAction} templateTypes={templateTypes} runtimeOptions={runtimeOptions} />
    </AdminShell>
  );
}
