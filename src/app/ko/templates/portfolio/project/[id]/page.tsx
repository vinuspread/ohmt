"use client";
import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import theme from "../../theme.json";
import { Header } from "../../_components/layout/Header";
import { Footer } from "../../_components/layout/Footer";
import { projects } from "@/lib/portfolio-data";

function ProjectPageContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projects.find(p => p.id === id) ?? projects[0];
  const others = projects.filter(p => p.id !== id).slice(0, 3);

  const allImages = [project.thumbnail, ...project.images, project.thumbnail, ...project.images].slice(0, 5);

  return (
    <TemplateWrapper theme={theme}>
      <div className="bg-white text-[var(--color-text)] font-[family-name:var(--font-inter)] selection:bg-[var(--color-primary)] selection:text-white">
        <Header />

        {/* Main two-column layout */}
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row min-h-screen pt-16">

            {/* Left: sticky meta panel */}
            <div className="md:w-[420px] lg:w-[480px] shrink-0 md:sticky md:top-16 md:h-[calc(100vh-4rem)] flex flex-col justify-between px-8 md:px-10 py-16">
              <div>
                <Link href="/ko/templates/OHMT007-portfolio-KO"
                  className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors mb-16">
                  <ArrowLeft size={13} /> ?�로
                </Link>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-[13px] font-medium tracking-[0.3em] uppercase text-[var(--color-text-muted)] block mb-5">{project.category}</span>
                  <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tighter leading-[1.5] mb-8">{project.title}</h1>
                  <p className="text-[0.9rem] text-[var(--color-text-muted)] leading-relaxed mb-12">{project.description}</p>
                </motion.div>

                {/* Metadata table */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="border-t border-[var(--color-border)]"
                >
                  {[
                    { label: '?�도', value: project.year },
                    { label: '범위', value: project.tags.join(', ') },
                    { label: '기간', value: '8�? },
                  ].map((row) => (
                    <div key={row.label} className="flex items-baseline justify-between py-4 border-b border-[var(--color-border)]">
                      <span className="text-[13px] font-medium uppercase tracking-widest text-[var(--color-text-muted)]">{row.label}</span>
                      <span className="text-[0.85rem] font-medium text-[var(--color-text)] text-right max-w-[60%]">{row.value}</span>
                    </div>
                  ))}
                  <div className="flex items-baseline justify-between py-4 border-b border-[var(--color-border)]">
                    <span className="text-[13px] font-medium uppercase tracking-widest text-[var(--color-text-muted)]">?�이�??�로?�트</span>
                    <a href="#" className="inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-[var(--color-text)] hover:text-[var(--color-text-muted)] transition-colors">
                      미리보기 + <ArrowUpRight size={12} />
                    </a>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8">
                <Link href="/ko/templates/OHMT007-portfolio-KO/contact"
                  className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-[var(--color-text)] border-b border-[var(--color-primary)] pb-0.5 hover:opacity-50 transition-opacity">
                  비슷???�로?�트 ?�작 <ArrowUpRight size={11} />
                </Link>
              </div>
            </div>

            {/* Right: scrolling images */}
            <div className="flex-1 pt-16 pb-14 md:pb-28 px-8 md:px-10 space-y-6">
              {allImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden bg-[var(--color-bg-secondary)]"
                  style={{ aspectRatio: i % 3 === 1 ? '16/9' : '4/3' }}
                >
                  <img loading="lazy" src={img} alt={project.title}
                    className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Next projects */}
        <section className="py-12 md:py-24 border-t border-[var(--color-border)]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-10">
            <div className="flex items-end justify-between mb-14">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-black uppercase tracking-tighter">??많�? ?�업</h2>
              <Link href="/ko/templates/OHMT007-portfolio-KO"
                className="flex items-center gap-2 text-[13px] font-medium uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                모든 ?�로?�트 <ArrowUpRight size={11} />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {others.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link href={`/ko/templates/OHMT007-portfolio-KO/project/${p.id}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-secondary)] mb-4">
                      <img loading="lazy" src={p.thumbnail} alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-[0.95rem] font-medium uppercase tracking-tight group-hover:text-[var(--color-text-muted)] transition-colors">{p.title}</h3>
                        <p className="text-[0.78rem] text-[var(--color-text-muted)] mt-0.5">{p.category}</p>
                      </div>
                      <span className="text-[13px] font-medium text-[var(--color-text-muted)]">{p.date}</span>
                    </div>
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


export default function ProjectPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <ProjectPageContent {...props} />
    </React.Suspense>
  );
}
