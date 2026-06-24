"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../_components/layout/Navbar";
import Footer from "../../_components/layout/Footer";
import { blogPosts } from "../../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function BlogPostFull() {
  const reduce = useReducedMotion();
  const post = blogPosts[0];

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="pt-24 min-h-screen bg-[var(--color-bg)] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[var(--color-text)]">게시글을 찾을 수 없습니다</h1>
            <Link href="/ko/templates/OHMT026-spa-KO/blog" className="mt-4 inline-flex text-sm text-[var(--color-primary)] hover:underline">블로그로 돌아가기</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <article className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-3xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE_OUT }}>
              <div className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--color-text-muted)]"><span>{post.category}</span><span>{post.date}</span></div>
              <h1 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">{post.title}</h1>
              <p className="mt-4 text-sm text-[var(--color-text-muted)]">{post.author}</p>
            </motion.div>
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }} className="mt-10">
              <div className="h-80 rounded-2xl overflow-hidden"><img src={post.image} alt={post.title} className="w-full h-full object-cover" /></div>
            </motion.div>
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25, ease: EASE_OUT }} className="mt-12 space-y-6 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed">
              <p>{post.excerpt}</p>
              <p>저희 클리닉은 지식으로 고객을 지원하는 것을 믿습니다. 피부와 가능한 트리트먼트를 이해하는 것은 웰니스 여정에 관한 정보에 기반한 결정을 내리는 데 도움이 됩니다.</p>
              <p>새로운 트리트먼트를 고려 중이시든, 스킨케어의 과학에 대해 궁금하시든, 저희 팀이 안내해드립니다.</p>
              <div className="pt-6"><a href="/ko/templates/OHMT026-spa-KO/contact" className="inline-flex items-center rounded-full bg-[var(--color-primary)] text-[var(--color-text-contrast)] px-6 py-2.5 text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-150">상담 예약하기</a></div>
            </motion.div>
            <div className="mt-16 pt-8 border-t border-[var(--color-border)]"><Link href="/ko/templates/OHMT026-spa-KO/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline">← 블로그로 돌아가기</Link></div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
