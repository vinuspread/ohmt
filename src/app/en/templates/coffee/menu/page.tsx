"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { menuItems, menuCategories } from "../data/data";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const ease = [0.23, 1, 0.32, 1] as const;

function MenuPageContent() {
  const [active, setActive] = useState<string>(menuCategories[0].id);

  const filtered = active === 'all' ? menuItems : menuItems.filter((item) => item.category === active);

  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">

        {/* Hero */}
        <section className="relative bg-[var(--color-bg-dark)] h-[350px] flex items-center overflow-hidden">
          <img
            src="/templates/coffee/alt-detail.jpg"
            alt="Menu sub visual"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-bg-dark)]/75" />
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-3">Menu</p>
              <h1 className="font-heading text-[clamp(2.8rem,5vw,5rem)] font-bold text-white leading-[1.05]">
                What We Serve
              </h1>
            </div>
            <p className="text-white/40 text-sm max-w-[28ch] leading-relaxed">
              Single-origin beans, seasonal specials, and pastries baked fresh daily.
            </p>
          </div>
        </section>

        {/* Tabs */}
        <div className="sticky top-16 z-40 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="flex items-center gap-8 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className="relative pt-10 pb-5 text-[11px] uppercase tracking-[0.18em] font-semibold whitespace-nowrap transition-colors duration-200 shrink-0"
                  style={{ color: active === cat.id ? "var(--color-text)" : "#90909A" }}
                >
                  {cat.label}
                  {active === cat.id && (
                    <motion.span
                      layoutId="menu-tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent)] translate-y-[1px]"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <section className="py-16 md:py-20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <motion.div
              key={active}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease }}
            >
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  className="bg-[var(--color-bg)] p-5 md:p-6 flex flex-col gap-4"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease }}
                >
                  <div className="aspect-square bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="text-sm md:text-base font-bold font-heading leading-snug">{item.name}</h3>
                      <span className="text-sm font-semibold text-[var(--color-accent)] shrink-0">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-2 flex-grow">{item.description}</p>
                    {item.options && item.options.length > 0 && (
                      <div className="flex gap-1.5 mt-4 pt-3 border-t border-[var(--color-border)]">
                        {item.options.map((opt) => (
                          <span
                            key={opt}
                            className="text-[10px] px-2 py-0.5 border border-[var(--color-border)] text-[var(--color-text-muted)] capitalize font-medium"
                          >
                            {opt}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
