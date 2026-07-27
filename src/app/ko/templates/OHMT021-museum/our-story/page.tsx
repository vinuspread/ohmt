"use client";
import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
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
  { year: "1506", title: "라오콘 군상 발견", desc: "교황 율리오 2세가 라오콘 군상을 소장하면서 바티칸 미술관 컬렉션의 출발점이 마련되었습니다." },
  { year: "1512", title: "시스티나 성당 천장화 완성", desc: "미켈란젤로가 약 4년에 걸쳐 작업한 시스티나 성당 천장화를 완성했습니다." },
  { year: "1771", title: "클레멘스 미술관 개관", desc: "교황 클레멘스 14세가 소장품을 대중에게 공개하며 미술관의 기반을 넓혔습니다." },
  { year: "1932", title: "피나코테카 신관 개관", desc: "교황 비오 11세가 현재의 피나코테카 건물을 공식 개관했습니다." }
  ];
  const grottoesData = [
  { name: "교황 그레고리오 16세 묘소", title: "역사적 묘소", desc: "교황의 좌상과 비문, 촛불이 놓인 석조 묘소를 통해 바티칸의 장례 조각과 기념 문화를 살펴봅니다." },
  { name: "원형 돔 회랑", title: "건축과 빛", desc: "돔의 원형 채광창과 열주, 곡선 계단이 이어지는 공간에서 바티칸 건축의 비례와 빛을 확인할 수 있습니다." },
  { name: "조각 회랑", title: "고대 조각 컬렉션", desc: "대리석 인물상과 흉상이 늘어선 긴 회랑으로, 고대 조각을 시대와 주제에 따라 감상할 수 있습니다." }
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
            className="inline-block text-xs uppercase font-bold tracking-[0.5em] text-white/40 mb-8"
          >
            {"바티칸 미술관, 500년의 역사"}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="text-5xl md:text-8xl font-serif font-medium leading-[var(--leading-heading)] tracking-tighter break-keep"
          >
            {"예술이 쌓아 올린 시간"}
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
            <span className="text-xs uppercase font-bold tracking-[0.5em] text-white/40">{"제1장"}</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-[var(--leading-heading)] tracking-tighter break-keep">
              {"소장품의 시작"}
            </h2>
            <p className="text-lg text-white/60 leading-relaxed font-normal break-keep">
              {"1506년 라오콘 군상의 발견을 계기로 시작된 컬렉션은 여러 교황의 수집과 후원을 거쳐 오늘날의 바티칸 미술관으로 이어졌습니다."}
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="relative aspect-[4/5] overflow-hidden">
            <img loading="lazy" src="/templates/OHMT021-museum/vatican-hallway.png" alt="바티칸 미술관 회랑" className="w-full h-full object-cover grayscale-[0.3] hover:scale-105 transition-transform duration-[2s]" />
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-6 mb-16 text-white/20">
            <History size={28} strokeWidth={1} />
            <h3 className="text-xl font-serif uppercase tracking-widest">{"주요 연혁"}</h3>
          </div>
          <div className="flex flex-col gap-20 relative">
            <div className="absolute left-[20px] top-0 bottom-0 w-px bg-white/10" />
            {timelineData.map((evt, i: number) => (
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
          <span className="text-xs uppercase font-bold tracking-[0.5em] text-white/40 block mb-6">{"제2장"}</span>
          <h2 className="text-5xl md:text-7xl font-serif tracking-tighter leading-[var(--leading-heading)] break-keep">
            {"성 베드로 대성당"}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-24 items-center mb-40">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="aspect-[4/5] overflow-hidden">
            <img loading="lazy" src="/templates/OHMT021-museum/baldaquin.png" alt="베르니니의 청동 천개" className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-[2s]" />
          </motion.div>
          <div className="space-y-10">
            <span className="text-xs uppercase font-bold tracking-[0.5em] text-white/40">{"성당의 중심"}</span>
            <h3 className="text-4xl md:text-6xl font-serif leading-[var(--leading-heading)] tracking-tighter break-keep">
              {"베르니니의 청동 천개"}
            </h3>
            <p className="text-lg text-white/60 font-normal leading-relaxed break-keep">
              미켈란젤로가 설계한 돔 아래에는 잔 로렌초 베르니니의 거대한 청동 천개가 놓여 있습니다.<br className="hidden md:block" />
              성 베드로의 무덤이 있는 위치를 표시하며 대성당의 중심을 이룹니다.
            </p>
            <span className="text-xs uppercase font-bold tracking-[0.5em] text-white/20">{"제작 기간: 1623–1634년"}</span>
          </div>
        </div>

        {/* Papal Grottoes */}
        <div className="border-t border-white/5 pt-12 md:pt-24">
          <div className="mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.5em] text-white/40 block mb-6">{"바티칸의 공간과 역사"}</span>
            <h3 className="text-4xl md:text-6xl font-serif tracking-tighter leading-[var(--leading-heading)] break-keep">
              {"미술관의 공간과 기억"}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {grottoes.map((item, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }} className="group">
                <div className="aspect-[3/4] bg-white/5 mb-6 overflow-hidden">
                  <img loading="lazy" src={item.img} alt={item.name} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-[filter,transform] duration-700" />
                </div>
                <span className="text-xs uppercase font-bold tracking-[0.5em] text-white/40 mb-2 block">{item.title}</span>
                <h4 className="text-xl font-serif mb-3 break-keep">{item.name}</h4>
                <p className="text-sm font-normal leading-relaxed text-white/50 break-keep">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20 md:py-32 lg:py-40 text-center px-6">
        <span className="text-xs uppercase font-bold tracking-[0.5em] text-white/40 block mb-8">{"더 살펴보기"}</span>
        <h3 className="text-5xl md:text-7xl font-serif tracking-tighter mb-16 break-keep">
          {"아카이브 둘러보기"}
        </h3>
        <Link
          href="/ko/templates/OHMT021-museum/collections"
          className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.5em] border border-white/20 px-10 py-6 hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-[color,background] duration-500 group"
        >
          {"소장품 둘러보기"}
          <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </section>

      </main>
      <Footer />
    </>

    </TemplateWrapper>
);
}


export default function MuseumInfo(props: Record<string, unknown>) {
  return (
    <React.Suspense fallback={null}>
      <MuseumInfoContent {...props} />
    </React.Suspense>
  );
}
