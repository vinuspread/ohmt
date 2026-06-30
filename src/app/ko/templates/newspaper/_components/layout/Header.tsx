// src/app/ko/templates/OHMT013-newspaper/-components/layout/Header.tsx
"use client";

import React from "react";
import Link from "next/link";

export const Header = () => {
  const navItems = [
    { name: "국제", href: "/ko/templates/OHMT013-newspaper/world" },
    { name: "정치", href: "/ko/templates/OHMT013-newspaper/politics" },
    { name: "경제", href: "/ko/templates/OHMT013-newspaper/economy" },
    { name: "IT/과학", href: "/ko/templates/OHMT013-newspaper/tech" },
    { name: "문화", href: "/ko/templates/OHMT013-newspaper/culture" },
    { name: "스포츠", href: "/ko/templates/OHMT013-newspaper/sports" }
  ];

  return (
    <header className="bg-white">
      <div className="bg-[var(--color-primary)] text-white h-9 flex items-center overflow-hidden">
        <div className="bg-[#9B1528] px-6 h-full flex items-center text-[0.72rem] font-bold uppercase tracking-widest shrink-0">
          속보
        </div>
        <div className="flex whitespace-nowrap animate-ticker pl-8">
          {[1, 2].map(i => (
            <span key={i} className="pr-20 text-[0.78rem] font-semibold tracking-wide">
              세계 시장 기술주 급등으로 사상 최고치 경신 · 50개국 참가 새로운 지속가능성 협정 체결 · 북극 빙하 사상 최저치 기록
            </span>
          ))}
        </div>
      </div>
      
      <div className="max-w-[1280px] mx-auto px-8 py-6">
        <div className="flex justify-between items-start mb-3">
          <div className="text-[0.75rem] text-[#555] font-medium font-sans">
            2026년 5월 27일 목요일 · 오늘 자 신문
          </div>
          <Link href="/ko/templates/OHMT013-newspaper" className="font-[family-name:var(--theme-font-heading)] text-[clamp(2.5rem,5.5vw,4.5rem)] font-black tracking-tighter leading-none text-center flex-1">
            VINUSPREAD TIMES
          </Link>
          <div className="text-[0.75rem] text-[#555] font-medium font-sans text-right">
            구독 가격: 3,500원 · 디지털 에디션
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-[100] bg-white border-y border-[var(--color-border)]">
        <div className="max-w-[1280px] mx-auto px-8 h-11 flex items-center justify-between">
          <div className="flex h-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 h-full flex items-center text-[0.78rem] font-bold uppercase tracking-wider text-black border-r border-[var(--color-border)] hover:bg-black hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[0.78rem] font-bold uppercase text-black">로그인</Link>
            <button className="bg-[var(--color-primary)] text-white px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-wide hover:bg-[#9B1528] transition-colors">
              정기구독
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
