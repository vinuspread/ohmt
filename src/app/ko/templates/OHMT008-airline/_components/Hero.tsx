"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
export const Hero = () => {
  const t = {
  "nav": {
    "book": `예약`,
    "experience": `익스피리언스`,
    "destinations": `취항지`,
    "loyalty": `로열티`,
    "login": `로그인`,
    "bookTrip": `여정 예약`
  },
  "hero": {
    "badge": `퍼스트 클래스 경험`,
    "title1": `구름 위, 빛나는 도약`,
    "title2": `당신을 위한 특별함.`,
    "desc": `구름 위의 순수한 고요함. 하늘 위의 프라이빗 성역에서 비행의 본질적 기쁨을 되찾으세요.`,
    "cta": `취항지 발견하기`,
    "cta2": `가상 투어`
  }
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const } }
};

return (
    <section className="relative h-[72vh] min-h-[520px] flex flex-col justify-center overflow-hidden bg-[var(--color-primary)]">
      <motion.img
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 0.5 }}
        transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1] as const }}
        className="absolute inset-0 w-full h-full object-cover"
        src="/templates/OHMT008-airline/airline-main-hero.png"
        alt="Airline Hero"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,21,46,0.2)_0%,rgba(5,21,46,0.1)_40%,rgba(5,21,46,0.7)_75%,rgba(5,21,46,0.95)_100%)]" />

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 w-full"
      >
        <div className="max-w-[700px] mb-8">
          <motion.div variants={fadeUp} className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6">
            <div className="w-6 h-[1px] bg-[var(--color-accent)]" />
            {t.hero.badge}
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-h1)] font-[var(--font-weight-heading)] tracking-tight leading-[var(--leading-heading)] text-white mb-7">
            {t.hero.title1} <br />
            <span className="font-[var(--font-weight-accent)] text-[var(--color-accent)]">{t.hero.title2}</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[1.05rem] font-normal text-white/65 leading-[var(--leading-body)] max-w-[600px] mb-10">
            {t.hero.desc}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button variant="primary" className="text-sm font-bold uppercase tracking-[-0.02em] px-8 md:px-10 py-3 md:py-3.5">
              {t.hero.cta}
            </Button>
            <Button variant="ghost" className="text-sm font-semibold uppercase tracking-[-0.02em] px-8 md:px-10 py-3 md:py-3.5">
              {t.hero.cta2}
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
