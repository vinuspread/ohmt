"use client";
import React from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/en/templates/OHMT019-coffee/about" },
  { label: "Menu", href: "/en/templates/OHMT019-coffee/menu" },
  { label: "Locations", href: "/en/templates/OHMT019-coffee/locations" },
  { label: "Contact", href: "#" },
];

const social = ["Instagram", "Facebook", "Twitter"];

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-secondary)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-14 md:py-16 flex flex-col items-center gap-8 text-center">
        <Link
          href="/en/templates/OHMT019-coffee"
          className="font-heading text-2xl font-bold text-[var(--color-text)] tracking-tight"
        >
          OHMT
        </Link>

        <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[12px] uppercase tracking-[0.15em] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-5">
          {social.map((s) => (
            <Link
              key={s}
              href="#"
              className="w-8 h-8 rounded-full border border-[var(--color-text-muted)]/30 flex items-center justify-center hover:border-[var(--color-text)] transition-colors duration-200"
              aria-label={s}
            >
              <span className="text-[9px] font-bold text-[var(--color-text-muted)]">
                {s[0]}
              </span>
            </Link>
          ))}
        </div>

        <div className="w-full h-px bg-[var(--color-text-muted)]/15" />

        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-2 text-[11px] text-[var(--color-text-muted)]">
          <p>&copy; 2026 OHMT. All rights reserved.</p>
          <Link href="#" className="hover:text-[var(--color-text)] transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};
