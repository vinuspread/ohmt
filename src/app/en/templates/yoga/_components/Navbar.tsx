"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, BRAND } from "../constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/en/templates/OHMT022-yoga";
  const isVisible = !isHome || scrolled;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible
          ? "bg-[var(--color-bg)] border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="px-8 md:px-14 lg:px-20 flex items-center justify-between h-16 md:h-[76px]">
        <Link
          href="/en/templates/OHMT022-yoga"
          className={`text-[15px] tracking-[0.12em] uppercase font-medium transition-colors duration-300 ${
            isVisible ? "text-[var(--color-text)]" : "text-white/90"
          }`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          {BRAND.name}
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.slice(1).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-[13px] tracking-[0.12em] uppercase transition-colors duration-300 font-normal ${
                  isVisible
                    ? "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                    : "text-white/60 hover:text-white/90"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`md:hidden transition-colors ${isVisible ? "text-[var(--color-text)]" : "text-white/80"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-[var(--color-bg)] border-t border-[var(--color-border)]">
          <ul className="flex flex-col px-8 py-8 gap-5 divide-y divide-[var(--color-border)]">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="pt-5 first:pt-0">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[12px] tracking-[0.15em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors font-normal"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
