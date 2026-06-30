"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

type Tag = "Press Release" | "Financial" | "ESG" | "Events";

const allNews = [
  { date: "May 15, 2026", tag: "Press Release" as Tag, title: "IRG announces $2.8B strategic expansion into Southeast Asian markets", excerpt: "The investment will establish three new regional headquarters and a logistics hub in Singapore over the next 18 months.", tagColor: "var(--color-dark-bg)", image: "/templates/OHMT011-ir/news-press.png" },
  { date: "April 28, 2026", tag: "Financial" as Tag, title: "Q1 2026 earnings results: Record revenue of $14.6B, up 12% YoY", excerpt: "Strong performance across all business segments driven by robust demand in energy and infrastructure.", tagColor: "var(--color-accent)", image: "/templates/OHMT011-ir/news-financial.png" },
  { date: "April 10, 2026", tag: "ESG" as Tag, title: "Sustainability Report 2025: 34% reduction in Scope 1 & 2 emissions", excerpt: "IRG accelerates its net-zero commitment with a comprehensive roadmap for decarbonization across operations.", tagColor: "#0D7C3E", image: "/templates/OHMT011-ir/news-esg.png" },
  { date: "March 22, 2026", tag: "Press Release" as Tag, title: "IRG Board appoints Catherine N. Adebayo as new independent director", excerpt: "Ms. Adebayo brings extensive experience in corporate governance and risk management from her role as COO of Sterling Bank.", tagColor: "var(--color-dark-bg)", image: "/templates/OHMT011-ir/news-press.png" },
  { date: "March 12, 2026", tag: "Events" as Tag, title: "Save the Date: 2026 Annual Shareholder Meeting - June 18", excerpt: "The meeting will be held in a hybrid format with in-person attendance at our New York headquarters.", tagColor: "#6B6B6B", image: "/templates/OHMT011-ir/news-event.png" },
  { date: "February 28, 2026", tag: "Financial" as Tag, title: "IRG Board declares quarterly dividend of $0.48 per share", excerpt: "The dividend is payable on March 25, 2026 to shareholders of record as of March 10, 2026.", tagColor: "var(--color-accent)", image: "/templates/OHMT011-ir/news-financial.png" },
  { date: "February 14, 2026", tag: "ESG" as Tag, title: "IRG Foundation commits $150M to STEM education initiatives globally", excerpt: "The 10-year commitment will fund scholarships, research programs, and infrastructure at 50+ universities.", tagColor: "#0D7C3E", image: "/templates/OHMT011-ir/news-esg.png" },
  { date: "January 30, 2026", tag: "Press Release" as Tag, title: "IRG closes acquisition of Atlas Energy Solutions for $4.1B", excerpt: "The transaction strengthens IRG's renewable energy portfolio and expands operational capacity in the Americas.", tagColor: "var(--color-dark-bg)", image: "/templates/OHMT011-ir/news-press.png" },
  { date: "January 12, 2026", tag: "Financial" as Tag, title: "Full Year 2025 results: Revenue surpasses $52B milestone", excerpt: "Annual net income of $8.9B represents a 15.2% net margin, the highest in company history.", tagColor: "var(--color-accent)", image: "/templates/OHMT011-ir/news-financial.png" },
  { date: "December 18, 2025", tag: "Events" as Tag, title: "2026 Investor Day - Save the Date: March 12, 2026", excerpt: "Management will provide an in-depth review of IRG's strategic plan, capital allocation, and long-term financial outlook.", tagColor: "#6B6B6B", image: "/templates/OHMT011-ir/news-event.png" },
  { date: "December 5, 2025", tag: "ESG" as Tag, title: "IRG achieves carbon-neutral certification for North American operations", excerpt: "Third-party verification confirms IRG's commitment to environmental stewardship and operational sustainability.", tagColor: "#0D7C3E", image: "/templates/OHMT011-ir/news-esg.png" },
  { date: "November 19, 2025", tag: "Press Release" as Tag, title: "IRG launches $1.5B share repurchase program", excerpt: "The program authorizes the repurchase of up to $1.5B of IRG common stock over the next 24 months.", tagColor: "var(--color-dark-bg)", image: "/templates/OHMT011-ir/news-press.png" },
];

const tags = ["전체", "Press Release", "Financial", "ESG", "Events"];

