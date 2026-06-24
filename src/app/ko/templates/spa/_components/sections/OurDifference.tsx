"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const images = ["/templates/spa/difference-01.jpg", "/templates/spa/difference-02.jpg", "/templates/spa/difference-03.jpg"];

export default function OurDifference() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }}>
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">차별점</span>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">과학과 평온의 만남</h2>
            <p className="mt-5 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed max-w-md">임상 수준의 기술과 차분하고 환영하는 환경을 결합했습니다. 모든 트리트먼트는 연구에 기반하여 세심하게 제공됩니다.</p>
            <ul className="mt-8 space-y-4">
              {["의사 개발 트리트먼트 프로토콜", "의료용 등급 제품만 사용", "개인 맞춤형 피부 관리 여정 매핑"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[var(--color-text)]"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />{item}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE_OUT }} className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl"><img src={images[0]} alt="자연광이 들어오는 스파 트리트먼트 룸" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" /></div>
              <div className="overflow-hidden rounded-2xl"><img src={images[2]} alt="대리석 위에 놓인 스킨 테라피 제품" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700" /></div>
            </div>
            <div className="pt-12 space-y-4">
              <div className="overflow-hidden rounded-2xl"><img src={images[1]} alt="페이셜 트리트먼트를 준비하는 테라피스트" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700" /></div>
              <div className="overflow-hidden rounded-2xl bg-[var(--color-secondary)] h-48 flex items-center justify-center"><span className="font-[family-name:var(--font-heading)] text-6xl font-bold text-white/20">✦</span></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
