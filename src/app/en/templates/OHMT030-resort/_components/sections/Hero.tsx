"use client";

import { MapPin, FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <img
        src="/templates/OHMT030-resort/hero.jpg"
        alt="OHMT Resort"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 px-6 pb-6 pt-24 md:flex md:flex-col md:justify-between md:p-12 md:pt-24">


        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 text-xs text-white md:text-sm">
            <MapPin size={16} color="var(--accent)" weight="fill" className="hidden md:block" />
            <span>88 Tidal Walk, Byron Bay, Australia</span>
          </div>
          <p className="text-white text-sm text-right max-w-[260px] leading-relaxed hidden md:block">
            At OHMT, a seaside sanctuary of minimalist luxury
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-48 pl-6 md:inset-0 md:flex md:items-center md:justify-start md:pl-16">
          <h1 className="font-semibold text-white !text-6xl !leading-[var(--leading-display)] tracking-[-0.02em] select-none md:!text-[length:var(--text-display)] md:!leading-[var(--leading-display)]"
              style={{ fontSize: "clamp(80px, 16vw, 280px)" }}>
            <span className="block">Slow</span>
            <span className="block">Luxuriance</span>
          </h1>
        </div>

        <div className="absolute inset-x-6 bottom-0 z-10 md:static md:flex md:justify-start md:items-end md:gap-9">
          <div className="flex w-full flex-col gap-3 bg-white/15 p-4 backdrop-blur-sm md:max-w-[380px] md:gap-4 md:rounded-2xl md:p-6">
            <p className="text-xs leading-[var(--leading-heading)] text-white md:text-sm md:leading-relaxed">
              Local stone, sand-treated concrete, and natural wood finishes
              echo the textures of the shoreline, blending architecture with nature.
            </p>
            <div className="flex gap-3">
              {[FacebookLogo, InstagramLogo, XLogo].map((Icon, i) => (
                <a key={i} href="#" aria-label={`Social link ${i + 1}`} className="size-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-all focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-[var(--focus-ring-offset)]">
                  <Icon size={16} weight="bold" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
