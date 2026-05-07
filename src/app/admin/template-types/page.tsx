import { AdminShell } from "@/components/admin/AdminShell";
import {
  createTemplateTypeAction,
  deactivateTemplateTypeAction,
  updateTemplateTypeAction,
} from "@/app/admin/_actions/template-types";
import { requireAdminUser } from "@/lib/admin/auth";
import { listTemplateTypes } from "@/lib/admin/store";

export default async function TemplateTypesPage({
  searchParams,
}: {
  searchParams: Promise<{ toast?: string }>;
}) {
  const admin = await requireAdminUser();
  if (!admin) return null;

  const params = await searchParams;
  const types = await listTemplateTypes();
  const showUpdatedToast = params.toast === "category_updated";

  return (
    <AdminShell title="카테고리 관리" subtitle="카테고리 추가/수정/비활성화" adminEmail={admin.email}>
      {showUpdatedToast ? (
        <div className="fixed right-6 top-6 z-50 rounded-lg border border-emerald-700/70 bg-emerald-950/90 px-4 py-3 text-sm text-emerald-200 shadow-lg">
          카테고리 수정이 완료되었습니다.
        </div>
      ) : null}

      <article className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
        <h2 className="text-sm font-semibold text-white">카테고리 추가</h2>
        <form action={createTemplateTypeAction} className="mt-3 flex gap-2">
          <input
            name="label"
            required
            placeholder="예: 랜딩형"
            className="flex-1 rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100"
          />
          <button
            type="submit"
            className="rounded-lg border border-zinc-700 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            추가
          </button>
        </form>
      </article>

      <div className="space-y-3">
        {types.map((type) => (
          <article key={type.id} className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <form action={updateTemplateTypeAction} className="flex min-w-[220px] flex-1 items-center gap-2">
                <input type="hidden" name="id" value={type.id} />
                <input
                  name="label"
                  defaultValue={type.label}
                  className="min-w-[220px] flex-1 rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100"
                />
                <button
                  type="submit"
                  className="rounded-lg border border-zinc-700 px-3 py-2 text-xs text-zinc-200 transition hover:bg-zinc-800"
                >
                  수정
                </button>
              </form>

              {type.isActive ? (
                <form action={deactivateTemplateTypeAction}>
                  <input type="hidden" name="id" value={type.id} />
                  <button
                    type="submit"
                    className="rounded border border-red-700/60 px-2 py-1 text-red-300 transition hover:bg-red-900/40"
                  >
                    비활성화
                  </button>
                </form>
              ) : (
                <span className="text-xs text-zinc-500">비활성화됨</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </AdminShell>
  );
}
