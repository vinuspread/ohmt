"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import { ArrowLeft, ShoppingBag, Heart } from "lucide-react";
import theme from "../../theme.json";

const PRODUCTS = [
  { id: 1, name: "WOOL BUCKET HAT", price: "$120.00", image: "/templates/OHMT001-fashion/wool-hat.png", material: "Pure New Wool", color: "Charcoal Black", description: "Sculpted from premium Italian wool. A modern reinterpretation of a timeless silhouette. Features a structured brim and breathable cotton lining." },
  { id: 2, name: "CLASSIC TRENCH COAT", price: "$850.00", image: "/templates/OHMT001-fashion/trench-coat.png", material: "Cotton Gabardine", color: "Ivory", description: "Double-breasted trench coat crafted from densely woven cotton gabardine. Raglan sleeves, storm flap, and buckle strap detailing at collar and cuffs." },
  { id: 3, name: "MINIMALIST BACKPACK", price: "$350.00", image: "/templates/OHMT001-fashion/backpack.png", material: "Waxed Canvas & Leather", color: "Black", description: "A refined carry solution with a single main compartment, padded laptop sleeve, and hand-finished leather trim. Minimal hardware, maximum utility." },
  { id: 4, name: "PREMIUM LEATHER BOOTS", price: "$480.00", image: "/templates/OHMT001-fashion/boots.png", material: "Full-Grain Calf Leather", color: "Dark Chestnut", description: "Goodyear-welted boots with a Blake stitch construction. Vegetable-tanned leather upper, leather sole, and a subtle square toe profile." },
  { id: 5, name: "SILK EVENING DRESS", price: "$1,200.00", image: "/templates/OHMT001-fashion/silk-dress.png", material: "18 Momme Silk", color: "Midnight Blue", description: "Floor-length bias-cut dress in liquid silk satin. Adjustable shoulder ties and a draped cowl back. Each piece cut individually." },
  { id: 6, name: "COTTON BASICS TEE", price: "$65.00", image: "/templates/OHMT001-fashion/basic-tee.png", material: "Supima Cotton Jersey", color: "White", description: "Heavyweight 260gsm Supima cotton. Ribbed crewneck, reinforced shoulder seams, and a boxy fit that holds its shape wash after wash." },
];

const SIZES = ["XS", "S", "M", "L", "XL"];

function ProductDetailContent() {
  const params = useParams();
  const product = PRODUCTS.find(p => p.id === Number(params.id));

  if (!product) {
    return (
      <TemplateWrapper theme={theme}>
        <main className="min-h-screen bg-white">
          <Navbar />
          <div className="flex flex-col items-center justify-center pt-[192px] pb-24">
            <p className="text-[15px] font-bold uppercase tracking-[0.2em] text-black/40 mb-6">Product not found</p>
            <Link href="/en/templates/OHMT001-fashion" className="group flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em] border-b border-black/20 pb-1 hover:border-black/70 transition-all">
              <ArrowLeft size={14} /> Return to shop
            </Link>
          </div>
          <Footer />
        </main>
      </TemplateWrapper>
    );
  }

  return (
    <TemplateWrapper theme={theme}>
      <main className="min-h-screen bg-white selection:bg-black selection:text-white">
        <Navbar />
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-[120px] md:pt-[160px] pb-16 md:pb-24">
          <Link href="/en/templates/OHMT001-fashion" className="group inline-flex items-center gap-2 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-all mb-10 md:mb-16">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to collection
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] bg-[#F9F9F9] overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-black/30 mb-4">New Arrival</p>
              <h1 className="text-[28px] sm:text-[3.5vw] font-bold tracking-tighter uppercase leading-none mb-4">{product.name}</h1>
              <p className="text-[16px] md:text-[20px] font-bold text-black/60 mb-8">{product.price}</p>

              <div className="space-y-4 mb-8 pb-8 border-b border-black/5">
                <p className="text-[14px] text-black/70 leading-relaxed">{product.description}</p>
                <div className="flex gap-8 text-[13px]">
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-black/30 mb-1">Material</span>
                    <span className="font-medium">{product.material}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-black/30 mb-1">Color</span>
                    <span className="font-medium">{product.color}</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 mb-4">Size</p>
                <div className="flex gap-3">
                  {SIZES.map((s) => (
                    <button
                      key={s}
                      className="w-12 h-12 border border-black/10 text-[12px] font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-black text-white text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] py-4 md:py-5 hover:bg-black/80 transition-all duration-300 flex items-center justify-center gap-3">
                  <ShoppingBag size={16} strokeWidth={1.5} />
                  Add to bag
                </button>
                <button className="w-14 md:w-16 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                  <Heart size={18} strokeWidth={1.5} />
                </button>
              </div>

              <div className="mt-10 pt-8 border-t border-black/5">
                <p className="text-[15px] text-black/40 leading-relaxed">
                  Complimentary shipping on orders over $500. Free returns within 30 days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function ProductPage() {
  return (
    <React.Suspense fallback={null}>
      <ProductDetailContent />
    </React.Suspense>
  );
}
