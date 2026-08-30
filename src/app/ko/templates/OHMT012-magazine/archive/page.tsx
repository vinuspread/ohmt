// src/app/ko/templates/OHMT012-magazine/archive/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { getAllArticles } from "../constants";
import theme from "../theme.json";

export default function ArchivePage() {
  const articles = getAllArticles();

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-[var(--theme-text)] selection:bg-[var(--theme-accent)] selection:text-white">
        <Header light />

        <section className="pt-30 pb-16 md:pt-36 md:pb-20 bg-white border-b border-[var(--theme-border)]">
          <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
            <span className="text-[0.875rem] font-bold uppercase tracking-[0.2em] text-[var(--theme-accent)] mb-4 block">
              모든 기사
            </span>
            <h1 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-h2)] font-normal leading-[var(--leading-heading)] max-w-3xl">
              아카이브.
            </h1>
            <p className="mt-5 text-[1rem] text-[var(--theme-text-muted)] max-w-xl leading-[var(--leading-body)]">
              지금까지 발행한 모든 기사를 한곳에 모았습니다. 디자인과 문화부터 지속가능성, 슬로우 리빙까지.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {articles.map((article) => (
                <article key={article.slug} className="group">
                  <Link href={`/ko/templates/OHMT012-magazine/article/${article.slug}`} className="block overflow-hidden h-[220px] mb-5">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  {article.tag && (
                    <span className="text-[0.8rem] font-bold uppercase tracking-[0.18em] text-[var(--theme-accent)] mb-2 block">
                      {article.tag}
                    </span>
                  )}
                  <h2 className="font-[family-name:var(--theme-font-heading)] text-[1.3rem] font-normal leading-snug mb-2 break-keep">
                    <Link href={`/ko/templates/OHMT012-magazine/article/${article.slug}`} className="hover:text-[var(--theme-accent)] transition-colors">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-[0.9rem] text-[var(--theme-text-muted)] leading-[var(--leading-body)] mb-3 break-keep">
                    {article.desc}
                  </p>
                  <div className="text-[0.8rem] text-[var(--theme-text-muted)] font-medium">
                    <strong className="text-[var(--theme-text)]">{article.author}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}
