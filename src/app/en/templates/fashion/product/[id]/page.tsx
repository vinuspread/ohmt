"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Plus, Minus, ArrowLeft, Shield, Truck, RefreshCw } from "lucide-react";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import { Button } from "../../_components/ui/Button";
import Link from "next/link";

const FASHION_PRODUCTS = [
  { id: 1, name: 'WOOL BUCKET HAT', price: '$120.00', image: '/templates/fashion/wool-hat.png', category: 'Accessories', desc: 'A meticulously crafted structured wool bucket hat. Featuring clean geometric seams and an elegant minimalist silhouette. Perfect for high-fashion layering.' },
  { id: 2, name: 'CLASSIC TRENCH COAT', price: '$850.00', image: '/templates/fashion/trench-coat.png', category: 'Outerwear', desc: 'An oversized double-breasted trench coat tailored in durable cotton gabardine. Minimalist belt closure with structural storm flaps for an understated silhouette.' },
  { id: 3, name: 'MINIMALIST BACKPACK', price: '$350.00', image: '/templates/fashion/backpack.png', category: 'Bags', desc: 'Crafted in premium matte black leather. Single flap compartment with clean concealed zip structures. The ultimate essential container for active modern life.' },
  { id: 4, name: 'PREMIUM LEATHER BOOTS', price: '$480.00', image: '/templates/fashion/boots.png', category: 'Footwear', desc: 'Square-toe high-top boots featuring premium brushed calfskin leather. Side zip closure with a stacked leather heel. Pure sculptural aesthetics.' },
  { id: 5, name: 'SILK EVENING DRESS', price: '$1,200.00', image: '/templates/fashion/silk-dress.png', category: 'Dresses', desc: 'A flowing floor-length dress cut in pure heavyweight silk charmeuse. Open back architecture with a delicate fluid neckline. Understated elegance.' },
  { id: 6, name: 'COTTON BASICS TEE', price: '$65.00', image: '/templates/fashion/basic-tee.png', category: 'Tops', desc: 'A boxy heavyweight cotton jersey tee. Clean bound crew neck with side split hem architectures. Built for comfortable, long-lasting luxury basics.' }
];

function ProductDetailPageContent() {
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const product = FASHION_PRODUCTS.find((p) => String(p.id) === String(params.id));

  if (!mounted) return null;
  if (!product) return <div className="pt-40 text-center uppercase font-bold tracking-widest text-[13px]">Product not found</div>;

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white min-h-screen pt-20 md:pt-28 pb-12 selection:bg-black selection:text-white">
        <Navbar />
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {/* Back Navigation */}
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-10"
          >
            <ArrowLeft size={12} /> Back to Collection
          </Button>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 mb-16 md:mb-24">
            {/* Left: Product Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-3/5 lg:sticky lg:top-32 h-fit"
            >
              <div className="relative aspect-square bg-[#F5F5F7] overflow-hidden w-full flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Right: Product Details Stack */}
            <div className="flex flex-col lg:w-2/5">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="space-y-6 md:space-y-8"
              >
                {/* Heading Block */}
                <div className="border-b border-black/10 pb-6">
                  <span className="text-[11px] font-medium text-black/40 uppercase tracking-[0.4em] mb-2 block">
                    {product.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-normal tracking-[-0.02em] uppercase leading-[1.1] text-[#000] mb-4">
                    {product.name}
                  </h1>
                  <p className="text-[16px] font-bold text-black/70">
                    {product.price}
                  </p>
                </div>

                {/* Description */}
                <p className="text-[13px] md:text-[14px] text-black/60 leading-[1.4] font-normal normal-case">
                  {product.desc}
                </p>

                {/* Size Selector */}
                <div className="space-y-3">
                  <span className="text-[11px] font-medium text-black/40 uppercase tracking-[0.3em] block">Select Size</span>
                  <div className="flex gap-3">
                    {["S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 text-[13px] font-bold uppercase tracking-wider transition-all border flex items-center justify-center ${
                          selectedSize === size
                            ? "bg-black border-black text-white"
                            : "border-black/15 text-black hover:border-black/55"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions Block */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  {/* Quantity */}
                  <div className="flex items-center justify-between border border-black/15 px-6 py-4 sm:w-36">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:opacity-50 transition-opacity">
                      <Minus size={14} />
                    </button>
                    <span className="text-[12px] font-bold w-4 text-center">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="hover:opacity-50 transition-opacity">
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* Add Bag Button */}
                  <Button
                    variant="primary"
                    onClick={() => router.push('/templates/fashion/cart')}
                    className="flex-1 text-[13px] font-bold uppercase tracking-[0.3em] py-6"
                  >
                    ADD TO BAG
                  </Button>
                </div>

                {/* Service Pointers */}
                <div className="border-t border-black/10 pt-6 space-y-4 text-[13px] font-bold uppercase tracking-[0.25em] text-black/40">
                  <div className="flex items-center gap-3">
                    <Truck size={14} />
                    <span>Free Shipping Worldwide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RefreshCw size={14} />
                    <span>45-day Hassle-free Returns</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield size={14} />
                    <span>Secure Checkout Guarantee</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Editorial Visual Story section */}
          <section className="mt-16 md:mt-24 pb-12 border-t border-black/10">
            <div className="pt-12 md:pt-16 mb-10 md:mb-16">
              <span className="text-[11px] font-medium text-black/40 uppercase tracking-[0.4em] mb-2 block">Atmosphere</span>
              <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tighter leading-none text-black">Understated Silence.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="aspect-square bg-[#F5F5F7] overflow-hidden"
              >
                <img 
                  src={product.image} 
                  className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-105"
                  alt="Product Editorial representation"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl md:text-3xl font-normal uppercase leading-[1.1] text-black">
                  tailored volumes<br/>redefining digital luxury.
                </h3>
                <div className="w-12 h-px bg-black/20" />
                <p className="text-[13px] md:text-[14px] text-black/60 leading-[1.4] font-normal normal-case max-w-md">
                  Crafting silhouettes that speak volumes through silence. Each garment is meticulously tailored utilizing the finest materials sourced globally. Designed to integrate seamlessly into a curated modern wardrobe. {product.desc}
                </p>
                <div className="pt-4">
                  <Link href="/en/templates/fashion" className="text-[13px] font-bold uppercase tracking-[0.25em] border-b border-black pb-1 hover:opacity-50 transition-opacity">
                    Return to Collection
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
