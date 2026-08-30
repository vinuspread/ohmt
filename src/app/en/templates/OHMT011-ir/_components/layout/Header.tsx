// src/app/templates/OHMT011-ir/-components/layout/Header.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
export const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
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
    { label: t.nav.overview, href: "/en/templates/OHMT011-ir" },
    { label: t.nav.financials, href: "/en/templates/OHMT011-ir/financials" },
    { label: t.nav.governance, href: "/en/templates/OHMT011-ir/governance" },
    { label: t.nav.news, href: "/en/templates/OHMT011-ir/news" },
    { label: t.nav.contact, href: "/en/templates/OHMT011-ir/contact" },
  ];

  return (
    <>
       <div className="bg-[var(--color-dark-bg)] text-white/85 text-[0.72rem] font-medium tracking-wide text-center py-2 relative z-[1000]">
        {t.nav.earnings} <Link href="#" className="text-[var(--color-accent)] underline">{t.nav.readMore}</Link>
      </div>
      <nav className="sticky top-0 z-[900] h-16 bg-white border-b border-[var(--color-border)] flex items-center">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between w-full">
          <Link href="/en/templates/OHMT011-ir" className="flex flex-col gap-0.5">
            <span className="text-base font-bold text-[var(--color-dark-bg)] tracking-tight leading-none">OBERON</span>
            <span className="text-[0.58rem] font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)] leading-none">Global Holdings</span>
          </Link>

          <div className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={`${item.href}`}
                className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)] hover:text-black transition-all duration-300 pb-0.5 border-b border-transparent hover:border-[var(--color-accent)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <div className="hidden lg:flex flex-col text-right leading-tight pr-4 border-r border-[var(--color-border)]">
              <span className="text-[0.7rem] font-bold text-[var(--color-dark-bg)] block">NAS: VINU</span>
              <span className="text-[0.7rem] font-semibold block text-[var(--color-success)]">142.85 +1.24%</span>
            </div>
               <button className="text-[0.68rem] font-bold uppercase tracking-[0.14em] px-6 py-2 border border-[var(--color-dark-bg)] text-[var(--color-dark-bg)] hover:bg-[var(--color-dark-bg)] hover:text-white transition-all duration-300">
              {t.nav.investorKit}
            </button>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center border border-[var(--color-border)] text-[var(--color-dark-bg)] md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={19} strokeWidth={1.8} /> : <Menu size={19} strokeWidth={1.8} />}
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="sticky top-16 z-[890] border-b border-[var(--color-border)] bg-white md:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col px-6 py-5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-[var(--color-border)] py-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)] last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
            <button className="mt-5 w-full border border-[var(--color-dark-bg)] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-dark-bg)]">
              {t.nav.investorKit}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
