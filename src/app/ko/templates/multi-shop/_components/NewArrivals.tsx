"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";
import { newArrivals } from "../data/data";
import { ProductCard } from "./ProductCard";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const NewArrivals = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section className="bg-[var(--color-bg-secondary)] py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">신상품</h2>
          <Link
            href="/ko/templates/OHMT017-multi-shop-KO/shop"
            className="hidden md:inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200 border-b border-[var(--color-text-muted)] pb-0.5"
          >
            전체보기
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {newArrivals.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
              whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: easeOut }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10 md:hidden">
          <Link
            href="/ko/templates/OHMT017-multi-shop-KO/shop"
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-3 text-xs uppercase tracking-[0.2em] active:scale-[0.97] transition-transform duration-160 ease-out"
          >
            전체보기
          </Link>
        </div>
      </div>
    </section>
  );
};

