"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../_components/layout/Navbar";
import Footer from "../../_components/layout/Footer";
import { blogPosts } from "../../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function BlogPostFull() {
  const reduce = useReducedMotion();
  // Sample detail page - content is intentionally fixed to the first post
  // rather than resolved per-slug (see blog/[slug]/page.tsx).
  const post = blogPosts[0];

  return (
    <>
      <Navbar solid />
      <main className="pt-24">
        <article className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-3xl px-6">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
            >
              <div className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                <span>{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h1 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">
                {post.title}
              </h1>
              <p className="mt-4 text-sm text-[var(--color-text-muted)]">By {post.author}</p>
            </motion.div>

            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
              className="mt-10"
            >
              <div className="h-80 rounded-2xl overflow-hidden">
                <img src="/templates/spa/blog-detail-01.jpg" alt={post.title} className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE_OUT }}
              className="mt-12 space-y-6 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed"
            >
              <p>{post.excerpt}</p>
              <p>
                At our clinic, we believe in empowering our clients with knowledge. Understanding your skin and the treatments
                available helps you make informed decisions about your wellness journey. This article is part of our ongoing
                commitment to education and transparency.
              </p>
              <p>
                Whether you are considering a new treatment or simply curious about the science behind skincare, our team is
                here to guide you. Book a consultation to discuss your unique needs with one of our certified therapists.
              </p>
              <div className="pt-6">
                <a
                  href="/en/templates/spa/contact"
                  className="inline-flex items-center rounded-full bg-[var(--color-primary)] text-[var(--color-text-contrast)] px-6 py-2.5 text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-150"
                >
                  Book a consultation
                </a>
              </div>
            </motion.div>

            <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
              <Link href="/en/templates/spa/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline">
                ← Back to blog
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
