"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight, ArrowLeft } from "lucide-react";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";

const initItems = [
  { id: "sn-001", name: "Air Stride Pro", size: "US 10", color: "White", price: 240, qty: 1, img: "/templates/OHMT005-sneaker/product-1.jpg" },
  { id: "sn-003", name: "Shadow Runner", size: "US 9", color: "Black", price: 320, qty: 1, img: "/templates/OHMT005-sneaker/product-3.jpg" },
];

function CartPageContent() {
  const [items, setItems] = useState(initItems);

  const update = (id: string, delta: number) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
  };
  const remove = (id: string) => setItems(prev => prev.filter(i => i.id !== id));

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <TemplateWrapper theme={theme}>
      <div className="bg-white text-black selection:bg-black selection:text-white font-sans">
        <Header />
        <main className="antialiased pt-20 min-h-screen">
          <div className="max-w-[1440px] mx-auto px-6 py-10">
            <div className="flex items-center gap-4 mb-10">
              <Link href="/ko/templates/OHMT010-sneaker-kr/shop-all" className="inline-flex items-center gap-2 text-[0.78rem] text-black/50 hover:text-black transition-colors">
                <ArrowLeft size={14} /> 쇼핑 계속하기
              </Link>
            </div>
            <h1 className="text-[2rem] font-black uppercase tracking-[-0.03em] mb-10">장바구니 ({items.length})</h1>

            {items.length === 0 ? (
              <div className="text-center py-12 md:py-24">
                <p className="text-[1.1rem] text-black/40 mb-6">장바구니가 비어 있습니다</p>
                <Link href="/ko/templates/OHMT010-sneaker-kr/shop-all" className="inline-flex items-center gap-2 bg-black text-white text-[0.82rem] font-bold uppercase tracking-[0.08em] px-8 py-4">
                  쇼핑하기 <ArrowRight size={16} />
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-[1fr_360px] gap-12 items-start">
                {/* Items */}
                <div className="divide-y divide-black/10">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-6 py-6">
                      <div className="w-24 h-24 bg-[var(--color-bg-secondary)] overflow-hidden shrink-0">
                        <img loading="lazy" src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="text-[0.9rem] font-bold tracking-[-0.03em]">{item.name}</h3>
                          <button onClick={() => remove(item.id)} className="text-black/30 hover:text-black transition-colors shrink-0">
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-[0.78rem] text-black/40 mb-4">{item.color} · {item.size}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-black/20">
                            <button onClick={() => update(item.id, -1)} className="w-8 h-8 flex items-center justify-center hover:bg-black/5 transition-colors">
                              <Minus size={14} />
                            </button>
                            <span className="w-10 text-center text-[0.85rem] font-bold">{item.qty}</span>
                            <button onClick={() => update(item.id, 1)} className="w-8 h-8 flex items-center justify-center hover:bg-black/5 transition-colors">
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className="text-[0.95rem] font-black">${item.price * item.qty}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="bg-[var(--color-bg-secondary)] p-8 sticky top-24">
                  <h2 className="text-[1rem] font-black uppercase tracking-[-0.03em] mb-6">주문 요약</h2>
                  <div className="space-y-3 mb-6 pb-6 border-b border-black/10">
                    <div className="flex justify-between text-[0.85rem]">
                      <span className="text-black/60">소계</span>
                      <span className="font-bold">${subtotal}</span>
                    </div>
                    <div className="flex justify-between text-[0.85rem]">
                      <span className="text-black/60">배송비</span>
                      <span className="font-bold">{subtotal >= 200 ? "무료" : "$12"}</span>
                    </div>
                  </div>
                  <div className="flex justify-between mb-8">
                    <span className="font-black uppercase text-[0.9rem]">합계</span>
                    <span className="font-black text-[1.1rem]">${subtotal >= 200 ? subtotal : subtotal + 12} USD</span>
                  </div>

                  <div className="mb-4">
                    <input type="text" placeholder="프로모션 코드" className="w-full border border-black/20 px-4 py-3 text-[0.82rem] focus:outline-none focus:border-black mb-2 bg-white" />
                    <button className="w-full border border-black text-[0.78rem] font-bold uppercase tracking-[0.08em] py-3 hover:bg-black hover:text-white transition-colors">
                      코드 적용
                    </button>
                  </div>

                  <button className="w-full bg-black text-white text-[0.85rem] font-bold uppercase tracking-[0.08em] py-4 flex items-center justify-center gap-2 hover:bg-black/80 transition-colors">
                    결제하기 <ArrowRight size={16} />
                  </button>

                  {subtotal < 200 && (
                    <p className="text-[0.72rem] text-black/40 text-center mt-4">
                      무료 배송까지 ${200 - subtotal} 더 추가
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </TemplateWrapper>
  );
}


export default function CartPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CartPageContent {...props} />
    </React.Suspense>
  );
}
