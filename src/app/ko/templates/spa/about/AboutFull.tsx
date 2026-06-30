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
            <motion.h1 initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE_OUT }} className="font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[1.05] max-w-2xl">소개</motion.h1>
            <motion.p initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }} className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-lg">우리는 당신이 최고의 모습을 찾고 느낄 수 있도록 돕는 열정적인 테라피스트 팀입니다.</motion.p>
          </div>
        </section>
        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
              <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }}>
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">소개</span>
                <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">당신의 피부는 전문가의 손에</h2>
                <p className="mt-5 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed">2010년에 설립된 저희 클리닉은 하나의 트리트먼트 룸에서 신뢰받는 웰니스 목적지로 성장했습니다. 임상 전문성과 진정한 관심을 결합하여 - 모든 트리트먼트는 개인화되고, 모든 테라피스트는 공인되어 있으며, 모든 고객은 가족처럼 대접받습니다.</p>
                <p className="mt-4 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed">우리의 접근 방식은 간단합니다: 먼저 듣고, 그다음 치료합니다. 트리트먼트를 추천하기 전에 피부 고민, 목표, 라이프스타일을 이해하는 데 시간을 투자합니다. 이 철학은 수천 명의 고객으로부터 신뢰를 얻었습니다.</p>
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
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">팀</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">테라피스트를 만나보세요</h2>
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
