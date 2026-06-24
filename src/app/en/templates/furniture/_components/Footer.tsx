"use client";
import React from "react";
import { Truck, ShieldCheck, Undo2, Globe, Share2 } from "lucide-react";
import Link from "next/link";

export const Features = () => {
  const items = [
    { icon: <Truck size={24} />, title: "Free Delivery", desc: "Above $2,000" },
    { icon: <ShieldCheck size={24} />, title: "Secure Payment", desc: "Encrypted" },
    { icon: <Undo2 size={24} />, title: "45-Day Returns", desc: "Hassle-free" },
  ];

  return (
    <section className="bg-white py-8 md:py-16 border-t border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-6 group">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-light-bg)] flex items-center justify-center text-[var(--color-text)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-500">
               {item.icon}
            </div>
            <div>
               <h4 className="text-sm font-bold text-[var(--color-text)] mb-0.5">{item.title}</h4>
               <p className="text-[13px] font-medium text-[var(--color-secondary)]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-white text-[var(--color-primary)] py-12 md:py-20 border-t border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-medium md:font-black lowercase mb-1">Oh My Template</h2>
          <p className="text-[13px] text-[var(--color-secondary)] font-medium uppercase">Essential Interior Archive</p>
        </div>

        <div className="flex items-center gap-8 text-[13px] font-medium text-[var(--color-secondary)] uppercase">
          <Link href="/en/templates/OHMT004-furniture-EN" className="hover:text-black transition-colors">Shop</Link>
          <Link href="/en/templates/OHMT004-furniture-EN/category/living" className="hover:text-black transition-colors">Archive</Link>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 text-[13px] font-medium uppercase text-black/30">
          <div className="flex gap-4 mb-1">
             <Link href="#" className="hover:text-black transition-colors"><Globe size={16} strokeWidth={1.5} /></Link>
             <Link href="#" className="hover:text-black transition-colors"><Share2 size={16} strokeWidth={1.5} /></Link>
          </div>
          <span>&copy; 2026 Archive / Tokyo & Seoul</span>
        </div>
      </div>
    </footer>
  );
};
