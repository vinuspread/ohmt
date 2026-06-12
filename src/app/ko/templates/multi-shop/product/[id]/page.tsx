"use client";
import React, { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "../../_components/Header";
import { Footer } from "../../_components/Footer";
import { products } from "../../data/data";
import { Star } from "lucide-react";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolved = React.use(params);
  const product = products.find((p) => p.id === resolved.id);

  if (!product) {
    notFound();
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const sizes = ["XS", "S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState("M");

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <React.Suspense fallback={null}>
      <>
        <Header />
        <TemplateWrapper theme={theme}>
        <main className="antialiased min-h-screen pt-16 md:pt-20 bg-white text-[var(--color-text)]">

          <section className="bg-white py-12 md:py-20">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <div className="aspect-[3/4] bg-[var(--color-bg-secondary)] overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {discount && (
                    <span className="absolute top-4 left-4 bg-[var(--color-sale)] text-white text-xs font-bold px-2.5 py-1 tracking-wide">
                      -{discount}%
                    </span>
                  )}
                </div>

                <div className="flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">{product.category}</span>
                  <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3">{product.name}</h1>

                  {product.rating && (
                    <div className="flex items-center gap-2 mt-4">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            size={14}
                            fill={i <= Math.round(product.rating) ? "var(--color-star)" : "none"}
                            color={i <= Math.round(product.rating) ? "var(--color-star)" : "#D1D5DB"}
                            strokeWidth={1.5}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-[var(--color-text-muted)]">
                        {product.rating} ({product.reviewCount}개 리뷰)
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mt-4">
                    <span className="text-2xl font-bold text-[var(--color-primary)]">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-[var(--color-text-muted)] line-through">${product.originalPrice}</span>
                    )}
                    {discount && (
                      <span className="bg-[var(--color-sale)] text-white text-[10px] font-bold px-2 py-0.5 tracking-wide">
                        -{discount}%
                      </span>
                    )}
                  </div>

                  <p className="text-base leading-relaxed text-[var(--color-text-muted)] mt-8">
                    {product.description}
                  </p>

                  <div className="mt-8">
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] block mb-3">사이즈</span>
                    <div className="flex gap-2">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`w-10 h-10 text-xs font-medium border transition-[transform,colors] duration-160 ease-out active:scale-[0.95] ${
                            selectedSize === size
                              ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
                              : 'border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)]'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-[var(--color-primary)] text-white py-4 mt-10 text-sm uppercase tracking-[0.2em] font-semibold hover:bg-black/80 transition-[transform,colors] duration-160 ease-out active:scale-[0.97]">
                    장바구니 담기
                  </button>
                </div>
              </div>
            </div>
          </section>

          {related.length > 0 && (
            <section className="bg-[var(--color-bg-secondary)] py-20">
              <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <h2 className="text-2xl font-bold tracking-tight mb-10">추천 상품</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {related.map((item) => (
                    <Link key={item.id} href={`/ko/templates/multi-shop/product/${item.id}`} className="group block">
                      <div className="aspect-[3/4] bg-[var(--color-bg-secondary)] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <p className="text-sm font-medium mt-3">{item.name}</p>
                      <p className="text-base font-bold mt-1">${item.price}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          <Footer />
        </main>
        </TemplateWrapper>
      </>
    </React.Suspense>
  );
}

