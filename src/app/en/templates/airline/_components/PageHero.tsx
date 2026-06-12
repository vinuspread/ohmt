"use client";

import React from "react";

interface PageHeroProps {
  imageSrc: string;
  imageAlt?: string;
  label: string;
  labelIcon?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  align?: "left" | "center";
  descMaxWidth?: string;
}

export const PageHero = ({
  imageSrc,
  imageAlt = "",
  label,
  labelIcon,
  title,
  description,
  align = "left",
  descMaxWidth = "max-w-[620px]",
}: PageHeroProps) => {
  const isCenter = align === "center";

  return (
    <section className="pt-16 md:pt-28 pb-8 md:pb-16 bg-[var(--color-primary)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover scale-105"
        />
      </div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className={`max-w-[1320px] mx-auto px-6 md:px-10 relative z-10 ${isCenter ? "text-center" : "text-left"}`}>
        <span className={`inline-flex items-center gap-3 text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6 ${isCenter ? "justify-center" : ""}`}>
          {labelIcon}
          {label}
        </span>
        <h1 className="font-[family-name:var(--theme-font-heading)] text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-white leading-[1.1] mb-8 uppercase">
          {title}
        </h1>
        <div className={`h-[1px] bg-white/20 w-32 mb-8 ${isCenter ? "mx-auto" : ""}`} />
        <p className={`text-[16px] text-white/60 leading-[1.4] font-normal normal-case ${descMaxWidth} ${isCenter ? "mx-auto" : ""}`}>
          {description}
        </p>
      </div>
    </section>
  );
};
