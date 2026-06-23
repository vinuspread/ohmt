"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Plus, Minus, ArrowLeft, ShieldCheck, Truck, RotateCcw, Globe } from "lucide-react";
import { products } from "../../data/data";
import themeJson from "../../theme.json";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";
import Link from "next/link";

import { TemplateWrapper } from "../../_components/TemplateWrapper";
import { Button } from "../../_components/ui/Button";

const theme = themeJson.theme;

function ProductDetailPageContent() {
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);
  const [quantity, setQuantity] = useState(1);
  const [openTab, setOpenTab] = useState<string | null>(null);

  const toggleTab = (tabName: string) => {
    setOpenTab(openTab === tabName ? null : tabName);
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const product = products.find((p) => String(p.id) === String(params.id));
  const typedProduct = product as any;

  if (!mounted) return null;
  if (!product) return <div className="pt-40 text-center uppercase font-bold">Product not found</div>;

  return (

    <TemplateWrapper theme={themeJson}>

      <main className="antialiased bg-white min-h-screen pt-20 md:pt-28 pb-12 selection:bg-black selection:text-white">
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[13px] font-bold uppercase mb-6 md:mb-10"
        >
          <ArrowLeft size={14} /> Back to Collection
        </Button>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 mb-12 md:mb-24">
          {/* Left: Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-3/5 lg:sticky lg:top-32 h-fit"
          >
            <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className={`max-w-full max-h-full object-contain ${theme.interaction.card_hover}`}
              />
            </div>
          </motion.div>

          {/* Right: Product Info */}
          <div className="flex flex-col lg:w-2/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="border-b border-black/5 pb-6 md:pb-8">
                <span className="text-[12px] font-bold text-[var(--color-secondary)] uppercase mb-2 block">
                  {product.category}
                </span>
                <h1 className="text-[32px] md:text-[44px] lg:text-[52px] font-bold text-[var(--color-text)] leading-[1.1] uppercase mb-4">
                  {product.name}
                </h1>
                <p className="text-[18px] md:text-[20px] font-semibold text-[var(--color-text)]">
                  {product.price}
                </p>
              </div>
              
              <div className="h-[1px] w-full bg-black/5 mb-8" />

              <p className="text-[15px] md:text-[16px] text-[var(--color-secondary)] leading-[1.4] mb-8 max-w-md uppercase font-medium">
                {product.desc}
              </p>

              {/* Product Details Grid */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-12 mb-10 md:mb-12">
                <div>
                  <h4 className="text-[13px] font-bold uppercase text-black/40 mb-2">Material</h4>
                  <p className="text-[14px] font-semibold text-[var(--color-text)] uppercase">{product.details?.material}</p>
                </div>
                <div>
                  <h4 className="text-[13px] font-bold uppercase text-black/40 mb-2">Dimensions</h4>
                  <p className="text-[14px] font-semibold text-[var(--color-text)] uppercase">{product.details?.dimensions}</p>
                </div>
                <div>
                  <h4 className="text-[13px] font-bold uppercase text-black/40 mb-2">Origin</h4>
                  <p className="text-[14px] font-semibold text-[var(--color-text)] uppercase">{product.details?.origin}</p>
                </div>
                <div>
                  <h4 className="text-[13px] font-bold uppercase text-black/40 mb-2">Shipping</h4>
                  <p className="text-[14px] font-semibold text-[var(--color-text)] uppercase">Worldwide</p>
                </div>
              </div>

              {/* Purchase Actions */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-6 border border-black/10 rounded-full px-6 py-3">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:opacity-50 transition-opacity">
                      <Minus size={16} />
                    </button>
                    <span className="text-[14px] font-bold w-4 text-center">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="hover:opacity-50 transition-opacity">
                      <Plus size={16} />
                    </button>
                  </div>
                  <Button
                    variant="primary"
                    onClick={() => router.push('/templates/OHMT004-furniture/cart')}
                    className={`flex-1 py-6 rounded-full text-[14px] font-bold uppercase shadow-xl active:scale-95 ${theme.interaction.button}`}
                  >
                    Add to Bag
                  </Button>
                </div>
              </div>

              {/* Accordion Tabs */}
              <div className="mt-12 border-t border-black/10">
                {/* Tab 1: Product Description */}
                {typedProduct.longDesc && (
                  <div className="border-b border-black/10">
                    <button
                      onClick={() => toggleTab('details')}
                      className="w-full flex items-center justify-between py-4 text-left font-bold text-sm uppercase tracking-wider text-[var(--color-text)] hover:opacity-70 transition-opacity"
                    >
                      <span>Design Story & Details</span>
                      <span className="text-lg">{openTab === 'details' ? '−' : '+'}</span>
                    </button>
                    {openTab === 'details' && (
                      <div className="pb-6 text-sm leading-relaxed text-[var(--color-secondary)] normal-case font-normal whitespace-pre-line">
                        {typedProduct.longDesc}
                      </div>
                    )}
                  </div>
                )}

                {/* Tab 2: Specs Table */}
                {product?.details && (
                  <div className="border-b border-black/10">
                    <button
                      onClick={() => toggleTab('specs')}
                      className="w-full flex items-center justify-between py-4 text-left font-bold text-sm uppercase tracking-wider text-[var(--color-text)] hover:opacity-70 transition-opacity"
                    >
                      <span>Dimensions & Material</span>
                      <span className="text-lg">{openTab === 'specs' ? '−' : '+'}</span>
                    </button>
                    {openTab === 'specs' && (
                      <div className="pb-6">
                        <table className="w-full text-sm normal-case">
                          <tbody>
                            {Object.entries(product.details).map(([key, val]) => (
                              <tr key={key} className="border-b border-black/5 last:border-0">
                                <td className="py-2.5 font-bold text-[var(--color-text)] uppercase text-[12px] w-1/3">{key}</td>
                                <td className="py-2.5 text-[var(--color-secondary)] w-2/3">{val}</td>
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
                      className="w-full flex items-center justify-between py-4 text-left font-bold text-sm uppercase tracking-wider text-[var(--color-text)] hover:opacity-70 transition-opacity"
                    >
                      <span>Reviews ({typedProduct.reviewsList.length})</span>
                      <span className="text-lg">{openTab === 'reviews' ? '−' : '+'}</span>
                    </button>
                    {openTab === 'reviews' && (
                      <div className="pb-6 space-y-6 normal-case">
                        {typedProduct.reviewsList.map((review: any) => (
                          <div key={review.id} className="border-b border-black/5 pb-4 last:border-0 last:pb-0">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-bold text-sm text-[var(--color-text)]">{review.reviewer}</span>
                              <span className="text-xs text-[var(--color-secondary)]">{review.date}</span>
                            </div>
                            <p className="text-sm leading-relaxed text-[var(--color-secondary)]">{review.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Tab 4: Delivery & Assembly */}
                <div className="border-b border-black/10">
                  <button
                    onClick={() => toggleTab('delivery')}
                    className="w-full flex items-center justify-between py-4 text-left font-bold text-sm uppercase tracking-wider text-[var(--color-text)] hover:opacity-70 transition-opacity"
                  >
                    <span>Delivery & Assembly</span>
                    <span className="text-lg">{openTab === 'delivery' ? '−' : '+'}</span>
                  </button>
                  {openTab === 'delivery' && (
                    <div className="pb-6 text-sm leading-relaxed text-[var(--color-secondary)] normal-case font-normal">
                      <p className="mb-2">White glove delivery available for all premium furniture items. Our specialized delivery team will transport the item, unbox it, assemble it in your room of choice, and remove all packaging materials.</p>
                      <p>Deliveries are typically scheduled within 1-2 weeks depending on location. We will coordinate directly with you to find a convenient delivery window.</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Visual Narrative Section */}
        <section className="mt-10 md:mt-24 pb-12 md:pb-24 border-t border-black/10">
          <div className="pt-12 md:pt-20 mb-10 md:mb-16 px-2">
            <span className="text-[12px] font-bold text-black/40 uppercase mb-3 block">Visual Narrative</span>
            <h2 className="text-[32px] sm:text-[clamp(2rem,7vw,5rem)] font-bold text-black leading-none uppercase">Atmos Here.</h2>
          </div>

          {/* 1. Primary Lifestyle Hero */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[21/9] w-full overflow-hidden mb-16 md:mb-24 bg-zinc-50 group rounded-2xl shadow-sm"
          >
            <img 
              src="/templates/OHMT004-furniture/lifestyle-narrative.png" 
              className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105"
              alt="Brand Lifestyle"
            />
            <div className="absolute inset-0 bg-black/5" />
            <div className="absolute bottom-12 left-12">
              <p className="text-[13px] font-bold text-white/40 uppercase">Vinuspread Archive 01</p>
            </div>
          </motion.div>

          {/* 2. Focused Storytelling Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square sm:aspect-[4/3] overflow-hidden flex items-center justify-center"
            >
              <img 
                src={product.image} 
                className="max-w-full max-h-full object-contain transition-transform duration-1000 hover:scale-105"
                alt="Product Detail"
              />
            </motion.div>
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-[1.1] text-[var(--color-text)]">
                Essential pieces<br/>for modern living.
              </h3>
              <div className="w-12 h-[2px] bg-black" />
              <p className="text-[14px] text-[var(--color-secondary)] leading-[1.4] font-normal max-w-md">
                Each piece is a dialogue between material and space. We curate experiences through form, ensuring that every curve and line contributes to a sense of serenity. {product.desc}
              </p>
              <div className="pt-4">
                <Link href="/en/templates/OHMT007-furniture-en" className="text-[13px] font-bold uppercase border-b border-black pb-1 hover:opacity-50 transition-opacity">
                  Explore More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </main>

    </TemplateWrapper>
);
}


export default function ProductDetailPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <ProductDetailPageContent {...props} />
    </React.Suspense>
  );
}
