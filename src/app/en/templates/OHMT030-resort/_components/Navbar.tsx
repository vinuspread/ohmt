"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";

const base = "/en/templates/OHMT030-resort";
const navLinks = [
  { label: "Villas", href: `${base}/stay` },
  { label: "Dining", href: `${base}/dine` },
  { label: "About", href: `${base}/about` },
];


export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-[70px] px-8 md:px-12 transition-colors duration-300 ${
        scrolled ? "bg-[var(--bg-dark)]/95 backdrop-blur-sm" : "bg-transparent"
      }`}>
        <div className="w-full h-full flex items-center justify-between">


          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href}
                className="text-white/80 hover:text-white text-[15px] font-medium transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center md:absolute md:left-1/2 md:-translate-x-1/2">
            <Link href={base} className="text-[20px] font-semibold text-white tracking-tight leading-none">OHMT</Link>
            <span className="text-[11px] font-normal text-white/60">coastal resort</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href={`${base}/#contact`}
              className="text-white/80 hover:text-white text-[15px] font-medium transition-colors">
              Contact Us
            </Link>
            <Link href={`${base}/#book`}
              className="text-[var(--accent)] hover:text-[#ffb37a] text-[15px] font-medium transition-colors">
              Book Now &rarr;
            </Link>
          </div>

          <button onClick={() => setOpen(!open)}
            className="md:hidden text-white"
            aria-label="Toggle menu">
            {open ? <X size={24} /> : <List size={24} />}
          </button>

        </div>
      </nav>

      <div className={`fixed inset-x-0 top-[70px] z-40 bg-[var(--bg-dark)] md:hidden transition-all duration-300 overflow-hidden ${
        open ? "max-h-80 py-6" : "max-h-0 py-0"
      }`}>
        <div className="flex flex-col gap-2 px-8">
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="py-3 text-[15px] text-white/80 hover:text-white font-medium border-b border-white/10">
              {l.label}
            </Link>
          ))}
          <Link href={`${base}/#contact`} onClick={() => setOpen(false)}
            className="py-3 text-[15px] text-white/80 hover:text-white font-medium border-b border-white/10">
            Contact Us
          </Link>
          <Link href={`${base}/#book`} onClick={() => setOpen(false)}
            className="mt-4 text-center rounded-full bg-[var(--accent)] px-5 py-3 text-[var(--text-dark)] text-[15px] font-medium">
            Book Now &rarr;
          </Link>
        </div>
      </div>
    </>
  );
}
