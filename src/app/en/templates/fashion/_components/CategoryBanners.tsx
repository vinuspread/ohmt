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
                src="/templates/fashion/womenswear-banner.png"
                alt="WOMENSWEAR"
                className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-all duration-[2s] ease-out-quint"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-700" />
            </div>

            {/* Title Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14 z-10 text-white">
              <span className="text-[11px] uppercase tracking-[0.4em] font-medium opacity-60 mb-2">
                COLLECTION
              </span>
              <h4 className="text-xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                WOMENSWEAR
              </h4>
              <div className="w-12 h-[1px] bg-white group-hover:w-20 transition-all duration-700 origin-left" />
            </div>
          </Link>

          {/* Menswear Banner */}
          <Link href="#" className="relative block aspect-[16/10] overflow-hidden group cursor-pointer bg-gray-100">
            <div className="absolute inset-0 z-0">
              <img
                src="/templates/fashion/menswear-banner.png"
                alt="MENSWEAR"
                className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-all duration-[2s] ease-out-quint"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-700" />
            </div>

            {/* Title Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14 z-10 text-white">
              <span className="text-[11px] uppercase tracking-[0.4em] font-medium opacity-60 mb-2">
                COLLECTION
              </span>
              <h4 className="text-xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                MENSWEAR
              </h4>
              <div className="w-12 h-[1px] bg-white group-hover:w-20 transition-all duration-700 origin-left" />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};
