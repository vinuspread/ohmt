// src/app/templates/OHMT008-airline/-components/Hero.tsx
"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "./ui/Button";
export const Hero = () => {
  const searchParams = useSearchParams();
  const t = {
  "nav": {
    "book": `Book`,
    "experience": `Experience`,
    "destinations": `Destinations`,
    "loyalty": `Loyalty`,
    "login": `Login`,
    "bookTrip": `Book Trip`
  },
  "hero": {
    "badge": `FIRST CLASS EXPERIENCE`,
    "title1": `A Luminous Leap`,
    "title2": `into the Extraordinary.`,
    "desc": `Pure serenity encountered above the clouds. Reclaim the raw joy of flight in your private sanctuary in the sky.`,
    "cta": `Discover Destinations`,
    "cta2": `Virtual Tour`
  }
};
return (
    <section className="relative h-[72vh] min-h-[520px] flex flex-col justify-center overflow-hidden bg-[var(--color-primary)]">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
        src="/templates/OHMT008-airline/airline-main-hero.png"
        alt="Airline Hero"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,21,46,0.2)_0%,rgba(5,21,46,0.1)_40%,rgba(5,21,46,0.7)_75%,rgba(5,21,46,0.95)_100%)]" />
      
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 w-full">
        <div className="max-w-[700px] mb-8">
          <div className="flex items-center gap-3 text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6">
            <div className="w-6 h-[1px] bg-[var(--color-accent)]" />
            {t.hero.badge}
          </div>
           <h1 className="font-[family-name:var(--theme-font-heading)] text-[clamp(2.1rem,4vw,3.8rem)] font-bold tracking-tight leading-[1.0] text-white mb-8">
            {t.hero.title1} <br />
            <span className="font-normal text-[var(--color-accent)]">{t.hero.title2}</span>
          </h1>
          <p className="text-[1.05rem] font-normal text-white/65 leading-[1.4] max-w-[600px] mb-10">
            {t.hero.desc}
          </p>
           <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
             <Button variant="primary" className="text-[0.72rem] font-bold uppercase tracking-[0.14em] px-8 md:px-9 py-3 md:py-3.5 hover:opacity-90 transition-all duration-300 active:scale-95">
               {t.hero.cta}
             </Button>
             <Button variant="ghost" className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] px-8 md:px-9 py-3 md:py-3.5 hover:border-white/60 hover:bg-white/8 transition-all duration-300">
               {t.hero.cta2}
             </Button>
           </div>
        </div>
      </div>
    </section>
  );
};
