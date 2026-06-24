"use client";
import React from "react";
import { motion } from "motion/react";

const ease = [0.23, 1, 0.32, 1] as const;

const picks = [
  {
    badge: "New",
    label: "Signature Cold Brew",
    price: "$7.5",
    image: "/templates/OHMT019-coffee/signature-coldbrew.png",
  },
  {
    badge: "Barista's Pick",
    label: "Vanilla Oat Latte",
    price: "$6.5",
    image: "/templates/OHMT019-coffee/signature-latte.png",
  },
  {
    badge: "Seasonal",
    label: "Single Origin Espresso",
    price: "$5.0",
    image: "/templates/OHMT019-coffee/signature-espresso.png",
  },
  {
    badge: "Chef's Special",
    label: "Matcha Oat Latte",
    price: "$7.0",
    image: "/templates/OHMT019-coffee/menu-matcha.png",
  },
];

export const FeaturedDrinks = () => {
  return (
    <section className="bg-[var(--color-bg-secondary)] py-14 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.p
          className="text-right text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-muted)] font-semibold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          Recommended
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {picks.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-[var(--color-accent)] text-white text-[9px] uppercase tracking-[0.15em] px-2.5 py-1 font-semibold">
                  {item.badge}
                </span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <p className="font-heading text-[var(--color-text)] text-sm font-bold leading-snug">
                  {item.label}
                </p>
                <span className="text-[var(--color-text-muted)] text-sm font-semibold shrink-0">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
