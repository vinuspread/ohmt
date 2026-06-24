"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/Button";

export const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-black selection:bg-white selection:text-black">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="/templates/OHMT001-fashion/branding-custom.jpg"
          alt="Luxury Fashion Hero" 
          className="w-full h-full object-cover brightness-75"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 1 }}
           className="max-w-5xl"
        >
          <span className="text-[13px] md:text-[12px] uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold mb-6 sm:mb-12 block opacity-60" style={{ fontFamily: "'Pretendard', sans-serif" }}>
            2026년 설립
          </span>
          <h1 className="text-2xl sm:text-[3vw] md:text-[2.4vw] font-normal tracking-[-0.04em] leading-[1.0] mb-8 sm:mb-16 drop-shadow-2xl" style={{ fontFamily: "'Bodoni Moda', 'Nanum Myeongjo', 'Bodoni MT', 'Didot', serif" }}>
            <span className="block whitespace-nowrap font-normal">처음 입는 순간부터, 당신의 것이 됩니다</span>
            <span className="block whitespace-nowrap font-bold">완벽함은 디테일 안에 있다</span>
          </h1>

          <p className="text-[1rem] sm:text-[1.1rem] text-white/75 max-w-[580px] leading-[1.7] mb-8 sm:mb-16 font-normal drop-shadow-lg" style={{ fontFamily: "'Pretendard', sans-serif" }}>
            일시적인 트렌드를 따르기보다 당신의 감성과 개성을 온전히 표현하는 패션. 세련되고 개인적인 스타일을 추구하는 사람들을 위한 컬렉션입니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
             <button className="relative px-8 py-4 sm:px-12 sm:py-6 bg-white text-black text-[13px] sm:text-[12px] font-bold tracking-[0.15em] sm:tracking-[0.2em] border border-white overflow-hidden group" style={{ fontFamily: "'Pretendard', sans-serif" }}>
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">컬렉션 탐색</span>
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-[0.6s] ease-[0.16,1,0.3,1] origin-bottom" />
            </button>
            <Button variant="ghost" className="text-[13px] sm:text-[12px] font-bold tracking-[0.15em] sm:tracking-[0.2em] hover:tracking-[0.3em] transition-all duration-700 ease-out">
              캠페인 보기
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ArrowDown size={24} strokeWidth={1} />
      </motion.div>
    </section>
  );
};
