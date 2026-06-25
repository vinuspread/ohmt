// src/app/templates/ir/-components/layout/Header.tsx
"use client";

import React from "react";
import Link from "next/link";

export const Header = () => {
  const navItems = [
    { label: "개요", href: "/ko/templates/OHMT011-ir-KO" },
    { label: "재무 정보", href: "/ko/templates/OHMT011-ir-KO/financials" },
    { label: "기업 지배구조", href: "/ko/templates/OHMT011-ir-KO/governance" },
    { label: "뉴스", href: "/ko/templates/OHMT011-ir-KO/news" },
    { label: "문의", href: "/ko/templates/OHMT011-ir-KO/contact" },
  ];

  return (
    <>
      <div className="bg-[var(--color-dark-bg)] text-white/85 text-[0.72rem] font-medium tracking-wide text-center py-2.5 relative z-[1000]">
        새 실적 발표: Q1 2026 실적 보고서 제공 중. <Link href="#" className="text-[var(--color-accent)] underline">더 보기</Link>
      </div>
      <nav className="sticky top-0 z-[900] h-16 bg-white border-b border-[var(--color-border)] flex items-center">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between w-full">
          <Link href="/ko/templates/OHMT011-ir-KO" className="flex flex-col gap-0.5">
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
              투자자 키트
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
