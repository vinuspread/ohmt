// src/app/templates/OHMT012-magazine/-components/layout/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";

export const Header = ({ light }: { light?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "스토리", href: "#" },
    { label: "아카이브", href: "#" },
    { label: "이슈", href: "#" },
    { label: "어바웃", href: "#" }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolled = isScrolled || light || mobileOpen;

  return (
    <>
      <nav className={clsx(
        "fixed top-0 left-0 right-0 z-[200] h-[52px] flex items-center transition-[background,box-shadow] duration-300",
        scrolled ? "bg-[var(--color-bg)]/96 backdrop-blur-md shadow-[0_1px_0_var(--theme-border)]" : "bg-transparent"
      )}>
        <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)] flex items-center justify-between w-full">
          <Link
            href="/ko/templates/OHMT012-magazine"
            className={clsx(
              "font-[family-name:var(--theme-font-heading)] text-[1.6rem] tracking-[0.12em] uppercase transition-colors duration-300",
              scrolled ? "text-[var(--theme-text)]" : "text-white"
            )}
          >
            VINUS
          </Link>

          {/* Desktop GNB */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href="#"
                className={clsx(
                  "text-[0.72rem] font-bold uppercase tracking-[0.12em] transition-colors duration-300 hover:opacity-100",
                  scrolled ? "text-[var(--theme-text-muted)] hover:text-[var(--theme-text)]" : "text-white/85 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}

            <button className={clsx(
              "text-[0.72rem] font-bold uppercase tracking-[0.1em] px-[1.2rem] py-[0.5rem] border transition-colors duration-300",
              scrolled
                ? "border-[var(--theme-text)] text-[var(--theme-text)] hover:bg-[var(--theme-text)] hover:text-white"
                : "border-white/50 text-white hover:bg-white hover:text-[var(--theme-text)]"
            )}>
              구독하기
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <X size={22} className="text-[var(--theme-text)]" />
              : <Menu size={22} className={scrolled ? "text-[var(--theme-text)]" : "text-white"} />
            }
          </button>
        </div>
      </nav>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-[52px] z-[190] bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div className={clsx(
        "fixed top-[52px] left-0 right-0 z-[195] bg-[var(--color-bg)] border-t border-[var(--theme-border)] transition-[max-height,opacity] duration-300 md:hidden overflow-hidden",
        mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="flex flex-col px-6 py-6 gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href="#"
              onClick={() => setMobileOpen(false)}
              className="text-[0.9rem] font-bold uppercase tracking-[0.14em] text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] py-4 border-b border-[var(--theme-border)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button className="mt-5 text-[0.85rem] font-bold uppercase tracking-[0.1em] px-6 py-3 border border-[var(--theme-text)] text-[var(--theme-text)] hover:bg-[var(--theme-text)] hover:text-white transition-colors duration-300 w-fit">
            구독하기
          </button>
        </div>
      </div>
    </>
  );
};
