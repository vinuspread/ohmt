"use client";
import React, { useState, use } from "react";
import Link from "next/link";
import { Star, ArrowLeft, ShoppingBag, Heart } from "lucide-react";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import theme from "../../theme.json";
import { Header } from "../../_components/layout/Header";
import { Footer } from "../../_components/layout/Footer";
import { products } from "../../_components/sections/ProductGrid";

const sizes = [6, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13];

function ProductPageContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find(p => p.id === id) ?? products[0];
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedImg, setSelectedImg] = useState(0);
  const [openTab, setOpenTab] = useState<string | null>(null);

  const toggleTab = (tabName: string) => {
    setOpenTab(openTab === tabName ? null : tabName);
  };

  const typedProduct = product as any;
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const imgs = [product.img, ...related.slice(0, 2).map(p => p.img)];

  return (
    <TemplateWrapper theme={theme}>
      <div className="bg-white text-black selection:bg-black selection:text-white font-sans">
        <Header />
        <main className="antialiased pt-20">
          {/* Breadcrumb */}
          <div className="max-w-[1440px] mx-auto px-6 py-4 border-b border-black/10">
            <Link href="/en/templates/OHMT005-sneaker-EN/shop-all" className="inline-flex items-center gap-2 text-[0.78rem] text-black/50 hover:text-black transition-colors">
              <ArrowLeft size={14} /> Back to Shop
            </Link>
          </div>

          {/* Product */}
          <div className="max-w-[1440px] mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
            {/* Images */}
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                {imgs.map((img, i) => (
                  <button key={i} onClick={() => setSelectedImg(i)}
                    className={`w-16 h-16 border overflow-hidden transition-colors ${selectedImg === i ? "border-black" : "border-black/10"}`}>
                    <img loading="lazy" src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <div className="flex-1 aspect-square bg-[var(--color-bg-secondary)] overflow-hidden">
                <img loading="lazy" src={imgs[selectedImg]} alt={product.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Info */}
            <div className="sticky top-24">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black/40 block mb-3">Footwear</span>
              <h1 className="text-[2rem] font-black tracking-[-0.02em] uppercase mb-3">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={13} className={i <= Math.round(product.rating) ? "fill-black text-black" : "fill-black/20 text-black/20"} />)}
                </div>
                <span className="text-[0.78rem] text-black/50">{product.rating} ({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-black/10">
                <span className="text-[1.6rem] font-black">${product.price} USD</span>
                {product.originalPrice && (
                  <span className="text-[1rem] text-black/30 line-through">${product.originalPrice}</span>
                )}
              </div>

              {/* Size */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[0.82rem] font-bold uppercase tracking-[0.08em]">Select Size (US)</span>
                  <button className="text-[0.75rem] text-black/40 underline">Size Guide</button>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {sizes.map(s => (
                    <button key={s} onClick={() => setSelectedSize(s)}
                      className={`py-2.5 text-[0.78rem] font-bold border transition-colors ${selectedSize === s ? "bg-black text-white border-black" : "bg-white text-black border-black/20 hover:border-black"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mb-6">
                <button className="flex-1 bg-black text-white text-[0.82rem] font-bold uppercase tracking-[0.08em] py-4 flex items-center justify-center gap-2 hover:bg-black/80 transition-colors">
                  <ShoppingBag size={16} /> Add to Bag
                </button>
                <button className="w-14 h-14 border border-black/20 flex items-center justify-center hover:border-black transition-colors">
                  <Heart size={18} />
                </button>
              </div>

              {/* Accordion Tabs */}
              <div className="mt-8 border-t border-black/10">
                {/* Tab 1: Details */}
                {typedProduct.longDesc && (
                  <div className="border-b border-black/10">
                    <button
                      onClick={() => toggleTab('details')}
                      className="w-full flex items-center justify-between py-3.5 text-left font-bold text-[0.78rem] uppercase tracking-[0.1em] text-black hover:opacity-60 transition-opacity"
                    >
                      <span>Product Details</span>
                      <span className="text-sm">{openTab === 'details' ? '−' : '+'}</span>
                    </button>
                    {openTab === 'details' && (
                      <div className="pb-5 text-[0.8rem] leading-relaxed text-black/60 whitespace-pre-line font-medium">
                        {typedProduct.longDesc}
                      </div>
                    )}
                  </div>
                )}

                {/* Tab 2: Specs */}
                {typedProduct.specs && typedProduct.specs.length > 0 && (
                  <div className="border-b border-black/10">
                    <button
                      onClick={() => toggleTab('specs')}
                      className="w-full flex items-center justify-between py-3.5 text-left font-bold text-[0.78rem] uppercase tracking-[0.1em] text-black hover:opacity-60 transition-opacity"
                    >
                      <span>Specifications</span>
                      <span className="text-sm">{openTab === 'specs' ? '−' : '+'}</span>
                    </button>
                    {openTab === 'specs' && (
                      <div className="pb-5">
                        <table className="w-full text-[0.8rem] text-black/60">
                          <tbody>
                            {typedProduct.specs.map((spec: any, idx: number) => (
                              <tr key={idx} className="border-b border-black/5 last:border-0">
                                <td className="py-2 font-bold text-black uppercase text-[0.7rem] tracking-[0.05em] w-1/3">{spec.label}</td>
                                <td className="py-2 w-2/3">{spec.value}</td>
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
                  <div className="border-b border-black/10">
                    <button
                      onClick={() => toggleTab('reviews')}
                      className="w-full flex items-center justify-between py-3.5 text-left font-bold text-[0.78rem] uppercase tracking-[0.1em] text-black hover:opacity-60 transition-opacity"
                    >
                      <span>Reviews ({typedProduct.reviewsList.length})</span>
                      <span className="text-sm">{openTab === 'reviews' ? '−' : '+'}</span>
                    </button>
                    {openTab === 'reviews' && (
                      <div className="pb-5 space-y-4 text-[0.8rem] text-black/60">
                        {typedProduct.reviewsList.map((review: any) => (
                          <div key={review.id} className="border-b border-black/5 pb-3 last:border-0 last:pb-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-bold text-black">{review.reviewer}</span>
                              <span className="text-[0.72rem] text-black/40">{review.date}</span>
                            </div>
                            <div className="flex gap-0.5 mb-1.5">
                              {[1, 2, 3, 4, 5].map((starIdx) => (
                                <Star
                                  key={starIdx}
                                  size={9}
                                  fill={starIdx <= review.rating ? "black" : "none"}
                                  color={starIdx <= review.rating ? "black" : "#D1D5DB"}
                                  strokeWidth={1.5}
                                />
                              ))}
                            </div>
                            <p className="leading-relaxed">{review.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Tab 4: Shipping & Returns */}
                <div className="border-b border-black/10">
                  <button
                    onClick={() => toggleTab('shipping')}
                    className="w-full flex items-center justify-between py-3.5 text-left font-bold text-[0.78rem] uppercase tracking-[0.1em] text-black hover:opacity-60 transition-opacity"
                  >
                    <span>Shipping & Returns</span>
                    <span className="text-sm">{openTab === 'shipping' ? '−' : '+'}</span>
                  </button>
                  {openTab === 'shipping' && (
                    <div className="pb-5 text-[0.8rem] leading-relaxed text-black/60 font-medium">
                      <p className="mb-2.5">Free standard shipping on orders over $200. Orders are processed within 24 hours and delivered within 2-4 business days.</p>
                      <p>Easy 30-day hassle-free returns are accepted on all unworn items in original packaging.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="border-t border-black/10 py-16">
            <div className="max-w-[1440px] mx-auto px-6">
              <h2 className="text-[1.3rem] font-black uppercase tracking-[-0.02em] mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {related.map(p => (
                  <Link key={p.id} href={`/en/templates/OHMT005-sneaker-EN/product/${p.id}`} className="group block border border-black/10 hover:border-black transition-colors">
                    <div className="aspect-square overflow-hidden bg-[var(--color-bg-secondary)]">
                      <img loading="lazy" src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="p-3">
                      <p className="text-[0.85rem] font-bold mb-1">{p.name}</p>
                      <p className="text-[0.9rem] font-black">${p.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </TemplateWrapper>
  );
}


export default function ProductPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <ProductPageContent {...props} />
    </React.Suspense>
  );
}
