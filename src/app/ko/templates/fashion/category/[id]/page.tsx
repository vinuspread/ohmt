"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import { ArrowLeft } from "lucide-react";
import theme from "../../theme.json";

const PRODUCTS = [
  { id: 1, price: "$120.00", image: "/templates/OHMT001-fashion/wool-hat.png", name: "울 버킷 햇", category: "collection" },
  { id: 2, price: "$850.00", image: "/templates/OHMT001-fashion/trench-coat.png", name: "클래식 트렌치 코트", category: "collection" },
  { id: 3, price: "$350.00", image: "/templates/OHMT001-fashion/backpack.png", name: "미니멀리스트 백팩", category: "archive" },
  { id: 4, price: "$480.00", image: "/templates/OHMT001-fashion/boots.png", name: "프리미엄 레더 부츠", category: "archive" },
  { id: 5, price: "$1,200.00", image: "/templates/OHMT001-fashion/silk-dress.png", name: "실크 이브닝 드레스", category: "collection" },
  { id: 6, price: "$65.00", image: "/templates/OHMT001-fashion/basic-tee.png", name: "코튼 베이직 티", category: "collection" },
];

const CATEGORY_LABELS: Record<string, string> = {
  collection: "컬렉션",
  archive: "아카이브",
  journal: "저널",
  about: "브랜드",
};

function CategoryPageContent() {
  const params = useParams();
  const id = params.id as string;
  const label = CATEGORY_LABELS[id] ?? id;
  const filtered = PRODUCTS.filter((p) => p.category === id);
  const items = filtered.length > 0 ? filtered : PRODUCTS;

  return (
    <TemplateWrapper theme={theme}>
      <main className="min-h-screen bg-white antialiased selection:bg-black selection:text-white">
        <Navbar />
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-[120px] md:pt-[160px] pb-24">
          <Link
            href="/ko/templates/OHMT001-fashion"
            className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-all mb-10 md:mb-16"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            홈으로
          </Link>

          <div className="mb-16 md:mb-24">
            <h1 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/30 mb-3">{label}</h1>
            <p className="text-[28px] sm:text-[3.5vw] font-bold tracking-tighter uppercase leading-none">{items.length}개 상품</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 sm:gap-x-12 gap-y-16 sm:gap-y-24">
            {items.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.8 }}
                className="group"
              >
                <Link href={`/ko/templates/OHMT001-fashion/product/${p.id}`}>
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
          </div>
        </div>
        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function CategoryPage() {
  return (
    <React.Suspense fallback={null}>
      <CategoryPageContent />
    </React.Suspense>
  );
}
