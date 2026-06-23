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
    name: "다이아몬드 솔리테어 링",
    price: "$2,250",
    rating: 4.8,
    reviews: 127,
    img: "/templates/OHMT002-jewelry/jewelry-ring.png",
    category: "인게이지먼트 & 웨딩",
    desc: "우아함과 세련미의 영원한 상징. 모든 각도에서 찬란하게 빛을 머금고 뿜어내는 다이아몬드 본연의 아름다움을 극대화한 클래식 솔리테어 링입니다.",
    details: [
      { label: "스톤 타입", value: "천연 다이아몬드" },
      { label: "캐럿 중량", value: "1.50 CT" },
      { label: "소재", value: "18K 화이트 골드" },
      { label: "사이즈 범위", value: "3-13호" },
      { label: "세팅 스타일", value: "솔리테어" }
    ],
    features: [
      "GIA 보증서 동봉",
      "평생 보증 서비스",
      "무상 클리닝 및 유지관리 서비스",
      "명장 아틀리에 제작"
    ]
  },
  "2": {
    name: "래디언트 펄 펜던트",
    price: "$1,850",
    rating: 4.9,
    reviews: 93,
    img: "/templates/OHMT002-jewelry/jewelry-pendant.png",
    category: "목걸이",
    desc: "클래식한 품격과 우아함을 자아내는 펜던트. 오직 Oh My Template만이 선별한 완벽한 원형의 최고급 남양진주와 18K 골드가 만나 매혹적인 광채를 선사합니다.",
    details: [
      { label: "진주 타입", value: "남양 진주" },
      { label: "크기", value: "12mm" },
      { label: "소재", value: "18K 옐로우 골드" },
      { label: "체인 길이", value: "16-18 인치 (약 40-45cm)" },
      { label: "원산지", value: "호주 남해 청정 해역" }
    ],
    features: [
      "천연 남양 진주 인증",
      "길이 조절 가능한 체인",
      "정품 인증서 제공",
      "시그니처 럭셔리 패키징"
    ]
  },
  "5": {
    name: "클래식 라운드 브릴리언트",
    price: "$3,500",
    rating: 4.9,
    reviews: 234,
    img: "/templates/OHMT002-jewelry/jewelry-ring.png",
    category: "인게이지먼트 & 웨딩",
    desc: "일생의 가장 고귀한 서약을 위한 가장 완벽한 선택. 독보적인 커팅 기법으로 다이아몬드 최고의 광채와 불꽃 같은 섬광(Fire)을 극대화한 마스터피스입니다.",
    details: [
      { label: "스톤 타입", value: "천연 다이아몬드" },
      { label: "캐럿 중량", value: "2.00 CT" },
      { label: "컷 등급", value: "최상급 (Excellent)" },
      { label: "소재", value: "플래티넘" },
      { label: "투명도", value: "VS1" }
    ],
    features: [
      "AGS 인증서 동봉",
      "하트 & 애로우 프리미엄 컷",
      "평생 유지관리 서비스",
      "보석 감정 및 가치 평가서 포함"
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
            <h1 className="text-3xl font-serif mb-4">상품을 찾을 수 없습니다</h1>
            <Link href="/ko/templates/OHMT004-jewelry-kr" className="text-[var(--color-primary)] hover:underline">
              주얼리 컬렉션으로 돌아가기
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
              360° 아틀리에 뷰 보기
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
                  {product.rating} ({product.reviews}개 고객 리뷰)
                </span>
              </div>

              <p className="text-[20px] font-serif tracking-tight mb-6 text-neutral-800">{product.price}</p>
              <p className="text-sm leading-relaxed text-neutral-600 mb-8">{product.desc}</p>
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
                쇼핑백에 담기
              </Button>
              <Button variant="ghost" className="px-6 py-4">
                <Heart size={20} />
              </Button>
            </div>

            {/* Additional Info */}
            <div className="bg-white border border-neutral-200 p-6 rounded-sm text-[12px] space-y-3">
              <p className="text-neutral-600">
                <strong className="text-neutral-900">프리미엄 무료 배송</strong> - 500달러 이상 구매 시 제공
              </p>
              <p className="text-neutral-600">
                <strong className="text-neutral-900">30일 안심 반품</strong> - 시그니처 패키징 미개봉 상태에 한함
              </p>
              <p className="text-neutral-600">
                <strong className="text-neutral-900">1:1 프라이빗 카운셀링</strong> - 아틀리에 스페셜리스트 예약 상담 서비스
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
