// src/app/templates/OHMT012-magazine/-components/sections/EditorsPicks.tsx
"use client";

import React from "react";
import Link from "next/link";

const picks = [
  {
    slug: "sensory-language-ceramics",
    title: "손으로 빚은 도자기의 가치",
    desc: "빠른 시대에 손으로 만든 물건이 오래 남는 이유.",
    img: "/templates/OHMT012-magazine/mag-editors-ceramics-v3.jpg"
  },
  {
    slug: "urban-gardening-vertical-revolution",
    title: "도시 농업, 위로 자라다",
    desc: "버려진 벽과 옥상을 식량을 만드는 공간으로 바꾸는 실험.",
    img: "/templates/OHMT012-magazine/mag-editors-urban-farming-v3.jpg"
  },
  {
    slug: "acoustics-of-silence",
    title: "침묵을 설계하는 법",
    desc: "도시의 소음에서 벗어나 집중과 휴식을 돕는 공간.",
    img: "/templates/OHMT012-magazine/mag-editors-acoustic-silence-v3.jpg"
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
                <h3 className="font-[family-name:var(--theme-font-heading)] text-[1.15rem] font-normal leading-[var(--leading-heading)] mb-3 tracking-[-0.02em]">
                 <Link href={`/ko/templates/OHMT012-magazine/article/${pick.slug}`} className="hover:text-[var(--theme-accent)] transition-colors">{pick.title}</Link>
               </h3>
                <p className="text-[0.8rem] text-[var(--theme-text-muted)] leading-[var(--leading-body)] mb-4 font-normal">
                 {pick.desc}
               </p>
             </div>
           ))}

        </div>
      </div>
    </section>
  );
};
