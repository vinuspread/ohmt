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
            src="/templates/OHMT019-coffee/story-interior.jpg"
            alt="Coffee shop interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">소개</p>
            <h1 className="text-5xl lg:text-7xl font-bold font-heading leading-[var(--leading-heading)]">
              브랜드 이야기</h1>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-muted)] mb-4">
                  커피에 대한 생각</p>
                <h2 className="text-3xl md:text-4xl font-bold font-heading leading-[var(--leading-heading)] mb-8">
                  좋은 원두로<br />정직하게 내린 커피.</h2>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                  OHMT는 성수동에서 주말마다 운영하던 작은 커피 카트로 시작했습니다. 한 잔씩 정성껏 내린 커피가 입소문을 타면서 동네 사람들이 편하게 찾는 카페로 성장했습니다. 이후 에티오피아와 콜롬비아의 산지를 찾아 생산자를 만나고, 좋은 원두를 꾸준히 소개할 수 있는 관계를 만들어 왔습니다.</p>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)] mt-4">
                  지금도 필요한 만큼 원두를 소량으로 로스팅합니다. 산지와 원두를 고르는 일부터 로스팅과 추출까지, 한 잔의 맛을 좌우하는 모든 과정을 세심하게 관리합니다.</p>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/templates/OHMT019-coffee/hero-drink.jpg"
                  alt="에스프레소 바"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[var(--color-bg-dark)] text-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              원두를 고르는 기준</h2>
            <p className="text-sm text-white/60 mb-16 max-w-lg mx-auto">
              OHMT가 원두를 고르고 커피를 만드는 세 가지 기준입니다.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-lg font-bold font-heading mb-3">싱글 오리진</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  생산지와 농장이 분명한 원두를 선택합니다. 각 지역이 가진 향과 맛을 온전히 전할 수 있도록 원두마다 다른 방식으로 로스팅합니다.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold font-heading mb-3">생산자와의 관계</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  생산자와 꾸준히 소통하며 품질과 노력에 맞는 가격을 협의합니다. 한 번의 거래보다 오래 이어지는 관계를 중요하게 생각합니다.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold font-heading mb-3">소량 로스팅</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  필요한 수량만 나누어 볶고 로스팅 날짜를 분명하게 안내합니다. 원두가 가장 좋은 상태일 때 즐길 수 있도록 신선도를 관리합니다.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/templates/OHMT019-coffee/story-beans.jpg"
                  alt="로스팅한 커피 원두"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/templates/OHMT019-coffee/story-brewing.jpg"
                  alt="핸드드립 커피 추출"
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
