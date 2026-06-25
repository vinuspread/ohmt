"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const items = [
  { title: "먼저 진단하다", body: "병력, 고민, 목표를 이해하는 전체 피부 평가로 시작합니다. 그런 후에야 트리트먼트를 추천합니다." },
  { title: "정밀하게 치료하다", body: "모든 프로토콜은 귀하의 피부 타입에 맞게 선택되고 조정됩니다. 안전하고 효과적인 결과를 위해 의료용 등급 기술을 사용합니다." },
  { title: "장기적으로 관리하다", body: "결과는 클리닉을 떠날 때 끝나지 않습니다. 사후 관리 계획, 제품 추천, 진행 상황에 맞춘 후속 일정을 제공합니다." },
  { title: "함께 진화하다", body: "피부는 계절, 스트레스, 나이에 따라 변합니다. 항상 필요한 것을 받을 수 있도록 플랜을 사전에 조정합니다." },
];

const missionImages = ["/templates/spa/mission-01.jpg", "/templates/spa/mission-02.jpg", "/templates/spa/mission-03.jpg"];

export default function OurMission() {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }}>
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">미션</span>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">케어의 철학</h2>
            <p className="mt-5 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed max-w-md mb-10">우리는 좋은 피부는 빠른 해결책이 아닌 일관되고 개인화된 케어에서 온다고 믿습니다.</p>
            <div className="space-y-2">
              {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={item.title} className="border-b border-[var(--color-border)]">
                    <button onClick={() => setOpenIndex(isOpen ? null : i)} className="w-full flex items-center justify-between py-5 text-left">
                      <span className="flex items-center gap-4">
                        <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">{String(i + 1).padStart(2, "0")}</span>
                        <span className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)]">{item.title}</span>
                      </span>
                      <span className="text-lg transition-transform duration-300 shrink-0" style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (<motion.div key="content" initial={reduce ? { height: "auto" } : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: EASE_OUT }} className="overflow-hidden"><p className="pb-6 text-sm text-[var(--color-text-muted)] leading-relaxed pl-12">{item.body}</p></motion.div>)}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }} className="relative hidden lg:block">
            <div className="sticky top-28 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="overflow-hidden rounded-2xl"><img src={missionImages[0]} alt="" className="w-full h-60 object-cover" /></div>
                <div className="overflow-hidden rounded-2xl"><img src={missionImages[2]} alt="" className="w-full h-72 object-cover" /></div>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl bg-[var(--color-bg-secondary)] h-40 flex items-center justify-center"><span className="font-[family-name:var(--font-heading)] text-5xl font-bold text-[var(--color-primary)]/20">✦</span></div>
                <div className="overflow-hidden rounded-2xl"><img src={missionImages[1]} alt="" className="w-full h-80 object-cover" /></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
