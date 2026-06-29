"use client";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Highlights", href: "/en/templates/ev/highlight" },
  { label: "Story",      href: "/en/templates/ev/story"     },
  { label: "Specs",      href: "/en/templates/ev/specs"     },
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
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-20">
          <div className="font-inter text-[11px] tracking-[0.08em] text-[var(--text-muted)] uppercase">
            Discover NUBI
          </div>

          <a href="/en/templates/ev" className="font-michroma font-bold text-xl text-[var(--text)]">
            OHMT
          </a>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-inter text-[12px] tracking-[0.04em] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--text-on-light)] px-5 py-2.5 rounded-full text-[12px] font-inter font-medium tracking-[0.04em] hover:bg-[var(--accent-dark)] transition-colors">
              Reserve <span className="text-[16px] leading-none">⊕</span>
            </button>
        </div>
      </div>
    </nav>
  );
}
