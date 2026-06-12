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
import { projects, services, stats, testimonials, faqs, blogPosts } from "@/lib/portfolio-data";
/* === Marquee === */
const marqueeImages = [
  "/templates/portfolio/portfolio-1.png",
  "/templates/portfolio/portfolio-2.png",
  "/templates/portfolio/portfolio-3.png",
  "/templates/portfolio/portfolio-4.png",
  "/templates/portfolio/portfolio-5.png",
  "/templates/portfolio/portfolio-6.png",
  "/templates/portfolio/portfolio-hero.png",
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

/* === Service Carousel === */
const serviceColors = ['#e5daf6', '#cfffb2', '#ffc9c9', '#fedca6'];

function ServiceCarousel() {
  const [active, setActive] = useState(0);
  return (
    <div className="relative">
      <div className="overflow-x-auto pb-4 scrollbar-none">
        <div
          className="flex gap-4 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(calc(-${active} * (min(340px, 90vw) + 16px)))` }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              className="shrink-0 p-8 flex flex-col justify-between"
              style={{ width: 'min(300px, 78vw)', height: '360px', backgroundColor: serviceColors[i % serviceColors.length] }}
            >
              <div className="text-[13px] text-[#1e1e1e]/50">( {s.num} )</div>
              <div className="flex justify-center items-center flex-1">
                {s.name.toLowerCase().includes("brand") && (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1e1e1e]/70"><path d="M12 3v18M3 12h18"/></svg>
                )}
                {s.name.toLowerCase().includes("dev") && (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1e1e1e]/70"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/></svg>
                )}
                {s.name.toLowerCase().includes("seo") && (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1e1e1e]/70"><path d="m3 16 4-4 4 4 6-6 5 5"/></svg>
                )}
                {s.name.toLowerCase().includes("social") && (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1e1e1e]/70"><path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.5 13.5l7 4.5m-7-7 7-4.5"/></svg>
                )}
              </div>
              <div>
                <p className="text-[13px] font-medium uppercase tracking-widest text-[#1e1e1e] mb-2">{s.name}</p>
                <p className="text-[0.85rem] text-[#1e1e1e]/70 leading-[1.4]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Arrow - Hidden on Mobile to prevent card overlap, visible on Desktop */}
      <button
        onClick={() => setActive((active + 1) % services.length)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-0 w-12 h-12 rounded-none bg-white border border-[#d0d8e4] hidden md:flex items-center justify-center hover:opacity-80 hover:border-[#1e1e1e] transition-all z-10 active:scale-95"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  );
}

/* === FAQ Item === */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#d0d8e4]">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-6 text-left group hover:bg-white/40 transition-colors duration-300 px-0">
        <span className="text-[0.95rem] text-[#1e1e1e] group-hover:text-[#5a6271] transition-colors pr-8">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-[#8a919b] shrink-0">
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
            <p className="pb-5 text-[0.88rem] text-[#5a6271] leading-[1.4]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* === Testimonial Slider === */
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
          <div className="bg-[#8a919b] overflow-hidden">
            <img loading="lazy" src={t.img} alt={t.name} className="w-full h-full object-cover" style={{ minHeight: 380 }} />
          </div>
          <div className="bg-[#eef0f6] p-10 md:p-14 flex flex-col justify-center">
            <p className="text-[1.15rem] font-medium text-[#1e1e1e] leading-[1.4] mb-10">{t.text}</p>
            <div>
              <p className="text-[0.88rem] font-medium text-[#1e1e1e]">{t.name}</p>
              <p className="text-[0.82rem] text-[#8a919b]">{t.role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? 'w-6 bg-[#1e1e1e]' : 'w-1.5 bg-[#d0d8e4]'}`} />
        ))}
      </div>
    </div>
  );
}

/* === Custom Cursor === */
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
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center rounded-full mix-blend-difference bg-[#1e1e1e]"
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
        <span className="text-white text-[13px] font-bold uppercase tracking-widest select-none">
          {label}
        </span>
      )}
    </motion.div>
  );
}

/* === Main Page === */
function PortfolioHomeContent() {
  const searchParams = useSearchParams();
  const t = {
  "hero": {
    "badge": `CREATIVE JOURNAL`,
    "title1": `Accumulated Thoughts,`,
    "title2": `Resilient Records.`,
    "desc": `The most intimate narrative leaves the deepest echo. A creator's life captured in deliberate daily fragments.`,
    "cta": `READ JOURNAL`
  }
};
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
            className="fixed inset-0 z-[9999] bg-[#1e1e1e] flex flex-col items-center justify-center text-white cursor-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
                Vinuspread<span className="text-[var(--color-accent)]">.</span>
              </h2>
              <p className="text-[13px] tracking-[0.3em] uppercase text-white/40">Creative Studio / Seoul</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-white text-[#1e1e1e] font-[family-name:var(--font-inter)] selection:bg-[#1e1e1e] selection:text-white cursor-none">
        <CustomCursor />
        <Header />

        {/*  HERO  */}
        <section ref={heroRef} className="relative overflow-hidden" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          {/* Side labels */}
          <div className="absolute left-5 bottom-[45vh] hidden md:block">
            <p className="text-[13px] text-[#8a919b] tracking-widest uppercase"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              ( {t.hero.badge} )
            </p>
          </div>
          <div className="absolute right-5 bottom-[45vh] hidden md:block">
            <p className="text-[13px] text-[#8a919b] tracking-widest uppercase"
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
              className="text-[clamp(3.5rem,10vw,8rem)] tracking-tighter leading-[1.0] text-[#1e1e1e] mb-6"
            >
              <span className="font-bold">{t.hero.title1}</span><br />
              <span className="font-black">{t.hero.title2}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-[1rem] text-[#5a6271] max-w-[480px]"
            >
              {t.hero.desc}
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

        {/*  TAGLINE + CLIENTS  */}
        <section className="py-12 md:py-24 px-5 text-center border-b border-[#eef0f6]">
          <div className="max-w-[1440px] mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold text-[#1e1e1e] leading-snug mb-12"
            >
              We're Vinuspread® - a creative studio cultivating bold brands, beautiful websites,
              and ideas that refuse to be ordinary.
            </motion.p>
            {/* Client logos */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
              {['Winkk', 'Coral', 'Clonify', 'Blob', 'Maiz'].map(c => (
                <span key={c} className="text-[1rem] font-medium text-[#c8c8c8] hover:text-[#8a919b] transition-colors cursor-default">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/*  LATEST PROJECTS  */}
        <section className="py-10 md:py-20 px-5 md:px-10 border-b border-[#eef0f6]">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">
                Latest<br />Projects.
              </h2>
              <span className="text-[0.82rem] text-[#8a919b] hidden md:block">( _©26 )</span>
            </div>

            {/* Category Filter - Horizontal Scrollable on Mobile */}
            <div className="flex gap-2.5 mb-12 pb-2 scrollbar-none shrink-0 w-full whitespace-nowrap flex-wrap justify-center md:justify-start">
              {["All", "Branding", "Web", "Product"].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 text-[13px] font-black uppercase tracking-wider transition-all duration-300 inline-block whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-[#696969] border border-[#696969] text-white"
                      : "border border-black/10 text-[#5a6271] hover:border-[#696969] hover:text-[#696969]"
                  }`}
                >
                  {cat}
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
                    <Link href={`/en/templates/portfolio/project/${p.id}`} className="group block overflow-hidden bg-[#f3f3f3] relative border border-black/5 hover:border-black/15 transition-all">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img loading="lazy" src={p.thumbnail} alt={p.title}
                          className="w-full h-full object-cover grayscale brightness-90 contrast-105 group-hover:grayscale-0 group-hover:scale-105 duration-1000 transition-all ease-out" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white">
                        <div>
                          <p className="text-2xl font-black tracking-tighter uppercase">{p.title}</p>
                          <p className="text-[13px] font-black uppercase tracking-widest text-white/70">{p.category}</p>
                        </div>
                        <span className="text-[13px] text-white/60 border border-white/20 rounded-full px-3 py-1 uppercase">{p.date}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/*  SERVICES  */}
        <section className="py-10 md:py-20 px-5 md:px-10 border-b border-[#eef0f6]">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-end justify-between mb-10">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">Services.</h2>
              <Link href="/en/templates/portfolio/contact" className="text-[0.82rem] font-medium text-[#5a6271] hover:text-[#1e1e1e] transition-colors flex items-center gap-2">
                Get in touch <span className="text-lg leading-none">+</span>
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

        {/*  STATS + STATEMENT  */}
        <section className="py-10 md:py-20 px-5 md:px-10 border-b border-[#eef0f6]">
          <div className="max-w-[1440px] mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold text-[#1e1e1e] leading-snug mb-16 max-w-3xl"
            >
              Vinuspread® is a creative studio shaping bold brands and daring ideas.
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
                  <p className="text-[2.8rem] font-black tracking-tighter text-[#1e1e1e] leading-none mb-1">{s.num}</p>
                  <p className="text-[0.78rem] text-[#8a919b] uppercase tracking-widest">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/*  TESTIMONIALS  */}
        <section className="py-10 md:py-20 px-5 md:px-10 border-b border-[#eef0f6]">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-12">
              <p className="text-[13px] font-black uppercase tracking-tight text-[var(--color-accent)] mb-4">TESTIMONIALS</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none text-[#1e1e1e]">
                Trusted by brands who<br />aren't afraid to stand out.
              </h2>
            </div>
            <TestimonialSlider />
          </div>
        </section>

        {/*  FAQ  */}
        <section className="py-10 md:py-20 px-5 md:px-10 border-b border-[#eef0f6]">
          <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">FAQ.</h2>
            </div>
            <div>
              {faqs.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/*  BLOG  */}
        <section className="py-10 md:py-20 px-5 md:px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">
                Creative<br />dispatch
              </h2>
              <Link href="/en/templates/portfolio/journal" className="text-[0.82rem] font-medium text-[#5a6271] hover:text-[#1e1e1e] transition-colors flex items-center gap-2">
                Let's Talk <span className="text-lg leading-none">+</span>
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
                  <Link href="/en/templates/portfolio/journal" className="group block">
                    <div className="overflow-hidden aspect-[4/3] bg-[#f3f3f3] mb-4">
                      <img loading="lazy" src={post.img} alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <p className="text-[0.75rem] text-[#8a919b] mb-2">{post.date}</p>
                    <h3 className="text-[0.95rem] font-medium text-[#1e1e1e] leading-snug group-hover:text-[#5a6271] transition-colors">{post.title}</h3>
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


export default function PortfolioHome() {
  return (
    <React.Suspense fallback={null}>
      <PortfolioHomeContent />
    </React.Suspense>
  );
}
