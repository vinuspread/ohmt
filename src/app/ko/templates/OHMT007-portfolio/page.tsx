"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TemplateWrapper } from "./_components/TemplateWrapper";
import theme from "./theme.json";
import { Header } from "./_components/layout/Header";
import { Footer } from "./_components/layout/Footer";
import { projects, services, stats, testimonials, blogPosts } from "./_data/portfolio-data";

/* Portfolio KO FAQ Data */
const faqs = [
  { q: "프로젝트는 어떤 과정으로 진행되나요?", a: "초기 상담에서 목표와 고객, 필요한 업무 범위와 성공 기준을 정리합니다. 이후 리서치, 방향 설정, 디자인, 제작과 검수 순서로 진행하며 보통 4~12주가 필요합니다." },
  { q: "단일 프로젝트도 의뢰할 수 있나요?", a: "가능합니다. 브랜드 아이덴티티, 웹사이트 제작, 캠페인 디자인처럼 한 번에 완료되는 프로젝트도 진행하며 장기 계약은 필수가 아닙니다." },
  { q: "어떤 도구로 협업하나요?", a: "디자인은 주로 Figma와 Adobe 도구를 사용하며, 개발은 프로젝트에 적합한 웹 기술을 선택합니다. 일정과 자료 공유 도구는 협업 방식에 맞춰 정합니다." },
  { q: "디자인 수정은 몇 번 진행되나요?", a: "프로젝트 범위에 따라 다르지만 보통 단계별로 2~3회의 검토와 수정을 포함합니다. 정확한 횟수와 기준은 견적서에 명시합니다." },
  { q: "프로젝트 기간은 얼마나 걸리나요?", a: "작은 프로젝트는 약 4주, 브랜드와 웹사이트를 함께 진행하는 경우 8~12주 이상이 필요할 수 있습니다. 정확한 일정은 범위와 검토 일정에 따라 정합니다." },
  { q: "해외 클라이언트와도 협업하나요?", a: "가능합니다. 이메일과 화상 회의, 문서 기반 협업을 활용해 시간대가 다른 해외 클라이언트와도 프로젝트를 진행합니다." },
  { q: "결제는 어떻게 진행되나요?", a: "프로젝트 규모에 따라 착수금과 잔금 또는 단계별 결제 방식으로 진행합니다. 금액과 일정은 계약 전에 견적서와 계약서로 안내합니다." },
  { q: "런칭 후에도 지원을 받을 수 있나요?", a: "가능합니다. 출시 후 일정 기간 기본 오류 수정과 안정화 지원을 제공하며, 지속적인 운영이 필요한 경우 별도 유지보수 범위를 협의합니다." }
];

const projectCategories = [
  { label: "전체", value: "All" },
  { label: "브랜딩", value: "Branding" },
  { label: "웹", value: "Web" },
  { label: "프로덕트", value: "Product" },
];

/* Marquee */
const marqueeImages = [
  "/templates/OHMT007-portfolio/portfolio-1.png",
  "/templates/OHMT007-portfolio/portfolio-2.png",
  "/templates/OHMT007-portfolio/portfolio-3.png",
  "/templates/OHMT007-portfolio/portfolio-4.png",
  "/templates/OHMT007-portfolio/portfolio-5.png",
  "/templates/OHMT007-portfolio/portfolio-6.png",
  "/templates/OHMT007-portfolio/portfolio-hero.png",
];

/* arch width / top-radius pattern - repeats for variety */
const archPattern = [150, 200, 165, 220, 155, 185, 170];

