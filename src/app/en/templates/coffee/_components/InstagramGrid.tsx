"use client";
import React from "react";
import { motion } from "motion/react";

const easeOut = [0.23, 1, 0.32, 1] as const;

const instagramImages = [
  "/templates/coffee/instagram-01.jpg",
  "/templates/coffee/instagram-02.jpg",
  "/templates/coffee/instagram-03.jpg",
  "/templates/coffee/instagram-04.jpg",
  "/templates/coffee/instagram-05.jpg",
  "/templates/coffee/instagram-06.jpg",
];

export const InstagramGrid = () => {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.p
          className="text-center text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35, ease: easeOut }}
        >
          @ohmy_template
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {instagramImages.map((src, i) => (
            <motion.div
              key={src}
              className="aspect-square overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: i * 0.05, ease: easeOut }}
            >
              <img
                src={src}
                alt={`Coffee shop instagram ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
