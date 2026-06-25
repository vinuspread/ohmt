"use client";
import React from "react";
import Link from "next/link";
import { Mail, ArrowRight, Globe, Link as LinkIcon, ExternalLink } from "lucide-react";
export const Newsletter = () => {
    return (
        <section className="py-12 md:py-24 lg:py-32 bg-[var(--color-bg-secondary)] text-black">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
                <span className="text-[13px] uppercase tracking-[0.4em] sm:tracking-[0.6em] font-bold opacity-40 mb-6 md:mb-10 block">Stay Connected</span>
                <h2 className="text-[28px] sm:text-[4vw] font-bold tracking-tighter uppercase mb-10 md:mb-16 leading-none">
                    JOIN THE LABORATORY SERIES
                </h2>
                <div className="max-w-2xl mx-auto relative group">
                    <input 
                        type="email" 
                        placeholder="EMAIL ADDRESS" 
                        className="w-full bg-white border-0 py-4 sm:py-6 px-6 sm:px-10 text-[13px] font-bold tracking-[0.2em] sm:tracking-[0.3em] outline-none placeholder:text-black/20 focus:ring-1 focus:ring-black transition-all"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[13px] sm:text-[13px] font-bold tracking-[0.15em] sm:tracking-[0.2em] bg-black text-white px-6 py-2.5 sm:px-8 sm:py-4 hover:bg-black/80 transition-all">
                        SUBSCRIBE <ArrowRight size={12} className="sm:w-3.5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
return (
    <footer className="bg-white pt-12 md:pt-24 pb-12 border-t border-black/5 selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 mb-12 md:mb-24">
        <div className="col-span-2 lg:col-span-1">
          <Link href="/en/templates/fashion" className="text-xl md:text-2xl font-black tracking-tighter uppercase block">
            Oh My Template
          </Link>
          <p className="text-[14px] text-black/60 font-medium leading-[1.4] max-w-xs mt-4 md:mt-6">
            Crafting silhouettes that speak volumes through silence. Redefining digital luxury for the next generation.
          </p>
          <div className="flex gap-6 mt-8 md:mt-12">
            <Link href="#" className="hover:opacity-50 transition-all"><Globe size={18} /></Link>
            <Link href="#" className="hover:opacity-50 transition-all"><LinkIcon size={18} /></Link>
            <Link href="#" className="hover:opacity-50 transition-all"><ExternalLink size={18} /></Link>
          </div>
        </div>

        <div className="space-y-4 md:space-y-8">
            <h5 className="text-[13px] font-medium uppercase tracking-[0.4em] text-black/30">Catalogs</h5>
            <ul className="space-y-3 md:space-y-4 text-[12px] font-medium uppercase tracking-widest">
                <li><Link href="/en/templates/fashion/category/ss26" className="hover:text-black/40 transition-colors">Spring/Summer 26</Link></li>
                <li><Link href="/en/templates/fashion/category/aw25" className="hover:text-black/40 transition-colors">Autumn/Winter 25</Link></li>
                <li><Link href="/en/templates/fashion/category/core" className="hover:text-black/40 transition-colors">Core Series</Link></li>
                <li><Link href="/en/templates/fashion/category/limited" className="hover:text-black/40 transition-colors">Limited Drop</Link></li>
            </ul>
        </div>

        <div className="space-y-4 md:space-y-8">
            <h5 className="text-[13px] font-medium uppercase tracking-[0.4em] text-black/30">Assistance</h5>
            <ul className="space-y-3 md:space-y-4 text-[12px] font-medium uppercase tracking-widest">
                <li><Link href="/en/templates/fashion/category/ss26" className="hover:text-black/40 transition-colors">Customer Care</Link></li>
            </ul>
        </div>

        <div className="space-y-4 md:space-y-8">
            <h5 className="text-[13px] font-medium uppercase tracking-[0.4em] text-black/30">Legal</h5>
            <ul className="space-y-3 md:space-y-4 text-[12px] font-medium uppercase tracking-widest">
                <li><Link href="#" className="hover:text-black/40 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-black/40 transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-black/40 transition-colors">Cookie Settings</Link></li>
            </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-8 md:pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] font-medium tracking-[0.4em] text-black/20 uppercase">
            © 2026 Oh My Template Laboratory. All rights reserved.
          </p>
          <div className="flex gap-10 text-[12px] font-medium tracking-[0.2em] text-black/40 uppercase">
              <Link href="#" className="hover:text-black transition-colors">Seoul</Link>
              <Link href="#" className="hover:text-black transition-colors">Paris</Link>
              <Link href="#" className="hover:text-black transition-colors">Tokyo</Link>
          </div>
      </div>
    </footer>
  );
};
