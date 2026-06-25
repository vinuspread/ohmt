// src/app/ko/templates/OHMT010-cosmetic/-components/layout/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { Menu, X, Search } from "lucide-react";

const NAV_ITEMS = [
  { name: "숍", id: "shop" },
  { name: "스토리", id: "story" },
  { name: "저널", id: "journal" },
  { name: "마이페이지", id: "account" }
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Marquee banner */}
      <div className="bg-black text-white h-[38px] fixed top-0 left-0 w-full z-[1000] flex items-center overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee-cosmetic">
          {[1, 2, 3, 4].map((i) => (
            <p key={i} className="px-4 md:px-16 text-[0.72rem] font-medium tracking-[0.05em] uppercase">
              15만 원 이상 구매 시 무료 배송 · 친환경 재생 패키징 · 피부 자극 테스트 완료
            </p>
          ))}
        </div>
      </div>

      <nav className={clsx(
        "fixed top-[38px] left-0 w-full h-[60px] md:h-[80px] z-[900] transition-[background,border-color] duration-400",
        isScrolled || mobileOpen
          ? "bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-black/10"
          : "bg-transparent"
      )}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-full flex items-center justify-between">
          <Link href="/ko/templates/OHMT010-cosmetic" className="text-[1rem] md:text-[1.15rem] font-black tracking-[0.12em] uppercase">
            VINUSPREAD
          </Link>

          {/* Desktop GNB */}
          <div className="hidden md:flex gap-10 ml-20">
            {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={`/ko/templates/OHMT010-cosmetic/${item.id}`}
                  className="text-[0.82rem] font-medium opacity-60 hover:opacity-100 transition-opacity uppercase tracking-widest"
                >

                {item.name}
              </Link>
            ))}
          </div>

           <div className="flex items-center gap-4 ml-auto">
             
             <button className="hidden md:flex items-center gap-1.5 text-[0.82rem] font-bold uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity">
               <Search size={15} />
             </button>


            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={clsx(
        "fixed top-[98px] left-0 right-0 z-[850] bg-[var(--color-bg)] border-t border-black/10 transition-[max-height,opacity] duration-300 md:hidden overflow-hidden",
        mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="flex flex-col px-10 py-6 gap-1">
          {NAV_ITEMS.map((item) => (
             <Link
               key={item.id}
               href={`/ko/templates/OHMT010-cosmetic/${item.id}`}
               onClick={() => setMobileOpen(false)}
               className="text-[0.82rem] font-medium uppercase tracking-widest opacity-60 hover:opacity-100 py-3.5 border-b border-black/10 transition-opacity"
             >

              {item.name}
            </Link>
          ))}
          <div className="flex gap-4 mt-5 items-center">
            <button className="flex items-center gap-2 text-[0.82rem] font-bold uppercase tracking-wider">
              <Search size={15} /> 검색
            </button>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-cosmetic {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-cosmetic {
          animation: marquee-cosmetic 25s linear infinite;
        }
      `}</style>
    </>
  );
};
