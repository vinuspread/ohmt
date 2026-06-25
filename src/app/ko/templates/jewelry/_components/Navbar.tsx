// src/app/ko/templates/OHMT002-jewelry/-internal/components/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = /^\/(en|ko)?\/?templates\/jewelry\/?$/.test(pathname);
  const isCategoryPage = /^\/(en|ko)?\/?templates\/jewelry\/category\//.test(pathname);
  const isTransparent = (isHome || isCategoryPage) && !scrolled;

  const currentCategory = isCategoryPage
    ? pathname.split("/category/")[1]
    : "";

  const menuItems = [
    { name: "컬렉션", id: "collections", href: "/ko/templates/OHMT002-jewelry/category/collections" },
    { name: "인게이지먼트 & 웨딩", id: "engagement", href: "/ko/templates/OHMT002-jewelry/category/engagement" },
    { name: "하이 주얼리", id: "high-jewelry", href: "/ko/templates/OHMT002-jewelry/category/high-jewelry" },
    { name: "브랜드 헤리티지", id: "about", href: "/ko/templates/OHMT002-jewelry/category/about" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-14 md:h-20 transition-all duration-700 flex items-center ${
          !isTransparent
            ? "bg-[var(--color-bg-secondary)]/95 backdrop-blur-xl border-b border-neutral-100/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center transition-all w-full">
          
          {/* Desktop Left - Curation Categories */}
          <div className="hidden lg:flex items-center gap-8 text-[14px] uppercase tracking-[0.2em] -mr-[0.3em] font-bold">
            {menuItems.slice(0, 3).map((item) => {
              const isActive = currentCategory === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`relative py-1 transition-colors duration-500 ${
                    isActive
                      ? "text-[var(--color-primary)]"
                      : !isTransparent
                      ? "text-neutral-500 hover:text-[var(--color-primary)]"
                      : "text-white/80 hover:text-[var(--color-primary)]"
                  } group`}
                >
                  {item.name}
                  {/* Hover & Active Emerald Underline Slider */}
                  <span
                    className={`absolute bottom-0 left-1/2 w-full h-[1px] -translate-x-1/2 transition-transform duration-500 ease-out bg-[var(--color-primary)] origin-center ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden p-2 transition-colors ${
              !isTransparent ? "text-neutral-900" : "text-white"
            } hover:text-[var(--color-primary)]`}
          >
            <Menu size={20} />
          </button>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none max-w-[120px] sm:max-w-none">
            <Link
              href="/ko/templates/OHMT002-jewelry"
              className={`text-[14px] sm:text-[18px] md:text-2xl font-serif tracking-[0.25em] -mr-[0.25em] font-normal uppercase transition-colors duration-700 pointer-events-auto text-center ${
                !isTransparent ? "text-neutral-900" : "text-white"
              }`}
            >
              Oh My Template
            </Link>
          </div>

          {/* Right Icons & About */}
          <div
            className={`flex items-center gap-4 sm:gap-6 md:gap-8 transition-colors duration-700 ${
              !isTransparent ? "text-neutral-700" : "text-white"
            }`}
          >
            {/* Desktop Only About Link on the right of Logo */}
            <div className="hidden lg:flex items-center text-[14px] uppercase tracking-[0.2em] font-bold">
              {menuItems.slice(3).map((item) => {
                const isActive = currentCategory === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`relative py-1 transition-colors duration-500 ${
                      isActive
                        ? "text-[var(--color-primary)]"
                        : !isTransparent
                        ? "text-neutral-500 hover:text-[var(--color-primary)]"
                        : "text-white/80 hover:text-[var(--color-primary)]"
                    } group`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-1/2 w-full h-[1px] -translate-x-1/2 transition-transform duration-500 ease-out bg-[var(--color-primary)] origin-center ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Subtle Divider for Desktop */}
            <span className={`hidden lg:inline-block w-px h-3 ${!isTransparent ? "bg-neutral-200/50" : "bg-white/20"}`} />

            <button className="hover:text-[var(--color-primary)] transition-colors hidden sm:block">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button className="hover:text-[var(--color-primary)] transition-colors hidden md:block">
              <Heart size={18} strokeWidth={1.5} />
            </button>
            <button className="hover:text-[var(--color-primary)] transition-colors hidden sm:block">
              <User size={18} strokeWidth={1.5} />
            </button>
            <Link href="/ko/templates/OHMT002-jewelry/cart" className="group flex items-center gap-2 hover:opacity-85 transition-opacity">
              <ShoppingBag size={18} strokeWidth={1.5} className="group-hover:text-[var(--color-primary)] transition-colors" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-md z-[100]"
            />

            {/* Sidebar Box */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-[320px] bg-[var(--color-bg-secondary)] z-[101] p-10 flex flex-col justify-between selection:bg-[var(--color-primary)]"
            >
              <div className="space-y-16">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-serif tracking-[0.2em] uppercase text-neutral-900">Oh My Template</span>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-neutral-500 hover:text-neutral-900">
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col gap-8 text-[14px] uppercase tracking-[0.3em] font-bold text-neutral-600">
                  {menuItems.map((item) => {
                    const isActive = currentCategory === item.id;
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`transition-colors py-2 border-b border-neutral-100 flex justify-between items-center ${
                          isActive ? "text-[var(--color-primary)]" : "hover:text-[var(--color-primary)]"
                        }`}
                      >
                        {item.name}
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-6 border-t border-neutral-200/50 pt-8 text-[14px] tracking-[0.2em] text-neutral-400 font-bold uppercase">
                <p>© 2026 MAISON Oh My Template</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Instagram</a>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Pinterest</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
