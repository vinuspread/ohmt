"use client";

import { motion, useReducedMotion } from "framer-motion";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";
import { blogPosts } from "../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function BlogFull() {
  const reduce = useReducedMotion();
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[50dvh] overflow-hidden bg-[var(--color-secondary)]">
          <img
            src="/templates/spa/who-we-are.jpg"
            alt=""
            role="presentation"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] via-[var(--color-secondary)]/70 to-[var(--color-secondary)]/30" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 flex h-full min-h-[50dvh] flex-col justify-end pb-16 lg:pb-20">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="max-w-2xl"
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Blog</span>
              <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[1.05]">
                Insights & advice
              </h1>
              <p className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-lg">
                Skincare tips, treatment guides, and wellness wisdom from our team of experts.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {blogPosts.map((post, i) => (
                <motion.a
                  key={post.id}
                  href={`/en/templates/OHMT026-spa-EN/blog/${blogPosts[0].id}`}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }}
                  className="group rounded-2xl overflow-hidden bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-56 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                      <span>{post.category}</span>
                      <span>{post.date}</span>
                    </div>
                    <h2 className="mt-3 font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)] leading-snug group-hover:text-[var(--color-primary)] transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                      <span>{post.author}</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
