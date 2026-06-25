"use client";

import { Suspense } from "react";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const quarterlyData = [
  { period: "Q1 2026", revenue: "$14,632M", netIncome: "$2,847M", eps: "$4.21", margin: "19.5%" },
  { period: "Q4 2025", revenue: "$13,891M", netIncome: "$2,511M", eps: "$3.72", margin: "18.1%" },
  { period: "Q3 2025", revenue: "$13,245M", netIncome: "$2,308M", eps: "$3.43", margin: "17.4%" },
  { period: "Q2 2025", revenue: "$12,978M", netIncome: "$2,194M", eps: "$3.26", margin: "16.9%" },
  { period: "Q1 2025", revenue: "$12,420M", netIncome: "$2,043M", eps: "$3.04", margin: "16.4%" },
];

const metricsCards = [
  { label: "Market Cap", value: "$287.6B", change: "+12.3%" },
  { label: "Enterprise Value", value: "$312.4B", change: "+9.8%" },
  { label: "P/E Ratio", value: "24.8x", change: "-" },
  { label: "Dividend Yield", value: "2.40%", change: "+0.05pp" },
];

function IRFinancialsContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-white">
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
              src="/templates/OHMT011-ir/news-financial.png"
              alt="Financials"
              fill
              priority
              quality={95}
              className="object-cover opacity-30"
              sizes="100vw"
              style={{ objectPosition: 'center 45%' }}
            />
          </div>
          <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 w-full py-14">
            <div className="max-w-[640px]">
              <div className="flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-8">
                <div className="w-6 h-[1px] bg-[var(--color-accent)]" />
                Financial Performance
              </div>
              <h1 className="text-[clamp(2.2rem,4vw,3.8rem)] font-bold tracking-tight leading-[1.1] mb-6">
                Financials
              </h1>
              <p className="text-[0.9rem] text-white/55 leading-[1.4] max-w-[520px] font-normal">
                A comprehensive overview of our financial performance, quarterly results, and key metrics.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Key Metrics Strip */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="py-16 bg-[#F9F9F8] border-b border-[var(--color-border)]"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metricsCards.map((card) => (
                <div key={card.label} className="text-center">
                  <span className="block text-[clamp(1.6rem,2.2vw,2.2rem)] font-bold text-[var(--color-dark-bg)] mb-1.5">{card.value}</span>
                  <span className="block text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#6B6B6B] mb-1.5">{card.label}</span>
                  {card.change !== "-" && (
                    <span className="text-[0.72rem] text-green-600 font-medium">{card.change}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Quarterly Results Table */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="py-14 bg-white"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="mb-14 max-w-[640px]">
              <span className="block text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-5">
                Quarterly Results
              </span>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-tight text-[var(--color-dark-bg)] leading-[1.1] mb-6">
                Earnings Summary
              </h2>
              <p className="text-[0.88rem] text-[#6B6B6B] leading-[1.82] font-normal">
                All financial figures are reported in accordance with U.S. GAAP and are audited by Deloitte & Touche LLP.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[var(--color-dark-bg)]">
                    <th className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)] py-4 pr-6">Period</th>
                    <th className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)] py-4 pr-6">Revenue</th>
                    <th className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)] py-4 pr-6">Net Income</th>
                    <th className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)] py-4 pr-6">EPS</th>
                    <th className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)] py-4">Net Margin</th>
                  </tr>
                </thead>
                <tbody>
                  {quarterlyData.map((q, i) => (
                    <tr key={q.period} className={`border-b border-[var(--color-border)] ${i === 0 ? "bg-[#F9F9F8]" : ""} hover:bg-[#F9F9F8] transition-colors`}>
                      <td className="py-4 pr-6">
                        <span className={`text-[0.82rem] font-bold ${i === 0 ? "text-[var(--color-dark-bg)]" : "text-[var(--color-text)]"}`}>{q.period}</span>
                        {i === 0 && <span className="ml-2 text-[0.55rem] font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">Latest</span>}
                      </td>
                      <td className="py-4 pr-6 text-[0.82rem] font-medium text-[var(--color-text)]">{q.revenue}</td>
                      <td className="py-4 pr-6 text-[0.82rem] text-[var(--color-text)]">{q.netIncome}</td>
                      <td className="py-4 pr-6 text-[0.82rem] text-[var(--color-text)]">{q.eps}</td>
                      <td className="py-4 text-[0.82rem] text-[var(--color-text)]">{q.margin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <a href="#" className="text-[0.72rem] font-bold uppercase tracking-[0.14em] px-8 py-3.5 bg-[var(--color-dark-bg)] text-white hover:bg-[var(--color-accent)] transition-all duration-300 inline-block">
                Download Full Report (PDF)
              </a>
              <a href="#" className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--color-dark-bg)] hover:text-[var(--color-accent)] transition-colors">
                View SEC Filings →
              </a>
            </div>
          </div>
        </motion.section>

        {/* Revenue Breakdown CTA */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="py-14 bg-[var(--color-dark-bg)] text-white"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
            <span className="block text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-5">
              Annual Report
            </span>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-tight leading-[1.1] mb-6">
              2025 Annual Report
            </h2>
            <p className="text-[0.88rem] text-white/55 leading-[1.82] max-w-[520px] mx-auto mb-10 font-normal">
              Access our comprehensive annual report including management commentary, audited financial statements, and forward-looking guidance.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-[0.72rem] font-bold uppercase tracking-[0.14em] px-8 py-3.5 bg-[var(--color-accent)] text-white hover:bg-white hover:text-[var(--color-dark-bg)] transition-all duration-300">
                Read Annual Report
              </a>
              <a href="#" className="text-[0.72rem] font-bold uppercase tracking-[0.14em] px-8 py-3.5 border border-white/30 text-white/80 hover:bg-white hover:text-[var(--color-dark-bg)] transition-all duration-300">
                Download PDF
              </a>
            </div>
          </div>
        </motion.section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function IRFinancials(props: any) {
  return (
    <React.Suspense fallback={null}>
      <IRFinancialsContent {...props} />
    </React.Suspense>
  );
}
