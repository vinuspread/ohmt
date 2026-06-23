// src/app/ko/templates/OHMT016-airline-kr/book/page.tsx
"use client";

import React, { useState } from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { Plane, Compass, User, Armchair, ChevronRight, Check } from "lucide-react";
import { PageHero } from "../_components/PageHero";
import { motion, AnimatePresence } from "framer-motion";

interface Seat {
  id: string;
  type: "Suite" | "Business" | "Standard";
  status: "Available" | "Occupied" | "Selected";
  perk: string;
  extraPrice: number;
}

function BookPageContent() {
  const [step, setStep] = useState(1); // 1: Search, 2: Seat Map, 3: Success
  const [destination, setDestination] = useState("Paris");
  const [cabinClass, setCabinClass] = useState("First");
  const [selectedSeat, setSelectedSeat] = useState<Seat | null>(null);
  
  // Dummy flight base prices matching destinationData
  const basePrices: Record<string, number> = {
    Paris: 6900,
    Tokyo: 2800,
    "New York": 8500,
    Dubai: 7200,
  };

  const initialSeats: Seat[] = [
    { id: "1A", type: "Suite", status: "Available", perk: "울트라 프라이빗 윈도우 스위트 및 돔 페리뇽 서비스", extraPrice: 500 },
    { id: "1B", type: "Suite", status: "Occupied", perk: "센터 더블 스위트 (커플에게 이상적)", extraPrice: 450 },
    { id: "1C", type: "Suite", status: "Available", perk: "센터 더블 스위트 및 개인 옷장", extraPrice: 450 },
    { id: "1D", type: "Suite", status: "Available", perk: "캐비아 바 이용이 가능한 울트라 프라이빗 윈도우 스위트", extraPrice: 500 },
    { id: "2A", type: "Suite", status: "Available", perk: "윈도우 스위트 및 통합 앰비언트 라이트 컨트롤", extraPrice: 400 },
    { id: "2B", type: "Suite", status: "Occupied", perk: "센터 프라이빗 스위트", extraPrice: 350 },
    { id: "2C", type: "Suite", status: "Available", perk: "센터 프라이빗 스위트", extraPrice: 350 },
    { id: "2D", type: "Suite", status: "Available", perk: "강화된 32인치 4K 스크린이 구비된 윈도우 스위트", extraPrice: 400 },
  ];

  const [seats, setSeats] = useState<Seat[]>(initialSeats);

  const handleSeatClick = (seat: Seat) => {
    if (seat.status === "Occupied") return;
    
    setSeats(prev => prev.map(s => {
      if (s.id === seat.id) {
        return { ...s, status: s.status === "Selected" ? "Available" : "Selected" };
      }
      // Unselect others
      if (s.status === "Selected") {
        return { ...s, status: "Available" };
      }
      return s;
    }));

    setSelectedSeat(prev => prev?.id === seat.id ? null : seat);
  };

  const basePrice = basePrices[destination] || 5000;
  const extraSeatPrice = selectedSeat ? selectedSeat.extraPrice : 0;
  const luxuryTax = Math.round(basePrice * 0.05);
  const totalAmount = basePrice + extraSeatPrice + luxuryTax;

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)] min-h-screen">
        <Header />

        {/* Global Cover Header */}
        <PageHero
          imageSrc="/templates/OHMT008-airline/airline-book-hero.png"
          imageAlt="럭셔리 항공 실루엣"
          label="프리미엄 항공권 예약"
          title={<>당신만의 <br /><span className="text-[var(--color-accent)] font-serif normal-case font-normal">A380 생추어리.</span></>}
          description="비행의 모든 요소를 맞춤 설정하세요. 엘리트 목적지를 선택하고, 프라이빗 스위트를 고르며, 미쉐린 다이닝을 사전 예약하세요."
        />

        {/* Interactive Booking Steps Grid */}
        <section className="py-14 md:py-32 bg-white">
          {/* Mobile price summary bar */}
          <div className="lg:hidden bg-[var(--color-primary)] text-white px-6 py-4 mb-0 flex justify-between items-center">
            <div>
              <p className="text-[0.65rem] uppercase tracking-widest text-white/40 font-bold">총 운임</p>
              <p className="text-[1.4rem] font-extrabold text-[var(--color-accent)] leading-none">${totalAmount.toLocaleString()} USD</p>
            </div>
            <div className="text-right">
              <p className="text-[0.65rem] uppercase tracking-widest text-white/40 font-bold">목적지</p>
              <p className="text-[0.85rem] font-bold text-white">{destination}</p>
            </div>
          </div>

          <div className="max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 md:gap-20 items-start">

            {/* Left Col: Dynamic Step Flow Container */}
            <div className="lg:col-span-8 space-y-10 md:space-y-16">
              
              {/* Step Progress indicators - Editorial Clean timeline */}
              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-8">
                {[
                  { num: 1, label: "경로 선택" },
                  { num: 2, label: "프라이빗 스위트" },
                  { num: 3, label: "탑승권 발급" }
                ].map((s) => (
                  <div key={s.num} className="flex items-center gap-4 select-none">
                    <span className={` text-xl font-bold transition-colors duration-300 ${
                      step >= s.num ? "text-[var(--color-accent)]" : "text-[var(--color-border)]"
                    }`}>
                      0{s.num}
                    </span>
                    <span className={`text-[14px] font-bold uppercase tracking-widest hidden sm:inline ${
                      step >= s.num ? "text-[var(--color-primary)]" : "text-[#7A7A7A]"
                    }`}>{s.label}</span>
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                
                {/* STEP 1: DESTINATION & CABIN SELECTION */}
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-8 md:space-y-12 text-left"
                  >
                    <div className="space-y-4">
                      <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">Step 01</span>
                      <h2 className="text-[clamp(1.3rem,3vw,2.5rem)] font-[family-name:var(--theme-font-heading)] font-bold text-[var(--color-primary)] uppercase tracking-tight leading-tight">
                        경로 및 객실 등급 선택.
                      </h2>
                      <div className="h-[2px] bg-[var(--color-accent)] w-12" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                      {/* From Field (Read-only underline input) */}
                      <div className="space-y-3">
                        <label className="text-[14px] font-bold uppercase tracking-widest text-[#7A7A7A]">출발지</label>
                        <div className="w-full border-b border-[var(--color-border)] py-3 bg-transparent font-bold text-[18px] text-[var(--color-primary)] flex items-center justify-between">
                          <span>서울 CDG (대한민국)</span>
                          <Plane size={16} className="text-[var(--color-accent)]" />
                        </div>
                      </div>

                      {/* To Field (Interactive underline input) */}
                      <div className="space-y-3">
                        <label className="text-[14px] font-bold uppercase tracking-widest text-[#7A7A7A]">도착지</label>
                        <select 
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          className="w-full border-b border-[var(--color-border)] py-3 bg-transparent font-bold text-[18px] text-[var(--color-primary)] rounded-none focus:outline-none focus:border-[var(--color-accent)] cursor-pointer"
                        >
                          <option value="Paris">파리 CDG (프랑스) - $6,900</option>
                          <option value="Tokyo">도쿄 NRT (일본) - $2,800</option>
                          <option value="New York">뉴욕 JFK (미국) - $8,500</option>
                          <option value="Dubai">두바이 DXB (UAE) - $7,200</option>
                        </select>
                      </div>
                    </div>

                    {/* Cabin Class Selection Typographic list (No boxes) */}
                    <div className="space-y-6 pt-4">
                      <label className="text-[14px] font-bold uppercase tracking-widest text-[#7A7A7A] block">프리미엄 객실 등급</label>
                      <div className="space-y-0 divide-y divide-[var(--color-border)]">
                        {[
                          { id: "First", name: "플래그십 프라이빗 스위트", desc: "밀폐된 구조적 공간, 미쉐린 코스 다이닝 & 180° 플랫베드." },
                          { id: "Business", name: "로얄 비즈니스 클래스", desc: "향상된 쉘 프라이버시, Krug 와인 플라이트 & 직통 통로." }
                        ].map((c) => {
                          const isSelected = cabinClass === c.id;
                          return (
                            <div
                              key={c.id}
                              onClick={() => setCabinClass(c.id)}
                              className="group py-6 cursor-pointer flex justify-between items-center transition-colors duration-300 relative select-none"
                            >
                              <div className="space-y-1 flex-1">
                                <div className="flex items-center gap-3">
                                  <h4 className={`font-bold text-[16px] uppercase tracking-wider transition-colors duration-300 ${
                                    isSelected ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"
                                  }`}>
                                    {c.name}
                                  </h4>
                  {isSelected && (
                    <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full inline-block" />
                  )}
                                </div>
                                <p className="text-[14px] text-[#7A7A7A] normal-case leading-relaxed font-normal">
                                  {c.desc}
                                </p>
                              </div>

                              {isSelected && (
                  <motion.div
                    layoutId="activeCabinUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent)]"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <button 
                      onClick={() => setStep(2)}
                      className="w-full sm:w-fit px-12 py-4 bg-[var(--color-primary)] text-[var(--color-accent)] text-[14px] font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-[var(--color-primary)]/90 transition-colors duration-300 cursor-pointer rounded-none"
                    >
                      좌석 선택하기 <ChevronRight size={14} />
                    </button>
                  </motion.div>
                )}

                {/* STEP 2: INTERACTIVE A380 SEAT MAP */}
                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-8 md:space-y-12 text-left"
                  >
                    <div className="space-y-4">
                      <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">Step 02</span>
                      <h2 className="text-[clamp(1.3rem,3vw,2.5rem)] font-[family-name:var(--theme-font-heading)] font-bold text-[var(--color-primary)] uppercase tracking-tight leading-tight">
                        A380 객실 스위트 맵.
                      </h2>
                      <div className="h-[2px] bg-[var(--color-accent)] w-12" />
                      <p className="text-[14px] text-[#7A7A7A] leading-relaxed normal-case">
                        원하는 공간을 선택하세요. 아래 이용 가능한 좌석을 클릭하여 맞춤 물리적 특전을 확인하고 선택하세요.
                      </p>
                    </div>

                    {/* A380 Suite Layout grid mapping (Keep matrix strictly for alignment, but styling is extremely lightweight) */}
                    <div className="p-8 space-y-8 max-w-lg mx-auto bg-[var(--color-bg-secondary)] rounded-3xl">
                      <div className="text-center pb-4 border-b border-[var(--color-border)]">
                        <span className="text-[14px] uppercase font-bold tracking-[0.4em] text-[#7A7A7A]">A380 상부 데크 전방</span>
                      </div>

                      {/* Map rows */}
                      <div className="grid grid-cols-4 gap-4 justify-center">
                        {seats.map((seat) => {
                          const isOccupied = seat.status === "Occupied";
                          const isSelected = seat.status === "Selected";
                          return (
                            <button
                              key={seat.id}
                              disabled={isOccupied}
                              onClick={() => handleSeatClick(seat)}
                              className={`aspect-square flex flex-col items-center justify-center text-[14px] font-bold transition-colors duration-300 relative rounded-none cursor-pointer ${
                                isOccupied
                                  ? "bg-neutral-100 border border-neutral-200 text-neutral-400 cursor-not-allowed"
                                  : isSelected
                                    ? "bg-[var(--color-accent)] text-[var(--color-primary)]"
                                    : "bg-white border border-[var(--color-border)] text-[var(--color-primary)] hover:border-[var(--color-accent)]"
                              }`}
                            >
                              <Armchair size={18} className="mb-1" />
                              <span>{seat.id}</span>
                              
                              {/* Extra price mini tag */}
                              {!isOccupied && (
                                <span className={`absolute bottom-2 text-[13px] font-bold ${
                                  isSelected ? "text-[var(--color-primary)]/80" : "text-[#7A7A7A]"
                                }`}>+${seat.extraPrice}</span>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Map Legend */}
                      <div className="flex justify-center gap-6 pt-4 border-t border-[var(--color-border)] text-[14px] font-bold uppercase tracking-wider text-[#7A7A7A]">
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 bg-white border border-[var(--color-border)] block rounded-md" /> 예약 가능
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 bg-[var(--color-accent)] block rounded-md" /> 선택됨
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 bg-neutral-200 block rounded-md" /> 선점됨
                        </div>
                      </div>
                    </div>

                    {/* Selected Seat detail box - Typography style */}
                    {selectedSeat && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="py-6 border-t-2 border-[var(--color-accent)] normal-case"
                      >
                        <h4 className="font-bold text-[16px] uppercase tracking-wider text-[var(--color-accent)] mb-2">스위트 {selectedSeat.id} 하이라이트</h4>
                        <p className="text-[14px] text-[#7A7A7A] leading-relaxed font-normal mb-2">{selectedSeat.perk}</p>
                        <p className="text-[16px] font-bold text-[var(--color-primary)]">객실 추가 요금: +${selectedSeat.extraPrice} USD</p>
                      </motion.div>
                    )}

                    <div className="flex gap-4">
                      <button 
                        onClick={() => setStep(1)}
                        className="px-10 py-4 border border-[var(--color-border)] text-[var(--color-primary)] text-[14px] font-bold uppercase tracking-wider hover:border-[var(--color-primary)] transition-all cursor-pointer rounded-none"
                      >
                        경로로 돌아가기
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        disabled={!selectedSeat}
                        className="px-12 py-4 bg-[var(--color-primary)] text-[var(--color-accent)] text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-[var(--color-primary)]/90 transition-colors duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed rounded-none"
                      >
                        탑승권 확정
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: SUCCESS BESPOKE BOARDING PASS */}
                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-12 text-center"
                  >
                    <div className="space-y-4 text-center">
                      <div className="w-16 h-16 bg-[var(--color-accent)] flex items-center justify-center mx-auto mb-6 rounded-full">
                        <Check size={28} className="text-[var(--color-primary)] font-bold" />
                      </div>
                      <h2 className="text-3xl font-[family-name:var(--theme-font-heading)] font-bold text-[var(--color-primary)]">맞춤 탑승권이 생성되었습니다.</h2>
                      <p className="text-[14px] text-[#7A7A7A] max-w-md mx-auto leading-relaxed normal-case">
                        프라이빗 생추어리가 예약되었습니다. 럭셔리 스카이라인 티켓 인보이스 요약을 확인하세요.
                      </p>
                    </div>

                    {/* Highly stylized Skyline boarding ticket pass */}
                    <div className="p-8 max-w-xl mx-auto bg-[var(--color-primary)] text-white relative overflow-hidden rounded-[32px]">
                      <div className="absolute right-[-40px] top-[-40px] w-32 h-32 bg-white/5 rounded-full" />
                      
                      {/* Pass details */}
                      <div className="flex justify-between items-start border-b border-white/10 pb-6 mb-8">
                        <div>
                          <p className="text-[14px] uppercase tracking-[0.3em] text-[var(--color-accent)] font-bold">비누스 항공 프리미엄 패스</p>
                          <h3 className="font-[family-name:var(--theme-font-heading)] text-xl font-bold tracking-tight text-white mt-1">일등석 스위트</h3>
                        </div>
                        <span className="text-[18px] text-[var(--color-accent)] font-black bg-[var(--color-accent)]/10 px-4 py-1.5 rounded-full">{selectedSeat?.id}</span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left normal-case mb-8">
                        <div>
                          <p className="text-[14px] uppercase tracking-[0.2em] text-white/30 font-bold">승객</p>
                          <p className="text-[14px] font-bold text-white pt-1">맞춤 고객</p>
                        </div>
                        <div>
                          <p className="text-[14px] uppercase tracking-[0.2em] text-white/30 font-bold">경로</p>
                          <p className="text-[14px] font-bold text-white pt-1">ICN → CDG</p>
                        </div>
                        <div>
                          <p className="text-[14px] uppercase tracking-[0.2em] text-white/30 font-bold">날짜</p>
                          <p className="text-[14px] font-bold text-white pt-1">26 MAY 2026</p>
                        </div>
                        <div>
                          <p className="text-[14px] uppercase tracking-[0.2em] text-white/30 font-bold">생추어리</p>
                          <p className="text-[14px] font-bold text-[var(--color-accent)] pt-1">Suite {selectedSeat?.id}</p>
                        </div>
                      </div>

                      <div className="border-t border-dashed border-white/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div className="text-left">
                          <p className="text-[14px] uppercase tracking-[0.2em] text-white/30 font-bold">총 운임 청구액</p>
                          <p className="text-[22px] font-extrabold text-[var(--color-accent)]">${totalAmount.toLocaleString()} USD</p>
                        </div>
                          <span className="text-[14px] uppercase font-bold tracking-widest border border-[var(--color-accent)]/45 px-6 py-2.5 rounded-full">
                            스카이패스 활성화
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center pt-4">
                      <button 
                        onClick={() => {
                          setStep(1);
                          setSelectedSeat(null);
                        }}
                        className="px-12 py-4 bg-[var(--color-primary)] text-[var(--color-accent)] text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-[var(--color-primary)]/90 transition-colors duration-300 cursor-pointer rounded-none"
                      >
                        다른 항공편 예약
                      </button>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

            </div>

            {/* Right Col: Real-time Live Invoice Summary - desktop only */}
            <div className="hidden lg:block lg:col-span-4 space-y-8 sticky top-28 lg:pl-10">
              <h3 className="font-[family-name:var(--theme-font-heading)] text-lg font-bold text-[var(--color-primary)] uppercase tracking-wider pb-4 border-b-2 border-[var(--color-primary)]">
                요금 요약
              </h3>

              <div className="space-y-4 text-[14px] font-bold normal-case text-[#7A7A7A] pb-6 border-b border-[var(--color-border)]">
                <div className="flex justify-between items-baseline py-1">
                  <span className="font-normal">기본 객실 운임 ({destination})</span>
                  <span className="text-[var(--color-primary)]">${basePrice.toLocaleString()} USD</span>
                </div>
                <div className="flex justify-between items-baseline py-1">
                  <span className="font-normal">스위트 추가 요금 ({selectedSeat ? selectedSeat.id : "없음"})</span>
                  <span className="text-[var(--color-primary)]">+${extraSeatPrice} USD</span>
                </div>
                <div className="flex justify-between items-baseline py-1">
                  <span className="font-normal">엘리트 서비스 세금 (5%)</span>
                  <span className="text-[var(--color-primary)]">${luxuryTax} USD</span>
                </div>
              </div>

              {/* Total Row */}
              <div className="pt-4 flex flex-col gap-3">
                <span className="text-[14px] uppercase font-bold tracking-widest text-[var(--color-primary)]">
                  총 금액
                </span>
                <div>
                  <span className="text-[32px] font-extrabold text-[var(--color-accent)] leading-none block">
                    ${totalAmount.toLocaleString()} USD
                  </span>
                  <p className="text-[14px] text-[#7A7A7A] normal-case leading-relaxed font-normal mt-3">
                    *세금, 럭셔리 공항 라운지 이용, 샴페인, 미쉐린 스타일 식사 세트가 최종 프리미엄 스카이패스 요금에 모두 포함됩니다.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function BookPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <BookPageContent {...props} />
    </React.Suspense>
  );
}
