// src/app/templates/OHMT009-car/src/components/sections/FeatureGrid.tsx
"use client";

import React from "react";
import { clsx } from "clsx";

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
      <span className="block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-text-muted)] mb-5">
        {eyebrow}
      </span>
      <h2 className="text-[clamp(2rem,3.5vw,3.2rem)] font-extrabold tracking-tight leading-[1.2] mb-5 text-white whitespace-pre-line">
        {title}
      </h2>
      <p className="text-[0.88rem] text-[var(--theme-text-muted)] leading-[1.4] font-normal mb-10 max-w-[380px]">
        {desc}
      </p>
      <button type="button" className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white hover:translate-x-1.5 transition-all duration-300 text-left">
        Discover More <span className="text-[1.2em]">→</span>
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
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 px-6 py-8 md:px-[var(--theme-gutter)] md:pb-20 max-w-[var(--theme-container)] mx-auto">
      <span className="block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-text-muted)] mb-5">
        {eyebrow}
      </span>
      <h2 className="text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight leading-[1.2] mb-4 max-w-[600px] text-white whitespace-pre-line">
        {title}
      </h2>
      <p className="text-[0.88rem] text-[var(--theme-text-muted)] font-normal mb-8 max-w-[400px]">
        {desc}
      </p>
      <button type="button" className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white hover:translate-x-1.5 transition-all duration-300">
        View Specs <span className="text-[1.2em]">→</span>
      </button>
    </div>
  </div>
);
