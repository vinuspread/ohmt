"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Play } from "lucide-react";
import React, { useRef } from "react";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

function JewelryPageContent() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = React.useState("All");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const products = [
    { name: "다이아몬드 솔리테어 링", price: "$4,250", img: "/templates/jewelry/jewelry-ring.png", tag: "웨딩" },
    { name: "래디언트 펄 펜던트", price: "$1,850", img: "/templates/jewelry/jewelry-pendant.png", tag: "시즈널" },
    { name: "사파이어 뱅글", price: "$12,200", img: "/templates/jewelry/jewelry-hero-main.png", tag: "럭셔리" },
    { name: "로즈 골드 인피니티 밴드", price: "$3,400", img: "/templates/jewelry/jewelry-ring.png", tag: "에센셜" },
  ];

  const filteredProducts = products.filter((product) => {
    if (activeTab === "All") return true;
    if (activeTab === "Rings") return product.name.includes("링") || product.name.includes("밴드");
    if (activeTab === "Necklaces") return product.name.includes("펜던트") || product.name.includes("뱅글");
    if (activeTab === "Earrings") return product.name.includes("귀걸이");
    return true;
  });

  return (
    <TemplateWrapper theme={theme}>
      <main ref={containerRef} className="bg-[var(--color-bg)] selection:bg-[var(--color-primary)] selection:text-white font-sans text-neutral-900">
        <Navbar />

        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="absolute inset-0 z-0"
          >
            <img
              src="/templates/jewelry/jewelry-hero-main.png"
              className="w-full h-full object-cover grayscale-[0.2]"
              alt="Oh My Template Fine Jewelry Hero"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
          </motion.div>

          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[13px] md:text-[15px] uppercase text-white mb-6 block tracking-tight font-bold opacity-80">
                Oh My Template FINE JEWELRY
              </span>
              <h2 className="text-white mb-12 flex flex-col items-center tracking-[0.05em] max-w-6xl mx-auto space-y-4">
                <span className="block font-extralight text-white/90 text-center text-lg md:text-2xl tracking-tight" style={{ fontFamily: "'Nanum Myeongjo', serif" }}>시간이 흘러도 빛을 잃지 않는 고귀한 명작,</span>
                <span className="block font-serif font-normal text-[var(--color-primary)] text-center text-3xl md:text-6xl leading-[1.2] md:leading-[1.2]" style={{ fontFamily: "'Nanum Myeongjo', serif" }}>
                  {"당신의 찬란한 모든 순간 위에"} <br /> {"가장 눈부신 영원의 광채를 바칩니다."}
                </span>
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button className="px-10 py-4 bg-white text-neutral-900 text-[13px] font-bold uppercase tracking-[0.3em] hover:bg-[var(--color-primary)] hover:text-white transition-all">
                  컬렉션 탐색
                </button>
                <button className="group flex items-center gap-4 text-white hover:text-[var(--color-primary)] transition-all text-[13px] uppercase tracking-[0.3em] font-bold">
                  브랜드 헤리티지 <div className="w-10 h-px bg-white group-hover:bg-[var(--color-primary)] group-hover:w-16 transition-all duration-700" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products */}
        <section className="py-10 md:py-20 md:py-32 px-6 md:px-12 bg-white">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-8">
              <div>
                <span className="text-[13px] text-[var(--color-primary)] mb-3 block tracking-[0.3em] font-bold uppercase">BOUTIQUE</span>
                <h3 className="text-3xl md:text-5xl font-serif font-bold tracking-[-0.03em]">모던 클래식 에디션</h3>
              </div>
              <div className="flex items-center gap-6 md:gap-10 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
                {[
                  { id: "All", label: "전체" },
                  { id: "Rings", label: "반지" },
                  { id: "Necklaces", label: "목걸이" },
                  { id: "Earrings", label: "귀걸이" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-2 text-[13px] uppercase tracking-[0.3em] font-bold transition-all duration-500 cursor-pointer whitespace-nowrap border-b-[1.5px] shrink-0 ${
                      activeTab === tab.id
                        ? "text-neutral-900 border-[var(--color-primary)]"
                        : "text-neutral-400 border-transparent hover:text-neutral-700 hover:border-neutral-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {filteredProducts.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.15 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-[var(--color-bg-secondary)] border border-neutral-100">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2.5s] ease-out"
                    />
                    <div className="absolute top-3 right-3 z-10">
                      <button className="p-2 rounded-full bg-white/60 backdrop-blur-md text-neutral-400 hover:text-[var(--color-primary)] transition-colors">
                        <Heart size={14} strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] bg-white/95 text-[var(--color-primary)] border border-neutral-200/60 rounded-[2px] px-2 py-0.5 uppercase font-bold tracking-[0.15em] backdrop-blur-sm">{item.tag}</span>
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-700 hidden sm:block">
                      <button className="w-full py-3 bg-[var(--color-primary)] text-white text-[13px] font-bold uppercase tracking-[0.1em] hover:bg-neutral-900">
                        프라이빗 예약 신청
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1 text-center">
                    <h4 className="text-sm md:text-base font-serif font-bold text-neutral-800 group-hover:text-[var(--color-primary)] transition-colors leading-tight truncate">{item.name}</h4>
                    <p className="text-sm text-neutral-500 font-bold">{item.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Craftsmanship */}
        <section className="py-10 md:py-20 md:py-32 px-6 md:px-12 bg-[var(--color-bg)]">
          <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="aspect-[4/5] overflow-hidden"
              >
                <img loading="lazy" src="/templates/jewelry/jewelry-craft.png" alt="Jewelry Craftsmanship" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute -bottom-10 -right-6 lg:-bottom-14 lg:-right-14 w-72 bg-white p-8 hidden md:block shadow-[0_40px_80px_rgba(0,0,0,0.08)] border border-neutral-100">
                <span className="text-[var(--color-primary)] text-[13px] font-bold uppercase tracking-[0.3em] block mb-3">아틀리에의 장인정신</span>
                <p className="text-sm text-neutral-800 leading-relaxed font-bold font-serif">
                  "모든 단면은 빛과 원석의 깊은 대화입니다. Oh My Template만의 독보적인 광채를 구현하기 위해 장인의 손길로 정교하게 다듬어집니다."
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-[13px] uppercase tracking-[0.3em] text-neutral-400 font-bold">HERITAGE</span>
              <h3 className="text-3xl md:text-5xl font-serif font-bold leading-[1.5] tracking-[-0.01em]">영혼을 담아 <span className="text-[var(--color-primary)]">빚어낸 찬란함</span></h3>
              <p className="text-sm md:text-base text-neutral-600 leading-[1.7] md:leading-[1.8] max-w-md">
                Oh My Template는 주얼리가 단순한 장신구를 넘어, 삶의 가장 찬란한 순간을 함께 기억하는 영원한 동반자라 믿습니다. 하나의 완벽한 세팅을 위해, 장인들은 수백 시간 동안 예술에 가까운 헌신을 바칩니다.
              </p>
              <div className="flex items-center gap-4 group cursor-pointer pt-2">
                <div className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)] group-hover:text-white transition-all duration-500 flex-shrink-0">
                  <Play size={12} fill="currentColor" className="translate-x-[1px]" />
                </div>
                <span className="text-[13px] uppercase tracking-[0.3em] font-bold group-hover:translate-x-2 transition-transform duration-500">장인의 아틀리에 엿보기</span>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function JewelryPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <JewelryPageContent {...props} />
    </React.Suspense>
  );
}
