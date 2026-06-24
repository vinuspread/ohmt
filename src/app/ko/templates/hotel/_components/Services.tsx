"use client";

import React from "react";
import { motion } from "framer-motion";
import { Waves, Sparkles, Utensils, Dumbbell, ConciergeBell, Car } from "lucide-react";
import { services } from "../data/data";

const iconMap: Record<string, React.ReactNode> = {
  "Swimming": <Waves size={28} strokeWidth={1.2} />,
  "Spa": <Sparkles size={28} strokeWidth={1.2} />,
  "Dining": <Utensils size={28} strokeWidth={1.2} />,
  "Fitness": <Dumbbell size={28} strokeWidth={1.2} />,
  "Concierge": <ConciergeBell size={28} strokeWidth={1.2} />,
  "Transport": <Car size={28} strokeWidth={1.2} />,
};

export const Services = () => {
  return (
    <section id="서비스" className="py-20 md:py-32 bg-[var(--color-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-[var(--font-heading)] font-bold text-[var(--color-primary)] leading-[1.2]">
            프리미엄 서비스 & 편의시설
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="group p-6 md:p-8 border border-[var(--color-border)] bg-[var(--color-bg)] hover:bg-[var(--color-bg-secondary)] transition-all duration-500"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-5 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-500">
                {iconMap[s.icon]}
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">{s.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
