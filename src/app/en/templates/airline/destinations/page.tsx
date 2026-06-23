// src/app/templates/OHMT008-airline/destinations/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { ArrowRight, Plane } from "lucide-react";
import { PageHero } from "../_components/PageHero";

function DestinationsPageContent() {
  const [selectedMood, setSelectedMood] = useState("All");

  const destinations = [
    {
      slug: "paris",
      name: "Paris", 
      country: "France", 
      desc: "Immerse yourself in world-class art, culinary genius, and historical elegance.",
      img: "/templates/OHMT008-airline/paris.png",
      mood: "Heritage & Arts"
    },
    {
      slug: "tokyo",
      name: "Tokyo", 
      country: "Japan", 
      desc: "Discover where ancient meticulous shrine traditions border neon skyscrapers.",
      img: "/templates/OHMT008-airline/tokyo.png",
      mood: "Metropolitan"
    },
    {
      slug: "new-york",
      name: "New York", 
      country: "USA", 
      desc: "Thrive inside the soaring energy of the world's most dramatic skyline.",
      img: "/templates/OHMT008-airline/new-york.png",
      mood: "Metropolitan"
    },
    {
      slug: "dubai",
      name: "Dubai", 
      country: "UAE", 
      desc: "Indulge in unparalleled desert architecture, grand harbors, and high luxury.",
      img: "/templates/OHMT008-airline/dubai.png",
      mood: "Metropolitan"
    },
    {
      slug: "sydney",
      name: "Sydney", 
      country: "Australia", 
      desc: "Delight in coastal harborside elegance, pristine bays, and upscale lifestyle.",
      img: "/templates/OHMT008-airline/sydney.png",
      mood: "Nature & Retreats"
    },
    {
      slug: "bali",
      name: "Bali", 
      country: "Indonesia", 
      desc: "Escape into cascading emerald valleys, clifftop temples, and serene beaches.",
      img: "/templates/OHMT008-airline/bali.png",
      mood: "Nature & Retreats"
    },
  ];

  const filteredDestinations = selectedMood === "All" 
    ? destinations 
    : destinations.filter(d => d.mood === selectedMood);

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)] min-h-screen transition-colors duration-300">
        <Header />

        {/* Hero Cover Banner */}
        <PageHero
          imageSrc="/templates/OHMT008-airline/destination-main.jpg"
          imageAlt="Global destinations"
          label="Curated Sky Escapes"
          title={<>Explore Our <br /><span className="text-[var(--color-accent)] font-serif normal-case font-normal">Refined World.</span></>}
          description="Over 200 destinations across 80 countries. Our global network connects you with legendary metropolitan wonders, historical cultural heritages, and tranquil tropical sanctuaries - always with uncompromised luxury."
        />

        {/* Dynamic Catalog Section */}
        <section className="py-14 md:py-32 bg-white">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10 space-y-16">
            
            {/* Premium Mood Segmented filter deck */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[var(--color-border)] pb-6 md:pb-8 gap-4 md:gap-6">
              <div className="flex flex-wrap items-center gap-2">
                {["All", "Heritage & Arts", "Nature & Retreats", "Metropolitan"].map((mood) => (
                  <button
                    key={mood}
                    onClick={() => setSelectedMood(mood)}
                    className={`px-4 md:px-6 py-2 md:py-2.5 text-[12px] md:text-[14px] font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-none cursor-pointer whitespace-nowrap ${
                      selectedMood === mood
                        ? "bg-[var(--color-primary)] text-[var(--color-accent)]"
                        : "bg-transparent text-[#7A7A7A] border border-[var(--color-border)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]"
                    }`}
                  >
                    {mood}
                  </button>
                ))}
              </div>
              <span className="text-[14px] font-bold uppercase tracking-widest text-[#7A7A7A]">
                Showing {filteredDestinations.length} Active Escapes
              </span>
            </div>

            {/* Editorial Typographic Grid - TEXT OUTSIDE OF IMAGES, COLORS BY DEFAULT, SCALE ON HOVER */}
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16"
            >
              <AnimatePresence mode="popLayout">
                {filteredDestinations.map((dest) => (
                  <motion.div
                    layout
                    key={dest.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link 
                      href={`/en/templates/OHMT015-airline-en/destinations/${dest.slug}`}
                      className="group block space-y-6 text-left select-none"
                    >
                      {/* Image container (Color by default, Scale on hover) */}
                      <div className="aspect-square overflow-hidden relative">
                        <img
                          src={dest.img}
                          alt={dest.name}
                          className="w-full h-full object-cover transition-transform duration-300 ease-out"
                        />
                        <div className="absolute top-4 left-4 z-10">
                          <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] bg-[var(--color-primary)] px-3.5 py-1.5 border border-[var(--color-accent)]/25 rounded-full">
                            {dest.mood}
                          </span>
                        </div>
                      </div>

                      {/* Content Info (Completely pulled OUTSIDE of image) */}
                      <div className="space-y-4 pt-2">
                        <div className="space-y-1">
                          <div className="flex justify-between items-baseline">
                            <h3 className="font-[family-name:var(--theme-font-heading)] text-2xl font-bold text-[var(--color-primary)] tracking-tight">
                              {dest.name}
                            </h3>
                            <span className="text-[12px] font-bold uppercase tracking-wider text-[var(--color-accent)]">
                              {dest.country}
                            </span>
                          </div>
                          <p className="text-[14px] text-[#7A7A7A] leading-[1.4] font-normal line-clamp-2 normal-case">
                            {dest.desc}
                          </p>
                        </div>

                        {/* Interactive text link with subtle motion */}
                        <span className="text-[14px] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] inline-flex items-center gap-2 transition-colors duration-300 group-hover:text-[var(--color-accent)]/80">
                          DISCOVER FLIGHTS <Plane size={14} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function DestinationsPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <DestinationsPageContent {...props} />
    </React.Suspense>
  );
}
