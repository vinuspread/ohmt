// src/app/templates/ir/-components/layout/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white py-12 md:py-24 border-t border-[var(--color-border)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <Link href="/en/templates/OHMT011-ir-EN" className="flex flex-col gap-0.5 mb-6">
              <span className="text-base font-semibold md:font-bold text-[var(--color-dark-bg)] tracking-tight leading-none">VINUSPREAD</span>
              <span className="text-[0.58rem] font-medium uppercase tracking-[0.2em] text-[#6B6B6B] leading-none">Global Holdings</span>
            </Link>
            <p className="text-[0.85rem] text-[#6B6B6B] leading-[1.4] max-w-[280px]">
              Committed to providing transparent, accurate, and timely information to our investor community worldwide.
            </p>
          </div>
          
          <div>
            <h5 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--color-dark-bg)] mb-6">Investor Info</h5>
            <nav className="flex flex-col gap-4">
              {["Stock Information", "Financial Results", "SEC Filings", "Shareholder Services"].map(item => (
                <Link key={item} href="#" className="text-[0.8rem] text-[#6B6B6B] hover:text-[var(--color-dark-bg)] transition-colors">{item}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h5 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--color-dark-bg)] mb-6">Governance</h5>
            <nav className="flex flex-col gap-4">
              {["Board of Directors", "Committees", "Governance Documents", "Ethics & Integrity"].map(item => (
                <Link key={item} href="#" className="text-[0.8rem] text-[#6B6B6B] hover:text-[var(--color-dark-bg)] transition-colors">{item}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h5 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--color-dark-bg)] mb-6">Resources</h5>
            <nav className="flex flex-col gap-4">
              {["Investment Calculator", "Analyst Coverage", "Email Alerts", "IR Contacts"].map(item => (
                <Link key={item} href="#" className="text-[0.8rem] text-[#6B6B6B] hover:text-[var(--color-dark-bg)] transition-colors">{item}</Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-[var(--color-border)] gap-6">
          <span className="text-[0.7rem] text-[#6B6B6B] uppercase tracking-widest font-medium">
            © 2026 Vinuspread Global Holdings. All rights reserved.
          </span>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Use", "Stock Disclaimer"].map(item => (
              <Link key={item} href="#" className="text-[0.7rem] text-[#6B6B6B] hover:text-[var(--color-dark-bg)] uppercase tracking-widest transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
