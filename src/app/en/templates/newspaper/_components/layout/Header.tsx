// src/app/templates/OHMT013-newspaper/-components/layout/Header.tsx
"use client";

import React from "react";
import Link from "next/link";
export const Header = () => {
  const t = {
  "nav": {
    "breaking": `Breaking`,
    "ticker": `GLOBAL MARKETS REACH ALL-TIME HIGH AS TECH SECTOR SURGES · NEW SUSTAINABILITY ACCORD SIGNED BY 50 NATIONS · ARCTIC ICE REACHES HISTORIC LOWS`,
    "date": `Thursday, May 7, 2026 · Today's Paper`,
    "price": `Price: $3.50 · Digital Edition`,
    "world": `World`,
    "politics": `Politics`,
    "economy": `Economy`,
    "tech": `Tech`,
    "culture": `Culture`,
    "sports": `Sports`,
    "signIn": `Sign In`,
    "subscribe": `Subscribe`
  },
  "hero": {
    "badge": `DAILY ARCHIVE`,
    "badgeText": `Global Crisis`,
    "title1": `The Unwavering Trace`,
    "title2": `of Truth.`,
    "desc": `Rigorous structural reporting and uncompromised voices. Carving contemporary human archives into permanent ink.`,
    "cta": `READ TODAY'S EDITION`
  }
};
const navItems = [
    { name: t.nav.world, href: "/en/templates/OHMT013-newspaper-EN/world" },
    { name: t.nav.politics, href: "/en/templates/OHMT013-newspaper-EN/politics" },
    { name: t.nav.economy, href: "/en/templates/OHMT013-newspaper-EN/economy" },
    { name: t.nav.tech, href: "/en/templates/OHMT013-newspaper-EN/tech" },
    { name: t.nav.culture, href: "/en/templates/OHMT013-newspaper-EN/culture" },
    { name: t.nav.sports, href: "/en/templates/OHMT013-newspaper-EN/sports" }
  ];

  return (
    <header className="bg-white">
      <div className="bg-[var(--color-primary)] text-white h-9 flex items-center overflow-hidden">
        <div className="bg-[#9B1528] px-6 h-full flex items-center text-[0.72rem] font-bold uppercase tracking-widest shrink-0">
          {t.nav.breaking}
        </div>
        <div className="flex whitespace-nowrap animate-ticker pl-8">
          {[1, 2].map(i => (
            <span key={i} className="pr-20 text-[0.78rem] font-semibold tracking-wide">
              {t.nav.ticker}
            </span>
          ))}
        </div>
      </div>
      
      <div className="max-w-[1280px] mx-auto px-8 py-6">
        <div className="flex justify-between items-start mb-3">
          <div className="text-[0.75rem] text-[#555] font-medium font-sans">
            {t.nav.date}
          </div>
          <Link href={`/en/templates/OHMT013-newspaper-EN`} className="font-[family-name:var(--theme-font-heading)] text-[clamp(2.5rem,5.5vw,4.5rem)] font-black tracking-tighter leading-none text-center flex-1">
            VINUS TIMES
          </Link>
          <div className="text-[0.75rem] text-[#555] font-medium font-sans text-right">
            {t.nav.price}
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-[100] bg-white border-y border-[var(--color-border)]">
        <div className="max-w-[1280px] mx-auto px-8 h-11 flex items-center justify-between">
          <div className="flex h-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={`${item.href}`}
                className="px-4 h-full flex items-center text-[0.78rem] font-bold uppercase tracking-wider text-black border-r border-[var(--color-border)] hover:bg-black hover:text-white transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[0.78rem] font-bold uppercase text-black">{t.nav.signIn}</Link>
            <button className="bg-[var(--color-primary)] text-white px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-wide hover:bg-[#9B1528] transition-all">
              {t.nav.subscribe}
            </button>
          </div>
        </div>
      </nav>
      
      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
      `}</style>
    </header>
  );
};
