"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { SubpageHero } from "../_components/SubpageHero";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const ARTICLES = [
  {
    id: 1,
    category: "CAMPAIGN",
    title: "The Last Season",
    date: "June 15, 2026",
    excerpt:
      "A visual meditation on endings and the quiet beauty of letting go. Shot over three days in the Venetian lagoon.",
    image: "/templates/fashion/journal-hero-v2.png",
    featured: true,
  },
  {
    id: 2,
    category: "MATERIALS",
    title: "On Japanese Denim",
    date: "May 28, 2026",
    excerpt:
      "Selvedge, weight, and the obsessive pursuit of the perfect fade. We trace our denim to a single mill in Okayama.",
    image: "/templates/fashion/hero-custom.jpg",
  },
  {
    id: 3,
    category: "COLLECTION",
    title: "Quiet Craft",
    date: "May 10, 2026",
    excerpt:
      "Behind the seams of our most technically demanding garment to date: the structured wool overcoat.",
    image: "/templates/fashion/exclusive-lifestyle.png",
  },
  {
    id: 4,
    category: "STYLE",
    title: "Dressing for the Season",
    date: "April 22, 2026",
    excerpt:
      "A practical guide to building a capsule wardrobe that ages with you, not against you.",
    image: "/templates/fashion/branding-custom.jpg",
  },
];

function JournalContent() {
  const featured = ARTICLES.find((article) => article.featured);
  const rest = ARTICLES.filter((article) => !article.featured);

  return (
    <TemplateWrapper theme={theme}>
      <main className="min-h-screen bg-white antialiased">
        <Navbar />
        {featured && (
          <Link href={`/en/templates/OHMT001-fashion/journal/${featured.id}`} className="block">
            <SubpageHero
              eyebrow={featured.category}
              title={featured.title}
              description={`${featured.date}. Editorial notes on endings, material memory, and the quiet beauty of letting go.`}
              image={featured.image}
              imageAlt={featured.title}
            />
          </Link>
        )}
        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12">
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <Link
                href={`/en/templates/OHMT001-fashion/journal/${article.id}`}
                key={article.id}
                className="group block"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <span className="mt-5 mb-2 block text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">
                  {article.category}
                </span>
                <h2
                  className="text-[22px] font-bold leading-[1.05] tracking-[-0.025em] md:text-[28px]"
                  style={{ fontFamily: "var(--font-bodoni)" }}
                >
                  {article.title}
                </h2>
                <p className="mt-1 text-[12px] text-[var(--color-text-muted)]">{article.date}</p>
                <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-black/60">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function JournalPage() {
  return (
    <React.Suspense fallback={null}>
      <JournalContent />
    </React.Suspense>
  );
}
