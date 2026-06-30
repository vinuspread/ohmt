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
        { title: "공간 큐레이션", subTitle: "기하학적 절제", location: "서울, 강남", desc: "순수한 기하학적 형태와 절제된 소재를 통해 공간의 경계를 재정의합니다. 모든 면과 선은 머무는 이에게 몰입감을 선사하며, 불필요한 장식을 배제하고 본질적인 비례미에 집중합니다.", idx: "01", image: "/templates/OHMT006-studio/hero-1.jpg" },
        { title: "비스포크 인테리어", subTitle: "유기적인 빛", location: "경주, 불국사", desc: "천연 트래버틴 특유의 거친 질감과 은은하게 퍼지는 간접 광원이 자아내는 자연스러운 조화. 공간 곳곳으로 부드럽게 흐르는 빛은 고요하면서도 깊이 있는 세련미를 전달합니다.", idx: "02", image: "/templates/OHMT006-studio/hero-2.jpg" },
        { title: "오브제 디렉팅", subTitle: "조각적 공간 오브제", location: "제주, 서귀포", desc: "빛의 방향과 흐름을 조율하기 위해 정교하게 다듬어진 커스텀 오브제입니다. 철저한 소재 연구를 거쳐 탄생한 가구와 집기들은 예술과 쓰임새의 경계에서 공간의 완성을 돕습니다.", idx: "03", image: "/templates/OHMT006-studio/hero-3.jpg" },
    ];

    const featuredProjects = [
        {
            id: "proj-1",
            title: "호수가 보이는 주택",
            category: "주택 설계",
            year: "2026",
            location: "서울, 강남",
            image: "/templates/OHMT006-studio/project-1.jpg"
        },
        {
            id: "proj-2",
            title: "모던 테크 오피스",
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
                    <span className="text-[12px] text-white/40 font-bold whitespace-nowrap [writing-mode:vertical-rl] rotate-180">{"Established in 2026"}</span>
                    <div className="w-[1px] h-16 bg-white/25" />
                    <span className="text-[12px] text-white/80 font-bold whitespace-nowrap [writing-mode:vertical-rl] rotate-180">{"Spatial Rigor"}</span>
                </div>
                <div className="hidden xl:flex fixed right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-40 pointer-events-none mix-blend-difference">
                    <span className="text-[12px] text-white/40 font-bold whitespace-nowrap [writing-mode:vertical-rl]">{"Minimal Architecture"}</span>
                    <div className="w-[1px] h-16 bg-white/25" />
                    <span className="text-[12px] text-white/60 font-bold whitespace-nowrap [writing-mode:vertical-rl]">{"Scroll for Sense"}</span>
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
                            <source src="/templates/OHMT006-studio/hero-bg.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />
                    </div>

                    {/* SNS */}
                    <div className="absolute left-6 bottom-32 z-20 hidden md:flex flex-col items-center gap-6 bg-white/90 backdrop-blur-md py-6 px-4 border border-black/5 shadow-sm">
                        <a href="#" className="text-[13px] font-bold text-black/50 hover:text-black">Fb</a>
                        <a href="#" className="text-[13px] font-bold text-black/50 hover:text-black">Tw</a>
                        <a href="#" className="text-[13px] font-bold text-black/50 hover:text-black">Ig</a>
                    </div>

                    {/* Heading */}
                    <div className="relative z-20 max-w-[1720px] mx-auto w-full px-6 md:px-16 lg:px-24 h-full flex flex-col justify-center">
                        <div className="space-y-5 md:space-y-8 max-w-5xl">
                            <span className="text-[13px] font-bold text-white/60 block">{"ARCHITECTURAL STUDIO"}</span>
                            <h1 className="text-[clamp(2.6rem,7vw,6.5rem)] font-bold leading-[1.2] text-white break-keep">
                                {"형태는 침묵하고,"}<br /><span className="font-serif font-normal lowercase text-white/90">{"공간은 이야기를 시작한다."}</span>
                            </h1>
                            <div className="pt-2 md:pt-4">
                                <Link
                                    href="/ko/templates/OHMT006-studio/contact"
                                    className="inline-flex items-center gap-4 border border-white bg-white/10 hover:bg-white hover:text-black text-white px-6 md:px-8 py-3 md:py-4 text-[13px] font-bold backdrop-blur-md transition-all duration-300 rounded-none"
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
                                            <h3 className="text-[16px] md:text-[20px] font-bold text-white">{activeHeroField.subTitle}</h3>
                                            <span className="text-[13px] text-white/40">- {activeHeroField.location}</span>
                                        </div>
                                        <p className="text-[15px] md:text-[14px] text-white/50 font-normal leading-relaxed line-clamp-3 md:line-clamp-none">{activeHeroField.desc}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button onClick={handlePrev} className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/20 hover:border-white text-white flex items-center justify-center transition-colors">
                                            <ChevronLeft size={13} />
                                        </button>
                                        <button onClick={handleNext} className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/20 hover:border-white text-white flex items-center justify-center transition-colors">
                                            <ChevronRight size={13} />
                                        </button>
                                        <span className="text-[13px] text-white/40 ml-1">0{activeHeroIndex + 1} / 03</span>
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
                                <span className="text-[13px] text-white/40 font-bold block">{"스튜디오 철학"}</span>
                                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-[1.5] text-white break-keep">
                                    {"빛과 그림자,"} <br />{"그리고 감각의 균형."}
                                </h2>
                            </div>
                            <div className="lg:col-span-7 space-y-10 md:space-y-16">
                                <p className="text-[15px] md:text-[16px] lg:text-[18px] text-white/60 leading-[1.7] font-normal break-keep">
                                    {"우리가 빚어내는 모든 모서리와 비례, 여백은 공간의 물리적 경계를 넘어 깊은 정서적 안정감을 주도록 정밀히 조율됩니다. 구조적인 공간 시퀀스 설계 위에 최적의 조명 계획과 마감 자재의 본질적 가치를 조합하여 시대를 아우르는 명작을 완성합니다."}
                                </p>
                                <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-white/10 pt-8 md:pt-12">
                                    <div className="space-y-2">
                                        <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">180+</div>
                                        <span className="text-[13px] font-bold text-white/40 block">{"프로젝트"}</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">98%</div>
                                        <span className="text-[13px] font-bold text-white/40 block">{"고객 만족"}</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">8+</div>
                                        <span className="text-[13px] font-bold text-white/40 block">{"운영 연차"}</span>
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
                                <img loading="lazy" src="/templates/OHMT006-studio/hero-2.jpg" alt={"정밀한 재료의 정렬."} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                            </div>
                            <div className="md:col-span-5 space-y-5 md:space-y-6 lg:px-12">
                                <span className="text-[13px] text-black/40 font-bold block">{"소재 본질의 극대화"}</span>
                                <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-black leading-[1.5] break-keep">
                                    {"이음새 없는 섬세한 결합."}
                                </h3>
                                <p className="text-[15px] md:text-[16px] lg:text-[18px] text-black/50 leading-relaxed font-normal break-keep">
                                    {"정밀하게 가공된 스톤 패널과 아노다이징 처리된 알루미늄 프레임의 만남. 서로 다른 소재가 이루는 매끄러운 단차와 연속적인 구조를 통해 시각적 안정감을 선사합니다."}
                                </p>
                            </div>
                            <div className="md:col-span-3 aspect-[1/1] overflow-hidden border border-black/10 self-end md:mb-12">
                                <img loading="lazy" src="/templates/OHMT006-studio/project-1.jpg" alt="Material swatch" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Selected Portfolios */}
                <section className="py-14 md:py-32 bg-white border-t border-black/10">
                    <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
                        <div className="flex justify-between items-center pb-8 md:pb-12 border-b border-black/10 mb-10 md:mb-20">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black break-keep">{"엄선된 포트폴리오"}</h2>
                            <Link href="/ko/templates/OHMT006-studio/projects" className="text-[13px] font-bold border-b-2 border-black pb-1 hover:opacity-60 transition-all shrink-0 ml-4 whitespace-nowrap">
                                {"전체 보기 [12]"}
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
                                            <span className="bg-white px-3 py-1 md:px-3.5 md:py-1.5 text-[12px] font-bold border border-black/10 text-black">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-5 md:mt-8 flex justify-between items-start border-b border-black/5 pb-5 md:pb-6">
                                        <div className="space-y-1">
                                            <h3 className="text-xl md:text-2xl font-bold text-black">{project.title}</h3>
                                            <p className="text-[14px] text-black/40">{project.location}</p>
                                        </div>
                                        <span className="text-[14px] text-black/40">{project.year}</span>
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


export default function StudioHome(props: any) {
  return (
    <React.Suspense fallback={null}>
      <StudioHomeContent {...props} />
    </React.Suspense>
  );
}
