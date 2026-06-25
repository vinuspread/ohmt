"use client";

import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const entries = [
  {
    slug: "vitamin-c-science",
    title: "스킨케어 속 비타민 C에 담긴 과학적 메커니즘.",
    date: "2026년 5월 20일",
    read: "5분",
    excerpt: "빛나는 피부를 선사하는 비타민 C의 분자 구조적 이점과 필수성을 알아봅니다.",
    content: "비타민 C는 스킨케어에서 가장 강력한 항산화 성분 중 하나입니다. 활성산소를 억제하고 콜라겐 합성을 촉진하며 맑은 안색을 선사하는 효능 덕분에 필수적인 원료로 꼽힙니다. 피부 장벽을 안전하고 효과적으로 통과하는 메종의 안정화 공법을 만나보세요."
  },
  {
    slug: "packaging-philosophy",
    title: "플라스틱 대신 유리를 선택한 이유: 메종의 패키징 철학.",
    date: "2026년 5월 15일",
    read: "4분",
    excerpt: "지속 가능성은 단순한 구호가 아닌, 지구를 향한 우리의 변치 않는 약속입니다.",
    content: "모든 제품은 그 내면의 숭고한 퀄리티를 대변할 수 있는 옷을 입어야 합니다. 유리는 원료 본연의 활성 상태와 온전함을 안전하게 보존하고, 탄소 발자국을 줄이며, 선물과도 같은 프리미엄 언박싱 경험을 완성합니다."
  },
  {
    slug: "morning-routine-guide",
    title: "눈부신 아침 피부를 위한 완벽한 모닝 케어 가이드.",
    date: "2026년 5월 10일",
    read: "8분",
    excerpt: "매일 찬란하게 빛나는 결을 가꾸기 위한 가장 기본적인 첫 단계를 마스터해보세요.",
    content: "일관된 아침 스킨 루틴은 건강한 피부의 기초를 다집니다. 순한 클렌징부터 철저한 자외선 차단까지, 각 단계가 지닌 고유한 중요성을 설명해 드립니다. 당신의 라이프스타일과 고유한 피부 타입에 꼭 맞는 솔루션을 처방해보세요."
  },
  {
    slug: "sustainable-sourcing",
    title: "최상급 유기농 원료를 지속 가능하게 조달하는 메종의 여정.",
    date: "2026년 5월 5일",
    read: "6분",
    excerpt: "윤리적 원료 조달과 최첨단 바이오 스킨케어 과학의 조화로운 만남.",
    content: "모든 보태니컬 원료 뒤에는 자연과 공존하고자 하는 메종의 단단한 서사가 담겨 있습니다. 우리는 공정무역과 유기농 지속 가능한 농법을 준수하는 농부들과 파트너십을 맺어 원료를 수급합니다. 우리의 선택이 글로벌 생태계에 미치는 선한 영향력을 만나보세요."
  }
];

function CosmeticJournalPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-black selection:bg-black selection:text-white">
        <Header />
        
        <section className="pt-48 pb-16 md:pb-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="mb-16">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40 mb-4 block">저널</span>
              <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-tight leading-[1.5]">
                피부와 환경을 위한 의식 있는 뷰티에 대한 사색.
              </h1>
            </div>

            <div className="border-t border-black/10">
              {entries.map((entry) => (
                <Link key={entry.slug} href={`/ko/templates/OHMT010-cosmetic/journal/${entry.slug}`}>
                  <div className="py-10 px-6 grid md:grid-cols-[1fr_auto] gap-6 items-center group hover:bg-white transition-colors cursor-pointer border-b border-black/10">
                    <div>
                      <h3 className="text-[1.2rem] font-medium tracking-tight mb-2 group-hover:opacity-60 transition-opacity">{entry.title}</h3>
                      <div className="flex gap-6 text-[0.72rem] text-black/40 uppercase tracking-wider">
                        <span>{entry.date}</span>
                        <span>읽는 시간 {entry.read}</span>
                      </div>
                    </div>
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-black/20 group-hover:text-black transition-colors">자세히 보기</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function CosmeticJournalPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CosmeticJournalPageContent {...props} />
    </React.Suspense>
  );
}
