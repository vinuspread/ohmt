// src/app/templates/airline/-components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const t = {
  "nav": {
    "book": `Book`,
    "experience": `Experience`,
    "destinations": `Destinations`,
    "loyalty": `Loyalty`,
    "login": `Login`,
    "bookTrip": `Book Trip`
  },
  "hero": {
    "badge": `FIRST CLASS EXPERIENCE`,
    "title1": `A Luminous Leap`,
    "title2": `into the Extraordinary.`,
    "desc": `Pure serenity encountered above the clouds. Reclaim the raw joy of flight in your private sanctuary in the sky.`,
    "cta": `Discover Destinations`,
    "cta2": `Virtual Tour`
  }
};
const navItems = [
    { name: t.nav.book, slug: "book" },
    { name: t.nav.experience, slug: "experience" },
    { name: t.nav.destinations, slug: "destinations" },
    { name: t.nav.loyalty, slug: "loyalty" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={clsx(
        "fixed top-0 left-0 right-0 z-[900] h-[72px] flex items-center transition-[background,backdrop-filter] duration-300",
        isScrolled || mobileOpen
          ? "bg-[var(--color-primary)] backdrop-blur-xl"
          : "bg-transparent"
      )}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex items-center justify-between w-full">
            <Link href="/en/templates/airline" className="shrink-0 group">
            <span className="text-[0.78rem] md:text-[0.82rem] font-bold tracking-[0.15em] uppercase text-white leading-none">OHMT</span>
          </Link>

          {/* Desktop GNB */}
          <div className="hidden lg:flex gap-10 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.slug}
                href={`/en/templates/airline/${item.slug}`}
                className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/55 hover:text-white transition-colors duration-300 relative group pb-1"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--color-accent)] transition-[width] duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" href="#" className="hidden lg:block text-[0.7rem] font-medium uppercase tracking-[0.1em] text-white/55 hover:text-white transition-colors">
              {t.nav.login}
            </Button>
            <Button variant="primary" className="hidden lg:block text-[0.75rem] font-bold uppercase tracking-[0.14em] px-6 py-2.5 hover:opacity-85 transition-opacity duration-300">
              {t.nav.bookTrip}
            </Button>

            {/* Mobile hamburger */}
            <Button
              variant="ghost"
              className="lg:hidden flex items-center justify-center w-10 h-10 text-white"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-[72px] z-[840] bg-black/60 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div className={clsx(
        "fixed top-[72px] left-0 right-0 z-[850] bg-[var(--color-primary)] border-t border-white/10 transition-[max-height,opacity] duration-300 lg:hidden overflow-hidden",
        mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="flex flex-col px-6 py-8 gap-1">
          {navItems.map((item) => (
            <Button
              key={item.slug}
              href={`/en/templates/airline/${item.slug}`}
              onClick={() => setMobileOpen(false)}
              className="text-[0.9rem] font-semibold uppercase tracking-[0.14em] text-white/60 hover:text-white py-4 border-b border-white/10 transition-colors"
              asChild
            >
              {item.name}
            </Button>
          ))}
            <Button
              variant="outline"
              href="/en/templates/airline/book"
              onClick={() => setMobileOpen(false)}
              className="text-[0.9rem] font-semibold uppercase tracking-[0.14em] hover:text-[var(--color-accent-light)] py-4 border-b border-white/10 transition-colors"
            >
              {t.nav.bookTrip}
            </Button>
          <Link href="#" onClick={() => setMobileOpen(false)} className="text-[0.85rem] font-medium uppercase tracking-[0.1em] text-white/40 hover:text-white transition-colors py-4">
            {t.nav.login}
          </Link>
        </div>
      </div>
    </>
  );

};
