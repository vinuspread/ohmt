"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";
import { categories } from "../data/data";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const CategoryGrid = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            카테고리별 쇼핑
          </h2>
          <Link
            href="/ko/templates/OHMT017-multi-shop/shop"
            className="hidden md:inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200 border-b border-[var(--color-text-muted)] pb-0.5"
          >
            전체보기
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
              whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: easeOut }}
            >
              <Link
                href={`/ko/templates/OHMT017-multi-shop/shop/${cat.id}`}
                className="group relative block overflow-hidden active:scale-[0.98] transition-transform duration-160 ease-out"
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white text-xl font-bold tracking-tight">
                    {cat.name}
                  </h3>
                  <span className="inline-block mt-1 text-[11px] uppercase tracking-[0.2em] text-white/70 motion-safe:group-hover:text-white transition-colors duration-200">
                    쇼핑하기 &rarr;
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

