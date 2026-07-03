"use client";

import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function CosmeticStoryPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-black selection:bg-black selection:text-white">
        <Header />

        <section className="pt-48 pb-16 md:pb-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 lg:gap-32 items-start mb-32">
              <div>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40 mb-4 block">브랜드 스토리</span>
                <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-tight leading-[1.1] mb-8 break-keep">
                  당신과 지구를 모두 존중하는 뷰티.
                </h1>
                <div className="space-y-5 text-[0.95rem] text-black/60 leading-[1.9] break-keep">
                  <p>
                    OHMT는 하나의 근본적인 질문에서 시작되었습니다. 럭셔리 스킨케어가 투명성을 희생하지 않아도 될까? 우리는 그 답을 제품으로 증명하기 위해 이 브랜드를 만들었습니다. 효과적인 동시에 정직한 포뮬러로요.
                  </p>
                  <p>
                    모든 제품은 자체 연구소에서 개발되며, 지속 가능하게 조달된 원료를 사용해 순도와 효능을 엄격히 검증합니다. 우리는 불필요한 충전재, 합성 향료, 자극적인 방부제를 사용하지 않습니다. 퀄리티와 타협하는 법이 없습니다.
                  </p>
                  <p>
                    우리의 책임은 병 안에서 끝나지 않습니다. 재활용 가능한 패키징부터 탄소 중립 배송까지, 환경 발자국을 줄이기 위한 새로운 방법을 끊임없이 찾고 있습니다.
                  </p>
                </div>
              </div>
              <img loading="lazy" src="/templates/OHMT010-cosmetic/cosmetic-5.jpg" alt="브랜드 스토리" className="w-full h-auto object-cover aspect-[3/4] mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-12 text-center justify-center">
              {[
                { value: "5+", label: "연구 개발 연수" },
                { value: "50K+", label: "고객 만족" },
                { value: "100%", label: "크루얼티 프리" }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-[3rem] font-normal text-black mb-2">{stat.value}</div>
                  <div className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function CosmeticStoryPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CosmeticStoryPageContent {...props} />
    </React.Suspense>
  );
}
