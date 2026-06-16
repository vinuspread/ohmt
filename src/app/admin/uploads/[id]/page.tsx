import Link from "next/link";
import { notFound } from "next/navigation";
import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { RegisterForm } from "@/app/admin/_components/uploads/RegisterForm";
import { Button } from "@/app/admin/_components/ui/Button";
import { createClient } from "@/lib/supabase/server";
import type { Template } from "@/types/template";

export default async function RegisterTemplatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data, error } = await supabase.from("templates").select("*").eq("id", id).maybeSingle();

  if (error || !data || data.status !== "uploaded") notFound();

  const template = data as Template;

  return (
    <AdminShell
      title="템플릿 서비스 등록"
      action={
        <Link href="/admin/uploads">
          <Button variant="ghost" size="sm">← 목록</Button>
        </Link>
      }
    >
      <div className="bg-white rounded-xl border border-zinc-200 p-8 max-w-2xl">
        <p className="text-sm text-zinc-500 mb-6">
          업로드된 템플릿의 메타데이터를 검수하고 수정한 후 서비스에 등록합니다.
          등록 후 상태를 <strong>published</strong>로 변경하면 랜딩페이지에 노출됩니다.
        </p>
        <RegisterForm template={template} />
      </div>
    </AdminShell>
  );
}
