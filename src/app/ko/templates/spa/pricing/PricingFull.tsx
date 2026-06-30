"use client";

import { motion, useReducedMotion } from "framer-motion";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";
import { pricingPlans } from "../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function PricingFull() {
  const reduce = useReducedMotion();
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="bg-[var(--color-secondary)] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE_OUT }} className="text-center">
              <h1 className="font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[1.05]">가격 플랜</h1>
              <p className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-md mx-auto">라이프스타일에 맞는 멤버십을 선택하세요. 언제든지 업그레이드 또는 취소 가능합니다.</p>
            </motion.div>
          </div>
        </section>
        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 lg:grid-cols-3 items-start max-w-5xl mx-auto">
              {pricingPlans.map((plan, i) => (
                <motion.div key={plan.id} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }} className={`rounded-2xl border p-8 lg:p-10 ${plan.featured ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5 relative" : "border-[var(--color-border)] bg-[var(--color-bg-secondary)]"}`}>
                  {plan.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[0.6rem] font-bold uppercase tracking-[0.2em] bg-[var(--color-primary)] text-[var(--color-text-contrast)] px-4 py-1.5 rounded-full">가장 인기</span>}
                  <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-[var(--color-text)]">{plan.name}</h2>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-[family-name:var(--font-heading)] text-5xl font-bold text-[var(--color-text)]">{plan.price}</span>
                    <span className="text-sm text-[var(--color-text-muted)]">{plan.period}</span>
                  </div>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((f) => (<li key={f} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]"><span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />{f}</li>))}
                  </ul>
                  <a href="/ko/templates/OHMT026-spa/contact" className={`mt-8 block w-full text-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-150 ${plan.featured ? "bg-[var(--color-primary)] text-[var(--color-text-contrast)] hover:brightness-110" : "border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-text)]"}`}>{plan.featured ? "시작하기" : "자세히 보기"}</a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
