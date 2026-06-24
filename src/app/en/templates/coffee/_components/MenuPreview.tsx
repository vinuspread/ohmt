"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const ease = [0.23, 1, 0.32, 1] as const;

type Category = "All" | "Coffee" | "Cold Brew" | "Tea" | "Ade" | "Food";

const menuItems: { category: Category; name: string; price: string; image: string }[] = [
  // Coffee
  { category: "Coffee",    name: "Espresso",          price: "$4.0",  image: "/templates/OHMT019-coffee/menu-espresso.png" },
  { category: "Coffee",    name: "Americano",          price: "$4.5",  image: "/templates/OHMT019-coffee/menu-americano.png" },
  { category: "Coffee",    name: "Cappuccino",         price: "$5.0",  image: "/templates/OHMT019-coffee/menu-cappuccino.png" },
  { category: "Coffee",    name: "Vanilla Latte",      price: "$5.5",  image: "/templates/OHMT019-coffee/menu-vanilla-latte.png" },
  { category: "Coffee",    name: "Flat White",         price: "$5.5",  image: "/templates/OHMT019-coffee/menu-flat-white.png" },
  { category: "Coffee",    name: "Cortado",            price: "$5.0",  image: "/templates/OHMT019-coffee/menu-cortado.png" },
  { category: "Coffee",    name: "Caramel Macchiato",  price: "$6.0",  image: "/templates/OHMT019-coffee/menu-caramel-macchiato.png" },
  { category: "Coffee",    name: "Mocha",              price: "$6.0",  image: "/templates/OHMT019-coffee/menu-mocha.png" },
  // Cold Brew
  { category: "Cold Brew", name: "Cold Brew",          price: "$6.0",  image: "/templates/OHMT019-coffee/menu-cold-brew.png" },
  { category: "Cold Brew", name: "Cold Foam Brew",     price: "$6.5",  image: "/templates/OHMT019-coffee/menu-cold-foam.png" },
  { category: "Cold Brew", name: "Nitro Cold Brew",    price: "$7.0",  image: "/templates/OHMT019-coffee/menu-nitro.png" },
  { category: "Cold Brew", name: "Cold Brew Tonic",    price: "$7.0",  image: "/templates/OHMT019-coffee/menu-cold-brew-tonic.png" },
  { category: "Cold Brew", name: "Black Ice",          price: "$6.5",  image: "/templates/OHMT019-coffee/menu-black-ice.png" },
  // Tea
  { category: "Tea",       name: "Green Tea",          price: "$4.0",  image: "/templates/OHMT019-coffee/menu-green-tea.png" },
  { category: "Tea",       name: "Earl Grey",          price: "$4.5",  image: "/templates/OHMT019-coffee/menu-earl-grey.png" },
  { category: "Tea",       name: "Chamomile",          price: "$4.5",  image: "/templates/OHMT019-coffee/menu-chamomile.png" },
  { category: "Tea",       name: "Peppermint",         price: "$4.5",  image: "/templates/OHMT019-coffee/menu-peppermint.png" },
  { category: "Tea",       name: "Yuzu Tea",           price: "$5.0",  image: "/templates/OHMT019-coffee/menu-yuzu-tea.png" },
  // Ade
  { category: "Ade",       name: "Lemon Ade",          price: "$5.5",  image: "/templates/OHMT019-coffee/menu-lemon-ade.png" },
  { category: "Ade",       name: "Grapefruit Ade",     price: "$5.5",  image: "/templates/OHMT019-coffee/menu-grapefruit-ade.png" },
  { category: "Ade",       name: "Matcha Ade",         price: "$6.0",  image: "/templates/OHMT019-coffee/menu-matcha-ade.png" },
  // Food
  { category: "Food",      name: "Croissant",          price: "$4.5",  image: "/templates/OHMT019-coffee/menu-croissant.png" },
  { category: "Food",      name: "Pound Cake",         price: "$5.0",  image: "/templates/OHMT019-coffee/menu-pound-cake.png" },
  { category: "Food",      name: "Madeleine",          price: "$3.5",  image: "/templates/OHMT019-coffee/menu-madeleine.png" },
];

const categories: Category[] = ["All", "Coffee", "Cold Brew", "Tea", "Ade", "Food"];

export const MenuPreview = () => {
  const [active, setActive] = useState<Category>("All");
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const filtered = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

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
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-text)] uppercase tracking-[0.08em]">
            Our Menu
          </h2>
          <div className="flex items-center gap-6 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="relative pb-1 text-[11px] uppercase tracking-[0.15em] font-semibold transition-colors duration-200"
                style={{ color: active === cat ? "var(--color-text)" : "#90909A" }}
              >
                {cat}
                {active === cat && (
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

      <div
        ref={trackRef}
        className="flex gap-3 md:gap-4 px-6 md:px-12 overflow-x-auto select-none"
        style={{ cursor: "grab", scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {filtered.map((item, i) => (
          <motion.div
            key={item.name + active}
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
              <p className="font-heading text-[var(--color-text)] text-[12px] font-bold leading-snug">{item.name}</p>
              <span className="text-[var(--color-text-muted)] text-[12px] font-semibold">{item.price}</span>
            </div>
          </motion.div>
        ))}
        <div className="flex-none w-6 md:w-12" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-10 flex justify-center">
        <Link
          href="/en/templates/OHMT019-coffee-EN/menu"
          className="inline-flex items-center justify-center border border-[var(--color-text)] text-[var(--color-text)] px-10 py-3 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-[var(--color-text)] hover:text-white transition-colors duration-300"
        >
          View Full Menu &nbsp;&rarr;
        </Link>
      </div>
    </section>
  );
};
