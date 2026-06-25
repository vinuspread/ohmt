// src/app/ko/templates/OHMT005-sneaker/-components/layout/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "카테고리", href: "/ko/templates/OHMT005-sneaker/shop-all" },
    { label: "숍", href: "/ko/templates/OHMT005-sneaker/shop-all" },
    { label: "어바웃", href: "/ko/templates/OHMT005-sneaker/about" },
    { label: "블로그", href: "/ko/templates/OHMT005-sneaker/blog" },
    { label: "문의", href: "/ko/templates/OHMT005-sneaker/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full h-14 md:h-20 z-50 transition-[background,border-color] duration-300 flex items-center bg-white ${scrolled ? "border-b border-black/10" : ""}`}>
        <div className="max-w-[1440px] mx-auto w-full px-6 flex items-center justify-between gap-8">
          <Link href={`/ko/templates/OHMT005-sneaker`} className="text-[1.2rem] md:text-[1.4rem] font-black tracking-[-0.04em] text-black uppercase shrink-0">
            Vinuspread
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link key={l.label} href={`${l.href}`} className="text-[0.92rem] font-semibold text-black/75 hover:text-black transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex w-8 h-8 items-center justify-center text-black/70 hover:text-black transition-colors">
              <Search size={18} />
            </button>
            <button className="hidden md:flex w-8 h-8 items-center justify-center text-black/70 hover:text-black transition-colors">
              <User size={18} />
            </button>
            <Link href={`/ko/templates/OHMT005-sneaker/cart`} className="relative flex w-8 h-8 items-center justify-center text-black/70 hover:text-black transition-colors">
              <ShoppingBag size={18} />
            </Link>
            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 flex flex-col">
          {navLinks.map((l) => (
            <Link key={l.label} href={`${l.href}`} onClick={() => setMobileOpen(false)}
              className="text-[1.2rem] font-bold text-black border-b border-black/10 py-4">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
