"use client";

import Link from "next/link";
import { motion } from "motion/react";
import NewsCard from "./ui/NewsCard";
import { news } from "@/app/en/templates/OHMT023-game/data/data";
import { ArrowRight } from "lucide-react";

export default function LatestNews() {
  return (
    <section className="relative py-24 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-14 flex items-end justify-between"
        >
          <div>
            <span className="text-sm font-medium tracking-[0.2em] text-[var(--color-primary)] uppercase">
              Latest
            </span>
            <h2 className="mt-2 font-[var(--font-heading)] text-4xl font-bold md:text-5xl">
              News & Updates
            </h2>
          </div>
          <Link
            href="/en/templates/OHMT023-game/news"
            className="group hidden items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)] md:flex"
          >
            All News
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/en/templates/OHMT023-game/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)]"
          >
            All News
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
