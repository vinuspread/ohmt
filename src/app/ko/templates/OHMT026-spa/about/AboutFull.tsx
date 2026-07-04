"use client";

import { motion, useReducedMotion } from "framer-motion";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";
import { stats, team } from "../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function AboutFull() {
  const reduce = useReducedMotion();
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="relative min-h-[60dvh] overflow-hidden bg-[var(--color-secondary)]">
          <img src="/templates/OHMT026-spa/about-hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] to-transparent" />
          <div className="relative z-10 flex h-full min-h-[60dvh] flex-col justify-end px-6 lg:px-16 pb-16">
            <motion.h1 initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE_OUT }} className="font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[1.1] max-w-2xl">ABOUT US</motion.h1>
            <motion.p initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }} className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-lg">피부 컨디션과 생활 리듬을 함께 보는 메디컬 웰니스 클리닉입니다.</motion.p>
          </div>
        </section>
        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
              <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }}>
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">CARE PHILOSOPHY</span>
                <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.1]">당신의 피부, 마스터의 정교한 손길에 맡기세요</h2>
                <p className="mt-5 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed">2010년, 하나의 프라이빗 트리트먼트 룸에서 시작했습니다. 지금은 피부 분석, 테라피, 사후 관리를 한 흐름으로 설계하는 웰니스 클리닉으로 성장했습니다.</p>
                <p className="mt-4 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed">먼저 듣고, 그다음 처방합니다. 피부 고민과 목표, 생활 패턴을 확인한 뒤 필요한 트리트먼트만 제안합니다.</p>
              </motion.div>
              <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }} className="grid grid-cols-3 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-[family-name:var(--font-heading)] text-5xl font-bold text-[var(--color-primary)] leading-none">{stat.value}{stat.suffix}</div>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-[var(--color-bg-secondary)]">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="text-center mb-16">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">THERAPIST MASTERS</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.1]">케어를 설계하는 전문가들</h2>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, i) => (
                <motion.div key={member.id} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }} className="group rounded-2xl overflow-hidden bg-[var(--color-bg)] border border-[var(--color-border)]">
                  <div className="h-72 overflow-hidden"><img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)]">{member.name}</h3>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{member.role}</p>
                  </div>
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
