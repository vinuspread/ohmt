"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function BookConsultation() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-[var(--color-bg-secondary)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="flex flex-col items-center text-center">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">첫 상담</span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)] max-w-2xl">어떤 케어가 맞을지 고민되시나요?</h2>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-[var(--color-text-muted)]">
            <span className="md:block">전문가와 현재 피부 상태와 생활 습관, 원하는 변화를 이야기해보세요.</span>{" "}
            <span className="md:block">상담 후 적합한 관리 방향을 안내합니다.</span>
          </p>
          <a href="/ko/templates/OHMT026-spa/contact" className="mt-10 inline-flex items-center rounded-full bg-[var(--color-primary)] text-[var(--color-text-contrast)] px-8 py-3.5 text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-150">상담 예약</a>
        </motion.div>
      </div>
    </section>
  );
}
