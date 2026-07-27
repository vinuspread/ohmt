// src/app/en/templates/OHMT012-magazine/archive/page.tsx

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { getAllArticles } from "../constants";
import theme from "../theme.json";

export const metadata: Metadata = {
  title: "Archive - OHMT Magazine",
  description: "Every story we've published, gathered in one place. From design and culture to sustainability and slow living.",
  openGraph: {
    title: "Archive - OHMT Magazine",
    description: "Every story we've published, gathered in one place.",
    url: "https://ohmytemplate.com/en/templates/OHMT012-magazine/archive",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT012-magazine/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archive - OHMT Magazine",
    description: "Every story we've published, gathered in one place.",
    images: ["/templates/OHMT012-magazine/og-image.jpg"],
  },
};

const t = {
  nav: { stories: "Stories", archive: "Archive", issues: "Issues", about: "About", subscribe: "Subscribe" },
};

export default function ArchivePage() {
  const articles = getAllArticles();

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-[var(--theme-text)] selection:bg-[var(--theme-accent)] selection:text-white">
        <Header t={t} light />

        <section className="pt-30 pb-16 md:pt-36 md:pb-20 bg-white border-b border-[var(--theme-border)]">
          <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
            <span className="text-[0.875rem] font-bold uppercase tracking-[0.2em] text-[var(--theme-accent)] mb-4 block">
              Every Story
            </span>
            <h1 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-h2)] font-normal leading-[var(--leading-heading)] max-w-3xl">
              The Archive.
            </h1>
            <p className="mt-5 text-[1rem] text-[var(--theme-text-muted)] max-w-xl leading-[var(--leading-body)]">
              Every story we've published, gathered in one place. From design and culture to sustainability and slow living.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {articles.map((article) => (
                <article key={article.slug} className="group">
                  <Link href={`/en/templates/OHMT012-magazine/article/${article.slug}`} className="block overflow-hidden h-[220px] mb-5">
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
                  <h2 className="font-[family-name:var(--theme-font-heading)] text-[1.3rem] font-normal leading-snug mb-2">
                    <Link href={`/en/templates/OHMT012-magazine/article/${article.slug}`} className="hover:text-[var(--theme-accent)] transition-colors">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-[0.9rem] text-[var(--theme-text-muted)] leading-[var(--leading-body)] mb-3">
                    {article.desc}
                  </p>
                  <div className="text-[0.8rem] text-[var(--theme-text-muted)] font-medium">
                    By <strong className="text-[var(--theme-text)]">{article.author}</strong>
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
