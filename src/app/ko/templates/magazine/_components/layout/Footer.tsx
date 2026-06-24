// src/app/ko/templates/OHMT012-magazine-KO/-components/layout/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg)] py-12 md:py-20 border-t border-[var(--theme-border)]">
      <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10 md:mb-16">
          <div className="max-w-[320px]">
            <Link 
              href="/ko/templates/OHMT012-magazine-KO" 
              className="font-[family-name:var(--theme-font-heading)] text-[1.6rem] tracking-[0.12em] uppercase text-[var(--theme-text)] mb-6 block"
            >
              VINUSPREAD
            </Link>
            <p className="text-[0.85rem] text-[var(--theme-text-muted)] leading-relaxed font-normal">
              디자인, 문화, 지속가능성의 교차점을 탐구하는 프리미엄 라이프스타일 에디토리얼.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h5 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--theme-text)] mb-6">탐색</h5>
              <nav className="flex flex-col gap-3">
                {["스토리", "아카이브", "이슈", "팟캐스트"].map(item => (
                  <Link key={item} href="#" className="text-[0.8rem] text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] transition-colors">{item}</Link>
                ))}
              </nav>
            </div>
            <div>
              <h5 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--theme-text)] mb-6">커뮤니티</h5>
              <nav className="flex flex-col gap-3">
                {["인스타그램", "트위터", "뉴스레터", "문의"].map(item => (
                  <Link key={item} href="#" className="text-[0.8rem] text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] transition-colors">{item}</Link>
                ))}
              </nav>
            </div>
            <div>
              <h5 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--theme-text)] mb-6">컴퍼니</h5>
              <nav className="flex flex-col gap-3">
                {["소개", "프레스", "광고", "채용"].map(item => (
                  <Link key={item} href="#" className="text-[0.8rem] text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] transition-colors">{item}</Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-[var(--theme-border)] gap-6">
          <span className="text-[0.7rem] text-[var(--theme-text-muted)] uppercase tracking-widest font-medium">
            © 2026 VINUSPREAD Magazine. 모던 에스테트를 위해 제작되었습니다.
          </span>
          <div className="flex gap-8">
            {["개인정보", "이용약관", "쿠키"].map(item => (
              <Link key={item} href="#" className="text-[0.7rem] text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] uppercase tracking-widest transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
