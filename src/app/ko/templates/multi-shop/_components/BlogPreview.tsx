"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";
import { blogPosts } from "../data/data";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const BlogPreview = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section className="bg-[var(--color-bg-secondary)] py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">매거진</h2>
          <Link
            href="/ko/templates/OHMT017-multi-shop/blog"
            className="hidden md:inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200 border-b border-[var(--color-text-muted)] pb-0.5"
          >
            전체보기
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
              whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: easeOut }}
            >
              <Link
                href={`/ko/templates/OHMT017-multi-shop/blog/${post.slug}`}
                className="group block active:scale-[0.98] transition-transform duration-160 ease-out"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[var(--color-bg-secondary)]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                    <span>{post.category}</span>
                    <span>·</span>
                    <span>{post.readTime} 소요</span>
                  </div>
                  <h3 className="text-base font-bold mt-2 leading-snug motion-safe:group-hover:opacity-70 transition-opacity duration-200">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] mt-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-[var(--color-primary)] font-medium motion-safe:group-hover:opacity-60 transition-opacity duration-200">
                    더보기 &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

