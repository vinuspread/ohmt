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
              <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[var(--leading-heading)]">맞춤형 케어</h1>
              <p className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-lg">현재 피부 상태와 민감도, 원하는 관리 방향에 맞춰 필요한 케어를 구성합니다.</p>
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
                    <a href="/ko/templates/OHMT026-spa/contact" className="mt-5 inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:underline">상담 예약 →</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-24 bg-[var(--color-bg-secondary)]">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="text-center">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">피부 상태부터</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">모든 케어는 현재 피부 상태에서 시작됩니다</h2>
              <p className="mx-auto mt-5 max-w-3xl text-[0.95rem] leading-relaxed text-[var(--color-text-muted)]">
                <span className="md:block">상담을 통해 현재 피부 상태를 확인한 뒤 필요한 관리만 구성합니다.</span>{" "}
                <span className="md:block">관리 후에는 홈케어 방법과 다음 일정을 안내합니다.</span>
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
