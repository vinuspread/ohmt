// src/app/templates/newspaper/-components/layout/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-10 border-b border-white/10 pb-10">
          <Link href="/en/templates/newspaper" className="font-[family-name:var(--theme-font-heading)] text-4xl font-black tracking-tighter text-white">
            VINUS TIMES
          </Link>
          <p className="font-sans text-[0.78rem] opacity-50 mt-2 uppercase tracking-widest">Independent Journalism Since 2026</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-10">
          {["About Us", "Contact", "Work with us", "Advertise", "Help", "Privacy Policy", "Terms of Service"].map(item => (
            <Link key={item} href="#" className="font-sans text-[0.75rem] font-bold uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity">
              {item}
            </Link>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <div className="font-sans text-[0.72rem] opacity-40">
            © 2026 Oh My Template.
          </div>
          <div className="flex gap-6 opacity-60">
            {["Twitter", "Facebook", "Instagram", "YouTube"].map(social => (
              <Link key={social} href="#" className="font-sans text-[0.72rem] font-bold uppercase tracking-widest">{social}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
