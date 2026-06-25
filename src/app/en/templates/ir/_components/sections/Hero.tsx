// src/app/templates/ir/-components/sections/Hero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
export const Hero = () => {
  const searchParams = useSearchParams();
  const t = {
  "nav": {
    "earnings": `New Report: Q1 2026 Earnings now available.`,
    "readMore": `Read more`,
    "overview": `Overview`,
    "financials": `Financials`,
    "governance": `Governance`,
    "news": `News`,
    "contact": `Contact`,
    "investorKit": `Investor Kit`
  },
  "hero": {
    "badge": `ANNUAL REPORT 2026`,
    "badgeText": `Transparency & Excellence`,
    "title1": `Resilient Leaps,`,
    "title2": `Transparent Benchmarks.`,
    "desc": `Going beyond the boundary of numbers. Navigating a sturdier trajectory of shared values and global prosperity.`,
    "cta": `Q1 Summary Report`,
    "cta2": `Shareholder Portal`
  }
};
return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="bg-[var(--color-dark-bg)] min-h-[calc(100vh-100px)] flex flex-col justify-between relative overflow-hidden text-white"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        src="/templates/ir/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      <div className="relative flex-1 flex items-center px-10 max-w-[1280px] mx-auto w-full py-12 md:py-24">
        <div className="max-w-[760px]">
          <div className="flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-8">
            <div className="w-6 h-[1px] bg-[var(--color-accent)]" />
            {t.hero.badgeText}
          </div>
          <h1 className="text-[clamp(2.1rem,4.5vw,4.5rem)] font-bold tracking-tight leading-[1.0] mb-7">
            {t.hero.title1}<br />{t.hero.title2}
          </h1>
          <p className="text-[0.95rem] text-white/50 leading-[1.4] max-w-[480px] mb-10 font-normal">
            {t.hero.desc}
          </p>
          <div className="flex gap-4 items-center">
            <button className="text-[0.72rem] font-bold uppercase tracking-[0.14em] px-8 py-3.5 bg-white text-[var(--color-dark-bg)] hover:bg-transparent hover:text-white border border-white transition-all duration-300">
              {t.hero.cta}
            </button>
            <button className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] px-8 py-3.5 border border-white/25 text-white/75 hover:border-white/60 hover:text-white transition-all duration-300">
              {t.hero.cta2}
            </button>
          </div>
        </div>
      </div>
      
      <div className="relative border-t border-white/10 grid grid-cols-2 md:grid-cols-4 bg-white/5 backdrop-blur-sm">
        {[
          { label: "Market Cap", val: "42.8", unit: "B", change: "+12.4%", up: true },
          { label: "Revenue Growth", val: "18.5", unit: "%", change: "+2.1%", up: true },
          { label: "EPS (LTM)", val: "4.12", unit: "USD", change: "-0.4%", up: false },
          { label: "Dividend Yield", val: "2.85", unit: "%", change: "+0.1%", up: true }
        ].map((kpi, i) => (
          <div key={i} className="p-8 border-r border-white/10 last:border-r-0">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/35 block mb-1">{kpi.label}</span>
            <span className="text-[clamp(1.5rem,2.2vw,2rem)] font-extrabold text-white leading-none block mb-1">
              {kpi.val}<span className="text-[0.55em] text-white/40 font-medium ml-1">{kpi.unit}</span>
            </span>
            <span className={`text-[0.65rem] font-bold ${kpi.up ? "text-[var(--color-success)]" : "text-[var(--color-alert)]"}`}>
              {kpi.change}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
