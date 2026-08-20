"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const badges = [
  { label: "전문 테라피스트", description: "각 분야의 교육과 경험을 갖춘 전문가가 케어를 진행합니다." },
  { label: "사후 안내", description: "관리 후 불편하거나 궁금한 점이 있으면 빠르게 확인하고 안내합니다." },
];

export default function WhyChooseUs() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-[var(--color-secondary)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="text-center mb-16">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">SERENITY를 선택하는 이유</span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[var(--leading-heading)]">꾸준히 찾는 데에는 이유가 있습니다</h2>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-4 mb-12">
          <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: 0, ease: EASE_OUT }} className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-8 lg:p-12">
            <div className="font-[family-name:var(--font-heading)] text-6xl font-bold text-[var(--color-primary)] leading-none">10k+</div>
            <p className="mt-2 text-sm text-white/50">연간 관리 건수</p>
          </motion.div>
          <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }} className="rounded-2xl bg-white/5 border border-white/10 p-8 lg:p-12">
            <div className="font-[family-name:var(--font-heading)] text-6xl font-bold text-[var(--color-primary)] leading-none">98%</div>
            <p className="mt-2 text-sm text-white/50">고객 만족도</p>
          </motion.div>
          <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT }} className="rounded-2xl bg-white/5 border border-white/10 p-8 lg:p-12">
            <div className="font-[family-name:var(--font-heading)] text-6xl font-bold text-[var(--color-primary)] leading-none">15+</div>
            <p className="mt-2 text-sm text-white/50">년의 관리 경험</p>
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
