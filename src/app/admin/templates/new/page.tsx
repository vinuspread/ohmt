import Link from "next/link";
import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { TemplateForm } from "@/app/admin/_components/templates/TemplateForm";
import { Button } from "@/app/admin/_components/ui/Button";

export default function NewTemplatePage() {
  return (
    <AdminShell
      title="새 템플릿 등록"
      action={
        <Link href="/admin/templates">
          <Button variant="ghost" size="sm">← 목록</Button>
        </Link>
      }
    >
      <div className="bg-white rounded-xl border border-zinc-200 p-8 max-w-4xl">
        <TemplateForm mode="create" />
      </div>
    </AdminShell>
  );
}
