"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const Reserve = () => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/templates/coffee/cta-bg.jpg)" }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(28,17,10,0.65)" }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-[1.15] mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35, ease: easeOut }}
        >
          테이블 예약 또는
          <br />
          픽업 주문
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35, delay: 0.1, ease: easeOut }}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/ko/templates/coffee/locations"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-semibold rounded-none transition-[transform,colors] duration-160 ease-out active:scale-[0.97] hover:bg-white/10"
            >
              예약하기
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/ko/templates/coffee/menu"
              className="inline-flex items-center justify-center bg-white text-[var(--color-text)] px-8 py-3 text-xs uppercase tracking-[0.2em] font-semibold rounded-none transition-[transform,colors] duration-160 ease-out active:scale-[0.97] hover:bg-white/90"
            >
              픽업 주문
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
