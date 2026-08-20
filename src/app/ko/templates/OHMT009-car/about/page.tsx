"use client";

import React from "react";
import Link from "next/link";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const stats = [
  { value: "12,000+", label: "전 세계 직원 수" },
  { value: "200+", label: "글로벌 쇼룸" },
  { value: "98%", label: "고객 만족도" },
  { value: "2018", label: "설립 연도" },
];

const values = [
  { num: "01", title: "끝없는 정밀함", desc: "모든 부품은 대부분의 제조사가 불가능하다고 여기는 공차로 설계합니다. 우리에게는 당연한 기준입니다." },
  { num: "02", title: "정직한 디자인", desc: "시각적 노이즈를 위해 선을 더하지 않습니다. 모든 곡선은 공기역학적 목적을 지니고, 모든 표면은 존재 이유를 증명합니다." },
  { num: "03", title: "기본이 되는 지속가능성", desc: "단순한 기능이 아닙니다. 체크리스트가 아닙니다. 지속가능성은 모든 소재 결정과 모든 공급망 선택에 내재되어 있습니다." },
  { num: "04", title: "드라이버 퍼스트", desc: "자율 주행 기능을 갖추되, 기본은 언제나 운전자입니다. 차량에서 가장 중요한 시스템은 지금도 사람입니다." },
];

function CarAboutPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-black text-white selection:bg-[var(--theme-accent)] selection:text-black">
        <Header />

        {/* Hero */}
        <section className="relative h-[85vh] min-h-[560px] overflow-hidden flex items-end">
          <img
            src="/templates/OHMT009-car/about-hero.jpg"
            alt="IONARA Motors"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="relative max-w-[var(--theme-container)] mx-auto px-5 md:px-[var(--theme-gutter)] pb-8 md:pb-12 w-full">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-4 block">About IONARA</span>
            <h1 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-display)] font-bold tracking-[-0.03em] leading-[var(--leading-heading)] max-w-[680px]">
              운전의 즐거움을<br />새롭게 설계합니다.
            </h1>
          </div>
        </section>

        {/* Mission */}
        <section className="border-b border-[var(--theme-border)]">
          <div className="max-w-[var(--theme-container)] mx-auto px-5 md:px-[var(--theme-gutter)] py-10 md:py-14 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <p className="text-[length:var(--text-lead)] text-white font-normal leading-[var(--leading-body)] break-keep">
              IONARA Motors는 정교한 기술과 절제된 디자인으로,<br />
              목적지에 도착하는 과정까지 특별한 경험으로 만듭니다.
            </p>
            <p className="text-[1.02rem] text-white/50 leading-[var(--leading-body)] font-normal break-keep">
              현재 우리는 3개 대륙에서 12,000명 이상의 직원을 고용하며, 전 세계 200개 이상의 쇼룸 네트워크를 운영하고 있습니다. 지속 가능한 럭셔리를 향한 약속이 모든 결정의 기준이 됩니다. 우리는 단순히 자동차를 만드는 것이 아닙니다. 우리는 개인 이동의 미래를 구축합니다.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-[var(--theme-border)]">
          <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--theme-border)]">
              {stats.map((stat) => (
                <div key={stat.label} className="py-10 md:py-16 px-4 md:px-8 text-center">
                  <div className="text-[length:var(--text-h2)] font-bold text-white mb-2 tracking-tight">{stat.value}</div>
                  <div className="text-[0.72rem] text-[var(--theme-text-muted)] uppercase tracking-[0.15em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full-bleed */}
        <div className="relative h-[55vh] overflow-hidden">
          <img loading="lazy" src="/templates/OHMT009-car/about-factory.jpg" alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-[length:var(--text-h3)] font-bold tracking-tight text-white text-center max-w-[560px] px-6 leading-tight">
              "성능과 책임은 상충하지 않는다고 믿는 운전자를 위해, 우리는 차를 만듭니다."
            </p>
          </div>
        </div>

        {/* Values */}
        <section className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)] py-12 md:py-20">
          <div className="flex items-end justify-between mb-10 border-b border-[var(--theme-border)] pb-6">
            <h2 className="text-[length:var(--text-h2)] font-bold tracking-[-0.03em]">우리의 원칙</h2>
            <span className="text-[0.72rem] text-[var(--theme-text-muted)] uppercase tracking-widest hidden md:block">우리를 움직이는 것</span>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-[var(--theme-border)]">
            {values.map((v) => (
              <div key={v.num} className="bg-black p-6 md:p-12 group hover:bg-[var(--color-primary)] transition-colors">
                <span className="text-[0.7rem] text-[var(--theme-accent)]/50 block mb-6">{v.num}</span>
                <h3 className="text-[1.2rem] font-bold tracking-[-0.03em] mb-4 group-hover:text-[var(--theme-accent)] transition-colors">{v.title}</h3>
                <p className="text-[0.85rem] text-[var(--theme-text-muted)] leading-relaxed font-normal">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden">
          <img loading="lazy" src="/templates/OHMT009-car/about-closing.jpg" alt="" className="w-full h-[420px] object-cover object-center" />
          <div className="absolute inset-0 bg-black/65 flex flex-col items-center justify-center text-center px-6">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-4 block">Ready?</span>
            <h2 className="text-[length:var(--text-h1)] font-bold tracking-[-0.03em] mb-8">직접 경험해보세요.</h2>
            <Link
              href="/ko/templates/OHMT009-car"
              className="text-[0.72rem] font-bold uppercase tracking-[0.16em] px-8 py-3.5 bg-[var(--theme-accent)] text-black hover:opacity-85 transition-opacity"
            >
              시승 신청
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function CarAboutPage() {
  return (
    <React.Suspense fallback={null}>
      <CarAboutPageContent />
    </React.Suspense>
  );
}
