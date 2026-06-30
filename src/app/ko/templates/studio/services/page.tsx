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
    category: "공간 건축",
    title: "공간 큐레이션",
    tagline: "순수한 기하학적 비례와 엄격한 설계의 조화.",
    desc: "단순한 물리적 공간을 밀도 높은 기능적 환경으로 재해석합니다. 동선의 흐름, 구조적 경계, 사소한 자재 선택에 이르기까지 모든 요소는 그 공간에 머무는 이들의 행동 패턴을 정밀하게 계산한 결과입니다.",
    stats: [
      { value: "98.6%", label: "정밀도" },
      { value: "6–14주", label: "소요 기간" },
      { value: "450+", label: "완성 공간" },
    ],
    process: [
      { step: "01", title: "현장 분석", desc: "정밀 치수 측량, 구조적 하중 분석 및 주변 조도 감사." },
      { step: "02", title: "기본 설계", desc: "공간 시퀀싱과 밀도 계획. 모든 면적에 독창적인 기능과 가치를 부여합니다." },
      { step: "03", title: "소재 선정", desc: "조도·소음 차단·촉감 기준에 맞춰 면별 마감재를 엄선합니다." },
      { step: "04", title: "시공 감리", desc: "주요 공정마다 전문가가 직접 현장에 입회하여 엄격하게 시공 품질을 관리합니다." },
    ],
    image: "/templates/OHMT006-studio/hero-1.jpg",
  },
  {
    idx: "02",
    category: "맞춤 인테리어",
    title: "비스포크 스타일링",
    tagline: "모든 마감은 선택의 결과이며, 모든 선택은 공간의 철학이 됩니다.",
    desc: "소재 선정은 감각에만 의존하지 않고 철저한 검증을 바탕으로 합니다. 빛의 반사율, 음향적 특성, 마감재 고유의 질감을 다각도로 분석하여 1,200여 개의 샘플 중 공간에 최적화된 마감재를 엄선합니다.",
    stats: [
      { value: "1,200+", label: "소재 라이브러리" },
      { value: "0.1mm", label: "허용 공차" },
      { value: "12개국", label: "소재 원산지" },
    ],
    process: [
      { step: "01", title: "감각 감사", desc: "대상 공간의 채광, 음향 및 시각적 조화를 종합적으로 평가합니다." },
      { step: "02", title: "큐레이션 보드", desc: "실제 현장 조명 조건 아래에서 엄선된 마감재 후보군을 매칭하고 테스트합니다." },
      { step: "03", title: "조명 시뮬레이션", desc: "빛을 공간의 중요 소재로 다루며, 시간대에 따른 마감 표면의 반사율을 시뮬레이션합니다." },
      { step: "04", title: "설치 관리", desc: "주요 패널 설치 및 마감 공정 시 자재 정렬 기준을 현장에서 직접 감리합니다." },
    ],
    image: "/templates/OHMT006-studio/hero-2.jpg",
  },
  {
    idx: "03",
    category: "오브제 큐레이션",
    title: "맞춤 가구",
    tagline: "공간을 위해 완성된 단 하나의 기능적 조각.",
    desc: "공간의 비례와 성격에 맞춰 오직 단 하나의 커스텀 가구를 제작합니다. 금속, 석재, 목재 가공 분야의 장인 파트너들과 긴밀히 협력하여 규격화된 기성 가구로는 담아낼 수 없는 품격과 정성을 구현합니다.",
    stats: [
      { value: "100%", label: "커스텀 제작" },
      { value: "8–20주", label: "피스당 기간" },
      { value: "18곳", label: "공방 파트너" },
    ],
    process: [
      { step: "01", title: "공간 분석", desc: "가구가 위치할 공간의 스케일과 동선에 미치는 영향력을 면밀히 계산합니다." },
      { step: "02", title: "형태 설계", desc: "제작 전, 형태적 비율을 맞추기 위해 정교한 스케치와 3D 모델링 작업을 선행합니다." },
      { step: "03", title: "장인 매칭", desc: "설계된 가구의 디자인 특성과 제작 기법에 가장 최적화된 장인 공방을 연결합니다." },
      { step: "04", title: "미세 조율", desc: "공간에 가구가 안착할 때까지 배치를 밀리미터 단위로 미세 조절합니다." },
    ],
    image: "/templates/OHMT006-studio/hero-3.jpg",
  },
  {
    idx: "04",
    category: "전략적 감리",
    title: "시공 관리",
    tagline: "도면 위의 약속이 완벽한 공간으로 실현되기까지.",
    desc: "설계 도면의 무결성이 현장에서 어긋나지 않도록 엄격한 시공 감리를 진행합니다. 현장 품질 기준을 철저히 모니터링하고 시공 과정에서 발생할 수 있는 오차를 실시간으로 제어하여 디자인의 왜곡 없는 준공을 보장합니다.",
    stats: [
      { value: "< 0.5%", label: "이탈률" },
      { value: "주 3회", label: "현장 입회" },
      { value: "Zero", label: "타협 없는 준공" },
    ],
    process: [
      { step: "01", title: "착공 전 협의", desc: "구조물 허용 오차 기준과 대체 시공 정책을 명문화하고 사전에 합의합니다." },
      { step: "02", title: "공정별 승인", desc: "주요 공정 완료 시 다음 단계로 넘어가기 전 엄격하게 품질 검사 및 승인을 수행합니다." },
      { step: "03", title: "이슈 실시간 관리", desc: "현장 오차나 자재 수급 변수를 실시간 리포트로 관리하여 대처합니다." },
      { step: "04", title: "최종 검수 인도", desc: "도면 및 시방서 사양과 최종 준공 상태를 1:1 대조하여 결함을 완벽히 보완한 후 인도합니다." },
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
          title={<>제공하는 <br /><span className="font-normal">서비스.</span></>}
          breadcrumb={["스튜디오", "서비스"]}
        />

        {/* Services */}
        <div className="divide-y divide-black/8">
          {services.map((s, i) => (
            <section key={s.idx} className="py-16 md:py-24">
              <div className="max-w-[1720px] mx-auto px-8 md:px-16 lg:px-24">

                {/* Top: index + category */}
                <div className="flex items-baseline justify-between mb-10 md:mb-14">
                  <span className="text-[clamp(3.5rem,8vw,7rem)] font-bold text-black/6 leading-none select-none">
                    {s.idx}
                  </span>
                  <span className="text-[12px] text-black/35 uppercase tracking-[0.2em]">
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
                      <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.5] text-black mb-3">
                        {s.title}
                      </h2>
                      <p className="text-[15px] text-black/40 font-normal">{s.tagline}</p>
                    </div>

                    <p className="text-[16px] md:text-[17px] text-black/65 leading-[1.75] font-normal max-w-[520px]">
                      {s.desc}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-0 border border-black/8 divide-x divide-black/8">
                      {s.stats.map((stat, j) => (
                        <div key={j} className="px-6 py-4 text-center">
                          <p className="text-[1.1rem] md:text-[1.3rem] font-bold text-black leading-none mb-1">{stat.value}</p>
                          <p className="text-[11px] text-black/35 uppercase tracking-wider">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Process */}
                    <div className="space-y-0 divide-y divide-black/8 border-t border-black/8" spellCheck={false}>
                      {s.process.map((phase) => (
                        <div key={phase.step} className="flex gap-6 py-4">
                          <span className="text-[11px] text-black/25 shrink-0 pt-1">{phase.step}</span>
                          <div className="space-y-0.5">
                            <p className="text-[14px] font-semibold text-black leading-snug">{phase.title}</p>
                            <p className="text-[15px] text-black/45 font-normal leading-relaxed">{phase.desc}</p>
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
              <h3 className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1.5] mb-4">
                공간 시스템을<br />구축할 준비가 되셨나요?
              </h3>
              <div className="flex flex-wrap gap-6 text-[12px] font-bold text-white/35">
                <span>✓ 98.6% 정밀도</span>
                <span>✓ 타협 없는 준공</span>
                <span>✓ 전 세계 450개 이상의 공간</span>
              </div>
            </div>
            <Link
              href="/ko/templates/OHMT006-studio/contact"
              className="group shrink-0 flex items-center gap-4 px-8 py-4 border border-white bg-white text-black text-[13px] font-bold uppercase tracking-widest hover:bg-transparent hover:text-white transition-all duration-300"
            >
              프로젝트 시작
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function StudioServicesPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <StudioServicesPageContent {...props} />
    </React.Suspense>
  );
}
