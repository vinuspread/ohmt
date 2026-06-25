"use client";
import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { stats, designerInfo } from "@/lib/portfolio-data";

const team = [
  { name: "Marco Vinus", role: "Founder & Creative Director", img: "/templates/OHMT007-portfolio/portfolio-1.jpg" },
  { name: "Yuna Park", role: "Lead Designer", img: "/templates/OHMT007-portfolio/portfolio-2.jpg" },
  { name: "Tobias Krenn", role: "Front-end Engineer", img: "/templates/OHMT007-portfolio/portfolio-3.png" },
  { name: "Sofia Reyes", role: "Brand Strategist", img: "/templates/OHMT007-portfolio/portfolio-4.png" },
];

const process = [
  { num: "01", title: "Discover", desc: "We start with deep listening - understanding your goals, audience, and the gap you're trying to close." },
  { num: "02", title: "Define", desc: "We map the strategic terrain: competitive landscape, positioning, and the story that will set you apart." },
  { num: "03", title: "Design", desc: "Concepts are built, refined, and tested against real context - not just on a mood board." },
  { num: "04", title: "Deliver", desc: "We hand off production-ready assets with clear guidelines and stay close through launch." },
];

function AboutPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <div className="bg-white text-[var(--color-text)] font-[family-name:var(--font-inter)] selection:bg-[var(--color-primary)] selection:text-black">
        <Header />

        {/* Hero */}
        <section className="pt-40 pb-14 md:pb-28 border-b border-[var(--color-border)]">
          <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-20 items-end">
            <div>
              <span className="text-[13px] font-bold tracking-[0.4em] uppercase text-[var(--color-text-muted)] block mb-6">?�튜?�오 ?�개</span>
              <h1 className="text-[clamp(3rem,8vw,7rem)] font-medium uppercase tracking-tighter leading-[1.5]">
                We make<br />the bold<br /><span className="text-[var(--color-text)]">visible.</span>
              </h1>
            </div>
            <div className="space-y-6">
              <p className="text-[1rem] text-[var(--color-text-muted)] leading-relaxed">
                Founded in Seoul in 2019, Vinuspread is a creative studio that partners with brands and founders who have something real to say - and want the world to hear it.
              </p>
              <p className="text-[1rem] text-[var(--color-text-muted)] leading-relaxed">
                좋�? ?�자?��? 결코 ?�식???�닙?�다. 그것?� ?�람?�이 ?�품???�용?�기 ?�에 �??�품???�???�끼??방식??바꾸???�략???�위?�니??
              </p>
              <Link href="/ko/templates/OHMT007-portfolio/contact" className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-[var(--color-text)] border-b border-[var(--color-accent)]/30 pb-0.5 hover:border-[var(--color-accent)] transition-colors">
                ?�께?�기 <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-[var(--color-border)]">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="py-14 px-8 text-center"
                >
                  <p className="text-[3rem] font-black tracking-tighter leading-none text-[var(--color-text)] mb-2">{s.num}</p>
                  <p className="text-[0.72rem] uppercase tracking-widest text-[var(--color-text-muted)]/60 font-medium">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-14 md:py-28 border-b border-[var(--color-border)]">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="mb-16">
              <span className="text-[13px] font-bold tracking-[0.3em] uppercase text-[var(--color-text-muted)] block mb-4">?�업 방식</span>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-medium uppercase tracking-tighter leading-none">?�로?�스</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-0 divide-x divide-white/10 border-x border-[var(--color-border)]">
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 group"
                >
                  <span className="text-[2.5rem] font-black text-[var(--color-text)]/15 group-hover:text-[var(--color-text)]/40 transition-colors block mb-6 leading-none">{step.num}</span>
                  <h3 className="text-[1rem] font-medium uppercase tracking-tight mb-4 group-hover:text-[var(--color-text)] transition-colors">{step.title}</h3>
                  <p className="text-[0.82rem] text-[var(--color-text-muted)] leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-14 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="mb-16">
              <span className="text-[13px] font-bold tracking-[0.3em] uppercase text-[var(--color-text-muted)] block mb-4">???�플</span>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-medium uppercase tracking-tighter leading-none">?� ?�개</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="aspect-square overflow-hidden bg-[var(--color-bg-secondary)] mb-4">
                    <img loading="lazy" src={m.img} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                  </div>
                  <p className="text-[0.9rem] font-medium uppercase tracking-tight">{m.name}</p>
                  <p className="text-[0.75rem] text-[var(--color-text-muted)]/60 mt-1">{m.role}</p>
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


export default function AboutPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <AboutPageContent {...props} />
    </React.Suspense>
  );
}
