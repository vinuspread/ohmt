// src/app/templates/OHMT012-magazine/-components/sections/FeaturedGrid.tsx
"use client";

import React from "react";
import Link from "next/link";

export const FeaturedGrid = ({ t }: { t: any }) => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
        <div className="text-[0.875rem] font-bold uppercase tracking-[0.2em] text-[var(--theme-text-muted)] mb-10">
          {t.featuredGrid.label}
        </div>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-10">
          {/* Main feature */}
          <div className="group">
            <div className="overflow-hidden h-[520px] mb-8">
              <img
                src="/templates/OHMT012-magazine/mag-2.jpg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Main story"
              />
            </div>
            <span className="text-[0.875rem] font-bold uppercase tracking-[0.18em] text-[var(--theme-accent)] mb-3 block">
              {t.featuredGrid.items[0].tag}
            </span>
            <h2 className="font-[family-name:var(--theme-font-heading)] text-[clamp(1.5rem,2.5vw,2rem)] font-normal leading-tight mb-3">
              <Link href="/en/templates/OHMT012-magazine-EN/article/minimalist-architecture-nordic-cities" className="hover:text-[var(--theme-accent)] transition-colors">
                {t.featuredGrid.items[0].title}
              </Link>
            </h2>
            <p className="text-[0.9rem] text-[var(--theme-text-muted)] leading-[1.4] mb-4 font-normal">
              {t.featuredGrid.items[0].desc}
            </p>
            <div className="text-[0.875rem] text-[var(--theme-text-muted)] font-medium">
              By <strong className="text-[var(--theme-text)]">Anders Holm</strong>
            </div>
          </div>

           {/* ?�브 ?�처 2�?*/}
           <div className="flex flex-col gap-8 md:gap-10">
             {[
               {
                 slug: "hidden-galleries-berlin-east-side",
                 img: "/templates/OHMT012-magazine/mag-3.jpg",
                 author: "Marta Weber",
                 index: 1
               },
               {
                 slug: "regenerative-agriculture-future",
                 img: "/templates/OHMT012-magazine/mag-4.jpg",
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
                   <Link href={`/en/templates/OHMT012-magazine-EN/article/${item.slug}`} className="hover:text-[var(--theme-accent)] transition-colors">
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
