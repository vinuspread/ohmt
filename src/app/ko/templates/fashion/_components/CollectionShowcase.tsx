"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export const CollectionShowcase = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-[#F9F9FB] selection:bg-black selection:text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-center">
          
          {/* Asymmetric Left: High Quality Lookbook Image */}
          <div className="lg:col-span-7 group cursor-pointer relative overflow-hidden aspect-[4/3] md:aspect-[16/10] bg-gray-200">
            <motion.div
              initial={{ scale: 1.08, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img
                src="/templates/fashion/exclusive-custom.jpg"
                alt="Exclusive Collection Lookbook" 
                className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-[filter,transform] duration-[1.8s] ease-out-sine"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-1000" />
            </motion.div>
          </div>

          {/* Asymmetric Right: Editorial Typography */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-3 sm:space-y-4"
            >
              <span className="text-[11px] uppercase tracking-[0.4em] sm:tracking-[0.6em] text-black/40 font-medium block">
                리미티드 에디션
              </span>
              <h3 className="text-3xl md:text-5xl font-normal tracking-[-0.03em] uppercase leading-[1.5]">
                익스클루시브 <br />
                <span className="font-semibold">라이프스타일 랩</span>
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 0.6, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
              className="text-[13px] text-black/70 leading-[1.7] font-medium tracking-[0.02em] max-w-md normal-case"
            >
              우리는 절제된 우아함과 타협하지 않는 품질을 추구합니다. 현대적인 실루엣에 깊은 감정적 울림을 불어넣어 시간의 흐름을 초월하는 독창적인 라이프스타일을 제시합니다. 거장의 테일러링과 세심하게 엄선된 소재로 정교하게 제작된 리미티드 에디션 컬렉션을 만나보세요.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="pt-2"
            >
              <Button variant="outline" className="px-8 py-4 sm:px-12 sm:py-4.5 text-[13px] sm:text-[13px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] mr-[-0.25em] sm:mr-[-0.3em] hover:tracking-[0.35em] hover:mr-[-0.35em] transition-all duration-700 ease-out">
                룩북 둘러보기
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
