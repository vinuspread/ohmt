"use client";
import React, { useState } from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { menuItems, menuCategories } from "../data/data";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function MenuPageContent() {
  const [active, setActive] = useState<string>(menuCategories[0].id);

  const filtered = active === 'all' ? menuItems : menuItems.filter((item) => item.category === active);

  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        {/* Hero */}
        <section className="relative bg-[var(--color-bg-dark)] h-[300px] flex items-center overflow-hidden">
          <img
            src="/templates/coffee/alt-detail.jpg"
            alt="메뉴 소개 서브 비주얼"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 text-center pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">Menu</p>
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-[1.1] text-white">
              메뉴 소개
            </h1>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`text-xs uppercase tracking-[0.1em] px-5 py-2 font-semibold rounded-full transition-colors duration-200 ${
                    active === cat.id
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-5 flex flex-col h-[calc(100%-aspect-square)]">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-base md:text-lg font-bold font-heading">{item.name}</h3>
                      <span className="text-base font-semibold text-[var(--color-primary)] shrink-0">${item.price}</span>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-2 mb-3 flex-grow">{item.description}</p>
                    <div className="flex items-center justify-between gap-2 mt-2 pt-2 border-t border-[var(--color-ui-border)]">
                      {item.options && item.options.length > 0 ? (
                        <div className="flex gap-1.5">
                          {item.options.map((opt) => (
                            <span
                              key={opt}
                              className="text-[10px] rounded-full px-2 py-0.5 bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] capitalize font-medium"
                            >
                              {opt === 'hot' ? '핫' : '아이스'}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-[10px] text-[var(--color-text-muted)]">기본 옵션</span>
                      )}
                      <button
                        onClick={() => alert(`"${item.name}" 주문이 완료되었습니다. 카운터에서 수령해 주세요.`)}
                        className="bg-[var(--color-text)] text-[var(--color-text-contrast)] px-4 py-1.5 text-xs font-semibold hover:opacity-90 active:scale-95 transition-all"
                      >
                        주문하기
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </TemplateWrapper>
    </>
  );
}

export default function MenuPage() {
  return <MenuPageContent />;
}
