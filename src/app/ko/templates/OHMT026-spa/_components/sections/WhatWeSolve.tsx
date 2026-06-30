"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const cards = [
  { label: "여드름 & 흉터", desc: "첨단 레이저와 마이크로니들링으로 매끄러운 피부를 되찾습니다." },
  { label: "노화 고민", desc: "비수술 필과 콜라겐 유도로 생기 있는 젊음을 유지합니다." },
  { label: "색소 침착", desc: "기미와 자외선 손상을 위한 표적 미백 트리트먼트." },
  { label: "민감성 피부", desc: "붉은기와 자극을 완화하는 순한 배리어 리페어 테라피." },
  { label: "피부결 문제", desc: "모공과 요철을 개선하는 리서페이싱 트리트먼트." },
  { label: "스트레스 & 피로", desc: "에너지를 회복하고 얼굴에 광채를 되찾아주는 릴렉세이션 리추얼." },
];

export default function WhatWeSolve() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-secondary)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="mb-16 max-w-2xl">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">솔루션</span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">치료하는 피부 고민</h2>
          <p className="mt-5 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed max-w-md">모든 상태에 맞는 프로토콜이 있습니다. 진단이 먼저, 치료는 그 다음 - 과학적 솔루션으로.</p>
        </motion.div>
      </div>
      <div className="overflow-hidden">
        <div className="animate-marquee-left flex gap-6 w-max" style={{ animationDuration: "40s" }}>
          {[...cards, ...cards].map((card, i) => (
            <div key={i} className="w-[300px] shrink-0 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] p-8">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">{String(i % cards.length + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-[var(--color-text)] leading-snug">{card.label}</h3>
              <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } } .animate-marquee-left { animation: marquee-left linear infinite; } @media (prefers-reduced-motion: reduce) { .animate-marquee-left { animation: none; } }`}</style>
    </section>
  );
}
