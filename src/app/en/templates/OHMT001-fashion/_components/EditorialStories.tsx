"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const stories = [
  { num: "01", title: "The Art of Layering", excerpt: "A guide to balancing fluid silk slips with structured outerwear between seasons.", image: "/templates/OHMT001-fashion/journal-layering-v2.jpg" },
  { num: "02", title: "The Life of Natural Fibers", excerpt: "How to preserve the organic texture of Italian virgin wool and fine silk over time.", image: "/templates/OHMT001-fashion/journal-fibers-v2.jpg" },
  { num: "03", title: "Elegance in Structure", excerpt: "SILO tailoring shapes the shoulder with dimension while allowing the body to move freely.", image: "/templates/OHMT001-fashion/journal-structure-v2.jpg" },
];

export const EditorialStories = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-bg)] py-16 text-[var(--color-text)] md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="mb-14 flex flex-col gap-7 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">SILO Journal</span>
            <h2 className="text-4xl font-light leading-[1.05] tracking-[-0.02em] text-balance sm:text-5xl" style={{ fontFamily: "var(--font-bodoni)" }}>Notes on Thread &amp; Silhouette</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--color-text-secondary)]">We share the distinct voice of our materials and SILO&apos;s philosophy of quiet luxury. Read stories of process, detail, and craft.</p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {stories.map((story, index) => (
            <motion.article key={story.num} initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ delay: index * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="group flex flex-col">
              <div className="mb-6 aspect-[4/5] overflow-hidden bg-[var(--color-bg-secondary)]"><img src={story.image} alt={story.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" /></div>
              <div className="mb-4 flex items-baseline gap-4"><span className="text-xs italic text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-bodoni)" }}>{story.num}</span><h3 className="text-xl font-normal tracking-[-0.02em]" style={{ fontFamily: "var(--font-bodoni)" }}>{story.title}</h3></div>
              <p className="mb-7 max-w-[38ch] text-sm leading-relaxed text-[var(--color-text-secondary)]">{story.excerpt}</p>
              <Link href="#" className="mt-auto w-fit border-b border-[var(--color-text)]/20 pb-1 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:border-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Read the story</Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
