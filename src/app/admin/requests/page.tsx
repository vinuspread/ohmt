import Link from "next/link";

import { AdminShell } from "@/components/admin/AdminShell";
import { requireAdminUser } from "@/lib/admin/auth";
import { listTemplateRequests, listTemplates } from "@/lib/admin/store";
import type { RequestStatus } from "@/lib/admin/types";

const statuses: Array<RequestStatus | "ALL"> = ["ALL", "RECEIVED", "REVIEWING", "DONE", "ON_HOLD"];

export default async function RequestsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; q?: string }>;
}) {
  const admin = await requireAdminUser();
  if (!admin) return null;

  const params = await searchParams;
  const selectedStatus = (params.status as RequestStatus | "ALL") || "ALL";
  const keyword = params.q ?? "";

  const requests = await listTemplateRequests({ status: selectedStatus, keyword });
  const templates = await listTemplates(true);
  const templateMap = new Map(templates.map((template) => [template.id, template.name]));

  return (
    <AdminShell title="신청 관리" subtitle="검색/필터 + 상태 추적" adminEmail={admin.email}>
      <form className="grid gap-3 rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 md:grid-cols-[200px_1fr_auto]">
        <select
          name="status"
          defaultValue={selectedStatus}
          className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100"
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <input
          name="q"
          defaultValue={keyword}
          placeholder="이름/연락처/메시지 검색"
          className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100"
        />
        <button
          type="submit"
          className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition hover:bg-zinc-800"
        >
          검색
        </button>
      </form>

      <div className="overflow-x-auto rounded-xl border border-zinc-800">
        <table className="min-w-full divide-y divide-zinc-800 text-sm">
          <thead className="bg-zinc-900/80 text-zinc-400">
            <tr>
              <th className="px-3 py-2 text-left">신청자</th>
              <th className="px-3 py-2 text-left">템플릿</th>
              <th className="px-3 py-2 text-left">상태</th>
              <th className="px-3 py-2 text-left">접수일</th>
              <th className="px-3 py-2 text-left">상세</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 bg-zinc-950/40">
            {requests.map((request) => {
              return (
                <tr key={request.id}>
                  <td className="px-3 py-3 text-zinc-200">{request.applicantName}</td>
                  <td className="px-3 py-3 text-zinc-300">{templateMap.get(request.templateId) ?? "삭제된 템플릿"}</td>
                  <td className="px-3 py-3 text-zinc-300">{request.status}</td>
                  <td className="px-3 py-3 text-zinc-500">{new Date(request.createdAt).toLocaleString()}</td>
                  <td className="px-3 py-3">
                    <Link
                      href={`/admin/requests/${request.id}`}
                      className="rounded border border-zinc-700 px-2 py-1 text-xs text-zinc-200 transition hover:bg-zinc-800"
                    >
                      열기
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
