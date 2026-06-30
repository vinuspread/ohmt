"use client";

import { motion, useReducedMotion } from "framer-motion";
import { advantages } from "../../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const iconMap: Record<string, string> = {
  "공인 테라피스트": "🛡", "맞춤형 플랜": "✦", "프리미엄 제품": "○",
  "차분한 환경": "◇", "유연한 예약": "◈", "결과 보장": "☆",
};

export default function CareAdvantages() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-[var(--color-accent)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="mb-16 max-w-2xl">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">케어 장점</span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[1.05]">고객이 우리와 함께하는 이유</h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => (
            <motion.div key={item.title} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }} className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <span className="text-2xl text-white/30">{iconMap[item.title] || "✦"}</span>
              <h3 className="mt-6 font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text-contrast)]">{item.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
