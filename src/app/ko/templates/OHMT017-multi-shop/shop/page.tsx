"use client";
import React, { useState, useEffect } from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { ProductCard } from "../_components/ProductCard";
import { getProducts, getCategories, ProductItem, CategoryItem } from "../data/medusa-adapter";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function ShopPageContent() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      getProducts(activeCategory ?? undefined),
      getCategories(),
    ]).then(([prods, cats]) => {
      setProducts(prods);
      setCategories(cats);
      setIsLoading(false);
    });
  }, [activeCategory]);

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
                href="/ko/templates/OHMT017-multi-shop/shop"
                className={`text-xs uppercase tracking-[0.2em] px-5 py-2 transition-colors duration-300 ${
                  !activeCategory
                    ? "bg-[var(--color-primary)] text-white"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                전체
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/ko/templates/OHMT017-multi-shop/shop/${cat.handle}`}
                  className={`text-xs uppercase tracking-[0.2em] px-5 py-2 transition-colors duration-300 ${
                    activeCategory === cat.handle
                      ? "bg-[var(--color-primary)] text-white"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
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
            {isLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="aspect-[3/4] bg-[var(--color-bg-secondary)] animate-pulse rounded" />
                ))}
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                    category={product.categoryName ?? product.category}
                    image={product.image}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-[var(--color-text-muted)] py-20">상품이 없습니다.</p>
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

