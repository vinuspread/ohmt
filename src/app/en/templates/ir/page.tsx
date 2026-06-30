// src/app/templates/OHMT011-ir/page.tsx
"use client";

import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Header } from "./_components/layout/Header";
import { Footer } from "./_components/layout/Footer";
import { Hero } from "./_components/sections/Hero";
import { BusinessSegments } from "./_components/sections/BusinessSegments";
import { RecentNews } from "./_components/sections/RecentNews";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";

function IRTemplateContent() {
  return (
    <TemplateWrapper theme={theme}>
      <Suspense fallback={null}>
      <main className="antialiased bg-white text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-white">
        <Header />

        <Hero />

        <BusinessSegments />

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="py-12 md:py-24 bg-white border-y border-[var(--color-border)]"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="/templates/OHMT011-ir/ir-2.jpg"
                  className="w-full h-[500px] object-cover"
                  alt="Financial overview"
                />
                <p className="text-[0.68rem] text-[#6B6B6B] mt-3 tracking-wide">Our 2026 Strategy Focus: Operational Efficiency and Sustainable Growth.</p>
              </div>
              <div className="order-1 md:order-2">
                <span className="block text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-5">
                  Executive Message
                </span>
                <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-tight text-[var(--color-dark-bg)] leading-[1.1] mb-6">
                  Driving value in a changing world.
                </h2>
                <p className="text-[0.88rem] text-[#6B6B6B] leading-[1.82] mb-8 font-normal">
                  Our commitment to shareholders remains steadfast. By focusing on high-growth sectors and maintaining a disciplined approach to capital allocation, we are well-positioned to navigate market volatility and capture emerging opportunities.
                </p>
                <button className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-dark-bg)] hover:translate-x-1.5 transition-all duration-300">
                  Read CEO's Letter <span className="text-[1.2em]">→</span>
                </button>
              </div>
            </div>
          </div>
        </motion.section>
        
        <RecentNews />
        
        <Footer />
      </main>
      </Suspense>
    </TemplateWrapper>
  );
}


export default function IRTemplate() {
  return (
    <React.Suspense fallback={null}>
      <IRTemplateContent />
    </React.Suspense>
  );
}
