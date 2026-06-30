'use client';

import { motion } from 'framer-motion';
import { MOTION_CONSTANTS } from './motion-constants';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/templates/OHMT006-studio/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: MOTION_CONSTANTS.scales.enter }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: MOTION_CONSTANTS.durations.max, ease: MOTION_CONSTANTS.easings.easeOut }}
          className="mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: MOTION_CONSTANTS.scales.enter }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: MOTION_CONSTANTS.durations.max - 0.1, ease: MOTION_CONSTANTS.easings.easeOut }}
            className="text-white font-semibold text-[78px] leading-[94px] tracking-[-3.9px] m-0 p-0"
          >
            Interior design
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: MOTION_CONSTANTS.durations.ui, delay: 0.15 }}
              className="text-white/70"
            >
              that matters.
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
            href="#"
            className="inline-flex items-center justify-center h-[54px] px-12 border border-white/75 rounded-none text-white text-[13px] font-normal tracking-[3px] uppercase hover:bg-white hover:text-black transition-colors duration-200"
          >
            Schedule a call
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

      {/* Bottom Info */}
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
            <span>Austin / TX</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
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
