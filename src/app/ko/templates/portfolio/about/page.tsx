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
  { name: "Marco Vinus", role: "Founder & Creative Director", img: "/templates/portfolio/portfolio-1.jpg" },
  { name: "Yuna Park", role: "Lead Designer", img: "/templates/portfolio/portfolio-2.jpg" },
  { name: "Tobias Krenn", role: "Front-end Engineer", img: "/templates/portfolio/portfolio-3.png" },
  { name: "Sofia Reyes", role: "Brand Strategist", img: "/templates/portfolio/portfolio-4.png" },
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
      <div className="bg-white text-[#1e1e1e] font-[family-name:var(--font-inter)] selection:bg-[#1e1e1e] selection:text-black">
        <Header />

        {/* Hero */}
        <section className="pt-40 pb-14 md:pb-28 border-b border-[#eef0f6]">
          <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-20 items-end">
            <div>
              <span className="text-[13px] font-bold tracking-[0.4em] uppercase text-[#8a919b] block mb-6">스튜디오 소개</span>
              <h1 className="text-[clamp(3rem,8vw,7rem)] font-medium uppercase tracking-tighter leading-[1.5]">
                We make<br />the bold<br /><span className="text-[#1e1e1e]">visible.</span>
              </h1>
            </div>
            <div className="space-y-6">
              <p className="text-[1rem] text-[#5a6271] leading-relaxed">
                Founded in Seoul in 2019, Vinuspread is a creative studio that partners with brands and founders who have something real to say - and want the world to hear it.
              </p>
              <p className="text-[1rem] text-[#5a6271] leading-relaxed">
                좋은 디자인은 결코 장식이 아닙니다. 그것은 사람들이 제품을 사용하기 전에 그 제품에 대해 느끼는 방식을 바꾸는 전략적 행위입니다.
              </p>
              <Link href="/ko/templates/portfolio/contact" className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-[#1e1e1e] border-b border-[#D4FF00]/30 pb-0.5 hover:border-[#D4FF00] transition-colors">
                함께하기 <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-[#eef0f6]">
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
                  <p className="text-[3rem] font-black tracking-tighter leading-none text-[#1e1e1e] mb-2">{s.num}</p>
                  <p className="text-[0.72rem] uppercase tracking-widest text-[#8a919b]/60 font-medium">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-14 md:py-28 border-b border-[#eef0f6]">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="mb-16">
              <span className="text-[13px] font-bold tracking-[0.3em] uppercase text-[#8a919b] block mb-4">작업 방식</span>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-medium uppercase tracking-tighter leading-none">프로세스</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-0 divide-x divide-white/10 border-x border-[#eef0f6]">
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 group"
                >
                  <span className="text-[2.5rem] font-black text-[#1e1e1e]/15 group-hover:text-[#1e1e1e]/40 transition-colors block mb-6 leading-none">{step.num}</span>
                  <h3 className="text-[1rem] font-medium uppercase tracking-tight mb-4 group-hover:text-[#1e1e1e] transition-colors">{step.title}</h3>
                  <p className="text-[0.82rem] text-[#8a919b] leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-14 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="mb-16">
              <span className="text-[13px] font-bold tracking-[0.3em] uppercase text-[#8a919b] block mb-4">더 피플</span>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-medium uppercase tracking-tighter leading-none">팀 소개</h2>
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
                  <div className="aspect-square overflow-hidden bg-[#f3f3f3] mb-4">
                    <img loading="lazy" src={m.img} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                  </div>
                  <p className="text-[0.9rem] font-medium uppercase tracking-tight">{m.name}</p>
                  <p className="text-[0.75rem] text-[#8a919b]/60 mt-1">{m.role}</p>
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
