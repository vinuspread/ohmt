// src/app/templates/OHMT012-magazine/-components/sections/Hero.tsx
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

export const Hero = ({ t }: { t: MagazineT }) => {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src="/templates/OHMT012-magazine/mag-hero.jpg"
        alt="Magazine Hero"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80" />

      {/* Top copy */}
      <div className="absolute left-0 right-0 px-6 md:px-[4rem] max-w-[calc(var(--theme-container)+5rem)] mx-auto w-full" style={{ top: "calc(38% - 100px)" }}>
        <span className="inline-block bg-white text-[var(--theme-accent)] text-[0.75rem] font-bold uppercase tracking-[0.2em] px-3 py-1 mb-6">
          {t.hero.badge}
        </span>
        <h1 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-h1)] font-normal leading-[var(--leading-display)] text-white max-w-[720px] mb-4">
          {t.hero.title1} <br />
          <span className="font-normal text-white/80">{t.hero.title2}</span>
        </h1>
        <p className="text-[0.875rem] text-white/75 max-w-[480px] leading-[var(--leading-body)] mb-5 font-normal">
          {t.hero.desc}
        </p>
        <div className="flex flex-col gap-4">
          <div className="text-[0.8rem] text-white/55 font-medium tracking-wide">
            Story by <strong className="text-white/85">Julian Vance</strong> · Photography by <strong className="text-white/85">Elena Rossi</strong>
          </div>
          <Link
            href="/en/templates/OHMT012-magazine/article/slow-living-digital-world"
            className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-white border-b border-white/50 pb-0.5 hover:border-white w-fit"
          >
            {t.hero.cta}
          </Link>
        </div>
      </div>

       {/* Issue summary banner */}
       <div className="absolute bottom-30 left-0 right-0 hidden md:block">
         <div className="max-w-[calc(var(--theme-container)+5rem)] mx-auto w-full px-6 md:px-[4rem]">
           <div className="border-t border-white/25 py-6 md:py-8 flex items-start gap-8 md:gap-12 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
             <div className="shrink-0 min-w-[90px]">
               <span className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-white/40 block mb-2">
                 {t.hero.issueBadge}
               </span>
               <span className="text-[1.1rem] font-bold uppercase tracking-[0.08em] text-white">
                 {t.hero.issueNumber}
               </span>
             </div>
             <div className="w-px self-stretch bg-white/20 shrink-0" />
              {t.hero.issueTopics.map((item, i: number) => (
               <div key={i} className="shrink-0 group cursor-pointer">
                 <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[var(--theme-accent)] block mb-2">
                   {item.tag}
                 </span>
                  <span className="text-[0.95rem] text-white/75 group-hover:text-white transition-colors font-normal leading-snug block whitespace-nowrap">
                    {item.title}
                  </span>
               </div>
             ))}
           </div>
         </div>
       </div>


        {/* Issue summary banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-[var(--color-banner-bg)]">
          <div className="max-w-[calc(var(--theme-container)+5rem)] mx-auto px-6 md:px-[4rem] py-6 md:py-0 min-h-[120px] md:h-[120px] flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div className="flex items-center gap-6 md:gap-10">
             <div>
               <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white/45 mb-0.5">
                 {t.hero.bannerBadge}
               </p>
               <h2 className="font-[family-name:var(--theme-font-heading)] text-[1.1rem] md:text-[1.4rem] font-normal text-white leading-[1.05]">
                 {t.hero.bannerTitle}
               </h2>
             </div>
           </div>

          <Link
            href="/en/templates/OHMT012-magazine"
            className="shrink-0 self-start md:self-auto text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white border border-white/40 px-6 py-2.5 hover:bg-white hover:text-[var(--color-banner-bg)] transition-colors duration-300"
          >
            {t.hero.cta2}
          </Link>
        </div>
      </div>
    </section>
  );
};
