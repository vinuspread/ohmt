"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { locations } from "../data/data";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const Locations = () => {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-heading text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35, ease: easeOut }}
        >
          매장 안내
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.id}
              className="bg-[var(--color-bg-secondary)] p-6 rounded-none"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: i * 0.1, ease: easeOut }}
            >
              <h3 className="text-xl font-bold font-heading mb-3">{loc.name}</h3>
              <div className="space-y-2 text-sm text-[var(--color-text-muted)] mb-5">
                <p>{loc.address}</p>
                <p>{loc.hours}</p>
                <p>{loc.phone}</p>
              </div>
              <Link
                href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-primary)] hover:opacity-80 transition-opacity"
              >
                길찾기 &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
