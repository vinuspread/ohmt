"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, MousePointerClick, Headphones } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
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
  const horizontalRef = useRef<HTMLElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const [horizontalTravel, setHorizontalTravel] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(horizontalProgress, [0, 1], [0, -horizontalTravel]);
  const shouldPinGallery = isDesktop && !shouldReduceMotion && horizontalTravel > 0;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateLayout = () => {
      window.requestAnimationFrame(() => {
        setIsDesktop(mediaQuery.matches);
        const trackWidth = horizontalTrackRef.current?.scrollWidth ?? 0;
        setHorizontalTravel(Math.max(0, trackWidth - window.innerWidth));
      });
    };

    updateLayout();
    mediaQuery.addEventListener("change", updateLayout);
    window.addEventListener("resize", updateLayout);

    const resizeObserver = new ResizeObserver(updateLayout);
    if (horizontalTrackRef.current) resizeObserver.observe(horizontalTrackRef.current);

    return () => {
      mediaQuery.removeEventListener("change", updateLayout);
      window.removeEventListener("resize", updateLayout);
      resizeObserver.disconnect();
    };
  }, []);

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
            src="/templates/OHMT021-museum/hero-bg.png" 
            alt="바티칸 미술관 천장화"
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
            className="inline-block text-xs md:text-xs uppercase tracking-tight font-medium mb-6 md:mb-8 text-[var(--color-accent)]/70"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            {"바티칸 미술관, 500년의 기록"}
          </motion.span>
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl lg:text-[4vw] font-normal leading-[var(--leading-heading)] tracking-[-0.03em] mb-8 md:mb-12 text-[var(--color-accent)]"
            style={{ fontFamily: "'Nanum Myeongjo', 'Noto Serif KR', serif" }}
          >
            {"시간을 건너온"} <br />
            <span className="font-normal text-[var(--color-accent)]/80" style={{ fontFamily: "'Nanum Myeongjo', 'Noto Serif KR', serif" }}>{"예술을 만나다."}</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xs md:text-sm text-[var(--color-accent)]/50 font-normal leading-loose tracking-[-0.01em] max-w-[320px] mx-auto mb-10 md:mb-14"
            style={{ fontFamily: "'Pretendard', sans-serif", textWrap: "pretty" } as React.CSSProperties}
          >
            고대 조각부터 르네상스 회화까지, 시대를 대표하는 작품과 그 배경을 한곳에서 살펴보세요.</motion.p>
          <motion.div variants={fadeIn} className="pointer-events-auto flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link href="/ko/templates/OHMT021-museum/collections" className="w-fit mx-auto px-8 md:px-10 py-3 md:py-4 border border-[var(--color-accent)]/30 text-xs uppercase tracking-[0.5em] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors duration-500 backdrop-blur-sm">
              {"전시 둘러보기"}
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
            <span className="text-xs md:text-xs uppercase font-bold tracking-[0.5em] text-black/40 block mb-2 md:mb-4">{"작품을 더 깊이 만나는 법"}</span>
            <h3 className="text-lg md:text-3xl font-serif font-bold mb-3 md:mb-4">{"오디오 가이드"}</h3>
            <p className="text-black/60 font-normal max-w-xs md:max-w-md text-sm md:text-sm leading-relaxed">
              작품의 배경과 주요 장면을 설명하는 오디오 가이드입니다.<br className="hidden md:block" />
              여러 언어로 들을 수 있습니다.
            </p>
          </div>
          <div className="flex items-center gap-3 md:gap-6 flex-shrink-0 justify-center md:justify-start">
            <button className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-[var(--color-accent)] transition-colors">
              <Headphones size={20} className="md:w-6 md:h-6" />
            </button>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-xs md:text-xs uppercase tracking-widest font-bold">{"미리듣기"}</span>
              <span className="text-xs md:text-xs text-black/40">0:00 / 1:45</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Horizontal Scroll Gallery Section */}
      <section
        ref={horizontalRef}
        className="relative bg-[var(--color-primary)]"
        style={{ height: shouldPinGallery ? `calc(100vh + ${horizontalTravel}px)` : "auto" }}
      >
        <div className={`${shouldPinGallery ? "sticky top-0 h-screen overflow-hidden" : "relative"} flex flex-col justify-center py-6 md:py-16 lg:pt-16`}>

          <div className="px-4 md:px-12 lg:px-24 mb-3 md:mb-8 lg:mb-12">
            <span className="text-xs md:text-xs uppercase font-bold tracking-[0.5em] text-white/40 block mb-2 md:mb-4">{"대표 소장품"}</span>
            <h3 className="text-xl md:text-4xl lg:text-6xl font-serif font-bold tracking-[-0.03em]">{"르네상스 회화와 고대 조각"}</h3>
          </div>

          <div className={shouldPinGallery ? "overflow-hidden" : "overflow-x-auto no-scrollbar touch-pan-x"}>
            <motion.div
              ref={horizontalTrackRef}
              style={{ x: shouldPinGallery ? x : 0 }}
              className="flex w-max gap-3 px-4 pb-6 md:gap-6 md:px-12 md:pb-12 lg:gap-24 lg:px-24 lg:pb-20"
            >
              {collections.slice(0, 6).map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  className="w-[85vw] shrink-0 sm:w-[80vw] md:w-[50vw] lg:w-[35vw] xl:w-[25vw]"
                >
                  <Link href={`/ko/templates/OHMT021-museum/collections/${item.slug}`} className="group relative cursor-pointer block">
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
                        <span className="text-xs whitespace-nowrap uppercase tracking-widest text-white/50 bg-white/5 px-2 py-1 h-fit">{item.tag}</span>
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
            <span className="text-xs md:text-xs uppercase font-bold tracking-[0.5em] text-black/40 mb-4 md:mb-6 block">{"큐레이터 노트"}</span>
             <h3 className="text-4xl md:text-7xl font-serif font-bold mb-4 md:mb-10 leading-[var(--leading-heading)] tracking-[-0.03em]">{"작품 속 비례와 질서"}</h3>
            <p className="text-base md:text-lg text-black/70 leading-relaxed mb-4 md:mb-10 font-normal">
              바티칸 미술관은 여러 시대의 예술과 기록이 한곳에 쌓인 공간입니다.<br className="hidden md:block" />
              회랑을 따라 걸으며 르네상스의 생각과 기술이 작품에 어떻게 남아 있는지 살펴봅니다.
              <br /><br />
              화려한 장식보다 작품의 구조와 표정에 집중했습니다.<br className="hidden md:block" />
              라오콘 군상과 피에타를 한 점씩 자세히 살펴보며 조각에 담긴 긴장과 감정을 전합니다.
            </p>
            <Link href="/ko/templates/OHMT021-museum/curator-note" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.5em] group pb-2 border-b border-black">
              {"큐레이터 노트 읽기"} <ArrowRight size={14} className="group-hover:translate-x-3 transition-transform duration-300" />
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
               src="/templates/OHMT021-museum/curator.png"
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


export default function Home(props: Record<string, unknown>) {
  return (
    <React.Suspense fallback={null}>
      <HomeContent {...props} />
    </React.Suspense>
  );
}
