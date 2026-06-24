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
            alt="Oh My Template 브랜드 소개"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">브랜드 소개</p>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              브랜드 스토리
            </h1>
            <p className="text-base text-white/70 mt-5 max-w-lg mx-auto leading-relaxed tracking-wide">
              모든 조각은 의도로 완성됩니다.<br />모든 스타일은 담담한 자신감으로 빛납니다.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <div className="flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-muted)] mb-4">브랜드 철학</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] mb-8">
                  과하지 않은<br />옷의 완성.
                </h2>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                  Oh My Template는 과하지 않은 옷을 만들고 싶다는 마음에서 시작되었습니다.
                  정성을 느끼게 하면서도 부담스럽지 않고, 날카롭지만 차갑지 않은.
                  생각할 것 없이 손이 가는 옷장, 그 안의 모든 것이 그냥 잘 맞아떨어지는.
                </p>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)] mt-4">
                  우리의 스튜디오는 서울에 있지만, 우리의 접근법은 국경을 넘습니다.
                  시간을 들이는 소규모 공방과 협업하며, 우리 자신이 입고 싶은 원단을 사용합니다.
                  대량 생산은 없습니다. 모든 드롭은 의도적이며, 품절되면 그게 끝입니다.
                  그것이 핵심입니다.
                </p>
              </div>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/templates/OHMT017-multi-shop/category-women.jpg"
                  alt="Oh My Template 컬렉션"
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
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mt-2">고객만족</p>
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

