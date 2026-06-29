// src/app/en/templates/architecture/_components/sections/Services.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "../../data/services";
import { ScrollReveal } from "../ui/ScrollReveal";

export function Services() {
  const baseRoute = "/en/templates/architecture";

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="font-heading font-normal text-[40px] md:text-[48px] text-[var(--color-text)]">
              Our Services.
            </h2>
          </div>
        </ScrollReveal>

        {/* Services List (Alternating Layout) */}
        <div className="space-y-24 lg:space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <ScrollReveal key={service.id}>
                <div className="grid grid-cols-12 gap-8 items-center">
                  {/* Image — col 1–7 or 6–12 */}
                  <div className={`col-span-12 lg:col-span-7 ${isEven ? "lg:order-last" : ""} relative aspect-[4/3] overflow-hidden group`}>
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>

                  {/* Text Block — col 8–12 or 1–5 */}
                  <div className={`col-span-12 lg:col-span-5 space-y-6 ${isEven ? "lg:order-first lg:pl-0 lg:pr-8" : "lg:pl-8"}`}>
                    <span className="font-sans text-[11px] font-medium tracking-[0.15em] text-[var(--color-text-secondary)] uppercase block">
                      {service.label}
                    </span>
                    <h3 className="font-heading font-normal text-[30px] md:text-[36px] text-[var(--color-text)] leading-tight">
                      {service.name}
                    </h3>
                    <div className="w-[60px] h-[1px] bg-[var(--color-border)]" />
                    <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
                      {service.description}
                    </p>
                    <div className="pt-2">
                      <Link
                        href={`${baseRoute}/services`}
                        className="font-sans text-[12px] font-medium tracking-[0.12em] text-[var(--color-text)] uppercase border-b border-[var(--color-text)] pb-1 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
