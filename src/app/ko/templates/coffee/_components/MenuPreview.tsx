"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { menuItems, menuCategories, type MenuCategory } from "../data/data";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const MenuPreview = () => {
  const [active, setActive] = useState<string>(menuCategories[0].id);

  const filtered = menuItems
    .filter((item) => active === 'all' || item.category === active)
    .slice(0, 8);

  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-heading text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35, ease: easeOut }}
        >
          메뉴 소개
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className="relative text-xs uppercase tracking-[0.1em] px-5 py-2 font-semibold rounded-full transition-colors duration-300 outline-none focus:outline-none"
              style={{ color: active === cat.id ? "white" : "var(--color-text-muted)" }}
            >
              {active === cat.id && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 bg-[var(--color-primary)] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id + active}
              className="bg-white rounded-2xl overflow-hidden group cursor-pointer border border-[var(--color-border)]/50"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05, ease: easeOut }}
              whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(0,0,0,0.04)" }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-4 md:p-5">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-base md:text-lg font-bold font-heading">
                    {item.name}
                  </h3>
                  <span className="text-base font-semibold text-[var(--color-primary)] shrink-0">
                    ${item.price}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-2 mb-3">
                  {item.description}
                </p>
                {item.options && item.options.length > 0 && (
                  <div className="flex gap-1.5">
                    {item.options.map((opt) => (
                      <span
                        key={opt}
                        className="text-[10px] rounded-full px-2 py-0.5 bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] capitalize"
                      >
                        {opt === 'hot' ? '핫' : '아이스'}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/ko/templates/coffee/menu"
            className="inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:opacity-80 transition-opacity"
          >
            전체 메뉴 보기 &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};
