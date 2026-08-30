"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HardwareBanner() {
  const specs = [
    {
      code: "01 / CTRL",
      label: "실시간 광학 제어",
    },
    {
      code: "02 / AF",
      label: "폐회로 오토포커스",
    },
    {
      code: "03 / DEV",
      label: "편차 자동 감지",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050608] py-24 md:py-36 text-white w-full min-h-[55vh] flex items-center border-t border-b border-white/10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          unoptimized
          src="/templates/OHMT031-luma-camera/hero-camera.jpg?v=20260702e"
          alt="LUMA 하드웨어 시네마틱 풀 배경"
          fill
          priority
          className="object-cover object-center opacity-60 md:opacity-75 scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/75 to-transparent w-full md:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-[#050608]" />
      </div>

      {/* Strictly Unified Max Width Container max-w-[1440px] */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center w-full">
          <div>
            <div className="dot-title mb-5">
              <span className="square-dot" />
              <span className="badge-text">HARDWARE SPECIFICATION</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none mb-6">
              The LUMA X-1
            </h2>

            {/* Horizontal Technical Badges Overlay */}
            <div className="flex flex-wrap items-center gap-3">
              {specs.map((spec, idx) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-center gap-3 bg-black/70 border border-white/15 px-4 py-2.5 backdrop-blur-md transition-colors hover:border-white/40"
                >
                  <span className="font-sans text-[11px] font-bold text-white/70">
                    {spec.code}
                  </span>
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-white">
                    {spec.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/90 leading-relaxed bg-black/60 border border-white/15 p-6 backdrop-blur-md">
              INDUSTRIAL WORKFLOWS OFTEN HIDE INEFFICIENCIES. THE LUMA X-1 CAPTURES SMALL SHIFTS IN OPTICAL PERFORMANCE AND SENSOR OUTPUT, MAKING PATTERNS VISIBLE BEFORE THEY BECOME MAJOR FAILURES.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
