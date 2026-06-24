"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MousePointerClick, Headphones } from "lucide-react";
import React, { useRef } from "react";
import Link from "next/link";
import { collections } from "./data/collections";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";

import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.95] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

function HomeContent() {

  // Hero Parallax
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  // Horizontal Scroll Setup
  const horizontalRef = useRef(null);
  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"]
  });
  
  const x = useTransform(horizontalProgress, [0, 1], ["0%", "-55%"]);

  return (

    <TemplateWrapper theme={theme}>

      <>
      <Header />
      <main className="antialiased relative bg-[var(--color-primary)] text-[var(--color-accent)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]">
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0 bg-[var(--color-primary)]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[var(--color-primary)] z-10" />
          <img 
            src="/templates/museum/hero-bg.png" 
            alt="Vatican Ceiling"
            className="w-full h-full object-cover opacity-80"
          />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="relative z-20 pointer-events-none mt-16 md:mt-20"
        >
          <motion.span 
            variants={fadeIn} 
            className="inline-block text-[13px] md:text-xs uppercase tracking-tight font-medium mb-6 md:mb-8 text-[var(--color-accent)]/70"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            {"바티칸 미술관의 위대한 헤리티지"}
          </motion.span>
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl lg:text-[4vw] font-normal leading-[1.0] tracking-[-0.03em] mb-8 md:mb-12 text-[var(--color-accent)]"
            style={{ fontFamily: "'Nanum Myeongjo', 'Noto Serif KR', serif" }}
          >
            {"수천 년의 침묵 속에서"} <br />
            <span className="font-normal text-[var(--color-accent)]/80" style={{ fontFamily: "'Nanum Myeongjo', 'Noto Serif KR', serif" }}>{"인류는 아름다움을 새겼다"}</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-[13px] md:text-[15px] text-[var(--color-accent)]/50 font-normal leading-[1.9] tracking-[-0.01em] max-w-[320px] mx-auto mb-10 md:mb-14"
            style={{ fontFamily: "'Pretendard', sans-serif", textWrap: "pretty" } as React.CSSProperties}
          >
            고대 대리석의 속삭임부터 시스티나 천장화의 불꽃까지, 5세기의 후원이 당신을 위해 준비해온 단 하나의 여정.
          </motion.p>
          <motion.div variants={fadeIn} className="pointer-events-auto flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link href="/ko/templates/OHMT021-museum-KO/collections" className="w-fit mx-auto px-8 md:px-10 py-3 md:py-4 border border-[var(--color-accent)]/30 text-xs uppercase tracking-[0.5em] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors duration-500 backdrop-blur-sm">
              {"여정 시작하기"}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Audio Guide Highlights Section */}
      <section className="py-6 md:py-16 bg-[var(--color-accent)] text-[var(--color-primary)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1440px] mx-auto px-6 py-4 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10"
        >
          <div className="flex-1 text-center md:text-left">
            <span className="text-[8px] md:text-[13px] uppercase font-bold tracking-[0.5em] text-black/40 block mb-2 md:mb-4">{"경험의 깊이를 더하다"}</span>
            <h3 className="text-lg md:text-3xl font-serif font-bold mb-3 md:mb-4">{"공식 오디오 가이드"}</h3>
            <p className="text-black/60 font-normal max-w-xs md:max-w-md text-xs md:text-sm leading-relaxed">
              {"세계적인 미술 사학자들의 깊이 있는 해설과 함께 바티칸의 위대한 유산들을 더 깊이 있게 만나보세요. 다국어 오디오 가이드가 지원됩니다."}
            </p>
          </div>
          <div className="flex items-center gap-3 md:gap-6 flex-shrink-0 justify-center md:justify-start">
            <button className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-[var(--color-accent)] transition-colors">
              <Headphones size={20} className="md:w-6 md:h-6" />
            </button>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[8px] md:text-[13px] uppercase tracking-widest font-bold">{"미리듣기"}</span>
              <span className="text-[12px] md:text-xs text-black/40">0:00 / 1:45</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Horizontal Scroll Gallery Section */}
      <section ref={horizontalRef} className="relative bg-[var(--color-primary)]" style={{ height: "auto" }}>
        <div className="sticky top-0 min-h-screen flex flex-col justify-center overflow-hidden py-6 md:py-16 lg:pt-16">

          <div className="px-4 md:px-12 lg:px-24 mb-3 md:mb-8 lg:mb-12">
            <span className="text-[8px] md:text-[13px] uppercase font-bold tracking-[0.5em] text-white/40 block mb-2 md:mb-4">{"컬렉션 01"}</span>
            <h3 className="text-xl md:text-4xl lg:text-6xl font-serif font-bold tracking-[-0.03em]">{"르네상스와 고대 예술"}</h3>
          </div>

          <motion.div style={{ x }} className="flex gap-3 md:gap-6 lg:gap-16 lg:gap-24 px-4 md:px-12 lg:px-24 pb-6 md:pb-12 lg:pb-20 w-full md:w-[150vw] lg:w-[150vw] overflow-x-auto md:overflow-visible touch-pan-x">
            {collections.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                className="w-[85vw] sm:w-[80vw] md:w-[50vw] lg:w-[35vw] xl:w-[25vw] shrink-0"
              >
                <Link href={`/ko/templates/OHMT021-museum-KO/collections/${item.slug}`} className="group relative cursor-pointer block">
                  <div className="relative aspect-[3/4] bg-[var(--color-bg-secondary)] overflow-hidden mb-8">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-out brightness-75 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
                        <MousePointerClick size={20} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col border-t border-white/10 pt-6 px-1">
                    <div className="flex justify-between items-start mb-4 gap-4">
                      <h4 className="text-xl md:text-2xl font-serif tracking-tight leading-snug break-words">{item.title}</h4>
                      <span className="text-[12px] whitespace-nowrap uppercase tracking-widest text-white/50 bg-white/5 px-2 py-1 h-fit">{item.tag}</span>
                    </div>
                    <div className="flex justify-between text-xs font-normal tracking-widest text-white/60">
                      <span className="truncate pr-4">{item.artist}</span>
                      <span className="shrink-0">{item.year}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Curator Note Segment */}
      <section className="py-8 md:py-20 lg:py-28 bg-[var(--color-accent)] text-[var(--color-primary)]">
        <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-6 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="order-2 md:order-1 max-w-lg"
          >
            <span className="text-[12px] md:text-[13px] uppercase font-bold tracking-[0.5em] text-black/40 mb-4 md:mb-6 block">{"에디토리얼"}</span>
            <h3 className="text-4xl md:text-7xl font-serif font-bold mb-4 md:mb-10 leading-[1.5] tracking-[-0.03em]">{"신성한 비례"}</h3>
            <p className="text-base md:text-lg text-black/70 leading-relaxed mb-4 md:mb-10 font-normal">
              {"바티칸 미술관은 단순히 역사적 유물의 저장소가 아닌, 완벽을 향한 인류의 끊임없는 열망이 담긴 거대한 기념비와 같습니다. 그 회랑을 거니는 것은 르네상스 시대의 지성과 영혼이 물리적으로 구현된 공간을 직접 마주하는 것과 다름없습니다."}
              <br /><br />
              {"우리의 큐레이션은 압도적인 장식성 너머에 존재하는 구조적인 눈부심을 포착하고자 합니다. 라오콘(Laocoön)이나 피에타(Pietà)와 같은 걸작들을 고요하고 정제된 디지털 공간에 홀로 세움으로써, 번잡한 미술관의 소음 없이 그 작품들이 지닌 순수한 신학적·감정적 무게감을 오롯이 전하고자 합니다."}
            </p>
            <Link href="/ko/templates/OHMT021-museum-KO/curator-note" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.5em] group pb-2 border-b border-black">
              {"에세이 읽기"} <ArrowRight size={14} className="group-hover:translate-x-3 transition-transform duration-300" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="order-1 md:order-2 relative aspect-[4/3] md:aspect-[3/4] overflow-hidden rounded-sm"
          >
             <img
               src="/templates/museum/curator.png"
               alt="Vatican Museum Interior"
               className="w-full h-full object-cover grayscale"
             />
          </motion.div>
        </div>
      </section>

      </main>
      <Footer />
    </>

    </TemplateWrapper>
);
}


export default function Home(props: any) {
  return (
    <React.Suspense fallback={null}>
      <HomeContent {...props} />
    </React.Suspense>
  );
}
