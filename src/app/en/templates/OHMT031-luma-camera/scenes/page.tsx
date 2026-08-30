"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ScenesPageEn() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const navItems = [
    { label: "Products", href: "/en/templates/OHMT031-luma-camera/shop" },
    { label: "Optical Engine", href: "/en/templates/OHMT031-luma-camera/image-engine" },
    { label: "Shooting Scenes", href: "/en/templates/OHMT031-luma-camera/scenes" },
    { label: "Case Studies", href: "/en/templates/OHMT031-luma-camera/stories" },
  ];

  const scenes = [
    {
      title: "Workshop Precision Optical Module",
      category: "R&D & Prototype Studio",
      lens: "35mm f/1.4 Master",
      exposure: "1/500s · ISO 100",
      desc: "Hardware test bench environment integrated with vertical reflectors and measuring instruments.",
      image: "/templates/OHMT031-luma-camera/scene-workshop.jpg?v=20260702e",
      aspect: "aspect-[4/5]",
    },
    {
      title: "Kitchen Counter Daylight Still",
      category: "Lifestyle & Interior Lighting",
      lens: "50mm f/1.2 Macro",
      exposure: "1/250s · ISO 200",
      desc: "Expressing delicate fabric stitches and marble textures under 3 PM direct daylight.",
      image: "/templates/OHMT031-luma-camera/scene-kitchen-counter.jpg?v=20260702e",
      aspect: "aspect-[3/4]",
    },
    {
      title: "Travel Morning Street Snap",
      category: "Outdoor Dynamic Photography",
      lens: "28mm f/2.0 Wide",
      exposure: "1/1000s · ISO 100",
      desc: "Dewy morning street atmosphere balancing cold moisture and golden sunlight tones.",
      image: "/templates/OHMT031-luma-camera/scene-travel-morning.jpg?v=20260702e",
      aspect: "aspect-[16/10]",
    },
    {
      title: "Dining Low-Light Mood",
      category: "Low-Light Ambience",
      lens: "35mm f/1.4 Master",
      exposure: "1/60s · ISO 1600",
      desc: "Capturing portrait shadow details under dim candle lighting without crushing darks into black.",
      image: "/templates/OHMT031-luma-camera/quiet-dinner.jpg?v=20260702e",
      aspect: "aspect-[4/5]",
    },
    {
      title: "Window Daylight Skin Tone",
      category: "Portrait Optics Profile",
      lens: "85mm f/1.2 Portrait",
      exposure: "1/400s · ISO 100",
      desc: "Expressing subtle light and shadow variations naturally without artificial skin smoothing.",
      image: "/templates/OHMT031-luma-camera/sample-portrait.png?v=20260703a",
      aspect: "aspect-[4/5]",
    },
    {
      title: "Blue Hour City Horizon",
      category: "Landscape & Urban Architecture",
      lens: "24mm f/1.8 Prime",
      exposure: "1/4s · ISO 400",
      desc: "Cleanly separating twilight sky layers and urban lighting reflections without over-processed HDR.",
      image: "/templates/OHMT031-luma-camera/blue-hour.jpg?v=20260703a",
      aspect: "aspect-[16/10]",
    },
    {
      title: "Ceramic Still Life Color Balance",
      category: "Product Still Photography",
      lens: "50mm f/1.4 Classic",
      exposure: "1/160s · ISO 100",
      desc: "Accurately representing natural ceramic and fruit material colors without exaggeration.",
      image: "/templates/OHMT031-luma-camera/sample-color.jpg?v=20260702e",
      aspect: "aspect-[3/4]",
    },
    {
      title: "Magnesium Chassis Macro Detail",
      category: "Hardware Macro",
      lens: "90mm f/2.8 Macro",
      exposure: "1/200s · ISO 100",
      desc: "Recording micro-knurling textures on metallic control dial surfaces with crisp macro optics.",
      image: "/templates/OHMT031-luma-camera/body-detail.jpg?v=20260702e",
      aspect: "aspect-[4/5]",
    },
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
                <span className="badge-text">SHOOTING SCENES</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl text-white mb-6">
                Shooting Scenes & 8 Film Strip Gallery
              </h1>
              <p className="text-lg text-[#888d99] max-w-2xl leading-relaxed">
                From precision studio inspection to outdoor landscapes, explore actual EXIF metadata and sample frames captured by LUMA hardware.
              </p>
            </motion.div>

            {/* 8 Scenes Film Strip Grid */}
            <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
              {scenes.map((s, idx) => (
                <motion.div
                  key={s.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
                  className="group pt-6 border-t border-white/15 w-full"
                >
                  <div className={`relative ${s.aspect} w-full overflow-hidden mb-6 bg-[#050608]`}>
                    <Image
                      unoptimized
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#888d99]">
                      {s.category}
                    </span>
                    <span className="font-sans text-xs font-mono text-white/70 bg-white/5 px-2.5 py-1">
                      {s.lens} · {s.exposure}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-sm text-[#888d99] leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
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
