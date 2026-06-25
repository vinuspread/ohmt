"use client";

import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function CosmeticStoryPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-black selection:bg-black selection:text-white">
        <Header />
        
        <section className="pt-48 pb-16 md:pb-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 lg:gap-32 items-start mb-32">
              <div>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40 mb-4 block">Our Story</span>
                <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-tight leading-[1.1] mb-8">
                  Beauty that respects you and the world you live in.
                </h1>
                <div className="space-y-5 text-[0.95rem] text-black/60 leading-[1.4]">
                  <p>
                    VINUSPREAD was founded on a radical idea: that luxury skincare shouldn't come at the cost of transparency. We set out to create a line of products that are as honest as they are effective.
                  </p>
                  <p>
                    Every formula is developed in our own laboratories, using sustainably sourced ingredients that are rigorously tested for purity and performance. We never compromise on quality - and we never use fillers, synthetic fragrances, or harsh preservatives.
                  </p>
                  <p>
                    Our commitment extends beyond what goes into the bottle. From recyclable packaging to carbon-neutral shipping, we're constantly finding new ways to reduce our environmental footprint.
                  </p>
                </div>
              </div>
              <img loading="lazy" src="/templates/cosmetic/cosmetic-hero-luxury.jpg" alt="Cosmetic story" className="w-full h-auto object-cover aspect-[3/4] mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-12 text-center justify-center">
              {[
                { value: "5+", label: "Years of R&D" },
                { value: "50K+", label: "Happy Customers" },
                { value: "100%", label: "Cruelty-Free" }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-[3rem] font-normal text-black mb-2">{stat.value}</div>
                  <div className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black/40">{stat.label}</div>
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


export default function CosmeticStoryPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CosmeticStoryPageContent {...props} />
    </React.Suspense>
  );
}
