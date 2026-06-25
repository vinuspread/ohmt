"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

const navLinks = [
  { href: "/ko/templates/OHMT023-game/games", label: "게임" },
  { href: "/ko/templates/OHMT023-game/news", label: "소식" },
  { href: "/ko/templates/OHMT023-game/about", label: "소개" },
  { href: "/ko/templates/OHMT023-game/careers", label: "채용" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur-xl border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/ko/templates/OHMT023-game"
          className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-xl font-bold text-transparent font-[var(--font-heading)]"
        >
          Oh My Template
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/ko/templates/OHMT023-game/careers">
            <Button variant="outline" className="text-xs px-5 py-2">
              채용 중
            </Button>
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 text-[var(--color-text)] md:hidden"
          aria-label="메뉴 토글"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[var(--color-bg)]/95 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-bold text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)]"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/ko/templates/OHMT023-game/careers" onClick={() => setOpen(false)}>
            <Button>채용 중</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
