"use client";

import React, { useState } from "react";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const technologies = [
  {
    num: "01",
    title: "AI-Pilot 2.0",
    desc: "운전 습관을 학습하고 실시간으로 도로 상태를 예측하는 뉴럴 네트워크 기반 주행 보조 시스템.",
    detail: "초당 4,000개 데이터 포인트를 12개 센서로 처리. 0.02초 반응 속도 — 인간 반사 신경보다 10배 빠름.",
    img: "/templates/OHMT009-car/tech-battery.jpg",
  },
  {
    num: "02",
    title: "Quantum Battery",
    desc: "530km 주행거리와 350kW 초고속 충전을 제공하는 솔리드 스테이트 아키텍처.",
    detail: "22분 만에 10%에서 80% 충전. 고속 충전소에서 5분 이내에 100km 주행거리 확보.",
    img: "/templates/OHMT009-car/homepage-charging.jpg",
  },
  {
    num: "03",
    title: "Adaptive Suspension",
    desc: "초당 1,000회 노면을 읽어 비교할 수 없는 승차감을 제공하는 액티브 댐핑 시스템.",
    detail: "각 휠이 2ms 단위로 독립 조정. 스포츠와 컴포트 사이의 타협이 없는 결과.",
    img: "/templates/OHMT009-car/configure-gt7-rear.jpg",
  },
  {
    num: "04",
    title: "Panoramic OS",
    desc: "햅틱 피드백과 음성 기반 AI 인터페이스를 갖춘 30인치 플로팅 디스플레이.",
    detail: "3회 주행 내에 사용자 선호도를 학습. 인터페이스는 사라지고, 필요한 순간에 필요한 정보만.",
    img: "/templates/OHMT009-car/tech-dashboard-custom.png",
  },
];

function CarTechnologyPageContent() {
  const [active, setActive] = useState(0);

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-black text-white selection:bg-[var(--theme-accent)] selection:text-black">
        <Header />

        {/* Hero */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-end">
          <img
            src="/templates/OHMT009-car/tech-hero-custom.png"
            alt="OHMT Technology"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="relative max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)] pb-12 w-full">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-4 block">기술 혁신</span>
            <h1 className="font-[family-name:var(--theme-font-heading)] text-[clamp(2.8rem,6vw,5.5rem)] font-bold tracking-[-0.03em] leading-[1.15]">
              디테일이 만드는<br />주행의 진화.
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="max-w-[var(--theme-container)] mx-auto px-5 md:px-[var(--theme-gutter)] pt-8 pb-10 md:pb-12 border-b border-[var(--theme-border)]">
          <p className="text-[1.15rem] md:text-[1.25rem] text-white/70 font-normal leading-[1.6] max-w-[750px] break-keep">
            우리의 엔지니어링 철학은 단순합니다: 모든 것에 의문을 제기하라.<br className="hidden md:inline" />그 결과는 차량의 가능성을 재정의하는 기술의 집합체입니다.
          </p>
        </section>

        {/* Tech selector */}
        <section className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)] py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-4 md:gap-16 items-start">

            {/* Left: list */}
            <div className="space-y-0 border-t border-[var(--theme-border)]">
              {technologies.map((tech, i) => (
                <button
                  key={tech.num}
                  onClick={() => setActive(i)}
                  className={`w-full text-left py-6 border-b border-[var(--theme-border)] transition-all duration-300 group ${active === i ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                >
                  <div className="flex items-start gap-6">
                    <span className={`text-[0.72rem] mt-0.5 transition-colors ${active === i ? 'text-[var(--theme-accent)]' : 'text-[var(--theme-text-muted)]'}`}>
                      {tech.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-[1.15rem] font-bold tracking-[-0.03em] mb-2">{tech.title}</h3>
                      <p className="text-[0.82rem] text-[var(--theme-text-muted)] leading-relaxed font-normal">{tech.desc}</p>
                      {active === i && (
                        <p className="text-[0.78rem] text-[var(--theme-accent)]/70 mt-3 leading-relaxed">{tech.detail}</p>
                      )}
                    </div>
                    <span className={`text-lg transition-transform duration-300 ${active === i ? 'rotate-90 text-[var(--theme-accent)]' : 'text-[var(--theme-text-muted)]'}`}>→</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right: image */}
            <div className="md:sticky md:top-24">
              <div className="aspect-[4/3] overflow-hidden bg-[var(--color-primary)] relative">
                {technologies.map((tech, i) => (
                  <img
                    key={tech.num}
                    src={tech.img}
                    alt={tech.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${active === i ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-[3rem] font-bold text-white/10 leading-none select-none">
                    {technologies[active].num}
                  </span>
                </div>
              </div>
               <div className="flex gap-2 mt-3">
                 {technologies.map((tech) => (
                   <button
                     key={tech.num}
                     onClick={() => setActive(technologies.indexOf(tech))}
                     className={`h-[2px] transition-all duration-300 ${active === technologies.indexOf(tech) ? 'w-8 bg-[var(--theme-accent)]' : 'w-4 bg-[var(--theme-border)]'}`}
                   />
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* Full-bleed strip */}
        <div className="relative h-[50vh] overflow-hidden">
          <img loading="lazy" src="/templates/OHMT009-car/tech-fullband.jpg" alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <p className="text-[clamp(1.5rem,4vw,3rem)] font-bold tracking-tight text-center max-w-[600px] px-6 leading-[1.4]">
              모든 디테일은<br />완벽한 움직임을 위해 설계되었습니다.
            </p>
          </div>
        </div>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function CarTechnologyPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CarTechnologyPageContent {...props} />
    </React.Suspense>
  );
}
