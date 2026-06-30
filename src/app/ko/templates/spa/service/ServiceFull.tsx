"use client";

import { motion, useReducedMotion } from "framer-motion";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";
import { services } from "../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function ServiceFull() {
  const reduce = useReducedMotion();
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="bg-[var(--color-secondary)] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE_OUT }} className="max-w-2xl">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">서비스</span>
              <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[1.05]">트리트먼트</h1>
              <p className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-lg">첨단 레이저 요법부터 부드러운 마사지 리추얼까지 - 모든 트리트먼트는 당신의 목표를 위해 설계되었습니다.</p>
            </motion.div>
          </div>
        </section>
        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <motion.div key={service.id} id={service.id} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }} className="group rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] overflow-hidden scroll-mt-28 hover:-translate-y-1 transition-all duration-300">
                  <div className="h-48 overflow-hidden"><img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                  <div className="p-6">
                    <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)]">{service.title}</h2>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">{service.description}</p>
                    <a href="/ko/templates/OHMT026-spa/contact" className="mt-5 inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:underline">예약하기 →</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-24 bg-[var(--color-bg-secondary)]">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="text-center">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">접근 방식</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">모든 트리트먼트는 당신부터 시작됩니다</h2>
              <p className="mt-5 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed max-w-2xl mx-auto">철저한 상담과 피부 분석으로 시작합니다. 진단 도구를 사용해 상태를 평가하고, 최적의 결과를 위해 여러 방식을 결합한 맞춤형 프로토콜을 구축합니다. 사후 관리와 진행 추적을 통해 트리트먼트가 피부와 함께 진화하도록 합니다.</p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
