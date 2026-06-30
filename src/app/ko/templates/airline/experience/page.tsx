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
      name: "미슐랭 스타 세트",
      desc: "신선한 블리니와 함께 슬라이스한 프렌치 캐비어를 크뤼그 클로 담보네 빈티지 샴페인으로 페어링한 요리.",
      detail: "르 베르나르뎅의 3미슐랭 셰프 앙투안 뒤부아가 창작한 세트. 오시에트라 캐비어로 시작하는 콜드 아뮤즈부슈, 샹파뉴 뵈르 블랑을 곁들인 브르타뉴산 넙치의 판시어드 메인 코스, 그리고 다크 초콜릿 밀 푀유로 마무리됩니다. 크뤼그 클로 담보네 2002와 15년산 아르마냑 디제스티프가 함께 제공됩니다.",
      tags: ["3코스", "샴페인 페어링", "퍼스트클래스 전용"],
      img: "/templates/OHMT008-airline/michelin-dining.jpg"
    },
    {
      id: "Korean",
      name: "한국 왕실 요리",
      desc: "밤과 대추로 천천히 조린 프리미엄 한우 갈비찜을 온기가 유지되는 유기농 청동그릇에 담아 서빙합니다.",
      detail: "조선시대 왕실 연회 전통에서 영감을 받은 코스입니다. 한우 1++ 등급의 갈비를 구기자, 밤, 숙성 된장과 함께 8시간 끓인 요리이며, 계절 나물, 돌솥밥, 그리고 입가심용 따뜻한 대추-계피 식혜가 함께 제공됩니다. 최적의 온도를 유지하기 위해 손으로 만든 유기농 청동 그릇에 담겨집니다.",
      tags: ["계절 메뉴", "전통 조리법", "비즈니스클래스 & 퍼스트클래스"],
      img: "/templates/OHMT008-airline/korean-cuisine.jpg"
    },
    {
      id: "Wellness",
      name: "유기농 웰니스 세트",
      desc: "트러플 향이 나는 퀴노아와 정원의 마이크로 허브, 유기농 신선 착즙 슈퍼푸드와의 페어링.",
      detail: "영양사 유키 타나카 박사와의 협력으로 개발된 세트입니다. 완전 식물성이며 글루텐 프리이며, 트러플 향이 나는 재래종 퀴노아 타불레, 코코넛 폼이 올려진 콜드프레스 스피룰리나 비스크, 그리고 화이트 트러플 쥬와 함께 로스팅한 마이타케 버섯이 메인입니다. 로우 카카오와 망고 타르트로 마무리됩니다. 모든 재료는 유기농 인증 및 지속 가능한 출처입니다.",
      tags: ["식물성", "글루텐 프리", "전 객실 이용 가능"],
      img: "/templates/OHMT008-airline/wellness-set.jpg"
    }
  ];

  // Baggage Calculator logic
  const allowedBaggageCount = 2; 
  const allowedBaggageWeight = 32; 
  const excessBaggageFeePerKg = 15; 
  const excessPieceFee = 150; 

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
          imageAlt="프리미엄 캐빈 디테일"
          label="캐빈 경험"
          title={<>세심하게 설계된 <br /><span className="text-[var(--color-accent)] font-serif normal-case font-normal">비행의 정수.</span></>}
          description="대륙간 비행의 모든 디테일을 재정의합니다. 사전 예약으로 미슐랭 스타 셰프의 시그니처 메뉴를 즐기고 탑승 전 엘리트 수하물 한도를 확인하세요."
          descMaxWidth="max-w-[680px]"
        />

        {/* 1. Gourmet Curation - Editorial Typographic List Design (No Box Borders) */}
        <section className="py-14 md:py-32 bg-white">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            
            {/* Header section with clean vertical layout */}
            <div className="mb-10 md:mb-20 space-y-4 max-w-[800px]">
              <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">미식 큐레이션</span>
              <h2 className="text-[clamp(1.5rem,4vw,3.5rem)] font-[family-name:var(--theme-font-heading)] font-bold text-[var(--color-primary)] uppercase tracking-tight leading-none">
                사전 예약 시그니처 스카이 다이닝
              </h2>
              <div className="h-[2px] bg-[var(--color-accent)] w-12" />
              <p className="text-[16px] text-[#7A7A7A] normal-case leading-relaxed font-normal pt-2">
                퍼스트클래스 승객을 위한 셰프 맞춤형 다이닝 세트. 아래 코스를 둘러보고 상세 정보를 확인한 후 다이닝 패스를 확보하세요.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-start">

              {/* Left: Accordion list */}
              <div className="lg:col-span-7 divide-y divide-[var(--color-border)]">
                {meals.map((meal, index) => {
                  const isOpen = selectedMeal === meal.id;
                  return (
                    <div key={meal.id}>
                      <button
                        onClick={() => setSelectedMeal(meal.id)}
                        className="w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left group select-none cursor-pointer"
                      >
                        <div className="flex items-center gap-5 md:gap-6">
                          <span className="font-serif text-xl md:text-2xl font-normal text-[var(--color-border)] group-hover:text-[var(--color-accent)]/40 transition-colors duration-300 w-7 md:w-8 shrink-0">
                            0{index + 1}
                          </span>
                          <h4 className={`font-bold text-[15px] md:text-[18px] uppercase tracking-wider transition-colors duration-300 ${isOpen ? "text-[var(--color-accent)]" : "text-[var(--color-primary)] group-hover:text-[var(--color-accent)]"}`}>
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
                                  <span key={tag} className="text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1 border border-[var(--color-accent)]/40 text-[var(--color-accent)]">{tag}</span>
                                ))}
                              </div>
                              <p className="text-[14px] text-[#7A7A7A] leading-relaxed font-normal normal-case">{meal.desc}</p>
                              <p className="text-[15px] text-[#7A7A7A]/80 leading-[1.85] font-normal normal-case border-l-2 border-[var(--color-accent)]/30 pl-4">{meal.detail}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
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
                              <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[var(--color-accent)]/20 text-[var(--color-accent)] border border-[var(--color-accent)]/30">{tag}</span>
                            ))}
                          </div>
                          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] block">다이닝 패스</span>
                          <h3 className="font-[family-name:var(--theme-font-heading)] text-xl font-bold text-white">{meal.name}</h3>
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
              <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">수하물 사전 체크</span>
              <h2 className="text-[clamp(1.5rem,4vw,3.5rem)] font-[family-name:var(--theme-font-heading)] font-bold text-[var(--color-primary)] uppercase tracking-tight leading-none">
                스마트 수하물 추가 요금 계산기
              </h2>
              <div className="h-[2px] bg-[var(--color-accent)] w-12" />
              <p className="text-[14px] text-[#7A7A7A] normal-case leading-relaxed font-normal pt-2">
                퍼스트클래스 티켓에는 <strong className="text-[var(--color-primary)">2개 (각 32kg)</strong>의 수하물이 포함됩니다. 아래 입력값을 조절하여 체크인 전 실시간 초과 수하물 요금을 계산하세요.
              </p>
            </div>

            {/* Completely borderless typographic controls grid */}
            <div className="grid lg:grid-cols-12 gap-10 md:gap-20 items-start">
              
              {/* Left Side: Clean Sliders and Inputs */}
              <div className="lg:col-span-6 space-y-12">
                
                {/* Luggage pieces counter */}
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline text-[14px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
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
                  <div className="flex justify-between text-[13px] text-[#7A7A7A]">
                    <span>1개</span>
                    <span>5개</span>
                  </div>
                </div>

                {/* Luggage weight slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline text-[14px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
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
                  <div className="flex justify-between text-[13px] text-[#7A7A7A]">
                    <span>15 kg</span>
                    <span>50 kg</span>
                  </div>
                </div>

              </div>

              {/* Right Side: Editorial Statement Layout (No Border Boxes) */}
              <div className="lg:col-span-6 space-y-8 lg:pl-10">
                  <span className="text-[14px] font-bold uppercase tracking-widest text-[#7A7A7A] block">
                    평가 명세서
                  </span>

                  {/* Typography alignment list */}
                  <div className="space-y-4 text-[14px] font-bold normal-case text-[#7A7A7A] pb-6 border-b border-[var(--color-border)]">
                    <div className="flex justify-between items-baseline py-2">
                      <span className="font-normal">엘리트 허용 한도</span>
                      <span className="text-[var(--color-primary)] font-semibold">2개 (각 최대 32kg)</span>
                    </div>
                    <div className="flex justify-between items-baseline py-2">
                      <span className="font-normal">초과 개수 추가 요금</span>
                      <span className="text-[var(--color-primary)] font-semibold">${excessPieces * excessPieceFee} USD ({excessPieces}개 초과)</span>
                    </div>
                    <div className="flex justify-between items-baseline py-2">
                      <span className="font-normal">초과 중량 추가 요금</span>
                      <span className="text-[var(--color-primary)] font-semibold">${excessWeight * excessBaggageFeePerKg} USD ({excessWeight}kg 초과)</span>
                    </div>
                  </div>

                  {/* Surcharge result statement */}
                  <div className="pt-4 flex flex-col gap-3">
                    <span className="text-[14px] uppercase font-bold tracking-widest text-[var(--color-primary)]">
                      수하물 요금
                    </span>
                    
                    {/* Huge bold editorial number display */}
                    <div className="space-y-2">
                      <span className={`text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-none block ${
                        totalBaggageSurcharge > 0 ? "text-rose-600" : "text-[var(--color-accent)]"
                      }`}>
                        {totalBaggageSurcharge > 0 ? `$${totalBaggageSurcharge.toLocaleString()} USD` : "무료"}
                      </span>
                      <p className="text-[14px] text-[#7A7A7A] normal-case leading-relaxed font-normal">
                        *허용 한도 계산은 IATA 중량 기준과 비너스 항공 구조 파라미터에 따라 실시간으로 산출됩니다.
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
              <span className="block text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
                엘리트 라운지 & 스파
              </span>
              <h2 className="font-[family-name:var(--theme-font-heading)] text-[clamp(1.5rem,5vw,3.8rem)] font-bold tracking-tight text-[var(--color-primary)] leading-tight mb-20 uppercase">
                스카이 생추어리 서비스.
              </h2>

            {/* Asymmetrical elegant grid layout */}
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-24">
              {[
                { title: "프라이빗 스위트 생추어리", desc: "맞춤형 슬라이딩 도어, 개인 미니 옷장, 180° 플랫베드를 갖춘 완전 밀폐형 프라이빗 스위트." },
                { title: "글로벌 큐리너리 다이닝", desc: "미슐랭 스타 셰프가 선보이는 멀티 코스 미식 플레이트, 빈티지 샴페인 매칭 포함." },
                { title: "기내 아로마테라피 스파", desc: "스킨케어 리메디, 맞춤형 드라이 미스트 아로마테라피, 스트레칭 가이드를 포함한 기내 웰니스." },
                { title: "울트라 HD 기내 엔터테인먼트", desc: "32인치 4K 해상도 스크린, 1,500시간 이상의 주문형 문화 콘텐츠 및 실시간 국제 뉴스." }
              ].map((f, i) => (
                <div key={f.title} className="space-y-6 text-left normal-case relative pl-8 border-l-2 border-[var(--color-accent)]">
                  {/* Subtle index tag */}
                  <span className="text-[14px] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] block">
                    구역 0{i + 1}
                  </span>
                  <h3 className="font-[family-name:var(--theme-font-heading)] text-2xl font-bold text-[var(--color-primary)] tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-[14px] text-[#7A7A7A] leading-relaxed font-normal">
                    {f.desc}
                  </p>
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


export default function ExperiencePage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <ExperiencePageContent {...props} />
    </React.Suspense>
  );
}
