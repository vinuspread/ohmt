// src/app/templates/OHMT011-ir/-components/layout/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white py-12 md:py-24 border-t border-[var(--color-border)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <Link href="/ko/templates/OHMT011-ir" className="flex flex-col gap-0.5 mb-6">
              <span className="text-base font-semibold md:font-bold text-[var(--color-dark-bg)] tracking-tight leading-none">VINUSPREAD</span>
              <span className="text-[0.58rem] font-medium uppercase tracking-[0.2em] text-[#6B6B6B] leading-none">Global Holdings</span>
            </Link>
            <p className="text-[0.85rem] text-[#6B6B6B] leading-relaxed max-w-[280px]">
              투명하고 정확하며 적시성 있는 정보를 투자자 커뮤니티에 제공하기 위해 최선을 다하고 있습니다.
            </p>
          </div>
          
          <div>
            <h5 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--color-dark-bg)] mb-6">투자 정보</h5>
            <nav className="flex flex-col gap-4">
              {["주식 정보", "재무 실적", "SEC 공시", "주주 서비스"].map(item => (
                <Link key={item} href="#" className="text-[0.8rem] text-[#6B6B6B] hover:text-[var(--color-dark-bg)] transition-colors">{item}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h5 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--color-dark-bg)] mb-6">지배구조</h5>
            <nav className="flex flex-col gap-4">
              {["이사회", "위원회", "지배구조 문서", "윤리 및 청렴"].map(item => (
                <Link key={item} href="#" className="text-[0.8rem] text-[#6B6B6B] hover:text-[var(--color-dark-bg)] transition-colors">{item}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h5 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--color-dark-bg)] mb-6">리소스</h5>
            <nav className="flex flex-col gap-4">
              {["투자 계산기", "애널리스트 리포트", "이메일 알림", "IR 연락처"].map(item => (
                <Link key={item} href="#" className="text-[0.8rem] text-[#6B6B6B] hover:text-[var(--color-dark-bg)] transition-colors">{item}</Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-[var(--color-border)] gap-6">
          <span className="text-[0.7rem] text-[#6B6B6B] uppercase tracking-widest font-medium">
            © 2026 Vinuspread Global Holdings. All rights reserved.
          </span>
          <div className="flex gap-8">
            {["개인정보 처리방침", "이용약관", "주식 면책조항"].map(item => (
              <Link key={item} href="#" className="text-[0.7rem] text-[#6B6B6B] hover:text-[var(--color-dark-bg)] uppercase tracking-widest transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
