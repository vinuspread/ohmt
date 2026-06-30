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

        <section className="relative h-[70vh] overflow-hidden">
          <img src="/templates/OHMT001-fashion/exclusive-custom.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-[11px] uppercase tracking-widest text-white/60">EST. 2026</span>
            <h1 className="font-[family-name:var(--font-bodoni)] text-[48px] md:text-[72px] text-white font-bold tracking-tight mt-4">브랜드</h1>
          </div>
        </section>

        <section className="bg-black py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="font-[family-name:var(--font-bodoni)] italic text-[28px] md:text-[40px] text-white leading-[1.3]">
              &ldquo;우리는 시즌을 따르지 않습니다. 시즌을 넘어서는 것을 만듭니다.&rdquo;
            </p>
            <div className="border-t border-white/20 w-16 mx-auto mt-12" />
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-black/40">브랜드 스토리</span>
                <p className="text-[16px] text-black/70 leading-relaxed mt-6 break-keep">
                  2026년, 단 하나의 확신으로 시작했습니다. 옷은 그것이 만들어진 순간보다 오래 지속되어야 한다는 것. 소재의 완전성에 대한 집착을 공유하는 소수의 공방과 함께 작업합니다. 모든 의복은 손으로 패턴 커팅하고, 천천히 봉제하며, 지름길 없이 마무리됩니다.
                </p>
              </div>
              <div className="aspect-[4/5] overflow-hidden">
                <img src="/templates/OHMT001-fashion/hero-custom.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#F9F9F9]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
              {[
                { num: "01", title: "품질", desc: "모든 소재는 비용이 아닌 내구성을 위해 선택됩니다." },
                { num: "02", title: "장인정신", desc: "기계가 따라할 수 없는 손마감 디테일." },
                { num: "03", title: "무시간성", desc: "지금으로부터 수십 년 후에도 입을 수 있도록 디자인되었습니다." },
              ].map((item, i) => (
                <div key={item.num} className={i < 2 ? "md:border-r border-black/10 md:pr-12 lg:pr-20" : "md:pl-12 lg:pl-20"}>
                  <span className="text-[11px] font-mono text-black/20">{item.num}</span>
                  <h3 className="font-[family-name:var(--font-bodoni)] text-[20px] font-bold tracking-tight mt-2">{item.title}</h3>
                  <p className="text-[14px] text-black/60 leading-relaxed mt-3">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 text-center">
          <p className="text-[20px] text-black/50">오래 지속되는 옷을 찾고 계신가요?</p>
          <Link
            href="/ko/templates/OHMT001-fashion/category/collection"
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
