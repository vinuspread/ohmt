// src/app/templates/OHMT012-magazine/-components/sections/LatestStories.tsx
"use client";

import React from "react";
import Link from "next/link";

const stories = [
  {
    slug: "brutalist-heart-london",
    tag: "Photography",
    title: "Light & Shadow: Capturing the brutalist heart of London.",
    desc: "A photographic journey through the city's most controversial concrete monuments.",
    img: '/templates/OHMT012-magazine/mag-8.jpg'
  },
  {
    slug: "hidden-teahouses-kyoto",
    tag: "Travel",
    title: "The hidden teahouses of Kyoto's outer districts.",
    desc: "Finding tradition and tranquility away from the tourist crowds.",
    img: '/templates/OHMT012-magazine/mag-9.jpg'
  }
];

export const LatestStories = ({ t }: { t: any }) => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
        <div className="grid md:grid-cols-[1fr_280px] gap-12 md:gap-16 items-start">
          <div>
            <div className="text-[0.875rem] font-bold uppercase tracking-[0.2em] text-[var(--theme-text-muted)] pb-4 border-b border-[var(--theme-text)] mb-8">
              {t.latestStories.label}
            </div>
            {stories.map((story, i) => (
              <div key={i} className="grid grid-cols-[120px_1fr] md:grid-cols-[200px_1fr] gap-6 md:gap-8 py-8 border-b border-gray-100 group">
                <div className="overflow-hidden h-[135px]">
                  <img loading="lazy" src={story.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={t.latestStories.stories[i].title} />
                </div>
                <div>
                  <span className="text-[0.875rem] font-bold uppercase tracking-[0.18em] text-[var(--theme-accent)] mb-2 block">{t.latestStories.stories[i].tag}</span>
                  <h3 className="font-[family-name:var(--theme-font-heading)] text-[1.15rem] font-normal leading-snug mb-2">
                    <Link href={`/en/templates/OHMT012-magazine-EN/article/${story.slug}`} className="hover:text-[var(--theme-accent)] transition-colors">{t.latestStories.stories[i].title}</Link>
                  </h3>
                  <p className="text-[0.875rem] text-[var(--theme-text-muted)] leading-[1.4] font-normal">
                    {t.latestStories.stories[i].desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <aside className="sticky top-8">
            <div className="text-[0.875rem] font-bold uppercase tracking-[0.2em] text-[var(--theme-text-muted)] pb-4 border-b border-[var(--theme-text)] mb-8">
              {t.latestStories.mostRead}
            </div>
            <div className="flex flex-col">
              {[
                { n: 1, slug: "sustainable-fashion-circular" },
                { n: 2, slug: "return-to-film-photography" },
                { n: 3, slug: "hidden-costs-minimalism" }
              ].map(({ n, slug }, i) => (
                <div key={n} className="flex gap-6 py-6 border-b border-gray-100 group last:border-0">
                  <span className="font-[family-name:var(--theme-font-heading)] text-[2.5rem] leading-none text-[var(--theme-border)] group-hover:text-[var(--theme-accent)] transition-colors shrink-0 pt-1">
                    0{n}
                  </span>
                  <h5 className="font-[family-name:var(--theme-font-heading)] text-[1rem] leading-snug self-center">
                    <Link href={`/en/templates/OHMT012-magazine-EN/article/${slug}`} className="hover:text-[var(--theme-accent)] transition-colors">
                      {t.latestStories.mostReadItems[i]}
                    </Link>
                  </h5>
                </div>
              ))}
            </div>
          </aside>
        </div>

      </div>
    </section>
  );
};

export const NewsletterStrip = ({ t }: { t: any }) => (
  <section className="bg-[var(--theme-text)] text-white py-10 md:py-20 text-center px-6">
    <div className="max-w-[var(--theme-container)] mx-auto">
      <h2 className="font-[family-name:var(--theme-font-heading)] text-[clamp(1.8rem,3vw,2.8rem)] font-normal mb-3">
        {t.newsletter.title}
      </h2>
      <p className="text-[0.88rem] text-white/55 mb-8 tracking-wide font-normal">
        {t.newsletter.desc}
      </p>
      <form className="flex flex-col sm:flex-row max-w-[460px] mx-auto">
        <input
          type="email"
          placeholder={t.newsletter.placeholder}
          className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white outline-none placeholder:text-white/30 text-sm"
        />
        <button className="px-8 py-4 bg-[var(--theme-accent)] text-white font-bold text-[0.875rem] uppercase tracking-widest hover:brightness-110 transition-all">
          {t.newsletter.submit}
        </button>
      </form>
    </div>
  </section>
);
