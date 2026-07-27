// src/app/ko/templates/OHMT012-magazine/issues/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { issues } from "../constants";
import theme from "../theme.json";

export default function IssuesPage() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-[var(--theme-text)] selection:bg-[var(--theme-accent)] selection:text-white">
        <Header light />

        <section className="pt-30 pb-16 md:pt-36 md:pb-20 bg-white border-b border-[var(--theme-border)]">
          <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
            <span className="text-[0.875rem] font-bold uppercase tracking-[0.2em] text-[var(--theme-accent)] mb-4 block">
              지난 발행호
            </span>
            <h1 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-h2)] font-normal leading-[var(--leading-heading)] max-w-3xl">
              발행호
            </h1>
            <p className="mt-5 text-[1rem] text-[var(--theme-text-muted)] max-w-xl leading-[var(--leading-body)] break-keep">
              계절마다 하나의 주제를 깊이 있게 다룹니다. 지금까지 발행한 모든 호를 살펴보세요.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
              {issues.map((issue) => (
                <article key={issue.number} className="group grid grid-cols-2 sm:grid-cols-2 gap-6 sm:gap-8">
                  <Link href={`/ko/templates/OHMT012-magazine/article/${issue.leadSlug}`} className="block overflow-hidden h-[190px] sm:h-[240px]">
                    <img
                      src={issue.cover}
                      alt={issue.theme}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <div className="flex flex-col justify-center">
                    <span className="text-[0.8rem] font-bold uppercase tracking-[0.18em] text-[var(--theme-accent)] mb-2 block">
                      제{issue.number}호 · {issue.year}년 {issue.season}
                    </span>
                    <h2 className="font-[family-name:var(--theme-font-heading)] text-[1.5rem] sm:text-[1.7rem] font-normal leading-tight mb-4 break-keep">
                      {issue.theme}
                    </h2>
                    <Link
                      href={`/ko/templates/OHMT012-magazine/article/${issue.leadSlug}`}
                      className="text-[0.8rem] font-bold uppercase tracking-[0.14em] text-[var(--theme-text)] hover:text-[var(--theme-accent)] transition-colors underline underline-offset-4"
                    >
                      대표 기사 보기
                    </Link>
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
