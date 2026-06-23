"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const CategoryBanners = () => {
  return (
    <section className="py-12 md:py-24 bg-white selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Womenswear Banner */}
          <Link href="#" className="relative block aspect-[16/10] overflow-hidden group cursor-pointer bg-gray-100">
            <div className="absolute inset-0 z-0">
              <img
                src="/templates/OHMT001-fashion/womenswear-banner.png"
                alt="위민스웨어"
                className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-[2s] ease-out-quint"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-700" />
            </div>

            {/* Title Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14 z-10 text-white">
              <span className="text-[11px] uppercase tracking-[0.4em] font-medium opacity-60 mb-2">
                컬렉션
              </span>
              <h4 className="text-xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                위민스웨어
              </h4>
              <div className="w-12 h-[1px] bg-white group-hover:w-20 transition-[width] duration-700 origin-left" />
            </div>
          </Link>

          {/* Menswear Banner */}
          <Link href="#" className="relative block aspect-[16/10] overflow-hidden group cursor-pointer bg-gray-100">
            <div className="absolute inset-0 z-0">
              <img
                src="/templates/OHMT001-fashion/menswear-banner.png"
                alt="멘스웨어"
                className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-[2s] ease-out-quint"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-700" />
            </div>

            {/* Title Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14 z-10 text-white">
              <span className="text-[11px] uppercase tracking-[0.4em] font-medium opacity-60 mb-2">
                컬렉션
              </span>
              <h4 className="text-xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                멘스웨어
              </h4>
              <div className="w-12 h-[1px] bg-white group-hover:w-20 transition-[width] duration-700 origin-left" />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};
