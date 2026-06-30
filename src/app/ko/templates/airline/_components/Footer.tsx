// src/app/templates/OHMT008-airline/-components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#8D9EAF] py-16 md:py-20 border-t border-[var(--color-accent)]/30">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/ko/templates/OHMT008-airline" className="inline-block mb-5">
              <span className="text-[0.78rem] md:text-[0.82rem] font-bold tracking-[0.15em] uppercase text-[var(--color-primary)] leading-none">OHMT</span>
            </Link>
            <p className="text-[0.85rem] text-[var(--color-primary)]/70 leading-relaxed max-w-[280px]">
              럭셔리 여행의 글로벌 스탠다드를 선도합니다. 모든 대륙에서 최상의 경험을 누려보세요.
            </p>
          </div>

          <div>
            <h5 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--color-accent)] mb-5">예약 및 준비</h5>
            <nav className="flex flex-col gap-3">
              {["운항 스케줄", "취항지", "여행 요건", "수하물 안내"].map(item => (
                <Link key={item} href="/ko/templates/OHMT008-airline" className="text-[0.8rem] text-[var(--color-primary)]/70 hover:text-[var(--color-primary)] transition-colors">{item}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h5 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--color-accent)] mb-5">기내 서비스</h5>
            <nav className="flex flex-col gap-3">
              {["퍼스트 클래스", "비즈니스 클래스", "다이닝 & 와인", "엔터테인먼트"].map(item => (
                <Link key={item} href="/ko/templates/OHMT008-airline/experience" className="text-[0.8rem] text-[var(--color-primary)]/70 hover:text-[var(--color-primary)] transition-colors">{item}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h5 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--color-accent)] mb-5">로열티</h5>
            <nav className="flex flex-col gap-3">
              {["회원 혜택", "마일리지 적립", "마일리지 사용", "제휴사"].map(item => (
                <Link key={item} href="/ko/templates/OHMT008-airline/loyalty" className="text-[0.8rem] text-[var(--color-primary)]/70 hover:text-[var(--color-primary)] transition-colors">{item}</Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[var(--color-primary)]/20 gap-4">
          <span className="text-[0.7rem] text-[var(--color-primary)]/60 uppercase tracking-widest font-medium">
            © 2026 OHMT.
          </span>
          <div className="flex gap-6 md:gap-8">
            {["법적 고지", "개인정보 처리방침", "쿠키 설정"].map(item => (
              <Link key={item} href="/ko/templates/OHMT008-airline" className="text-[0.7rem] text-[var(--color-primary)]/60 hover:text-[var(--color-primary)] uppercase tracking-widest transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
