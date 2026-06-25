// src/app/templates/magazine/-components/layout/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg)] py-12 md:py-20 border-t border-[var(--theme-border)]">
      <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10 md:mb-16">
          <div className="max-w-[320px]">
            <Link 
              href="/en/templates/magazine" 
              className="font-[family-name:var(--theme-font-heading)] text-[1.6rem] tracking-[0.12em] uppercase text-[var(--theme-text)] mb-6 block"
            >
              VINUSPREAD
            </Link>
            <p className="text-[0.85rem] text-[var(--theme-text-muted)] leading-[1.4] font-normal">
              A premium lifestyle editorial exploring the intersections of design, culture, and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h5 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--theme-text)] mb-6">Explore</h5>
              <nav className="flex flex-col gap-3">
                {["Stories", "Archive", "Issues", "Podcasts"].map(item => (
                  <Link key={item} href="#" className="text-[0.8rem] text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] transition-colors">{item}</Link>
                ))}
              </nav>
            </div>
            <div>
              <h5 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--theme-text)] mb-6">Connect</h5>
              <nav className="flex flex-col gap-3">
                {["Instagram", "Twitter", "Newsletter", "Contact"].map(item => (
                  <Link key={item} href="#" className="text-[0.8rem] text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] transition-colors">{item}</Link>
                ))}
              </nav>
            </div>
            <div>
              <h5 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--theme-text)] mb-6">Company</h5>
              <nav className="flex flex-col gap-3">
                {["About", "Press", "Advertising", "Careers"].map(item => (
                  <Link key={item} href="#" className="text-[0.8rem] text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] transition-colors">{item}</Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-[var(--theme-border)] gap-6">
          <span className="text-[0.7rem] text-[var(--theme-text-muted)] uppercase tracking-widest font-medium">
            © 2026 VINUSPREAD Magazine. Built for the modern aesthete.
          </span>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Cookies"].map(item => (
              <Link key={item} href="#" className="text-[0.7rem] text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] uppercase tracking-widest transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
