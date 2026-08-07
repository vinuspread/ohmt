"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, LockKeyhole, MessageSquare } from "lucide-react";

interface BoardDetail {
  id: string;
  title: string;
  authorName: string;
  content?: string;
  isSecret: boolean;
  locked: boolean;
  answer?: string | null;
  createdAt: string;
}

export default function DetailPage() {
  const params = useParams<{ id: string }>();
  const [post, setPost] = useState<BoardDetail | null | undefined>(undefined);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [unlocking, setUnlocking] = useState(false);

  useEffect(() => {
    fetch(`/api/board/${params.id}`)
      .then((res) => (res.ok ? res.json() : null))
      .then(setPost)
      .catch(() => setPost(null));
  }, [params.id]);

  async function unlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setUnlocking(true);
    setError("");
    const res = await fetch(`/api/board/${params.id}/unlock`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setUnlocking(false);
    if (res.ok) {
      setPost(await res.json());
    } else {
      setError("비밀번호가 일치하지 않습니다.");
    }
  }

  if (post === undefined) {
    return <section className="px-5 py-24 text-center text-sm text-zinc-400">불러오는 중...</section>;
  }

  if (post === null) {
    return (
      <section className="px-5 py-24 text-center">
        <h1 className="text-xl font-bold">게시물을 찾을 수 없습니다</h1>
        <Link href="/ko/board" className="mt-6 inline-block text-sm font-bold text-[#B88400] dark:text-[#F1B100]">목록으로 돌아가기</Link>
      </section>
    );
  }

  if (post.locked) {
    return (
      <section className="px-5 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[520px]">
          <Link href="/ko/board" className="mb-8 inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"><ArrowLeft size={14} />목록으로</Link>
          <div className="rounded-xl border border-zinc-200/60 bg-white p-6 text-center dark:border-zinc-800 dark:bg-zinc-900 sm:p-10">
            <LockKeyhole className="mx-auto text-[#F1B100]" size={36} strokeWidth={1.5} />
            <h1 className="mt-6 text-xl font-bold">비밀글입니다</h1>
            <p className="mt-2 text-sm text-zinc-500">작성할 때 설정한 비밀번호를 입력해 주세요.</p>
            <form onSubmit={unlock} className="mt-8">
              <input
                name="password"
                type="password"
                required
                autoFocus
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                aria-describedby={error ? "password-error" : undefined}
                className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-center text-sm outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800"
                placeholder="비밀번호"
              />
              {error && <p id="password-error" role="alert" className="mt-2 text-xs font-medium text-red-600">{error}</p>}
              <button disabled={unlocking} className="mt-4 w-full rounded-lg bg-[#222] px-5 py-3 text-xs font-bold text-[#F1B100] hover:bg-[#2B2B2B] disabled:opacity-50">
                {unlocking ? "확인 중..." : "확인"}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-5 py-12 sm:px-6 md:px-12 md:py-20 lg:px-20">
      <article className="mx-auto max-w-[900px]">
        <Link href="/ko/board" className="mb-8 inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"><ArrowLeft size={14} />목록으로</Link>
        <header className="border-y border-zinc-200 py-8 dark:border-zinc-800">
          <div className="mb-4 flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-widest text-zinc-400">{post.isSecret && <LockKeyhole size={12} />}Inquiry</div>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{post.title}</h1>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-zinc-400">
            <span>작성자 <strong className="ml-1 text-zinc-600 dark:text-zinc-300">{post.authorName}</strong></span>
            <span className="tabular-nums">{new Date(post.createdAt).toLocaleDateString("ko-KR")}</span>
          </div>
        </header>
        <div className="min-h-64 whitespace-pre-wrap border-b border-zinc-200 py-10 text-[15px] leading-8 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">{post.content}</div>
        <section className="mt-10 rounded-xl border border-zinc-200/60 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
          <div className="mb-4 flex items-center gap-2"><MessageSquare size={16} className="text-[#B88400] dark:text-[#F1B100]" /><h2 className="text-sm font-bold">OHMT 답변</h2></div>
          {post.answer ? <p className="whitespace-pre-wrap text-sm leading-7 text-zinc-600 dark:text-zinc-400">{post.answer}</p> : <p className="text-sm text-zinc-400">답변 대기중</p>}
        </section>
      </article>
    </section>
  );
}
