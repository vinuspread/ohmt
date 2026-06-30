"use client";
import React from "react";
import { motion } from "motion/react";
import { menuItems } from "../data/data";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const FeaturedDrinks = () => {
  const signatureItems = menuItems.filter((item) => item.isSignature);

  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-heading text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35, ease: easeOut }}
        >
          시그니처 음료
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {signatureItems.slice(0, 3).map((item, i) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: i * 0.1, ease: easeOut }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold font-heading">{item.name}</h3>
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
      </div>
    </section>
  );
};
