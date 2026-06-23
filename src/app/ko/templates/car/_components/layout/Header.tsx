// src/app/ko/templates/OHMT018-car-kr/-components/layout/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const NAV_ITEMS = [
    { name: "모델", id: "models" },
    { name: "테크놀로지", id: "technology" },
    { name: "어바웃", id: "about" },
    { name: "커스텀 구성", id: "configure" }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={clsx(
        "fixed top-0 left-0 right-0 z-[900] h-[68px] flex items-center transition-all duration-400",
        isScrolled || mobileOpen ? "bg-black/95 backdrop-blur-md" : "bg-transparent"
      )}>
        <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)] flex items-center justify-between w-full">
          <Link href="/ko/templates/OHMT018-car-kr" className="text-[0.95rem] font-bold tracking-[0.25em] uppercase text-white">
            VINUSPREAD<span className="text-[var(--theme-accent)]">.</span>
          </Link>

          {/* Desktop GNB */}
          <div className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
            {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={`/ko/templates/OHMT018-car-kr/${item.id}`}
                  className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--theme-text-muted)] hover:text-white transition-all duration-500 relative group pb-1"
                >

                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--theme-accent)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            
            <button className="hidden md:block text-[0.68rem] font-bold uppercase tracking-[0.16em] px-6 py-2 border border-white/25 bg-transparent text-white hover:border-white transition-all duration-500">
              시승 신청
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 text-white"
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
        "fixed top-[68px] left-0 right-0 z-[850] bg-black border-t border-white/[0.08] transition-all duration-300 md:hidden overflow-hidden",
        mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="flex flex-col px-8 py-6 gap-1">
          {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={`/ko/templates/OHMT018-car-kr/${item.id}`}
                onClick={() => setMobileOpen(false)}
                className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-white/50 hover:text-white py-3.5 border-b border-white/[0.08] transition-colors"
              >

              {item.name}
            </Link>
          ))}
          <div className="flex gap-4 mt-6">
            <button className="flex-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] px-6 py-2.5 border border-white/25 bg-transparent text-white hover:border-white transition-all duration-300">
              시승 신청
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
