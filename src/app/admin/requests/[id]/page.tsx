import { notFound } from "next/navigation";

import { AdminShell } from "@/components/admin/AdminShell";
import { updateRequestStatusAction } from "@/app/admin/_actions/requests";
import { requireAdminUser } from "@/lib/admin/auth";
import { getTemplateById, getTemplateRequestById } from "@/lib/admin/store";
import type { RequestStatus } from "@/lib/admin/types";

const statuses: RequestStatus[] = ["RECEIVED", "REVIEWING", "DONE", "ON_HOLD"];

export default async function RequestDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdminUser();
  if (!admin) return null;

  const { id } = await params;
  const request = await getTemplateRequestById(id);
  if (!request) {
    notFound();
  }

  const template = await getTemplateById(request.templateId);

  return (
    <AdminShell title="신청 상세" subtitle={request.id} adminEmail={admin.email}>
      <article className="space-y-2 rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 text-sm text-zinc-200">
        <p>템플릿: {template?.name ?? "삭제된 템플릿"}</p>
        <p>신청자: {request.applicantName}</p>
        <p>연락처: {request.applicantContact}</p>
        <p>회사명: {request.companyName ?? "-"}</p>
        <p className="whitespace-pre-wrap">요청 내용: {request.message}</p>
      </article>

      <form action={updateRequestStatusAction} className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
        <input type="hidden" name="id" value={request.id} />

        <label className="block space-y-2 text-sm">
          <span className="text-zinc-300">상태</span>
          <select
            name="status"
            defaultValue={request.status}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>

        <label className="block space-y-2 text-sm">
          <span className="text-zinc-300">관리자 메모</span>
          <textarea
            name="adminMemo"
            defaultValue={request.adminMemo ?? ""}
            className="min-h-24 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
          />
        </label>

        <button
          type="submit"
          className="rounded-lg border border-zinc-700 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
        >
          상태 저장
        </button>
      </form>

      <article className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
        <h2 className="text-sm font-semibold text-white">처리 이력</h2>
        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
          {request.history.map((history, index) => (
            <li key={`${history.at}-${index}`} className="rounded border border-zinc-800 px-3 py-2">
              <p>
                {new Date(history.at).toLocaleString()} · {history.status}
              </p>
              <p className="text-zinc-500">{history.memo ?? "메모 없음"}</p>
            </li>
          ))}
        </ul>
      </article>
    </AdminShell>
  );
}
