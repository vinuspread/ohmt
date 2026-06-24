"use client";
import React from "react";
import { motion } from "motion/react";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const BrandStory = () => {
  return (
    <section className="bg-[var(--color-bg-dark)] text-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
              Burgers Worth<br />Traveling For.
            </h2>
          </motion.div>
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <p className="text-base leading-relaxed text-white/70">
              It started with a simple belief: a great burger doesnt need gimmicks.
              It needs the best beef, a perfectly toasted bun, and someone who cares.
            </p>
            <p className="text-base leading-relaxed text-white/70">
              We source our beef from family farms, bake our buns fresh daily,
              and make every sauce from scratch. Nothing comes out of a bag.
              Nothing is pre-made. Every burger is hand-crafted, ordered by you.
            </p>
            <p className="text-base leading-relaxed text-white/70">
              Quality over quantity. Always.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
