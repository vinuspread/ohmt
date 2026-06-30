"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function BookAppointmentCta() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-[var(--color-secondary)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }}>
          <h2 className="font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[1.05]">지금 시작할 준비가 되셨나요?</h2>
          <p className="mt-5 text-[0.95rem] text-white/60 leading-relaxed max-w-lg mx-auto">오늘 첫 예약을 하고 맞춤형 케어가 주는 차이를 경험해보세요.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/ko/templates/OHMT026-spa/contact" className="inline-flex items-center rounded-full bg-[var(--color-primary)] text-[var(--color-text-contrast)] px-8 py-3.5 text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-150">예약하기</a>
            <a href="/ko/templates/OHMT026-spa/pricing" className="inline-flex items-center rounded-full border border-white/20 text-[var(--color-text-contrast)] px-8 py-3.5 text-sm font-semibold hover:bg-white/10 transition-all duration-150">가격 보기</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
