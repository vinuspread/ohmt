"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { menuItems } from "../data/data";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const SignatureMenu = () => {
  const signatures = menuItems.filter((item) => item.isSignature);

  return (
    <section className="bg-[var(--color-bg-secondary)] py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-4">시그니처</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">시그니처 버거</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {signatures.map((item, i) => (
            <motion.div
              key={item.id}
              className="group bg-white overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: i * 0.05, ease: easeOut }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <span className="text-lg font-bold text-[var(--color-accent)]">${item.price}</span>
                </div>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.description}</p>
                {item.calories && (
                  <span className="text-xs text-[var(--color-text-muted)] mt-3 block">{item.calories} cal</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/ko/templates/OHMT018-burger-KO/menu"
            className="inline-block bg-[var(--color-primary)] text-white px-10 py-3 text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-[var(--color-accent-hover)] transition-[transform,colors] duration-160 ease-out active:scale-[0.97]"
          >
            전체 메뉴 보기
          </Link>
        </div>
      </div>
    </section>
  );
};
