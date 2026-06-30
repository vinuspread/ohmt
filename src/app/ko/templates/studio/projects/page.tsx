"use client";
import React, { useState } from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { PageHeader } from "../_components/PageHeader";
import { SplitScreenSection } from "../_components/SplitScreenSection";
import { ProjectListItem } from "../_components/ProjectListItem";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function StudioProjectsPageContent() {
    const [filter, setFilter] = useState("all");

    const projects = [
        {
            id: "proj-1",
            title: "호수가 보이는 주택",
            category: "주택 설계",
            year: "2026",
            location: "서울, 강남",
            image: "/templates/OHMT006-studio/project-1.jpg",
            type: "residential",
            description: "미니멀리즘과 현대적 기능성을 결합한 럭셔리 주택. 자연채광을 극대화하고 정제된 소재의 조합으로 일상의 품질을 높이는 거주 공간을 실현했습니다.",
            details: "5,000평방미터 규모의 3층 주택으로 호수 전망을 활용한 오픈 플랜 설계. 명상 정원, 온천식 욕조, 천장까지 이어지는 도서관 등 각 공간이 주인의 라이프스타일을 반영합니다.",
            services: ["주택 설계", "소재 큐레이션", "맞춤 목공", "조경 통합"],
            gallery: ["/templates/OHMT006-studio/project-1.jpg", "/templates/OHMT006-studio/hero-2.jpg", "/templates/OHMT006-studio/hero-3.jpg"]
        },
        {
            id: "proj-2",
            title: "모던 테크 오피스",
            category: "상업공간",
            year: "2025",
            location: "부산, 해운대",
            image: "/templates/OHMT006-studio/project-2.jpg",
            type: "commercial",
            description: "생산성과 직원 복지를 동시에 고려한 최신 사무실 설계. 스칸디나비안 미니멀리즘 and 첨단 조명 시스템으로 현대적 업무 환경을 창출합니다.",
            details: "8,000평방미터 규모의 개방형 오피스로 협업 존, 집중 업무 구간, 임원실이 유기적으로 연결됩니다. 자연 오크, 버니쉬 스틸, 콘크리트 마감의 소재 팔레트와 서커디안 리듬을 고려한 조명 시스템이 특징입니다.",
            services: ["공간 계획", "인테리어 설계", "조명 설계", "가구 선택"],
            gallery: ["/templates/OHMT006-studio/project-2.jpg", "/templates/OHMT006-studio/hero-1.jpg", "/templates/OHMT006-studio/hero-2.jpg"]
        },
        {
            id: "proj-3",
            title: "부티크 호텔 로비",
            category: "호텔리티",
            year: "2025",
            location: "Basel, Switzerland",
            image: "/templates/OHMT006-studio/project-3.jpg",
            type: "exhibition",
            description: "조각과 공간 설계의 경계를 넘는 건축 설치미술. 기하학적 형태와 목재 구축이 만드는 몰입형 환경으로 지각을 재정의합니다.",
            details: "지속가능하게 수확한 목재로 구축된 1,200평방미터 규모의 파빌리온. 맞물리는 기하학적 형태들이 하루 종일 극적인 빛 패턴을 만들어냅니다. 방문객은 이동하면서 끊임없이 변화하는 공간을 경험하게 됩니다.",
            services: ["공간 설계", "소재 혁신", "구조 협업", "체험 설계"],
            gallery: ["/templates/OHMT006-studio/project-3.jpg", "/templates/OHMT006-studio/hero-3.jpg", "/templates/OHMT006-studio/hero-1.jpg"]
        }
    ];

    const filteredProjects = filter === "all" ? projects : projects.filter(p => p.type === filter);

    return (

      <TemplateWrapper theme={theme}>

        <main className="antialiased min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white relative overflow-hidden">
            <Header />

            <PageHeader
                category={"포트폴리오"}
                title={<>{"완성작"} <br /><span className="font-normal">{"모음."}</span></>}
                breadcrumb={["Studio", "프로젝트"]}
            />

            <section className="py-12 md:py-36 bg-white">
                <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col gap-10 md:gap-24">

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10 border-b border-black/5 pb-6 md:pb-10">
                        <div className="max-w-[680px]">
                            <h2 className="text-[clamp(1.8rem,4.5vw,4.5rem)] font-bold leading-[1.5] text-black break-keep">
                                {"물리적인 형태와 섬세한 텍스처가 구현하는 구조적 미학."}
                            </h2>
                        </div>

                        <div className="flex gap-6 md:gap-8 text-[13px] font-bold mb-0 md:mb-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
                            {[
                                { key: "all", label: "전체" },
                                { key: "commercial", label: "공간 큐레이션" },
                                { key: "residential", label: "비스포크 인테리어" },
                                { key: "exhibition", label: "오브제" },
                            ].map(({ key, label }) => (
                                <button
                                    key={key}
                                    onClick={() => setFilter(key)}
                                    className={`pb-2 border-b-2 transition-all whitespace-nowrap shrink-0 ${filter === key ? "border-black text-black" : "border-transparent text-black/40 hover:text-black"}`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-12 md:gap-24">
                        {filteredProjects.slice(0, 2).map((project) => (
                            <ProjectListItem key={project.id} project={project} />
                        ))}
                    </div>

                </div>
            </section>

            <SplitScreenSection
                bgClass="bg-[var(--color-bg-dark)]"
                textColorClass="text-white"
                borderColorClass="border-white/5"
                imageSrc="/templates/OHMT006-studio/hero-3.jpg"
                imageAlt="High-end furniture close up"
                imagePosition="right"
            >
                <div className="space-y-4 max-w-[480px]">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.5] break-keep">
                        {"비스포크 가구"} <br />
                        {"오브제 큐레이션"}
                    </h3>
                </div>
                <p className="text-[14px] text-white/50 leading-[1.8] font-normal max-w-[460px] break-keep">
                    {"맞춤형 가구 설계. 건축 조명과의 감각적인 상호작용을 위해 특별히 제작되는 맞춤형 기능성 조각들입니다."}
                </p>
            </SplitScreenSection>

            <section className="py-12 md:py-36 bg-white">
                <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col gap-12 md:gap-24">
                    <div className="grid grid-cols-1 gap-12 md:gap-24">
                        {filteredProjects.slice(2).map((project) => (
                            <ProjectListItem key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>

      </TemplateWrapper>
);
}


export default function StudioProjectsPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <StudioProjectsPageContent {...props} />
    </React.Suspense>
  );
}
