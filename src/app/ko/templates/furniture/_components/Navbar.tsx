"use client";
import React, { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";


export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full h-14 md:h-20 z-50 transition-[background,border-color] duration-500 flex items-center ${
          scrolled || mobileOpen ? "bg-white/95 backdrop-blur-xl border-b border-black/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/ko/templates/OHMT004-furniture" className="text-xl md:text-2xl font-black lowercase text-[var(--color-text)]">
            Oh My Template
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-[13px] font-medium text-[var(--color-secondary)]">
            <Link href="/ko/templates/OHMT004-furniture/category/living" className="hover:text-[var(--color-primary)] transition-colors uppercase">{"리빙룸"}</Link>
            <Link href="/ko/templates/OHMT004-furniture/category/bedroom" className="hover:text-[var(--color-primary)] transition-colors uppercase">{"침실"}</Link>
            <Link href="/ko/templates/OHMT004-furniture/category/dining" className="hover:text-[var(--color-primary)] transition-colors uppercase">{"다이닝"}</Link>
            <Link href="/ko/templates/OHMT004-furniture/category/workspace" className="hover:text-[var(--color-primary)] transition-colors uppercase">{"워크스페이스"}</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 text-[var(--color-text)]">
            <button className="hover:text-[var(--color-primary)] transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <Link href="/ko/templates/OHMT004-furniture/cart" className="relative hover:text-[var(--color-primary)] transition-colors">
              <ShoppingBag size={20} strokeWidth={1.5} />
            </Link>
            <button 
              className="md:hidden p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>
 
      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-x-0 top-14 z-40 bg-white border-b border-black/5 transition-[max-height,opacity] duration-300 md:hidden overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col px-6 text-[14px] font-medium text-[var(--color-secondary)]">
          {/* Categories */}
          <div className="flex flex-col gap-1 border-b border-black/5 pb-4 mb-4">
            <span className="text-[13px] font-bold tracking-[0.2em] text-[var(--color-text)]/40 mb-2 uppercase">{"카테고리"}</span>
            <Link 
              href="/ko/templates/OHMT004-furniture/category/living" 
              onClick={() => setMobileOpen(false)}
              className="hover:text-[var(--color-primary)] py-2 transition-colors uppercase"
            >
              {"리빙룸"}
            </Link>
            <Link 
              href="/ko/templates/OHMT004-furniture/category/bedroom" 
              onClick={() => setMobileOpen(false)}
              className="hover:text-[var(--color-primary)] py-2 transition-colors uppercase"
            >
              {"침실"}
            </Link>
            <Link 
              href="/ko/templates/OHMT004-furniture/category/dining" 
              onClick={() => setMobileOpen(false)}
              className="hover:text-[var(--color-primary)] py-2 transition-colors uppercase"
            >
              {"다이닝"}
            </Link>
            <Link 
              href="/ko/templates/OHMT004-furniture/category/workspace" 
              onClick={() => setMobileOpen(false)}
              className="hover:text-[var(--color-primary)] py-2 transition-colors uppercase"
            >
              {"워크스페이스"}
            </Link>
          </div>
 
          {/* Account & Shop Utilities */}
          <div className="flex flex-col gap-1">
            <span className="text-[13px] font-bold tracking-[0.2em] text-[var(--color-text)]/40 mb-2 uppercase">{"메뉴"}</span>
            <Link 
              href="/ko/templates/OHMT004-furniture/cart" 
              onClick={() => setMobileOpen(false)}
              className="hover:text-[var(--color-primary)] py-2 transition-colors uppercase flex justify-between items-center"
            >
              <span>{"장바구니"}</span>
            </Link>
            <Link 
              href="/ko/templates/OHMT004-furniture" 
              onClick={() => setMobileOpen(false)}
              className="hover:text-[var(--color-primary)] py-2 transition-colors uppercase"
            >
              {"계정 / 로그인"}
            </Link>
            <Link 
              href="/ko/templates/OHMT004-furniture" 
              onClick={() => setMobileOpen(false)}
              className="hover:text-[var(--color-primary)] py-2 transition-colors uppercase"
            >
              {"마이 페이지"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
