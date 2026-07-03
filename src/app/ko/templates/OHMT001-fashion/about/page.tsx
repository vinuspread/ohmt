"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function AboutContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-white">
        <Navbar />

        <section className="relative h-[40vh] md:h-[50vh] overflow-hidden flex items-center justify-center pt-14 md:pt-20">
          <img
            src="/templates/fashion/about-hero-v2.png"
            alt="브랜드스토리"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
          <div className="relative z-10 text-center px-6 flex flex-col items-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/50 mb-3">EST. 2026</span>
            <h1 className="font-[family-name:var(--font-bodoni)] text-[32px] md:text-[48px] text-white font-bold tracking-[-0.04em]">브랜드 스토리</h1>
          </div>
        </section>

        <section className="bg-black py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="font-[family-name:var(--font-bodoni)] italic text-[28px] md:text-[40px] text-white leading-[1.3]">
              &ldquo;우리는 시즌을 따르지 않습니다.<br />시즌을 넘어서는 것을 만듭니다.&rdquo;
            </p>
            <div className="border-t border-white/20 w-16 mx-auto mt-12" />
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <span className="text-[11px] uppercase tracking-[-0.03em] text-[var(--color-text-muted)]">브랜드 스토리</span>
                <p className="text-[16px] text-black/70 leading-relaxed mt-6 break-keep tracking-[-0.025em]">
                  2026년, 우리는 옷이 만들어진 순간을 넘어 더 오랜 시간 지속되어야 한다는 확신 하나로 시작했습니다. 소재 본연의 가치를 깊이 신뢰하는 소수의 장인 공방들과 긴밀히 협력합니다. 모든 의복은 수작업으로 패턴을 재단하고, 오랜 시간을 들여 정성껏 봉제하며, 그 어떤 지름길도 없이 정직하게 완성합니다.
                </p>
              </div>
              <div className="aspect-[4/5] overflow-hidden">
                <img src="/templates/fashion/hero-custom.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/[0.08]">
              {[
                { num: "01", title: "품질", desc: "모든 소재는 비용이 아닌 내구성을 위해 선택됩니다." },
                { num: "02", title: "장인정신", desc: "기계가 따라할 수 없는 손마감 디테일." },
                { num: "03", title: "시대를 초월한 가치", desc: "지금으로부터 수십 년 후에도 입을 수 있도록 디자인되었습니다." },
              ].map((item, i) => (
                <div key={item.num} className={`py-12 md:py-0 ${i === 0 ? "md:pr-16 lg:pr-24" : i === 1 ? "md:px-16 lg:px-24" : "md:pl-16 lg:pl-24"}`}>
                  <span className="block text-[9px] font-mono tracking-[0.25em] text-black/30 mb-7">— {item.num}</span>
                  <h3 className="font-[family-name:var(--font-bodoni)] text-[28px] md:text-[32px] font-bold tracking-[-0.04em] leading-[1.1]">{item.title}</h3>
                  <div className="w-6 h-px bg-black/20 my-5" />
                  <p className="text-[14px] text-black/55 leading-relaxed break-keep tracking-[-0.025em]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 text-center">
          <p className="text-[20px] text-black/50">오래 지속되는 옷을 찾고 계신가요?</p>
          <Link
            href="/ko/templates/OHMT001-fashion/collection"
            className="inline-block bg-black text-white px-10 py-4 mt-8 text-[12px] uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
          >
            컬렉션 보기
          </Link>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function AboutPage() {
  return (
    <React.Suspense fallback={null}>
      <AboutContent />
    </React.Suspense>
  );
}
