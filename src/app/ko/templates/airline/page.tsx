// src/app/ko/templates/OHMT008-airline-KO/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { SearchWidget } from "./_components/SearchWidget";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";
import { ArrowRight, Utensils, BedDouble, Wifi, ShieldCheck } from "lucide-react";

function AirlineTemplateContent() {
  const services = [
    {
      icon: BedDouble,
      title: "프라이빗 퍼스트클래스 스위트",
      desc: "완전 밀폐된 캐빈, 180° 플랫베드, 슬라이딩 프라이버시 도어, 개인 옷장 - 4만 피트 상공의 당신만의 안식처."
    },
    {
      icon: Utensils,
      title: "미슐랭 스타 다이닝",
      desc: "셰프가 엄선한 시즌 메뉴를 빈티지 샴페인 및 셀러 소장 와인과 함께 프리셀렉하세요."
    },
    {
      icon: Wifi,
      title: "울트라 HD 엔터테인먼트",
      desc: "32인치 4K 스크린, 1,500시간 이상의 주문형 콘텐츠, 실시간 글로벌 뉴스, 초고속 기내 Wi-Fi."
    },
    {
      icon: ShieldCheck,
      title: "프라이오리티 컨시어지 서비스",
      desc: "출발 전 라운지 이용부터 도착지까지 모든 비누스 에어 취항지에서 전담 개인 컨시어지가 함께합니다."
    }
  ];

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]">
        <Header />

        <Hero />

        <SearchWidget />

        {/* Section 1: The Experience */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <span className="block text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-5">
                  프리미엄 경험
                </span>
                <h2 className="font-[family-name:var(--theme-font-heading)] text-[clamp(2rem,3.5vw,3rem)] font-bold tracking-tight text-[var(--color-primary)] leading-[1.5] mb-6">
                  모든 디테일이 완성하는<br />타협 없는 럭셔리.
                </h2>
                <p className="text-[0.95rem] text-[var(--color-text-muted)] leading-[1.82] mb-8 md:mb-10 font-normal">
                  시그니처 캐비어 서비스에서부터 하늘 위 가장 조용한 객실까지, 비누스 에어는 여행의 의미를 새롭게 정의합니다. 최첨단 기술로 무장한 기단이 당신의 모든 순간을 매끄럽고 기억에 남도록 만들어 드립니다.
                </p>
                <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
                  <div>
                    <strong className="block text-[var(--color-primary)] font-bold mb-1">프라이빗 스위트</strong>
                    <p className="text-[0.85rem] text-[var(--color-text-muted)]">슬라이딩 도어가 적용된 완전 평면 침대가 제공하는 궁극의 프라이버시.</p>
                  </div>
                  <div>
                    <strong className="block text-[var(--color-primary)] font-bold mb-1">글로벌 다이닝</strong>
                    <p className="text-[0.85rem] text-[var(--color-text-muted)]">미슐랭 스타 셰프가 엄선한 프리미엄 기내식.</p>
                  </div>
                </div>
                <Link href="/ko/templates/OHMT008-airline-KO/experience" className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] hover:translate-x-1.5 transition-transform duration-300">
                  퍼스트 클래스 살펴보기 <span className="text-[1.2em]">→</span>
                </Link>
              </div>
              <div className="relative h-[320px] md:h-[480px] overflow-hidden">
                <img
                  src="/templates/OHMT008-airline/destination-3.jpg"
                  className="w-full h-full object-cover"
                  alt="기내 서비스"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Crew / Service image + stats */}
        <section className="bg-[var(--color-primary)] py-16 md:py-24">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="relative h-[320px] md:h-[560px] overflow-hidden order-2 md:order-1">
                <img
                  src="/templates/OHMT008-airline/airline-experience-hero.png"
                  className="w-full h-full object-cover opacity-80"
                  alt="비누스 에어 객실 승무원"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 via-transparent to-transparent" />
              </div>
              <div className="order-1 md:order-2 space-y-8 md:space-y-10">
                <div>
                  <span className="block text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-5">
                    화이트 글러브 서비스
                  </span>
                  <h2 className="font-[family-name:var(--theme-font-heading)] text-[clamp(1.8rem,3.5vw,3rem)] font-bold tracking-tight text-white leading-[1.5]">
                    모든 순간은 정밀하게, <br />
                    <span className="font-normal text-[var(--color-accent)]">세심하게.</span>
                  </h2>
                </div>
                <p className="text-[0.95rem] text-white/60 leading-[1.82] font-normal">
                  비누스 에어의 객실 승무원은 세계 최고의 서비스 교육 기관에서 훈련받았습니다. 탑승 순간부터 목적지에 도착할 때까지, 모든 요청은 우아함과 재량, 전문성으로 응대됩니다.
                </p>
                <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 md:pt-10">
                  {[
                    { value: "200+", label: "취항지" },
                    { value: "98%", label: "정시율" },
                    { value: "15yr", label: "평균 근속" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl md:text-3xl font-black text-[var(--color-accent)]">{stat.value}</div>
                      <div className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/40 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Service Cards */}
        <section className="py-16 md:py-24 bg-[var(--color-bg-secondary)]">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="mb-10 md:mb-14">
              <span className="block text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
                서비스
              </span>
              <h2 className="font-[family-name:var(--theme-font-heading)] text-[clamp(1.8rem,3.5vw,3rem)] font-bold tracking-tight text-[var(--color-primary)] leading-[1.5]">
                특별함을 기대하는 당신을<br className="hidden md:block" />위해 준비했습니다.
              </h2>
            </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
               {services.map((s) => (
                 <div key={s.title} className="bg-white border border-[var(--color-border)] p-8 md:p-8 space-y-6 group hover:border-[var(--color-accent)] transition-colors duration-300">
                   <div className="w-10 h-10 bg-[var(--color-primary)] flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                     <s.icon size={18} className="text-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-colors duration-300" />
                   </div>
                   <h3 className="text-[0.92rem] font-bold text-[var(--color-primary)] leading-tight uppercase tracking-wide">
                     {s.title}
                   </h3>
                   <p className="text-[0.82rem] text-[var(--color-text-muted)] leading-relaxed font-normal">
                     {s.desc}
                   </p>
                 </div>
               ))}
             </div>

            <div className="mt-10 md:mt-14 text-center">
              <Link
                href="/ko/templates/OHMT008-airline-KO/experience"
                className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.2em] px-10 py-3.5 bg-[var(--color-primary)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors duration-300"
              >
                전체 경험 보기 <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function AirlineTemplate() {
  return (
    <React.Suspense fallback={null}>
      <AirlineTemplateContent />
    </React.Suspense>
  );
}
