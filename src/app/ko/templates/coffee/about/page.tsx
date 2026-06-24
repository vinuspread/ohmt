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
      <main className="antialiased min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src="/templates/coffee/story-interior.png"
            alt="Coffee shop interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">소개</p>
            <h1 className="text-5xl lg:text-7xl font-bold font-heading leading-[1.05]">
              스토리
            </h1>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-muted)] mb-4">
                  철학
                </p>
                <h2 className="text-3xl md:text-4xl font-bold font-heading leading-[1.15] mb-8">
                  천천히 즐길<br />가치가 있는 커피.
                </h2>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                  Oh My Template은 성수동의 작은 커피 카트에서 시작했습니다. 주말 취미 프로젝트로 시작된 이곳은 어느덧 동네의 핫플레이스로 자리잡았습니다. 창립자들은 에티오피아와 콜롬비아의 커피 산지를 수년간 여행하며 품질에 대한 열정을 공유하는 농부들과 관계를 구축했습니다.
                </p>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)] mt-4">
                  오늘날 우리는 소량 배치로 직접 원두를 로스팅하고, 모든 과정에 담긴 정성이 반영된 커피를 제공합니다. 씨앗에서 한 잔까지, 올바른 방식으로 하는 것이 우리의 신념입니다.
                </p>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/templates/coffee/hero-drink.png"
                  alt="Espresso bar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[var(--color-bg-dark)] text-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              원두 철학
            </h2>
            <p className="text-sm text-white/60 mb-16 max-w-lg mx-auto">
              우리의 모든 것을 이끄는 세 가지 원칙.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-lg font-bold font-heading mb-3">싱글 오리진</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  블렌드가 아닌 단일 농장에서 원두를 공급받습니다. 각 산지는 탐험할 가치가 있는 독특한 풍미를 제공합니다.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold font-heading mb-3">다이렉트 트레이드</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  농부들과 직접 파트너십을 맺고, 탁월한 품질에 대해 공정 무역 가격 이상을 지불합니다.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold font-heading mb-3">프레시 로스트</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  모든 배치는 방문 48시간 이내에 로스팅됩니다. 신선함은 타협할 수 없는 기준입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/templates/coffee/story-beans.png"
                  alt="Coffee beans"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/templates/coffee/story-brewing.png"
                  alt="Coffee brewing"
                  className="w-full h-full object-cover"
                />
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
