"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { classes, classCategories } from "../data/data";
import Link from "next/link";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function ClassesContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const basePath = "/ko/templates/OHMT024-kids-education";
  const shouldReduce = useReducedMotion();

  const filtered = activeCategory === "All"
    ? classes
    : classes.filter((c) => c.category === activeCategory);

  return (
    <div className="pt-[var(--space-giant)]">
      <section className="py-[var(--space-section)] bg-[var(--color-bg)]">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
          >
            <span className="inline-flex items-center justify-center bg-[var(--color-secondary)] text-white rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-4">
              교육 프로그램
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mt-3 leading-none" style={{ fontFamily: "var(--font-heading)" }}>
              창의 클래스 둘러보기
            </h1>
          </motion.div>

          <div className="flex flex-wrap gap-2 mt-[var(--space-lg)]">
            <motion.button
              onClick={() => setActiveCategory("All")}
              initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: 0.05, ease: EASE_OUT }}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-150 ${
                activeCategory === "All"
                  ? "bg-[var(--color-text-main)] text-white"
                  : "bg-white text-[var(--color-text-muted)] border border-black/8 hover:border-black/20 hover:text-[var(--color-text-main)]"
              }`}
            >
              전체
            </motion.button>
            {classCategories.map((cat, idx) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, delay: 0.05 + idx * 0.03, ease: EASE_OUT }}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-150 ${
                  activeCategory === cat
                    ? "bg-[var(--color-text-main)] text-white"
                    : "bg-white text-[var(--color-text-muted)] border border-black/8 hover:border-black/20 hover:text-[var(--color-text-main)]"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-lg)] mt-[var(--space-xl)]">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: idx * 0.04, ease: EASE_OUT }}
                >
                  <Link
                    href={`${basePath}/classes/${item.id}`}
                    className="group block bg-white rounded-2xl border border-black/8 hover:bg-white hover:border-black/15 hover:shadow-md transition-all duration-200 overflow-hidden"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${item.image})`, backgroundColor: "#E8E3D9" }}
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center justify-center bg-white border border-[var(--color-category)] text-[var(--color-category)] rounded-full px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold tracking-tight group-hover:text-[var(--color-primary)] transition-colors duration-150" style={{ fontFamily: "var(--font-heading)" }}>
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-black/8">
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">{item.age}</span>
                        <span className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>{item.price}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
