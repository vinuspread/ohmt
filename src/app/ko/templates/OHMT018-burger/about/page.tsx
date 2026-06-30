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
            src="/templates/OHMT018-burger/story-kitchen.png"
            alt="주방"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">소개</p>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              브랜드 스토리
            </h1>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-muted)] mb-4">브랜드 철학</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] mb-8">
                  품질은 결코<br />타협의 대상이 아닙니다.
                </h2>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                  버거는 화려한 가격표가 아닌, 한 입 베어 물었을 때의 맛과 감동으로 평가받아야 합니다. 
                  그렇기에 우리는 100% 프리미엄 순소고기 패티, 당일 구워낸 촉촉한 브리오슈 번, 
                  그리고 당일 수급한 가장 신선한 로컬 채소만을 고집합니다.
                </p>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)] mt-4">
                  모든 소스는 기성품 없이 매장에서 직접 마스터 셰프가 배합하여 끓여내며, 
                  패티는 수제 프레스 방식으로 육즙을 가두어 굽습니다. 
                  조금 더 시간이 걸리더라도, 첫 입에 전해지는 특별한 차이를 직접 느껴보세요.
                </p>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/templates/OHMT018-burger/story-ingredients.png"
                  alt="신선한 식재료"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-bg-dark)] text-white py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">핵심 가치</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 max-w-4xl mx-auto">
              <div>
                <h3 className="text-lg font-bold mb-3">정직한 식재료</h3>
                <p className="text-sm text-white/60 leading-relaxed">최고 등급의 비프 패티, 가장 신선한 농산물, 매일 아침 구워내는 빵. 재료의 가치를 최우선으로 여깁니다.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">손끝으로 담아내는 정성</h3>
                <p className="text-sm text-white/60 leading-relaxed">기성 냉동 조립라인을 전면 배제하며, 모든 요리는 주문과 동시에 한 사람만을 위해 손으로 구워내고 조리합니다.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">동반 성장과 상생</h3>
                <p className="text-sm text-white/60 leading-relaxed">우수한 품질의 로컬 농가 및 협력업체와의 파트너십을 지향하며, 선한 영향력의 순환 구조를 만듭니다.</p>
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
