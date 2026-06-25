"use client";
import React from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { ProductCard } from "../_components/ProductCard";
import { products, categories } from "../data/data";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function ShopPageContent() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen pt-16 md:pt-20 bg-[var(--color-bg-secondary)] text-[var(--color-text)]">
        <section className="bg-[var(--color-bg-secondary)] py-16">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">쇼핑</h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/ko/templates/multi-shop/shop"
                className={`text-xs uppercase tracking-[0.2em] px-5 py-2 transition-colors duration-300 ${
                  !activeCategory
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                전체
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/ko/templates/multi-shop/shop/${cat.id}`}
                  className={`text-xs uppercase tracking-[0.2em] px-5 py-2 transition-colors duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <p className="text-center text-[var(--color-text-muted)] py-20">
                상품이 없습니다.
              </p>
            )}
          </div>
        </section>

        <Footer />
      </main>
      </TemplateWrapper>
    </>
  );
}

export default function ShopPage() {
  return (
    <React.Suspense fallback={null}>
      <ShopPageContent />
    </React.Suspense>
  );
}

