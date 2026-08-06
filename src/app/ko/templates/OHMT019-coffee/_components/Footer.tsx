"use client";
import React from "react";
import Link from "next/link";
import { InstagramLogo, FacebookLogo, TwitterLogo } from "@phosphor-icons/react";

const navLinks = [
  { label: "소개", href: "/ko/templates/OHMT019-coffee/about" },
  { label: "메뉴", href: "/ko/templates/OHMT019-coffee/menu" },
  { label: "매장", href: "/ko/templates/OHMT019-coffee/locations" },
  { label: "문의", href: "#" },
];

const social = [
  { label: "인스타그램", Icon: InstagramLogo },
  { label: "페이스북", Icon: FacebookLogo },
  { label: "트위터", Icon: TwitterLogo },
];

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-secondary)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-14 md:py-16 flex flex-col items-center gap-8 text-center">
        <Link
          href="/ko/templates/OHMT019-coffee"
          className="font-heading text-2xl font-bold text-[var(--color-text)] tracking-tight"
        >
          OHMT
        </Link>

        <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-5">
          {social.map((s) => (
            <Link
              key={s.label}
              href="#"
              className="w-8 h-8 rounded-full border border-[var(--color-text-muted)]/30 flex items-center justify-center text-[var(--color-text-muted)] hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-colors duration-200"
              aria-label={s.label}
            >
              <s.Icon size={16} weight="fill" />
            </Link>
          ))}
        </div>

        <div className="w-full h-px bg-[var(--color-text-muted)]/15" />

        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-2 text-xs text-[var(--color-text-muted)]">
          <p>&copy; 2026 OHMT. All rights reserved.</p>
          <Link href="#" className="hover:text-[var(--color-text)] transition-colors">개인정보 처리방침</Link>
        </div>
      </div>
    </footer>
  );
};
