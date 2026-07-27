// src/app/ko/templates/OHMT008-airline/loyalty/page.tsx
"use client";

import React, { useState } from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { Gift, Calculator, Award, ShieldAlert, Check } from "lucide-react";
import { PageHero } from "../_components/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import TemplateSelect from '../_components/TemplateSelect'

function LoyaltyPageContent() {
  const [selectedTier, setSelectedTier] = useState("Gold");
  const [route, setRoute] = useState("Paris");
  const [cabinClass, setCabinClass] = useState("First");

  const tiersFull = [
    { name: "Silver", miles: "0", color: "from-slate-350 to-slate-500 text-slate-900", accel: "10%", luggage: "1개 (23kg)" },
    { name: "Gold", miles: "30,000", color: "from-amber-400 to-yellow-600 text-yellow-950", accel: "25%", luggage: "2개 (32kg)" },
    { name: "Platinum", miles: "75,000", color: "from-emerald-400 to-teal-700 text-slate-950", accel: "50%", luggage: "3개 (32kg)" },
    { name: "Diamond", miles: "150,000", color: "from-rose-400 to-rose-700 text-slate-950", accel: "100%", luggage: "노선별 별도 기준" },
  ];

  // Miles Calculator Data
  const routeMiles: Record<string, number> = {
    Paris: 5600,
    Tokyo: 1200,
    "New York": 6800,
    Dubai: 4800,
  };

  const classMultiplier: Record<string, number> = {
    First: 2.0,
    Business: 1.5,
    Economy: 1.0,
  };

  const baseMiles = routeMiles[route] || 1000;
  const multiplier = classMultiplier[cabinClass] || 1.0;
  const accelRate = parseFloat(tiersFull.find(t => t.name === selectedTier)?.accel || "0") / 100;
  const earnedMiles = Math.round(baseMiles * multiplier);
  const bonusMiles = Math.round(earnedMiles * accelRate);
  const totalEarned = earnedMiles + bonusMiles;

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)] min-h-screen">
        <Header />

        {/* Hero Section */}
        <PageHero
          imageSrc="/templates/OHMT008-airline/airline-loyalty-hero.png"
          imageAlt="공항 라운지"
          label="스카이라인 멤버십"
          title={<>여행할수록 <br /><span className="text-[var(--color-accent)] font-[family-name:var(--font-heading)] normal-case font-[var(--font-weight-heading)]">더 많은 혜택을</span></>}
          description={"OHMT 스카이라인 멤버십에 가입하면 탑승 실적에 따라 마일리지 보너스와 우선 수속,\n공항 라운지 등 등급별 혜택을 받을 수 있습니다."}
        />

        {/* 1. Interactive Digital Skyline Pass Creator - Typography Focus */}
        <section className="py-14 md:py-32 bg-white">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            
            <div className="grid lg:grid-cols-12 gap-10 md:gap-20 items-center">
              
              {/* Left: Modern Asymmetric Tier list (No Box Containers) */}
              <div className="lg:col-span-7 space-y-10">
                <div className="space-y-4">
                  <span className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">멤버십 등급</span>
                  <h3 className="text-[length:var(--text-h2)] font-[family-name:var(--theme-font-heading)] font-[var(--font-weight-heading)] text-[var(--color-primary)] uppercase tracking-tight leading-[var(--leading-heading)]">
                    등급별 혜택을 확인하세요.
                  </h3>
                  <div className="h-[2px] bg-[var(--color-accent)] w-12" />
                </div>

                <div className="space-y-0 divide-y divide-[var(--color-border)]">
                  {tiersFull.map((t) => {
                    const isSelected = selectedTier === t.name;
                    return (
                      <div
                        key={t.name}
                        onClick={() => setSelectedTier(t.name)}
                        className="group py-6 cursor-pointer flex justify-between items-center transition-all duration-300 relative select-none"
                      >
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-3">
                            <h4 className={`font-bold text-lg uppercase tracking-wider transition-colors duration-300 ${
                              isSelected ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"
                            }`}>
                              {t.name} 등급
                            </h4>
                            <span className="text-sm text-[var(--color-accent)]">{t.miles} Mi</span>
                          </div>
                          <p className="text-sm text-[#7A7A7A] normal-case leading-relaxed font-normal">
                            <strong className="text-[var(--color-primary)] font-semibold">{t.luggage}</strong> 우선 수속과 <strong className="text-[var(--color-primary)] font-semibold">{t.accel}</strong> 추가 마일리지 혜택을 제공합니다.
                          </p>
                        </div>

                        {isSelected && (
                          <motion.div
                            layoutId="activeTierUnderline"
                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent)]"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Beautiful floating metallic pass (Clean, borderless card focus) */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="text-center pb-8 space-y-2">
                  <span className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] block">
                    디지털 멤버십 카드
                  </span>
                  <p className="text-sm text-[#7A7A7A] normal-case">
                    등급을 선택하면 멤버십 카드와 제공 혜택을 확인할 수 있습니다.
                  </p>
                </div>

                {/* Dynamic Pass Render */}
                <AnimatePresence mode="wait">
                  {tiersFull.map((t) => t.name === selectedTier && (
                    <motion.div
                      key={t.name}
                      initial={{ opacity: 0, rotateY: -30, scale: 0.95 }}
                      animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                      exit={{ opacity: 0, rotateY: 30, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                       className={`w-full max-w-[340px] h-[210px] bg-gradient-to-tr ${t.color} p-8 flex flex-col justify-between transition-all relative overflow-hidden group cursor-pointer rounded-3xl`}
                    >
                      <div className="absolute right-[-40px] top-[-40px] w-24 h-24 bg-white/10 rounded-full transition-transform duration-300" />
                      
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-xs uppercase tracking-widest font-black opacity-45">OHMT 스카이라인 클럽</p>
                          <h4 className="text-base font-black uppercase tracking-wider mt-1">{t.name} 멤버십</h4>
                        </div>
                        <Award size={22} className="opacity-70" />
                      </div>

                      <div className="normal-case">
                        <p className="text-xs uppercase tracking-widest opacity-45">회원 ID</p>
                        <p className="text-sm font-bold tracking-wider pt-0.5">SKY-5647-2026</p>
                      </div>

                      <div className="flex justify-between items-end border-t border-black/10 pt-4">
                        <div>
                          <p className="text-xs uppercase tracking-widest opacity-45">추가 적립</p>
                          <p className="text-sm font-bold">{t.accel} 보너스</p>
                        </div>
                          <span className="text-xs uppercase font-bold tracking-widest border border-current px-3 py-1 rounded-full">
                            회원 등급 적용
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

        {/* 2. Interactive Miles Earning Simulator - Clean Borderless Design */}
        <section className="py-14 md:py-32 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 md:gap-20 items-start">
            
            {/* Left Selector Deck (Typographic Underlines instead of box selectors) */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">마일 계산기</span>
                <h3 className="text-[length:var(--text-h2)] font-[family-name:var(--theme-font-heading)] font-[var(--font-weight-heading)] text-[var(--color-primary)] uppercase tracking-tight leading-[var(--leading-heading)]">
                  예상 적립 마일 계산
                </h3>
                <div className="h-[2px] bg-[var(--color-accent)] w-12" />
                <p className="text-sm text-[#7A7A7A] normal-case leading-relaxed font-normal pt-2">
                  노선과 객실 등급, 회원 등급을 선택하면 예상 적립 마일을 계산합니다.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                {/* Route Selector (Modern elegant select) */}
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-[#7A7A7A]">노선</label>
                  <TemplateSelect
                    value={route}
                    onChange={(e) => setRoute(e.target.value)}
                    className="w-full border-b border-[var(--color-border)] py-3 bg-transparent font-bold text-base text-[var(--color-primary)] rounded-none focus:outline-none focus:border-[var(--color-accent)] cursor-pointer"
                  >
                    <option value="Paris">서울–파리 ({routeMiles.Paris} Mi)</option>
                    <option value="Tokyo">서울–도쿄 ({routeMiles.Tokyo} Mi)</option>
                    <option value="New York">서울–뉴욕 ({routeMiles["New York"]} Mi)</option>
                    <option value="Dubai">서울–두바이 ({routeMiles.Dubai} Mi)</option>
                  </TemplateSelect>
                </div>

                {/* Cabin Class Selector */}
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-[#7A7A7A]">객실 등급</label>
                  <TemplateSelect
                    value={cabinClass}
                    onChange={(e) => setCabinClass(e.target.value)}
                    className="w-full border-b border-[var(--color-border)] py-3 bg-transparent font-bold text-base text-[var(--color-primary)] rounded-none focus:outline-none focus:border-[var(--color-accent)] cursor-pointer"
                  >
                    <option value="First">퍼스트 클래스 (2.0배)</option>
                    <option value="Business">비즈니스 클래스 (1.5배)</option>
                    <option value="Economy">이코노미 클래스 (1.0배)</option>
                  </TemplateSelect>
                </div>
              </div>
            </div>

            {/* Right Side: Earning Statement Display (Clean Typographic list) */}
            <div className="lg:col-span-5 space-y-8 lg:pl-10">
              <span className="text-sm font-bold uppercase tracking-widest text-[#7A7A7A] block">
                예상 적립 내역
              </span>

              <div className="space-y-4 text-sm font-bold normal-case text-[#7A7A7A] pb-6 border-b border-[var(--color-border)]">
                <div className="flex justify-between items-baseline py-2">
                  <span className="font-normal">기본 거리 마일</span>
                  <span className="text-[var(--color-primary)] font-semibold">{baseMiles} 마일</span>
                </div>
                <div className="flex justify-between items-baseline py-2">
                  <span className="font-normal">객실 등급 승수 ({cabinClass})</span>
                  <span className="text-[var(--color-primary)] font-semibold">{multiplier}배</span>
                </div>
                <div className="flex justify-between items-baseline py-2">
                  <span className="font-normal">회원 등급 보너스 ({selectedTier})</span>
                  <span className="text-[var(--color-primary)] font-semibold">+{accelRate * 100}% (+{bonusMiles} 마일)</span>
                </div>
              </div>

              {/* Total Earned Skyline Miles */}
              <div className="pt-4 flex flex-col gap-3">
                <span className="text-sm uppercase font-bold tracking-widest text-[var(--color-primary)]">
                  총 적립 마일
                </span>
                <div>
                  <span className="text-[length:var(--text-h2)] font-extrabold text-[var(--color-accent)] leading-none block">
                    {totalEarned.toLocaleString()} 마일
                  </span>
                  <p className="text-sm text-[#7A7A7A] normal-case leading-relaxed font-normal mt-2">
                    *실제 적립 마일은 구매한 운임과 탑승 노선, 회원 등급에 따라 달라질 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. Luxury Tier Perks Comparison Matrix - Sleek minimal styling */}
        <section className="py-14 md:py-32 bg-white">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10 space-y-20">
            <div className="text-center space-y-4">
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] block mb-2 mx-auto">
                  등급별 혜택
                </span>
                <h2 className="text-[length:var(--text-h2)] font-[family-name:var(--theme-font-heading)] font-[var(--font-weight-heading)] text-[var(--color-primary)] uppercase tracking-tight">
                  멤버십 등급별 주요 혜택을 비교하세요.
                </h2>
            </div>

            {/* Completely borderless typographic comparison list */}
            <div className="overflow-x-auto -mx-6 md:mx-0 px-6 md:px-0" style={{ scrollbarWidth: "none" }}>
              <table className="w-full min-w-[640px] text-left border-collapse text-xs md:text-sm normal-case">
                <thead>
                  <tr className="border-b border-[var(--color-primary)] text-[var(--color-primary)] font-bold uppercase tracking-wider text-sm">
                    <th className="py-6 pr-6">클럽 혜택</th>
                    <th className="py-6 px-6 text-center">Silver</th>
                    <th className="py-6 px-6 text-center text-[var(--color-accent)]">Gold</th>
                    <th className="py-6 px-6 text-center">Platinum</th>
                    <th className="py-6 pl-6 text-center">Diamond</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)] font-medium text-[#7A7A7A]">
                  <tr className="hover:bg-[var(--color-bg-secondary)] transition-colors">
                    <td className="py-8 pr-6 font-bold text-[var(--color-primary)]">추가 마일리지</td>
                    <td className="py-8 px-6 text-center">기본 적립</td>
                    <td className="py-8 px-6 text-center text-[var(--color-accent)] font-extrabold bg-[var(--color-bg-secondary)]/30">+25% 보너스</td>
                    <td className="py-8 px-6 text-center">+50% 보너스</td>
                    <td className="py-8 pl-6 text-center">+100% 보너스</td>
                  </tr>
                  <tr className="hover:bg-[var(--color-bg-secondary)] transition-colors">
                    <td className="py-8 pr-6 font-bold text-[var(--color-primary)]">공항 라운지 이용</td>
                    <td className="py-8 px-6 text-center text-neutral-300">이용 불가</td>
                    <td className="py-8 px-6 text-center text-[var(--color-accent)] font-extrabold bg-[var(--color-bg-secondary)]/30">OHMT 비즈니스 라운지</td>
                    <td className="py-8 px-6 text-center">일등석 라운지</td>
                    <td className="py-8 pl-6 text-center">퍼스트 클래스 전용 라운지</td>
                  </tr>
                  <tr className="hover:bg-[var(--color-bg-secondary)] transition-colors">
                    <td className="py-8 pr-6 font-bold text-[var(--color-primary)]">우선 체크인·탑승</td>
                    <td className="py-8 px-6 text-center">우선 탑승</td>
                    <td className="py-8 px-6 text-center text-[var(--color-accent)] font-extrabold bg-[var(--color-bg-secondary)]/30">비즈니스 전용 카운터</td>
                    <td className="py-8 px-6 text-center">일등석 카운터</td>
                    <td className="py-8 pl-6 text-center">전용 체크인 데스크</td>
                  </tr>
                  <tr className="hover:bg-[var(--color-bg-secondary)] transition-colors">
                    <td className="py-8 pr-6 font-bold text-[var(--color-primary)]">수하물 허용 한도</td>
                    <td className="py-8 px-6 text-center">1개 (23kg)</td>
                    <td className="py-8 px-6 text-center text-[var(--color-accent)] font-extrabold bg-[var(--color-bg-secondary)]/30">2개 (32kg)</td>
                    <td className="py-8 px-6 text-center">3개 (32kg)</td>
                    <td className="py-8 pl-6 text-center">노선별 기준 적용</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function LoyaltyPage() {
  return (
    <React.Suspense fallback={null}>
      <LoyaltyPageContent />
    </React.Suspense>
  );
}
