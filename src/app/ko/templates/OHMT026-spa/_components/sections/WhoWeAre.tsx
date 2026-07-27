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
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="max-w-2xl">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">소개</span>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[var(--leading-heading)]">피부를 세심하게 살피는 전문가</h2>
            <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-white/60">
              <span className="md:block">현재 피부 상태와 생활 습관을 함께 살피며,</span>{" "}
              <span className="md:block">필요한 페이셜·바디 케어를 제안하는 전문가 팀입니다.</span>
            </p>
            <a href="/ko/templates/OHMT026-spa/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-contrast)] hover:text-[var(--color-primary)] transition-colors duration-200">전문가 소개 →</a>
          </motion.div>
          <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }} className="grid grid-cols-3 border-y border-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="min-h-[150px] border-l border-white/10 first:border-l-0 px-6 py-8 text-left flex flex-col justify-center">
                <div className="font-[family-name:var(--font-heading)] text-[length:var(--text-h2)] font-bold text-[var(--color-primary)] leading-none"><Counter value={stat.value} suffix={stat.suffix} /></div>
                <p className="mt-4 text-sm text-white/55">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
