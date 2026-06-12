"use client";
import { useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";


export const products = [
  { id: "sn-001", name: "Air Stride Pro", price: 240, originalPrice: 280, rating: 4.5, reviews: 128, img: "/templates/sneaker/product-1.jpg", badge: "베스트셀러" },
  { id: "sn-002", name: "Urban Classic", price: 180, originalPrice: null, rating: 4.3, reviews: 96, img: "/templates/sneaker/product-2.jpg", badge: null },
  { id: "sn-003", name: "Shadow Runner", price: 320, originalPrice: 380, rating: 4.7, reviews: 214, img: "/templates/sneaker/product-3.jpg", badge: "20% 할인" },
  { id: "sn-004", name: "Velocity Edge", price: 195, originalPrice: null, rating: 4.2, reviews: 73, img: "/templates/sneaker/product-4.jpg", badge: null },
  { id: "sn-005", name: "Pearl Low", price: 160, originalPrice: 190, rating: 4.4, reviews: 182, img: "/templates/sneaker/product-5.jpg", badge: "15% 할인" },
  { id: "sn-006", name: "Terra Boot", price: 290, originalPrice: null, rating: 4.6, reviews: 104, img: "/templates/sneaker/product-6.jpg", badge: "신상품" },
  { id: "sn-007", name: "High Volt", price: 215, originalPrice: 250, rating: 4.1, reviews: 58, img: "/templates/sneaker/product-7.jpg", badge: null },
  { id: "sn-008", name: "Neon Sprint", price: 175, originalPrice: null, rating: 4.5, reviews: 239, img: "/templates/sneaker/product-8.jpg", badge: null },
  { id: "sn-009", name: "Obsidian Hike", price: 340, originalPrice: 400, rating: 4.8, reviews: 311, img: "/templates/sneaker/product-9.jpg", badge: "15% 할인" },
  { id: "sn-010", name: "Oxford Slim", price: 260, originalPrice: null, rating: 4.3, reviews: 87, img: "/templates/sneaker/product-10.jpg", badge: null },
  { id: "sn-011", name: "Trail Burst", price: 185, originalPrice: 220, rating: 4.4, reviews: 142, img: "/templates/sneaker/product-11.jpg", badge: "15% 할인" },
  { id: "sn-012", name: "Apex Lite", price: 210, originalPrice: null, rating: 4.6, reviews: 196, img: "/templates/sneaker/product-12.jpg", badge: "신상품" },
  { id: "sn-013", name: "Sport Flex", price: 155, originalPrice: 185, rating: 4.2, reviews: 63, img: "/templates/sneaker/product-13.jpg", badge: null },
  { id: "sn-014", name: "Loafer Classic", price: 230, originalPrice: null, rating: 4.5, reviews: 77, img: "/templates/sneaker/product-14.jpg", badge: null },
  { id: "sn-015", name: "Carbon Run", price: 280, originalPrice: 320, rating: 4.7, reviews: 188, img: "/templates/sneaker/product-15.jpg", badge: "12% 할인" },
  { id: "sn-016", name: "Street Low", price: 145, originalPrice: null, rating: 4.0, reviews: 44, img: "/templates/sneaker/product-16.jpg", badge: null },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={12}
          className={i <= Math.round(rating) ? "fill-black text-black" : "fill-black/20 text-black/20"}
        />
      ))}
      <span className="text-[0.7rem] text-black/50 ml-1">{rating}</span>
    </div>
  );
}

function getBadgeStyle(badge: string) {
  const normalized = badge.toLowerCase();
  if (normalized.includes("best") || normalized.includes("베스트")) {
    return "bg-orange-50 text-orange-600 border border-orange-200/40";
  }
  if (normalized.includes("new") || normalized.includes("신상")) {
    return "bg-emerald-50 text-emerald-600 border border-emerald-200/40";
  }
  if (normalized.includes("off") || normalized.includes("%") || normalized.includes("할인")) {
    return "bg-red-50 text-red-600 border border-red-200/40";
  }
  return "bg-zinc-50 text-zinc-600 border border-zinc-200/40";
}

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <Link href={`/ko/templates/sneaker/product/${product.id}`} className="group block border border-black/10 hover:border-black transition-colors duration-200">
      <div className="relative overflow-hidden aspect-square bg-[var(--color-bg-secondary)]">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded-[3px] backdrop-blur-sm ${getBadgeStyle(product.badge)}`}>
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-[0.88rem] font-bold text-black mb-1.5 tracking-[-0.03em]">{product.name}</h3>
        <StarRating rating={product.rating} />
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[0.95rem] font-black text-black">${product.price} USD</span>
          {product.originalPrice && (
            <span className="text-[0.8rem] text-black/30 line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

interface Props {
  title: string;
  items?: typeof products;
  limit?: number;
}

export function ProductGrid({ title, items, limit = 8 }: Props) {
  const [page, setPage] = useState(0);
  const source = items ?? products;
  const pages = Math.ceil(source.length / limit);
  const visible = source.slice(page * limit, page * limit + limit);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[1.6rem] font-black tracking-[-0.03em] uppercase">{title}</h2>
          <Link href="/ko/templates/sneaker/shop-all" className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-black/50 hover:text-black transition-colors border-b border-black/20 pb-0.5">
            전체 보기
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visible.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        {pages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-8 h-8 text-[0.78rem] font-bold border transition-colors ${page === i ? "bg-black text-white border-black" : "bg-white text-black border-black/20 hover:border-black"}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
