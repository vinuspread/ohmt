"use client";

import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const entries = [
  {
    slug: "vitamin-c-science",
    title: "The science behind vitamin C in skincare.",
    date: "May 20, 2026",
    read: "5 min",
    excerpt: "Explore the molecular benefits of vitamin C and why it's essential for radiant skin.",
    content: "Vitamin C is one of the most powerful antioxidants in skincare. Its ability to neutralize free radicals, boost collagen production, and brighten the complexion makes it a must-have ingredient. Learn how our stabilized vitamin C formula penetrates the skin barrier effectively."
  },
  {
    slug: "packaging-philosophy",
    title: "Why we chose glass over plastic: Our packaging philosophy.",
    date: "May 15, 2026",
    read: "4 min",
    excerpt: "Sustainability isn't just a buzzword-it's our commitment to the planet.",
    content: "Every product deserves packaging that reflects its quality. Glass maintains ingredient integrity, reduces environmental impact, and delivers a premium unboxing experience. Discover why we invested in sustainable materials from day one."
  },
  {
    slug: "morning-routine-guide",
    title: "A complete guide to building your morning routine.",
    date: "May 10, 2026",
    read: "8 min",
    excerpt: "Master the essential steps for a glowing complexion every single day.",
    content: "A consistent morning routine is the foundation of healthy skin. From cleansing to sun protection, we break down each step and explain why it matters. Find the perfect routine that works for your unique skin type and lifestyle."
  },
  {
    slug: "sustainable-sourcing",
    title: "How we source our ingredients sustainably.",
    date: "May 5, 2026",
    read: "6 min",
    excerpt: "Ethical sourcing meets cutting-edge skincare science.",
    content: "Behind every ingredient lies a story of commitment to sustainability. We partner with farmers and suppliers who share our values. Learn about our sourcing practices and the impact your choices have on global communities."
  }
];

function CosmeticJournalPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-black selection:bg-black selection:text-white">
        <Header />
        
        <section className="pt-48 pb-16 md:pb-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="mb-16">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40 mb-4 block">Journal</span>
              <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-tight leading-[1.1]">
                Thoughts on conscious beauty.
              </h1>
            </div>

            <div className="border-t border-black/10">
              {entries.map((entry) => (
                <Link key={entry.slug} href={`/en/templates/OHMT010-cosmetic-EN/journal/${entry.slug}`}>
                  <div className="py-10 px-6 grid md:grid-cols-[1fr_auto] gap-6 items-center group hover:bg-white transition-colors cursor-pointer border-b border-black/10">
                    <div>
                      <h3 className="text-[1.2rem] font-medium tracking-tight mb-2 group-hover:opacity-60 transition-opacity">{entry.title}</h3>
                      <div className="flex gap-6 text-[0.72rem] text-black/40 uppercase tracking-wider">
                        <span>{entry.date}</span>
                        <span>{entry.read} read</span>
                      </div>
                    </div>
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-black/20 group-hover:text-black transition-colors">Read More</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function CosmeticJournalPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CosmeticJournalPageContent {...props} />
    </React.Suspense>
  );
}
