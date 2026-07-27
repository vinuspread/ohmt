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
            title: "한강이 보이는 주택",
            category: "주택 설계",
            year: "2026",
            location: "서울, 강남",
            image: "/templates/OHMT006-studio/project-1.jpg",
            type: "residential",
            description: "한강 전망과 자연채광을 살리고, 가족의 생활 방식에 맞춰 공용 공간과 개인 공간을 분리한 주택입니다.",
            details: "약 500㎡ 규모의 3층 주택입니다. 거실과 주방에서는 한강 전망을 넓게 볼 수 있도록 창과 동선을 배치했고, 작은 정원과 욕조가 있는 휴식 공간, 높은 책장을 갖춘 서재를 함께 구성했습니다.",
            services: ["주택 설계", "마감재 선정", "맞춤 목공", "실내·외 조경 계획"],
            gallery: ["/templates/OHMT006-studio/project-1.jpg", "/templates/OHMT006-studio/hero-2.jpg", "/templates/OHMT006-studio/hero-3.jpg"]
        },
        {
            id: "proj-2",
            title: "테크 기업 오피스",
            category: "상업공간",
            year: "2025",
            location: "부산, 해운대",
            image: "/templates/OHMT006-studio/project-2.jpg",
            type: "commercial",
            description: "협업과 집중 업무가 모두 가능하도록 공간을 나누고, 자연광과 조명 계획을 함께 고려한 테크 기업의 오피스입니다.",
            details: "약 800㎡ 규모의 오피스로 협업 공간과 집중 업무석, 회의실과 임원 공간을 구분하면서도 이동이 자연스럽도록 구성했습니다. 오크와 금속, 노출 콘크리트를 주요 소재로 사용하고 시간대에 따라 밝기가 달라지는 조명을 적용했습니다.",
            services: ["공간 계획", "인테리어 설계", "조명 설계", "가구·집기 선정"],
            gallery: ["/templates/OHMT006-studio/project-2.jpg", "/templates/OHMT006-studio/hero-1.jpg", "/templates/OHMT006-studio/hero-2.jpg"]
        },
        {
            id: "proj-3",
            title: "부티크 호텔 로비",
            category: "호텔·숙박",
            year: "2025",
            location: "Basel, Switzerland",
            image: "/templates/OHMT006-studio/project-3.jpg",
            type: "exhibition",
            description: "체크인과 대기, 휴식과 이동이 겹치지 않도록 동선을 정리하고 지역의 소재와 색을 반영한 부티크 호텔 로비입니다.",
            details: "약 320㎡ 규모의 로비에 리셉션과 라운지, 작은 바와 수하물 보관 공간을 배치했습니다. 지역에서 생산한 목재와 석재를 사용하고, 창과 루버를 통해 시간대에 따라 자연광이 달라지도록 설계했습니다.",
            services: ["공간 설계", "지역 소재 활용", "건축·구조 협업", "고객 동선 설계"],
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
                title={<>{"완료 프로젝트"} <br /><span className="font-normal">{"포트폴리오."}</span></>}
                breadcrumb={["Studio", "프로젝트"]}
            />

            <section className="py-12 md:py-36 bg-white">
                <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col gap-10 md:gap-24">

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10 border-b border-black/5 pb-6 md:pb-10">
                        <div className="max-w-[1100px]">
                            <h2 className="break-keep text-3xl font-bold leading-[var(--leading-heading)] text-black md:text-4xl lg:text-5xl">
                                {"주거와 상업공간, 호텔과 맞춤 가구까지"}
                                <br />
                                {"루미나의 주요 작업을 소개합니다."}
                            </h2>
                        </div>

                        <div className="flex gap-6 md:gap-8 text-xs font-bold mb-0 md:mb-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
                            {[
                                { key: "all", label: "전체" },
                                { key: "commercial", label: "공간 설계" },
                                { key: "residential", label: "맞춤 인테리어" },
                                { key: "exhibition", label: "맞춤 가구" },
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
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-[var(--leading-heading)] break-keep">
                        {"맞춤 제작 가구"} <br />
                        {"가구·오브제 큐레이션"}
                    </h3>
                </div>
                <p className="text-sm text-white/50 leading-loose font-normal max-w-[460px] break-keep">
                    {"공간의 크기와 용도에 맞춰 가구와 조명을 설계하고, 제작과 설치까지 관리합니다."}
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
