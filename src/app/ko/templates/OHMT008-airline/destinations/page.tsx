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
      desc: "예술과 건축, 미식과 역사적인 거리 풍경을 함께 즐길 수 있습니다.",
      img: "/templates/OHMT008-airline/paris.png",
      mood: "문화유산·예술"
    },
    {
      slug: "tokyo",
      name: "Tokyo", 
      country: "일본", 
      desc: "오래된 사찰과 정원, 현대적인 거리와 다채로운 음식 문화를 함께 만날 수 있습니다.",
      img: "/templates/OHMT008-airline/tokyo.png",
      mood: "도시 여행"
    },
    {
      slug: "new-york",
      name: "New York", 
      country: "미국", 
      desc: "공연과 미술관, 쇼핑과 다양한 지역 문화를 한 도시에서 경험할 수 있습니다.",
      img: "/templates/OHMT008-airline/new-york.png",
      mood: "도시 여행"
    },
    {
      slug: "dubai",
      name: "Dubai", 
      country: "UAE", 
      desc: "현대적인 건축과 사막 풍경, 해안과 도심의 다양한 즐길 거리를 만나보세요.",
      img: "/templates/OHMT008-airline/dubai.png",
      mood: "도시 여행"
    },
    {
      slug: "sydney",
      name: "Sydney", 
      country: "호주", 
      desc: "항구와 해변, 도심 문화와 근교 자연을 함께 즐길 수 있습니다.",
      img: "/templates/OHMT008-airline/sydney.png",
      mood: "자연·휴양"
    },
    {
      slug: "bali",
      name: "Bali", 
      country: "인도네시아", 
      desc: "계단식 논과 사원, 해변과 숲이 어우러진 휴양지를 만나보세요.",
      img: "/templates/OHMT008-airline/bali.png",
      mood: "자연·휴양"
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
          imageAlt="세계 주요 여행지"
          label="취항지 안내"
          title={<>다시 찾고 싶은 <br /><span className="text-[var(--color-accent)] font-[family-name:var(--font-heading)] normal-case font-[var(--font-weight-accent)]">세계의 여행지.</span></>}
          description={"도시 여행부터 문화유산과 휴양지까지 다양한 취항지를 확인하세요.\n노선과 운항 일정은 예약 화면에서 조회할 수 있습니다."}
        />

        {/* Dynamic Catalog Section */}
        <section className="py-14 md:py-32 bg-white">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10 space-y-16">
            
            {/* Premium Mood Segmented filter deck */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[var(--color-border)] pb-6 md:pb-8 gap-4 md:gap-6">
              <div className="flex flex-wrap items-center gap-2">
                {["전체", "문화유산·예술", "자연·휴양", "도시 여행"].map((mood) => (
                  <button
                    key={mood}
                    onClick={() => setSelectedMood(mood)}
                    className={`px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-bold uppercase tracking-[0.15em] transition-all duration-[var(--transition-fast)] rounded-none cursor-pointer whitespace-nowrap active:scale-[0.97] ${
                      selectedMood === mood
                        ? "bg-[var(--color-primary)] text-[var(--color-accent)]"
                        : "bg-transparent text-[#7A7A7A] border border-[var(--color-border)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]"
                    }`}
                  >
                    {mood}
                  </button>
                ))}
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#7A7A7A]">
                {filteredDestinations.length}개 여행지
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
                          className="w-full h-full object-cover transition-transform duration-[var(--transition-slow)] group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 z-10">
                          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] bg-[var(--color-primary)] px-3.5 py-1.5 border border-[var(--color-accent)]/25 rounded-full">
                            {dest.mood}
                          </span>
                        </div>
                      </div>

                      {/* Content Info (Completely pulled OUTSIDE of image) */}
                      <div className="space-y-4 pt-2">
                        <div className="space-y-1">
                          <div className="flex justify-between items-baseline">
                            <h3 className="font-[family-name:var(--theme-font-heading)] text-2xl font-[var(--font-weight-heading)] text-[var(--color-primary)] tracking-tight">
                              {dest.name}
                            </h3>
                            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                              {dest.country}
                            </span>
                          </div>
                          <p className="text-sm text-[#7A7A7A] leading-relaxed font-normal line-clamp-2 normal-case">
                            {dest.desc}
                          </p>
                        </div>

                        {/* Interactive text link with subtle motion */}
                        <span className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] inline-flex items-center gap-2 transition-all duration-[var(--transition-fast)] group-hover:gap-3">
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


export default function DestinationsPage() {
  return (
    <React.Suspense fallback={null}>
      <DestinationsPageContent />
    </React.Suspense>
  );
}
