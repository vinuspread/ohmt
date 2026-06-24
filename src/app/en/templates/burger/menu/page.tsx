"use client";
import React, { useState } from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { menuItems, menuCategories, type MenuCategory } from "../data/data";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function MenuPageContent() {
  const [active, setActive] = useState<MenuCategory>(menuCategories[0].id);

  const filtered = menuItems.filter((item) => item.category === active);

  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen pt-16 md:pt-20 bg-white text-[var(--color-text)]">
        <section className="bg-[var(--color-bg-secondary)] py-20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-4">The Menu</p>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">What We Serve</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`text-xs uppercase tracking-[0.1em] px-6 py-2.5 font-semibold rounded-full transition-colors duration-200 ${
                    active === cat.id
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((item) => (
                <div key={item.id} className="group bg-[var(--color-bg-secondary)] rounded-none overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base md:text-lg font-bold leading-tight">{item.name}</h3>
                      <span className="text-base md:text-lg font-bold text-[var(--color-accent)] shrink-0">${item.price}</span>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-2">{item.description}</p>
                    {item.calories && (
                      <span className="text-xs text-[var(--color-text-muted)] mt-2 block">{item.calories} cal</span>
                    )}
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
