"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const AboutBrand = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            className="order-2 lg:order-1 h-[400px] md:h-[540px] overflow-hidden"
            initial={shouldReduce ? {} : { opacity: 0, x: -30 }}
            whileInView={shouldReduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <img
              src="/templates/OHMT017-multi-shop/about-brand.jpg"
              alt="About our brand"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={shouldReduce ? {} : { opacity: 0, x: 30 }}
            whileInView={shouldReduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-4">
              Our Story
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Fashion With Intention
            </h2>
            <p className="text-base leading-relaxed text-[var(--color-text-muted)] mt-6">
              We do not follow trends. We follow instinct. Every piece we make is born from a
              simple question: would we actually wear this? If the answer is not an immediate yes,
              it does not make the cut.
            </p>
            <p className="text-base leading-relaxed text-[var(--color-text-muted)] mt-4">
              That is why our collections feel cohesive without being repetitive. Silhouettes are
              clean, fabrics are chosen for how they feel on skin, and every detail serves a
              purpose. Nothing is added for decoration.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-[var(--color-border)]">
              {[
                { value: "200+", label: "Products" },
                { value: "50K+", label: "Customers" },
                { value: "4.9", label: "Avg. Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/en/templates/OHMT017-multi-shop-EN/about"
              className="inline-block mt-10 bg-[var(--color-primary)] text-white px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-black/80 transition-[transform,colors] duration-160 ease-out active:scale-[0.97]"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
