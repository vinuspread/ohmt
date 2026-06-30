"use client";
import React from "react";
import { motion } from "motion/react";

const ease = [0.23, 1, 0.32, 1] as const;

const badges = [
  { top: "Specialty", bottom: "Grade", sub: "SCA Certified" },
  { top: "Direct", bottom: "Trade", sub: "Farm Partners" },
  { top: "Award", bottom: "Winner", sub: "Korea 2024" },
];

export const Features = () => {
  return (
    <section className="bg-[var(--color-bg-secondary)] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-semibold border-b border-[var(--color-text-muted)]/30 pb-2 inline-block mb-6">
              Who We Are
            </p>
            <p className="font-heading text-[var(--color-text)] text-2xl md:text-[1.85rem] font-bold leading-[1.22] mb-5 max-w-[22ch]">
              Every guest deserves to leave<br className="hidden md:block" /> better than they arrived.
            </p>
            <p className="text-[var(--color-text-muted)] text-base leading-relaxed mb-12 max-w-[40ch]">
              A fresh menu, a welcoming space, and coffee made with care. That is what we come back to, every day.
            </p>

            <div className="flex gap-4 md:gap-6">
              {badges.map((b, i) => (
                <motion.div
                  key={i}
                  className="w-[110px] h-[110px] md:w-[148px] md:h-[148px] shrink-0 rounded-full border-2 border-[var(--color-text-muted)]/35 flex flex-col items-center justify-center text-center gap-1 md:gap-1.5 px-2 md:px-3 cursor-pointer"
                  whileHover={{ scale: 1.06, borderColor: "rgba(17,17,24,0.7)" }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <span className="text-[9px] md:text-[12px] font-bold text-[var(--color-text)] uppercase leading-tight">
                    {b.top}<br />{b.bottom}
                  </span>
                  <span className="text-[8px] md:text-[10px] text-[var(--color-text-muted)] leading-tight">{b.sub}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: photo + overlap card */}
          <motion.div
            className="relative pb-16 group cursor-pointer"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease }}
          >
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src="/templates/OHMT019-coffee/alt-detail.jpg"
                alt="Coffee shop detail"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-[var(--color-bg-dark)] text-white p-6 w-[200px]">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/45 mb-2">Our Mission</p>
              <p className="text-[15px] leading-relaxed text-white/75">
                To serve coffee as an experience - not a transaction.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
