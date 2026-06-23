// src/app/templates/OHMT009-car/-components/sections/Testimonials.tsx
"use client";

import React from "react";

const testimonials = [
  {
    text: "\"Unmatched power and performance. The EV9 corners like it reads your mind. I've done track days in supercars that couldn't match the precision of this car.\"",
    name: "James K.",
    model: "VINUS EV9 · Obsidian Black"
  },
  {
    text: "\"Incredible battery life. I've driven German, Italian, and Japanese luxury for twenty years. The EV9 is the first car that made me feel like the future had arrived.\"",
    name: "Sarah M.",
    model: "VINUS EV9 · Arctic White"
  },
  {
    text: "\"Best electric car I've ever driven. Seven seats, 530km range, 22-minute fast charge. I didn't believe a family car could feel this aspirational.\"",
    name: "Daniel P.",
    model: "VINUS X5 · Deep Forest"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-12 md:py-24 border-t border-[var(--theme-border)] bg-black">
      <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
        <div className="mb-12">
          <span className="block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)]">
            Owner Stories
          </span>
        </div>
        
         <div className="grid md:grid-cols-3 gap-[1px] bg-[var(--theme-border)] overflow-hidden">
           {testimonials.map((t) => (
             <div key={t.name} className="bg-black px-6 py-6 md:p-10 flex flex-col gap-4 md:gap-6">
               <div>
                 <div className="text-[0.65rem] tracking-[0.2em] text-[var(--theme-accent)] mb-5">★★★★★</div>
                 <p className="text-[0.88rem] text-white/65 leading-[1.75] font-normal mb-3">
                   {t.text}
                 </p>
               </div>
               <div>
                 <div className="text-[0.72rem] font-bold uppercase tracking-[0.15em] text-white mb-1">
                   {t.name}
                 </div>
                 <div className="text-[0.68rem] text-[var(--theme-accent)] uppercase tracking-[0.1em]">
                   {t.model}
                 </div>
               </div>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
};
