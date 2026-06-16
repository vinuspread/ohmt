import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { UploadForm } from "@/app/admin/_components/templates/UploadForm";
import { UploadedTable } from "@/app/admin/_components/uploads/UploadedTable";
import { createClient } from "@/lib/supabase/server";
import { pullLocalRepoIfDev } from "@/lib/local-fs";
import type { Template } from "@/types/template";

export default async function UploadsPage() {
  await pullLocalRepoIfDev();

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("templates")
    .select("*")
    .eq("status", "uploaded")
    .order("created_at", { ascending: false });

  const templates: Template[] = error ? [] : data ?? [];

  return (
    <AdminShell title="업로드">
      <div className="space-y-8">
        <div className="max-w-2xl rounded-xl border border-zinc-200 bg-white p-8">
          <UploadForm />
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
          <UploadedTable data={templates} />
        </div>
      </div>
    </AdminShell>
  );
}
