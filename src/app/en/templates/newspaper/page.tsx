// src/app/templates/newspaper/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Header } from "./_components/layout/Header";
import { Footer } from "./_components/layout/Footer";
import { FrontPage } from "./_components/sections/FrontPage";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";

function NewspaperTemplateContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white text-[var(--color-secondary)] selection:bg-[var(--color-primary)] selection:text-white">
        <Header />
        
        <FrontPage />
        
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12"
        >
          <div className="grid md:grid-cols-[1fr_280px] gap-6 md:gap-12">
            <div>
              <div className="flex justify-between items-end border-b-2 border-black pb-2 mb-6">
                <h2 className="font-[family-name:var(--theme-font-heading)] text-2xl font-bold">Latest Analysis</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map(n => (
                  <div key={n} className="flex gap-4 pb-6 border-b border-[var(--color-border)] last:border-0 md:[&:nth-last-child(-n+2)]:border-0">
                    <img loading="lazy" src={`/templates/newspaper/news-${n}.jpg`} className="w-24 h-20 object-cover" alt="Latest" />
                    <div>
                      <h4 className="font-[family-name:var(--theme-font-heading)] text-[0.95rem] font-bold leading-tight mb-1">
                        <Link href="#" className="hover:text-[var(--color-primary)] transition-colors duration-300">How the new trade agreement affects local manufacturing.</Link>
                      </h4>
                      <div className="font-sans text-[0.72rem] text-[#555] font-medium uppercase">5 mins ago</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <aside>
              <div className="border-b-2 border-black pb-2 mb-6">
                <h2 className="font-[family-name:var(--theme-font-heading)] text-2xl font-bold">Opinion</h2>
              </div>
              <div className="flex flex-col gap-6">
                {[
                  { author: "Sarah Jenkins", title: "Why the current approach to urban planning is failing our youth." },
                  { author: "Marcus Thorne", title: "The moral imperative of open-source artificial intelligence." },
                  { author: "Elena Vance", title: "Classical music isn't dying, it's just moving to YouTube." }
                ].map((item, i) => (
                  <div key={i} className="pb-6 border-b border-[var(--color-border)] last:border-0">
                    <div className="font-sans text-[0.72rem] font-bold uppercase tracking-wider text-[#555] mb-1">{item.author}</div>
                    <h4 className="font-[family-name:var(--theme-font-heading)] font-serif text-base leading-snug">
                      <Link href="#" className="hover:text-[var(--color-primary)] transition-colors duration-300">"{item.title}"</Link>
                    </h4>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </motion.section>
        
        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function NewspaperTemplate() {
  return (
    <React.Suspense fallback={null}>
      <NewspaperTemplateContent />
    </React.Suspense>
  );
}
