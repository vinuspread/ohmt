// src/app/ko/templates/OHMT016-airline-kr/loyalty/page.tsx
"use client";

import React, { useState } from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { Gift, Calculator, Award, ShieldAlert, Check } from "lucide-react";
import { PageHero } from "../_components/PageHero";
import { motion, AnimatePresence } from "framer-motion";

function LoyaltyPageContent() {
  const [selectedTier, setSelectedTier] = useState("Gold");
  const [route, setRoute] = useState("Paris");
  const [cabinClass, setCabinClass] = useState("First");

  const tiersFull = [
    { name: "Silver", miles: "0", color: "from-slate-350 to-slate-500 text-slate-900", accel: "10%", luggage: "1개 (23kg)" },
    { name: "Gold", miles: "30,000", color: "from-amber-400 to-yellow-600 text-yellow-950", accel: "25%", luggage: "2개 (32kg)" },
    { name: "Platinum", miles: "75,000", color: "from-emerald-400 to-teal-700 text-slate-950", accel: "50%", luggage: "3개 (32kg)" },
    { name: "Diamond", miles: "150,000", color: "from-rose-400 to-rose-700 text-slate-950", accel: "100%", luggage: "무제한 (스위트 우선)" },
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
          imageAlt="VIP 공항 라운지"
          label="스카이라인 로열티 클럽"
          title={<>모든 마일을 <br /><span className="text-[var(--color-accent)] font-serif normal-case font-normal">더 높이.</span></>}
          description="비누스 스카이라인 클럽에 가입하세요. 초고급 스위트, 프라이빗 VIP 공항 라운지, 가속 마일리지 적립, 엘리트 수하물 우선 서비스를 누리세요."
          align="center"
          descMaxWidth="max-w-[660px]"
        />

        {/* 1. Interactive Digital Skyline Pass Creator - Typography Focus */}
        <section className="py-14 md:py-32 bg-white">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            
            <div className="grid lg:grid-cols-12 gap-10 md:gap-20 items-center">
              
              {/* Left: Beautiful floating metallic pass (Clean, borderless card focus) */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="text-center pb-8 space-y-2">
                  <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] block">
                    인터랙티브 스카이라인 패스
                  </span>
                  <p className="text-[14px] text-[#7A7A7A] normal-case">
                    오른쪽에서 등급을 선택하여 카드 디자인을 변경하세요.
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
                          <p className="text-[13px] uppercase tracking-widest font-black opacity-45">비누스 스카이라인 클럽</p>
                          <h4 className="text-[16px] font-black uppercase tracking-wider mt-1">{t.name} 패스</h4>
                        </div>
                        <Award size={22} className="opacity-70" />
                      </div>

                      <div className="normal-case">
                        <p className="text-[13px] uppercase tracking-widest opacity-45">회원 ID</p>
                        <p className="text-[14px] font-bold tracking-wider pt-0.5">SKY-5647-2026</p>
                      </div>

                      <div className="flex justify-between items-end border-t border-black/10 pt-4">
                        <div>
                          <p className="text-[13px] uppercase tracking-widest opacity-45">마일 가속</p>
                          <p className="text-[14px] font-bold">{t.accel} 보너스</p>
                        </div>
                          <span className="text-[13px] uppercase font-bold tracking-widest border border-current px-3 py-1 rounded-full">
                            엘리트 활성
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Right: Modern Asymmetric Tier list (No Box Containers) */}
              <div className="lg:col-span-7 space-y-10">
                <div className="space-y-4">
                  <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">클럽 등급</span>
                  <h3 className="text-[clamp(1.5rem,4vw,3rem)] font-[family-name:var(--theme-font-heading)] font-bold text-[var(--color-primary)] uppercase tracking-tight leading-none">
                    럭셔리 여정을 가속화하세요.
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
                            <h4 className={`font-bold text-[18px] uppercase tracking-wider transition-colors duration-300 ${
                              isSelected ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"
                            }`}>
                              {t.name} 등급
                            </h4>
                            <span className="text-[14px] text-[var(--color-accent)]">{t.miles} Mi</span>
                          </div>
                          <p className="text-[14px] text-[#7A7A7A] normal-case leading-relaxed font-normal">
                            <strong className="text-[var(--color-primary)] font-semibold">{t.luggage}</strong> 수하물 우선 처리와 <strong className="text-[var(--color-primary)] font-semibold">{t.accel}</strong> 마일리지 가속 보너스를 누리세요.
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

            </div>
          </div>
        </section>

        {/* 2. Interactive Miles Earning Simulator - Clean Borderless Design */}
        <section className="py-14 md:py-32 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 md:gap-20 items-start">
            
            {/* Left Selector Deck (Typographic Underlines instead of box selectors) */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">마일 계산기</span>
                <h3 className="text-[clamp(1.5rem,4vw,3rem)] font-[family-name:var(--theme-font-heading)] font-bold text-[var(--color-primary)] uppercase tracking-tight leading-none">
                  보상 마일리지 계산
                </h3>
                <div className="h-[2px] bg-[var(--color-accent)] w-12" />
                <p className="text-[14px] text-[#7A7A7A] normal-case leading-relaxed font-normal pt-2">
                  프리미어 항공 경로와 객실 등급을 선택하세요. 시스템이 엘리트 클럽 등급 승수에 따라 스카이라인 적립 마일을 동적으로 계산합니다.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                {/* Route Selector (Modern elegant select) */}
                <div className="space-y-3">
                  <label className="text-[14px] font-bold uppercase tracking-widest text-[#7A7A7A]">항공 경로</label>
                  <select
                    value={route}
                    onChange={(e) => setRoute(e.target.value)}
                    className="w-full border-b border-[var(--color-border)] py-3 bg-transparent font-bold text-[16px] text-[var(--color-primary)] rounded-none focus:outline-none focus:border-[var(--color-accent)] cursor-pointer"
                  >
                    <option value="Paris">서울 CDG ({routeMiles.Paris} Mi)</option>
                    <option value="Tokyo">서울 NRT ({routeMiles.Tokyo} Mi)</option>
                    <option value="New York">서울 JFK ({routeMiles["New York"]} Mi)</option>
                    <option value="Dubai">서울 DXB ({routeMiles.Dubai} Mi)</option>
                  </select>
                </div>

                {/* Cabin Class Selector */}
                <div className="space-y-3">
                  <label className="text-[14px] font-bold uppercase tracking-widest text-[#7A7A7A]">객실 등급</label>
                  <select
                    value={cabinClass}
                    onChange={(e) => setCabinClass(e.target.value)}
                    className="w-full border-b border-[var(--color-border)] py-3 bg-transparent font-bold text-[16px] text-[var(--color-primary)] rounded-none focus:outline-none focus:border-[var(--color-accent)] cursor-pointer"
                  >
                    <option value="First">일등석 스위트 (2.0배)</option>
                    <option value="Business">비즈니스 클래스 (1.5배)</option>
                    <option value="Economy">이코노미 클래스 (1.0배)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right Side: Earning Statement Display (Clean Typographic list) */}
            <div className="lg:col-span-5 space-y-8 lg:pl-10">
              <span className="text-[14px] font-bold uppercase tracking-widest text-[#7A7A7A] block">
                적립 명세서
              </span>

              <div className="space-y-4 text-[14px] font-bold normal-case text-[#7A7A7A] pb-6 border-b border-[var(--color-border)]">
                <div className="flex justify-between items-baseline py-2">
                  <span className="font-normal">기본 거리 마일</span>
                  <span className="text-[var(--color-primary)] font-semibold">{baseMiles} 마일</span>
                </div>
                <div className="flex justify-between items-baseline py-2">
                  <span className="font-normal">객실 등급 승수 ({cabinClass})</span>
                  <span className="text-[var(--color-primary)] font-semibold">{multiplier}배</span>
                </div>
                <div className="flex justify-between items-baseline py-2">
                  <span className="font-normal">엘리트 가속 보너스 ({selectedTier})</span>
                  <span className="text-[var(--color-primary)] font-semibold">+{accelRate * 100}% (+{bonusMiles} 마일)</span>
                </div>
              </div>

              {/* Total Earned Skyline Miles */}
              <div className="pt-4 flex flex-col gap-3">
                <span className="text-[14px] uppercase font-bold tracking-widest text-[var(--color-primary)]">
                  총 적립 마일
                </span>
                <div>
                  <span className="text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold text-[var(--color-accent)] leading-none block">
                    {totalEarned.toLocaleString()} 마일
                  </span>
                  <p className="text-[14px] text-[#7A7A7A] normal-case leading-relaxed font-normal mt-2">
                    *마일리지 계산은 스카이라인 프리미엄 등급 지수 및 거리 매트릭스 규칙에 따라 안전하게 처리됩니다.
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
                <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] block mb-2 mx-auto">
                  상세 혜택 매트릭스
                </span>
                <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-[family-name:var(--theme-font-heading)] font-bold text-[var(--color-primary)] uppercase tracking-tight">
                  스카이라인 멤버십 혜택 비교.
                </h2>
            </div>

            {/* Completely borderless typographic comparison list */}
            <div className="overflow-x-auto -mx-6 md:mx-0 px-6 md:px-0" style={{ scrollbarWidth: "none" }}>
              <table className="w-full min-w-[640px] text-left border-collapse text-[13px] md:text-[14px] normal-case">
                <thead>
                  <tr className="border-b border-[var(--color-primary)] text-[var(--color-primary)] font-bold uppercase tracking-wider text-[14px]">
                    <th className="py-6 pr-6">클럽 혜택</th>
                    <th className="py-6 px-6 text-center">Silver</th>
                    <th className="py-6 px-6 text-center text-[var(--color-accent)]">Gold</th>
                    <th className="py-6 px-6 text-center">Platinum</th>
                    <th className="py-6 pl-6 text-center">Diamond</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)] font-medium text-[#7A7A7A]">
                  <tr className="hover:bg-[var(--color-bg-secondary)] transition-colors">
                    <td className="py-8 pr-6 font-bold text-[var(--color-primary)]">마일리지 적립 가속</td>
                    <td className="py-8 px-6 text-center">기본 적립</td>
                    <td className="py-8 px-6 text-center text-[var(--color-accent)] font-extrabold bg-[var(--color-bg-secondary)]/30">+25% 보너스</td>
                    <td className="py-8 px-6 text-center">+50% 보너스</td>
                    <td className="py-8 pl-6 text-center">+100% 보너스</td>
                  </tr>
                  <tr className="hover:bg-[var(--color-bg-secondary)] transition-colors">
                    <td className="py-8 pr-6 font-bold text-[var(--color-primary)]">공항 라운지 VIP 이용</td>
                    <td className="py-8 px-6 text-center text-neutral-300">이용 불가</td>
                    <td className="py-8 px-6 text-center text-[var(--color-accent)] font-extrabold bg-[var(--color-bg-secondary)]/30">비누스 비즈니스 라운지</td>
                    <td className="py-8 px-6 text-center">일등석 라운지</td>
                    <td className="py-8 pl-6 text-center">프라이빗 시그니처 VIP 라운지</td>
                  </tr>
                  <tr className="hover:bg-[var(--color-bg-secondary)] transition-colors">
                    <td className="py-8 pr-6 font-bold text-[var(--color-primary)]">프리미엄 체크인 / 우선 수속</td>
                    <td className="py-8 px-6 text-center">우선 탑승</td>
                    <td className="py-8 px-6 text-center text-[var(--color-accent)] font-extrabold bg-[var(--color-bg-secondary)]/30">엘리트 비즈니스 카운터</td>
                    <td className="py-8 px-6 text-center">일등석 카운터</td>
                    <td className="py-8 pl-6 text-center">전용 쇼퍼 리셉션</td>
                  </tr>
                  <tr className="hover:bg-[var(--color-bg-secondary)] transition-colors">
                    <td className="py-8 pr-6 font-bold text-[var(--color-primary)]">수하물 허용 한도</td>
                    <td className="py-8 px-6 text-center">1개 (23kg)</td>
                    <td className="py-8 px-6 text-center text-[var(--color-accent)] font-extrabold bg-[var(--color-bg-secondary)]/30">2개 (32kg)</td>
                    <td className="py-8 px-6 text-center">3개 (32kg)</td>
                    <td className="py-8 pl-6 text-center">무제한</td>
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


export default function LoyaltyPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <LoyaltyPageContent {...props} />
    </React.Suspense>
  );
}
