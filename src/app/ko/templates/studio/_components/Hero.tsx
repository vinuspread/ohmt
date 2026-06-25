'use client';

import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MOTION_CONSTANTS } from './motion-constants';

const heroSlides = [
  { id: 1, image: '/templates/studio/hero-1.jpg', title: '공간의 본질', subtitle: '삶을 짓는 디자인.' },
  { id: 2, image: '/templates/studio/hero-2.jpg', title: '사적인 여백', subtitle: '영감을 깨우는 시퀀스.' },
  { id: 3, image: '/templates/studio/hero-3.jpg', title: '시간의 영속성', subtitle: '시대를 관통하는 건축적 미학.' },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const { scrollY } = useViewportScroll();
  const parallaxY = useTransform(scrollY, [0, 800], [0, 120]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setCurrent((p) => (p + 1) % heroSlides.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((p) => (p - 1 + heroSlides.length) % heroSlides.length);
    setAutoPlay(false);
  };

  return (
    <section className="relative h-screen min-h-[800px] flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Slider Images */}
      {heroSlides.map((slide, idx) => (
        <motion.div
          key={slide.id}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: idx === current ? 1 : 0 }}
          transition={{ duration: 1, ease: MOTION_CONSTANTS.easings.easeOut }}
          style={{ y: parallaxY }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover opacity-40"
            priority={idx === 0}
          />
        </motion.div>
      ))}

      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: MOTION_CONSTANTS.scales.enter }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: MOTION_CONSTANTS.durations.max, ease: MOTION_CONSTANTS.easings.easeOut }}
          className="mb-12"
        >
          <motion.h1
            key={`title-${current}`}
            initial={{ opacity: 0, y: 30, scale: MOTION_CONSTANTS.scales.enter }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: MOTION_CONSTANTS.durations.max - 0.1, ease: MOTION_CONSTANTS.easings.easeOut }}
            className="text-white font-semibold text-[78px] leading-[1.35] tracking-[-3.9px] m-0 p-0"
          >
            {heroSlides[current].title}
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: MOTION_CONSTANTS.durations.ui, delay: 0.15 }}
              className="text-white/70 text-[32px] block mt-4"
            >
              {heroSlides[current].subtitle}
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: MOTION_CONSTANTS.durations.max, delay: 0.25, ease: MOTION_CONSTANTS.easings.easeOut }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: MOTION_CONSTANTS.scales.press }}
        >
          <a
            href="/ko/templates/OHMT006-studio-KO/contact"
            className="inline-flex items-center justify-center h-[54px] px-12 border border-white/75 rounded-none text-white text-[13px] font-normal tracking-[3px] uppercase hover:bg-white hover:text-black transition-colors duration-200"
          >
            상담 및 문의
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: MOTION_CONSTANTS.durations.ui, delay: 0.35, ease: MOTION_CONSTANTS.easings.easeOut }}
          className="w-[1px] h-[100px] bg-white/40 mt-[60px]"
          style={{ originY: 0 }}
        />
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-[48px] left-0 right-0 px-[64px] flex justify-between items-end z-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: MOTION_CONSTANTS.durations.max, delay: 0.4, ease: MOTION_CONSTANTS.easings.easeOut }}
          className="flex gap-[48px] text-[13px] font-normal tracking-[3px] uppercase"
        >
          <div className="flex flex-col gap-1">
            <span className="opacity-60">Est.</span>
            <span>2026</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="opacity-60">Locations</span>
            <span>Seoul / KR</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: MOTION_CONSTANTS.durations.max, delay: 0.35, ease: MOTION_CONSTANTS.easings.easeOut }}
          className="flex items-center gap-[32px]"
        >
          {/* Page Indicators */}
          <div className="flex gap-[8px]">
            {heroSlides.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  setCurrent(idx);
                  setAutoPlay(false);
                }}
                className={`h-[2px] transition-all duration-200 ${
                  idx === current ? 'w-[24px] bg-white' : 'w-[8px] bg-white/40 hover:bg-white/60'
                }`}
                whileHover={{ width: 14 }}
                whileTap={{ scale: MOTION_CONSTANTS.scales.press }}
                transition={{ duration: MOTION_CONSTANTS.durations.press, ease: MOTION_CONSTANTS.easings.easeOut }}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-[12px]">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: MOTION_CONSTANTS.scales.press }}
              transition={{ duration: MOTION_CONSTANTS.durations.press, ease: MOTION_CONSTANTS.easings.easeOut }}
              className="w-[40px] h-[40px] border border-white/40 hover:border-white rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <ChevronLeft size={18} />
            </motion.button>
            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: MOTION_CONSTANTS.scales.press }}
              transition={{ duration: MOTION_CONSTANTS.durations.press, ease: MOTION_CONSTANTS.easings.easeOut }}
              className="w-[40px] h-[40px] border border-white/40 hover:border-white rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-[48px] left-0 right-0 px-[64px] flex justify-center z-20">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white text-[13px] font-normal tracking-[3px] uppercase opacity-60"
        >
          <span>Scroll</span>
          <div className="w-[1px] h-[24px] bg-white/40" />
        </motion.div>
      </div>
    </section>
  );
}
