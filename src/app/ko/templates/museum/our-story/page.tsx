"use client";
import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, History } from "lucide-react";
import Header from "../_components/layout/Header";
import Footer from "../_components/layout/Footer";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

function MuseumInfoContent() {

  const timelineData = [
  { year: "1506", title: "라오콘 군상 발견", desc: "교황 율리오 2세가 대리석 조각상을 구입하면서 바티칸 미술관 설립의 초석이 마련되었습니다." },
  { year: "1512", title: "시스티나 성당 천장화 완성", desc: "미켈랑젤로가 4년여의 치열한 사투 끝에 위대한 불멸의 걸작을 공개했습니다." },
  { year: "1771", title: "클레멘스 미술관 개관", desc: "교황 클레멘스 14세에 의해 대중에게 개방된 현대식 미술관 시스템이 도입되었습니다." },
  { year: "1932", title: "회화관 (Pinacoteca) 신관 개관", desc: "교황 비오 11세에 의해 오늘날의 피나코테카 미술관 건물이 공식 개관했습니다." }
];
  const grottoesData = [
  { name: "사도 성 베드로", title: "초대 교황", desc: "대성당 중앙 제단 바로 아래 안치되어 있으며, 그의 무덤은 오늘날 대성당이 세워진 영적 기초입니다." },
  { name: "교황 요한 바오로 2세", title: "위대한 순례자", desc: "그의 묘소는 전 세계 그리스도인들이 가장 많이 찾는 성스러운 순례지 중 하나입니다." },
  { name: "교황 그레고리오 1세", title: "교회의 대박사", desc: "전례와 성가에 헌신한 그의 안식처는 소박하면서도 장엄한 대리석 조각으로 장식되어 있습니다." }
];
  
  const grottoes = [
    { ...grottoesData[0], img: "/templates/OHMT021-museum/papal-tombs.png" },
    { ...grottoesData[1], img: "/templates/OHMT021-museum/curator.png" },
    { ...grottoesData[2], img: "/templates/OHMT021-museum/vatican-hallway.png" },
  ];

  return (

    <TemplateWrapper theme={theme}>

      <>
      <Header />
      <main className="antialiased bg-[var(--color-primary)] text-[var(--color-accent)] min-h-screen selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="/templates/OHMT021-museum/st-peters-exterior.png"
            alt="The Vatican Sanctuary"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[var(--color-primary)]" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="inline-block text-[13px] uppercase font-bold tracking-[0.5em] text-white/40 mb-8"
          >
            {"바티칸 미술관 - 500년의 헤리티지"}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="text-5xl md:text-8xl font-serif font-medium leading-none tracking-tighter break-keep"
          >
            {"돌에 깃든 영혼"}
          </motion.h1>
        </div>
      </section>

      {/* Chapter I - Foundation */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-16 py-10 md:py-20 md:py-32 lg:py-40 border-b border-white/5">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-24 items-center mb-40"
        >
          <motion.div variants={fadeIn} className="space-y-10">
            <span className="text-[13px] uppercase font-bold tracking-[0.5em] text-white/40">{"제1장"}</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-[1.5] tracking-tighter break-keep">
              {"빛의 기초"}
            </h2>
            <p className="text-lg text-white/60 leading-relaxed font-normal break-keep">
              {"1506년 라오콘 군상의 발견과 함께 시작된 바티칸 미술관은 교황들의 예술적 후원과 완벽을 향한 인류의 끊임없는 열망이 축적된 5세대의 역사를 품고 있습니다."}
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="relative aspect-[4/5] overflow-hidden">
            <img loading="lazy" src="/templates/OHMT021-museum/vatican-hallway.png" alt="Museum Corridor" className="w-full h-full object-cover grayscale-[0.3] hover:scale-105 transition-transform duration-[2s]" />
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-6 mb-16 text-white/20">
            <History size={28} strokeWidth={1} />
            <h3 className="text-xl font-serif uppercase tracking-widest">{"시간의 궤적."}</h3>
          </div>
          <div className="flex flex-col gap-20 relative">
            <div className="absolute left-[20px] top-0 bottom-0 w-px bg-white/10" />
            {timelineData.map((evt: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }} className="pl-16 relative">
                <div className="absolute left-[16px] top-3 w-2 h-2 rounded-full bg-[var(--color-accent)]/60 ring-8 ring-[var(--color-primary)]" />
                <span className="text-3xl font-serif mb-3 block text-white/25">{evt.year}</span>
                <h4 className="text-sm font-bold uppercase tracking-[0.3em] mb-3 break-keep">{evt.title}</h4>
                <p className="text-sm text-white/50 font-normal leading-relaxed max-w-xl break-keep">{evt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter II - Basilica */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-16 py-10 md:py-20 md:py-32 lg:py-40 border-b border-white/5">
        <div className="mb-24">
          <span className="text-[13px] uppercase font-bold tracking-[0.5em] text-white/40 block mb-6">{"제2장"}</span>
          <h2 className="text-5xl md:text-7xl font-serif tracking-tighter leading-[1.5] break-keep">
            {"성 베드로 대성당"}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-24 items-center mb-40">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="aspect-[4/5] overflow-hidden">
            <img loading="lazy" src="/templates/OHMT021-museum/baldaquin.png" alt="Bernini's Baldaquin" className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-[2s]" />
          </motion.div>
          <div className="space-y-10">
            <span className="text-[13px] uppercase font-bold tracking-[0.5em] text-white/40">{"교황 제단"}</span>
            <h3 className="text-4xl md:text-6xl font-serif leading-[1.5] tracking-tighter break-keep">
              {"베르니니의 천개 (Baldaquin)"}
            </h3>
            <p className="text-lg text-white/60 font-normal leading-relaxed break-keep">
              {"미켈랑젤로가 설계한 돔 바로 아래, 잔 로렌초 베르니니가 설계한 29미터 높이의 거대한 청동 천개는 성 베드로의 무덤을 표시하며 성당의 미학적 중심을 이룹니다."}
            </p>
            <span className="text-[13px] uppercase font-bold tracking-[0.5em] text-white/20">{"제작 기간: 1623년 - 1634년"}</span>
          </div>
        </div>

        {/* Papal Grottoes */}
        <div className="border-t border-white/5 pt-12 md:pt-24">
          <div className="mb-16">
            <span className="text-[13px] uppercase font-bold tracking-[0.5em] text-white/40 block mb-6">{"고요한 바티칸의 기록"}</span>
            <h3 className="text-4xl md:text-6xl font-serif tracking-tighter leading-[1.5] break-keep">
              {"교황의 지하 묘소 (Grottoes)"}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {grottoes.map((item: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }} className="group">
                <div className="aspect-[3/4] bg-white/5 mb-6 overflow-hidden">
                  <img loading="lazy" src={item.img} alt={item.name} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-[filter,transform] duration-700" />
                </div>
                <span className="text-[12px] uppercase font-bold tracking-[0.5em] text-white/40 mb-2 block">{item.title}</span>
                <h4 className="text-xl font-serif mb-3 break-keep">{item.name}</h4>
                <p className="text-sm font-normal leading-relaxed text-white/50 break-keep">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20 md:py-32 lg:py-40 text-center px-6">
        <span className="text-[13px] uppercase font-bold tracking-[0.5em] text-white/40 block mb-8">{"여정의 확장"}</span>
        <h3 className="text-5xl md:text-7xl font-serif tracking-tighter mb-16 break-keep">
          {"아카이브 둘러보기"}
        </h3>
        <Link
          href="/ko/templates/OHMT021-museum/collections"
          className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.5em] border border-white/20 px-10 py-6 hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-[color,background] duration-500 group"
        >
          {"소장품 탐색하기"}
          <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </section>

      </main>
      <Footer />
    </>

    </TemplateWrapper>
);
}


export default function MuseumInfo(props: any) {
  return (
    <React.Suspense fallback={null}>
      <MuseumInfoContent {...props} />
    </React.Suspense>
  );
}
