"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { ArrowLeft } from "lucide-react";
import theme from "../theme.json";

const SEASONS = [
  {
    id: "ss26",
    label: "SS26 — 봄/여름",
    title: "첫 번째 빛",
    image: "/templates/OHMT001-fashion/exclusive-custom.jpg",
    description:
      "구조와 유동성의 긴장 속에서 탄생한 데뷔 컬렉션. 테일러드 실루엣이 드레이프 오간자와 만나 통제된 부드러움을 탐구합니다.",
    year: "2026",
  },
  {
    id: "aw25",
    label: "AW25 — 가을/겨울",
    title: "콘크리트 정원",
    image: "/templates/OHMT001-fashion/branding-custom.jpg",
    description:
      "인간의 손길로 부드러워진 브루탈리스트 형태. 울, 가죽, 생지 가장자리로 정의된, 보호와 노출 사이를 걷는 시즌.",
    year: "2025",
  },
  {
    id: "core",
    label: "코어 시리즈",
    title: "영구적 대상",
    image: "/templates/OHMT001-fashion/hero-custom.jpg",
    description:
      "기초. 한 시즌이 아닌 평생을 위해 디자인된 의복. 모든 스티치와 솔기, 실루엣이 본질적 형태로 정제되었습니다.",
    year: "2025",
  },
  {
    id: "limited",
    label: "리미티드 드롭",
    title: "모뉴먼트",
    image: "/templates/OHMT001-fashion/exclusive-lifestyle.png",
    description:
      "의복과 조각의 경계를 탐구한 실험적 캡슐. 전 세계 50피스 한정 에디션으로 제작되었습니다.",
    year: "2024",
  },
];

function PageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="min-h-screen bg-black antialiased selection:bg-white selection:text-black">
        <Navbar />

        {/* Hero */}
        <section className="relative h-[40vh] md:h-[50vh] overflow-hidden flex items-center justify-center pt-14 md:pt-20">
          <img
            src="/templates/OHMT001-fashion/archive-hero.jpg"
            alt="아카이브"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
          <div className="relative z-10 text-center px-6 flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/50 mb-3"
            >
              ARCHIVE
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-[family-name:var(--font-bodoni)] text-[32px] md:text-[48px] font-bold text-white tracking-[-0.04em]"
            >
              시즌의 발자취
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[13px] text-white/60 font-light mt-4 tracking-[-0.025em] max-w-xl break-keep"
            >
              우리가 지나온 계절들, 그리고 그 속에 남겨진 영구적인 아카이브.
            </motion.p>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-12 bg-white/30"
            />
          </div>
        </section>

        {/* Back link */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-12 md:pt-16">
          <Link
            href="/ko/templates/OHMT001-fashion"
            className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            홈으로
          </Link>
        </div>

        {/* Season entries */}
        {SEASONS.map((season, i) => (
          <section key={season.id} className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-36">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={i % 2 === 1 ? "md:col-start-2" : ""}
              >
                <div className="aspect-[4/5] overflow-hidden bg-white/5">
                  <img
                    src={season.image}
                    alt={season.title}
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className={i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
                  {season.label}
                </span>
                <h2 className="text-[32px] sm:text-[3.5vw] font-bold tracking-[-0.04em] uppercase leading-[1.1] text-white mt-4 mb-6">
                  {season.title}
                </h2>
                <p className="text-[14px] sm:text-[15px] text-white/50 leading-relaxed max-w-md tracking-[-0.025em]">
                  {season.description}
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <span className="text-[40px] sm:text-[4vw] font-bold tracking-tighter text-white/10 leading-none">
                    {season.year}
                  </span>
                  <div className="w-12 h-px bg-white/20" />
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* Closing CTA */}
        <section className="border-t border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
            <p className="text-[14px] sm:text-[16px] text-white/40 max-w-lg mx-auto leading-relaxed tracking-[-0.025em] mb-8">
              과거의 컬렉션이 다음을 만듭니다. 현재 시즌을 둘러보세요.
            </p>
            <Link
              href="/ko/templates/OHMT001-fashion/collection"
              className="inline-block bg-white text-black px-10 py-4 text-[12px] font-bold uppercase tracking-[0.3em] hover:opacity-70 transition-all"
            >
              현재 컬렉션 보기
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function Page() {
  return (
    <React.Suspense fallback={null}>
      <PageContent />
    </React.Suspense>
  );
}
