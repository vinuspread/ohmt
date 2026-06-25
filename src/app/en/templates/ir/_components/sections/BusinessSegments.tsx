// src/app/templates/ir/-components/sections/BusinessSegments.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const segments = [
  {
    num: "01",
    icon: "Tech",
    image: "/templates/ir/ir-tech.jpg",
    title: "Technology & Software",
    desc: "Scaleable cloud solutions and AI-driven platforms powering the next generation of digital infrastructure.",
    stat: "Revenue contribution",
    val: "42%"
  },
  {
    num: "02",
    icon: "Energy",
    image: "/templates/ir/ir-energy.jpg",
    title: "Sustainable Energy",
    desc: "Investing in renewable energy assets and grid modernization to drive the global energy transition.",
    stat: "Year-over-year growth",
    val: "+28%"
  },
  {
    num: "03",
    icon: "Build",
    image: "/templates/ir/ir-build.jpg",
    title: "Global Infrastructure",
    desc: "Developing and managing mission-critical physical assets that connect communities and commerce.",
    stat: "Operating margin",
    val: "21%"
  }
];

export const BusinessSegments = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="py-14 md:py-28 bg-[var(--color-light-bg)]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="block text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-5">
              Strategic Portfolio
            </span>
            <h2 className="text-[clamp(1.9rem,3.2vw,2.8rem)] font-bold tracking-tight text-[var(--color-dark-bg)] leading-[1.1] max-w-[560px]">
              Diversified growth across critical sectors.
            </h2>
          </div>
          <p className="text-[0.9rem] text-[#6B6B6B] leading-[1.78] max-w-[440px] font-normal">
            Our portfolio is built on long-term themes of digital transformation, sustainability, and global connectivity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-[1px] bg-[var(--color-border)]">
          {segments.map((s, i) => (
            <div key={i} className="bg-[var(--color-light-bg)] overflow-hidden group/card">
              <div className="h-[180px] overflow-hidden">
                <img loading="lazy" src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="p-10">
                <span className="text-[0.7rem] font-bold tracking-[0.25em] text-[var(--color-border)] block mb-4">{s.num}</span>
                <span className="text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4 block">{s.icon}</span>
                <h3 className="text-[1.25rem] font-bold text-[var(--color-dark-bg)] mb-3 leading-snug">{s.title}</h3>
                <p className="text-[0.93rem] text-[#6B6B6B] leading-[1.72] mb-8">{s.desc}</p>
                <div className="pt-5 border-t border-[var(--color-border)] flex flex-col gap-1">
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#6B6B6B]">{s.stat}</span>
                  <strong className="text-2xl font-bold text-[var(--color-dark-bg)] tracking-tight">{s.val}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
