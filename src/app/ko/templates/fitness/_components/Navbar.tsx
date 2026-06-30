"use client";
import { useEffect, useState } from "react";

const base = "/ko/templates/fitness";
const leftLinks = [
  { label: "소개", href: `${base}/about` },
  { label: "위탁 운영", href: `${base}/consignment` },
  { label: "프로그램", href: `${base}/programs` },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isLight = scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-[var(--border)]" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-3 items-center h-20">
        <div className="hidden md:flex items-center gap-8">
          {leftLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[13px] font-medium transition-colors tracking-wide ${
                isLight ? "text-[var(--text-muted)] hover:text-[var(--accent)]" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={base}
          className={`font-['Montserrat'] font-bold text-xl tracking-tight transition-colors text-center ${
            isLight ? "text-[var(--accent)]" : "text-white"
          }`}
        >
          OHMT
        </a>

        <div className="hidden md:flex items-center justify-end">
          <a
            href={`${base}/about#contact`}
            className={`text-[12px] font-semibold px-5 py-2.5 rounded-lg transition-colors tracking-wide ${
              isLight
                ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-light)]"
                : "border border-white/60 text-white hover:bg-white/10"
            }`}
          >
            문의하기 →
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 col-start-3 justify-self-end"
        >
          <span className={`block w-5 h-[2px] transition-transform ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""} ${isLight ? "bg-[var(--text)]" : "bg-white"}`} />
          <span className={`block w-5 h-[2px] transition-opacity ${mobileOpen ? "opacity-0" : ""} ${isLight ? "bg-[var(--text)]" : "bg-white"}`} />
          <span className={`block w-5 h-[2px] transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""} ${isLight ? "bg-[var(--text)]" : "bg-white"}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[var(--border)] px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            {leftLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[14px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${base}/about#contact`}
              onClick={() => setMobileOpen(false)}
              className="bg-[var(--accent)] text-white text-[12px] font-semibold px-5 py-2.5 rounded-lg transition-colors tracking-wide w-fit"
            >
              문의하기 →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
