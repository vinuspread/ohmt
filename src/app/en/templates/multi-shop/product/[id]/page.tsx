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

  const [openTab, setOpenTab] = useState<string | null>(null);
  const toggleTab = (tabName: string) => {
    setOpenTab(openTab === tabName ? null : tabName);
  };

  // Safe type access
  const typedProduct = product as any;

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
                        {product.rating} ({product.reviewCount} reviews)
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
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] block mb-3">Size</span>
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
                    Add to Cart
                  </button>

                  {/* Accordion Tabs */}
                  <div className="mt-12 border-t border-[var(--color-border)]">
                    {/* Tab 1: Details */}
                    {typedProduct.longDescription && (
                      <div className="border-b border-[var(--color-border)]">
                        <button
                          onClick={() => toggleTab('details')}
                          className="w-full flex items-center justify-between py-4 text-left font-semibold text-sm uppercase tracking-wider text-[var(--color-text)] hover:opacity-75 transition-opacity"
                        >
                          <span>Product Details</span>
                          <span className="text-lg">{openTab === 'details' ? '−' : '+'}</span>
                        </button>
                        {openTab === 'details' && (
                          <div className="pb-6 text-sm leading-relaxed text-[var(--color-text-muted)] whitespace-pre-line">
                            {typedProduct.longDescription}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tab 2: Specifications */}
                    {typedProduct.specs && typedProduct.specs.length > 0 && (
                      <div className="border-b border-[var(--color-border)]">
                        <button
                          onClick={() => toggleTab('specs')}
                          className="w-full flex items-center justify-between py-4 text-left font-semibold text-sm uppercase tracking-wider text-[var(--color-text)] hover:opacity-75 transition-opacity"
                        >
                          <span>Specifications</span>
                          <span className="text-lg">{openTab === 'specs' ? '−' : '+'}</span>
                        </button>
                        {openTab === 'specs' && (
                          <div className="pb-6">
                            <table className="w-full text-sm">
                              <tbody>
                                {typedProduct.specs.map((spec: any, idx: number) => (
                                  <tr key={idx} className="border-b border-gray-100 last:border-0">
                                    <td className="py-2.5 font-medium text-[var(--color-text)] w-1/3">{spec.label}</td>
                                    <td className="py-2.5 text-[var(--color-text-muted)] w-2/3">{spec.value}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tab 3: Reviews */}
                    {typedProduct.reviewsList && typedProduct.reviewsList.length > 0 && (
                      <div className="border-b border-[var(--color-border)]">
                        <button
                          onClick={() => toggleTab('reviews')}
                          className="w-full flex items-center justify-between py-4 text-left font-semibold text-sm uppercase tracking-wider text-[var(--color-text)] hover:opacity-75 transition-opacity"
                        >
                          <span>Customer Reviews ({typedProduct.reviewsList.length})</span>
                          <span className="text-lg">{openTab === 'reviews' ? '−' : '+'}</span>
                        </button>
                        {openTab === 'reviews' && (
                          <div className="pb-6 space-y-6">
                            {typedProduct.reviewsList.map((review: any) => (
                              <div key={review.id} className="border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                                <div className="flex items-center justify-between mb-1.5">
                                  <span className="font-semibold text-sm text-[var(--color-text)]">{review.reviewer}</span>
                                  <span className="text-xs text-[var(--color-text-muted)]">{review.date}</span>
                                </div>
                                <div className="flex gap-0.5 mb-2">
                                  {[1, 2, 3, 4, 5].map((starIdx) => (
                                    <Star
                                      key={starIdx}
                                      size={12}
                                      fill={starIdx <= review.rating ? "var(--color-star)" : "none"}
                                      color={starIdx <= review.rating ? "var(--color-star)" : "#D1D5DB"}
                                      strokeWidth={1.5}
                                    />
                                  ))}
                                </div>
                                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{review.text}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tab 4: Shipping & Returns */}
                    <div className="border-b border-[var(--color-border)]">
                      <button
                        onClick={() => toggleTab('shipping')}
                        className="w-full flex items-center justify-between py-4 text-left font-semibold text-sm uppercase tracking-wider text-[var(--color-text)] hover:opacity-75 transition-opacity"
                      >
                        <span>Shipping & Returns</span>
                        <span className="text-lg">{openTab === 'shipping' ? '−' : '+'}</span>
                      </button>
                      {openTab === 'shipping' && (
                        <div className="pb-6 text-sm leading-relaxed text-[var(--color-text-muted)]">
                          <p className="mb-2">Free standard shipping on all orders over $150 USD. Orders are processed within 24-48 hours and typically delivered within 3-5 business days.</p>
                          <p>We accept returns of unused items in original packaging within 30 days of delivery. Return labels can be easily generated through our online return portal.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {related.length > 0 && (
            <section className="bg-[var(--color-bg-secondary)] py-20">
              <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <h2 className="text-2xl font-bold tracking-tight mb-10">You May Also Like</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {related.map((item) => (
                    <Link key={item.id} href={`/en/templates/OHMT017-multi-shop-EN/product/${item.id}`} className="group block">
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
