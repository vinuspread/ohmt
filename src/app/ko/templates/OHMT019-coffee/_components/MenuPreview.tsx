"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { menuItems, menuCategories } from "../data/data";

const ease = [0.23, 1, 0.32, 1] as const;

export const MenuPreview = () => {
  const [active, setActive] = useState<string>(menuCategories[0].id);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const filtered = active === 'all' ? menuItems : menuItems.filter((i) => i.category === active);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.2;
  };
  const onMouseUp = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          className="flex flex-col items-center gap-6 mb-10"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease }}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-light text-[var(--color-text)] uppercase tracking-[0.08em]">
            우리의 메뉴
          </h2>
          <div className="flex items-center gap-6 md:gap-8">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className="relative pb-1 text-xs uppercase tracking-[0.15em] font-semibold transition-colors duration-200"
                style={{ color: active === cat.id ? "var(--color-text)" : "var(--color-text-muted)" }}
              >
                {cat.label}
                {active === cat.id && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--color-accent)]"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-full max-w-full gap-3 md:gap-4 px-6 md:px-12 overflow-x-auto select-none"
          style={{ cursor: "grab", scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {filtered.map((item, i) => (
            <motion.div
              key={item.id + active}
              className="flex-none w-[160px] md:w-[190px] group cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.3), ease }}
              whileHover={{ y: -4 }}
            >
              <div className="aspect-square overflow-hidden flex items-center justify-center mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain pointer-events-none group-hover:scale-105 transition-transform duration-500 ease-out"
                  draggable={false}
                />
              </div>
              <div className="text-center">
                <p className="font-heading text-[var(--color-text)] text-sm font-bold leading-snug">{item.name}</p>
                <span className="text-[var(--color-text-muted)] text-xs font-semibold">${item.price.toFixed(2)}</span>
              </div>
            </motion.div>
          ))}
          <div className="flex-none w-6 md:w-12" />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-10 flex justify-center">
        <Link
          href="/ko/templates/OHMT019-coffee/menu"
          className="inline-flex items-center justify-center border border-[var(--color-text)] text-[var(--color-text)] px-10 py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[var(--color-text)] hover:text-white transition-colors duration-300"
        >
          전체 메뉴 보기 <ArrowRight size={14} className="inline" />
        </Link>
      </div>
    </section>
  );
};
