"use client";
import React from "react";
import { notFound } from "next/navigation";
import { Header } from "../../_components/Header";
import { Footer } from "../../_components/Footer";
import { ProductCard } from "../../_components/ProductCard";
import { products, categories } from "../../data/data";
import Link from "next/link";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolved = React.use(params);
  const category = categories.find((c) => c.id === resolved.category);

  if (!category) {
    notFound();
  }

  const filtered = products.filter((p) => p.category === resolved.category);

  return (
    <React.Suspense fallback={null}>
      <>
        <Header />
        <TemplateWrapper theme={theme}>
        <main className="antialiased min-h-screen bg-white text-[var(--color-text)]">

          <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative z-10 text-center text-white px-6">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">{category.name}</h1>
              <Link
                href="/en/templates/OHMT017-multi-shop-EN/shop"
                className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
              >
                All Products &rarr;
              </Link>
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
                  No products found in this category.
                </p>
              )}
            </div>
          </section>

          <Footer />
        </main>
        </TemplateWrapper>
      </>
    </React.Suspense>
  );
}