function Marquee() {
  const items = [...marqueeImages, ...marqueeImages];
  return (
    <div className="overflow-hidden w-full pb-4 md:pb-8">
      <style>{`
        @keyframes marquee-ltr { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track {
          animation: marquee-ltr 32s linear infinite;
          display: flex;
          align-items: center;
          gap: 16px;
          width: max-content;
        }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>
      <div className="marquee-track py-6 md:py-12">
        {items.map((src, i) => {
          // Staggered index variation for width & height variety (taller heights for desktop, smaller for mobile)
          const phase = i % 4;
          const widths = [130, 200, 160, 180]; // Mobile widths
          const heights = [240, 310, 270, 300]; // Mobile heights
          const dWidths = [200, 310, 240, 280]; // Desktop widths
          const dHeights = [420, 520, 450, 500]; // Desktop heights
          
          const angle = (i / items.length) * Math.PI * 4;
          // Responsive wave offset: 16px on mobile, 36px on desktop
          
          return (
            <div key={i}
              className="shrink-0 overflow-hidden hover:scale-[1.03] transition-transform duration-300"
              style={{
                willChange: "transform",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              {/* Desktop card container */}
              <div className="hidden md:block" style={{ width: `${dWidths[phase]}px`, height: `${dHeights[phase]}px`, transform: `translateY(${(Math.sin(angle) * 36).toFixed(4)}px)` }}>
                <img loading="lazy" src={src} alt="" className="w-full h-full object-cover object-center" />
              </div>
              {/* Mobile card container */}
              <div className="block md:hidden" style={{ width: `${widths[phase]}px`, height: `${heights[phase]}px`, transform: `translateY(${(Math.sin(angle) * 16).toFixed(4)}px)` }}>
                <img loading="lazy" src={src} alt="" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* Service Carousel */
const serviceColors = ['#e5daf6', '#cfffb2', '#ffc9c9', '#fedca6'];

function ServiceCarousel() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {services.map((s, i) => (
        <article
          key={s.num}
          className="flex min-w-0 flex-col justify-between p-6 md:p-7"
          style={{ minHeight: '306px', backgroundColor: serviceColors[i % serviceColors.length] }}
        >
              <div className="text-xs text-[var(--color-text)]/50">( {s.num} )</div>
              <div className="flex justify-center items-center flex-1">
                {s.num === "001" && (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text)]/70"><path d="M12 3v18M3 12h18"/></svg>
                )}
                {s.num === "002" && (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text)]/70"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/></svg>
                )}
                {s.num === "003" && (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text)]/70"><path d="m3 16 4-4 4 4 6-6 5 5"/></svg>
                )}
                {s.num === "004" && (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text)]/70"><path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.5 13.5l7 4.5m-7-7 7-4.5"/></svg>
                )}
              </div>
              <div>
                <h3 className="text-[1.2rem] font-bold text-[var(--color-text)] leading-tight mb-2.5 text-pretty">{s.name}</h3>
                <p className="text-[0.95rem] text-[var(--color-text)]/70 leading-[1.6] text-pretty">{s.desc}</p>
              </div>
        </article>
      ))}
    </div>
  );
}

/* FAQ Item */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--color-border)]">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-6 text-left group hover:bg-white/40 transition-colors duration-300 px-0">
        <span className="text-[0.95rem] text-[var(--color-text)] group-hover:text-[var(--color-text-muted)] transition-colors pr-8">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-[var(--color-text-muted)] shrink-0">
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[0.88rem] text-[var(--color-text-muted)] leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Testimonial Slider */
function TestimonialSlider() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 overflow-hidden min-h-[420px]"
        >
          <div className="bg-[var(--color-text-muted)] overflow-hidden">
            <img loading="lazy" src={t.img} alt={t.name} className="w-full h-full object-cover" style={{ minHeight: 380 }} />
          </div>
          <div className="bg-[var(--color-bg-secondary)] p-10 md:p-14 flex flex-col justify-center">
            <p className="mb-10 whitespace-pre-line text-[1.15rem] font-medium leading-relaxed text-[var(--color-text)] text-pretty">{t.text}</p>
            <div>
              <p className="text-[0.88rem] font-medium text-[var(--color-text)]">{t.name}</p>
              <p className="text-[0.82rem] text-[var(--color-text-muted)]">{t.role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? 'w-6 bg-[var(--color-primary)]' : 'w-1.5 bg-[var(--color-bg-secondary)]'}`} />
        ))}
      </div>
    </div>
  );
}

/* Custom Cursor */
function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [label, setLabel] = useState('');

  const sx = useSpring(x, { stiffness: 200, damping: 28, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 200, damping: 28, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onEnter = (e: MouseEvent) => {
      const t = e.target;
      if (t && 'closest' in t && typeof t.closest === 'function') {
        const el = t.closest('[data-cursor]') as HTMLElement | null;
        if (el) setLabel(el.dataset.cursor ?? '');
      }
    };
    const onLeave = () => setLabel('');
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseenter', onEnter, true);
    document.addEventListener('mouseleave', onLeave, true);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseenter', onEnter, true);
      document.removeEventListener('mouseleave', onLeave, true);
    };
  }, [x, y]);

  const size = label ? 80 : 12;
  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center rounded-full mix-blend-difference bg-white"
      style={{
        x: sx,
        y: sy,
        width: size,
        height: size,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{ width: size, height: size }}
      transition={{ duration: 0.2 }}
    >
      {label && (
        <span className="text-white text-xs font-bold uppercase tracking-widest select-none">
          {label}
        </span>
      )}
    </motion.div>
  );
}

