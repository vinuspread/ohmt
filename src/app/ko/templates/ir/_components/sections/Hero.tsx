// src/app/templates/ir/-components/sections/Hero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="bg-[var(--color-dark-bg)] min-h-[calc(100vh-100px)] flex flex-col justify-between relative overflow-hidden text-white"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        src="/templates/ir/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      <div className="relative flex-1 flex items-center px-6 md:px-10 max-w-[1280px] mx-auto w-full py-12 md:py-24">
        <div className="max-w-[760px]">
          <div className="flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-8">
            <div className="w-6 h-[1px] bg-[var(--color-accent)]" />
            투명성과 탁월함
          </div>
          <h1 className="text-[clamp(2.2rem,3.8vw,3.8rem)] font-normal tracking-[-0.03em] leading-[1.0] mb-7 break-keep">
            <span className="font-semibold text-white">멈추지 않는 혁신</span>으로,<br />
            <span className="font-semibold text-[var(--color-accent)]">지속 가능한 미래 가치</span>를 설계합니다.
          </h1>
          <p className="text-[0.88rem] text-white/50 leading-[1.8] max-w-[540px] mb-10 font-normal">
            우리는 단순한 단기적 재무 지표를 넘어, 견고한 ESG 경영 전략 체계 구축을 통해 글로벌 스탠다드에 부합하는 장기 투자 가치와 사회적 책임을 성실히 수행해 나갑니다.
          </p>
          <div className="flex gap-4 items-center">
            <button className="text-[0.72rem] font-bold uppercase tracking-[0.14em] px-8 py-3.5 bg-white text-[var(--color-dark-bg)] hover:bg-transparent hover:text-white border border-white transition-all duration-300">
              실적 보고서 다운로드
            </button>
            <button className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] px-8 py-3.5 border border-white/25 text-white/75 hover:border-white/60 hover:text-white transition-all duration-300">
              주주 전용 포털
            </button>
          </div>
        </div>
      </div>
      
      <div className="relative border-t border-white/10 grid grid-cols-2 md:grid-cols-4 bg-white/5 backdrop-blur-sm">
        {[
          { label: "시가총액", val: "42.8", unit: "B", change: "+12.4%", up: true },
          { label: "매출 성장률", val: "18.5", unit: "%", change: "+2.1%", up: true },
          { label: "EPS (LTM)", val: "4.12", unit: "USD", change: "-0.4%", up: false },
          { label: "배당 수익률", val: "2.85", unit: "%", change: "+0.1%", up: true }
        ].map((kpi, i) => (
          <div key={i} className="p-8 border-r border-white/10 last:border-r-0">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/35 block mb-1">{kpi.label}</span>
            <span className="text-[clamp(1.5rem,2.2vw,2rem)] font-extrabold text-white leading-none block mb-1">
              {kpi.val}<span className="text-[0.55em] text-white/40 font-medium ml-1">{kpi.unit}</span>
            </span>
            <span className={`text-[0.65rem] font-bold ${kpi.up ? "text-[var(--color-success)]" : "text-[var(--color-alert)]"}`}>
              {kpi.change}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
