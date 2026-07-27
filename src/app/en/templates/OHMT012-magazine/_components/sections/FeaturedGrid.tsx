// src/app/templates/OHMT012-magazine/-components/sections/FeaturedGrid.tsx
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

export const FeaturedGrid = ({ t }: { t: MagazineT }) => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
        <div className="text-[0.875rem] font-bold uppercase tracking-[0.2em] text-[var(--theme-text-muted)] mb-10">
          {t.featuredGrid.label}
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* Main feature */}
          <div className="group">
            <div className="overflow-hidden h-[520px] mb-8">
              <img
                src="/templates/OHMT012-magazine/mag-article-nordic-architecture-v2.jpg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Main story"
              />
            </div>
            <span className="text-[0.875rem] font-bold uppercase tracking-[0.18em] text-[var(--theme-accent)] mb-3 block">
              {t.featuredGrid.items[0].tag}
            </span>
            <h2 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-lead)] font-normal leading-tight mb-3">
              <Link href="/en/templates/OHMT012-magazine/article/minimalist-architecture-nordic-cities" className="hover:text-[var(--theme-accent)] transition-colors">
                {t.featuredGrid.items[0].title}
              </Link>
            </h2>
            <p className="text-[0.9rem] text-[var(--theme-text-muted)] leading-[var(--leading-body)] mb-4 font-normal">
              {t.featuredGrid.items[0].desc}
            </p>
            <div className="text-[0.875rem] text-[var(--theme-text-muted)] font-medium">
              By <strong className="text-[var(--theme-text)]">Anders Holm</strong>
            </div>
          </div>

           {/* Sub feature 2 */}
           <div className="flex flex-col gap-8 md:gap-10">
             {[
               {
                 slug: "hidden-galleries-berlin-east-side",
                 img: "/templates/OHMT012-magazine/mag-article-berlin-gallery-v2.jpg",
                 author: "Marta Weber",
                 index: 1
               },
               {
                 slug: "regenerative-agriculture-future",
                 img: "/templates/OHMT012-magazine/mag-desert-living-v2.jpg",
                 author: "Sarah Chen",
                 index: 2
               }
             ].map((item, i) => (
               <div key={i} className="group">
                 <div className="overflow-hidden h-[220px] mb-5">
                   <img
                     src={item.img}
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                     alt={t.featuredGrid.items[item.index].title}
                   />
                 </div>
                 <span className="text-[0.875rem] font-bold uppercase tracking-[0.18em] text-[var(--theme-accent)] mb-2 block">
                   {t.featuredGrid.items[item.index].tag}
                 </span>
                 <h3 className="font-[family-name:var(--theme-font-heading)] text-[1.35rem] font-normal leading-snug mb-2">
                   <Link href={`/en/templates/OHMT012-magazine/article/${item.slug}`} className="hover:text-[var(--theme-accent)] transition-colors">
                     {t.featuredGrid.items[item.index].title}
                   </Link>
                 </h3>

                <div className="text-[0.875rem] text-[var(--theme-text-muted)] font-medium">
                  By <strong className="text-[var(--theme-text)]">{item.author}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
