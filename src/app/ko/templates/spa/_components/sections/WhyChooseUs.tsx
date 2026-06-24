"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const badges = [
  { label: "공인 테라피스트", description: "고급 임상 교육과 지속적인 학습을 받은 면허 전문가." },
  { label: "결과 보장", description: "첫 세션 후 만족하지 않으시면 바로 조치해드립니다." },
];

export default function WhyChooseUs() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-[var(--color-secondary)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="text-center mb-16">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">선택해야 하는 이유</span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[1.05]">수천 명이 신뢰하는 곳</h2>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-4 mb-12">
          <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: 0, ease: EASE_OUT }} className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-8 lg:p-12">
            <div className="font-[family-name:var(--font-heading)] text-6xl font-bold text-[var(--color-primary)] leading-none">10k+</div>
            <p className="mt-2 text-sm text-white/50">연간 치료 건수</p>
          </motion.div>
          <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }} className="rounded-2xl bg-white/5 border border-white/10 p-8 lg:p-12">
            <div className="font-[family-name:var(--font-heading)] text-6xl font-bold text-[var(--color-primary)] leading-none">98%</div>
            <p className="mt-2 text-sm text-white/50">고객 만족도</p>
          </motion.div>
          <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT }} className="rounded-2xl bg-white/5 border border-white/10 p-8 lg:p-12">
            <div className="font-[family-name:var(--font-heading)] text-6xl font-bold text-[var(--color-primary)] leading-none">15+</div>
            <p className="mt-2 text-sm text-white/50">년 신뢰의 경험</p>
          </motion.div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {badges.map((badge, i) => (
            <motion.div key={badge.label} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: 0.1 * i, ease: EASE_OUT }} className="rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-8">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-[var(--color-primary)] shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text-contrast)]">{badge.label}</h3>
                  <p className="mt-1 text-sm text-white/60">{badge.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
