"use client";
import React from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { PageHeader } from "../_components/PageHeader";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const services = [
  {
    idx: "01",
    category: "공간 설계",
    title: "공간 설계",
    tagline: "공간의 용도와 동선을 바탕으로 기본 구조를 설계합니다.",
    desc: "현장 조건과 사용 목적을 분석해 공간의 배치와 동선을 계획합니다.\n구조와 설비, 수납과 가구 위치를 함께 검토해 실제 생활과 업무에 불편함이 없도록 설계합니다.",
    stats: [
      { value: "98.6%", label: "진행 방식" },
      { value: "6–14주", label: "소요 기간" },
      { value: "450+", label: "설계·시공" },
    ],
    process: [
      { step: "01", title: "현장 분석", desc: "현장을 실측하고 구조와 설비, 채광과 소음, 주변 환경을 확인합니다." },
      { step: "02", title: "공간 구성", desc: "필요한 공간을 정리하고 이동 동선과 수납, 가구 배치를 계획합니다." },
      { step: "03", title: "소재 선정", desc: "예산과 관리 방법, 조명과 소음 조건을 고려해 마감재를 제안합니다." },
      { step: "04", title: "시공 감리", desc: "주요 공정마다 현장을 확인하고 도면과 시방서에 맞게 시공되는지 점검합니다." },
    ],
    image: "/templates/OHMT006-studio/hero-1.jpg",
  },
  {
    idx: "02",
    category: "맞춤 인테리어",
    title: "마감·스타일링",
    tagline: "마감재와 조명, 가구와 패브릭을 한 흐름으로 제안합니다.",
    desc: "마감재는 색과 질감뿐 아니라 내구성과 관리 방법, 빛에 따라 달라지는 표면까지 확인해 선택합니다.\n실제 샘플을 현장 조명에서 비교한 뒤 공간에 적합한 조합을 제안합니다.",
    stats: [
      { value: "1,200+", label: "마감재 샘플" },
      { value: "0.1mm", label: "시공 기준" },
      { value: "국내·외", label: "소재 조달" },
    ],
    process: [
      { step: "01", title: "현장 환경 확인", desc: "채광과 조명, 소음과 시야, 기존 마감 상태를 종합적으로 살펴봅니다." },
      { step: "02", title: "소재 보드", desc: "후보 마감재를 실제 조명 아래에서 비교해 색과 질감의 조화를 확인합니다." },
      { step: "03", title: "조명 시뮬레이션", desc: "시간대별 자연광과 인공조명을 검토해 공간의 밝기와 눈부심을 조정합니다." },
      { step: "04", title: "설치 관리", desc: "타일과 패널, 도장과 목공 등 주요 마감 공정을 현장에서 확인합니다." },
    ],
    image: "/templates/OHMT006-studio/service-consulting.jpg",
  },
  {
    idx: "03",
    category: "가구·오브제 큐레이션",
    title: "맞춤 가구",
    tagline: "공간의 크기와 쓰임에 맞춰 가구를 별도로 제작합니다.",
    desc: "기성 제품으로 해결하기 어려운 크기와 기능이 필요할 때 맞춤 가구를 설계합니다.\n목재와 금속, 석재를 다루는 제작 파트너와 협업하며 도면과 샘플, 시제품 확인을 거쳐 완성합니다.",
    stats: [
      { value: "100%", label: "맞춤 제작" },
      { value: "8–20주", label: "제작 기간" },
      { value: "전문 공방", label: "제작 협력" },
    ],
    process: [
      { step: "01", title: "공간 분석", desc: "설치할 공간의 크기와 주변 동선, 사용 방식과 필요한 수납을 확인합니다." },
      { step: "02", title: "형태 설계", desc: "스케치와 도면, 3D 모델을 통해 크기와 비율, 구조와 마감을 검토합니다." },
      { step: "03", title: "장인 매칭", desc: "가구의 소재와 제작 방식에 맞는 전문 공방을 선정합니다." },
      { step: "04", title: "설치와 조정", desc: "현장에 설치한 뒤 수평과 간격, 문과 서랍의 작동 상태를 최종 조정합니다." },
    ],
    image: "/templates/OHMT006-studio/hero-3.jpg",
  },
  {
    idx: "04",
    category: "현장 관리",
    title: "시공 관리",
    tagline: "설계 내용이 현장에서 제대로 구현되도록 주요 공정을 관리합니다.",
    desc: "설계 도면과 시방서를 기준으로 시공 상태를 확인하고, 현장에서 발생하는 변경 사항과 자재 수급 문제를 기록해 대응합니다. 주요 공정은 다음 단계로 넘어가기 전에 품질과 치수를 점검합니다.",
    stats: [
      { value: "< 0.5%", label: "도면 반영" },
      { value: "주 3회", label: "현장 입회" },
      { value: "Zero", label: "최종 검수" },
    ],
    process: [
      { step: "01", title: "착공 전 협의", desc: "도면과 시방서, 공정표와 변경 절차를 시공사와 사전에 협의합니다." },
      { step: "02", title: "공정별 승인", desc: "주요 공정이 끝날 때마다 품질과 치수를 확인한 뒤 다음 작업을 진행합니다." },
      { step: "03", title: "현장 이슈 관리", desc: "현장 오차와 자재 변경, 일정 변동을 기록하고 대안을 협의합니다." },
      { step: "04", title: "최종 검수와 인도", desc: "완공 상태를 도면과 시방서에 맞춰 확인하고, 보완이 필요한 항목을 정리한 뒤 최종 인도합니다." },
    ],
    image: "/templates/OHMT006-studio/project-1.jpg",
  },
];

function StudioServicesPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
        <Header />

        <PageHeader
          category="우리의 전문성"
          title={<>루미나 스튜디오의 <br /><span className="font-normal">주요 서비스</span></>}
          breadcrumb={["스튜디오", "서비스"]}
        />

        {/* Services */}
        <div className="divide-y divide-black/8">
          {services.map((s, i) => (
            <section key={s.idx} className="py-16 md:py-24">
              <div className="max-w-[1720px] mx-auto px-8 md:px-16 lg:px-24">

                {/* Top: index + category */}
                <div className="flex items-baseline justify-between mb-10 md:mb-14">
                  <span className="text-[length:var(--text-display)] font-bold text-black/6 leading-none select-none">
                    {s.idx}
                  </span>
                  <span className="text-xs text-black/35 uppercase tracking-[0.2em]">
                    {s.category}
                  </span>
                </div>

                {/* Main grid: image + content */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>

                  {/* Image */}
                  <div className="overflow-hidden bg-black aspect-[4/3]">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-[1.03] transition-all duration-[1.5s] ease-out"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center space-y-8 md:space-y-10">
                    <div>
                      <h2 className="text-[length:var(--text-h2)] font-bold leading-[var(--leading-heading)] text-black mb-3">
                        {s.title}
                      </h2>
                      <p className="text-sm text-black/40 font-normal">{s.tagline}</p>
                    </div>

                    <p className="w-full whitespace-pre-line text-base font-normal leading-loose text-black/65">
                      {s.desc}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-0 border border-black/8 divide-x divide-black/8">
                      {s.stats.map((stat, j) => (
                        <div key={j} className="px-6 py-4 text-center">
                          <p className="text-[1.1rem] md:text-[1.3rem] font-bold text-black leading-none mb-1">{stat.value}</p>
                          <p className="text-xs text-black/35 uppercase tracking-wider">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Process */}
                    <div className="space-y-0 divide-y divide-black/8 border-t border-black/8" spellCheck={false}>
                      {s.process.map((phase) => (
                        <div key={phase.step} className="flex gap-6 py-4">
                          <span className="text-xs text-black/25 shrink-0 pt-1">{phase.step}</span>
                          <div className="space-y-0.5">
                            <p className="text-sm font-semibold text-black leading-snug">{phase.title}</p>
                            <p className="text-sm text-black/45 font-normal leading-relaxed">{phase.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="bg-[var(--color-bg-dark)] text-white py-16 md:py-24">
          <div className="max-w-[1720px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h3 className="text-[length:var(--text-h2)] font-bold leading-[var(--leading-heading)] mb-4">
                새로운 공간을<br />계획하고 있나요?
              </h3>
              <div className="flex flex-wrap gap-6 text-xs font-bold text-white/35">
                <span>✓ 설계부터 시공까지 일관된 관리</span>
                <span>✓ 예산과 일정에 맞춘 진행</span>
                <span>✓ 주거·상업·호텔 공간 경험</span>
              </div>
            </div>
            <Link
              href="/ko/templates/OHMT006-studio/contact"
              className="group shrink-0 flex items-center gap-4 px-8 py-4 border border-white bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-white transition-all duration-300"
            >
              프로젝트 상담 신청
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function StudioServicesPage() {
  return (
    <React.Suspense fallback={null}>
      <StudioServicesPageContent />
    </React.Suspense>
  );
}
