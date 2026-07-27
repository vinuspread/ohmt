// src/app/templates/OHMT012-magazine/-components/sections/EditorsPicks.tsx
"use client";

import React from "react";
import Link from "next/link";

interface MagazineT {
  nav: { stories: string; archive: string; issues: string; about: string; subscribe: string };
  hero: { badge: string; title1: string; title2: string; desc: string; cta: string; cta2: string; bannerTitle: string; issueBadge: string; issueNumber: string; bannerBadge: string; issueTopics: Array<{ tag: string; title: string }> };
  featuredGrid: { label: string; items: Array<{ tag: string; title: string; desc: string }> };
  editorsPicks: { label: string; items: Array<{ title: string; desc: string }> };
  latestStories: { label: string; mostRead: string; stories: Array<{ tag: string; title: string; desc: string }>; mostReadItems: string[] };
  newsletter: { label: string; title: string; desc: string; placeholder: string; submit: string };
}

const picks = [
  {
    slug: "sensory-language-ceramics",
    title: "The sensory language of ceramics.",
    desc: "Why handcrafted objects are becoming the ultimate luxury in a digital era.",
    img: "/templates/OHMT012-magazine/mag-editors-ceramics-v3.jpg"
  },
  {
    slug: "urban-gardening-vertical-revolution",
    title: "Urban gardening: A vertical revolution.",
    desc: "Reclaiming concrete spaces to build sustainable food ecosystems in the city.",
    img: "/templates/OHMT012-magazine/mag-editors-urban-farming-v3.jpg"
  },
  {
    slug: "acoustics-of-silence",
    title: "The acoustics of silence.",
    desc: "Designing spaces that offer psychological refuge from the noise of modern life.",
    img: "/templates/OHMT012-magazine/mag-editors-acoustic-silence-v3.jpg"
  }
];

export const EditorsPicks = ({ t }: { t: MagazineT }) => {
  return (
    <section className="py-12 md:py-24 bg-[var(--color-bg-secondary)]">
      <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
        <div className="text-[0.875rem] font-bold uppercase tracking-[0.2em] text-[var(--theme-text-muted)] pb-4 mb-10">
          {t.editorsPicks.label}
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
           {picks.map((pick, i) => (
             <div key={i} className="group">
               <div className="overflow-hidden h-[260px] mb-5">
                 <img loading="lazy" src={pick.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={t.editorsPicks.items[i].title} />
               </div>
               <h3 className="font-[family-name:var(--theme-font-heading)] text-[1.3rem] font-normal leading-tight mb-3">
                 <Link href={`/en/templates/OHMT012-magazine/article/${pick.slug}`} className="hover:text-[var(--theme-accent)] transition-colors">{t.editorsPicks.items[i].title}</Link>
               </h3>
               <p className="text-[0.875rem] text-[var(--theme-text-muted)] leading-[var(--leading-body)] mb-4 font-normal">
                 {t.editorsPicks.items[i].desc}
               </p>
             </div>
           ))}

        </div>
      </div>
    </section>
  );
};
