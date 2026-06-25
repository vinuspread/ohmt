"use client";
import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Header from "../_components/layout/Header";
import Footer from "../_components/layout/Footer";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function SpecialExhibitionsContent() {

  const specialExhibitionsData = [
  {
    name: "레오나르도 다 빈치: 신성한 화가",
    period: "2026.04.12 - 08.31",
    venue: "라파엘로 회랑, 메인 갤러리",
    desc: "거장의 가장 정교한 회화 작품들을 최첨단 인터랙티브 디지털 기술로 복원하여 독창적인 공간에서 선보입니다.",
    tag: "성기 르네상스"
  },
  {
    name: "그리스의 눈부심: 고전 조각전",
    period: "2026.05.20 - 10.15",
    venue: "클레멘스 회랑, 조각상 홀",
    desc: "라오콘 군상부터 아폴로 벨베데레에 이르기까지 고대 그리스 거장들이 대리석에 불어넣은 촉각적 천재성을 압도적인 화질로 만나보세요.",
    tag: "고전 고대 예술"
  }
];
  const specialExhibitions = [
    { ...specialExhibitionsData[0], img: "/templates/OHMT021-museum/exhibition-poster-vinci.png" },
    { ...specialExhibitionsData[1], img: "/templates/OHMT021-museum/exhibition-poster-greek.png" }
  ];

  const permanentGalleriesData = [
  { name: "시스티나 성당", desc: "미켈랑젤로 예술의 절정." },
  { name: "지도 갤러리", desc: "이탈리아의 지형학적 유산." }
];
  const permanentGalleries = [
    { ...permanentGalleriesData[0], img: "/templates/OHMT021-museum/hero-bg.png" },
    { ...permanentGalleriesData[1], img: "/templates/OHMT021-museum/vatican-hallway.png" }
  ];

  return (

    <TemplateWrapper theme={theme}>

      <>
      <Header />
      <main className="antialiased bg-[var(--color-primary)] min-h-screen text-[var(--color-accent)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)] pb-16 md:pb-32 pt-20 md:pt-40">

      {/* Intro Section */}
      <section className="px-6 md:px-12 mb-20 md:mb-32 lg:mb-40 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <span className="text-[13px] uppercase font-bold tracking-[0.5em] text-white/40 mb-8 block font-sans">{"현재 진행 중인 전시"}</span>
          <h2 className="text-5xl md:text-[7vw] font-serif leading-none tracking-tighter mb-12 break-keep">{"특별 전시."}</h2>
        </motion.div>
      </section>

      {/* Poster Style Special Exhibitions */}
      <section className="max-w-[1440px] mx-auto px-6 space-y-20 md:space-y-32 lg:space-y-40 mb-32 md:mb-48 lg:mb-60">
        {specialExhibitions.map((exhib: any, i: number) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className={`relative aspect-[3/4] md:aspect-[4/5] overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}
            >
              <img 
                src={exhib.img} 
                alt={exhib.name} 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transition-[filter,transform] duration-[3s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent opacity-60" />
            </motion.div>
            
            <div className={`space-y-6 ${i % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
              <span className="text-[12px] uppercase font-bold tracking-[0.6em] text-white/30 block mb-4 font-sans">{exhib.tag}</span>
              <h3 className="text-4xl md:text-6xl font-serif tracking-tighter leading-none mb-6 break-keep">{exhib.name}</h3>
              
              <div className={`flex flex-col gap-3 text-xs font-medium uppercase tracking-normal text-white/40 font-sans ${i % 2 === 1 ? 'lg:items-end' : ''}`}>
                 <div className="flex items-center gap-3"><Calendar size={14} strokeWidth={1.5} /> {exhib.period}</div>
                 <div className="flex items-center gap-3"><MapPin size={14} strokeWidth={1.5} /> {exhib.venue}</div>
              </div>

              <p className={`text-base md:text-lg text-white/60 font-normal leading-relaxed max-w-md font-serif break-keep ${i % 2 === 1 ? 'lg:ml-auto' : ''}`}>
                "{exhib.desc}"
              </p>

              <div className={`pt-6 ${i % 2 === 1 ? 'lg:flex lg:justify-end' : ''}`}>
                <Link href="/ko/templates/OHMT021-museum/collections" className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-normal group/btn px-8 py-3 border border-white/20 hover:bg-white hover:text-black transition-[color,background]">
                   {"도록 보기"} <ArrowRight size={13} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Permanent Gallery Selection */}
      <section className="py-10 md:py-20 md:py-32 lg:py-40 border-t border-white/5 px-6">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="mb-20">
            <span className="text-[13px] uppercase font-bold tracking-[0.5em] text-white/40 block mb-6">{"미술관의 상설 유산"}</span>
            <h3 className="text-4xl font-serif break-keep">{"상설 컬렉션"}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {permanentGalleries.map((item: any, i: number) => (
                <div key={i} className="group cursor-pointer">
                   <div className="aspect-[21/9] overflow-hidden mb-8 bg-white/5 relative">
                      <img loading="lazy" src={item.img} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700 brightness-50 group-hover:brightness-100" />
                   </div>
                   <h4 className="text-xl font-serif mb-2 tracking-wide break-keep">{item.name}</h4>
                   <p className="text-xs text-white/40 uppercase tracking-widest break-keep">{item.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </>

    </TemplateWrapper>
);
}


export default function SpecialExhibitions(props: any) {
  return (
    <React.Suspense fallback={null}>
      <SpecialExhibitionsContent {...props} />
    </React.Suspense>
  );
}
