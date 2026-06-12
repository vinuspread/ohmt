// src/app/ko/templates/cosmetic/page.tsx
"use client";

import { Suspense } from "react";
import React from "react";
import { Header } from "./_components/layout/Header";
import { Footer } from "./_components/layout/Footer";
import { Hero } from "./_components/sections/Hero";
import { ProductGrid } from "./_components/sections/ProductGrid";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";

function CosmeticTemplateContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-black selection:bg-black selection:text-white">
        <Header />
        
        <Hero />
        
        <ProductGrid />
        
        <section className="py-16 md:py-32 bg-white border-t border-black/10 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-28 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="/templates/cosmetic/cosmetic-face-mask.png" 
                  className="w-full h-[380px] object-cover" 
                  alt="Brand story" 
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-[1.6rem] md:text-[2.8rem] font-normal leading-[1.5] mb-8">
                  현대적이고 의식 있는 뷰티의 기준.
                </h2>
                <p className="text-[0.95rem] text-[#666] leading-[1.9] mb-12 max-w-[480px]">
                  우리는 심플한 질문에서 시작했습니다. 왜 효능과 순수함 중 하나를 포기해야 할까요? 피부 본연의 힘을 깨우는 고기능성 포뮬러와 지구를 배려한 순수한 원료를 연구하기 위해 지난 5년의 시간을 바쳤습니다.
                </p>
                <button className="px-10 py-4 bg-black text-white text-[0.85rem] font-bold uppercase tracking-wider hover:opacity-80 transition-opacity">
                  브랜드 스토리
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function CosmeticTemplate(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CosmeticTemplateContent {...props} />
    </React.Suspense>
  );
}
