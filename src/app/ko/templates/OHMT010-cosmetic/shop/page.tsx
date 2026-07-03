"use client";

import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const products = [
  { name: "데일리 래디언스 세럼", price: "₩78,000", tag: "베스트셀러", image: "/templates/OHMT010-cosmetic/serum-product.png" },
  { name: "비타민 C 브라이트닝 크림", price: "₩64,000", tag: "신제품", image: "/templates/OHMT010-cosmetic/cream-product.png" },
  { name: "하이드라 글로우 모이스처라이저", price: "₩52,000", tag: "", image: "/templates/OHMT010-cosmetic/cosmetic-3.jpg" },
  { name: "레티놀 리뉴얼 오일", price: "₩89,000", tag: "프리미엄", image: "/templates/OHMT010-cosmetic/cosmetic-4.jpg" },
  { name: "젠틀 클렌징 밤", price: "₩38,000", tag: "", image: "/templates/OHMT010-cosmetic/balm-product.png" },
  { name: "오버나이트 리커버리 마스크", price: "₩72,000", tag: "추천", image: "/templates/OHMT010-cosmetic/mask-product.png" }
];

function CosmeticShopPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-black selection:bg-black selection:text-white">
        <Header />
        
        <section className="pt-48 pb-16 md:pb-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="mb-16">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40 mb-4 block">쇼핑하기</span>
              <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-tight leading-[1.1]">
                순수한 성분 처방.<br />피부로 입증하는 변화.
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.name} className="group">
                  <div className="aspect-[3/4] bg-[var(--color-bg-secondary)] mb-6 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-[1.1rem] font-medium tracking-tight mb-1">{product.name}</h3>
                      <span className="text-[0.9rem] text-black/40 font-medium">{product.price}</span>
                    </div>
                    {product.tag && (
                      <span className="text-[0.6rem] font-bold uppercase tracking-[0.15em] bg-black text-white px-3 py-1">{product.tag}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function CosmeticShopPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CosmeticShopPageContent {...props} />
    </React.Suspense>
  );
}
