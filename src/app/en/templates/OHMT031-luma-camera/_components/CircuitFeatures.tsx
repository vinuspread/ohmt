"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

const featuresWithRealPhotos = [
  {
    title: "Window Daylight Skin Tones",
    label: "Portrait Optics Processing",
    desc: "Captures subtle light and shadow variations naturally without artificial skin smoothing.",
    image: "/templates/OHMT031-luma-camera/sample-portrait.png?v=20260703a",
  },
  {
    title: "Blue Hour Distant Separation",
    label: "Dynamic Range Separation",
    desc: "Separates twilight sky layers and urban lighting reflections cleanly without over-processed HDR.",
    image: "/templates/OHMT031-luma-camera/blue-hour.jpg?v=20260703a",
  },
  {
    title: "Low-Light Warmth Retention",
    label: "Low-Light Noise Control",
    desc: "Preserves the cozy room warmth without crushing shadow detail into solid black in dark environments.",
    image: "/templates/OHMT031-luma-camera/quiet-dinner.jpg?v=20260702e",
  },
  {
    title: "Still Life Texture Precision",
    label: "Color Balancing Sensor",
    desc: "Accurately represents natural material colors like ceramic, fabric, and fruit without exaggeration.",
    image: "/templates/OHMT031-luma-camera/sample-color.jpg?v=20260702e",
  },
  {
    title: "Micro-Texture Focus Detail",
    label: "Lens Micro Coating",
    desc: "Records delicate surface textures of paper, metal, and fabric with crisp clarity and no fake sharpening.",
    image: "/templates/OHMT031-luma-camera/engine-texture-close.jpg?v=20260702f",
  },
  {
    title: "Morning Urban Street Snap",
    label: "Backlight Control Algorithm",
    desc: "Captures morning sunlight filtering through urban streets with vivid depth and zero overexposure.",
    image: "/templates/OHMT031-luma-camera/morning-street.jpg?v=20260702f",
  },
  {
    title: "Natural Palette Rendering",
    label: "Neutral Color Engine",
    desc: "Generates balanced neutral tone image files that require minimal post-processing.",
    image: "/templates/OHMT031-luma-camera/engine-color-grid.jpg?v=20260702f",
  },
  {
    title: "Compact Magnesium Chassis",
    label: "Precision Hardware Architecture",
    desc: "Durable magnesium alloy body with tactile optical operation dials designed for pro ergonomics.",
    image: "/templates/OHMT031-luma-camera/body-detail.jpg?v=20260702e",
  },
];

export function CircuitFeatures() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#050608] py-20 md:py-28 border-t border-white/10 w-full overflow-hidden text-white">
      {/* Absolute Uniform Baseline Container */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="mb-10 flex items-end justify-between w-full">
          <div>
            <div className="dot-title mb-4">
              <span className="square-dot" />
              <span className="badge-text">OPTICAL REAL SAMPLES</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
              Real-World Samples & Case Studies
            </h2>
          </div>

          {/* Dynamic Interactive Carousel Control Arrows */}
          <div className="flex items-center gap-3">
            <motion.button
              type="button"
              onClick={scrollLeft}
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2.5 bg-[#07090c] border border-white/20 text-white font-mono text-xs font-bold hover:bg-white hover:text-black transition-colors"
              aria-label="Previous sample"
            >
              ← PREV
            </motion.button>
            <motion.button
              type="button"
              onClick={scrollRight}
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2.5 bg-[#07090c] border border-white/20 text-white font-mono text-xs font-bold hover:bg-white hover:text-black transition-colors"
              aria-label="Next sample"
            >
              NEXT →
            </motion.button>
          </div>
        </div>

        {/* 1-Row Horizontal Slider */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto pb-6 pt-4 flex gap-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {featuresWithRealPhotos.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -12, zIndex: 30 }}
              className="group relative flex-none w-[300px] sm:w-[400px] md:w-[480px] lg:w-[540px] h-[320px] sm:h-[380px] md:h-[420px] flex flex-col justify-end overflow-hidden bg-[#07090c] p-6 md:p-8 transition-all snap-start border border-white/15 hover:border-white/60 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Background Image */}
              <Image
                unoptimized
                src={item.image}
                alt={item.title}
                fill
                className="object-cover opacity-70 transition-transform duration-700 ease-out group-hover:scale-115 group-hover:opacity-95"
                sizes="(min-width: 1024px) 540px, 300px"
              />

              {/* Dark Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/40 to-transparent" />

              {/* Typography */}
              <div className="relative z-10">
                <span className="mb-2 inline-block font-sans text-[11px] font-semibold uppercase tracking-wider text-white/90 bg-black/70 px-3 py-1 backdrop-blur-md border border-white/10">
                  {item.label}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transition-colors group-hover:text-blue-400">
                  {item.title}
                </h3>
                <p className="text-xs text-[#888d99] leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
