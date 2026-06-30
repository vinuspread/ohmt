// src/app/templates/OHMT013-newspaper/-components/layout/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10 border-b border-white/10 pb-10">
          <Link href="/ko/templates/OHMT013-newspaper" className="font-[family-name:var(--theme-font-heading)] text-4xl font-black tracking-tighter text-white">
            VINUSPREAD TIMES
          </Link>
          <p className="font-sans text-[0.78rem] opacity-50 mt-2 uppercase tracking-widest">2026년부터 지켜온 정론직필의 가치</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-10">
          {["회사 소개", "문의하기", "인재 채용", "광고 안내", "고객 센터", "개인정보 처리방침", "이용 약관"].map(item => (
            <Link key={item} href="#" className="font-sans text-[0.75rem] font-bold uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity">
              {item}
            </Link>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <div className="font-sans text-[0.72rem] opacity-40">
            © 2026 OHMT.
          </div>
          <div className="flex gap-3 md:gap-6 opacity-60 flex-wrap justify-center md:justify-end">
            {["Twitter", "Facebook", "Instagram", "YouTube"].map(social => (
              <Link key={social} href="#" className="font-sans text-[0.72rem] font-bold uppercase tracking-widest">{social}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
