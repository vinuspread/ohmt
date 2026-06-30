"use client";

import { MapPin, FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <img
        src="/templates/resort/hero.jpg"
        alt="OHMT Resort"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 pt-[90px] md:pt-[100px]">


        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 text-white text-sm">
            <MapPin size={16} color="#FFC392" weight="fill" />
            <span>88 Tidal Walk, Byron Bay, Australia</span>
          </div>
          <p className="text-white text-sm text-right max-w-[260px] leading-relaxed hidden md:block">
            At OHMT, a seaside sanctuary of minimalist luxury
          </p>
        </div>

        <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16 pointer-events-none">
          <h1 className="font-semibold text-white leading-[0.85] tracking-[-0.02em] select-none"
              style={{ fontSize: "clamp(80px, 16vw, 280px)" }}>
            <span className="block">Slow</span>
            <span className="block">Luxuriance</span>
          </h1>
        </div>

        <div className="flex justify-between items-end gap-8 z-10">
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 max-w-[380px]">
            <p className="text-white text-sm leading-relaxed">
              Local stone, sand-treated concrete, and natural wood finishes
              echo the textures of the shoreline, blending architecture with nature.
            </p>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 max-w-[360px] hidden md:block">
            <p className="text-white text-sm leading-relaxed">
              The villas were built using a low-impact method that follows
              the land&apos;s natural contours, blending gently into the coastal landscape.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 flex gap-3 z-10">
        {[FacebookLogo, InstagramLogo, XLogo].map((Icon, i) => (
          <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-all">
            <Icon size={16} weight="bold" />
          </a>
        ))}
      </div>
    </section>
  );
}
