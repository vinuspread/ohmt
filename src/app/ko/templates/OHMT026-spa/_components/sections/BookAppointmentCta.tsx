"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function BookAppointmentCta() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-[var(--color-secondary)] py-20 lg:py-28">
      <img
        src="/templates/OHMT026-spa/cta-bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[20%_center] opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] via-[var(--color-secondary)]/85 to-[var(--color-secondary)]/60" />
      <div className="relative mx-auto max-w-[1440px] px-6 text-center">
        <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }}>
          <h2 className="font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[var(--leading-heading)]">지금 시작할 준비가 되셨나요?</h2>
          <p className="mt-5 text-[0.95rem] text-white/60 leading-relaxed max-w-lg mx-auto">오늘 첫 예약을 하고 맞춤형 케어가 주는 차이를 경험해보세요.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ko/templates/OHMT026-spa/contact" className="inline-flex items-center rounded-full bg-[var(--color-primary)] text-[var(--color-text-contrast)] px-8 py-3.5 text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-150">예약하기</Link>
            <Link href="/ko/templates/OHMT026-spa/pricing" className="inline-flex items-center rounded-full border border-white/20 text-[var(--color-text-contrast)] px-8 py-3.5 text-sm font-semibold hover:bg-white/10 transition-all duration-150">가격 보기</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
