"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function BookConsultation() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-[var(--color-bg-secondary)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="flex flex-col items-center text-center">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">무료 상담</span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05] max-w-2xl">어디서부터 시작할지 모르시겠나요?</h2>
          <p className="mt-5 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed max-w-lg">테라피스트와의 무료 상담을 예약하세요. 피부를 진단하고 질문에 답해드리며 목표에 맞는 플랜을 세워드립니다.</p>
          <a href="/ko/templates/OHMT026-spa-KO/contact" className="mt-10 inline-flex items-center rounded-full bg-[var(--color-primary)] text-[var(--color-text-contrast)] px-8 py-3.5 text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-150">무료 상담 예약하기</a>
        </motion.div>
      </div>
    </section>
  );
}
