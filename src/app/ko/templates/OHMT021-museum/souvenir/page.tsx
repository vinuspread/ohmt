"use client";

import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ShoppingBag, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Header from "../_components/layout/Header";
import Footer from "../_components/layout/Footer";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const products = [
  {
    id: 1,
    name: "라오콘 군상 축소 복제품",
    category: "조각 복제품",
    price: "€240.00",
    img: "/templates/OHMT021-museum/museum-replica-laocoon.png",
    desc: "A hand-finished resin replica of the Trojan priest, capturing every sinew in 1/8 scale."
  },
  {
    id: 2,
    name: "바티칸 아카이브: 500년의 기록",
    category: "전시 도록",
    price: "€85.00",
    img: "/templates/OHMT021-museum/museum-catalog-vatican.png",
    desc: "바티칸 미술관의 역사를 정리한 도록으로, 리넨 표지로 제작했습니다."
  },
  {
    id: 3,
    name: "성 베드로 대성당 야경 프린트",
    category: "아트 프린트",
    price: "€120.00",
    img: "/templates/OHMT021-museum/museum-print-st-peters.png",
    desc: "300gsm 하네뮬레 용지에 제작한 한정판 지클레 프린트입니다."
  },
  {
    id: 4,
    name: "피에타 실버 펜던트",
    category: "주얼리",
    price: "€55.00",
    img: "/templates/OHMT021-museum/museum-jewelry-pieta.png",
    desc: "미켈란젤로의 피에타를 새긴 스털링 실버 펜던트입니다."
  },
  {
    id: 5,
    name: "벨베데레의 아폴론 흉상",
    category: "조각 복제품",
    price: "€180.00",
    img: "/templates/OHMT021-museum/museum-apollo-bust.png",
    desc: "A bronze-casted miniature bust of the Apollo Belvedere, reflecting classical perfection."
  },
  {
    id: 6,
    name: "르네상스 스케치북",
    category: "문구",
    price: "€32.00",
    img: "/templates/OHMT021-museum/museum-sketchbook.png",
    desc: "Hand-stitched leather sketchbook with archival-grade paper for artists."
  },
  {
    id: 7,
    name: "교황청 인장 밀랍 세트",
    category: "문구",
    price: "€45.00",
    img: "/templates/OHMT021-museum/museum-wax-seal.png",
    desc: "Authentic brass seal with three sticks of crimson Vatican wax."
  },
  {
    id: 8,
    name: "라파엘로의 천사 실크 스카프",
    category: "라이프스타일",
    price: "€110.00",
    img: "/templates/OHMT021-museum/museum-silk-scarf.png",
    desc: "100% silk scarf featuring detail from the Sistine Madonna."
  },
  {
    id: 9,
    name: "프리마 포르타의 아우구스투스 흉상",
    category: "조각 복제품",
    price: "€320.00",
    img: "/templates/OHMT021-museum/museum-replica-laocoon.png",
    desc: "Full-scale replica of the head of Augustus, the first Roman Emperor."
  },
  {
    id: 10,
    name: "아카이브 잉크 만년필",
    category: "문구",
    price: "€145.00",
    img: "/templates/OHMT021-museum/museum-fountain-pen.png",
    desc: "Handcrafted ebony fountain pen with a 14k gold nib."
  },
  {
    id: 11,
    name: "시스티나 성당 도면 프린트",
    category: "아트 프린트",
    price: "€95.00",
    img: "/templates/OHMT021-museum/museum-blueprint.png",
    desc: "Architectural blueprint print showing the structural genius of the chapel."
  },
  {
    id: 12,
    name: "로마네스크 브론즈 캔들",
    category: "라이프스타일",
    price: "€65.00",
    img: "/templates/OHMT021-museum/museum-bronze-candle.png",
    desc: "Hand-poured beeswax candle in a cast bronze vessel."
  },
  {
    id: 13,
    name: "바티칸 미술관 토트백",
    category: "라이프스타일",
    price: "€25.00",
    img: "/templates/OHMT021-museum/museum-catalog-vatican.png",
    desc: "Premium heavyweight cotton tote with minimalist typography."
  }
];

