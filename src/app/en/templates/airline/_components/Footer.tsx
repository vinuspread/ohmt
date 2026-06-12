// src/app/templates/airline/-components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#8D9EAF] py-16 md:py-20 border-t border-[var(--color-accent)]/30">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/en/templates/airline" className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 md:w-[34px] md:h-[34px] bg-[var(--color-accent)] flex items-center justify-center text-[0.72rem] md:text-[0.75rem] font-black text-[var(--color-primary)] tracking-tighter">V</div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[0.78rem] md:text-[0.82rem] font-bold md:font-extrabold tracking-[0.25em] uppercase text-[var(--color-primary)] leading-none">VINUS AIR</span>
              </div>
            </Link>
            <p className="text-[0.85rem] text-[var(--color-primary)]/70 leading-[1.4] max-w-[280px]">
              Setting the global standard for luxury travel. Experience excellence across all continents.
            </p>
          </div>

          <div>
            <h5 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--color-accent)] mb-5">Plan & Book</h5>
            <nav className="flex flex-col gap-3">
              {["Flight Schedule", "Destinations", "Travel Requirements", "Baggage Information"].map(item => (
                <Link key={item} href="/en/templates/airline" className="text-[0.8rem] text-[var(--color-primary)]/70 hover:text-[var(--color-primary)] transition-colors">{item}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h5 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--color-accent)] mb-5">On Board</h5>
            <nav className="flex flex-col gap-3">
              {["First Class", "Business Class", "Dining & Wines", "Entertainment"].map(item => (
                <Link key={item} href="/en/templates/airline/experience" className="text-[0.8rem] text-[var(--color-primary)]/70 hover:text-[var(--color-primary)] transition-colors">{item}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h5 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--color-accent)] mb-5">Loyalty</h5>
            <nav className="flex flex-col gap-3">
              {["Member Benefits", "Earn Miles", "Spend Miles", "Our Partners"].map(item => (
                <Link key={item} href="/en/templates/airline/loyalty" className="text-[0.8rem] text-[var(--color-primary)]/70 hover:text-[var(--color-primary)] transition-colors">{item}</Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[var(--color-primary)]/20 gap-4">
          <span className="text-[0.7rem] text-[var(--color-primary)]/60 uppercase tracking-widest font-medium">
            © 2026 Vinus Air. A Member of Global Skies Alliance.
          </span>
          <div className="flex gap-6 md:gap-8">
            {["Legal Notice", "Privacy Policy", "Cookie Settings"].map(item => (
              <Link key={item} href="/en/templates/airline" className="text-[0.7rem] text-[var(--color-primary)]/60 hover:text-[var(--color-primary)] uppercase tracking-widest transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
