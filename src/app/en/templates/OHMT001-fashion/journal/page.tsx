"use client";

import React from "react";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const ARTICLES = [
  { id: 1, category: "CAMPAIGN", title: "The Last Season", date: "June 15, 2026", excerpt: "A visual meditation on endings and the quiet beauty of letting go. Shot over three days in the Venetian lagoon.", image: "/templates/OHMT001-fashion/exclusive-custom.jpg", featured: true },
  { id: 2, category: "MATERIALS", title: "On Japanese Denim", date: "May 28, 2026", excerpt: "Selvedge, weight, and the obsessive pursuit of the perfect fade. We trace our denim to a single mill in Okayama.", image: "/templates/OHMT001-fashion/hero-custom.jpg" },
  { id: 3, category: "COLLECTION", title: "Quiet Craft", date: "May 10, 2026", excerpt: "Behind the seams of our most technically demanding garment to date — the structured wool overcoat.", image: "/templates/OHMT001-fashion/exclusive-lifestyle.png" },
  { id: 4, category: "STYLE", title: "Dressing for the Season", date: "April 22, 2026", excerpt: "A practical guide to building a capsule wardrobe that ages with you, not against you.", image: "/templates/OHMT001-fashion/branding-custom.jpg" },
];

function JournalContent() {
  const featured = ARTICLES.find(a => a.featured);
  const rest = ARTICLES.filter(a => !a.featured);

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-white">
        <Navbar />
        {featured && (
          <section className="relative pt-[120px] md:pt-[160px]">
            <div className="relative aspect-[21/9] overflow-hidden">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-12 max-w-2xl">
                <span className="text-[11px] uppercase tracking-widest text-white/60">{featured.category}</span>
                <h1 className="font-[family-name:var(--font-bodoni)] text-[32px] md:text-[48px] text-white font-bold tracking-tight mt-2 leading-[1.1]">{featured.title}</h1>
                <p className="text-[12px] text-white/40 mt-3">{featured.date}</p>
              </div>
            </div>
          </section>
        )}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-16">
            {rest.map(article => (
              <article key={article.id} className="group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-700" />
                </div>
                <span className="block text-[11px] uppercase tracking-widest text-black/40 mt-5 mb-2">{article.category}</span>
                <h2 className="font-[family-name:var(--font-bodoni)] text-[20px] md:text-[24px] font-bold tracking-tight leading-[1.2]">{article.title}</h2>
                <p className="text-[12px] text-black/40 mt-1">{article.date}</p>
                <p className="text-[13px] text-black/60 leading-relaxed mt-2 line-clamp-2">{article.excerpt}</p>
              </article>
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
