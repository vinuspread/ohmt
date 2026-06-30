"use client";
import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-white border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/en/templates/OHMT018-burger" className="text-xl font-bold tracking-tight text-white">
              OHMT
            </Link>
            <p className="text-sm text-white/50 mt-4 leading-relaxed max-w-[220px]">
              Premium burgers. Fresh ingredients. No shortcuts.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">Menu</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/en/templates/OHMT018-burger/menu" className="text-sm text-white/60 hover:text-white transition-colors">Burgers</Link>
              <Link href="/en/templates/OHMT018-burger/menu" className="text-sm text-white/60 hover:text-white transition-colors">Chicken</Link>
              <Link href="/en/templates/OHMT018-burger/menu" className="text-sm text-white/60 hover:text-white transition-colors">Sides</Link>
              <Link href="/en/templates/OHMT018-burger/menu" className="text-sm text-white/60 hover:text-white transition-colors">Shakes</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">Company</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/en/templates/OHMT018-burger/about" className="text-sm text-white/60 hover:text-white transition-colors">About Us</Link>
              <Link href="/en/templates/OHMT018-burger/locations" className="text-sm text-white/60 hover:text-white transition-colors">Locations</Link>
              <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">Careers</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">Follow Us</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">Instagram</Link>
              <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">Twitter</Link>
              <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">TikTok</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; 2026 OHMT. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
