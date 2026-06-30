"use client";
import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { PageHeader } from "../_components/PageHeader";
import { SplitScreenSection } from "../_components/SplitScreenSection";
import { ArrowUpRight, Award } from "lucide-react";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function StudioAboutPageContent() {
    const stats: Array<{ value: string; label: string; desc: string }> = [
        { value: "180+", label: "공간 프로젝트", desc: "전국의 하이엔드 단독주택, 상업 공간 및 호스피탈리티 명작 설계." },
        { value: "98%", label: "클라이언트 만족도", desc: "사려 깊은 디자인 철학과 빈틈없는 실행력으로 다져진 신뢰." },
        { value: "8+", label: "아틀리에 헤리티지", desc: "8년이 넘는 시간 동안 증명해 온 창의적 공간의 가치와 명성." }
    ];
    const history: Array<{ year: string; title: string; category: string }> = [
        { year: "2026", title: "올해의 최고 주거 건축 설계상", category: "대한민국 공간 디자인 어워드" },
        { year: "2025", title: "지속 가능한 공간 디자인 리더십상", category: "녹색 건축 협의회" },
        { year: "2024", title: "가장 주목받는 신진 아틀리에상", category: "월간 인테리어 디자인 매거진" }
    ];
    const team: Array<{ name: string; role: string; image: string }> = [
        { name: "박사라", role: "크리에이티브 디렉터", image: '/templates/OHMT006-studio/team-1.jpg' },
        { name: "이제임스", role: "시니어 디자이너", image: '/templates/OHMT006-studio/team-2.jpg' },
        { name: "엠마 로드리게스", role: "프로젝트 매니저", image: '/templates/OHMT006-studio/team-3.jpg' }
    ];

    return (

      <TemplateWrapper theme={theme}>

        <main className="antialiased min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white relative overflow-hidden">
            <Header />
            <PageHeader 
                category={"우리 소개"} 
                title={<>{"루미나"} <br /><span className="font-normal">{"스튜디오."}</span></>} 
                breadcrumb={["회사소개"]} 
            />

            {/* 2. Philosophy */}
            <section className="py-12 md:py-36 bg-white text-black border-t border-b border-black/5">
                <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="grid lg:grid-cols-12 gap-8 md:gap-20 items-start">
                        <div className="lg:col-span-5 space-y-3 md:space-y-4">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-[1.5] text-black break-keep">
                                {"이유가 있는 설계, 본질을 담는 공간."}
                            </h2>
                        </div>
                        <div className="lg:col-span-7 space-y-8 md:space-y-20">
                            <p className="text-[15px] md:text-[16px] lg:text-[18px] text-black/50 leading-[1.8] font-normal break-keep">
                                {"진정한 인테리어 예술은 클라이언트의 삶을 깊이 경청하는 것에서 시작한다고 믿습니다. 숙련된 건축 디자이너와 현장 스페셜리스트로 구성된 루미나 스튜디오의 팀은 클라이언트의 목소리 너머에 숨겨진 라이프스타일, 미학적 선호, 그리고 차원 높은 염원까지 완벽하게 공명합니다. 첫 개념 구상부터 마침내 완공되는 찬란한 순간까지, 우리는 보이지 않는 모든 세부 디테일을 정교하게 통제하여 상상 이상의 특별한 공간을 선사합니다."}
                            </p>
                            {/* Stats - 모바일 1열 */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 border-t border-black/5 pt-8 md:pt-12">
                                {stats.map((s: any, idx: number) => (
                                    <div key={idx} className="flex sm:flex-col gap-4 sm:gap-0 items-center sm:items-start sm:space-y-4">
                                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-black shrink-0">{s.value}</div>
                                        <div className="space-y-1 sm:space-y-2">
                                            <h4 className="text-[13px] font-bold text-black/50 uppercase">{s.label}</h4>
                                            <p className="text-[15px] md:text-[14px] text-black/60 leading-relaxed font-normal break-keep">{s.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Split Screen */}
            <SplitScreenSection bgClass="bg-white" textColorClass="text-black" borderColorClass="border-transparent" imageSrc="/templates/OHMT006-studio/hero-2.jpg" imageAlt="Studio interior showcase" imagePosition="left">
                <div className="space-y-3 md:space-y-4">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.5] text-black break-keep">
                        {"사려 깊은 마스터플랜,"} <br />{"빈틈없는 정밀 시공."}
                    </h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-black/50 leading-[1.8] font-normal break-keep">
                    {"입체적인 공간 흐름 설계와 독창적인 조명 디자인, 마감재 솔루션부터 명작 가구 큐레이션 및 패브릭 스타일링까지 공간 창조의 모든 여정을 세심하게 조율합니다. 조명의 각도 하나, 가구의 보이지 않는 모서리에 이르기까지, 디테일을 향한 루미나 스튜디오의 집요한 관심은 개별 요소들이 완벽히 조화를 이뤄 삶의 품격이 온전히 묻어나는 응집력 있는 공간을 탄생시킵니다."}
                </p>
                <div className="pt-2 md:pt-4">
                    <Link href={`/ko/templates/OHMT006-studio/contact`} className="group inline-flex items-center gap-4 border-b-2 border-black pb-2 text-[13px] font-bold text-black transition-opacity hover:opacity-60 uppercase">
                        {"상담 예약하기"} <ArrowUpRight size={14} />
                    </Link>
                </div>
            </SplitScreenSection>

            {/* 4. Awards */}
            <section className="py-12 md:py-36 bg-[var(--color-bg-dark)] text-white">
                <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24 space-y-8 md:space-y-16">
                    <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white leading-none break-keep">
                        {"공간의 예술적 가치로"} <br />{"인정받은 영광의 순간들."}
                    </h2>
                    <div className="border-t border-white/5 divide-y divide-white/5">
                        {history.map((h: any, idx: number) => (
                            <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-2 md:gap-6 py-6 md:py-10 items-start group hover:bg-white/5 px-2 md:px-4 transition-colors duration-300">
                                <div className="sm:col-span-2 text-[13px] text-white/40 font-bold">{h.year}</div>
                                <div className="sm:col-span-6 text-base md:text-xl font-bold text-white">{h.title}</div>
                                <div className="sm:col-span-3 text-[12px] md:text-[13px] font-bold text-white/40 uppercase">{h.category}</div>
                                <div className="sm:col-span-1 text-right hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Award size={18} className="text-white ml-auto" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rhythm Layer 2 */}
            <section className="py-10 md:py-24 bg-white">
                <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
                        <div className="md:col-span-6 aspect-[4/3] overflow-hidden">
                            <img loading="lazy" src="/templates/OHMT006-studio/hero-3.jpg" alt="Travertine light curation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out" />
                        </div>
                        <div className="md:col-span-6 aspect-[4/3] overflow-hidden md:mt-16">
                            <img loading="lazy" src="/templates/OHMT006-studio/project-3.jpg" alt="Aluminum geometric casing" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Team */}
            <section className="py-12 md:py-36 bg-white border-t border-black/5">
                <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24 space-y-8 md:space-y-16">
                    <div className="text-center max-w-xl mx-auto">
                        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black leading-none break-keep">
                            {"공간을 빚는 아틀리에 마스터들."}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                        {team.map((t, idx) => (
                            <div key={idx} className="group relative overflow-hidden bg-white">
                                <div className="aspect-[3/4] overflow-hidden relative">
                                    <img loading="lazy" src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out" />
                                </div>
                                <div className="py-6 md:p-8 space-y-1 md:space-y-1.5 bg-white relative z-10">
                                    <h4 className="text-xl md:text-2xl font-bold text-black">{t.name}</h4>
                                    <p className="text-[13px] font-bold text-black/50 uppercase">{t.role}</p>
                                </div>
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


export default function StudioAboutPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <StudioAboutPageContent {...props} />
    </React.Suspense>
  );
}
