// src/app/en/templates/OHMT012-magazine/issues/page.tsx

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { issues } from "../constants";
import theme from "../theme.json";

export const metadata: Metadata = {
  title: "Issues - FOLIO Magazine",
  description: "Each issue gathers a season's worth of reporting into a single theme. Browse the full run below.",
  openGraph: {
    title: "Issues - FOLIO Magazine",
    description: "Each issue gathers a season's worth of reporting into a single theme.",
    url: "https://ohmt.site/en/templates/OHMT012-magazine/issues",
    siteName: "FOLIO",
    images: [{ url: "/templates/OHMT012-magazine/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Issues - FOLIO Magazine",
    description: "Each issue gathers a season's worth of reporting into a single theme.",
    images: ["/templates/OHMT012-magazine/og-image.jpg"],
  },
};

const t = {
  nav: { stories: "Stories", archive: "Archive", issues: "Issues", about: "About", subscribe: "Subscribe" },
};

export default function IssuesPage() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-[var(--theme-text)] selection:bg-[var(--theme-accent)] selection:text-white">
        <Header t={t} light />

        <section className="pt-30 pb-16 md:pt-36 md:pb-20 bg-white border-b border-[var(--theme-border)]">
          <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
            <span className="text-[0.875rem] font-bold uppercase tracking-[0.2em] text-[var(--theme-accent)] mb-4 block">
              Past Print Editions
            </span>
            <h1 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-h2)] font-normal leading-[var(--leading-heading)] max-w-3xl">
              The Issues.
            </h1>
            <p className="mt-5 text-[1rem] text-[var(--theme-text-muted)] max-w-xl leading-[var(--leading-body)]">
              Each issue gathers a season's worth of reporting into a single theme. Browse the full run below.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
              {issues.map((issue) => (
                <article key={issue.number} className="group grid grid-cols-2 sm:grid-cols-2 gap-6 sm:gap-8">
                  <Link href={`/en/templates/OHMT012-magazine/article/${issue.leadSlug}`} className="block overflow-hidden h-[190px] sm:h-[240px]">
                    <img
                      src={issue.cover}
                      alt={issue.theme}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <div className="flex flex-col justify-center">
                    <span className="text-[0.8rem] font-bold uppercase tracking-[0.18em] text-[var(--theme-accent)] mb-2 block">
                      Issue No. {issue.number} - {issue.season} {issue.year}
                    </span>
                    <h2 className="font-[family-name:var(--theme-font-heading)] text-[1.5rem] sm:text-[1.7rem] font-normal leading-tight mb-4">
                      {issue.theme}
                    </h2>
                    <Link
                      href={`/en/templates/OHMT012-magazine/article/${issue.leadSlug}`}
                      className="text-[0.8rem] font-bold uppercase tracking-[0.14em] text-[var(--theme-text)] hover:text-[var(--theme-accent)] transition-colors underline underline-offset-4"
                    >
                      Read the lead story
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
