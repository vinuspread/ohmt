"use client";

import Link from "next/link";

export function CategoryBanners() {

  const categories = [
    { label: "스니커즈", img: "/templates/sneaker/cat-sneakers.jpg" },
    { label: "부츠", img: "/templates/sneaker/cat-boots.jpg" },
    { label: "포멀", img: "/templates/sneaker/category-formal.jpg" },
    { label: "러닝", img: "/templates/sneaker/category-running.jpg" },
    { label: "옥스포드", img: "/templates/sneaker/product-aura.jpg" },
    { label: "스포츠", img: "/templates/sneaker/cat-sports.jpg" },
    { label: "하이넥", img: "/templates/sneaker/cat-highneck.jpg" },
    { label: "로퍼", img: "/templates/sneaker/cat-loafers.jpg" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[1.6rem] font-black tracking-[-0.02em] uppercase">카테고리</h2>
          <Link href="/ko/templates/OHMT005-sneaker-KO/shop-all" className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-black/50 hover:text-black transition-colors border-b border-black/20 pb-0.5">
            전체 보기
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <Link key={cat.label} href="/ko/templates/OHMT005-sneaker-KO/shop-all" className="group relative overflow-hidden aspect-square bg-[var(--color-bg-secondary)]">
              <img
                src={cat.img}
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <span className="absolute bottom-0 left-0 right-0 bg-white text-black text-[0.8rem] font-bold uppercase tracking-[0.08em] text-center py-2.5">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
