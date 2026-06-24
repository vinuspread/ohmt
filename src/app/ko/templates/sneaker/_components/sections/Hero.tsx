// src/app/ko/templates/OHMT005-sneaker-KO/-components/sections/Hero.tsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-0 min-h-[560px] items-center">
          <div className="py-16 md:py-24 order-2 md:order-1">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-black/40 mb-6 block">
              뉴 컬렉션 - 2026
            </span>
            <h1 className="text-[clamp(2.4rem,5vw,4.5rem)] font-black tracking-[-0.03em] leading-[1.2] text-black mb-6 uppercase">
              거리를 지배하는<br />날 선 감각.
            </h1>
            <p className="text-[0.95rem] text-black/60 leading-relaxed max-w-[380px] mb-10">
              한정된 기회, 한계를 깨는 움직임. 우리는 거리의 룰을 새로 씁니다.
            </p>
            <div className="flex items-center gap-4">
              <Link href={`/ko/templates/OHMT005-sneaker-KO/shop-all`}
                className="inline-flex items-center gap-3 bg-black text-white text-[0.82rem] font-bold uppercase tracking-[0.08em] px-8 py-4 hover:bg-black/80 transition-colors">
                드로우 신청하기 <ArrowRight size={16} />
              </Link>
              <Link href={`/ko/templates/OHMT005-sneaker-KO/shop-all`}
                className="text-[0.82rem] font-bold uppercase tracking-[0.08em] text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity">
                전체 보기
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 relative h-[400px] md:h-full min-h-[480px] bg-[var(--color-bg-secondary)] overflow-hidden">
            <img
              src="/templates/OHMT005-sneaker/hero-main.jpg"
              alt="Premium Sneaker"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-6 left-6 bg-white px-4 py-3">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-black/40">주목할 모델</p>
              <p className="text-[0.95rem] font-black text-black">Air Max Pro</p>
              <p className="text-[0.85rem] font-bold text-black">$240 USD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
