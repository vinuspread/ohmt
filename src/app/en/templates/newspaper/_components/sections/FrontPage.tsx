// src/app/templates/OHMT013-newspaper/-components/sections/FrontPage.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export const FrontPage = () => {
  const searchParams = useSearchParams();
  const t = {
  "nav": {
    "breaking": `Breaking`,
    "ticker": `GLOBAL MARKETS REACH ALL-TIME HIGH AS TECH SECTOR SURGES · NEW SUSTAINABILITY ACCORD SIGNED BY 50 NATIONS · ARCTIC ICE REACHES HISTORIC LOWS`,
    "date": `Thursday, May 7, 2026 · Today's Paper`,
    "price": `Price: $3.50 · Digital Edition`,
    "world": `World`,
    "politics": `Politics`,
    "economy": `Economy`,
    "tech": `Tech`,
    "culture": `Culture`,
    "sports": `Sports`,
    "signIn": `Sign In`,
    "subscribe": `Subscribe`
  },
  "hero": {
    "badge": `DAILY ARCHIVE`,
    "badgeText": `Global Crisis`,
    "title1": `The Unwavering Trace`,
    "title2": `of Truth.`,
    "desc": `Rigorous structural reporting and uncompromised voices. Carving contemporary human archives into permanent ink.`,
    "cta": `READ TODAY'S EDITION`
  }
};
return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8">
      {/* Hero Story */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-[1fr_300px] gap-6 md:gap-0 border-b-2 border-black py-6 md:py-8"
      >
        <div className="md:pr-8 md:border-r border-[var(--color-border)]">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--color-primary)] block mb-2">{t.hero.badgeText}</span>
          <img
            src="/templates/OHMT013-newspaper/news-1.jpg"
            className="w-full h-[420px] object-cover mb-5"
            alt="Hero story"
          />
          <h1 className="font-[family-name:var(--theme-font-heading)] text-[clamp(1.5rem,2.4vw,2.2rem)] font-bold leading-[1.0] mb-3 group">
            <Link href="#" className="group-hover:text-[var(--color-primary)] transition-colors text-black">
              {t.hero.title1} {t.hero.title2}
            </Link>
          </h1>
          <p className="text-[1.05rem] text-[#555] font-sans leading-[1.4] mb-4">
            {t.hero.desc}
          </p>
          <div className="font-sans text-[0.78rem] text-[#555] font-medium uppercase">
            By <strong className="text-black">David Sterling</strong> · Economics Correspondent
          </div>
        </div>
        
        <div className="md:pl-8 flex flex-col gap-8">
          <div className="border-b border-[var(--color-border)] pb-6">
            <h3 className="font-[family-name:var(--theme-font-heading)] text-[1.1rem] font-bold leading-tight mb-2 text-black">
              <Link href="#" className="hover:text-[var(--color-primary)]">New evidence suggests shift in arctic current patterns.</Link>
            </h3>
            <p className="text-[0.85rem] text-[#555] leading-[1.4]">Researchers at the Polar Institute find "startling" data on ocean temperatures.</p>
          </div>
          <div className="border-b border-[var(--color-border)] pb-6">
            <h3 className="font-[family-name:var(--theme-font-heading)] text-[1.1rem] font-bold leading-tight mb-2 text-black">
              <Link href="#" className="hover:text-[var(--color-primary)]">Elections in the East: A region at a political crossroads.</Link>
            </h3>
            <p className="text-[0.85rem] text-[#555] leading-[1.4]">Voter turnout reaches record highs amidst calls for radical reform.</p>
          </div>
          <div>
            <h3 className="font-[family-name:var(--theme-font-heading)] text-[1.1rem] font-bold leading-tight mb-2 text-black">
              <Link href="#" className="hover:text-[var(--color-primary)]">Tech giants face new antitrust scrutiny in Brussels.</Link>
            </h3>
            <p className="text-[0.85rem] text-[#555] leading-[1.4]">European commission opens investigation into AI data practices.</p>
          </div>
        </div>
      </motion.section>
      
      {/* Mid Grid */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="grid md:grid-cols-3 gap-6 md:gap-0 border-b-2 border-black py-6 md:py-8"
      >
        {[
          {
            label: "Culture",
            title: "The revival of classic cinema in a streaming age.",
            img: "/templates/OHMT013-newspaper/news-2.jpg",
            desc: "Independent theaters see resurgence as audiences crave physical experiences."
          },
          {
            label: "Science",
            title: "Breakthrough in fusion energy research reported.",
            img: "/templates/OHMT013-newspaper/news-3.jpg",
            desc: "California lab achieves net energy gain for the second time this year."
          },
          {
            label: "Society",
            title: "The urban migration: Why cities are still growing.",
            img: "/templates/OHMT013-newspaper/news-4.jpg",
            desc: "Despite remote work trends, metropolitan hubs attract younger demographics."
          }
        ].map((item, i) => (
          <div key={i} className="px-6 border-r border-[var(--color-border)] first:pl-0 last:pr-0 last:border-r-0">
            <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--color-primary)] block mb-2">{item.label}</span>
            <img loading="lazy" src={item.img} className="w-full h-48 object-cover mb-4" alt={item.title} />
            <h3 className="font-[family-name:var(--theme-font-heading)] text-[1.2rem] font-bold leading-snug mb-2 text-black">
              <Link href="#" className="hover:text-[var(--color-primary)]">{item.title}</Link>
            </h3>
            <p className="text-[0.88rem] text-[#555] leading-[1.4]">{item.desc}</p>
          </div>
        ))}
      </motion.section>
    </div>
  );
};
