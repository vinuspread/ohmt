"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { menuItems, menuCategories, type MenuCategory } from "../data/data";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const MenuGrid = () => {
  const [active, setActive] = useState<MenuCategory>(menuCategories[0].id);

  const filtered = menuItems.filter((item) => item.category === active);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-4">메뉴</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">다양한 메뉴</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`text-xs tracking-[0.03em] px-6 py-2.5 font-semibold rounded-full transition-colors duration-200 ${
                active === cat.id
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              className="group bg-[var(--color-bg-secondary)] rounded-none overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: i * 0.03, ease: easeOut }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                />
              </div>
              <div className="p-4 md:p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base md:text-lg font-bold leading-tight">{item.name}</h3>
                  <span className="text-base md:text-lg font-bold text-[var(--color-accent)] shrink-0">${item.price}</span>
                </div>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-2">{item.description}</p>
                {item.calories && (
                  <span className="text-xs text-[var(--color-text-muted)] mt-2 block">{item.calories} cal</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
