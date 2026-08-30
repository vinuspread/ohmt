"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ImageEnginePageEn() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const navItems = [
    { label: "Products", href: "/en/templates/OHMT031-luma-camera/shop" },
    { label: "Optical Engine", href: "/en/templates/OHMT031-luma-camera/image-engine" },
    { label: "Shooting Scenes", href: "/en/templates/OHMT031-luma-camera/scenes" },
    { label: "Case Studies", href: "/en/templates/OHMT031-luma-camera/stories" },
  ];

  const specs = [
    {
      code: "SPEC 01",
      title: "45MP Aspherical Wide Sensor",
      desc: "High-resolution full-frame sensor preserving authentic optical clarity without artificial digital sharpening.",
    },
    {
      code: "SPEC 02",
      title: "Dual Nano ISO Noise Control",
      desc: "Safeguards color temperature accuracy and preserves shadow gradation even in extreme low-light environments.",
    },
    {
      code: "SPEC 03",
      title: "Closed-Loop Autofocus Engine",
      desc: "Ultra-precise real-time feedback optical loop operating at 120 correction cycles per second.",
    },
    {
      code: "SPEC 04",
      title: "Optical Calibration Guarantee",
      desc: "Hardware calibration guaranteeing 100% vertical and horizontal illumination precision within +300nm.",
    },
    {
      code: "SPEC 05",
      title: "16-Bit RAW Hi-Fi Pipeline",
      desc: "Directly records uncompressed pure sensor data into 16-bit high-fidelity uncompressed RAW files.",
    },
    {
      code: "SPEC 06",
      title: "Anti-Reflective Nano Matrix",
      desc: "Multi-layer nano-vapor deposition coating preventing lens flare and backlight glare.",
    },
    {
      code: "SPEC 07",
      title: "Low-Power Heat Sink Engine",
      desc: "Aviation-grade magnesium housing instantly dissipating sensor heat during continuous burst shooting.",
    },
    {
      code: "SPEC 08",
      title: "Real-time Metadata Sync",
      desc: "Automated tracking recording illuminance, color temperature, and position metadata per frame.",
    },
  ];

  const techComparison = [
    { name: "Effective Pixels", val1: "45.7 Megapixels (45.7MP)", val2: "Standard 24.0 Megapixels" },
    { name: "Dynamic Range", val1: "15.4 Stops Hi-Fi", val2: "13.2 Stops" },
    { name: "AF Tracking Frequency", val1: "120Hz Closed-Loop", val2: "60Hz Open-Loop" },
    { name: "RAW Color Bit Depth", val1: "16-Bit Uncompressed RAW", val2: "14-Bit Compressed RAW" },
    { name: "Passive Thermal Architecture", val1: "Magnesium Passive Shield", val2: "Standard Fan Cooling" },
  ];

  return (
    <TemplateWrapper>
      <div className="luma-camera-template min-h-screen bg-[#050608] text-white">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050608]/90 backdrop-blur-md">
          <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-12">
            <Link href="/en/templates/OHMT031-luma-camera" className="text-xl font-bold tracking-tight text-white">
              LUMA
            </Link>

            <nav className="hidden items-center gap-10 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-4 md:flex">
              <Link href="/en/templates/OHMT031-luma-camera/shop" className="button-glass hover:border-white">
                <span>Purchase</span>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-sm font-bold text-white md:hidden uppercase tracking-wider"
              aria-label="Toggle menu"
            >
              {mobileOpen ? "CLOSE" : "MENU"}
            </button>
          </div>

          {mobileOpen && (
            <div className="border-t border-white/10 bg-[#050608] px-6 py-6 md:hidden">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-white/90"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/en/templates/OHMT031-luma-camera/shop"
                  onClick={() => setMobileOpen(false)}
                  className="button-blue mt-4 w-full justify-center"
                >
                  Purchase
                </Link>
              </div>
            </div>
          )}
        </header>

        <main className="py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-8"
            >
              <Link href="/en/templates/OHMT031-luma-camera" className="inline-block font-sans text-xs font-semibold uppercase tracking-wider text-[#888d99] hover:text-white transition-colors">
                ← Back to Main
              </Link>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-16"
            >
              <div className="dot-title mb-6">
                <span className="square-dot" />
                <span className="badge-text">OPTICAL ARCHITECTURE</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-white mb-6">
                LUMA Optical Image Engine
              </h1>
              <p className="text-lg md:text-xl text-[#888d99] max-w-3xl leading-relaxed">
                From light transmittance to sensor pixel noise, LUMA’s next-generation 8 core optical hardware processes are built for pure uncompromised imaging.
              </p>
            </motion.div>

            {/* 8 Spec Cards Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-24 w-full">
              {specs.map((spec, idx) => (
                <motion.div
                  key={spec.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05, ease: EASE }}
                  className="pt-6 border-t border-white/15 w-full flex flex-col justify-between"
                >
                  <div>
                    <span className="font-sans text-xs font-bold text-white/70 block mb-3">
                      {spec.code}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3">{spec.title}</h3>
                    <p className="text-sm text-[#888d99] leading-relaxed">{spec.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* High-res Image Showcase */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="relative aspect-[21/9] w-full overflow-hidden bg-[#07090c] group mb-24"
            >
              <Image
                unoptimized
                src="/templates/OHMT031-luma-camera/engine-texture-close.jpg?v=20260702f"
                alt="LUMA Lens Detail"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-white/90 block mb-2">
                    LENS MICRO COATING PROCESS
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold text-white">Nano-Level Anti-Reflective Coating</h3>
                </div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Link href="/en/templates/OHMT031-luma-camera/shop" className="button-blue">
                    <span>Purchase System</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Technical Comparison Matrix */}
            <div className="pt-16 border-t border-white/15">
              <div className="mb-12">
                <div className="dot-title mb-4">
                  <span className="square-dot" />
                  <span className="badge-text">BENCHMARK COMPARISON</span>
                </div>
                <h2 className="text-3xl font-bold md:text-5xl text-white">
                  Detailed Optical Spec Matrix
                </h2>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full text-left font-sans text-sm">
                  <thead>
                    <tr className="border-b border-white/20 text-xs font-semibold uppercase tracking-wider text-[#888d99]">
                      <th className="py-4 pr-6">Optical Parameter</th>
                      <th className="py-4 px-6 text-white font-bold">LUMA X-1 Engine</th>
                      <th className="py-4 pl-6 text-[#888d99]">Standard Category Specs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {techComparison.map((row) => (
                      <tr key={row.name} className="hover:bg-white/5 transition-colors">
                        <td className="py-5 pr-6 font-bold text-white">{row.name}</td>
                        <td className="py-5 px-6 font-semibold text-white bg-white/5">{row.val1}</td>
                        <td className="py-5 pl-6 text-[#888d99]">{row.val2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#020304] px-6 py-16 md:px-12 mt-20">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-6 md:flex-row md:items-center md:justify-between font-sans text-xs text-[#888d99]">
            <div className="flex items-center gap-2 text-white font-bold">
              <span className="square-dot" />
              <span>LUMA — Hardware Optical Architecture</span>
            </div>
            <div>
              © 2026 OHMT. English Hardware Camera Template based on Webflow Hardware Technology Consulting.
            </div>
          </div>
        </footer>
      </div>
    </TemplateWrapper>
  );
}
