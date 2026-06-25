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
            className="text-[11px] uppercase tracking-[0.6em] sm:tracking-[0.8em] pl-[0.6em] sm:pl-[0.8em] mb-4 sm:mb-8 font-medium opacity-50 font-sans"
          >
            바이너스프레드의 철학
          </motion.p>
         
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 1.5 }}
            className="text-[13px] sm:text-[2.5vw] md:text-[1.6vw] lg:text-[1.3vw] font-normal tracking-[-0.03em] uppercase mb-6 sm:mb-12 leading-[1.3]"
            style={{ fontFamily: "'Pretendard', sans-serif" }}
          >
            <span className="block">침묵 속에서 울려 퍼지는</span>
            <span className="block text-white/20 font-normal tracking-[0.01em]">형태의 언어.</span>
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
             className="text-[13px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] mr-[-0.3em] sm:mr-[-0.4em] border-b border-white/40 pb-2 hover:border-white transition-colors inline-block hover:opacity-70"
           >
             더 알아보기
           </Link>
        </motion.div>
      </div>
    </section>
  );
};
