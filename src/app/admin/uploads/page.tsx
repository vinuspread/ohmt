import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { UploadedTable } from "@/app/admin/_components/uploads/UploadedTable";
import { createClient } from "@/lib/supabase/server";
import type { Template } from "@/types/template";

export default async function UploadsPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("templates")
    .select("*")
    .eq("status", "uploaded")
    .order("created_at", { ascending: false });

  const templates: Template[] = error ? [] : data ?? [];

  return (
    <AdminShell title="업로드 목록">
      <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
        <UploadedTable data={templates} />
      </div>
    </AdminShell>
  );
}
