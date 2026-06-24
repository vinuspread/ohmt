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
import { blogPosts } from "@/lib/portfolio-data";

const allPosts = [
  ...blogPosts,
  { slug: 'ethics-minimalism', title: 'The Ethics of Minimalism in Brand Design', date: 'Mar 24, 2026', category: 'Essay', img: '/templates/portfolio/portfolio-1.jpg' },
  { slug: 'recapturing-focus', title: 'Recapturing Focus in a Digital World', date: 'Feb 12, 2026', category: 'Insight', img: '/templates/portfolio/portfolio-2.jpg' },
  { slug: 'radical-honesty', title: '2026 Design Trends: Radical Honesty', date: 'Jan 5, 2026', category: 'Future', img: '/templates/portfolio/portfolio-hero.png' },
];

function JournalPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <div className="bg-white text-[var(--color-text)] font-[family-name:var(--font-inter)] selection:bg-[var(--color-primary)] selection:text-black">
        <Header />

        {/* Header */}
        <section className="pt-40 pb-16 border-b border-[var(--color-border)]">
          <div className="max-w-[1440px] mx-auto px-6">
            <span className="text-[13px] font-bold tracking-[0.4em] uppercase text-[var(--color-text-muted)] block mb-6">?�리?�이?�브 ?�스?�치</span>
            <h1 className="text-[clamp(4rem,10vw,9rem)] font-medium uppercase tracking-tighter leading-[1.5]">?�??/h1>
          </div>
        </section>

        {/* Featured (first post) */}
        <section className="py-10 md:py-20 border-b border-[var(--color-border)]">
          <div className="max-w-[1440px] mx-auto px-6">
            <Link href="/ko/templates/OHMT007-portfolio-KO/journal" className="group grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] overflow-hidden bg-[var(--color-bg-secondary)]">
                <img loading="lazy" src={allPosts[0].img} alt={allPosts[0].title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[13px] font-medium uppercase tracking-widest text-[var(--color-text)] bg-[var(--color-primary)]/10 px-2 py-1">{allPosts[0].category}</span>
                  <span className="text-[13px] text-[var(--color-text-muted)]/60">{allPosts[0].date}</span>
                </div>
                <h2 className="text-[2rem] font-medium uppercase tracking-tighter leading-tight mb-6 group-hover:text-[var(--color-text)] transition-colors">
                  {allPosts[0].title}
                </h2>
                <span className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]/60 group-hover:text-[var(--color-text)] transition-colors">
                  기사 ?�기 <ArrowUpRight size={12} />
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Article list */}
        <section className="py-0">
          <div className="max-w-[1440px] mx-auto px-6">
            {allPosts.slice(1).map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link href="/ko/templates/OHMT007-portfolio-KO/journal"
                  className="group grid md:grid-cols-12 py-10 border-b border-[var(--color-border)] items-center hover:bg-[var(--color-bg-secondary)] transition-colors px-2 gap-6">
                  <div className="md:col-span-2 text-[13px] font-bold tracking-widest text-[var(--color-text-muted)] uppercase">{post.date}</div>
                  <div className="md:col-span-7">
                    <h2 className="text-[1.1rem] font-medium uppercase tracking-tight group-hover:text-[var(--color-text)] transition-colors">{post.title}</h2>
                  </div>
                  <div className="md:col-span-2 text-right">
                    <span className="text-[13px] font-medium uppercase tracking-widest border border-white/20 px-3 py-1.5 group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-text)] transition-all">
                      {post.category}
                    </span>
                  </div>
                  <div className="md:col-span-1 flex justify-end">
                    <ArrowUpRight size={14} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="py-10 md:py-20" />
        <Footer />
      </div>
    </TemplateWrapper>
  );
}


export default function JournalPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <JournalPageContent {...props} />
    </React.Suspense>
  );
}
