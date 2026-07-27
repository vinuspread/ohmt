"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function BookAppointmentCta() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-[var(--color-secondary)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }}>
          <h2 className="font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[var(--leading-heading)]">나에게 맞는 케어를 찾고 계신가요?</h2>
          <p className="mt-5 text-[0.95rem] text-white/60 leading-relaxed max-w-lg mx-auto">상담을 통해 현재 컨디션을 확인하고 필요한 케어를 안내받아보세요.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ko/templates/OHMT026-spa/contact" className="inline-flex items-center rounded-full bg-[var(--color-primary)] text-[var(--color-text-contrast)] px-8 py-3.5 text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-150">상담 예약</Link>
            <Link href="/ko/templates/OHMT026-spa/pricing" className="inline-flex items-center rounded-full border border-white/20 text-[var(--color-text-contrast)] px-8 py-3.5 text-sm font-semibold hover:bg-white/10 transition-all duration-150">멤버십 보기</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
