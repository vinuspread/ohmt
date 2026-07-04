"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { SubpageHero } from "../_components/SubpageHero";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { ArrowLeft } from "lucide-react";
import theme from "../theme.json";
import { PRODUCTS } from "../_data/products";

const LABEL = "컬렉션";
const ITEMS_PER_PAGE = 6;

function PageContent() {
  const filtered = PRODUCTS.filter((p) => p.category === "collection");
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <TemplateWrapper theme={theme}>
      <main className="min-h-screen bg-white antialiased selection:bg-black selection:text-white">
        <Navbar />
        <SubpageHero
          eyebrow="Collection"
          title="이번 시즌"
          description="테일러드 에센셜, 리미티드 오브젝트, 그리고 영구적인 피스를 하나의 간결한 옷장으로 엮었습니다."
          image="/templates/OHMT001-fashion/branding-custom.jpg"
          imageAlt="이번 시즌 패션 캠페인"
        />
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-24">
          <Link
            href="/ko/templates/OHMT001-fashion"
            className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-all mb-10 md:mb-16"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            홈으로
          </Link>

          <div className="mb-16 md:mb-24">
            <h1 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/30 mb-3">{LABEL}</h1>
            <p
              className="text-[36px] font-bold leading-none tracking-[-0.035em] sm:text-[4vw]"
              style={{ fontFamily: "var(--font-bodoni)" }}
            >
              {filtered.length}개 상품
            </p>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 gap-x-6 sm:gap-x-12 gap-y-16 sm:gap-y-24"
          >
            <AnimatePresence mode="popLayout">
              {paginatedProducts.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <Link href={"/ko/templates/OHMT001-fashion/product/" + p.id}>
                    <div className="aspect-square bg-[#F5F5F5] overflow-hidden mb-4 sm:mb-6 relative">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <h2 className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[-0.01em] mb-1">{p.name}</h2>
                    <p className="text-[13px] text-black/50 font-medium">{p.price}</p>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-6 mt-20 md:mt-28 border-t border-black/5 pt-8 text-[11px] font-bold uppercase tracking-[0.2em]">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="disabled:opacity-20 hover:text-black/60 transition-colors"
              >
                이전
              </button>
              <div className="flex gap-4">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`${
                      currentPage === i + 1 ? "text-black" : "text-black/30 hover:text-black/60"
                    } transition-colors`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="disabled:opacity-20 hover:text-black/60 transition-colors"
              >
                다음
              </button>
            </div>
          )}
        </div>
        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function Page() {
  return (
    <React.Suspense fallback={null}>
      <PageContent />
    </React.Suspense>
  );
}

