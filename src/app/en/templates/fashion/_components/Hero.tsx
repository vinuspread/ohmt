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
          <span className="text-[13px] md:text-[12px] uppercase tracking-[0.6em] sm:tracking-[1em] font-bold mb-6 sm:mb-12 block opacity-60" style={{ fontFamily: "'Pretendard', sans-serif" }}>
            ESTABLISHED 2026
          </span>
          <h1 className="text-4xl sm:text-[6vw] md:text-[5vw] font-normal tracking-[-0.02em] leading-[1.0] mb-8 sm:mb-16 drop-shadow-2xl" style={{ fontFamily: "'Bodoni Moda', 'Bodoni MT', 'Didot', serif" }}>
            <span className="block whitespace-nowrap">LUXURY BRAND</span>
            <span className="block text-white/40 whitespace-nowrap">NEVER FADES</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <button className="relative px-8 py-4 sm:px-12 sm:py-6 bg-white text-black text-[13px] sm:text-[12px] font-bold tracking-[0.3em] sm:tracking-[0.4em] border border-white overflow-hidden group" style={{ fontFamily: "'Pretendard', sans-serif" }}>
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">EXPLORE COLLECTION</span>
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-[0.6s] ease-[0.16,1,0.3,1] origin-bottom" />
            </button>
            <Button variant="ghost" className="text-[13px] sm:text-[12px] font-bold tracking-[0.3em] sm:tracking-[0.4em] hover:tracking-[0.48em] transition-all duration-700 ease-out">
              WATCH CAMPAIGN
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
