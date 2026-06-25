// src/app/en/templates/OHMT027-architecture/_components/sections/Testimonials.tsx
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../../data/testimonials";
import { ScrollReveal } from "../ui/ScrollReveal";

import "swiper/css";

export function Testimonials() {
  return (
    <section className="bg-[#F5F5F5] py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="font-heading font-normal text-[36px] md:text-[40px] text-[var(--color-text)]">
              What Our Clients Say.
            </h2>
          </div>
        </ScrollReveal>

        {/* Swiper Slider */}
        <ScrollReveal delay={0.1}>
          <Swiper
            spaceBetween={32}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 1.8 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 md:p-10 h-full flex flex-col justify-between shadow-sm border border-black/5">
                  <div className="space-y-4">
                    {/* Double Quote Sign */}
                    <span className="font-heading font-normal text-[80px] leading-none text-[var(--color-border)] block -mb-8 -mt-4 select-none">
                      “
                    </span>
                    <p className="font-heading font-normal text-[18px] md:text-[20px] leading-[1.6] text-[var(--color-text)] relative z-10">
                      {t.quote}
                    </p>
                  </div>
                  <div className="mt-8">
                    <div className="w-10 h-[1px] bg-[var(--color-border)] mb-4" />
                    <h4 className="font-sans font-medium text-[14px] text-[var(--color-text)]">
                      {t.client}
                    </h4>
                    <p className="font-sans text-[13px] text-[var(--color-text-secondary)] mt-1">
                      {t.company}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ScrollReveal>
      </div>
    </section>
  );
}
