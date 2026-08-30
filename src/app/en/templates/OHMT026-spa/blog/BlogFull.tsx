"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";
import { blogPosts } from "../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const categoryServiceMap: Record<string, string[]> = {
  "Skincare": ["hydrafacial", "chemical-peels"],
  "Treatments": ["microneedling", "laser-resurfacing"],
  "Wellness": ["aromatherapy", "body-massage"],
};

export default function BlogFull() {
  const reduce = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.id !== featured.id).filter((p) => activeCategory === "All" || p.category === activeCategory);

  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[50dvh] overflow-hidden bg-[var(--color-secondary)]">
          <img
            src="/templates/OHMT026-spa/blog-detail-01.jpg"
            alt=""
            role="presentation"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] via-[var(--color-secondary)]/70 to-[var(--color-secondary)]/30" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 flex h-full min-h-[50dvh] flex-col justify-end pb-16 lg:pb-20">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="max-w-2xl"
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Blog</span>
              <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[var(--leading-heading)]">
                Insights & advice
              </h1>
              <p className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-lg">
                Skincare tips, treatment guides, and wellness wisdom from our team of experts.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-[1440px] px-6">
            <motion.a href={`/en/templates/OHMT026-spa/blog/${featured.id}`} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE_OUT }} className="group grid gap-8 lg:grid-cols-2 items-center rounded-sm overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
              <div className="h-64 lg:h-full overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]"><span>{featured.category}</span><span className="text-[var(--color-text-muted)]">{featured.date}</span></div>
                <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)] group-hover:text-[var(--color-primary)] transition-colors duration-200">{featured.title}</h2>
                <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">{featured.excerpt}</p>
                <p className="mt-4 text-xs text-[var(--color-text-muted)]">{featured.author}</p>
              </div>
            </motion.a>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="mb-10 flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)} className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-200 ${activeCategory === cat ? "border-[var(--color-primary)] text-[var(--color-primary)]" : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"}`}>{cat}</button>
              ))}
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }}
                  className="group rounded-2xl overflow-hidden bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:-translate-y-1 transition-all duration-300"
                >
                  <a href={`/en/templates/OHMT026-spa/blog/${post.id}`} className="block">
                    <div className="h-56 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 pb-0">
                      <div className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                        <span>{post.category}</span>
                        <span>{post.date}</span>
                      </div>
                      <h2 className="mt-3 font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)] leading-[1.05] group-hover:text-[var(--color-primary)] transition-colors duration-200">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </a>
                  <div className="p-6 pt-4 flex items-center justify-between">
                    <span className="text-xs text-[var(--color-text-muted)]">{post.author}</span>
                    {categoryServiceMap[post.category] && (
                      <a href={`/en/templates/OHMT026-spa/service#${categoryServiceMap[post.category][0]}`} className="text-xs font-semibold text-[var(--color-primary)] hover:underline">Related treatments →</a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
