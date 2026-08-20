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
          <span className="text-xs uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold mb-4 block opacity-60" style={{ fontFamily: "'Pretendard', sans-serif" }}>
            2026년 설립
          </span>
          <h1 className="w-full max-w-4xl mx-auto text-center text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.04em] leading-[var(--leading-body)] mb-6 drop-shadow-2xl break-keep text-balance" style={{ fontFamily: "var(--font-bodoni)" }}>
            언제나 편하게 다시 꺼내 입을 수 있는 실용적인 일상 속 베이직웨어를 꿈꿉니다.
          </h1>

          <p className="text-sm sm:text-base text-white/75 max-w-[600px] mx-auto text-center leading-relaxed mb-8 font-normal drop-shadow-lg break-keep text-pretty" style={{ fontFamily: "'Pretendard', sans-serif" }}>
            <span className="block">유행을 앞세우기보다 소재와 재단, 편안한 착용감을 먼저 생각합니다.</span>
            <span className="block">매일 입기 좋은 기본부터 특별한 날을 위한 의상을 한 컬렉션에 담았습니다.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
             <button className="relative px-8 py-3.5 sm:px-12 sm:py-4.5 bg-white text-black text-xs sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] overflow-hidden group" style={{ fontFamily: "'Pretendard', sans-serif" }}>
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">컬렉션 보기</span>
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-[0.6s] ease-[0.16,1,0.3,1] origin-bottom" />
            </button>
            <Button variant="ghost" className="text-xs sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] border border-white hover:opacity-60 transition-opacity duration-300 px-8 py-3.5 sm:px-12 sm:py-4">
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
