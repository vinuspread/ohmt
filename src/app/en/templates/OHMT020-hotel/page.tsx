"use client";

import React from "react";
import { Navbar } from "./_components/Navbar";
import { Hero } from "./_components/Hero";
import { BrandStory } from "./_components/BrandStory";
import { RoomTabs } from "./_components/RoomTabs";
import { Services } from "./_components/Services";
import { Testimonials } from "./_components/Testimonials";
import { Booking } from "./_components/Booking";
import { Footer } from "./_components/Footer";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";

function HotelPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-[var(--color-bg)]">
        <Navbar />
        <Hero />
        <BrandStory />
        <RoomTabs />
        <Services />
        <Testimonials />
        <Booking />
        <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">This page is a website design template demo by OHMT, not an actual client or operating business. The brand names, people, testimonials, contact details, and performance figures shown are example content.</p>
        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function HotelPage() {
  return (
    <React.Suspense fallback={null}>
      <HotelPageContent />
    </React.Suspense>
  );
}
