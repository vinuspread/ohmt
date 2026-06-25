"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const HERO_PRODUCTS = [
    {
      id: 1,
      name: "스컬프처럴 라운지 체어",
      image: "/templates/furniture/chair.png",
      subtitle: "신규 릴리즈 // 2026",
      titleLine1: "마음을 비우고",
      titleLine2: "편안함을 담다.",
      desc: "장인의 손끝에서 탄생한 라운지 시리즈로 최상의 안락함과 영원한 가치를 느껴보세요. 모든 디테일이 하나의 예술품입니다."
    },
    {
      id: 2,
      name: "아키텍처럴 테이블 램프",
      image: "/templates/furniture/lamp.png",
      subtitle: "한정판 에디션",
      titleLine1: "공간을 채우는",
      titleLine2: "빛의 사유.",
      desc: "정교한 선과 은은한 온기의 완벽한 조화. 현대적인 작업 공간에 어울리는 최첨단 전문 라이팅 오브제입니다."
    },
    {
      id: 3,
      name: "미니멀리스트 솔리드 오크 소파",
      image: "/templates/furniture/sofa.png",
      subtitle: "현대적인 클래식",
      titleLine1: "본질로 돌아간",
      titleLine2: "간결함.",
      desc: "친환경 소재와 형태적 아름다움의 조화. 사물의 본질과 정제된 디테일을 사랑하는 분들을 위해 디자인되었습니다."
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % HERO_PRODUCTS.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + HERO_PRODUCTS.length) % HERO_PRODUCTS.length);
  };

  const current = HERO_PRODUCTS[index];

  return (
    <section className="relative bg-white overflow-x-clip selection:bg-[var(--color-text)] selection:text-white flex flex-col pt-10 pb-4 lg:pt-0 lg:pb-0" style={{ minHeight: 'clamp(600px, 88vh, 1000px)' }}>

      {/* 그리드: 텍스트(좌) + 이미지(우) */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex-1 grid grid-cols-1 lg:grid-cols-[48%_52%] items-stretch w-full">

        {/* Left: 텍스트 */}
        <div className="z-10 relative flex flex-col justify-center order-last lg:order-first py-0 lg:py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col"
            >
              <span className="text-[12px] font-bold text-[var(--color-secondary)] uppercase mb-4 lg:mb-8 block tracking-wider">{current.subtitle}</span>
              <h1 className="text-[clamp(2.0rem,6.5vw,2.6rem)] lg:text-[clamp(3.8rem,5.2vw,5.5rem)] font-bold text-[var(--color-text)] leading-[1.05] mb-4 lg:mb-10 uppercase [text-wrap:balance] lg:[text-wrap:normal] break-keep [overflow-wrap:normal]">
                {current.titleLine1}<br />{current.titleLine2}
              </h1>
              <p className="text-[14px] lg:text-[15px] text-[var(--color-secondary)] font-normal leading-relaxed max-w-sm mb-6 lg:mb-12">
                {current.desc}
              </p>
              <div className="hidden lg:flex items-center gap-6">
                <Button variant="primary" className="px-10 py-4 text-[14px] font-bold rounded-full flex items-center gap-3 whitespace-nowrap">
                  {"구매하기"} <ArrowRight size={16} />
                </Button>
                <Button variant="ghost" className="group flex items-center gap-3 text-[14px] font-bold whitespace-nowrap">
                  <div className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-500 flex-shrink-0">
                    <Play size={13} fill="currentColor" />
                  </div>
                  {"스토리 영상"}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: 이미지 */}
        <div className="relative h-[360px] sm:h-[420px] lg:h-auto order-first lg:order-2 overflow-visible">
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 260 : -260, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction > 0 ? -260 : 260, scale: 0.85 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -inset-x-8 lg:-inset-x-16 inset-y-0 lg:-inset-y-8 flex items-center justify-center"
            >
              <motion.img
                src={current.image}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-[2s] pointer-events-none"
                alt={current.name}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 모바일 버튼 */}
      <div className="flex lg:hidden items-center justify-center gap-4 px-6 pt-6 pb-6 z-30">
        <Button variant="primary" className="px-6 py-3 text-[13px] font-bold rounded-full flex items-center gap-2 whitespace-nowrap">
          {"구매하기"} <ArrowRight size={14} />
        </Button>
        <Button variant="ghost" className="group flex items-center gap-2 text-[13px] font-bold whitespace-nowrap">
          <div className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-500 flex-shrink-0">
            <Play size={12} fill="currentColor" />
          </div>
          {"스토리 영상"}
        </Button>
      </div>

      {/* Slider Controls */}
      <div className="flex items-center justify-center gap-4 md:gap-10 pb-6 lg:pb-10 z-30">
          <button
            onClick={prevSlide}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-white hover:border-black/20 transition-colors hover: flex-shrink-0"
          >
            <ArrowLeft size={14} className="md:w-4" strokeWidth={1.5} />
          </button>

          <div className="flex items-center gap-2 md:gap-3">
            {HERO_PRODUCTS.map((_, i) => (
              <div
                key={i}
                className={`transition-[width,height,border-radius,background-color] duration-700 rounded-full ${index === i ? "w-6 md:w-8 h-[2px] bg-black" : "w-1.5 h-1.5 bg-black/10"}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-white hover:border-black/20 transition-colors hover: flex-shrink-0"
          >
            <ArrowRight size={14} className="md:w-4" strokeWidth={1.5} />
          </button>
      </div>

    </section>
  );
};

export const CategoryNav = () => {
  const categories = [
    { name: "소파",             image: "/templates/furniture/sofa.png",       id: "sofas" },
    { name: "침실",             image: "/templates/furniture/bed.png",        id: "bedroom" },
    { name: "다이닝",           image: "/templates/furniture/table.png",      id: "dining" },
    { name: "홈 오피스",         image: "/templates/furniture/desk.png",       id: "home-office" },
    { name: "의자",             image: "/templates/furniture/chair.png",      id: "chairs" },
    { name: "조명",             image: "/templates/furniture/lamp.png",       id: "lighting" },
    { name: "리빙",             image: "/templates/furniture/sidetable.png",  id: "living" },
    { name: "수납",             image: "/templates/furniture/wardrobe.png",   id: "storage" },
  ];

  return (
    <section className="bg-white py-12 md:py-20 lg:py-24 border-b border-black/5 selection:bg-black selection:text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center mb-8">
          <span className="inline-block text-[13px] font-bold text-[var(--color-primary)] uppercase mb-4 opacity-40">{"큐레이팅 가구 시리즈 둘러보기"}</span>
          <div className="h-[1px] w-12 bg-black/10 mx-auto" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-8 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Link key={i} href={`/ko/templates/furniture/category/${cat.id}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 8 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.5,
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="group cursor-pointer flex flex-col items-center"
              >
                <div className="w-full aspect-square mb-2 md:mb-4 lg:mb-6 flex items-center justify-center p-2 md:p-4 relative overflow-hidden">
                  <motion.img
                    src={cat.image}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    alt={cat.name}
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-[13px] md:text-[13px] font-bold text-[var(--color-text)] uppercase group-hover:opacity-50 transition-opacity duration-500 line-clamp-2">
                    {cat.name}
                  </h4>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
