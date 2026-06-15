import Link from "next/link";
import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { UploadForm } from "@/app/admin/_components/templates/UploadForm";
import { Button } from "@/app/admin/_components/ui/Button";

export default function UploadTemplatePage() {
  return (
    <AdminShell
      title="템플릿 업로드"
      action={
        <Link href="/admin/templates">
          <Button variant="ghost" size="sm">
            ← 목록
          </Button>
        </Link>
      }
    >
      <div className="max-w-2xl rounded-xl border border-zinc-200 bg-white p-8">
        <UploadForm />
      </div>
    </AdminShell>
  );
}
