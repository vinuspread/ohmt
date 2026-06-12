"use client";

import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Heart, ShoppingBag, Star, Check } from "lucide-react";
import Navbar from "../../_components/Navbar";

import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import Button from "../../_components/ui/Button";

const products: Record<string, any> = {
  "1": {
    name: "Diamond Solitaire Ring",
    price: "$2,250",
    rating: 4.8,
    reviews: 127,
    img: "/templates/jewelry/jewelry-ring.png",
    category: "Engagement",
    desc: "A timeless symbol of elegance and sophistication. This solitaire ring features a stunning diamond that captures light beautifully from every angle.",
    details: [
      { label: "Stone Type", value: "Natural Diamond" },
      { label: "Carat Weight", value: "1.50 CT" },
      { label: "Metal", value: "18K White Gold" },
      { label: "Size Range", value: "3-13" },
      { label: "Setting", value: "Solitaire" }
    ],
    features: [
      "Certified by GIA",
      "Lifetime warranty",
      "Free cleaning and maintenance",
      "Expert craftsmanship"
    ]
  },
  "2": {
    name: "Radiant Pearl Pendant",
    price: "$1,850",
    rating: 4.9,
    reviews: 93,
    img: "/templates/jewelry/jewelry-pendant.png",
    category: "Necklace",
    desc: "Exquisite pearl pendant radiating timeless elegance. Each piece is hand-selected for its lustrous quality and perfect form.",
    details: [
      { label: "Pearl Type", value: "South Sea" },
      { label: "Size", value: "12mm" },
      { label: "Metal", value: "18K Yellow Gold" },
      { label: "Length", value: "16-18 inches" },
      { label: "Origin", value: "Australian Waters" }
    ],
    features: [
      "Authentic South Sea pearls",
      "Adjustable chain",
      "Certificate of authenticity",
      "Luxury gift packaging"
    ]
  },
  "5": {
    name: "Classic Round Brilliant",
    price: "$3,500",
    rating: 4.9,
    reviews: 234,
    img: "/templates/jewelry/jewelry-ring.png",
    category: "Engagement",
    desc: "The quintessential choice for engagements. This classic round brilliant diamond showcases exceptional brilliance and fire.",
    details: [
      { label: "Stone Type", value: "Natural Diamond" },
      { label: "Carat Weight", value: "2.00 CT" },
      { label: "Cut Grade", value: "Excellent" },
      { label: "Metal", value: "Platinum" },
      { label: "Clarity", value: "VS1" }
    ],
    features: [
      "AGS Certified",
      "Hearts and Arrows cut",
      "Lifetime maintenance",
      "Insurance appraisal included"
    ]
  }
};

function ProductDetailPageContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const product = products[id];

  if (!product) {
    return (
      <TemplateWrapper theme={theme}>
        <main className="antialiased bg-[var(--color-bg)] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif mb-4">Product not found</h1>
          <Link href="/jewelry" className="text-[var(--color-primary)] hover:underline">
            Back to Jewelry
          </Link>
        </div>
      </main>
      </TemplateWrapper>
);
  }

  return (
    <main className="antialiased bg-[var(--color-bg)] selection:bg-[var(--color-primary)] selection:text-white font-sans text-neutral-900 min-h-screen">
      <Navbar />

      <div className="pt-12 md:pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-32 px-6 max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Image Section */}
          <div className="sticky top-32">
            <div className="aspect-[3/4] mb-8 overflow-hidden bg-white border border-neutral-100">
              <img
                src={product.img}
                className="w-full h-full object-cover"
                alt={product.name}
              />
            </div>
            <Button variant="ghost" className="w-full py-3 text-center text-[13px] uppercase tracking-[0.3em] font-bold">
              View 360°
            </Button>
          </div>

          {/* Details Section */}
          <div className="space-y-8">
            <div>
              <span className="text-[13px] uppercase font-bold tracking-[0.6em] text-[var(--color-primary)] block mb-4">{product.category}</span>
              <h1 className="text-5xl font-serif tracking-tight mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[var(--color-primary)] text-[var(--color-primary)]" />
                  ))}
                </div>
                <span className="text-[13px] text-neutral-400 font-medium">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-[20px] font-serif tracking-tight mb-6 text-neutral-800">{product.price}</p>
              <p className="text-sm leading-[1.4] text-neutral-600 mb-8">{product.desc}</p>
            </div>

            {/* Details Table */}
            <div className="space-y-4 border-y border-neutral-200 py-8">
              {product.details.map((detail: { label: string; value: string }, i: number) => (
                <div key={i} className="flex justify-between text-[13px]">
                  <span className="text-neutral-500 uppercase tracking-[0.2em] font-bold">{detail.label}</span>
                  <span className="text-neutral-800 font-medium">{detail.value}</span>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-3">
              {product.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-3 text-sm text-neutral-700">
                  <Check size={16} className="text-[var(--color-primary)] flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-8">
              <Button variant="primary">
                Add to Cart
              </Button>
              <Button variant="ghost" className="px-6 py-4">
                <Heart size={20} />
              </Button>
            </div>

            {/* Additional Info */}
            <div className="bg-white border border-neutral-200 p-6 rounded-sm text-[12px] space-y-3">
              <p className="text-neutral-600">
                <strong className="text-neutral-900">Free Shipping</strong> on orders over $500
              </p>
              <p className="text-neutral-600">
                <strong className="text-neutral-900">30-Day Returns</strong> for unworn items in original packaging
              </p>
              <p className="text-neutral-600">
                <strong className="text-neutral-900">Expert Consultation</strong> available via appointment
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}


export default function ProductDetailPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <ProductDetailPageContent {...props} />
    </React.Suspense>
  );
}
