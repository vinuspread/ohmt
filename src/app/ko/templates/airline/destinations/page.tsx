// src/app/ko/templates/OHMT008-airline/destinations/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { ArrowRight, Plane } from "lucide-react";
import { PageHero } from "../_components/PageHero";

function DestinationsPageContent() {
  const [selectedMood, setSelectedMood] = useState("전체");

  const destinations = [
    {
      slug: "paris",
      name: "Paris", 
      country: "프랑스", 
      desc: "세계적 수준의 예술, 미식의 천재성, 역사적 우아함에 빠져보세요.",
      img: "/templates/OHMT008-airline/paris.png",
      mood: "문화유산 & 예술"
    },
    {
      slug: "tokyo",
      name: "Tokyo", 
      country: "일본", 
      desc: "정교한 고대 신사 전통과 네온 마천루가 공존하는 곳을 발견하세요.",
      img: "/templates/OHMT008-airline/tokyo.png",
      mood: "메트로폴리탄"
    },
    {
      slug: "new-york",
      name: "New York", 
      country: "미국", 
      desc: "세계에서 가장 극적인 스카이라인의 숨막히는 에너지를 느껴보세요.",
      img: "/templates/OHMT008-airline/new-york.png",
      mood: "메트로폴리탄"
    },
    {
      slug: "dubai",
      name: "Dubai", 
      country: "UAE", 
      desc: "비할 데 없는 사막 건축, 웅장한 항구, 최고의 럭셔리를 즐기세요.",
      img: "/templates/OHMT008-airline/dubai.png",
      mood: "메트로폴리탄"
    },
    {
      slug: "sydney",
      name: "Sydney", 
      country: "호주", 
      desc: "해안가 항구의 우아함, 깨끗한 만, 고급스러운 라이프스타일을 만끽하세요.",
      img: "/templates/OHMT008-airline/sydney.png",
      mood: "자연 & 휴양"
    },
    {
      slug: "bali",
      name: "Bali", 
      country: "인도네시아", 
      desc: "에메랄드 빛 계곡, 절벽 위 사원, 고요한 해변으로의 완벽한 도피.",
      img: "/templates/OHMT008-airline/bali.png",
      mood: "자연 & 휴양"
    },
  ];

  const filteredDestinations = selectedMood === "전체" 
    ? destinations 
    : destinations.filter(d => d.mood === selectedMood);

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)] min-h-screen                     transition-colors duration-300">
        <Header />

        {/* Hero Cover Banner */}
        <PageHero
          imageSrc="/templates/OHMT008-airline/destination-main.jpg"
          imageAlt="글로벌 여행지"
          label="큐레이티드 스카이 여행"
          title={<>우리의 <br /><span className="text-[var(--color-accent)] font-serif normal-case font-normal">정교한 세계를 탐험하세요.</span></>}
          description="80개국 200개 이상의 여행지. 글로벌 네트워크가 전설적인 메트로폴리탄 명소, 역사적 문화 유산, 평화로운 열대 휴양지로 안내합니다 - 타협 없는 럭셔리와 함께."
        />

        {/* Dynamic Catalog Section */}
        <section className="py-14 md:py-32 bg-white">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10 space-y-16">
            
            {/* Premium Mood Segmented filter deck */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[var(--color-border)] pb-6 md:pb-8 gap-4 md:gap-6">
              <div className="flex flex-wrap items-center gap-2">
                {["전체", "문화유산 & 예술", "자연 & 휴양", "메트로폴리탄"].map((mood) => (
                  <button
                    key={mood}
                    onClick={() => setSelectedMood(mood)}
                    className={`px-4 md:px-6 py-2 md:py-2.5 text-[12px] md:text-[14px] font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-none cursor-pointer whitespace-nowrap ${
                      selectedMood === mood
                        ? "bg-[var(--color-primary)] text-[var(--color-accent)]"
                        : "bg-transparent text-[#7A7A7A] border border-[var(--color-border)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]"
                    }`}
                  >
                    {mood}
                  </button>
                ))}
              </div>
              <span className="text-[14px] font-bold uppercase tracking-widest text-[#7A7A7A]">
                {filteredDestinations.length}개 여행지 표시
              </span>
            </div>

            {/* Editorial Typographic Grid - TEXT OUTSIDE OF IMAGES, COLORS BY DEFAULT, SCALE ON HOVER */}
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16"
            >
              <AnimatePresence mode="popLayout">
                {filteredDestinations.map((dest) => (
                  <motion.div
                    layout
                    key={dest.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link 
                      href={`/ko/templates/OHMT008-airline/destinations/${dest.slug}`}
                      className="group block space-y-6 text-left select-none"
                    >
                      {/* Image container (Color by default, Scale on hover) */}
                      <div className="aspect-square overflow-hidden relative">
                        <img
                          src={dest.img}
                          alt={dest.name}
                          className="w-full h-full object-cover transition-transform duration-300 ease-out"
                        />
                        <div className="absolute top-4 left-4 z-10">
                          <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] bg-[var(--color-primary)] px-3.5 py-1.5 border border-[var(--color-accent)]/25 rounded-full">
                            {dest.mood}
                          </span>
                        </div>
                      </div>

                      {/* Content Info (Completely pulled OUTSIDE of image) */}
                      <div className="space-y-4 pt-2">
                        <div className="space-y-1">
                          <div className="flex justify-between items-baseline">
                            <h3 className="font-[family-name:var(--theme-font-heading)] text-2xl font-bold text-[var(--color-primary)] tracking-tight">
                              {dest.name}
                            </h3>
                            <span className="text-[12px] font-bold uppercase tracking-wider text-[var(--color-accent)]">
                              {dest.country}
                            </span>
                          </div>
                          <p className="text-[14px] text-[#7A7A7A] leading-relaxed font-normal line-clamp-2 normal-case">
                            {dest.desc}
                          </p>
                        </div>

                        {/* Interactive text link with subtle motion */}
                        <span className="text-[14px] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] inline-flex items-center gap-2 transition-colors duration-300 group-hover:text-[var(--color-accent)]/80">
                          항공편 보기 <Plane size={14} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function DestinationsPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <DestinationsPageContent {...props} />
    </React.Suspense>
  );
}
