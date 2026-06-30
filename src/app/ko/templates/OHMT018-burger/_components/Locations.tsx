"use client";
import React from "react";
import { motion } from "motion/react";
import { locations } from "../data/data";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const Locations = () => {
  return (
    <section className="bg-[var(--color-bg-secondary)] py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-4">매장 찾기</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">매장 안내</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.id}
              className="bg-white p-6 md:p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: easeOut }}
            >
              <h3 className="text-xl font-bold mb-3">{loc.city}</h3>
              <div className="space-y-2 text-sm text-[var(--color-text-muted)]">
                <p>{loc.address}</p>
                <p>{loc.hours}</p>
                <p>{loc.phone}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
