"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setScrolled(window.scrollY > 60);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "메뉴", href: "/ko/templates/OHMT018-burger-KO/menu" },
    { name: "소개", href: "/ko/templates/OHMT018-burger-KO/about" },
    { name: "매장", href: "/ko/templates/OHMT018-burger-KO/locations" },
  ];

  const isHome = pathname === "/ko/templates/OHMT018-burger-KO";
  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 h-16 md:h-18"
      style={{ backgroundColor: transparent ? "transparent" : "var(--color-primary)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-full">
        <Link
          href="/ko/templates/OHMT018-burger-KO"
          className="text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 font-[var(--font-heading)]"
          style={{ color: transparent ? "#FFFFFF" : "#FFFFFF" }}
        >
          Oh My Template
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => {
            if (link.name === "메뉴") {
              return (
                <div key={link.href} className="relative group py-4">
                  <Link
                    href={link.href}
                    className="hover:opacity-80 transition-opacity duration-200 flex items-center gap-0.5"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {link.name}
                    <ChevronDown size={14} className="opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>
                  {/* Dropdown Menu */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block bg-white text-black shadow-lg py-2 w-40 border border-neutral-100">
                    <Link href="/ko/templates/OHMT018-burger-KO/menu" className="block px-4 py-2 text-xs hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-primary)] transition-colors">세트 메뉴</Link>
                    <Link href="/ko/templates/OHMT018-burger-KO/menu" className="block px-4 py-2 text-xs hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-primary)] transition-colors">버거</Link>
                    <Link href="/ko/templates/OHMT018-burger-KO/menu" className="block px-4 py-2 text-xs hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-primary)] transition-colors">치킨</Link>
                    <Link href="/ko/templates/OHMT018-burger-KO/menu" className="block px-4 py-2 text-xs hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-primary)] transition-colors">사이드</Link>
                    <Link href="/ko/templates/OHMT018-burger-KO/menu" className="block px-4 py-2 text-xs hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-primary)] transition-colors">디저트</Link>
                    <Link href="/ko/templates/OHMT018-burger-KO/menu" className="block px-4 py-2 text-xs hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-primary)] transition-colors">음료</Link>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className="hover:opacity-80 transition-opacity duration-200 active:scale-[0.97]"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/ko/templates/OHMT018-burger-KO/order"
            className={`px-6 py-2 text-xs uppercase tracking-[0.2em] font-semibold rounded-full transition-[transform,colors] duration-160 ease-out active:scale-[0.97] ${transparent ? 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]' : 'bg-white text-[var(--color-primary)] hover:bg-white/90'}`}
          >
            주문하기
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 active:scale-[0.95] transition-transform duration-160 ease-out"
          style={{ color: transparent ? "#FFFFFF" : "#FFFFFF" }}
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[var(--color-primary)] border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/80 text-sm font-medium tracking-wide hover:text-white transition-colors py-2"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/ko/templates/OHMT018-burger-KO/order"
              onClick={() => setMobileOpen(false)}
              className="bg-[var(--color-accent)] text-white text-center px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold rounded-full"
            >
            주문하기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
