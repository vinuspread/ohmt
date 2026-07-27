"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Star, ChevronLeft, Plus, Minus } from "lucide-react";
import { Header } from "../../_components/Header";
import { Footer } from "../../_components/Footer";
import { products } from "../../data/data";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

function ProductPageContent() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"desc" | "specs" | "reviews">("desc");

  if (!product) {
    return (
      <>
        <Header />
        <TemplateWrapper theme={theme}>
          <main className="min-h-screen pt-32 text-center text-[var(--color-text-muted)]">
            <p>Product not found.</p>
            <Link href="/en/templates/OHMT017-multi-shop/shop" className="mt-6 inline-block text-sm underline">Back to Shop</Link>
          </main>
        </TemplateWrapper>
      </>
    );
  }

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
        <main className="antialiased min-h-screen bg-white text-[var(--color-text)]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-24 md:pt-28 pb-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              <Link href="/en/templates/OHMT017-multi-shop/shop" className="hover:text-[var(--color-text)] transition-colors flex items-center gap-1">
                <ChevronLeft size={12} />Shop
              </Link>
              <span>/</span>
              <Link href={`/en/templates/OHMT017-multi-shop/shop/${product.category}`} className="hover:text-[var(--color-text)] transition-colors capitalize">
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-[var(--color-text)]">{product.name}</span>
            </div>
          </div>

          <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
              <div className="relative bg-[var(--color-bg-secondary)] aspect-[3/4] overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                {discount && (
                  <span className="absolute top-4 left-4 bg-[var(--color-sale)] text-white text-xs font-bold px-2.5 py-1 tracking-wide">
                    -{discount}%
                  </span>
                )}
              </div>

              <div className="md:sticky md:top-28">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-muted)] mb-3">{product.category}</p>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-3">{product.name}</h1>

                {product.rating && (
                  <div className="flex items-center gap-2 mb-5">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} size={13} fill={i <= Math.round(product.rating!) ? "var(--color-star)" : "none"} color={i <= Math.round(product.rating!) ? "var(--color-star)" : "var(--color-star-empty)"} strokeWidth={1.5} />
                      ))}
                    </div>
                    <span className="text-xs text-[var(--color-text-muted)]">{product.rating} ({product.reviewCount} reviews)</span>
                  </div>
                )}

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-2xl font-bold text-[var(--color-primary)]">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-base text-[var(--color-text-muted)] line-through">${product.originalPrice}</span>
                  )}
                </div>

                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-8">{product.description}</p>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center border border-[var(--color-border)]">
                    <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-3 py-2.5 hover:bg-[var(--color-bg-secondary)] transition-colors">
                      <Minus size={14} />
                    </button>
                    <span className="w-10 text-center text-sm font-medium">{qty}</span>
                    <button onClick={() => setQty(q => q + 1)} className="px-3 py-2.5 hover:bg-[var(--color-bg-secondary)] transition-colors">
                      <Plus size={14} />
                    </button>
                  </div>
                  <button className="flex-1 bg-[var(--color-primary)] text-white py-3 text-xs uppercase tracking-[0.2em] font-medium hover:opacity-85 transition-opacity">
                    Add to Cart
                  </button>
                </div>
                <button className="w-full border border-[var(--color-primary)] text-[var(--color-primary)] py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </section>

          <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20 border-t border-[var(--color-border)]">
            <div className="flex gap-8 border-b border-[var(--color-border)] mb-10">
              {(["desc", "specs", "reviews"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-xs uppercase tracking-[0.2em] font-medium transition-colors border-b-2 -mb-px ${
                    activeTab === tab ? "border-[var(--color-primary)] text-[var(--color-text)]" : "border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {tab === "desc" ? "Description" : tab === "specs" ? "Specifications" : `Reviews (${product.reviewsList?.length ?? 0})`}
                </button>
              ))}
            </div>

            {activeTab === "desc" && (
              <div className="max-w-2xl">
                {product.longDescription.split("\n\n").map((para, i) => (
                  <p key={i} className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5">{para}</p>
                ))}
              </div>
            )}

            {activeTab === "specs" && product.specs && (
              <div className="max-w-2xl divide-y divide-[var(--color-border)]">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="py-4 grid grid-cols-2 gap-4">
                    <span className="text-xs uppercase tracking-[0.1em] text-[var(--color-text-muted)]">{spec.label}</span>
                    <span className="text-sm text-[var(--color-text)]">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "reviews" && product.reviewsList && (
              <div className="max-w-2xl space-y-8">
                {product.reviewsList.map((review) => (
                  <div key={review.id} className="border-b border-[var(--color-border)] pb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{review.reviewer}</span>
                      <span className="text-xs text-[var(--color-text-muted)]">{review.date}</span>
                    </div>
                    <div className="flex gap-0.5 mb-3">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} size={12} fill={i <= review.rating ? "var(--color-star)" : "none"} color={i <= review.rating ? "var(--color-star)" : "var(--color-star-empty)"} strokeWidth={1.5} />
                      ))}
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          <Footer />
        </main>
      </TemplateWrapper>
    </>
  );
}

export default function ProductPage() {
  return (
    <React.Suspense fallback={null}>
      <ProductPageContent />
    </React.Suspense>
  );
}