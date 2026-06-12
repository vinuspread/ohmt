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

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const product = products.find((p) => String(p.id) === String(params.id));

  if (!mounted) return null;
  if (!product) return <div className="pt-40 text-center uppercase font-bold">상품을 찾을 수 없습니다</div>;

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
          <ArrowLeft size={14} /> 컬렉션으로 돌아가기
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
                <h1 className="text-[32px] md:text-[44px] lg:text-[52px] font-bold text-[var(--color-text)] leading-[1.5] uppercase mb-4">
                  {product.name}
                </h1>
                <p className="text-[18px] md:text-[20px] font-semibold text-[var(--color-text)]">
                  {product.price}
                </p>
              </div>
              
              <div className="h-[1px] w-full bg-black/5 mb-8" />

              <p className="text-[15px] md:text-[16px] text-[var(--color-secondary)] leading-relaxed mb-8 max-w-md uppercase font-medium">
                {product.desc}
              </p>

              {/* Product Details Grid */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-12 mb-10 md:mb-12">
                <div>
                  <h4 className="text-[13px] font-bold uppercase text-black/40 mb-2">소재</h4>
                  <p className="text-[14px] font-semibold text-[var(--color-text)] uppercase">{product.details?.material}</p>
                </div>
                <div>
                  <h4 className="text-[13px] font-bold uppercase text-black/40 mb-2">규격</h4>
                  <p className="text-[14px] font-semibold text-[var(--color-text)] uppercase">{product.details?.dimensions}</p>
                </div>
                <div>
                  <h4 className="text-[13px] font-bold uppercase text-black/40 mb-2">원산지</h4>
                  <p className="text-[14px] font-semibold text-[var(--color-text)] uppercase">{product.details?.origin}</p>
                </div>
                <div>
                  <h4 className="text-[13px] font-bold uppercase text-black/40 mb-2">배송</h4>
                  <p className="text-[14px] font-semibold text-[var(--color-text)] uppercase">전 세계</p>
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
                    onClick={() => router.push('/ko/templates/furniture/cart')}
                    className={`flex-1 py-6 rounded-full text-[14px] font-bold uppercase active:scale-95 ${theme.interaction.button}`}
                  >
                    장바구니 담기
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Visual Narrative Section */}
        <section className="mt-10 md:mt-24 pb-12 md:pb-24 border-t border-black/10">
          <div className="pt-12 md:pt-20 mb-10 md:mb-16 px-2">
            <span className="text-[12px] font-bold text-black/40 uppercase mb-3 block">비주얼 스토리</span>
            <h2 className="text-[32px] sm:text-[clamp(2rem,7vw,5rem)] font-bold text-black leading-none uppercase">공간의 분위기.</h2>
          </div>

          {/* 1. Primary Lifestyle Hero */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[21/9] w-full overflow-hidden mb-16 md:mb-24 bg-zinc-50 group rounded-2xl"
          >
            <img 
              src="/templates/furniture/lifestyle-narrative.png" 
              className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105"
              alt="브랜드 라이프스타일"
            />
            <div className="absolute inset-0 bg-black/5" />
            <div className="absolute bottom-12 left-12">
              <p className="text-[13px] font-bold text-white/40 uppercase">비누스프레드 아카이브 01</p>
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
                alt="제품 상세"
              />
            </motion.div>
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-[1.5] text-[var(--color-text)]">
                현대적인 라이프스타일을 위한<br/>에센셜 피스
              </h3>
              <div className="w-12 h-[2px] bg-black" />
              <p className="text-[14px] text-[var(--color-secondary)] leading-relaxed font-normal max-w-md">
                모든 작품은 소재와 공간의 대화입니다. 형태를 통해 경험을 큐레이팅하여, 모든 곡선과 선이 평온함을 느끼게 합니다. {product.desc}
              </p>
              <div className="pt-4">
                <Link href="/ko/templates/furniture" className="text-[13px] font-bold uppercase border-b border-black pb-1 hover:opacity-50 transition-opacity">
                  더 알아보기
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
