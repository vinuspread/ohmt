import Link from "next/link";
import { notFound } from "next/navigation";

import { submitTemplateRequestAction } from "@/app/_actions/requests";
import { getTemplateBySlug } from "@/lib/admin/store";

export default async function ApplyPage({
  params,
  searchParams,
}: {
  params: Promise<{ templateSlug: string }>;
  searchParams: Promise<{ submitted?: string }>;
}) {
  const { templateSlug } = await params;
  const query = await searchParams;

  const template = await getTemplateBySlug(templateSlug);
  if (!template) {
    notFound();
  }

  if (!template.applicationEnabled) {
    return (
      <main className="mx-auto min-h-screen max-w-2xl px-6 py-16 text-zinc-100">
        <h1 className="text-2xl font-semibold">신청이 비활성화된 템플릿입니다</h1>
        <p className="mt-3 text-zinc-400">현재 관리자 설정으로 신청을 받을 수 없습니다.</p>
        <Link
          href={template.previewPath}
          className="mt-6 inline-block rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition hover:bg-zinc-800"
        >
          템플릿으로 돌아가기
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 py-16 text-zinc-100">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Template Apply</p>
      <h1 className="mt-3 text-3xl font-semibold text-white">{template.name} 신청</h1>
      <p className="mt-3 text-zinc-400">템플릿을 검토하신 뒤 아래 양식으로 신청해 주세요.</p>

      {query.submitted === "1" ? (
        <p className="mt-4 rounded-lg border border-emerald-700/60 bg-emerald-950/40 px-4 py-3 text-sm text-emerald-300">
          신청이 접수되었습니다. 빠르게 검토 후 연락드리겠습니다.
        </p>
      ) : null}

      <form action={submitTemplateRequestAction} className="mt-8 space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <input type="hidden" name="templateSlug" value={template.slug} />

        <label className="block space-y-2 text-sm">
          <span className="text-zinc-300">이름</span>
          <input
            name="applicantName"
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
          />
        </label>
        <label className="block space-y-2 text-sm">
          <span className="text-zinc-300">연락처 (이메일/전화)</span>
          <input
            name="applicantContact"
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
          />
        </label>
        <label className="block space-y-2 text-sm">
          <span className="text-zinc-300">회사/브랜드명 (선택)</span>
          <input
            name="companyName"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
          />
        </label>
        <label className="block space-y-2 text-sm">
          <span className="text-zinc-300">요청 내용</span>
          <textarea
            name="message"
            required
            className="min-h-28 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
          />
        </label>

        <button
          type="submit"
          className="rounded-lg border border-zinc-700 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
        >
          신청 제출
        </button>
      </form>
    </main>
  );
}
