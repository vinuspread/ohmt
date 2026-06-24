// src/app/ko/templates/OHMT002-jewelry-KO/category/[id]/page.tsx
"use client";

import React, { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Heart, ShoppingBag, Filter, ArrowRight, Grid, List, Play, Award, Gem, ShieldCheck } from "lucide-react";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import type { Route } from "next";

import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import Button from "../../_components/ui/Button";

// Curated high-end boutique dataset split by linked GNB category ids
const CATEGORY_DATA: Record<string, {
  title: string;
  serifTitle: string;
  subtitle: string;
  description: string;
  type: "collections" | "engagement" | "high" | "about";
  items: Array<{ id: string; name: string; price: string; img: string; tag: string; detail: string }>;
}> = {
  collections: {
    title: "FINE JEWELRY",
    serifTitle: "Collections",
    subtitle: "SERIES 01 / BOUTIQUE CURATION",
    description: "수작업으로 엄선한 다이아몬드의 영원한 찬란함부터 천연 진주의 단아한 흐름까지,\nOh My Template 최고의 현대식 마스터피스를 큐레이션하여 선보입니다.",
    type: "collections",
    items: [
      { id: "1", name: "다이아몬드 솔리테어 링", price: "$2,250.00", img: "/templates/jewelry/jewelry-ring.png", tag: "웨딩", detail: "플래티넘 밴드 위 세팅된 0.85캐럿 라운드 브릴리언트 컷 다이아몬드." },
      { id: "2", name: "래디언트 펄 펜던트", price: "$1,850.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "시즈널", detail: "18K 옐로우 골드 클립으로 장식된 희소성 높은 골든 남양 진주." },
      { id: "3", name: "사파이어 뱅글 세트", price: "$1,200.00", img: "/templates/jewelry/jewelry-hero-main.png", tag: "럭셔리", detail: "마이크로 파베 다이아몬드가 둘러싸인 깊고 푸른 블루 사파이어 뱅글." },
      { id: "4", name: "로즈 골드 인피니티 밴드", price: "$950.00", img: "/templates/jewelry/jewelry-ring.png", tag: "에센셜", detail: "장인의 정교한 핸드 피니시가 돋보이는 18K 로즈 골드 인피니티 밴드." },
      { id: "301", name: "에메랄드 드롭 펜던트", price: "$2,800.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "익스클루시브", detail: "빛나는 마퀴즈 다이아몬드 아래 찬란하게 빛나는 콜롬비아산 에메랄드 드롭." },
      { id: "302", name: "마퀴즈 다이아몬드 밴드", price: "$1,650.00", img: "/templates/jewelry/jewelry-ring.png", tag: "부티크", detail: "최상급 마퀴즈 다이아몬드를 일렬로 촘촘히 세팅한 플래티넘 풀 이터니티 밴드." },
      { id: "303", name: "골든 펄 이어링", price: "$1,420.00", img: "/templates/jewelry/jewelry-hero-main.png", tag: "시그니처", detail: "다이아몬드 스터드 아래 우아하게 흔들리는 남양 골든 진주." },
      { id: "304", name: "루비 이터니티 링", price: "$3,100.00", img: "/templates/jewelry/jewelry-ring.png", tag: "브라이덜", detail: "라운드 루비와 바게트 다이아몬드가 클래식하게 조화를 이룬 18K 옐로우 골드 이터니티 링." },
      { id: "305", name: "플래티넘 솔리테어 펜던트", price: "$1,950.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "미니멀", detail: "심플하면서도 견고한 플래티넘 베이스에 올라간 0.70캐럿 아이디얼 컷 다이아몬드." },
      { id: "306", name: "오발 컷 인게이지먼트", price: "$3,450.00", img: "/templates/jewelry/jewelry-ring.png", tag: "웨딩", detail: "마이크로 파베 세팅의 갈래 밴드 위에 세팅된 매혹적인 오발 컷 다이아몬드." },
      { id: "307", name: "다이아몬드 훞 이어링", price: "$1,250.00", img: "/templates/jewelry/jewelry-hero-main.png", tag: "에센셜", detail: "일상의 격을 한층 높여줄 안팎 양면 다이아몬드 세팅의 하이엔드 훞 이어링." },
      { id: "308", name: "펄 초커 세트", price: "$2,100.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "시즈널", detail: "빈티지 화이트 골드 사파이어 버클로 고정되는 더블 스트랜드 아코야 진주 초커." }
    ]
  },
  engagement: {
    title: "THE ROMANTIC",
    serifTitle: "Engagement",
    subtitle: "SERIES 02 / ETERNAL SYMBOLS",
    description: "생애 가장 성스러운 고백의 순간을 Oh My Template의 브라이덜 링으로 장식해보세요.\n기하학적 정교함과 고귀한 원석의 순수함을 결합하여 타협 없는 사랑의 약속을 기립니다.",
    type: "engagement",
    items: [
      { id: "5", name: "클래식 라운드 브릴리언트", price: "$3,500.00", img: "/templates/jewelry/jewelry-ring.png", tag: "웨딩", detail: "쉐어드 프롱 기법으로 다이아몬드를 돋보이게 한 1.20캐럿 최상급 라운드 브릴리언트 컷 링." },
      { id: "6", name: "쿠션 컷 다이아몬드 링", price: "$2,800.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "럭셔리", detail: "화사한 헤일로 파베 다이아몬드가 감싸 안은 쿠션 모디파이드 브릴리언트 컷 다이아몬드." },
      { id: "7", name: "에메랄드 컷 솔리테어", price: "$3,200.00", img: "/templates/jewelry/jewelry-hero-main.png", tag: "시그니처", detail: "본연의 기하학적이고 투명한 라인을 극대화한 슬림한 에메랄드 컷 다이아몬드." },
      { id: "8", name: "쓰리 스톤 인게이지먼트", price: "$2,950.00", img: "/templates/jewelry/jewelry-ring.png", tag: "클래식", detail: "센터 다이아몬드 양옆에 테이퍼드 바게트 다이아몬드를 배치하여 조형미를 살린 링." },
      { id: "401", name: "프린세스 컷 헤일로", price: "$3,800.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "브라이덜", detail: "이중 파베 테두리가 찬란하게 둘러싸고 있는 현대적인 감각의 프린세스 컷 다이아몬드." },
      { id: "402", name: "오발 다이아몬드 플래티넘", price: "$4,100.00", img: "/templates/jewelry/jewelry-ring.png", tag: "웨딩", detail: "극도로 슬림하고 화사한 플래티넘 밴드 위 독보적인 매력을 발산하는 1.50캐럿 오발 다이아몬드." },
      { id: "403", name: "로즈 골드 트윈드 밴드", price: "$1,650.00", img: "/templates/jewelry/jewelry-hero-main.png", tag: "모던", detail: "따뜻한 광채의 18K 로즈 골드 밴드와 정교한 마이크로 파베 라인이 부드럽게 꼬인 링." },
      { id: "404", name: "페어 컷 솔리테어", price: "$3,300.00", img: "/templates/jewelry/jewelry-ring.png", tag: "익스클루시브", detail: "물방울 모양의 페어 컷 다이아몬드를 플래티넘 V자 프롱으로 우아하게 고정한 싱글 링." },
      { id: "405", name: "마퀴즈 트릴로지 링", price: "$3,650.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "브라이덜", detail: "마퀴즈 컷 다이아몬드와 정교하게 매칭된 방패 모양 쉴드 컷 다이아몬드 두 석이 어우러진 클래식 링." },
      { id: "406", name: "빈티지 다이아몬드 밴드", price: "$1,850.00", img: "/templates/jewelry/jewelry-ring.png", tag: "헤리티지", detail: "밀그레인 공법의 섬세한 핸드 인그레이빙 테두리가 클래식함을 배가하는 비드 세팅 다이아몬드 밴드." },
      { id: "407", name: "핸드카브드 브라이덜 밴드", price: "$1,450.00", img: "/templates/jewelry/jewelry-hero-main.png", tag: "브라이덜", detail: "가공되지 않은 순수한 플래티넘 본연의 아키텍처와 비대칭적인 핸드 버니시가 결합된 밴드." },
      { id: "408", name: "파베 쿠션 링", price: "$4,200.00", img: "/templates/jewelry/jewelry-ring.png", tag: "웨딩", detail: "삼면 파베 세팅 갤러리 위에 공중에 떠 있는 듯 우아하게 연출된 쿠션 컷 다이아몬드." }
    ]
  },
  "high-jewelry": {
    title: "HAUTE",
    serifTitle: "Joaillerie",
    subtitle: "SERIES 03 / ATELIER MASTERPIECES",
    description: "박물관 소장 등급의 극도로 희귀한 예술적 걸작들.\n입체적인 조형적 복잡성과 자연의 순수한 원석, 그리고 고전 아틀리에 헤리티지의 정수를 결합했습니다.",
    type: "high",
    items: [
      { id: "9", name: "루비 & 다이아몬드 티아라", price: "$12,500.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "익스클루시브", detail: "역사적인 왕실 헤리티지 루비와 정교하게 커스텀 커팅된 마퀴즈 다이아몬드 스크롤 티아라." },
      { id: "10", name: "사파이어 리비에르 네클리스", price: "$18,900.00", img: "/templates/jewelry/jewelry-hero-main.png", tag: "오트", detail: "엄격하게 매칭된 48석의 최고급 에메랄드 컷 사파이어가 끊임없이 이어지는 황홀한 리비에르 네클리스." },
      { id: "11", name: "에메랄드 스테이트먼트 이어링", price: "$15,600.00", img: "/templates/jewelry/jewelry-ring.png", tag: "익셉셔널", detail: "마이크로 파베 다이아몬드 클러스터 아래로 영롱하게 떨어지는 콜롬비아산 물방울 에메랄드." },
      { id: "12", name: "다이아몬드 & 펄 브로치", price: "$22,000.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "마스터피스", detail: "화이트 골드로 섬세하게 조각된 깃털 위에 올라간 매혹적이고 자연스러운 형태의 바로크 천연 진주 브로치." },
      { id: "501", name: "엠프레스 루비 네클리스", price: "$26,500.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "뮤지엄", detail: "두 줄로 폭포처럼 쏟아지는 다이아몬드 캐스케이드 위에 세팅된 15석의 엄선된 미얀마산 오발 루비." },
      { id: "502", name: "임페리얼 에메랄드 링", price: "$19,500.00", img: "/templates/jewelry/jewelry-ring.png", tag: "오트", detail: "심연의 광채를 자랑하는 콜롬비아산 천연 에메랄드와 양옆을 장식한 대담한 바게트 다이아몬드 링." },
      { id: "503", name: "사파이어 샹들리에 세트", price: "$17,800.00", img: "/templates/jewelry/jewelry-hero-main.png", tag: "오트", detail: "정교한 관절식 구조에 세팅된 24석의 아름다운 페어 컷 스리랑카 실론 사파이어 샹들리에 이어링." },
      { id: "504", name: "블루 다이아몬드 브로치", price: "$34,000.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "마스터피스", detail: "지각 변동으로 탄생한 블루 다이아몬드를 순수 화이트 골드에 담아낸 극도로 희귀한 예술품 브로치." },
      { id: "505", name: "캐스케이드 펄 티아라", price: "$21,500.00", img: "/templates/jewelry/jewelry-ring.png", tag: "익스클루시브", detail: "완벽한 크기 그라데이션 아치 형태로 정교하게 배열된 천연 물방울 진주 티아라." },
      { id: "506", name: "아트데코 다이아몬드 뱅글", price: "$16,900.00", img: "/templates/jewelry/jewelry-hero-main.png", tag: "오트", detail: "기하학적인 플래티넘 프레임에 바게트 다이아몬드와 오닉스가 결합된 정밀한 아트데코 뱅글." },
      { id: "507", name: "레어 핑크 다이아몬드 링", price: "$42,000.00", img: "/templates/jewelry/jewelry-ring.png", tag: "뮤지엄", detail: "핑크 마이크로 파베 테두리가 우아하게 감싸고 있는 최고 등급 팬시 비비드 퍼플리쉬 핑크 다이아몬드 링." },
      { id: "508", name: "바로크 펄 펜던트", price: "$15,400.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "마스터피스", detail: "독특한 초대형 바로크 진주를 그러안은 황금 용의 조각적 형상이 어우러진 걸작 펜던트." }
    ]
  },
  about: {
    title: "THE HERITAGE",
    serifTitle: "Maison Story",
    subtitle: "SERIES 04 / ATELIER MANIFESTO",
    description: "Oh My Template에게 파인 주얼리란 지구의 오랜 지질학적 경이와 수학적 기하학 사이의 시적 대화입니다.\n창립 이래 우리는 엄격하게 엄선된 스톤의 순수함과 입체 비대칭적 예술성을 우아하게 고수해왔습니다.",
    type: "about",
    items: []
  }
};

const CATEGORY_IMAGES: Record<string, string> = {
  collections: "/templates/jewelry/jewelry-hero-main.png",
  engagement: "/templates/jewelry/jewelry-ring.png",
  "high-jewelry": "/templates/jewelry/jewelry-craft.png",
  about: "/templates/jewelry/jewelry-hero-main.png"
};

function JewelryCategoryPageContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const category = CATEGORY_DATA[id] || CATEGORY_DATA.collections;
  const [visibleCount, setVisibleCount] = React.useState(8);
  const products = category.items;
  const displayedProducts = products.slice(0, visibleCount);

  return (

    <TemplateWrapper theme={theme}>

      <main className="antialiased bg-[var(--color-bg-secondary)] selection:bg-[var(--color-primary)] selection:text-white font-sans text-neutral-900 min-h-screen transition-all">
      {/* Shared Reusable Premium Navbar */}
      <Navbar />

      {/* 1. Curated Editorial Hero Visual Banner */}
      <div className="w-full h-[35vh] md:h-[40vh] relative overflow-hidden bg-neutral-900 group">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src={CATEGORY_IMAGES[id] || CATEGORY_IMAGES.collections}
          className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-103"
          alt={category.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/40" />
        
        {/* Overlaid Title and Subtitle */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-12 text-center space-y-4 px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.8, y: 0 }}
            className="text-[14px] uppercase font-bold tracking-[0.3em] -mr-[0.3em] text-[var(--color-primary)]"
          >
            {category.subtitle}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="text-4xl md:text-5xl lg:text-[3.5vw] font-bold tracking-[-0.01em] uppercase leading-[1.0] drop- text-center"
          >
            <span className="block text-white text-center font-bold tracking-wider">{category.title}</span>
            <span className="block font-serif text-white/80 tracking-[0.02em] text-center font-bold mt-2">{category.serifTitle}</span>
          </motion.h1>
        </div>
      </div>

      {/* Main Body */}
      <div className="pb-16 md:pb-32 px-6 max-w-[1440px] mx-auto pt-16 space-y-16">
        
        {/* Category Description text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-5xl mx-auto text-center text-[16px] sm:text-[20px] md:text-[26px] font-serif font-medium tracking-[0.01em] leading-[1.5] text-neutral-800 normal-case whitespace-pre-line"
        >
          {category.description}
        </motion.p>

        <div className="w-16 h-[1px] bg-neutral-200/60 mx-auto" />

        {/* 1. COLLECTIONS SPECIFIC ASYMMETRIC LOOKBOOK */}
        {category.type === "collections" && (
          <div className="space-y-32">
            {/* Minimal Toolbar */}
            <div className="border-y border-neutral-200/50 py-6 mb-20 flex justify-between items-center text-[13px] uppercase font-bold tracking-[0.3em]">
               <Button variant="ghost" className="flex items-center gap-3 cursor-pointer">
                  <Filter size={13} /> 필터 및 정렬
                </Button>
               <span className="opacity-45 uppercase font-medium">총 {products.length}개의 마스터피스</span>
            </div>             
            {/* Asymmetric Emerald Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-10 gap-y-12 sm:gap-y-24">
              {displayedProducts.map((item, i) => (
                <Link key={item.id} href={`/ko/templates/OHMT002-jewelry-KO/product/${item.id}`} className="group block space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="cursor-pointer"
                  >
                    {/* Image Box with thin border expand on hover */}
                    <div className="relative aspect-[3/4] mb-5 sm:mb-6 overflow-hidden bg-white border border-neutral-100/50 group-hover: transition-shadow duration-1000">
                      <span className="absolute top-3 left-3 z-20 text-[10px] bg-white/95 text-[var(--color-primary)] border border-neutral-200/60 rounded-[2px] px-2 py-0.5 uppercase font-bold tracking-[0.15em] backdrop-blur-sm">
                        {item.tag}
                      </span>
                      
                      <img 
                        src={item.img} 
                        className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-103" 
                        alt={item.name} 
                      />
                      
                      {/* Thin overlay border */}
                      <div className="absolute inset-5 border border-[var(--color-primary)]/20 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-10" />
                    </div>
                    
                    {/* Info */}
                    <div className="space-y-2 text-center transition-transform duration-500 ease-out group-hover:-translate-y-1">
                      <h4 className="text-[15px] sm:text-[18px] font-serif font-bold text-neutral-900 tracking-wide group-hover:text-[var(--color-primary)] transition-colors leading-tight">{item.name}</h4>
                      <p className="text-[12px] sm:text-[14px] tracking-[0.05em] text-[var(--color-primary)] font-semibold leading-tight">{item.price}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
             {/* Premium Load More Button */}
            {products.length > visibleCount && (
              <div className="flex justify-center pt-12 md:pt-24">
                <Button
                  onClick={() => setVisibleCount((prev) => prev + 4)}
                  variant="bordered"
                  className="px-16 py-6 text-[14px] font-bold uppercase tracking-[0.4em]"
                >
                  마스터피스 더 보기
                </Button>
              </div>
            )}
          </div>
        )}

        {/* 2. ENGAGEMENT ROMANTIC WEDDING PORTFOLIO */}
        {category.type === "engagement" && (
          <div className="space-y-36">
            {/* Wedding banner manifesto */}
            <div className="border-t border-b border-neutral-200/50 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[var(--color-bg-secondary)] px-8 md:px-14 rounded-full normal-case">
              <div className="lg:col-span-8 space-y-4 text-left">
                <span className="text-[14px] font-bold tracking-[0.4em] text-neutral-400 block text-left">SACRED STATEMENT</span>
                <h3 className="text-2xl font-serif font-bold uppercase tracking-wide text-neutral-800 leading-snug text-left">우아함은 결코 퇴색되지 않는 유일한 아름다움입니다.</h3>
                <p className="text-[16px] font-normal text-neutral-700 max-w-xl leading-relaxed text-left">
                  모든 브라이덜 링은 숙련된 장인들의 엄격하고 세밀한 세팅 과정을 거칩니다. 원석 본연의 투명한 다이아몬드는 빛에 반응하여 무수한 아름다운 Refraction을 만들어내며, 영원한 서약의 순수함을 지탱합니다.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Button variant="bordered" className="px-12 py-6 text-[14px] font-bold uppercase tracking-[0.3em]">
                  프라이빗 컨설팅 예약
                </Button>
              </div>
            </div>

            {/* Engagement Grid with in-frame rotation zoom */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-12">
              {displayedProducts.map((item, i) => (
                <Link key={item.id} href={`/ko/templates/OHMT002-jewelry-KO/product/${item.id}`} className="group block space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="cursor-pointer"
                  >
                    <div className="relative aspect-[3/4] mb-5 sm:mb-6 overflow-hidden bg-white border border-neutral-100/50">
                      <img 
                        src={item.img} 
                        className="w-full h-full object-cover transition-all duration-[2.2s] group-hover:scale-105 group-hover:rotate-2" 
                        alt={item.name} 
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--color-primary)]/5 transition-all duration-500" />
                    </div>
                    
                    <div className="space-y-2 text-center transition-transform duration-500 group-hover:-translate-y-1">
                      <h4 className="text-[15px] sm:text-[18px] font-serif font-bold text-neutral-900 tracking-wide group-hover:text-[var(--color-primary)] transition-colors leading-tight">{item.name}</h4>
                      <p className="text-[12px] sm:text-[14px] tracking-[0.05em] text-[var(--color-primary)] font-semibold leading-tight">{item.price}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Premium Load More Button */}
            {products.length > visibleCount && (
              <div className="flex justify-center pt-12 md:pt-24">
                <Button
                  onClick={() => setVisibleCount((prev) => prev + 4)}
                  variant="bordered"
                  className="px-16 py-6 text-[14px] font-bold uppercase tracking-[0.4em]"
                >
                  마스터피스 더 보기
                </Button>
              </div>
            )}
          </div>
        )}

        {/* 3. HIGH JEWELRY MUSEUM CURATION */}
        {category.type === "high" && (
          <div className="space-y-36">
            {/* Museum grid border wall */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left Museum Tag - 3 Columns */}
              <div className="lg:col-span-3 border-r border-neutral-200/50 pr-8 h-full hidden lg:flex flex-col justify-between py-2 min-h-[380px]">
                <span className="text-[14px] font-bold tracking-[0.6em] text-neutral-400 rotate-90 origin-left translate-x-6 translate-y-6 block">오트 갤러리</span>
                <div className="text-[14px] font-bold tracking-[0.4em] text-neutral-400 uppercase text-left">
                  독점 공개작 <br />
                  큐레이터 지정 엄선
                </div>
              </div>
              
              {/* Right Curated List - 9 Columns */}
              <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-2 gap-x-6 gap-y-10 sm:gap-12">
                {displayedProducts.map((item, i) => (
                  <Link key={item.id} href={`/ko/templates/OHMT002-jewelry-KO/product/${item.id}`} className="group block space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 1 }}
                      className="cursor-pointer"
                    >
                      <div className="relative aspect-[3/4] mb-5 sm:mb-6 overflow-hidden bg-white border border-neutral-200/30">
                        {/* High Contrast Filter */}
                        <img 
                          src={item.img} 
                          className="w-full h-full object-cover brightness-95 group-hover:scale-103 transition-transform duration-[2s]" 
                          alt={item.name} 
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-1000" />
                        <div className="absolute inset-5 border border-neutral-300/30 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-10" />
                      </div>
                      
                      <div className="space-y-2 text-center normal-case transition-transform duration-500 group-hover:-translate-y-1">
                        <h4 className="text-[15px] sm:text-[18px] font-serif font-bold text-neutral-900 tracking-wide uppercase group-hover:text-[var(--color-primary)] transition-colors leading-tight">{item.name}</h4>
                        <p className="text-[12px] sm:text-[14px] tracking-[0.05em] text-[var(--color-primary)] font-semibold leading-tight">{item.price}</p>
                        <p className="text-[12px] sm:text-[13px] text-neutral-500 font-normal pt-2 max-w-xs mx-auto leading-normal">{item.detail}</p>
                      </div>
                    </motion.div>
                  </Link>
                ))}

                {/* Premium Load More Button inside high-jewelry 9-col container */}
                {products.length > visibleCount && (
                  <div className="col-span-1 md:col-span-2 flex justify-center pt-16">
                    <Button
                      onClick={() => setVisibleCount((prev) => prev + 4)}
                      variant="bordered"
                      className="px-16 py-6 text-[14px] font-bold uppercase tracking-[0.4em]"
                    >
                      마스터피스 더 보기
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {/* 4. BRAND PHILOSOPHY ABOUT PAGE (Inspired by Jewelix Webflow) */}
        {category.type === "about" && (
          <div className="space-y-40">
            {/* The Pillars Section */}
            <div className="space-y-16">
              <div className="text-center">
                <span className="text-[14px] font-bold tracking-[0.4em] text-[var(--color-primary)] uppercase block mb-4">MAISON STANDARDS</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-neutral-800">Oh My Template의 세 가지 철학</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Gem className="w-8 h-8 text-[var(--color-primary)]" strokeWidth={1} />,
                    title: "타협 없는 순수함",
                    desc: "모든 다이아몬드는 전통적인 GIA 기준을 초월합니다. 독보적인 굴절율과 강렬한 광채를 위해 아틀리에가 엄격하게 엄선합니다."
                  },
                  {
                    icon: <Award className="w-8 h-8 text-[var(--color-primary)]" strokeWidth={1} />,
                    title: "건축학적 기하학",
                    desc: "수학적 비대칭성으로 조각되었습니다. 원석의 단면, 매끄러운 플래티넘, 그리고 순수한 구조적 여백의 역동적인 상호작용."
                  },
                  {
                    icon: <ShieldCheck className="w-8 h-8 text-[var(--color-primary)]" strokeWidth={1} />,
                    title: "아틀리에 헤리티지 보존",
                    desc: "전통적인 프랑스 핸드셋 파베 세팅을 보존합니다. 미세한 균열을 방지하기 위해 정밀 맞춤 도구로 모든 프롱을 조각합니다."
                  }
                ].map((pillar, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.8 }}
                    className="p-10 bg-white border border-neutral-100/60 relative group cursor-default transition-all duration-700 hover:border-[var(--color-primary)]/20"
                  >
                    <div className="mb-8">{pillar.icon}</div>
                    <h3 className="text-lg font-serif font-bold tracking-wide mb-4 text-neutral-800">{pillar.title}</h3>
                    <p className="text-sm font-normal text-neutral-500 leading-relaxed normal-case">{pillar.desc}</p>
                    <div className="absolute inset-4 border border-[var(--color-primary)]/10 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-700 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Video Showcase Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden"
            >
              <img 
                src="/templates/jewelry/jewelry-craft.png" 
                className="absolute inset-0 w-full h-full object-cover brightness-50"
                alt="Atelier Cinematic Film"
              />
              <div className="absolute inset-0 bg-neutral-900/10" />
              
              <div className="relative z-10 text-center px-6 max-w-2xl space-y-8">
                <span className="text-[14px] font-bold tracking-[0.6em] text-white/80 uppercase block">CINEMATIC EXPERIENCE</span>
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">메종 헤리티지 필름</h3>
                <p className="text-[14px] font-normal text-white/75 leading-relaxed max-w-md mx-auto normal-case">
                  우리의 아틀리에 스튜디오 내부로 들어가 미세한 세팅 하나하나에 쏟아부은 숭고하고 정성스러운 장인의 시간을 감상해보세요.
                </p>
                <div className="flex justify-center pt-4">
                  <div className="group flex items-center justify-center w-20 h-20 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-700 cursor-pointer">
                    <Play size={22} fill="currentColor" className="ml-1 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonials Slider */}
            <TestimonialSlider />
          </div>
        )}
      </div>
      <Footer />
    </main>

    </TemplateWrapper>
);
}

// Client Testimonials Slider Data
const TESTIMONIALS = [
  {
    quote: "Oh My Template의 인게이지먼트 밴드는 기하학의 경이로운 실현입니다. 스톤이 빛을 받아내는 각도는 마치 수학적으로 불가능할 것 같은 차원의 아름다움을 선사합니다.",
    author: "엘레나 로스토바",
    role: "컬렉터 / 보그 기고가"
  },
  {
    quote: "에메랄드 스테이트먼트 이어링은 미술관 소장 등급의 마스터피스입니다. 원석 자체의 완벽한 순도와 정밀한 세팅은 진정한 감동을 전합니다.",
    author: "마르쿠스 첸",
    role: "파인 아트 큐레이터"
  },
  {
    quote: "구조적 미니멀리즘이 원석 본연의 광채를 한층 더 끌어올린 아주 보기 드문 사례입니다. 현대 비스포크 주얼리의 정점을 목격했습니다.",
    author: "소피 라르손",
    role: "아틀리에 노르 창립자"
  }
];

function TestimonialSlider() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[var(--color-bg-secondary)] border border-neutral-100 py-12 md:py-24 px-8 md:px-16 text-center max-w-4xl mx-auto space-y-10 relative overflow-hidden">
      <span className="text-[14px] font-bold tracking-[0.4em] text-neutral-400 block">CLIENT TESTIMONIALS</span>
      <div className="min-h-[120px] flex items-center justify-center">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="space-y-6"
        >
          <p className="text-[18px] md:text-[20px] font-serif font-bold text-neutral-800 leading-relaxed normal-case">
            "{TESTIMONIALS[index].quote}"
          </p>
          <div className="space-y-1">
            <h5 className="text-[14px] font-bold tracking-[0.3em] text-neutral-900">{TESTIMONIALS[index].author}</h5>
            <p className="text-[14px] text-neutral-400 font-medium tracking-[0.2em]">{TESTIMONIALS[index].role}</p>
          </div>
        </motion.div>
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 pt-4">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              index === i ? "bg-[var(--color-primary)] w-6" : "bg-neutral-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}


export default function JewelryCategoryPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <JewelryCategoryPageContent {...props} />
    </React.Suspense>
  );
}