function IRNewsContent() {
  const [activeTag, setActiveTag] = useState<string>("All");

  const filtered = activeTag === "All" ? allNews : allNews.filter((n) => n.tag === activeTag);

  return (
    <TemplateWrapper theme={theme}>
      <main lang="ko" className="antialiased bg-white text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-white">
        <Header />

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="bg-[var(--color-dark-bg)] min-h-[260px] flex items-center relative overflow-hidden text-white"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/templates/OHMT011-ir/news-press.png"
              alt="News"
              fill
              priority
              quality={95}
              className="object-cover opacity-30"
              sizes="100vw"
              style={{ objectPosition: 'center 35%' }}
            />
          </div>
          <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 w-full py-14">
            <div className="max-w-[640px]">
              <div className="flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-8">
                <div className="w-6 h-[1px] bg-[var(--color-accent)]" />
                미디어 및 공지사항
              </div>
              <h1 className="text-[clamp(2.2rem,4vw,3.8rem)] font-bold tracking-tight leading-[1.5] mb-6">
                뉴스
              </h1>
              <p className="text-[0.9rem] text-white/55 leading-[1.8] max-w-[520px] font-normal">
                IRG의 최신 보도자료, 재무 발표 및 기업 소식을 확인하세요.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Filter + News Grid */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="py-14 bg-white"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-14 border-b border-[var(--color-border)] pb-6">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`text-[0.62rem] font-bold uppercase tracking-[0.12em] px-6 py-2.5 transition-all duration-300 ${
                    activeTag === tag
                      ? "bg-[var(--color-dark-bg)] text-white"
                      : "bg-transparent text-[#6B6B6B] border border-[var(--color-border)] hover:border-[var(--color-dark-bg)]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* News Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filtered.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group cursor-pointer"
                >
                  <div className="border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 hover: h-full flex flex-col sm:flex-row overflow-hidden bg-white">
                    {item.image && (
                      <div className="w-full sm:w-[180px] shrink-0 aspect-[4/3] sm:aspect-auto bg-[#F9F9F8] relative overflow-hidden border-b sm:border-b-0 sm:border-r border-[var(--color-border)]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 180px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-[0.6rem] text-[#6B6B6B] font-medium">{item.date}</span>
                          <span className="w-1 h-1 rounded-full bg-[#6B6B6B]" />
                          <span
                            className="text-[0.55rem] font-bold uppercase tracking-[0.12em] px-2.5 py-1 text-white"
                            style={{ backgroundColor: item.tagColor }}
                          >
                            {item.tag}
                          </span>
                        </div>
                        <h3 className="text-[0.88rem] font-bold text-[var(--color-dark-bg)] leading-[1.5] mb-3 group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-[0.78rem] text-[#6B6B6B] leading-[1.82] font-normal line-clamp-3">
                          {item.excerpt}
                        </p>
                      </div>
                      <div className="mt-5 pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                        <span className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)] group-hover:text-[var(--color-dark-bg)] transition-colors">
                          더 보기 →
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-14 text-center">
              <button className="text-[0.72rem] font-bold uppercase tracking-[0.14em] px-8 py-3.5 border border-[var(--color-dark-bg)] text-[var(--color-dark-bg)] hover:bg-[var(--color-dark-bg)] hover:text-white transition-all duration-300">
                더 많은 소식
              </button>
            </div>
          </div>
        </motion.section>

        {/* Press Release Archive CTA */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="py-10 md:py-20 bg-[#F9F9F8] border-t border-[var(--color-border)]"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-[1.2rem] font-bold text-[var(--color-dark-bg)] mb-2">보도자료 아카이브</h2>
              <p className="text-[0.82rem] text-[#6B6B6B] font-normal">연도 및 카테고리별로 모든 보도자료를 확인할 수 있습니다.</p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="text-[0.72rem] font-bold uppercase tracking-[0.14em] px-8 py-3 bg-[var(--color-dark-bg)] text-white hover:bg-[var(--color-accent)] transition-all duration-300">
                아카이브 보기
              </a>
              <a href="#" className="text-[0.72rem] font-bold uppercase tracking-[0.14em] px-8 py-3 border border-[var(--color-dark-bg)] text-[var(--color-dark-bg)] hover:bg-[var(--color-dark-bg)] hover:text-white transition-all duration-300">
                알림 구독
              </a>
            </div>
          </div>
        </motion.section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function IRNews(props: any) {
  return (
    <React.Suspense fallback={null}>
      <IRNewsContent {...props} />
    </React.Suspense>
  );
}
