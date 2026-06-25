// src/app/templates/car/src/components/layout/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black py-12 md:py-20 border-t border-[var(--theme-border)]">
      <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-16">
          <div className="col-span-3 md:col-span-1 mb-2 md:mb-0">
            <span className="text-[0.95rem] md:text-[1.2rem] font-medium md:font-bold tracking-[0.25em] uppercase text-white mb-3 block">
              VINUSPREAD<span className="text-[var(--theme-accent)]">.</span>
            </span>
            <p className="hidden md:block text-[0.85rem] text-[var(--theme-text-muted)] leading-[1.4] max-w-[280px]">
              Engineering excellence for those who demand more from every journey.
            </p>
          </div>
          
          <div>
            <h5 className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-white mb-4">Models</h5>
            <nav className="flex flex-col gap-3">
              {["EV9", "GT7", "X5", "S3", "All Models"].map(item => (
                <Link key={item} href="#" className="text-[0.75rem] text-[var(--theme-text-muted)] hover:text-white transition-colors">{item}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h5 className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-white mb-4">Experience</h5>
            <nav className="flex flex-col gap-3">
              {["Configurator", "Test Drive", "Find a Dealer", "Financing"].map(item => (
                <Link key={item} href="#" className="text-[0.75rem] text-[var(--theme-text-muted)] hover:text-white transition-colors">{item}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h5 className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-white mb-4">Company</h5>
            <nav className="flex flex-col gap-3">
              {["About VINUSPREAD", "Sustainability", "Press", "Careers"].map(item => (
                <Link key={item} href="#" className="text-[0.75rem] text-[var(--theme-text-muted)] hover:text-white transition-colors">{item}</Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-[var(--theme-border)] gap-6">
          <span className="text-[0.7rem] text-[var(--theme-text-muted)] uppercase tracking-widest">
            © 2026 VINUSPREAD Motors. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-4 md:gap-8">
            {["Privacy", "Terms", "Cookies"].map(item => (
              <Link key={item} href="#" className="text-[0.7rem] text-[var(--theme-text-muted)] hover:text-white uppercase tracking-widest transition-colors whitespace-nowrap">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
