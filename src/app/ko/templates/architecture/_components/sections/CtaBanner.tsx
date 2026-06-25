// src/app/en/templates/OHMT027-architecture-KO/_components/sections/CtaBanner.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "../ui/ScrollReveal";

export function CtaBanner() {
  const baseRoute = "/en/templates/OHMT027-architecture-KO";

  return (
    <section className="relative h-[60vh] md:h-[70vh] min-h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/templates/architecture/cta-bg.jpg"
        alt="Architectural facade night view"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
        <ScrollReveal>
          <div className="space-y-8 max-w-2xl">
            <h2 className="font-heading font-normal text-[42px] md:text-[56px] text-white leading-tight">
              Let's Design Your
              <br />
              Space Together.
            </h2>
            <div>
              <Link
                href={`${baseRoute}/contact`}
                className="inline-block border-2 border-white text-white px-10 py-4 text-[14px] font-sans tracking-[0.08em] hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300"
              >
                START A PROJECT
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
