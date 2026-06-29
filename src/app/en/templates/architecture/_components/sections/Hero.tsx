// src/app/en/templates/architecture/_components/sections/Hero.tsx
"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";

export function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      leftImage: "/templates/architecture/hero-1.jpg",
      rightImage: "/templates/architecture/hero-2.jpg",
      title: "HIGHLAND VILLA",
      location: "SEOUL, KOREA",
    },
    {
      leftImage: "/templates/architecture/hero-2.jpg",
      rightImage: "/templates/architecture/hero-3.jpg",
      title: "MERIDIAN COMMERCE CENTER",
      location: "GANGNAM, SEOUL",
    },
    {
      leftImage: "/templates/architecture/hero-3.jpg",
      rightImage: "/templates/architecture/hero-1.jpg",
      title: "COASTAL RETREAT",
      location: "GANGWON, KOREA",
    },
  ];

  return (
    <section className="relative w-full bg-white pt-24 pb-12 overflow-hidden">
      {/* Top Content Area */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 pt-16 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="font-heading font-normal text-[48px] md:text-[64px] lg:text-[72px] leading-[1.05] tracking-[-0.02em] text-[var(--color-text)] max-w-3xl">
            Designing Architecture
            <br />
            That Speaks for Itself.
          </h1>
          <div className="pb-2">
            <Link
              href="/en/templates/architecture/projects"
              className="font-sans text-[12px] font-medium tracking-[0.12em] text-[var(--color-text)] uppercase border-b border-[var(--color-text)] pb-1 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
            >
              VIEW PROJECTS →
            </Link>
          </div>
        </div>
      </div>

      {/* Image Swiper Area */}
      <div className="relative w-full h-[60vh] max-h-[600px] min-h-[400px]">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="w-full h-full flex gap-1">
                {/* Left Large Image (62%) */}
                <div className="relative w-[62%] h-full overflow-hidden">
                  <Image
                    src={slide.leftImage}
                    alt={`Hero architectural view left ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-cover transition-transform duration-[6000ms] ease-out scale-100 group-hover:scale-105"
                    sizes="65vw"
                  />
                </div>
                {/* Right Small Image (38%) */}
                <div className="relative w-[38%] h-full overflow-hidden">
                  <Image
                    src={slide.rightImage}
                    alt={`Hero architectural view right ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-cover transition-transform duration-[6000ms] ease-out scale-100"
                    sizes="35vw"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        </div>

      {/* Below-image: Caption + Navigation */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 pt-5 flex justify-between items-center">
        <div className="flex flex-col gap-0.5">
          <span className="font-sans text-[12px] font-semibold tracking-[0.12em] text-[var(--color-text)] uppercase">
            {slides[activeIndex].title}
          </span>
          <span className="font-sans text-[11px] tracking-[0.1em] text-[var(--color-text-secondary)] uppercase">
            {slides[activeIndex].location}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-sans text-[13px] text-[var(--color-text-secondary)] tracking-[0.05em]">
            0{activeIndex + 1} / 0{slides.length}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-[36px] h-[36px] border border-[var(--color-border)] hover:border-[var(--color-text)] text-[var(--color-text)] flex items-center justify-center transition-colors duration-200"
              aria-label="Previous Slide"
            >
              <ArrowLeft size={15} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-[36px] h-[36px] border border-[var(--color-border)] hover:border-[var(--color-text)] text-[var(--color-text)] flex items-center justify-center transition-colors duration-200"
              aria-label="Next Slide"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
