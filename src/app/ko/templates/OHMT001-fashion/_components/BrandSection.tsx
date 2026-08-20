"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const BrandSection = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden group bg-black text-white selection:bg-white selection:text-black">
      {/* Background Image with Zoom and Grayscale Hover */}
      <div className="absolute inset-0">
        <img
          src="/templates/OHMT001-fashion/hero-custom.jpg"
          alt="Luxury Branding Atmosphere" 
          className="w-full h-full object-cover grayscale brightness-[0.35] opacity-50 group-hover:scale-110 transition-transform duration-[6s] ease-out-quint"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Philosophy Content */}
      <div className="w-full max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-8 lg:px-12">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="text-xs uppercase tracking-[-0.03em] mb-4 sm:mb-8 font-medium opacity-50 font-sans"
          >
            SILO의 기준
          </motion.p>
         
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 1.5 }}
            className="text-xs sm:text-[2.5vw] md:text-[1.6vw] lg:text-[1.3vw] font-normal tracking-[-0.04em] uppercase mb-6 sm:mb-12 leading-[var(--leading-body)]"
            style={{ fontFamily: "'Pretendard', sans-serif" }}
          >
            <span className="block">옷을 만드는 기준은,</span>
            <span className="block text-white/20 font-normal tracking-[-0.04em]">입는 시간을 생각하는 일.</span>
          </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 0.2, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="w-20 sm:w-28 h-[1px] bg-white mx-auto mb-6 sm:mb-12 origin-center"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
        >
            <Link 
              href="#" 
              className="text-xs font-bold uppercase tracking-[-0.03em] border-b border-white/40 pb-2 hover:border-white transition-colors inline-block hover:opacity-70"
            >
              브랜드 이야기 보기
            </Link>
        </motion.div>
      </div>
    </section>
  );
};