/* Main Page */
function PortfolioHomeContent() {

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = projects.filter(p => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Branding") return p.category.includes("Branding") || p.category.includes("Brand");
    if (activeCategory === "Web") return p.category.includes("Web");
    if (activeCategory === "Product") return p.category.includes("Product") || p.category.includes("SaaS") || p.category.includes("Type") || p.category.includes("Digital");
    return true;
  });

  return (
    <TemplateWrapper theme={theme}>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] bg-[var(--color-primary)] flex flex-col items-center justify-center text-white cursor-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">HALF LIGHT<span className="text-[var(--color-accent)]">.</span>
              </h2>
              <p className="text-xs tracking-[0.3em] uppercase text-white/40">크리에이티브 스튜디오 / 서울</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-white text-[var(--color-text)] font-[family-name:var(--font-inter)] selection:bg-[var(--color-primary)] selection:text-white cursor-none">
        <CustomCursor />
        <Header />

        {/* HERO */}
        <section ref={heroRef} className="relative overflow-hidden" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          {/* Side labels */}
          <div className="absolute left-5 bottom-[45vh] hidden md:block">
            <p className="text-xs text-[var(--color-text-muted)] tracking-widest uppercase"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              ( 디자인 저널 )
            </p>
          </div>
          <div className="absolute right-5 bottom-[45vh] hidden md:block">
            <p className="text-xs text-[var(--color-text-muted)] tracking-widest uppercase"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              BE / DR / X
            </p>
          </div>

          {/* Title with scroll parallax */}
          <motion.div
            style={{ y: heroY }}
            className="flex-1 flex flex-col items-center justify-center text-center px-5 pt-12 md:pt-24 pb-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[length:var(--text-h1)] font-black tracking-tighter leading-[var(--leading-heading)] text-[var(--color-text)] mb-6"
            >
              브랜드의 생각을<br />
              <span className="text-[var(--color-text)]">디자인으로</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-[1rem] text-[var(--color-text-muted)] max-w-[480px]"
            >
              브랜드가 가진 생각과 경험을 정리해 사람들이 쉽게 이해하고<br />
              오래도록 기억할 수 있는 시각적 언어로 만듭니다.
            </motion.p>
          </motion.div>

          {/* Marquee - anchored to bottom of viewport */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Marquee />
          </motion.div>
        </section>

        {/* TAGLINE + CLIENTS */}
        <section className="py-12 md:py-24 px-5 text-center border-b border-[var(--color-border)]">
          <div className="max-w-[860px] mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[length:var(--text-h3)] font-bold text-[var(--color-text)] leading-snug mb-12"
            >
              HALF LIGHT 스튜디오는 브랜드의 방향을 정리하고<br />
              브랜드의 아이덴티티부터 웹사이트와 캠페인까지<br />
              원스톱으로 제작하는 크리에이티브 스튜디오 입니다.
            </motion.p>
            {/* Client logos */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
              {['Winkk', 'Coral', 'Clonify', 'Blob', 'Maiz'].map(c => (
                <span key={c} className="text-[1rem] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-muted)] transition-colors cursor-default">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* LATEST PROJECTS */}
        <section className="py-10 md:py-20 px-5 md:px-10 border-b border-[var(--color-border)] overflow-hidden">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[var(--leading-heading)]">
                최근 작업<br />프로젝트
              </h2>
              <span className="text-[0.82rem] text-[var(--color-text-muted)] hidden md:block">( _©26 )</span>
            </div>

            {/* Category Filter - Horizontal Scrollable on Mobile */}
            <div className="flex gap-2.5 mb-12 pb-2 scrollbar-none shrink-0 w-full whitespace-nowrap flex-wrap justify-center md:justify-start">
              {projectCategories.map(category => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-6 py-2 text-xs font-black uppercase tracking-wider transition-all duration-300 inline-block whitespace-nowrap ${
                    activeCategory === category.value
                      ? "bg-[var(--color-accent)] border border-[var(--color-accent)] text-white"
                      : "border border-black/10 text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Dynamic Grid */}
            <div className="grid md:grid-cols-2 gap-6 min-h-[400px]">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((p, i) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Link href={`/ko/templates/OHMT007-portfolio/project/${p.id}`} className="group block overflow-hidden bg-[var(--color-bg-secondary)] relative border border-black/5 hover:border-black/15 transition-all">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img loading="lazy" src={p.thumbnail} alt={p.title}
                          className="w-full h-full object-cover grayscale brightness-90 contrast-105 group-hover:grayscale-0 group-hover:scale-105 duration-1000 transition-all ease-out" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white">
                        <div>
                          <p className="text-2xl font-black tracking-tighter uppercase">{p.title}</p>
                          <p className="text-xs font-black uppercase tracking-widest text-white/70">{p.category}</p>
                        </div>
                        <span className="text-xs text-white/60 border border-white/20 rounded-full px-3 py-1 uppercase">{p.date}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-10 md:py-20 px-5 md:px-10 border-b border-[var(--color-border)]">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[var(--leading-heading)]">서비스</h2>
                <p className="mt-4 max-w-2xl text-[0.95rem] leading-[1.6] text-[var(--color-text-muted)] text-pretty">
                  브랜드를 만들고 알리는 데 필요한 일을 하나의 흐름으로 연결합니다.
                </p>
              </div>
              <Link href="/ko/templates/OHMT007-portfolio/contact" className="inline-flex min-h-11 w-fit shrink-0 items-center gap-2 border-b border-[var(--color-text)] text-[0.88rem] font-medium text-[var(--color-text)] transition-opacity hover:opacity-60">
                프로젝트 문의 <span className="text-base leading-none" aria-hidden="true">→</span>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <ServiceCarousel />
            </motion.div>
          </div>
        </section>

        {/* STATS + STATEMENT */}
        <section className="py-10 md:py-20 px-5 md:px-10 border-b border-[var(--color-border)]">
          <div className="max-w-[1440px] mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[length:var(--text-h2)] font-bold text-[var(--color-text)] leading-snug mb-16 max-w-3xl"
            >
              고객의 브랜드가 시장에서<br />
              더 선명하게 보이게 만듭니다.
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-[2.8rem] font-black tracking-tighter text-[var(--color-text)] leading-none mb-1">{s.num}</p>
                  <p className="text-[0.78rem] text-[var(--color-text-muted)] uppercase tracking-widest">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-10 md:py-20 px-5 md:px-10 border-b border-[var(--color-border)]">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-black uppercase tracking-tight text-[var(--color-accent)] mb-4">함께한 고객의 이야기</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[var(--leading-heading)] text-[var(--color-text)]">
                새로운 방향이 필요한<br />브랜드와 함께합니다.
              </h2>
            </div>
            <TestimonialSlider />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 md:py-20 px-5 md:px-10 border-b border-[var(--color-border)]">
          <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[var(--leading-heading)]">자주 묻는 질문</h2>
            </div>
            <div>
              {faqs.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section className="py-10 md:py-20 px-5 md:px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[var(--leading-heading)]">
                디자인과 브랜드<br />노트
              </h2>
              <Link href="/ko/templates/OHMT007-portfolio/journal" className="text-[0.82rem] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors flex items-center gap-2">
                글 보기 <span className="text-lg leading-none">+</span>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href="/ko/templates/OHMT007-portfolio/journal" className="group block">
                    <div className="overflow-hidden aspect-[4/3] bg-[var(--color-bg-secondary)] mb-4">
                      <img loading="lazy" src={post.img} alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <p className="text-[0.75rem] text-[var(--color-text-muted)] mb-2">{post.date}</p>
                    <h3 className="text-[0.95rem] font-medium text-[var(--color-text)] leading-[var(--leading-heading)] group-hover:text-[var(--color-text-muted)] transition-colors">{post.title}</h3>
                  </Link>
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


export default function PortfolioHome(props: any) {
  return (
    <React.Suspense fallback={null}>
      <PortfolioHomeContent {...props} />
    </React.Suspense>
  );
}
