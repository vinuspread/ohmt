// src/app/templates/OHMT008-airline/-components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const t = {
  "nav": {
    "book": `예약`,
    "experience": `익스피리언스`,
    "destinations": `취항지`,
    "loyalty": `로열티`,
    "login": `로그인`,
    "bookTrip": `여정 예약`
  },
  "hero": {
    "badge": `퍼스트 클래스 경험`,
    "title1": `빛나는 도약`,
    "title2": `특별함으로.`,
    "desc": `구름 위의 순수한 고요함. 하늘 위의 프라이빗 성역에서 비행의 본질적 기쁨을 되찾으세요.`,
    "cta": `취항지 발견하기`,
    "cta2": `가상 투어`
  }
};
const navItems = [
    { name: t.nav.book, slug: "book" },
    { name: t.nav.experience, slug: "experience" },
    { name: t.nav.destinations, slug: "destinations" },
    { name: t.nav.loyalty, slug: "loyalty" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={clsx(
        "fixed top-0 left-0 right-0 z-[900] h-[72px] flex items-center transition-[background,backdrop-filter] duration-300",
        isScrolled || mobileOpen
          ? "bg-[var(--color-primary)] backdrop-blur-xl"
          : "bg-transparent"
      )}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex items-center justify-between w-full">
            <Link href="/ko/templates/OHMT016-airline-kr" className="shrink-0 group">
            <span className="text-[0.78rem] md:text-[0.82rem] font-bold tracking-[0.15em] uppercase text-white leading-none">Oh My Template</span>
          </Link>

          {/* Desktop GNB */}
          <div className="hidden lg:flex gap-10 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.slug}
                href={`/ko/templates/OHMT016-airline-kr/${item.slug}`}
                className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/55 hover:text-white transition-colors duration-300 relative group pb-1"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--color-accent)] transition-[width] duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="#" className="hidden lg:block text-[0.7rem] font-medium uppercase tracking-[0.1em] text-white/50 hover:text-white transition-colors">
              {t.nav.login}
            </Link>
            <Button variant="primary" className="hidden lg:block text-[0.75rem] font-bold uppercase tracking-[0.14em] px-6 py-2.5 hover:opacity-85 transition-opacity duration-300">
              {t.nav.bookTrip}
            </Button>

            {/* Mobile hamburger */}
            <Button
              variant="ghost"
              className="lg:hidden flex items-center justify-center w-10 h-10 text-white"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-[72px] z-[840] bg-black/60 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div className={clsx(
        "fixed top-[72px] left-0 right-0 z-[850] bg-[var(--color-primary)] border-t border-white/10 transition-[max-height,opacity] duration-300 lg:hidden overflow-hidden",
        mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="flex flex-col px-6 py-8 gap-1">
          {navItems.map((item) => (
            <Link
              key={item.slug}
              href={`/ko/templates/OHMT016-airline-kr/${item.slug}`}
              onClick={() => setMobileOpen(false)}
              className="text-[0.9rem] font-semibold uppercase tracking-[0.14em] text-white/60 hover:text-white py-4 border-b border-white/10 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/ko/templates/OHMT016-airline-kr/book"
            onClick={() => setMobileOpen(false)}
            className="text-[0.9rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)] hover:text-[var(--color-accent-light)] py-4 border-b border-white/10 transition-colors"
          >
            {t.nav.bookTrip}
          </Link>
          <Link href="#" onClick={() => setMobileOpen(false)} className="text-[0.85rem] font-medium uppercase tracking-[0.1em] text-white/40 hover:text-white transition-colors py-4">
            {t.nav.login}
          </Link>
        </div>
      </div>
    </>
  );

};
