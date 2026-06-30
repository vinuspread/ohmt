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
  { id: 1, name: "울 버킷 햇", price: "$120.00", image: "/templates/OHMT001-fashion/wool-hat.png", material: "퓨어 뉴질랜드 울", color: "차콜 블랙", description: "프리미엄 이탈리안 울로 제작된 모던한 실루엣의 버킷 햇입니다. 구조적인 브림과 통기성 좋은 코튼 안감이 특징입니다." },
  { id: 2, name: "클래식 트렌치 코트", price: "$850.00", image: "/templates/OHMT001-fashion/trench-coat.png", material: "코튼 개버딘", color: "아이보리", description: "고밀도 코튼 개버딘으로 제작된 더블 브레스트 트렌치 코트입니다. 래글런 슬리브, 스톰 플랩, 칼라와 커프스의 버클 스트랩 디테일이 돋보입니다." },
  { id: 3, name: "미니멀리스트 백팩", price: "$350.00", image: "/templates/OHMT001-fashion/backpack.png", material: "왁스드 캔버스 & 레더", color: "블랙", description: "하나의 메인 수납공간과 패딩 처리된 노트북 슬리브, 수공 마감 레더 트림이 적용된 세련된 백팩입니다." },
  { id: 4, name: "프리미엄 레더 부츠", price: "$480.00", image: "/templates/OHMT001-fashion/boots.png", material: "풀그레인 송아지 가죽", color: "다크 체스트넛", description: "굿이어 웰트 공법과 블레이크 스티치로 제작된 부츠입니다. 식물성 가죽 갑피, 레더 솔, 모던한 스퀘어 토 프로필이 특징입니다." },
  { id: 5, name: "실크 이브닝 드레스", price: "$1,200.00", image: "/templates/OHMT001-fashion/silk-dress.png", material: "18mm 실크 새틴", color: "미드나잇 블루", description: "리퀴드 실크 새틴의 바이어스 컷 플로어-랭스 드레스입니다. 조절 가능한 숄더 타이와 드레이프 카울 백이 적용되었습니다." },
  { id: 6, name: "코튼 베이직 티", price: "$65.00", image: "/templates/OHMT001-fashion/basic-tee.png", material: "수피마 코튼 저지", color: "화이트", description: "헤비웨이트 260gsm 수피마 코튼. 리브 크루넥, 강화 숄더 심, 세탁 후에도 형태를 유지하는 박시 핏입니다." },
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
            <p className="text-[15px] font-bold uppercase tracking-[0.2em] text-black/40 mb-6">상품을 찾을 수 없습니다</p>
            <Link href="/ko/templates/OHMT001-fashion" className="group flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em] border-b border-black/20 pb-1 hover:border-black/70 transition-all">
              <ArrowLeft size={14} /> 쇼핑 계속하기
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
          <Link href="/ko/templates/OHMT001-fashion" className="group inline-flex items-center gap-2 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-all mb-10 md:mb-16">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            컬렉션으로 돌아가기
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
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-black/30 mb-4">신상품</p>
              <h1 className="text-[28px] sm:text-[3.5vw] font-bold tracking-tighter uppercase leading-none mb-4">{product.name}</h1>
              <p className="text-[16px] md:text-[20px] font-bold text-black/60 mb-8">{product.price}</p>

              <div className="space-y-4 mb-8 pb-8 border-b border-black/5">
                <p className="text-[14px] text-black/70 leading-relaxed">{product.description}</p>
                <div className="flex gap-8 text-[13px]">
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-black/30 mb-1">소재</span>
                    <span className="font-medium">{product.material}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-black/30 mb-1">색상</span>
                    <span className="font-medium">{product.color}</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 mb-4">사이즈</p>
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
                  장바구니 담기
                </button>
                <button className="w-14 md:w-16 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                  <Heart size={18} strokeWidth={1.5} />
                </button>
              </div>

              <div className="mt-10 pt-8 border-t border-black/5">
                <p className="text-[15px] text-black/40 leading-relaxed">
                  $500 이상 주문 시 무료 배송. 30일 이내 무료 반품 가능.
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
