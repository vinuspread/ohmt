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
        { value: "180+", label: "완료 프로젝트", desc: "주거 공간부터 오피스와 상업 공간까지 다양한 프로젝트를 설계하고 완성했습니다." },
        { value: "98%", label: "고객 만족도", desc: "충분한 상담과 체계적인 진행 과정을 바탕으로 쌓아온 고객 평가입니다." },
        { value: "8+", label: "스튜디오 운영", desc: "8년 동안 공간의 쓰임과 완성도를 함께 고민해 왔습니다." }
    ];
    const history: Array<{ year: string; title: string; category: string }> = [
        { year: "2026", title: "올해의 주거 공간 디자인", category: "대한민국 공간디자인 어워드" },
        { year: "2025", title: "지속 가능한 공간 디자인상", category: "녹색건축협의회" },
        { year: "2024", title: "주목할 만한 신진 스튜디오", category: "월간 인테리어디자인" }
    ];
    const team: Array<{ name: string; role: string; image: string }> = [
        { name: "Elena Moreau", role: "건축·공간 디렉터", image: '/templates/OHMT006-studio/team-1.jpg' },
        { name: "Daniel Foster", role: "가구·오브제 디렉터", image: '/templates/OHMT006-studio/team-2.jpg' },
        { name: "Claire Bennett", role: "수석 인테리어 디자이너", image: '/templates/OHMT006-studio/team-3.jpg' },
        { name: "Marcus Reed", role: "프로젝트 디렉터", image: '/templates/OHMT006-studio/team-4.png' }
    ];

    return (

      <TemplateWrapper theme={theme}>

        <main className="antialiased min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white relative overflow-hidden">
            <Header />
            <PageHeader 
                category={"스튜디오 소개"}
                title={<>{"루미나"} <br /><span className="font-normal">{"스튜디오"}</span></>}
                breadcrumb={["루미나 스튜디오"]}
            />

            {/* 2. Philosophy */}
            <section className="py-12 md:py-36 bg-white text-black border-t border-b border-black/5">
                <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="grid lg:grid-cols-12 gap-8 md:gap-20 items-start">
                        <div className="lg:col-span-5 space-y-3 md:space-y-4">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-[var(--leading-heading)] text-black break-keep">
                                {"생활 방식에서 출발해 오래 편안한 공간을 설계합니다."}
                            </h2>
                        </div>
                        <div className="lg:col-span-7 space-y-8 md:space-y-20">
                            <p className="text-sm md:text-base lg:text-lg text-black/50 leading-loose font-normal break-keep">
                                {"좋은 공간은 멋진 이미지보다 그곳에서 생활하고 일하는 사람을 이해하는 데서 시작합니다. 루미나 스튜디오는 상담을 통해 필요한 기능과 선호하는 분위기, 예산과 일정을 함께 정리합니다. 이후 공간 구성과 자재, 조명, 가구를 하나의 흐름으로 설계하고 시공 과정까지 꾸준히 확인합니다."}
                            </p>
                            {/* Stats - 모바일 1열 */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 border-t border-black/5 pt-8 md:pt-12">
                                {stats.map((s: any, idx: number) => (
                                    <div key={idx} className="flex sm:flex-col gap-4 sm:gap-0 items-center sm:items-start sm:space-y-4">
                                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-black shrink-0">{s.value}</div>
                                        <div className="space-y-1 sm:space-y-2">
                                            <h4 className="text-xs font-bold text-black/50 uppercase">{s.label}</h4>
                                            <p className="text-sm md:text-sm text-black/60 leading-relaxed font-normal break-keep">{s.desc}</p>
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
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[var(--leading-heading)] text-black break-keep">
                        {"계획부터 시공까지,"} <br />{"한 기준으로 관리합니다."}
                    </h3>
                </div>
                <p className="text-sm md:text-sm text-black/50 leading-loose font-normal break-keep">
                    {"동선과 수납 계획, 조명과 마감재, 가구와 패브릭까지 공간을 이루는 요소를 함께 검토합니다. 설계 의도가 현장에서 달라지지 않도록 주요 공정과 마감 상태를 확인하고, 실제 사용에 불편함이 없는지 최종 점검한 뒤 공간을 인도합니다."}
                </p>
                <div className="pt-2 md:pt-4">
                    <Link href={`/ko/templates/OHMT006-studio/contact`} className="group inline-flex items-center gap-4 border-b-2 border-black pb-2 text-xs font-bold text-black transition-opacity hover:opacity-60 uppercase">
                        {"프로젝트 상담 신청"} <ArrowUpRight size={14} />
                    </Link>
                </div>
            </SplitScreenSection>

            {/* 4. Awards */}
            <section className="py-12 md:py-36 bg-[var(--color-bg-dark)] text-white">
                <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24 space-y-8 md:space-y-16">
                    <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white leading-[var(--leading-heading)] break-keep">
                        {"프로젝트를 통해"} <br />{"받은 주요 평가와 수상."}
                    </h2>
                    <div className="border-t border-white/5 divide-y divide-white/5">
                        {history.map((h: any, idx: number) => (
                            <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-2 md:gap-6 py-6 md:py-10 items-start group hover:bg-white/5 px-2 md:px-4 transition-colors duration-300">
                                <div className="sm:col-span-2 text-xs text-white/40 font-bold">{h.year}</div>
                                <div className="sm:col-span-6 text-base md:text-xl font-bold text-white">{h.title}</div>
                                <div className="sm:col-span-3 text-xs md:text-xs font-bold text-white/40 uppercase">{h.category}</div>
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
                        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black leading-[var(--leading-heading)] break-keep">
                            {"프로젝트를 함께 만드는 사람들."}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {team.map((t, idx) => (
                            <div key={idx} className="group relative overflow-hidden bg-white">
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <img loading="lazy" src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out" />
                                </div>
                                <div className="relative z-10 space-y-1 bg-white py-6">
                                    <h4 className="text-xl font-bold text-black">{t.name}</h4>
                                    <p className="text-xs font-bold text-black/50 uppercase">{t.role}</p>
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


export default function StudioAboutPage() {
  return (
    <React.Suspense fallback={null}>
      <StudioAboutPageContent />
    </React.Suspense>
  );
}
