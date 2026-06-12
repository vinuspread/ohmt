"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const PromoBanner = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white py-12 md:py-24">
      <div className="absolute inset-0 z-0">
        <img 
          src="/templates/sneaker/promo-bg.jpg" 
          alt="Promo Background" 
          className="w-full h-full object-cover opacity-50 brightness-75"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-white/60 block mb-3">한정 기간</span>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black tracking-[-0.03em] uppercase leading-tight mb-6">
            주말 한정 스페셜 오퍼
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-[0.85rem] opacity-75">결제 시 코드를 입력하세요:</span>
              <span className=" text-[0.95rem] font-bold bg-white/10 border border-white/20 px-3 py-1 rounded">WEEKEND20</span>
            </div>
            <div className="w-[1px] h-4 bg-white/20 hidden sm:block" />
            <p className="text-[0.85rem] opacity-75">전 제품 20% 할인 · 일요일 자정까지</p>
          </div>
          <Link href="/ko/templates/sneaker/shop-all"
            className="inline-flex items-center gap-3 bg-white text-black text-[0.82rem] font-bold uppercase tracking-[0.08em] px-8 py-4 hover:bg-white/90 transition-colors">
            할인 쇼핑하기 <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
