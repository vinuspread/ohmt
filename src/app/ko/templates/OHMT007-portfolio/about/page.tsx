"use client";
import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { stats, designerInfo } from "@/lib/portfolio-data";

const team = [
  { name: "Marco Vinus", role: "창립자 / 크리에이티브 디렉터", img: "/templates/OHMT007-portfolio/portfolio-1.png" },
  { name: "Yuna Park", role: "리드 디자이너", img: "/templates/OHMT007-portfolio/portfolio-2.png" },
  { name: "Tobias Krenn", role: "프론트엔드 엔지니어", img: "/templates/OHMT007-portfolio/portfolio-3.png" },
  { name: "Sofia Reyes", role: "브랜드 전략가", img: "/templates/OHMT007-portfolio/portfolio-4.png" },
];

const process = [
  { num: "01", title: "발견", desc: "목표, 고객, 해결해야 할 간극을 먼저 듣고 정리합니다." },
  { num: "02", title: "정의", desc: "경쟁 환경, 포지셔닝, 브랜드가 가져야 할 목소리를 구체화합니다." },
  { num: "03", title: "디자인", desc: "콘셉트를 만들고 실제 사용 맥락에서 검토하며 다듬습니다." },
  { num: "04", title: "전달", desc: "바로 사용할 수 있는 산출물과 가이드를 넘기고 런칭까지 함께 봅니다." },
];

function AboutPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <div className="bg-white text-[var(--color-text)] font-[family-name:var(--font-inter)] selection:bg-[var(--color-primary)] selection:text-black">
        <Header />

        {/* Hero */}
        <section className="pt-40 pb-14 md:pb-28 border-b border-[var(--color-border)]">
          <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-20 items-end">
            <div>
              <span className="text-[13px] font-bold tracking-[0.4em] uppercase text-[var(--color-text-muted)] block mb-6">스튜디오 소개</span>
              <h1 className="text-[clamp(3rem,8vw,7rem)] font-medium uppercase tracking-tighter leading-[1.1]">
                대담한<br />생각을<br /><span className="text-[var(--color-text)]">보이게.</span>
              </h1>
            </div>
            <div className="space-y-6">
              <p className="text-[1rem] text-[var(--color-text-muted)] leading-relaxed">
                2019년 서울에서 시작한 OHMT는 분명한 이야기를 가진 브랜드와 창업자를 위한 크리에이티브 스튜디오입니다.
              </p>
              <p className="text-[1rem] text-[var(--color-text-muted)] leading-relaxed">
                좋은 디자인은 장식이 아닙니다. 사람들이 제품을 쓰기 전, 이미 어떻게 느낄지를 바꾸는 전략입니다.
              </p>
              <Link href="/ko/templates/OHMT007-portfolio/contact" className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-[var(--color-text)] border-b border-[var(--color-accent)]/30 pb-0.5 hover:border-[var(--color-accent)] transition-colors">
                함께하기 <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-[var(--color-border)]">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="py-14 px-8 text-center"
                >
                  <p className="text-[3rem] font-black tracking-tighter leading-none text-[var(--color-text)] mb-2">{s.num}</p>
                  <p className="text-[0.72rem] uppercase tracking-widest text-[var(--color-text-muted)]/60 font-medium">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-14 md:py-28 border-b border-[var(--color-border)]">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="mb-16">
              <span className="text-[13px] font-bold tracking-[0.3em] uppercase text-[var(--color-text-muted)] block mb-4">작업 방식</span>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-medium uppercase tracking-tighter leading-[1.1]">프로세스</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-0 divide-x divide-white/10 border-x border-[var(--color-border)]">
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 group"
                >
                  <span className="text-[2.5rem] font-black text-[var(--color-text)]/15 group-hover:text-[var(--color-text)]/40 transition-colors block mb-6 leading-none">{step.num}</span>
                  <h3 className="text-[1rem] font-medium uppercase tracking-tight mb-4 group-hover:text-[var(--color-text)] transition-colors">{step.title}</h3>
                  <p className="text-[0.82rem] text-[var(--color-text-muted)] leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-14 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="mb-16">
              <span className="text-[13px] font-bold tracking-[0.3em] uppercase text-[var(--color-text-muted)] block mb-4">사람들</span>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-medium uppercase tracking-tighter leading-[1.1]">팀 소개</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="aspect-square overflow-hidden bg-[var(--color-bg-secondary)] mb-4">
                    <img loading="lazy" src={m.img} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                  </div>
                  <p className="text-[0.9rem] font-medium uppercase tracking-tight">{m.name}</p>
                  <p className="text-[0.75rem] text-[var(--color-text-muted)]/60 mt-1">{m.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </TemplateWrapper>
  );
}


export default function AboutPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <AboutPageContent {...props} />
    </React.Suspense>
  );
}
