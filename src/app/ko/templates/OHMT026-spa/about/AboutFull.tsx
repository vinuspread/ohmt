"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Droplets, GraduationCap } from "lucide-react";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";
import { stats, milestones, certifications } from "../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const certIcons = [ShieldCheck, Droplets, GraduationCap];

export default function AboutFull() {
  const reduce = useReducedMotion();
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[60dvh] overflow-hidden bg-[var(--color-secondary)]">
          <img src="/templates/OHMT026-spa/about-hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] to-transparent" />
          <div className="relative z-10 flex h-full min-h-[60dvh] flex-col justify-end px-6 lg:px-16 pb-16">
            <motion.h1 initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE_OUT }} className="font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[var(--leading-heading)] max-w-2xl">우리에 대해</motion.h1>
            <motion.p initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }} className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-lg">피부 컨디션과 생활 리듬을 함께 보는 메디컬 웰니스 클리닉입니다.</motion.p>
          </div>
        </section>
        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
              <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }}>
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">케어 철학</span>
                <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">당신의 피부, 마스터의 정교한 손길에 맡기세요</h2>
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
          <div className="mx-auto max-w-5xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="grid gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-center">
              <div className="overflow-hidden rounded-sm">
                <img src="/templates/OHMT026-spa/team-emily-carter.jpg" alt="에밀리 카터 박사" className="w-full h-80 object-cover object-top" />
              </div>
              <div>
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">설립자의 편지</span>
                <p className="mt-4 font-[family-name:var(--font-heading)] text-xl text-[var(--color-text)] leading-relaxed break-keep">
                  "2010년, 저는 작은 프라이빗 룸 하나로 이 클리닉을 시작했습니다. 빠른 해결책보다 꾸준하고 개인화된 케어가 결국 더 나은 결과를 만든다는 믿음 하나로 여기까지 왔습니다. 지금도 모든 트리트먼트는 듣는 것에서 시작합니다."
                </p>
                <p className="mt-4 text-sm text-[var(--color-text-muted)]">에밀리 카터 박사 · 수석 테라피스트 & 설립자</p>
                <a href="/ko/templates/OHMT026-spa/therapists" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-200">전체 테라피스트 팀 보기 →</a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-[1440px] px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="mb-12 max-w-2xl">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">스파센터 둘러보기</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">공간도 케어의 일부입니다</h2>
            </motion.div>
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT }} className="grid grid-cols-5 gap-4">
              <div className="col-span-3 overflow-hidden rounded-sm"><img src="/templates/OHMT026-spa/mission-02.jpg" alt="트리트먼트가 진행되는 룸" className="w-full h-full min-h-[22rem] object-cover" /></div>
              <div className="col-span-2 overflow-hidden rounded-sm"><img src="/templates/OHMT026-spa/mission-03.jpg" alt="사후 관리 제품이 놓인 테이블" className="w-full h-full min-h-[22rem] object-cover" /></div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-[var(--color-bg-secondary)]">
          <div className="mx-auto max-w-3xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="mb-16 text-center">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">연혁</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">우리의 마일스톤</h2>
            </motion.div>
            <div className="relative space-y-10 before:absolute before:inset-y-0 before:left-[3.25rem] before:w-px before:bg-[var(--color-border)]">
              {milestones.map((m, i) => (
                <motion.div key={m.year} initial={reduce ? { opacity: 0 } : { opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }} className="relative flex gap-8">
                  <div className="w-[6.5rem] shrink-0 text-right">
                    <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-primary)]">{m.year}</span>
                  </div>
                  <div className="relative pl-8">
                    <span className="absolute left-[-1.65rem] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--color-primary)] border-2 border-[var(--color-bg-secondary)]" />
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)]">{m.title}</h3>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)] leading-relaxed">{m.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-5xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="mb-12">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">신뢰</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">인증 & 안전 기준</h2>
            </motion.div>
            <div className="grid gap-8 sm:grid-cols-3">
              {certifications.map((c, i) => {
                const Icon = certIcons[i % certIcons.length];
                return (
                  <motion.div key={c.label} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }} className="flex items-start gap-4">
                    <Icon className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" strokeWidth={1.75} />
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-[var(--color-text)]">{c.label}</h3>
                      <p className="mt-1 text-sm text-[var(--color-text-muted)] leading-relaxed">{c.detail}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
