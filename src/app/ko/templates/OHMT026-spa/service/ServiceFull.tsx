"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ClipboardList, ScanFace, Sparkles, FileCheck2, Sun, Ban } from "lucide-react";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";
import CaseStudy from "../_components/sections/CaseStudy";
import { services, preCare, postCare } from "../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const processSteps = [
  { icon: ClipboardList, title: "상담 신청", detail: "무료 15분 전화 상담" },
  { icon: ScanFace, title: "피부 분석", detail: "45분 정밀 진단" },
  { icon: Sparkles, title: "맞춤 트리트먼트", detail: "선택한 프로토콜 진행" },
  { icon: FileCheck2, title: "애프터케어 리포트", detail: "홈케어 가이드 전달" },
];

export default function ServiceFull() {
  const reduce = useReducedMotion();
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[50dvh] overflow-hidden bg-[var(--color-secondary)]">
          <img src="/templates/OHMT026-spa/service-hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-top opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] to-transparent" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 flex h-full min-h-[50dvh] flex-col justify-end pb-16 lg:pb-20">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE_OUT }} className="max-w-2xl">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">트리트먼트</span>
              <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[var(--leading-heading)]">맞춤형 트리트먼트</h1>
              <p className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-lg">피부 컨디션, 회복 속도, 원하는 결과에 맞춰 필요한 케어만 조합합니다.</p>
            </motion.div>
          </div>
        </section>
        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <motion.div key={service.id} id={service.id} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }} className="group rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] overflow-hidden scroll-mt-28 hover:-translate-y-1 transition-all duration-300">
                  <div className="h-48 overflow-hidden"><img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                  <div className="p-6">
                    <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)]">{service.title}</h2>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">{service.description}</p>
                    <p className="mt-3 text-xs font-medium text-[var(--color-primary)]">{service.duration} · {service.priceFrom} · {service.idealFor}</p>
                    <a href="/ko/templates/OHMT026-spa/contact" className="mt-5 inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:underline">예약하기 →</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-24 bg-[var(--color-bg-secondary)]">
          <div className="mx-auto max-w-[1440px] px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="text-center max-w-2xl mx-auto">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">피부 우선</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">모든 케어는 피부 컨디션에서 시작됩니다</h2>
              <p className="mt-5 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed max-w-2xl mx-auto">상담과 피부 분석으로 현재 상태를 확인합니다. 이후 필요한 방식만 조합해 맞춤 프로토콜을 만들고, 사후 관리로 변화 과정을 함께 추적합니다.</p>
            </motion.div>
          </div>
        </section>

        <CaseStudy />

        <section className="py-24 lg:py-32 bg-[var(--color-bg-secondary)]">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center">
              <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="overflow-hidden rounded-sm">
                <img src="/templates/OHMT026-spa/promo-02.jpg" alt="상담을 진행하는 테라피스트" className="w-full h-80 object-cover" />
              </motion.div>
              <div>
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">예약 전 프로세스</span>
                <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)] mb-8">예약부터 사후 관리까지</h2>
                <div className="space-y-6">
                  {processSteps.map((step, i) => (
                    <motion.div key={step.title} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }} className="flex items-center gap-5">
                      <span className="font-[family-name:var(--font-heading)] text-sm text-[var(--color-text-muted)] w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <step.icon className="w-5 h-5 text-[var(--color-primary)] shrink-0" strokeWidth={1.75} />
                      <div>
                        <h3 className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-[var(--color-text)]">{step.title}</h3>
                        <p className="text-sm text-[var(--color-text-muted)]">{step.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-5xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="mb-12 text-center">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">케어 전후 안내</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">더 나은 결과를 위해</h2>
            </motion.div>
            <div className="grid gap-10 sm:grid-cols-2">
              <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE_OUT }}>
                <h3 className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-[var(--color-text)]"><Sun className="w-4 h-4 text-[var(--color-primary)]" strokeWidth={1.75} />시술 전</h3>
                <ul className="mt-4 space-y-3">
                  {preCare.map((item) => (<li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)] leading-relaxed"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />{item}</li>))}
                </ul>
              </motion.div>
              <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: 0.08, ease: EASE_OUT }}>
                <h3 className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-[var(--color-text)]"><Ban className="w-4 h-4 text-[var(--color-primary)]" strokeWidth={1.75} />시술 후</h3>
                <ul className="mt-4 space-y-3">
                  {postCare.map((item) => (<li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)] leading-relaxed"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />{item}</li>))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
