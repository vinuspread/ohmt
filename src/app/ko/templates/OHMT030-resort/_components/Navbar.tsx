"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, List, X } from "@phosphor-icons/react";

const base = "/ko/templates/OHMT030-resort";
const navLinks = [
  { label: "빌라", href: `${base}/stay` },
  { label: "다이닝", href: `${base}/dine` },
  { label: "소개", href: `${base}/about` },
];


export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 px-6 md:px-12 transition-colors duration-300 ${
        scrolled ? "bg-[var(--bg-dark)]/95 backdrop-blur-sm" : "bg-transparent"
      }`}>
        <div className="w-full h-full flex items-center justify-between">


          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href}
                className="text-white/80 hover:text-white text-base font-medium transition-colors focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-[var(--focus-ring-offset)]">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-start gap-1 md:items-center md:gap-0 md:absolute md:left-1/2 md:-translate-x-1/2">
            <Link href={base} className="text-xs md:text-xl font-semibold text-white tracking-tight leading-none">SANCTUM</Link>
            <span className="text-xs font-normal leading-none text-white/70 md:text-white/60">coastal resort</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href={`${base}/#contact`}
              className="text-white/80 hover:text-white text-base font-medium transition-colors focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-[var(--focus-ring-offset)]">
              문의하기
            </Link>
            <Link href={`${base}/#book`}
              className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-hover)] text-base font-medium transition-colors focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-[var(--focus-ring-offset)]">
              <span>예약하기</span>
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </Link>
          </div>

          <button onClick={() => setOpen(!open)}
            className="md:hidden text-white"
            aria-label="메뉴 열기">
            {open ? <X size={24} /> : <List size={24} />}
          </button>

        </div>
      </nav>

      <div className={`fixed inset-x-0 top-16 z-40 bg-[var(--bg-dark)] md:hidden transition-all duration-300 overflow-hidden ${
        open ? "max-h-80 py-6" : "max-h-0 py-0"
      }`}>
        <div className="flex flex-col gap-2 px-6">
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="py-3 text-base text-white/80 hover:text-white font-medium border-b border-white/10">
              {l.label}
            </Link>
          ))}
          <Link href={`${base}/#contact`} onClick={() => setOpen(false)}
            className="py-3 text-base text-white/80 hover:text-white font-medium border-b border-white/10">
            문의하기
          </Link>
          <Link href={`${base}/#book`} onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-[var(--text-contrast)] text-base font-medium">
            <span>예약하기</span>
            <ArrowRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}
