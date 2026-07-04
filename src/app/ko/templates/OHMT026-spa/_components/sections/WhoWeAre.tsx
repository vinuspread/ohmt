"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { stats } from "../../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return <span ref={ref}>{isInView ? value : 0}{suffix}</span>;
}

export default function WhoWeAre() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-[var(--color-secondary)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="max-w-2xl">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">소개</span>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[1.08]">당신의 피부는 전문가의 손에</h2>
            <p className="mt-6 max-w-lg text-[0.95rem] text-white/60 leading-relaxed">우리는 맞춤형 결과 중심 스킨케어에 전념하는 공인 테라피스트 팀입니다. 모든 트리트먼트는 당신을 위해 설계됩니다.</p>
            <a href="/ko/templates/OHMT026-spa/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-contrast)] hover:text-[var(--color-primary)] transition-colors duration-200">팀 소개 →</a>
          </motion.div>
          <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }} className="grid grid-cols-3 border-y border-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="min-h-[150px] border-l border-white/10 first:border-l-0 px-6 py-8 text-left flex flex-col justify-center">
                <div className="font-[family-name:var(--font-heading)] text-[clamp(2.4rem,4vw,3.5rem)] font-bold text-[var(--color-primary)] leading-none"><Counter value={stat.value} suffix={stat.suffix} /></div>
                <p className="mt-4 text-sm text-white/55">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
