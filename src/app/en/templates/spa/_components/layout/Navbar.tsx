"use client";

import { useEffect, useState } from "react";
import { navLinks } from "../../data/data";

const basePath = "/en/templates/spa";

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  // `solid` is for pages with no dark hero band behind the fixed header
  // (e.g. an article page with a light background from y:0) - without it,
  // the header's default white-on-transparent text is invisible against
  // a light background until the user scrolls past it.
  const isDark = solid || scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isDark ? "bg-[var(--color-bg)]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a
          href={basePath}
          className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight"
          style={{ color: isDark ? "var(--color-text)" : "var(--color-text-contrast)" }}
        >
          OHMT
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(1, -1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium transition-colors duration-200 hover:text-[var(--color-primary)]"
              style={{ color: isDark ? "var(--color-text)" : "var(--color-text-contrast)" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={`${basePath}/contact`}
          className="hidden lg:inline-flex items-center rounded-full bg-[var(--color-primary)] text-[var(--color-text-contrast)] px-6 py-2.5 text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-150"
        >
          Book appointment
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span className="w-6 h-px" style={{ backgroundColor: isDark ? "var(--color-text)" : "var(--color-text-contrast)" }} />
          <span className="w-6 h-px" style={{ backgroundColor: isDark ? "var(--color-text)" : "var(--color-text-contrast)" }} />
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden bg-[var(--color-bg)] border-t border-[var(--color-border)] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-[var(--color-text)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
