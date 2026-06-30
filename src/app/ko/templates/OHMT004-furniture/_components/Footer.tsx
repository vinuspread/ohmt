"use client";
import React from "react";
import { Truck, ShieldCheck, Undo2, Globe, Share2 } from "lucide-react";
import Link from "next/link";

export const Features = () => {
  const items = [
    { icon: <Truck size={24} />, title: "무료 배송", desc: "20만원 이상" },
    { icon: <ShieldCheck size={24} />, title: "안전 결제", desc: "암호화 처리" },
    { icon: <Undo2 size={24} />, title: "45일 반품", desc: "간편 반품" },
  ];

  return (
    <section className="bg-white py-8 md:py-16 border-t border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-6 group">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-light-bg)] flex items-center justify-center text-[var(--color-text)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-500">
               {item.icon}
            </div>
            <div>
               <h4 className="text-sm font-bold text-[var(--color-text)] mb-0.5">{item.title}</h4>
               <p className="text-[15px] font-medium text-[var(--color-secondary)]">{item.desc}</p>
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
          <h2 className="text-xl md:text-2xl font-medium md:font-black lowercase mb-1">OHMT</h2>
          <p className="text-[13px] text-[var(--color-secondary)] font-medium uppercase">에센셜 인테리어 아카이브</p>
        </div>

        <div className="flex items-center gap-8 text-[13px] font-medium text-[var(--color-secondary)] uppercase">
          <Link href="/ko/templates/OHMT004-furniture" className="hover:text-black transition-colors">쇼핑</Link>
          <Link href="/ko/templates/OHMT004-furniture/category/living" className="hover:text-black transition-colors">아카이브</Link>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 text-[13px] font-medium uppercase text-black/30">
          <div className="flex gap-4 mb-1">
             <Link href="#" className="hover:text-black transition-colors"><Globe size={16} strokeWidth={1.5} /></Link>
             <Link href="#" className="hover:text-black transition-colors"><Share2 size={16} strokeWidth={1.5} /></Link>
          </div>
          <span>&copy; 2026 아카이브 / 도쿄 &amp; 서울</span>
        </div>
      </div>
    </footer>
  );
};
