"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const items = [
  { title: "먼저 살펴봅니다", body: "현재 피부 상태와 생활 습관, 고민을 충분히 확인한 뒤 필요한 관리만 제안합니다." },
  { title: "상태에 맞춰 관리합니다", body: "피부 타입과 민감도, 회복 속도를 고려해 관리 방식과 강도를 조정합니다." },
  { title: "변화를 꾸준히 살핍니다", body: "관리 후 홈케어 방법을 안내하고, 피부 변화에 따라 다음 일정을 조정합니다." },
  { title: "변화에 맞춰 조정합니다", body: "계절과 생활 리듬에 따라 달라지는 피부 상태를 살피며 관리 계획을 조정합니다." },
];

const missionImages = ["/templates/OHMT026-spa/mission-01.jpg", "/templates/OHMT026-spa/mission-02.jpg", "/templates/OHMT026-spa/mission-03.jpg"];

export default function OurMission() {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }}>
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">케어 원칙</span>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">케어의 철학</h2>
            <p className="mt-5 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed max-w-md mb-10">피부 변화는 한 번의 관리보다 현재 상태에 맞춘 꾸준한 케어에서 시작된다고 생각합니다.</p>
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
