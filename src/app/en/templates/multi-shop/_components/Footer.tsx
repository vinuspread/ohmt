"use client";
import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-white border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-2">
            <Link href="/en/templates/OHMT017-multi-shop" className="text-2xl font-bold tracking-tight text-white">
              Oh My Template
            </Link>
            <p className="text-sm text-white/50 mt-4 leading-relaxed max-w-[260px]">
              Curated fashion for the modern minimalist. Thoughtfully designed pieces that transcend seasons.
            </p>
            <div className="flex gap-5 mt-8 text-sm">
              {["IG", "X", "Pinterest", "TikTok"].map((s) => (
                <Link key={s} href="#" className="text-white/30 hover:text-white transition-colors duration-200 text-xs uppercase tracking-[0.1em]">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-5">Shop</h5>
            <ul className="space-y-3 text-sm text-white/60">
              {[
                { label: "New Arrivals", href: "/en/templates/OHMT017-multi-shop/shop" },
                { label: "Best Sellers", href: "/en/templates/OHMT017-multi-shop/shop" },
                { label: "Accessories", href: "/en/templates/OHMT017-multi-shop/shop/accessories" },
                { label: "Footwear", href: "/en/templates/OHMT017-multi-shop/shop/footwear" },
                { label: "Women's", href: "/en/templates/OHMT017-multi-shop/shop/womens" },
                { label: "Men's", href: "/en/templates/OHMT017-multi-shop/shop/mens" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white transition-colors duration-200">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-5">Company</h5>
            <ul className="space-y-3 text-sm text-white/60">
              {[
                { label: "About Us", href: "/en/templates/OHMT017-multi-shop/about" },
                { label: "Blog", href: "/en/templates/OHMT017-multi-shop/blog" },
                { label: "Contact", href: "/en/templates/OHMT017-multi-shop/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white transition-colors duration-200">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-5">Support</h5>
            <ul className="space-y-3 text-sm text-white/60">
              {["FAQ", "Returns", "Shipping", "Size Guide"].map((l) => (
                <li key={l}>
                  <Link href="#" className="hover:text-white transition-colors duration-200">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-white/25">
          <p>&copy; 2026 Oh My Template.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white/50 transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/50 transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
