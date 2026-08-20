"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { SubpageHero } from "../_components/SubpageHero";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function AboutContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-white">
        <Navbar />

        <SubpageHero
          eyebrow="EST. 2026"
          title="브랜드 소개"
          description="좋은 원단과 유행을 타지 않는 디자인을 바탕으로 옷을 만듭니다. 시간이 지나도 자연스럽게 꺼내 입을 수 있도록 소재와 재단을 세심하게 다듬습니다."
          image="/templates/OHMT001-fashion/about-hero-v2.png"
          imageAlt="SILO 작업실과 제작 과정"
        />

        <section className="bg-black py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="font-[family-name:var(--font-bodoni)] italic text-3xl md:text-4xl text-white leading-[var(--leading-body)]">
              &ldquo;편하게 오래 입을 수 있는 옷을,<br />한 벌씩 제대로 만듭니다.&rdquo;
            </p>
            <div className="border-t border-white/20 w-16 mx-auto mt-12" />
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <span className="text-xs uppercase tracking-[-0.03em] text-[var(--color-text-muted)]">브랜드 스토리</span>
                <p className="text-base text-black/70 leading-relaxed mt-6 break-keep tracking-[-0.025em]">
                  SILO는 오래 입을수록 편안해지고 자연스럽게 몸에 익는 옷을 만들기 위해 시작했습니다. 소재의 촉감과 내구성을 먼저 살피고, 여러 차례의 피팅을 거쳐 움직임이 편한 실루엣을 완성합니다. 재단과 봉제, 마감까지 각 과정을 꼼꼼하게 확인하며 눈에 잘 띄지 않는 부분까지도 신경써서 제작합니다.
                </p>
              </div>
              <div className="aspect-[4/5] overflow-hidden">
                <img src="/templates/OHMT001-fashion/hero-custom.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/[0.08]">
              {[
                { num: "01", title: "소재", desc: "촉감과 내구성, 관리 방법까지 확인해 실제로 오래 입기 좋은 소재를 선택합니다." },
                { num: "02", title: "재단과 봉제", desc: "여러 차례 입어 보며 핏과 움직임을 확인하고, 필요한 부분은 손으로 세심하게 마감합니다." },
                { num: "03", title: "내구성", desc: "잘 늘어나지 않고, 변색에 강한 옷을 만듭니다. 시간이 지나도 부담 없이 입을 수 있는 제품을 고집합니다." },
              ].map((item, i) => (
                <div key={item.num} className={`py-12 md:py-0 ${i === 0 ? "md:pr-16 lg:pr-24" : i === 1 ? "md:px-16 lg:px-24" : "md:pl-16 lg:pl-24"}`}>
                  <span className="block text-xs font-mono tracking-[0.25em] text-black/30 mb-7">· {item.num}</span>
                  <h3 className="font-[family-name:var(--font-bodoni)] text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[var(--leading-heading)]">{item.title}</h3>
                  <div className="w-6 h-px bg-black/20 my-5" />
                  <p className="text-sm text-black/55 leading-relaxed break-keep tracking-[-0.025em]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 text-center">
          <p className="text-xl text-black/50">오래 두고 편하게 입을 수 있는 옷을 찾고 계신가요?</p>
          <Link
            href="/ko/templates/OHMT001-fashion/collection"
            className="inline-block bg-black text-white px-10 py-4 mt-8 text-xs uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
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
