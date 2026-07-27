// src/app/ko/templates/OHMT008-airline/experience/page.tsx
"use client";

import React, { useState } from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { Utensils, Luggage, ShieldCheck, Check } from "lucide-react";
import { PageHero } from "../_components/PageHero";
import { motion, AnimatePresence } from "framer-motion";

function ExperiencePageContent() {
  const [selectedMeal, setSelectedMeal] = useState("Michelin");
  const [baggageCount, setBaggageCount] = useState(1);
  const [baggageWeight, setBaggageWeight] = useState(23);

  const meals = [
    {
      id: "Michelin",
      name: "프렌치 코스 메뉴",
      desc: "캐비어와 블리니로 시작해 생선 요리와 디저트로 이어지는 프렌치 코스 메뉴입니다.",
      detail: "캐비어와 블리니를 곁들인 전채, 화이트 와인 소스의 생선 요리, 다크 초콜릿 디저트로 구성된 3코스 메뉴입니다. 샴페인 또는 무알코올 음료를 선택할 수 있습니다.",
      tags: ["3코스", "샴페인 페어링", "퍼스트 클래스 전용"],
      img: "/templates/OHMT008-airline/french-course-menu.png"
    },
    {
      id: "Korean",
      name: "한식 코스 메뉴",
      desc: "밤과 대추를 넣어 부드럽게 조린 갈비찜과 계절 반찬, 밥으로 구성된 한식 메뉴입니다.",
      detail: "갈비찜과 계절 나물, 밥과 후식 음료로 구성했습니다. 장시간 비행에서도 부담이 적도록 간을 조절하며, 알레르기나 식이 제한은 출발 전에 신청할 수 있습니다.",
      tags: ["계절 메뉴", "전통 조리법", "비즈니스·퍼스트 클래스"],
      img: "/templates/OHMT008-airline/korean-cuisine.jpg"
    },
    {
      id: "Wellness",
      name: "식물성 웰니스 메뉴",
      desc: "퀴노아와 버섯, 제철 채소로 구성한 가벼운 식물성 메뉴입니다.",
      detail: "퀴노아 샐러드와 채소 수프, 구운 버섯과 망고 디저트로 구성된 식물성 메뉴입니다. 글루텐을 포함하지 않는 조리법을 사용하며, 상세 알레르기 정보는 예약 단계에서 확인할 수 있습니다.",
      tags: ["식물성", "글루텐 프리", "전 객실 이용 가능"],
      img: "/templates/OHMT008-airline/wellness-set.jpg"
    }
  ];

  // Baggage Calculator logic
  const allowedBaggageCount = 2; 
  const allowedBaggageWeight = 32; 
  const excessBaggageFeePerKg = 15_000;
  const excessPieceFee = 150_000;

  const excessPieces = Math.max(0, baggageCount - allowedBaggageCount);
  const excessWeight = Math.max(0, baggageWeight - allowedBaggageWeight);
  const totalBaggageSurcharge = (excessPieces * excessPieceFee) + (excessWeight * excessBaggageFeePerKg);

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)] min-h-screen">
        <Header />

        {/* Hero Cover (Completely Borderless & Floating Atmosphere) */}
        <PageHero
          imageSrc="/templates/OHMT008-airline/airline-experience-hero.png"
          imageAlt="퍼스트 클래스 객실"
          label="기내 경험"
          title={<>편안한 비행을 위한 <br /><span className="text-[var(--color-accent)] font-[family-name:var(--font-heading)] normal-case font-[var(--font-weight-accent)]">서비스와 공간.</span></>}
          description={"좌석과 기내식, 엔터테인먼트와 수하물 서비스를 미리 확인하세요.\n일부 메뉴와 특별식은 출발 전에 예약할 수 있습니다."}
          descMaxWidth="max-w-[680px]"
        />

        {/* 1. Gourmet Curation - Editorial Typographic List Design (No Box Borders) */}
        <section className="py-14 md:py-32 bg-white">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            
            {/* Header section with clean vertical layout */}
            <div className="mb-10 md:mb-20 space-y-4 max-w-[800px]">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">기내식</span>
              <h2 className="text-[length:var(--text-h2)] font-[family-name:var(--theme-font-heading)] font-[var(--font-weight-heading)] text-[var(--color-primary)] uppercase tracking-tight leading-[var(--leading-heading)]">
                사전 예약 기내식
              </h2>
              <div className="h-[2px] bg-[var(--color-accent)] w-12" />
              <p className="text-base text-[#7A7A7A] normal-case leading-relaxed font-normal pt-2">
                퍼스트 클래스에서 제공하는 코스 메뉴를 확인하고 원하는 식사를 출발 전에 선택하세요.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-start">

              {/* Left: Accordion list */}
              <div className="lg:col-span-7 divide-y divide-[var(--color-border)]">
                {meals.map((meal, index) => {
                  const isOpen = selectedMeal === meal.id;
                  return (
                    <motion.div
                      key={meal.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] as const }}
                    >
                      <button
                        onClick={() => setSelectedMeal(meal.id)}
                        className="w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left group select-none cursor-pointer active:scale-[0.99] transition-transform duration-[var(--transition-fast)]"
                      >
                        <div className="flex items-center gap-5 md:gap-6">
                          <span className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-normal text-[var(--color-border)] group-hover:text-[var(--color-accent)]/40 transition-colors duration-300 w-7 md:w-8 shrink-0">
                            0{index + 1}
                          </span>
                          <h4 className={`font-bold text-sm md:text-lg uppercase tracking-wider transition-colors duration-300 ${isOpen ? "text-[var(--color-accent)]" : "text-[var(--color-primary)] group-hover:text-[var(--color-accent)]"}`}>
                            {meal.name}
                          </h4>
                        </div>
                        <span className={`text-[var(--color-accent)] text-xl font-normal transition-transform duration-300 shrink-0 ${isOpen ? "rotate-45" : "rotate-0"}`}>+</span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pb-8 space-y-5 pl-12 md:pl-14">
                              {/* Image - mobile only */}
                              <div className="lg:hidden aspect-[16/9] overflow-hidden relative">
                                <img loading="lazy" src={meal.img} alt={meal.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/50 via-transparent to-transparent" />
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {meal.tags.map((tag) => (
                                  <span key={tag} className="text-xs font-bold uppercase tracking-[0.15em] px-3 py-1 border border-[var(--color-accent)]/40 text-[var(--color-accent)]">{tag}</span>
                                ))}
                              </div>
                              <p className="text-sm text-[#7A7A7A] leading-relaxed font-normal normal-case">{meal.desc}</p>
                              <p className="text-sm text-[#7A7A7A]/80 leading-loose font-normal normal-case border-l-2 border-[var(--color-accent)]/30 pl-4">{meal.detail}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right: Image - desktop only, sticky */}
              <div className="hidden lg:block lg:col-span-5 sticky top-28">
                <AnimatePresence mode="wait">
                  {meals.map((meal) => meal.id === selectedMeal && (
                    <motion.div
                      key={meal.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-[4/5] overflow-hidden relative">
                        <img loading="lazy" src={meal.img} alt={meal.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/50 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 space-y-2">
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {meal.tags.map((tag) => (
                              <span key={tag} className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 bg-[var(--color-accent)]/20 text-[var(--color-accent)] border border-[var(--color-accent)]/30">{tag}</span>
                            ))}
                          </div>
                          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] block">메뉴 선택</span>
                          <h3 className="font-[family-name:var(--theme-font-heading)] text-xl font-[var(--font-weight-heading)] text-white">{meal.name}</h3>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

        {/* 2. Baggage Calculator - Clean Typography Grid (No Box Borders) */}
        <section className="py-14 md:py-32 bg-[var(--color-bg-secondary)]">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            
            {/* Header */}
            <div className="mb-10 md:mb-20 space-y-4 max-w-[800px]">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">수하물 확인</span>
              <h2 className="text-[length:var(--text-h2)] font-[family-name:var(--theme-font-heading)] font-[var(--font-weight-heading)] text-[var(--color-primary)] uppercase tracking-tight leading-[var(--leading-heading)]">
                추가 수하물 요금 계산
              </h2>
              <div className="h-[2px] bg-[var(--color-accent)] w-12" />
              <p className="text-sm text-[#7A7A7A] normal-case leading-relaxed font-normal pt-2">
                퍼스트 클래스 운임에는 <strong className="text-[var(--color-primary)">2개 (각 32kg)</strong>의 위탁 수하물이 포함됩니다. 개수와 무게를 입력하면 예상 추가 요금을 확인할 수 있습니다.
              </p>
            </div>

            {/* Completely borderless typographic controls grid */}
            <div className="grid lg:grid-cols-12 gap-10 md:gap-20 items-start">
              
              {/* Left Side: Clean Sliders and Inputs */}
              <div className="lg:col-span-6 space-y-12">
                
                {/* Luggage pieces counter */}
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline text-sm font-bold uppercase tracking-wider text-[var(--color-primary)]">
                    <span className="text-sm font-semibold text-[#7A7A7A]">수하물 개수</span>
                    <span className="text-xl font-bold">{baggageCount}개</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={baggageCount}
                    onChange={(e) => setBaggageCount(parseInt(e.target.value))}
                    className="w-full h-[1px] bg-[var(--color-border)] accent-[var(--color-accent)] cursor-pointer appearance-none outline-none"
                  />
                  <div className="flex justify-between text-xs text-[#7A7A7A]">
                    <span>1개</span>
                    <span>5개</span>
                  </div>
                </div>

                {/* Luggage weight slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline text-sm font-bold uppercase tracking-wider text-[var(--color-primary)]">
                    <span className="text-sm font-semibold text-[#7A7A7A]">최대 중량</span>
                    <span className="text-xl font-bold">{baggageWeight} kg</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="50"
                    value={baggageWeight}
                    onChange={(e) => setBaggageWeight(parseInt(e.target.value))}
                    className="w-full h-[1px] bg-[var(--color-border)] accent-[var(--color-accent)] cursor-pointer appearance-none outline-none"
                  />
                  <div className="flex justify-between text-xs text-[#7A7A7A]">
                    <span>15 kg</span>
                    <span>50 kg</span>
                  </div>
                </div>

              </div>

              {/* Right Side: Editorial Statement Layout (No Border Boxes) */}
              <div className="lg:col-span-6 space-y-8 lg:pl-10">
                  <span className="text-sm font-bold uppercase tracking-widest text-[#7A7A7A] block">
                    요금 계산 결과
                  </span>

                  {/* Typography alignment list */}
                  <div className="space-y-4 text-sm font-bold normal-case text-[#7A7A7A] pb-6 border-b border-[var(--color-border)]">
                    <div className="flex justify-between items-baseline py-2">
                      <span className="font-normal">기본 허용량</span>
                      <span className="text-[var(--color-primary)] font-semibold">2개 (각 최대 32kg)</span>
                    </div>
                    <div className="flex justify-between items-baseline py-2">
                      <span className="font-normal">초과 개수 추가 요금</span>
                      <span className="text-[var(--color-primary)] font-semibold">{(excessPieces * excessPieceFee).toLocaleString("ko-KR")}원 ({excessPieces}개 초과)</span>
                    </div>
                    <div className="flex justify-between items-baseline py-2">
                      <span className="font-normal">초과 중량 추가 요금</span>
                      <span className="text-[var(--color-primary)] font-semibold">{(excessWeight * excessBaggageFeePerKg).toLocaleString("ko-KR")}원 ({excessWeight}kg 초과)</span>
                    </div>
                  </div>

                  {/* Surcharge result statement */}
                  <div className="pt-4 flex flex-col gap-3">
                    <span className="text-sm uppercase font-bold tracking-widest text-[var(--color-primary)]">
                      수하물 요금
                    </span>
                    
                    {/* Huge bold editorial number display */}
                    <div className="space-y-2">
                      <span className={`text-[length:var(--text-h2)] font-extrabold leading-none block ${
                        totalBaggageSurcharge > 0 ? "text-rose-600" : "text-[var(--color-accent)]"
                      }`}>
                        {totalBaggageSurcharge > 0 ? `${totalBaggageSurcharge.toLocaleString("ko-KR")}원` : "무료"}
                      </span>
                      <p className="text-sm text-[#7A7A7A] normal-case leading-relaxed font-normal">
                        *실제 허용량과 요금은 노선과 운임 조건에 따라 달라질 수 있으며, 결제 전 최종 금액을 확인해야 합니다.
                      </p>
                    </div>
                  </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Global Sanctuary Services - Spacious Editorial Column Layout */}
        <section className="py-14 md:py-32 bg-white">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
              <span className="block text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
                공항 라운지와 기내 서비스
              </span>
              <h2 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-h1)] font-[var(--font-weight-heading)] tracking-tight text-[var(--color-primary)] leading-[var(--leading-heading)] mb-20 uppercase">
                편안한 여정을 위한 서비스.
              </h2>

            {/* Asymmetrical elegant grid layout */}
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-24">
              {[
                { title: "독립형 퍼스트 클래스 스위트", desc: "슬라이딩 도어와 개인 수납공간, 180° 플랫베드를 갖춘 독립형 스위트입니다." },
                { title: "노선별 기내식", desc: "노선과 계절에 맞춰 구성한 코스 메뉴와 와인 또는 무알코올 음료를 제공합니다." },
                { title: "기내 웰니스 키트", desc: "스킨케어 제품과 수면용품, 장거리 비행을 위한 간단한 스트레칭 안내를 제공합니다." },
                { title: "4K 기내 엔터테인먼트", desc: "32인치 4K 스크린에서 영화와 음악, 다큐멘터리와 국제 뉴스를 이용할 수 있습니다." }
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] as const }}
                  className="space-y-6 text-left normal-case relative pl-8 border-l-2 border-[var(--color-accent)] hover:border-l-[var(--color-accent-light)] transition-colors duration-[var(--transition-base)]"
                >
                  {/* Subtle index tag */}
                  <span className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] block">
                    서비스 01{i + 1}
                  </span>
                  <h3 className="font-[family-name:var(--theme-font-heading)] text-2xl font-[var(--font-weight-heading)] text-[var(--color-primary)] tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-sm text-[#7A7A7A] leading-relaxed font-normal">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function ExperiencePage() {
  return (
    <React.Suspense fallback={null}>
      <ExperiencePageContent />
    </React.Suspense>
  );
}
