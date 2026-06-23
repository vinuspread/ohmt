"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { products } from "../data/data";
import themeData from "../theme.json";
import Link from "next/link";

const theme = themeData.theme;


const ProductCard = ({ product, index }: { product: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: (index % 4) * 0.08,
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }}
      className="group cursor-pointer"
    >
      <Link href={`/ko/templates/OHMT008-furniture-kr/product/${product.id}`}>
        <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden mb-4 sm:mb-8 flex items-center justify-center">
          <motion.img
            src={product.image}
            alt={product.name}
            className={`max-w-full max-h-full object-contain ${theme.interaction.card_hover}`}
          />

          {/* Black Iconic Button on Hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <motion.div
              className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-all duration-300 active:scale-95 pointer-events-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.97 }}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        </div>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          delay: (index % 4) * 0.08 + 0.1,
          duration: 0.5,
          ease: [0.23, 1, 0.32, 1]
        }}
        className="px-2 mt-3 flex flex-col gap-1"
      >
        <Link href={`/ko/templates/OHMT008-furniture-kr/product/${product.id}`} className="min-w-0">
          <h3 className="text-[17px] font-bold text-[var(--color-text)] group-hover:text-black transition-colors uppercase">{product.name}</h3>
        </Link>
        <p className={`text-[13px] text-zinc-500 font-normal leading-relaxed w-full ${theme.typography.body.style}`}>
          {product.desc}
        </p>
        <span className="text-[16px] font-bold text-[var(--color-text)] mt-1">{product.price}</span>
      </motion.div>
    </motion.div>
  );
};

export const ProductGrid = () => {
  return (
    <section className="bg-white py-12 md:py-24 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 lg:mb-24 gap-4 md:gap-12 border-b border-black/5 pb-6 md:pb-12">
          <div className="max-w-2xl">
            <span className="text-[12px] md:text-[13px] font-bold text-[var(--color-primary)] uppercase mb-2 md:mb-6 block">{"컬렉션"}</span>
            <h2 className="text-[24px] sm:text-[clamp(1.5rem,3.5vw,3.5rem)] font-bold text-[var(--color-text)] leading-[1.5] sm:leading-[1.5]">
              {"삶의 격을 높이는"} <br />
              <span className="text-[var(--color-secondary)]">{"본질적인 오브제."}</span>
            </h2>
          </div>
          <button className="text-[13px] md:text-[15px] font-bold text-[var(--color-text)] border-b-2 border-black pb-1 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors whitespace-nowrap self-start sm:self-auto">
            {"모든 상품 보기"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-8">
          {products.slice(0, 8).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
