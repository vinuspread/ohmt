"use client";

import { motion } from "motion/react";
import type { NewsItem } from "@/app/ko/templates/OHMT023-game-KO/data/data";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="group cursor-pointer overflow-hidden rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] transition-all duration-500 hover:border-[var(--color-primary)] hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
          {item.category}
        </span>
        <h3 className="mt-3 font-[var(--font-heading)] text-lg font-bold leading-snug text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-[var(--color-text-muted)]">
          {item.excerpt}
        </p>
        <span className="mt-3 block text-xs text-[var(--color-text-muted)]">{item.date}</span>
      </div>
    </motion.div>
  );
}
