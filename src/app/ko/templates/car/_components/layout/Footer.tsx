// src/app/ko/templates/OHMT009-car/-components/layout/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black py-12 md:py-20 border-t border-[var(--theme-border)]">
      <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-16">
          <div className="col-span-3 md:col-span-1 mb-2 md:mb-0">
            <span className="text-[0.95rem] md:text-[1.2rem] font-medium md:font-bold tracking-[0.25em] uppercase text-white mb-3 block">
              VINUSPREAD<span className="text-[var(--theme-accent)]">.</span>
            </span>
            <p className="hidden md:block text-[0.85rem] text-[var(--theme-text-muted)] leading-relaxed max-w-[280px]">
              더 높은 기준을 원하는 모든 이를 위한, 공학의 완성.
            </p>
          </div>

          <div>
            <h5 className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-white mb-4">모델</h5>
            <nav className="flex flex-col gap-3">
              {["EV9", "GT7", "X5", "S3", "전체 모델"].map(item => (
                <Link key={item} href="#" className="text-[0.75rem] text-[var(--theme-text-muted)] hover:text-white transition-colors">{item}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h5 className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-white mb-4">경험</h5>
            <nav className="flex flex-col gap-3">
              {["맞춤 구성", "시승 신청", "딜러 찾기", "파이낸싱"].map(item => (
                <Link key={item} href="#" className="text-[0.75rem] text-[var(--theme-text-muted)] hover:text-white transition-colors">{item}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h5 className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-white mb-4">회사</h5>
            <nav className="flex flex-col gap-3">
              {["VINUSPREAD 소개", "지속가능경영", "보도자료", "채용"].map(item => (
                <Link key={item} href="#" className="text-[0.75rem] text-[var(--theme-text-muted)] hover:text-white transition-colors">{item}</Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-[var(--theme-border)] gap-6">
          <span className="text-[0.7rem] text-[var(--theme-text-muted)] uppercase tracking-widest">
            © 2026 Oh My Template.
          </span>
          <div className="flex flex-wrap gap-4 md:gap-8">
            {["개인정보처리방침", "이용약관", "쿠키 정책"].map(item => (
              <Link key={item} href="#" className="text-[0.7rem] text-[var(--theme-text-muted)] hover:text-white uppercase tracking-widest transition-colors whitespace-nowrap">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
