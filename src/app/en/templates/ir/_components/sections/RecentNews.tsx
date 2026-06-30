// src/app/templates/OHMT011-ir/-components/sections/RecentNews.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

const newsItems = [
  {
    date: "May 5, 2026",
    tag: "Earnings",
    tagColor: "bg-[#EAF0FB] text-[#2356b3]",
    title: "Vinuspread Global Holdings announces record Q1 2026 financial results."
  },
  {
    date: "April 28, 2026",
    tag: "Dividend",
    tagColor: "bg-[#F5EDD5] text-[#7a5a10]",
    title: "Board of Directors declares quarterly cash dividend of $0.65 per share."
  },
  {
    date: "April 15, 2026",
    tag: "ESG",
    tagColor: "bg-[#EFF5F0] text-[#2a7a3a]",
    title: "2025 Sustainability Report highlights 15% reduction in carbon footprint."
  }
];

export const RecentNews = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="py-12 md:py-24 bg-white"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-tight text-[var(--color-dark-bg)]">
            Recent News & Announcements
          </h2>
          <button className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-dark-bg)] hover:gap-4 transition-all duration-300">
            View All News <span className="text-[1.2em]">→</span>
          </button>
        </div>
        
        <div className="flex flex-col border-t border-[var(--color-border)]">
          {newsItems.map((item, i) => (
            <div key={i} className="grid grid-cols-[110px_1fr_auto] gap-8 py-7 border-b border-[var(--color-border)] group cursor-pointer hover:bg-white/40 hover:pl-2 transition-all duration-300">
              <div className="text-[0.68rem] font-bold uppercase tracking-tight text-[#6B6B6B] leading-[1.4] pt-1">
                {item.date}
              </div>
              <div>
                <span className={clsx("inline-block text-[0.58rem] font-bold uppercase tracking-[0.16em] px-2 py-0.5 rounded-[2px] mb-2", item.tagColor)}>
                  {item.tag}
                </span>
                <h3 className="text-base font-bold text-black leading-snug group-hover:text-[var(--color-dark-bg)] transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="text-[0.85rem] text-[var(--color-border)] font-bold pt-1 group-hover:text-[var(--color-dark-bg)] group-hover:translate-x-1 transition-all">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
