// src/app/templates/OHMT012-magazine/-components/sections/EditorsPicks.tsx
"use client";

import React from "react";
import Link from "next/link";

const picks = [
  {
    slug: "sensory-language-ceramics",
    title: "도자기의 감각적 언어.",
    desc: "디지털 시대에 손공예 물건이 최고의 럭셔리가 되는 이유.",
    img: "/templates/OHMT012-magazine/mag-5.jpg"
  },
  {
    slug: "urban-gardening-vertical-revolution",
    title: "도시 원예: 수직 혁명.",
    desc: "콘크리트 공간에서 지속 가능한 식량 생태계를 재구성하다.",
    img: "/templates/OHMT012-magazine/mag-6.jpg"
  },
  {
    slug: "acoustics-of-silence",
    title: "침묵의 음향학.",
    desc: "현대의 소음으로부터 심리적 안식처를 제공하는 공간 설계.",
    img: "/templates/OHMT012-magazine/mag-7.jpg"
  }
];

export const EditorsPicks = () => {
  return (
    <section className="py-12 md:py-24 bg-[var(--color-bg-secondary)]">
      <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
        <div className="text-[1.1rem] font-bold uppercase tracking-tight text-[var(--theme-text-muted)] pb-4 mb-10">
          편집자의 선택
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
           {picks.map((pick, i) => (
             <div key={i} className="group">
               <div className="overflow-hidden h-[260px] mb-5">
                 <img loading="lazy" src={pick.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={pick.title} />
               </div>
                <h3 className="font-[family-name:var(--theme-font-heading)] text-[1.15rem] font-normal leading-[1.3] mb-3 tracking-[-0.02em]">
                 <Link href={`/ko/templates/OHMT012-magazine-KO/article/${pick.slug}`} className="hover:text-[var(--theme-accent)] transition-colors">{pick.title}</Link>
               </h3>
                <p className="text-[0.8rem] text-[var(--theme-text-muted)] leading-[1.65] mb-4 font-normal">
                 {pick.desc}
               </p>
             </div>
           ))}

        </div>
      </div>
    </section>
  );
};
