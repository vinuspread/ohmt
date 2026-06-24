"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ArrowLeft } from "lucide-react";
import { products } from "../data/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { Button } from "../_components/ui/Button";

function CartPageContent() {
  const router = useRouter();
  // Mock cart state (simulating 2 items)
  const [cartItems, setCartItems] = useState([
    { ...products[0], quantity: 1 },
    { ...products[2], quantity: 1 },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, ""));
    return acc + price * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <TemplateWrapper theme={theme}>
        <main className="antialiased bg-white min-h-screen pt-40 pb-20">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="text-center">
          <ShoppingBag size={48} className="mx-auto mb-8 opacity-10 text-black" />
          <h1 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--color-text)] uppercase mb-6">장바구니가 비어 있습니다.</h1>
          <p className="text-[var(--color-secondary)] mb-12">컬렉션을 둘러보고 마음에 드는 작품을 찾아보세요.</p>
          <Link href="/ko/templates/OHMT004-furniture-KO">
            <Button variant="primary" className="px-12 py-6 rounded-full font-bold uppercase">
              계속 둘러보기
            </Button>
          </Link>
          </div>
        </div>
        <Footer />
      </main>
      </TemplateWrapper>
);
  }

  return (
    <main className="antialiased bg-white min-h-screen pt-40 pb-20 selection:bg-black selection:text-white">
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-16">
          <h1 className="text-[clamp(1.75rem,4vw,3.5rem)] font-bold text-[var(--color-text)] uppercase leading-none">
            쇼핑백.
          </h1>
          <span className="text-[12px] font-bold text-[var(--color-secondary)] uppercase">
            {cartItems.length}개 상품
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-20 items-start">
          {/* Left: Cart Items List */}
          <div className="lg:col-span-2 space-y-12">
            <AnimatePresence mode="popLayout">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row gap-10 items-center md:items-start group border-b border-black/5 pb-12"
                >
                  <div className="w-48 h-48 bg-white flex items-center justify-center p-4">
                    <img loading="lazy" src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  
                  <div className="flex-1 flex flex-col pt-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-[14px] font-bold text-[var(--color-text)] uppercase mb-1">{item.name}</h3>
                        <p className="text-[12px] font-medium text-[var(--color-secondary)] uppercase">{item.category}</p>
                      </div>
                      <span className="text-[16px] font-bold text-[var(--color-text)]">{item.price}</span>
                    </div>
                    
                    <p className="text-[13px] text-[var(--color-secondary)] mb-8 max-w-sm">{item.desc}</p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-6 border border-black/10 rounded-full px-4 py-2">
                        <button onClick={() => updateQuantity(item.id, -1)} className="hover:opacity-50 transition-opacity">
                          <Minus size={14} />
                        </button>
                        <span className="text-[13px] font-bold w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="hover:opacity-50 transition-opacity">
                          <Plus size={14} />
                        </button>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-[13px] font-bold uppercase text-red-500 hover:text-red-700 transition-colors flex items-center gap-2">
                        <Trash2 size={14} /> 삭제
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right: Summary Box */}
          <div className="bg-zinc-50 p-10 lg:sticky lg:top-40">
            <h2 className="text-[13px] font-bold uppercase mb-10 text-black/40">장바구니 요약</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex justify-between text-[13px] font-medium text-[var(--color-secondary)]">
                <span>멤버 배송비</span>
                <span>무료</span>
              </div>
              <div className="flex justify-between text-[13px] font-medium text-[var(--color-secondary)]">
                <span>예상 세금</span>
                <span>₩0</span>
              </div>
              <div className="h-[1px] w-full bg-black/5" />
              <div className="flex justify-between text-[16px] font-bold text-[var(--color-text)] uppercase">
                <span>합계</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
            </div>

            <Button variant="primary" className="w-full py-6 rounded-full font-bold text-[13px] uppercase active:scale-95 flex items-center justify-center gap-3">
              결제하기 <ArrowRight size={16} />
            </Button>
            
            <div className="mt-10 flex flex-col gap-4">
              <p className="text-[13px] text-center text-[var(--color-secondary)] font-medium">Stripe 기반 안전 결제. 전 세계 배송 가능.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}


export default function CartPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CartPageContent {...props} />
    </React.Suspense>
  );
}
