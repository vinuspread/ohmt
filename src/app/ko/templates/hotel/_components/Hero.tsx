"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[var(--color-primary)] overflow-hidden">
      <div className="absolute inset-0">
        <img src="/templates/hotel/hero-main.jpg" alt="Oh My Template" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/80 via-[var(--color-primary)]/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-28 md:pt-36 pb-16 md:pb-24">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }} className="max-w-3xl">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-[12px] md:text-[13px] font-medium text-[var(--color-accent)] tracking-tight block mb-6 md:mb-10">
            조용한 럭셔리, 시간이 멈춘 휴식처
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-[clamp(2.5rem,7vw,6rem)] font-[var(--font-heading)] font-bold text-[var(--color-bg)] leading-[1.1] mb-6 md:mb-10 break-keep [overflow-wrap:normal]" style={{ textWrap: "balance" } as React.CSSProperties}>
            고요함이 우아함을 만나는 곳.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="text-base md:text-lg text-[var(--color-bg)]/80 font-[var(--font-body)] max-w-xl mb-10 md:mb-14 leading-relaxed">
            고대 숲과 푸른 바다 사이에 자리한 럭스 헤이븐은 모든 순간이 당신의 웰빙을 위해 설계된 비할 데 없는 휴식처입니다.
          </motion.p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8, ease: [0.23, 1, 0.32, 1] }} className="bg-[var(--color-bg)]/10 backdrop-blur-xl border border-[var(--color-bg)]/20 p-6 md:p-8 max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div>
              <label className="text-[11px] md:text-[12px] font-medium text-[var(--color-bg)]/60 tracking-tight block mb-2">체크인</label>
              <input type="text" placeholder="YYYY / MM / DD" className="w-full bg-transparent border border-[var(--color-bg)]/20 px-3 py-2.5 text-sm text-[var(--color-bg)] placeholder:text-[var(--color-bg)]/40 focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
            </div>
            <div>
              <label className="text-[11px] md:text-[12px] font-medium text-[var(--color-bg)]/60 tracking-tight block mb-2">체크아웃</label>
              <input type="text" placeholder="YYYY / MM / DD" className="w-full bg-transparent border border-[var(--color-bg)]/20 px-3 py-2.5 text-sm text-[var(--color-bg)] placeholder:text-[var(--color-bg)]/40 focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
            </div>
            <div>
              <label className="text-[11px] md:text-[12px] font-medium text-[var(--color-bg)]/60 tracking-tight block mb-2">인원</label>
              <select className="w-full bg-transparent border border-[var(--color-bg)]/20 px-3 py-2.5 text-sm text-[var(--color-bg)] focus:outline-none focus:border-[var(--color-accent)] transition-colors appearance-none">
                <option className="bg-[var(--color-primary)] text-[var(--color-bg)]">성인 1명</option>
                <option className="bg-[var(--color-primary)] text-[var(--color-bg)]">성인 2명</option>
                <option className="bg-[var(--color-primary)] text-[var(--color-bg)]">성인 3명</option>
                <option className="bg-[var(--color-primary)] text-[var(--color-bg)]">성인 4명</option>
              </select>
            </div>
            <div>
              <label className="hidden md:block text-[11px] md:text-[12px] font-medium text-transparent mb-2 select-none">_</label>
              <Button variant="secondary" size="md" className="w-full text-[12px] tracking-tight">예약 가능 확인</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
