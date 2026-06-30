"use client";
import { useEffect, useState } from "react";

const base = "/ko/templates/OHMT028-ev";
const navLinks = [
  { label: "스토리", href: `${base}/story` },
  { label: "사양", href: `${base}/specs` },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[var(--bg)]/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 lg:px-20 flex items-center justify-between h-20 gap-2">
          <div className="font-inter text-[11px] tracking-[0.08em] text-[var(--text-muted)] uppercase hidden sm:block">
            Discover NUBI
          </div>

          <a href={base} className="font-michroma font-bold text-lg md:text-xl text-[var(--text)]">
            NUBI™
          </a>

          <div className="flex items-center gap-4 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-inter text-[12px] tracking-[0.04em] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href={`${base}/order`}>
              <button className="inline-flex items-center gap-2.5 bg-[var(--accent)] text-[var(--text-on-light)] px-4 py-2 md:px-5 md:py-2.5 rounded-full text-[11px] md:text-[12px] font-inter font-medium tracking-[0.04em] hover:bg-[var(--accent-dark)] transition-colors">
                예약하기 <span className="text-[14px] md:text-[16px] leading-none">⊕</span>
              </button>
            </a>
        </div>
      </div>
    </nav>
  );
}
