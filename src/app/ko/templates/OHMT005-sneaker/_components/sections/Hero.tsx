// src/app/ko/templates/OHMT005-sneaker/-components/sections/Hero.tsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="py-16 md:py-24 order-2 md:order-1">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-black/40 mb-6 block">
              2026 새 컬렉션
            </span>
            <h1 className="text-[length:var(--text-h1)] font-black tracking-[-0.03em] leading-[var(--leading-heading)] text-black mb-6 uppercase break-keep">
              가볍고 편안하게,<br />오래 걸어도 부담없는 스니커즈.
            </h1>
            <p className="text-[0.95rem] text-black/60 leading-relaxed max-w-[380px] mb-10">
              매일 신기 좋은 스니커즈부터 러닝과 아웃도어를 위한 기능성 신발까지 새 컬렉션으로 만나보세요.
            </p>
            <div className="grid grid-cols-2 gap-3 md:flex md:items-center md:gap-4 w-full md:w-auto">
              <Link href={`/ko/templates/OHMT005-sneaker/shop-all`}
                className="group inline-flex items-center justify-center gap-1.5 bg-black text-white text-[0.72rem] font-bold uppercase tracking-[0.08em] py-3.5 px-4 hover:bg-black/80 transition-all duration-300 w-full md:w-auto md:px-7 whitespace-nowrap">
                컬렉션 보기 <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href={`/ko/templates/OHMT005-sneaker/shop-all`}
                className="inline-flex items-center justify-center bg-white text-black border border-black text-[0.72rem] font-bold uppercase tracking-[0.08em] py-3.5 px-4 hover:bg-black hover:text-white transition-all duration-300 w-full md:w-auto md:px-7 whitespace-nowrap">
                전체 보기
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden group">
            <img
              src="/templates/OHMT005-sneaker/hero-main.jpg"
              alt="Premium Sneaker"
              className="w-full h-full object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
            {/* Bottom Right Product Card - Shrink padding & size to emphasize product */}
            <div className="absolute bottom-6 right-6 bg-black/95 backdrop-blur-md border border-white/10 px-4 py-3.5 rounded-none shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:translate-y-[-2px]">
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-1.5 h-1.5 bg-red-500 animate-pulse"></span>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/50">Featured</p>
              </div>
              <p className="text-[1.05rem] font-black text-white tracking-tight uppercase mb-0.5">Air Max Pro</p>
              <p className="text-[0.8rem] font-mono tracking-widest text-white/60">₩240,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
