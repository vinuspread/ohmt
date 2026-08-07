import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { BoardTable } from "@/app/admin/_components/board/BoardTable";
import { createAdminClient } from "@/lib/supabase/admin";
import type { BoardPostAdmin } from "@/types/board";

export const dynamic = "force-dynamic";

export default async function BoardAdminPage() {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("board_posts")
    .select("id, lang, title, author_name, contact, content, is_secret, answer, answered_at, created_at, updated_at")
    .order("created_at", { ascending: false });

  const posts: BoardPostAdmin[] = error ? [] : data ?? [];

  return (
    <AdminShell title="문의게시판">
      <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
        <BoardTable data={posts} />
      </div>
    </AdminShell>
  );
}
