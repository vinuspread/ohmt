"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Header } from "../../_components/layout/Header";
import { Footer } from "../../_components/layout/Footer";
import { featuredArticles, editorsPicks, heroArticle } from "../../constants";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

export default function MagazineArticlePage() {
  const params = useParams();
  const slug = params.slug as string;

  const allArticles = [...featuredArticles, ...editorsPicks, heroArticle];
  const article = allArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <TemplateWrapper theme={theme}>
        <main className="antialiased bg-[var(--color-bg)] min-h-screen">
          <Header />
          <div className="pt-16 md:pt-32 pb-16 md:pb-32 px-5 md:px-10 text-center">
            <h1 className="font-[family-name:var(--theme-font-heading)] text-4xl mb-4">게시글을 찾을 수 없습니다</h1>
            <p className="text-[var(--theme-text-muted)] mb-8">찾고 계신 게시글이 존재하지 않습니다.</p>
            <Link href="/ko/templates/OHMT012-magazine" className="text-[var(--theme-accent)] underline">
              매거진으로 돌아가기
            </Link>
          </div>
          <Footer />
        </main>
      </TemplateWrapper>
    );
  }

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white min-h-screen selection:bg-[var(--theme-accent)] selection:text-white">
        <Header light />

        <article className="pb-20 md:pb-32">
          {/* Hero Image */}
          <div className="w-full h-[50vh] md:h-[65vh] min-h-[300px] overflow-hidden mb-10 md:mb-16 mt-[52px]">
            <img
              src={article.img}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-[720px] mx-auto px-6 md:px-10">
            {article.tag && (
              <span className="inline-block bg-[var(--theme-accent)] text-white text-[0.7rem] font-bold uppercase tracking-[0.2em] px-3 py-1 mb-6">
                {article.tag}
              </span>
            )}

            <h1 className="font-[family-name:var(--theme-font-heading)] text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.5] mb-6">
              {article.title}
            </h1>

            <div className="text-[0.78rem] text-[var(--theme-text-muted)] mb-12 pb-8 border-b border-[var(--theme-border)]">
              글 · <strong className="text-[var(--theme-text)]">{article.author}</strong>
            </div>

            {article.content && (
              <div className="prose prose-lg max-w-none font-normal leading-[1.8] text-[0.95rem] space-y-6">
                {article.content.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            )}

            <div className="mt-16 pt-8 border-t border-[var(--theme-border)]">
              <Link
                href="/ko/templates/OHMT012-magazine"
                className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-[var(--theme-accent)] hover:tracking-[0.2em] transition-[letter-spacing] duration-300"
              >
                &larr; 매거진으로 돌아가기
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}
