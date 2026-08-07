import type { Metadata } from "next";
import Link from "next/link";
import { LockKeyhole, PenLine } from "lucide-react";
import { createAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "문의게시판 | OHMT",
  description: "OHMT 제작과 운영에 관해 궁금한 점을 남겨주세요. 확인 후 순서대로 답변드립니다.",
  alternates: {
    canonical: "https://ohmt.site/ko/board",
    languages: { en: "https://ohmt.site/en/board" },
  },
  robots: { index: true, follow: true },
};

interface BoardListItem {
  id: string;
  title: string;
  author_name: string;
  is_secret: boolean;
  created_at: string;
}

export default async function BoardPage() {
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("board_posts")
    .select("id, title, author_name, is_secret, created_at")
    .eq("lang", "ko")
    .order("created_at", { ascending: false });

  const posts: BoardListItem[] = data ?? [];

  return (
    <>
      <section className="border-b border-zinc-200/60 bg-white px-5 py-16 dark:border-zinc-800 dark:bg-zinc-900 sm:px-6 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-4 text-[0.62rem] font-extrabold uppercase tracking-[0.2em] text-[#B88400] dark:text-[#F1B100]">Inquiries</p>
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl">문의게시판</h1>
          <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-base">제작과 운영에 관해 궁금한 점을 남겨주세요. 확인 후 순서대로 답변드립니다.</p>
        </div>
      </section>
      <section className="px-5 py-12 sm:px-6 md:px-12 md:py-16 lg:px-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-6 flex items-end justify-between gap-4">
            <p className="text-sm text-zinc-500">전체 <strong className="font-bold text-zinc-900 dark:text-zinc-100">{posts.length}</strong>건</p>
            <Link href="/ko/board/write" className="inline-flex items-center gap-2 rounded-lg bg-[#222] px-4 py-3 text-xs font-bold text-[#F1B100] transition-colors hover:bg-[#2B2B2B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F1B100] active:translate-y-px"><PenLine size={14} />문의 작성</Link>
          </div>
          <div className="overflow-hidden rounded-xl border border-zinc-200/60 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <div className="hidden grid-cols-[72px_1fr_140px_160px] border-b border-zinc-200/60 bg-zinc-50 px-6 py-4 text-center text-[0.62rem] font-bold uppercase tracking-widest text-zinc-400 dark:border-zinc-800 dark:bg-zinc-800/60 sm:grid">
              <span>번호</span><span className="text-left">제목</span><span>이름</span><span>작성일</span>
            </div>
            {posts.length === 0 ? (
              <p className="px-6 py-16 text-center text-sm text-zinc-400">등록된 문의가 없습니다. 첫 문의를 남겨보세요.</p>
            ) : (
              <ol>
                {posts.map((post, index) => (
                  <li key={post.id} className="border-b border-zinc-100 last:border-0 dark:border-zinc-800">
                    <Link href={`/ko/board/${post.id}`} className="grid grid-cols-[1fr_auto] items-center gap-3 px-5 py-5 transition-colors hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#F1B100] dark:hover:bg-zinc-800/60 sm:grid-cols-[72px_1fr_140px_160px] sm:px-6">
                      <span className="hidden text-center font-mono text-xs tabular-nums text-zinc-400 sm:block">{String(posts.length - index).padStart(2, "0")}</span>
                      <span className="flex min-w-0 items-center gap-2 text-sm font-bold text-zinc-800 dark:text-zinc-200">
                        <span className="truncate">{post.is_secret ? "비밀글입니다" : post.title}</span>
                        {post.is_secret && <LockKeyhole size={13} className="shrink-0 text-[#B88400] dark:text-[#F1B100]" aria-label="비밀글" />}
                      </span>
                      <span className="text-right text-xs text-zinc-500 sm:text-center sm:text-sm">{post.author_name}</span>
                      <span className="col-span-2 text-xs tabular-nums text-zinc-400 sm:col-span-1 sm:text-center">{new Date(post.created_at).toLocaleDateString("ko-KR")}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
