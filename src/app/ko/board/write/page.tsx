"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle } from "lucide-react";

const INPUT_CLASS = "w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-[#F1B100] focus:bg-white focus-visible:ring-1 focus-visible:ring-[#F1B100]/40 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-[#F1B100] dark:focus:bg-zinc-800";
const LABEL_CLASS = "mb-2 block text-[0.62rem] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400";

export default function WritePage() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    const form = new FormData(event.currentTarget);
    const res = await fetch("/api/board", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lang: "ko",
        title: form.get("title"),
        authorName: form.get("name"),
        contact: form.get("contact"),
        content: form.get("content"),
        password: form.get("password"),
        isSecret: form.get("isSecret") === "on",
        website: form.get("website"),
      }),
    });

    setSubmitting(false);

    if (res.ok) {
      setSubmitted(true);
      window.setTimeout(() => router.push("/ko/board"), 1600);
    } else {
      const body = await res.json().catch(() => ({}));
      setError(body.error ?? "문의 등록에 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
  }

  return (
    <section className="px-5 py-12 sm:px-6 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto max-w-[1200px]">
        <Link href="/ko/board" className="mb-8 inline-flex items-center gap-2 text-xs font-bold text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"><ArrowLeft size={14} />목록으로</Link>
        {submitted ? (
          <div role="status" className="rounded-xl border border-zinc-200/60 bg-white px-6 py-24 text-center dark:border-zinc-800 dark:bg-zinc-900">
            <CheckCircle className="mx-auto text-[#F1B100]" size={40} strokeWidth={1.5} />
            <h1 className="mt-6 text-xl font-bold">문의가 접수되었습니다</h1>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">잠시 후 문의게시판으로 이동합니다.</p>
          </div>
        ) : (
          <>
            <div className="mb-10"><p className="mb-3 text-[0.62rem] font-extrabold uppercase tracking-[0.2em] text-[#B88400] dark:text-[#F1B100]">New inquiry</p><h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">문의 작성</h1><p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">연락 가능한 정보와 문의 내용을 남겨주세요. 비밀번호는 글을 다시 열 때 사용합니다.</p></div>
            <form onSubmit={handleSubmit} className="space-y-10">
              <label><span className={LABEL_CLASS}>제목</span><input name="title" required maxLength={80} className={INPUT_CLASS} placeholder="문의 제목을 입력해 주세요" /></label>
              <label><span className={LABEL_CLASS}>내용</span><textarea name="content" required rows={8} maxLength={4000} className={`${INPUT_CLASS} resize-y`} placeholder="문의 내용을 자세히 적어 주세요" /></label>
              <div className="grid gap-10 sm:grid-cols-2">
                <label><span className={LABEL_CLASS}>이름</span><input name="name" required autoComplete="name" maxLength={60} className={INPUT_CLASS} placeholder="이름" /></label>
                <label><span className={LABEL_CLASS}>연락처</span><input name="contact" required maxLength={120} className={INPUT_CLASS} placeholder="이메일 또는 휴대폰 번호" /></label>
              </div>
              <label><span className={LABEL_CLASS}>비밀번호</span><input name="password" required type="password" minLength={4} autoComplete="new-password" className={INPUT_CLASS} placeholder="4자 이상 입력해 주세요" /><span className="mt-2 block text-xs leading-relaxed text-zinc-400">글을 다시 열어볼 때 필요합니다. 잊지 않게 기억해 주세요.</span></label>
              <label className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                <input name="isSecret" type="checkbox" className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900" />
                비밀글로 등록 (작성자와 관리자만 내용을 볼 수 있습니다)
              </label>
              <div className="hidden" aria-hidden="true">
                <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
              </div>
              {error && <p role="alert" className="text-sm font-medium text-red-600">{error}</p>}
              <div className="flex justify-end gap-3 border-t border-zinc-100 pt-8 dark:border-zinc-800"><Link href="/ko/board" className="rounded-lg border border-zinc-200 px-5 py-3 text-xs font-bold text-zinc-500 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:hover:text-zinc-100">취소</Link><button type="submit" disabled={submitting} className="rounded-lg bg-[#222] px-6 py-3 text-xs font-bold text-[#F1B100] transition-colors hover:bg-[#2B2B2B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F1B100] active:translate-y-px disabled:opacity-50">{submitting ? "등록 중..." : "문의 등록"}</button></div>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