const ITEMS_PER_PAGE = 12;

function SouvenirShopContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (

    <TemplateWrapper theme={theme}>

      <>
      <Header />
      <main className="antialiased bg-white text-[var(--color-text)] min-h-screen pt-20 md:pt-40 pb-16 md:pb-32 selection:bg-[var(--color-primary)] selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <span className="text-xs uppercase font-bold tracking-[0.5em] text-black/40 block mb-6">뮤지엄 숍</span>
          <h1 className="text-5xl md:text-8xl font-serif tracking-tighter leading-[var(--leading-heading)] mb-8">역사를 담은 오브제</h1>
          <p className="max-w-2xl mx-auto text-black/60 font-serif text-lg leading-relaxed">
            바티칸 미술관의 작품과 건축에서 영감을 받은 오브제를 소개합니다.<br className="hidden md:block" />
            소재와 제작 방식, 일상에서의 쓰임을 기준으로 골랐습니다.</p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20 min-h-[1200px]">
          <AnimatePresence mode="wait">
            {currentItems.map((product, i) => (
              <motion.div 
                key={`${product.id}-${currentPage}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="group"
              >
                <div className="aspect-[3/4] bg-black/5 overflow-hidden mb-8 relative">
                  <img 
                    src={product.img} 
                    alt={product.name}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-[filter,transform] duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="text-xs uppercase tracking-[0.2em] bg-white text-black px-3 py-1.5 font-bold">{product.category}</span>
                  </div>
                </div>
                <div className="space-y-3 px-2">
                  <h3 className="font-serif text-xl tracking-tight leading-[var(--leading-heading)]">{product.name}</h3>
                  <p className="text-sm text-black/70 line-clamp-2 font-sans leading-relaxed">{product.desc}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-black/5">
                    <span className="text-sm font-bold tracking-[0.1em]">{product.price}</span>
                    <button className="text-xs uppercase tracking-[0.2em] font-bold border-b border-black/20 hover:border-black transition-colors pb-1">
                      문의하기</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-40 flex items-center justify-center gap-12 border-t border-black/10 pt-20">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-[opacity,transform] ${currentPage === 1 ? 'opacity-20 cursor-not-allowed' : 'hover:-translate-x-2'}`}
            >
              <ChevronLeft size={16} /> 이전</button>
            <div className="flex items-center gap-6">
               {[...Array(totalPages)].map((_, i) => (
                 <button 
                   key={i}
                   onClick={() => setCurrentPage(i + 1)}
                   className={`text-xs uppercase font-bold tracking-widest ${currentPage === i + 1 ? 'text-black underline underline-offset-8' : 'text-black/30 hover:text-black'}`}
                 >
                   0{i + 1}
                 </button>
               ))}
            </div>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-[opacity,transform] ${currentPage === totalPages ? 'opacity-20 cursor-not-allowed' : 'hover:translate-x-2'}`}
            >
              다음<ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Collections Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 flex flex-col md:flex-row items-center justify-between gap-12 bg-white p-12 md:p-20 border border-black/5"
        >
          <div className="max-w-xl">
             <h2 className="text-4xl font-serif mb-6 text-black tracking-tighter">원작의 형태를 충실히 담은 복제품.</h2>
             <p className="text-black/60 font-serif leading-relaxed text-lg">
               조각 복제품은 원작의 비례와 표면을 정밀하게 살펴 제작합니다.<br className="hidden md:block" />
               작품의 특징을 충분히 담으면서도 가정과 작업 공간에 두기 좋은 크기로 완성했습니다.</p>
          </div>
          <Link href="/ko/templates/OHMT021-museum/collections" className="group flex items-center gap-4 text-xs uppercase tracking-[0.4em] font-bold bg-black text-white px-10 py-6 hover:bg-[var(--color-bg-secondary)] transition-colors">
            소장품으로 돌아가기<ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
      </main>
      <Footer />
    </>

    </TemplateWrapper>
);
}


export default function SouvenirShop(props: Record<string, unknown>) {
  return (
    <React.Suspense fallback={null}>
      <SouvenirShopContent {...props} />
    </React.Suspense>
  );
}
