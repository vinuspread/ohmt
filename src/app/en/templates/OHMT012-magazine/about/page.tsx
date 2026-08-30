// src/app/en/templates/OHMT012-magazine/about/page.tsx

import React from "react";
import type { Metadata } from "next";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";

export const metadata: Metadata = {
  title: "About - OHMT Magazine",
  description: "A quarterly record of how design, culture, and sustainability actually intersect.",
  openGraph: {
    title: "About - OHMT Magazine",
    description: "A quarterly record of how design, culture, and sustainability actually intersect.",
    url: "https://ohmytemplate.com/en/templates/OHMT012-magazine/about",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT012-magazine/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - OHMT Magazine",
    description: "A quarterly record of how design, culture, and sustainability actually intersect.",
    images: ["/templates/OHMT012-magazine/og-image.jpg"],
  },
};

const t = {
  nav: { stories: "Stories", archive: "Archive", issues: "Issues", about: "About", subscribe: "Subscribe" },
};

const pillars = [
  { title: "Craft", desc: "Every story is edited, fact-checked, and designed with the same care as our print editions." },
  { title: "Curiosity", desc: "We follow ideas across design, culture, and sustainability wherever they lead, not just where the algorithm points." },
  { title: "Candor", desc: "No sponsored fluff dressed up as editorial. If we cover it, it's because we think it matters." },
];

export default function AboutPage() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-[var(--theme-text)] selection:bg-[var(--theme-accent)] selection:text-white">
        <Header t={t} />

        <section className="relative h-[56vh] min-h-[380px] max-h-[560px] overflow-hidden">
          <img src="/templates/OHMT012-magazine/mag-workspace.jpg" alt="Inside the OHMT studio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)] pb-10 md:pb-14">
              <span className="inline-block bg-white text-[var(--theme-accent)] text-[0.75rem] font-bold uppercase tracking-[0.2em] px-3 py-1 mb-5">
                Since 2015
              </span>
              <h1 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-h2)] font-normal leading-[var(--leading-heading)] text-white max-w-3xl">
                A quarterly record of how design, culture, and sustainability actually intersect.
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
            <p className="text-[1.05rem] text-[var(--theme-text-muted)] max-w-2xl leading-[var(--leading-body)]">
              FOLIO started as a photocopied zine passed between architecture students and has since grown into a
              quarterly print magazine and daily online edition. We still write every story like it has to earn a
              place on your coffee table.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[var(--color-bg-secondary)] border-y border-[var(--theme-border)]">
          <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
              {pillars.map((pillar) => (
                <div key={pillar.title}>
                  <h2 className="font-[family-name:var(--theme-font-heading)] text-[1.6rem] font-normal mb-3">
                    {pillar.title}
                  </h2>
                  <p className="text-[0.95rem] text-[var(--theme-text-muted)] leading-[var(--leading-body)]">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)] grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-[family-name:var(--theme-font-heading)] text-[1.8rem] font-normal mb-4">
                Say hello.
              </h2>
              <p className="text-[0.95rem] text-[var(--theme-text-muted)] leading-[var(--leading-body)] mb-6 max-w-md">
                Pitches, corrections, and the occasional argument about serif fonts are all welcome.
              </p>
              <a
                href="mailto:editors@folio.site"
                className="text-[0.85rem] font-bold uppercase tracking-[0.14em] text-[var(--theme-text)] hover:text-[var(--theme-accent)] transition-colors underline underline-offset-4"
              >
                editors@folio.site
              </a>
            </div>
            <div>
              <h2 className="font-[family-name:var(--theme-font-heading)] text-[1.8rem] font-normal mb-4">
                Masthead.
              </h2>
              <ul className="space-y-2 text-[0.95rem] text-[var(--theme-text-muted)]">
                <li><strong className="text-[var(--theme-text)]">Julian Vance</strong> - Editor-in-Chief</li>
                <li><strong className="text-[var(--theme-text)]">Anders Holm</strong> - Design Editor</li>
                <li><strong className="text-[var(--theme-text)]">Marta Weber</strong> - Culture Editor</li>
                <li><strong className="text-[var(--theme-text)]">Sarah Chen</strong> - Sustainability Editor</li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}
