// src/app/templates/ir/-components/layout/Header.tsx
"use client";

import React from "react";
import Link from "next/link";
export const Header = () => {
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
const navItems = [
    { label: t.nav.overview, href: "/en/templates/OHMT011-ir-EN" },
    { label: t.nav.financials, href: "/en/templates/OHMT011-ir-EN/financials" },
    { label: t.nav.governance, href: "/en/templates/OHMT011-ir-EN/governance" },
    { label: t.nav.news, href: "/en/templates/OHMT011-ir-EN/news" },
    { label: t.nav.contact, href: "/en/templates/OHMT011-ir-EN/contact" },
  ];

  return (
    <>
       <div className="bg-[var(--color-dark-bg)] text-white/85 text-[0.72rem] font-medium tracking-wide text-center py-2 relative z-[1000]">
        {t.nav.earnings} <Link href="#" className="text-[var(--color-accent)] underline">{t.nav.readMore}</Link>
      </div>
      <nav className="sticky top-0 z-[900] h-16 bg-white border-b border-[var(--color-border)] flex items-center">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between w-full">
          <Link href="/en/templates/OHMT011-ir-EN" className="flex flex-col gap-0.5">
            <span className="text-base font-bold text-[var(--color-dark-bg)] tracking-tight leading-none">VINUSPREAD</span>
            <span className="text-[0.58rem] font-medium uppercase tracking-[0.2em] text-[#6B6B6B] leading-none">Global Holdings</span>
          </Link>
          
          <div className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={`${item.href}`}
                className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#6B6B6B] hover:text-black transition-all duration-300 pb-0.5 border-b border-transparent hover:border-[var(--color-accent)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex flex-col text-right leading-tight pr-4 border-r border-[var(--color-border)]">
              <span className="text-[0.7rem] font-bold text-[var(--color-dark-bg)] block">NAS: VINU</span>
              <span className="text-[0.7rem] font-semibold block text-[var(--color-success)]">142.85 +1.24%</span>
            </div>
               <button className="text-[0.68rem] font-bold uppercase tracking-[0.14em] px-6 py-2 border border-[var(--color-dark-bg)] text-[var(--color-dark-bg)] hover:bg-[var(--color-dark-bg)] hover:text-white transition-all duration-300">
              {t.nav.investorKit}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
