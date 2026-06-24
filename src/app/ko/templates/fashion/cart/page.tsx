"use client";

import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { ShoppingBag, ArrowRight, Trash2 } from "lucide-react";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { Button } from "../_components/ui/Button";

function FashionCartPageContent() {
    const items = [
        { id: "1", name: "스컬프처럴 블레이저 V.01", price: "$890", size: "M", img: "/templates/fashion/product-blazer.jpg" }
    ];

    return (

      <TemplateWrapper theme={theme}>

        <main className="antialiased bg-white min-h-screen selection:bg-black selection:text-white">
            <Navbar />
            <div className="pt-12 md:pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-32 px-6 max-w-[1440px] mx-auto uppercase">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    <div className="flex-1 space-y-16">
                        <div className="border-b border-black pb-8 flex justify-between items-end">
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">쇼핑백</h1>
                            <span className="text-[13px] font-bold tracking-widest text-black/30">1개</span>
                        </div>

                        {items.map(item => (
                            <div key={item.id} className="flex flex-col md:flex-row gap-8 md:gap-12 border-b border-black/5 pb-16">
                                <div className="w-full md:w-48 aspect-square bg-[var(--color-bg-secondary)] overflow-hidden">
                                    <img loading="lazy" src={item.img} className="w-full h-full object-cover" alt={item.name} />
                                </div>
                                <div className="flex-1 flex flex-col justify-between py-2">
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-start">
                                            <h2 className="text-2xl font-bold tracking-tighter max-w-xs">{item.name}</h2>
                                            <span className="text-lg font-bold">{item.price}</span>
                                        </div>
                                        <div className="flex gap-10 text-[13px] font-bold tracking-[0.2em] text-black/40">
                                            <span>사이즈: {item.size}</span>
                                            <span>색상: 카본</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center text-[13px] font-bold tracking-[0.2em]">
                                        <div className="flex gap-8">
                                            <button className="border-b border-black pb-1 hover:text-black/40 hover:border-black/40 transition-colors">삭제</button>
                                            <button className="border-b border-transparent pb-1 hover:border-black transition-colors">보관함으로 이동</button>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <span className="opacity-30">수량</span>
                                            <span className="text-sm">01</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full lg:w-[400px] space-y-12 h-fit lg:sticky lg:top-48">
                        <div className="space-y-8">
                             <h3 className="text-xl font-bold tracking-tighter border-b border-black pb-6">주문 요약</h3>
                             <div className="space-y-4 text-[13px] font-bold tracking-widest">
                                  <div className="flex justify-between opacity-40">
                                      <span>소계</span>
                                      <span>$890.00</span>
                                  </div>
                                  <div className="flex justify-between opacity-40">
                                      <span>배송비</span>
                                      <span>다음 단계에서 계산</span>
                                  </div>
                                  <div className="flex justify-between border-t border-black/5 pt-6 text-sm tracking-tight opacity-100">
                                      <span>예상 합계</span>
                                      <span>$890.00</span>
                                  </div>
                             </div>
                        </div>
                        <Button variant="primary" className="w-full py-8 text-[13px] font-bold tracking-[0.4em] flex items-center justify-center gap-4">
                            결제 진행하기 <ArrowRight size={14} />
                        </Button>
                        <p className="text-[12px] text-center text-black/30 font-bold tracking-tight">
                            모든 회원 무료 표준 배송.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>

      </TemplateWrapper>
);
}


export default function FashionCartPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <FashionCartPageContent {...props} />
    </React.Suspense>
  );
}
