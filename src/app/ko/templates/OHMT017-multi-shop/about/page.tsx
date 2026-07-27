"use client";
import React from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { TeamSection } from "../_components/TeamSection";
import { Services } from "../_components/Services";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function AboutPageContent() {
  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-white text-[var(--color-text)]">

        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src="/templates/OHMT017-multi-shop/about-brand.jpg"
            alt="OHMT 브랜드 소개"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">브랜드 소개</p>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[var(--leading-heading)]">
              브랜드 스토리
            </h1>
            <p className="text-base text-white/70 mt-5 max-w-lg mx-auto leading-relaxed tracking-wide">
              모든 제품은 분명한 이유로 완성됩니다.<br />오래 입을수록 자연스럽게 드러나는 자신감을 담습니다.</p>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <div className="flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-muted)] mb-4">브랜드 철학</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[var(--leading-heading)] mb-8">
                  덜어낼수록<br />오래 남는 옷.</h2>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                  OHMT는 매일 자연스럽게 손이 가는 옷을 만들고자 시작했습니다.
                  <br className="hidden md:block" />
                  세심하게 만들되 부담스럽지 않고, 선명한 인상을 주되 차갑지 않은 옷.
                  <br className="hidden md:block" />
                  유행보다 오래 입을 수 있는 균형 잡힌 디자인을 추구합니다.
                </p>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)] mt-4">
                  서울의 스튜디오에서 디자인하고, 각 분야에 전문성을 가진 소규모 공방과 함께 제작합니다.
                  <br className="hidden md:block" />
                  직접 입고 싶은 원단과 오래 사용할 수 있는 부자재를 고릅니다.
                  <br className="hidden md:block" />
                  필요한 수량만 생산하며, 모든 컬렉션을 신중하게 선보입니다.
                </p>
              </div>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/templates/OHMT017-multi-shop/category-women.jpg"
                  alt="OHMT 컬렉션"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <Services />

        <section className="bg-white py-20 md:py-32 hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <h3 className="text-5xl font-bold tracking-tight">2020</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mt-2">설립</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold tracking-tight">50+</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mt-2">컬렉션</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold tracking-tight">10K+</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mt-2">누적 고객</p>
              </div>
            </div>
          </div>
        </section>

        <TeamSection />
        <Footer />
      </main>
      </TemplateWrapper>
    </>
  );
}

export default function AboutPage() {
  return (
    <React.Suspense fallback={null}>
      <AboutPageContent />
    </React.Suspense>
  );
}
