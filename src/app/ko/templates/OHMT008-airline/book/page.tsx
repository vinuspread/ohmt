// src/app/ko/templates/OHMT008-airline/book/page.tsx
"use client";

import React, { useState } from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { Plane, Compass, User, Armchair, ChevronRight, Check } from "lucide-react";
import { PageHero } from "../_components/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import TemplateSelect from '../_components/TemplateSelect'

interface Seat {
  id: string;
  type: "Suite" | "Business" | "Standard";
  status: "Available" | "Occupied" | "Selected";
  perk: string;
  extraPrice: number;
}

const formatWon = (amount: number) => `${amount.toLocaleString("ko-KR")}원`;

function BookPageContent() {
  const [step, setStep] = useState(1); // 1: Search, 2: Seat Map, 3: Success
  const [destination, setDestination] = useState("Paris");
  const [cabinClass, setCabinClass] = useState("First");
  const [selectedSeat, setSelectedSeat] = useState<Seat | null>(null);
  
  // Dummy flight base prices matching destinationData
  const basePrices: Record<string, number> = {
    Paris: 6_900_000,
    Tokyo: 2_800_000,
    "New York": 8_500_000,
    Dubai: 7_200_000,
  };

  const initialSeats: Seat[] = [
    { id: "1A", type: "Suite", status: "Available", perk: "창가형 독립 스위트 · 프리미엄 샴페인 서비스", extraPrice: 500_000 },
    { id: "1B", type: "Suite", status: "Occupied", perk: "두 좌석을 연결할 수 있는 중앙 더블 스위트", extraPrice: 450_000 },
    { id: "1C", type: "Suite", status: "Available", perk: "중앙 더블 스위트 · 개인 수납장", extraPrice: 450_000 },
    { id: "1D", type: "Suite", status: "Available", perk: "창가형 독립 스위트 · 기내 다이닝 바 이용", extraPrice: 500_000 },
    { id: "2A", type: "Suite", status: "Available", perk: "창가형 스위트 · 개인 조명 조절", extraPrice: 400_000 },
    { id: "2B", type: "Suite", status: "Occupied", perk: "중앙 독립 스위트", extraPrice: 350_000 },
    { id: "2C", type: "Suite", status: "Available", perk: "중앙 독립 스위트", extraPrice: 350_000 },
    { id: "2D", type: "Suite", status: "Available", perk: "창가형 스위트 · 32인치 4K 스크린", extraPrice: 400_000 },
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

  const basePrice = basePrices[destination] || 5_000_000;
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
          imageAlt="OHMT 항공기"
          label="항공권 예약"
          title={<>나에게 맞는 <br /><span className="text-[var(--color-accent)] font-[family-name:var(--font-heading)] normal-case font-[var(--font-weight-accent)]">A380 스위트.</span></>}
          description={"출발지와 목적지, 객실 등급과 좌석을 순서대로 선택하세요.\n원하는 기내식과 추가 서비스도 예약 단계에서 확인할 수 있습니다."}
        />

        {/* Interactive Booking Steps Grid */}
        <section className="py-14 md:py-32 bg-white">
          {/* Mobile price summary bar */}
          <div className="lg:hidden bg-[var(--color-primary)] text-white px-6 py-4 mb-0 flex justify-between items-center">
            <div>
              <p className="text-[0.65rem] uppercase tracking-widest text-white/40 font-bold">예상 총액</p>
              <p className="text-[1.4rem] font-extrabold text-[var(--color-accent)] leading-none">{formatWon(totalAmount)}</p>
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
                  { num: 1, label: "여정 선택" },
                  { num: 2, label: "프라이빗 스위트" },
                  { num: 3, label: "예약 확인" }
                ].map((s) => (
                  <div key={s.num} className="flex items-center gap-4 select-none">
                    <span className={` text-xl font-bold transition-colors duration-300 ${
                      step >= s.num ? "text-[var(--color-accent)]" : "text-[var(--color-border)]"
                    }`}>
                      0{s.num}
                    </span>
                    <span className={`text-sm font-bold uppercase tracking-widest hidden sm:inline ${
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
                      <span className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">Step 01</span>
                      <h2 className="text-[length:var(--text-h3)] font-[family-name:var(--theme-font-heading)] font-[var(--font-weight-heading)] text-[var(--color-primary)] uppercase tracking-tight leading-[var(--leading-heading)]">
                        여정과 객실 등급을 선택하세요.
                      </h2>
                      <div className="h-[2px] bg-[var(--color-accent)] w-12" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                      {/* From Field (Read-only underline input) */}
                      <div className="space-y-3">
                        <label className="text-sm font-bold uppercase tracking-widest text-[#7A7A7A]">출발지</label>
                        <div className="w-full border-b border-[var(--color-border)] py-3 bg-transparent font-bold text-lg text-[var(--color-primary)] flex items-center justify-between">
                          <span>서울 ICN (대한민국)</span>
                          <Plane size={16} className="text-[var(--color-accent)]" />
                        </div>
                      </div>

                      {/* To Field (Interactive underline input) */}
                      <div className="space-y-3">
                        <label className="text-sm font-bold uppercase tracking-widest text-[#7A7A7A]">도착지</label>
                        <TemplateSelect
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          className="w-full border-b border-[var(--color-border)] py-3 bg-transparent font-bold text-lg text-[var(--color-primary)] rounded-none focus:outline-none focus:border-[var(--color-accent)] cursor-pointer"
                        >
                          <option value="Paris">파리 CDG (프랑스) - 6,900,000원</option>
                          <option value="Tokyo">도쿄 NRT (일본) - 2,800,000원</option>
                          <option value="New York">뉴욕 JFK (미국) - 8,500,000원</option>
                          <option value="Dubai">두바이 DXB (UAE) - 7,200,000원</option>
                        </TemplateSelect>
                      </div>
                    </div>

                    {/* Cabin Class Selection Typographic list (No boxes) */}
                    <div className="space-y-6 pt-4">
                      <label className="text-sm font-bold uppercase tracking-widest text-[#7A7A7A] block">객실 등급</label>
                      <div className="space-y-0 divide-y divide-[var(--color-border)]">
                        {[
                          { id: "First", name: "퍼스트 클래스 스위트", desc: "슬라이딩 도어와 180° 플랫베드, 코스형 기내식이 제공됩니다." },
                          { id: "Business", name: "비즈니스 클래스", desc: "칸막이형 좌석과 전 좌석 통로 접근, 와인 페어링 서비스가 제공됩니다." }
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
                                  <h4 className={`font-bold text-base uppercase tracking-wider transition-colors duration-300 ${
                                    isSelected ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"
                                  }`}>
                                    {c.name}
                                  </h4>
                  {isSelected && (
                    <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full inline-block" />
                  )}
                                </div>
                                <p className="text-sm text-[#7A7A7A] normal-case leading-relaxed font-normal">
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
                      className="w-full sm:w-fit px-12 py-4 bg-[var(--color-primary)] text-[var(--color-accent)] text-sm font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-[var(--color-primary)]/90 transition-colors duration-300 cursor-pointer rounded-none"
                    >
                      좌석 선택 <ChevronRight size={14} />
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
                      <span className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">Step 02</span>
                      <h2 className="text-[length:var(--text-h3)] font-[family-name:var(--theme-font-heading)] font-[var(--font-weight-heading)] text-[var(--color-primary)] uppercase tracking-tight leading-[var(--leading-heading)]">
                        A380 좌석 배치도
                      </h2>
                      <div className="h-[2px] bg-[var(--color-accent)] w-12" />
                      <p className="text-sm text-[#7A7A7A] leading-relaxed normal-case">
                        예약 가능한 좌석을 선택하면 위치와 좌석별 편의 기능, 추가 요금을 확인할 수 있습니다.
                      </p>
                    </div>

                    {/* A380 Suite Layout grid mapping (Keep matrix strictly for alignment, but styling is extremely lightweight) */}
                    <div className="p-8 space-y-8 max-w-lg mx-auto bg-[var(--color-bg-secondary)] rounded-3xl">
                      <div className="text-center pb-4 border-b border-[var(--color-border)]">
                        <span className="text-sm uppercase font-bold tracking-[0.4em] text-[#7A7A7A]">A380 상부 데크 앞쪽</span>
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
                              className={`aspect-square flex flex-col items-center justify-center text-sm font-bold transition-colors duration-300 relative rounded-none cursor-pointer ${
                                isOccupied
                                  ? "bg-neutral-100 border border-neutral-200 text-neutral-500 cursor-not-allowed"
                                  : isSelected
                                    ? "bg-[var(--color-accent)] text-[var(--color-primary)]"
                                    : "bg-white border border-[var(--color-border)] text-[var(--color-primary)] hover:border-[var(--color-accent)]"
                              }`}
                            >
                              <Armchair size={18} className="mb-1" />
                              <span>{seat.id}</span>
                              
                              {/* Extra price mini tag */}
                              {!isOccupied && (
                                <span className={`absolute bottom-2 text-xs font-bold ${
                                  isSelected ? "text-[var(--color-primary)]/80" : "text-[#7A7A7A]"
                                }`}>+{formatWon(seat.extraPrice)}</span>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Map Legend */}
                      <div className="flex justify-center gap-6 pt-4 border-t border-[var(--color-border)] text-sm font-bold uppercase tracking-wider text-[#7A7A7A]">
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 bg-white border border-[var(--color-border)] block rounded-md" /> 예약 가능
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 bg-[var(--color-accent)] block rounded-md" /> 선택됨
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 bg-neutral-200 block rounded-md" /> 예약 완료
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
                        <h4 className="font-bold text-base uppercase tracking-wider text-[var(--color-accent)] mb-2">스위트 {selectedSeat.id} 주요 특징</h4>
                        <p className="text-sm text-[#7A7A7A] leading-relaxed font-normal mb-2">{selectedSeat.perk}</p>
                        <p className="text-base font-bold text-[var(--color-primary)]">좌석 추가 요금: +{formatWon(selectedSeat.extraPrice)}</p>
                      </motion.div>
                    )}

                    <div className="flex gap-4">
                      <button 
                        onClick={() => setStep(1)}
                        className="px-10 py-4 border border-[var(--color-border)] text-[var(--color-primary)] text-sm font-bold uppercase tracking-wider hover:border-[var(--color-primary)] transition-all cursor-pointer rounded-none"
                      >
                        여정 선택으로 돌아가기
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        disabled={!selectedSeat}
                        className="px-12 py-4 bg-[var(--color-primary)] text-[var(--color-accent)] text-sm font-bold uppercase tracking-[0.2em] hover:bg-[var(--color-primary)]/90 transition-colors duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed rounded-none"
                      >
                        예약 확정
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
                      <h2 className="text-3xl font-[family-name:var(--theme-font-heading)] font-[var(--font-weight-heading)] text-[var(--color-primary)]">예약이 완료되었습니다.</h2>
                      <p className="text-sm text-[#7A7A7A] max-w-md mx-auto leading-relaxed normal-case">
                        선택한 여정과 좌석이 예약되었습니다. 아래에서 예약 정보와 결제 금액을 확인하세요.
                      </p>
                    </div>

                    {/* Highly stylized Skyline boarding ticket pass */}
                    <div className="p-8 max-w-xl mx-auto bg-[var(--color-primary)] text-white relative overflow-hidden rounded-[32px]">
                      <div className="absolute right-[-40px] top-[-40px] w-32 h-32 bg-white/5 rounded-full" />
                      
                      {/* Pass details */}
                      <div className="flex justify-between items-start border-b border-white/10 pb-6 mb-8">
                        <div>
                          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)] font-bold">OHMT 탑승권</p>
                          <h3 className="font-[family-name:var(--theme-font-heading)] text-xl font-[var(--font-weight-heading)] tracking-tight text-white mt-1">퍼스트 클래스 스위트</h3>
                        </div>
                        <span className="text-lg text-[var(--color-accent)] font-black bg-[var(--color-accent)]/10 px-4 py-1.5 rounded-full">{selectedSeat?.id}</span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left normal-case mb-8">
                        <div>
                          <p className="text-sm uppercase tracking-[0.2em] text-white/30 font-bold">승객</p>
                          <p className="text-sm font-bold text-white pt-1">예약 승객</p>
                        </div>
                        <div>
                          <p className="text-sm uppercase tracking-[0.2em] text-white/30 font-bold">경로</p>
                          <p className="text-sm font-bold text-white pt-1">ICN → CDG</p>
                        </div>
                        <div>
                          <p className="text-sm uppercase tracking-[0.2em] text-white/30 font-bold">날짜</p>
                          <p className="text-sm font-bold text-white pt-1">26 MAY 2026</p>
                        </div>
                        <div>
                          <p className="text-sm uppercase tracking-[0.2em] text-white/30 font-bold">좌석</p>
                          <p className="text-sm font-bold text-[var(--color-accent)] pt-1">Suite {selectedSeat?.id}</p>
                        </div>
                      </div>

                      <div className="border-t border-dashed border-white/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div className="text-left">
                          <p className="text-sm uppercase tracking-[0.2em] text-white/30 font-bold">최종 결제 금액</p>
                          <p className="text-2xl font-extrabold text-[var(--color-accent)]">{formatWon(totalAmount)}</p>
                        </div>
                          <span className="text-sm uppercase font-bold tracking-widest border border-[var(--color-accent)]/45 px-6 py-2.5 rounded-full">
                            탑승권 확인
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center pt-4">
                      <button 
                        onClick={() => {
                          setStep(1);
                          setSelectedSeat(null);
                        }}
                        className="px-12 py-4 bg-[var(--color-primary)] text-[var(--color-accent)] text-sm font-bold uppercase tracking-[0.2em] hover:bg-[var(--color-primary)]/90 transition-colors duration-300 cursor-pointer rounded-none"
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
              <h3 className="font-[family-name:var(--theme-font-heading)] text-lg font-[var(--font-weight-heading)] text-[var(--color-primary)] uppercase tracking-wider pb-4 border-b-2 border-[var(--color-primary)]">
                요금 요약
              </h3>

              <div className="space-y-4 text-sm font-bold normal-case text-[#7A7A7A] pb-6 border-b border-[var(--color-border)]">
                <div className="flex justify-between items-baseline py-1">
                  <span className="font-normal">기본 항공 운임 ({destination})</span>
                  <span className="text-[var(--color-primary)]">{formatWon(basePrice)}</span>
                </div>
                <div className="flex justify-between items-baseline py-1">
                  <span className="font-normal">스위트 추가 요금 ({selectedSeat ? selectedSeat.id : "없음"})</span>
                  <span className="text-[var(--color-primary)]">+{formatWon(extraSeatPrice)}</span>
                </div>
                <div className="flex justify-between items-baseline py-1">
                  <span className="font-normal">세금 및 수수료 (5%)</span>
                  <span className="text-[var(--color-primary)]">{formatWon(luxuryTax)}</span>
                </div>
              </div>

              {/* Total Row */}
              <div className="pt-4 flex flex-col gap-3">
                <span className="text-sm uppercase font-bold tracking-widest text-[var(--color-primary)]">
                  총 금액
                </span>
                <div>
                  <span className="text-4xl font-extrabold text-[var(--color-accent)] leading-none block">
                    {formatWon(totalAmount)}
                  </span>
                  <p className="text-sm text-[#7A7A7A] normal-case leading-relaxed font-normal mt-3">
                    *표시된 금액에는 세금과 공항 라운지, 기본 기내식 및 객실별 제공 서비스가 포함됩니다.
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


export default function BookPage() {
  return (
    <React.Suspense fallback={null}>
      <BookPageContent />
    </React.Suspense>
  );
}
