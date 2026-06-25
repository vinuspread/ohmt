"use client";
import React from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function AboutPageContent() {
  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-white text-[var(--color-text)]">
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src="/templates/burger/story-kitchen.png"
            alt="Our kitchen"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">About Us</p>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Our Story
            </h1>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-muted)] mb-4">Our Philosophy</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] mb-8">
                  Quality Over<br />Everything.
                </h2>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                  We believe a burger should be judged by its taste, not its price tag.
                  That is why we use 100% pure beef patties, freshly baked brioche buns,
                  and vegetables sourced from local farms.
                </p>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)] mt-4">
                  Every sauce is made in-house. Every patty is hand-pressed.
                  Every order is cooked fresh. It takes a few minutes longer,
                  but you can taste the difference.
                </p>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/templates/burger/story-ingredients.png"
                  alt="Fresh ingredients"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-bg-dark)] text-white py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 max-w-4xl mx-auto">
              <div>
                <h3 className="text-lg font-bold mb-3">Quality Ingredients</h3>
                <p className="text-sm text-white/60 leading-relaxed">We source the best beef, freshest produce, and finest bakes. No shortcuts, no compromises.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Crafted With Care</h3>
                <p className="text-sm text-white/60 leading-relaxed">Every burger is made to order by hand. Real cooking, not assembly line production.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Community First</h3>
                <p className="text-sm text-white/60 leading-relaxed">We partner with local farms and suppliers. Good food should also do good.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </TemplateWrapper>
    </>
  );
}

export default function AboutPage() {
  return <AboutPageContent />;
}
