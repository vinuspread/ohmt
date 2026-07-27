"use client";
import { Suspense } from "react";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { TeamSection } from "./_components/TeamSection";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";

function StudioHomeContent() {
    const [activeHeroIndex, setActiveHeroIndex] = useState<number>(0);
    const videoRef = React.useRef<HTMLVideoElement>(null);
    React.useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
        }
    }, []);

    const fields = [
        { title: "공간 설계", subTitle: "절제된 선과 비례", location: "서울, 강남", desc: "불필요한 장식을 덜어내고 동선과 비례, 수납 기능에 집중한 주거 공간입니다.\n밝은 석재와 따뜻한 원목을 함께 사용해 차분하면서도 편안한 분위기를 만들었습니다.", idx: "01", image: "/templates/OHMT006-studio/hero-1.jpg" },
        { title: "맞춤 인테리어", subTitle: "자연광을 살린 공간", location: "경주, 보문동", desc: "창으로 들어오는 자연광과 간접조명이 시간대에 따라 공간의 표정을 바꾸도록 설계했습니다.\n트래버틴과 원목의 질감을 살려 편안하고 차분한 분위기를 완성했습니다.", idx: "02", image: "/templates/OHMT006-studio/hero-2.jpg" },
        { title: "맞춤 가구", subTitle: "공간에 맞춘 가구와 집기", location: "제주, 서귀포", desc: "공간의 크기와 동선에 맞춰 테이블과 수납장, 조명과 집기를 별도로 설계했습니다.\n형태뿐 아니라 수납과 관리, 실제 사용 방식까지 고려해 제작했습니다.", idx: "03", image: "/templates/OHMT006-studio/hero-3.jpg" },
    ];

    const featuredProjects = [
        {
            id: "proj-1",
            title: "한강이 보이는 주택",
            category: "주택 설계",
            year: "2026",
            location: "서울, 강남",
            image: "/templates/OHMT006-studio/project-1.jpg"
        },
        {
            id: "proj-2",
            title: "테크 기업 오피스",
            category: "상업공간",
            year: "2025",
            location: "부산, 해운대",
            image: "/templates/OHMT006-studio/project-2.jpg"
        }
    ];

    const activeHeroField = fields[activeHeroIndex];

    const handleNext = () => setActiveHeroIndex((prev) => (prev + 1) % fields.length);
    const handlePrev = () => setActiveHeroIndex((prev) => (prev - 1 + fields.length) % fields.length);

    return (
        <TemplateWrapper theme={theme}>
            <main className="antialiased min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white relative overflow-hidden">
                <Header />

                {/* Side Tickers - xl only */}
                <div className="hidden xl:flex fixed left-10 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-40 pointer-events-none mix-blend-difference">
                    <span className="text-xs text-white/40 font-bold whitespace-nowrap [writing-mode:vertical-rl] rotate-180">{"Established in 2026"}</span>
                    <div className="w-[1px] h-16 bg-white/25" />
                    <span className="text-xs text-white/80 font-bold whitespace-nowrap [writing-mode:vertical-rl] rotate-180">{"Spatial Rigor"}</span>
                </div>
                <div className="hidden xl:flex fixed right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-40 pointer-events-none mix-blend-difference">
                    <span className="text-xs text-white/40 font-bold whitespace-nowrap [writing-mode:vertical-rl]">{"Minimal Architecture"}</span>
                    <div className="w-[1px] h-16 bg-white/25" />
                    <span className="text-xs text-white/60 font-bold whitespace-nowrap [writing-mode:vertical-rl]">{"Scroll for Sense"}</span>
                </div>

                {/* 1. Hero */}
                <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-between">
                    <div className="absolute inset-0 z-0">
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover brightness-[0.78] transition-opacity duration-1000"
                        >
                            <source src="https://pub-10d6d534a06c495c8b45f39cfed47497.r2.dev/studio-hero-bg.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />
                    </div>

                    {/* Heading */}
                    <div className="relative z-20 max-w-[1720px] mx-auto w-full px-6 md:px-16 lg:px-24 h-full flex flex-col justify-center">
                        <div className="space-y-5 md:space-y-8 max-w-5xl">
                            <span className="text-xs font-bold text-white/60 block">{"ARCHITECTURAL STUDIO"}</span>
                            <h1 className="text-[length:var(--text-display)] font-bold leading-[var(--leading-heading)] text-white break-keep">
                                {"좋은 공간은"}<br /><span className="font-serif font-normal lowercase text-white/90">{"생활과 일을 자연스럽게 담아냅니다."}</span>
                            </h1>
                            <div className="pt-2 md:pt-4">
                                <Link
                                    href="/ko/templates/OHMT006-studio/contact"
                                    className="inline-flex items-center gap-4 border border-white bg-white/10 hover:bg-white hover:text-black text-white px-6 md:px-8 py-3 md:py-4 text-xs font-bold backdrop-blur-md transition-all duration-300 rounded-none"
                                >
                                    {"상담 및 문의"}
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Info Bar */}
                    <div className="relative z-20 w-full">
                        <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
                            <div className="w-full flex items-stretch bg-[#111111]">
                                {/* Thumbnail - md+ only */}
                                <div className="hidden md:block w-2/5 shrink-0 relative overflow-hidden group/thumb cursor-pointer md:h-[240px]">
                                    <img
                                        src={fields[(activeHeroIndex + 1) % fields.length].image}
                                        alt="Next slide"
                                        className="w-full h-full object-cover opacity-70 group-hover/thumb:opacity-100 group-hover/thumb:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover/thumb:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                                        <Play size={12} className="fill-white text-white opacity-70" />
                                    </div>
                                </div>

                                {/* Text + Arrows */}
                                <div className="flex-1 min-w-0 flex flex-col justify-center gap-6 px-5 md:px-10 py-5 md:py-0 md:h-[240px]">
                                    <div className="flex flex-col gap-1.5">
                                        <div className="flex flex-wrap items-center gap-2 md:gap-4">
                                            <h3 className="text-base md:text-xl font-bold text-white">{activeHeroField.subTitle}</h3>
                                            <span className="text-xs text-white/40">- {activeHeroField.location}</span>
                                        </div>
                                        <p className="whitespace-pre-line text-sm text-white/50 font-normal leading-relaxed line-clamp-3 md:line-clamp-none">{activeHeroField.desc}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button onClick={handlePrev} className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/20 hover:border-white text-white flex items-center justify-center transition-colors">
                                            <ChevronLeft size={13} />
                                        </button>
                                        <button onClick={handleNext} className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/20 hover:border-white text-white flex items-center justify-center transition-colors">
                                            <ChevronRight size={13} />
                                        </button>
                                        <span className="text-xs text-white/40 ml-1">0{activeHeroIndex + 1} / 03</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Manifesto */}
                <section className="bg-[var(--color-bg-dark)] text-white py-16 md:py-40 border-b border-white/10">
                    <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
                            <div className="lg:col-span-5 space-y-3 md:space-y-4">
                                <span className="text-xs text-white/40 font-bold block">{"설계 기준"}</span>
                                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-[var(--leading-heading)] text-white break-keep">
                                    {"동선과 빛,"} <br />{"소재와 쓰임의 균형."}
                                </h2>
                            </div>
                            <div className="lg:col-span-7 space-y-10 md:space-y-16">
                                <p className="whitespace-pre-line break-keep text-sm font-normal leading-[var(--leading-body)] text-white/60 md:text-base lg:text-lg">
                                    {"공간을 설계할 때는 먼저 사람이 어떻게 이동하고 머무는지 살핍니다.\n필요한 기능을 정리한 뒤 자연광과 인공조명, 수납과 가구, 마감재를 하나의 흐름으로 연결합니다.\n보기 좋은 장면뿐 아니라 매일 사용할 때 편안한 공간을 만드는 것이 우리의 기준입니다."}
                                </p>
                                <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-white/10 pt-8 md:pt-12">
                                    <div className="space-y-2">
                                        <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">180+</div>
                                        <span className="text-xs font-bold text-white/40 block">{"프로젝트"}</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">98%</div>
                                        <span className="text-xs font-bold text-white/40 block">{"고객 만족도"}</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">8+</div>
                                        <span className="text-xs font-bold text-white/40 block">{"운영 기간"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Rhythm Layer */}
                <section className="py-14 md:py-32 bg-white">
                    <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
                            <div className="md:col-span-4 aspect-[3/4] overflow-hidden border border-black/10 shadow-sm relative">
                                <img loading="lazy" src="/templates/OHMT006-studio/hero-2.jpg" alt={"정렬된 석재 패널과 알루미늄 프레임"} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                            </div>
                            <div className="md:col-span-5 space-y-5 md:space-y-6 lg:px-12">
                                <span className="text-xs text-black/40 font-bold block">{"한 공간 안에서 자연스럽게 연결합니다."}</span>
                                <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-black leading-[var(--leading-heading)] break-keep tracking-[-0.04em]">
                                    {"단차와 이음새까지 세심하게."}
                                </h3>
                                <p className="text-sm md:text-base lg:text-lg text-black/50 leading-relaxed font-normal break-keep tracking-[-0.025em]">
                                    {"석재 패널과 아노다이징 알루미늄 프레임이 만나는 부분의 단차와 줄눈을 세심하게 조정했습니다. 서로 다른 질감이 어색하게 끊기지 않고 하나의 면처럼 이어지도록 시공했습니다."}
                                </p>
                            </div>
                            <div className="md:col-span-3 aspect-[1/1] overflow-hidden border border-black/10 self-end md:mb-12">
                                <img loading="lazy" src="/templates/OHMT006-studio/material-swatch.jpg" alt="Material swatch" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Selected Portfolios */}
                <section className="py-14 md:py-32 bg-white border-t border-black/10">
                    <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
                        <div className="flex justify-between items-center pb-8 md:pb-12 border-b border-black/10 mb-10 md:mb-20">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black break-keep">{"주요 프로젝트"}</h2>
                            <Link href="/ko/templates/OHMT006-studio/projects" className="text-xs font-bold border-b-2 border-black pb-1 hover:opacity-60 transition-all shrink-0 ml-4 whitespace-nowrap">
                                {"전체 프로젝트 보기 [12]"}
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20">
                            {featuredProjects.map((project, idx) => (
                                <Link
                                    href={`/ko/templates/OHMT006-studio/projects/${project.id}`}
                                    key={project.id}
                                    className={`group block lg:col-span-6 ${idx === 1 ? "lg:mt-24" : ""}`}
                                >
                                    <div className="relative aspect-[16/10] w-full overflow-hidden border border-black/10">
                                        <img loading="lazy" src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" />
                                        <div className="absolute top-4 left-4 md:top-6 md:left-6">
                                            <span className="bg-white px-3 py-1 md:px-3.5 md:py-1.5 text-xs font-bold border border-black/10 text-black">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-5 md:mt-8 flex justify-between items-start border-b border-black/5 pb-5 md:pb-6">
                                        <div className="space-y-1">
                                            <h3 className="text-xl md:text-2xl font-bold text-black">{project.title}</h3>
                                            <p className="text-sm text-black/40">{project.location}</p>
                                        </div>
                                        <span className="text-sm text-black/40">{project.year}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <TeamSection />

                <Footer />
            </main>
        </TemplateWrapper>
    );
}


export default function StudioHome() {
  return (
    <React.Suspense fallback={null}>
      <StudioHomeContent />
    </React.Suspense>
  );
}
