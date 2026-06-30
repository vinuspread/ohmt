// src/app/templates/OHMT009-car/src/components/sections/NewsSection.tsx
"use client";

import React from "react";

const news = [
  {
    tag: "Electric",
    title: "The ultimate guide to electric car charging: Everything you need to know",
    date: "May 3, 2026",
    img: "/templates/OHMT009-car/car-1.jpg"
  },
  {
    tag: "Technology",
    title: "VINUS 2026: The most technologically advanced model year in history",
    date: "April 28, 2026",
    img: "/templates/OHMT009-car/car-4.jpg"
  },
  {
    tag: "Design",
    title: "Behind the EV9: How our designers reimagined the luxury SUV from scratch",
    date: "April 15, 2026",
    img: "/templates/OHMT009-car/car-5.jpg"
  }
];

export const NewsSection = () => {
  return (
    <section className="py-12 md:py-24 border-t border-[var(--theme-border)] bg-black">
      <div className="max-w-[var(--theme-container)] mx-auto px-5 md:px-[var(--theme-gutter)]">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-tight text-white">
            Our latest news
          </h2>
          <button className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white hover:translate-x-1.5 transition-all duration-300">
            All News <span className="text-[1.2em]">→</span>
          </button>
        </div>
        
         <div className="grid md:grid-cols-3 gap-[1px] bg-[var(--theme-border)] overflow-hidden">
           {news.map((item) => (
             <div key={item.title} className="bg-black group">
               <div className="h-[220px] overflow-hidden">
                 <img loading="lazy" src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300" alt={item.title} />
               </div>
               <div className="p-8">
                 <span className="block text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--theme-accent)] mb-3">
                   {item.tag}
                 </span>
                 <h3 className="text-base font-semibold leading-relaxed mb-3 text-white">
                   {item.title}
                 </h3>
                 <span className="text-[0.68rem] text-[var(--theme-text-muted)] uppercase tracking-[0.1em]">
                   {item.date}
                 </span>
               </div>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
};
