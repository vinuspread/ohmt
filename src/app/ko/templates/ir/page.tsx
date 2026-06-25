// src/app/templates/ir/page.tsx
"use client";

import { Suspense } from "react";
import React from "react";
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
      <main lang="ko" className="antialiased bg-white text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-white">
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
                  src="/templates/ir/ir-2.jpg"
                  className="w-full h-[500px] object-cover"
                  alt="재무 개요"
                />
                <p className="text-[0.68rem] text-[#6B6B6B] mt-3 tracking-wide">2026 전략 방향: 운영 효율성과 지속 가능한 성장</p>
              </div>
              <div className="order-1 md:order-2">
                <span className="block text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-5">
                  경영진 메시지
                </span>
                <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-tight text-[var(--color-dark-bg)] leading-[1.5] mb-6">
                  변화하는 시대의 가치 창출
                </h2>
                <p className="text-[0.88rem] text-[#6B6B6B] leading-[1.82] mb-8 font-normal">
                  주주에 대한 우리의 약속은 변함없습니다. 고성장 부문에 집중하고 자본 배분에 있어 규율 있는 접근 방식을 유지함으로써 시장 변동성을 헤쳐 나가고 새로운 기회를 포착할 수 있는 확고한 입지를 구축하고 있습니다.
                </p>
                <button className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-dark-bg)] hover:translate-x-1.5 transition-all duration-300">
                  CEO 서한 읽기 <span className="text-[1.2em]">→</span>
                </button>
              </div>
            </div>
          </div>
        </motion.section>
        
        <RecentNews />
        
        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function IRTemplate(props: any) {
  return (
    <React.Suspense fallback={null}>
      <IRTemplateContent {...props} />
    </React.Suspense>
  );
}
