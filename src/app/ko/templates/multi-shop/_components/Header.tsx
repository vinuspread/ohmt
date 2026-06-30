"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Search, Menu, X } from "lucide-react";

const YELLOW = "var(--color-frame)";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    setScrolled(window.scrollY > 60);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "홈", href: "/ko/templates/OHMT017-multi-shop" },
    { name: "쇼핑", href: "/ko/templates/OHMT017-multi-shop/shop" },
    { name: "스토리", href: "/ko/templates/OHMT017-multi-shop/about" },
    { name: "매거진", href: "/ko/templates/OHMT017-multi-shop/blog" },
    { name: "문의", href: "/ko/templates/OHMT017-multi-shop/contact" },
  ];

  const isHome = pathname === "/ko/templates/OHMT017-multi-shop";
  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      {/* Nav */}
      <header
        className={`fixed top-[20px] md:top-[48px] left-[20px] right-[20px] md:left-[48px] md:right-[48px] z-50 ${mounted ? "transition-colors duration-300" : ""}`}
        style={{ backgroundColor: transparent ? "transparent" : "#ffffff" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-18">
          <Link
            href="/ko/templates/OHMT017-multi-shop"
            className="text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300"
            style={{ color: transparent ? "#ffffff" : "#0A0A0A" }}
          >
            OHMT
          </Link>

          <nav
            className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.15em] transition-colors duration-300"
            style={{ color: transparent ? "rgba(255,255,255,0.7)" : "#0A0A0A" }}
          >
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/ko/templates/OHMT017-multi-shop" &&
                  pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:opacity-100 transition-opacity duration-200 ${
                    isActive ? "font-bold opacity-100" : "opacity-70"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-5">
            <button
              className="hidden md:block transition-colors duration-300 hover:opacity-70"
              style={{ color: transparent ? "rgba(255,255,255,0.7)" : "#0A0A0A" }}
              aria-label="검색"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <Link
              href="/ko/templates/OHMT017-multi-shop/shop"
              className="transition-colors duration-300 hover:opacity-70"
              style={{ color: transparent ? "rgba(255,255,255,0.7)" : "#0A0A0A" }}
              aria-label="장바구니"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
            </Link>
            <button
              className="md:hidden p-1 transition-colors duration-300"
              style={{ color: transparent ? "#ffffff" : "#0A0A0A" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="메뉴 열기"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed left-[20px] right-[20px] z-40 transition-all duration-300 md:hidden overflow-y-auto ${
          mobileOpen ? "h-[calc(100vh-104px)] opacity-100 visible" : "h-0 opacity-0 invisible"
        }`}
        style={{ top: "84px", backgroundColor: "#ffffff" }}
      >
        <div className="flex flex-col px-12 py-12 gap-6 text-2xl font-bold uppercase tracking-[0.08em]" style={{ color: "#0A0A0A" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="hover:opacity-60 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

