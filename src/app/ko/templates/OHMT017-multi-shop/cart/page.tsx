"use client";
import React from "react";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { useCart } from "@/lib/cart-context";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

export default function CartPage() {
  const { cart, isLoading, updateItem, removeItem } = useCart();

  const items = cart?.items ?? [];
  const total = cart?.total ?? 0;

  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
        <main className="antialiased min-h-screen bg-white text-[var(--color-text)] pt-24 md:pt-28 pb-20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">장바구니</h1>

            {items.length === 0 ? (
              <div className="text-center py-32">
                <p className="text-[var(--color-text-muted)] mb-6">장바구니가 비어있습니다.</p>
                <Link
                  href="/ko/templates/OHMT017-multi-shop/shop"
                  className="inline-block bg-[var(--color-primary)] text-white px-8 py-3 text-xs uppercase tracking-[0.2em]"
                >
                  쇼핑 계속하기
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-12">
                {/* 아이템 목록 */}
                <div className="divide-y divide-[var(--color-border)]">
                  {items.map((item) => (
                    <div key={item.id} className="py-6 flex gap-5">
                      <div className="w-24 h-32 bg-[var(--color-bg-secondary)] flex-shrink-0 overflow-hidden">
                        {item.thumbnail && (
                          <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium leading-snug mb-1">{item.title}</h3>
                        <p className="text-xs text-[var(--color-text-muted)] mb-4">
                          {item.unit_price.toLocaleString("ko-KR")}원
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border border-[var(--color-border)]">
                            <button
                              onClick={() => updateItem(item.id, Math.max(1, item.quantity - 1))}
                              disabled={isLoading}
                              className="px-2.5 py-2 hover:bg-[var(--color-bg-secondary)] transition-colors disabled:opacity-40"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateItem(item.id, item.quantity + 1)}
                              disabled={isLoading}
                              className="px-2.5 py-2 hover:bg-[var(--color-bg-secondary)] transition-colors disabled:opacity-40"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            disabled={isLoading}
                            className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors disabled:opacity-40"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold">
                          {item.total.toLocaleString("ko-KR")}원
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 주문 요약 */}
                <div className="md:sticky md:top-28 h-fit">
                  <div className="border border-[var(--color-border)] p-6 space-y-5">
                    <h2 className="text-base font-bold">주문 요약</h2>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[var(--color-text-muted)]">상품 합계</span>
                        <span>{(cart?.subtotal ?? 0).toLocaleString("ko-KR")}원</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--color-text-muted)]">배송비</span>
                        <span>무료</span>
                      </div>
                      <div className="border-t border-[var(--color-border)] pt-3 flex justify-between font-bold">
                        <span>총 합계</span>
                        <span className="text-[var(--color-primary)] text-base">
                          {total.toLocaleString("ko-KR")}원
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/ko/templates/OHMT017-multi-shop/checkout"
                      className="block w-full bg-[var(--color-primary)] text-white py-3.5 text-center text-xs uppercase tracking-[0.2em] font-medium hover:opacity-85 transition-opacity"
                    >
                      주문하기
                    </Link>
                    <Link
                      href="/ko/templates/OHMT017-multi-shop/shop"
                      className="block w-full border border-[var(--color-border)] py-3 text-center text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-colors"
                    >
                      쇼핑 계속하기
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Footer />
        </main>
      </TemplateWrapper>
    </>
  );
}
