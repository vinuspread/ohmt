"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { SubpageHero } from "../_components/SubpageHero";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { ArrowLeft } from "lucide-react";
import theme from "../theme.json";

const SEASONS = [
  {
    id: "ss26",
    label: "SS26 · 봄/여름",
    title: "2026 봄·여름 컬렉션",
    image: "/templates/OHMT001-fashion/exclusive-custom.jpg",
    description:
      "얇은 울과 코튼, 오간자로 봄·여름 옷을 구성했습니다. 여유로운 재킷과 셔츠, 흐르는 드레스를 선보입니다.",
    year: "2026",
  },
  {
    id: "aw25",
    label: "AW25 · 가을/겨울",
    title: "2025 가을·겨울 컬렉션",
    image: "/templates/OHMT001-fashion/branding-custom.jpg",
    description:
      "울 코트와 가죽 재킷, 니트로 겨울 옷을 구성했습니다. 차콜과 브라운, 딥 네이비를 중심으로 사용했습니다.",
    year: "2025",
  },
  {
    id: "core",
    label: "코어 컬렉션",
    title: "시그니처 컬렉션",
    image: "/templates/OHMT001-fashion/hero-custom.jpg",
    description:
      "티셔츠와 셔츠, 팬츠처럼 자주 입는 옷을 모았습니다. 오래 입어도 형태가 유지되도록 소재와 봉제를 다듬었습니다.",
    year: "2025",
  },
  {
    id: "limited",
    label: "한정 컬렉션",
    title: "아틀리에 에디션",
    image: "/templates/OHMT001-fashion/exclusive-lifestyle.png",
    description:
      "특별한 소재와 정교한 공정이 필요한 제품만 선보입니다. 한정된 수량으로 제작하며 완성도를 세심하게 확인합니다.",
    year: "2024",
  },
];

function PageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="min-h-screen bg-black antialiased selection:bg-white selection:text-black">
        <Navbar />

        <SubpageHero
          eyebrow="ARCHIVE"
          title="지난 컬렉션"
          description="시즌별로 선보였던 옷과 캠페인을 한곳에 모았습니다. 소재와 실루엣이 어떻게 달라져 왔는지 컬렉션별로 살펴보세요."
          image="/templates/OHMT001-fashion/archive-hero.jpg"
          imageAlt="지난 시즌 컬렉션 캠페인"
        />

        {/* Back link */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-12 md:pt-16">
          <Link
            href="/ko/templates/OHMT001-fashion"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            홈으로 돌아가기
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
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/20">
                  {season.label}
                </span>
                <h2 className="text-4xl sm:text-[3.5vw] font-bold tracking-[-0.04em] uppercase leading-[var(--leading-heading)] text-white mt-4 mb-6">
                  {season.title}
                </h2>
                <p className="text-sm sm:text-sm text-white/50 leading-relaxed max-w-md tracking-[-0.025em]">
                  {season.description.split(". ").map((sentence, index, sentences) => (
                    <span key={sentence} className="block">
                      {sentence}{index < sentences.length - 1 ? "." : ""}
                    </span>
                  ))}
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <span className="text-4xl sm:text-[4vw] font-bold tracking-tighter text-white/10 leading-none">
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
            <p className="text-sm sm:text-base text-white/40 max-w-lg mx-auto leading-relaxed tracking-[-0.025em] mb-8">
              현재 판매 중인 컬렉션을 확인해 보세요.
            </p>
            <Link
              href="/ko/templates/OHMT001-fashion/collection"
              className="inline-block bg-white text-black px-10 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:opacity-70 transition-all"
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
