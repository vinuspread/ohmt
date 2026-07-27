// src/app/templates/OHMT009-car/-components/sections/FeatureGrid.tsx
"use client";

import React from "react";
import { clsx } from "clsx";

import { ArrowRight } from "lucide-react";

interface SplitProps {
  eyebrow: string;
  title: string;
  desc: string;
  img: string;
  reverse?: boolean;
}

export const SplitSection = ({ eyebrow, title, desc, img, reverse }: SplitProps) => (
  <div className={clsx("grid md:grid-cols-2 min-h-[620px] bg-black overflow-hidden", reverse && "md:[direction:rtl]")}>
    <div className={clsx(
      "flex flex-col justify-center py-14 md:py-32 px-6",
      reverse 
        ? "md:pl-16 md:pr-[max(60px,calc((100vw-1440px)/2+60px))] [direction:ltr]" 
        : "md:pr-16 md:pl-[max(60px,calc((100vw-1440px)/2+60px))] [direction:ltr]"
    )}>
      <span className="block text-[0.68rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-5">
        {eyebrow}
      </span>
      <h2 className="text-[length:var(--text-h2)] font-extrabold tracking-[-0.04em] leading-[var(--leading-heading)] mb-6 text-white whitespace-pre-line break-keep">
        {title}
      </h2>
      <p className="text-[0.92rem] md:text-[0.98rem] text-white/60 leading-loose font-normal mb-10 max-w-[420px] break-keep">
        {desc}
      </p>
      <button type="button" className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white border-b border-white/20 pb-1 hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)] transition-all duration-300 w-fit text-left">
        자세히 알아보기 <ArrowRight size={14} />
      </button>
    </div>
    <div className="overflow-hidden group [direction:ltr]">
      <img loading="lazy" src={img} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[1s]" alt={title} />
    </div>
  </div>
);

export const FullBleedSection = ({ eyebrow, title, desc, img }: Omit<SplitProps, "reverse">) => (
  <div className="relative h-[75vh] min-h-[500px] overflow-hidden">
    <img loading="lazy" src={img} className="w-full h-full object-cover" alt={title} />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 px-6 py-8 md:px-[var(--theme-gutter)] md:pb-20 max-w-[var(--theme-container)] mx-auto">
      <span className="block text-[0.68rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-5">
        {eyebrow}
      </span>
      <h2 className="text-[length:var(--text-h1)] font-bold tracking-[-0.04em] leading-[var(--leading-heading)] mb-5 max-w-[700px] text-white whitespace-pre-line break-keep">
        {title}
      </h2>
      <p className="text-[0.92rem] md:text-[0.98rem] text-white/60 font-normal mb-8 max-w-[460px] break-keep">
        {desc}
      </p>
      <button type="button" className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white border-b border-white/20 pb-1 hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)] transition-all duration-300 w-fit">
        사양 살펴보기 <ArrowRight size={14} />
      </button>
    </div>
  </div>
);
