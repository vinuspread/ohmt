"use client";
import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  category: string;
  tag?: string;
  image: string;
}

export const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  category,
  image,
}: ProductCardProps) => {
  const discount =
    originalPrice ? Math.round((1 - price / originalPrice) * 100) : null;

  return (
    <Link href={`/en/templates/OHMT017-multi-shop-EN/product/${id}`} className="group block active:scale-[0.98] transition-transform duration-160 ease-out">
      <div className="overflow-hidden bg-[var(--color-bg-secondary)] aspect-[3/4] relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
        />

        {discount && (
          <span className="absolute top-3 left-3 bg-[var(--color-sale)] text-white text-[10px] font-bold px-2 py-1 tracking-wide">
            -{discount}%
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 bg-[var(--color-primary)] py-3 text-center translate-y-full motion-safe:group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <span className="text-white text-[11px] uppercase tracking-[0.2em] font-medium">
            Quick View
          </span>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          {category}
        </span>
        <h3 className="text-sm font-medium text-[var(--color-text)] leading-snug">
          {name}
        </h3>

        {rating && (
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={11}
                  fill={i <= Math.round(rating) ? "var(--color-star)" : "none"}
                  color={i <= Math.round(rating) ? "var(--color-star)" : "#D1D5DB"}
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <span className="text-[10px] text-[var(--color-text-muted)]">
              ({reviewCount})
            </span>
          </div>
        )}

        <div className="flex items-center gap-2 pt-0.5">
          <span className="text-base font-bold text-[var(--color-primary)]">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-sm text-[var(--color-text-muted)] line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
