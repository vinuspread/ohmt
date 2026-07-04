"use client";
import React from "react";
import { Header } from "../../_components/Header";
import { Footer } from "../../_components/Footer";
import { ProductCard } from "../../_components/ProductCard";
import { products, categories } from "../../data/data";
import Link from "next/link";
import { useParams } from "next/navigation";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

function CategoryPageContent() {
  const params = useParams();
  const categoryId = params.category as string;
  const category = categories.find((c) => c.id === categoryId);
  const filtered = products.filter((p) => p.category === categoryId);

  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
        <main className="antialiased min-h-screen pt-16 md:pt-20 bg-[var(--color-bg-secondary)] text-[var(--color-text)]">
          <section className="bg-[var(--color-bg-secondary)] py-16">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-muted)] mb-3">
                <Link href="/en/templates/OHMT017-multi-shop/shop" className="hover:text-[var(--color-text)] transition-colors">Shop</Link>
                {" / "}
                {category?.name ?? categoryId}
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">{category?.name ?? categoryId}</h1>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link
                  href="/en/templates/OHMT017-multi-shop/shop"
                  className="text-xs uppercase tracking-[0.2em] px-5 py-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
                >
                  All
                </Link>
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/en/templates/OHMT017-multi-shop/shop/${cat.id}`}
                    className={`text-xs uppercase tracking-[0.2em] px-5 py-2 transition-colors duration-300 ${
                      cat.id === categoryId
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
              {filtered.length > 0 ? (
                <>
                  <p className="text-xs text-[var(--color-text-muted)] mb-8">{filtered.length} products</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {filtered.map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-center text-[var(--color-text-muted)] py-20">No products found.</p>
              )}
            </div>
          </section>

          <Footer />
        </main>
      </TemplateWrapper>
    </>
  );
}

export default function CategoryPage() {
  return (
    <React.Suspense fallback={null}>
      <CategoryPageContent />
    </React.Suspense>
  );
}