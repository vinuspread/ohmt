// src/app/templates/OHMT008-airline/experience/page.tsx
"use client";

import React, { useState } from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { Utensils, Luggage, ShieldCheck, Check } from "lucide-react";
import { PageHero } from "../_components/PageHero";
import { motion, AnimatePresence } from "framer-motion";

function ExperiencePageContent() {
  const [selectedMeal, setSelectedMeal] = useState("Michelin");
  const [baggageCount, setBaggageCount] = useState(1);
  const [baggageWeight, setBaggageWeight] = useState(23);

  const meals = [
    {
      id: "Michelin",
      name: "Michelin Star Set",
      desc: "Seared French Caviar with fresh blinis, paired with Krug Clos d'Ambonnay vintage champagne.",
      detail: "Crafted by Chef Antoine Dubois, 3-Michelin-star alumnus of Le Bernardin. The set opens with a cold amuse-bouche of oscietra caviar on buckwheat blini, followed by a main of pan-seared Brittany turbot with champagne beurre blanc, and closes with a dark chocolate mille-feuille. Wine pairing includes Krug Clos d'Ambonnay 2002 and a 15-year Armagnac digestif.",
      tags: ["3-Course", "Champagne Pairing", "First Class Only"],
      img: "/templates/OHMT008-airline/michelin-dining.jpg"
    },
    {
      id: "Korean",
      name: "Korean Royal Cuisine",
      desc: "Premium Hanwoo Beef Galbi-Jjim slow-cooked with chestnut and red dates, served in warm organic bronzware.",
      detail: "Inspired by the Joseon Dynasty's royal banquet tradition. The course features braised Hanwoo 1++ grade short ribs simmered for 8 hours with goji berries, chestnuts, and aged doenjang. Accompanied by seasonal namul, stone-pot rice, and a warm jujube-cinnamon sikhye as a palate cleanser. Served in handcrafted organic bronzware to retain optimal temperature.",
      tags: ["Seasonal Menu", "Heritage Recipe", "Business & First"],
      img: "/templates/OHMT008-airline/korean-cuisine.jpg"
    },
    {
      id: "Wellness",
      name: "Organic Wellness Set",
      desc: "Truffle-infused quinoa and garden micro-herbs, paired with organic fresh pressed superfoods.",
      detail: "Developed in collaboration with nutritionist Dr. Yuki Tanaka. The set is entirely plant-based and gluten-free, featuring a truffled heirloom quinoa tabbouleh, cold-pressed spirulina bisque with coconut foam, and a main of roasted maitake mushroom with white truffle jus. Finished with a raw cacao and mango tart. All ingredients are certified organic and sustainably sourced.",
      tags: ["Plant-Based", "Gluten-Free", "All Cabins"],
      img: "/templates/OHMT008-airline/wellness-set.jpg"
    }
  ];

  // Baggage Calculator logic
  const allowedBaggageCount = 2; 
  const allowedBaggageWeight = 32; 
  const excessBaggageFeePerKg = 15; 
  const excessPieceFee = 150; 

  const excessPieces = Math.max(0, baggageCount - allowedBaggageCount);
  const excessWeight = Math.max(0, baggageWeight - allowedBaggageWeight);
  const totalBaggageSurcharge = (excessPieces * excessPieceFee) + (excessWeight * excessBaggageFeePerKg);

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)] min-h-screen">
        <Header />

        {/* Hero Cover (Completely Borderless & Floating Atmosphere) */}
        <PageHero
          imageSrc="/templates/OHMT008-airline/airline-experience-hero.png"
          imageAlt="Premium Cabin Detail"
          label="The Cabin Experience"
          title={<>Crafted Beyond <br /><span className="text-[var(--color-accent)] font-serif normal-case font-normal">Expectations.</span></>}
          description="We redefine every detail of transcontinental flight. Pre-book your signature Michelin-starred menus and compute elite baggage limits prior to boarding."
          descMaxWidth="max-w-[680px]"
        />

        {/* 1. Gourmet Curation - Editorial Typographic List Design (No Box Borders) */}
        <section className="py-14 md:py-32 bg-white">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            
            {/* Header section with clean vertical layout */}
            <div className="mb-10 md:mb-20 space-y-4 max-w-[800px]">
              <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">Gourmet Curation</span>
              <h2 className="text-[clamp(1.5rem,4vw,3.5rem)] font-[family-name:var(--theme-font-heading)] font-bold text-[var(--color-primary)] uppercase tracking-tight leading-none">
                Pre-book Signature Sky Dining
              </h2>
              <div className="h-[2px] bg-[var(--color-accent)] w-12" />
              <p className="text-[16px] text-[#7A7A7A] normal-case leading-[1.4] font-normal pt-2">
                First Class passengers enjoy custom chef-curated dining sets. Browse the culinary courses below to review detailed ingredients and secure your dining pass.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-start">

              {/* Left: Accordion list */}
              <div className="lg:col-span-7 divide-y divide-[var(--color-border)]">
                {meals.map((meal, index) => {
                  const isOpen = selectedMeal === meal.id;
                  return (
                    <div key={meal.id}>
                      <button
                        onClick={() => setSelectedMeal(meal.id)}
                        className="w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left group select-none cursor-pointer"
                      >
                        <div className="flex items-center gap-5 md:gap-6">
                          <span className="font-serif text-xl md:text-2xl font-normal text-[var(--color-border)] group-hover:text-[var(--color-accent)]/40 transition-colors duration-300 w-7 md:w-8 shrink-0">
                            0{index + 1}
                          </span>
                          <h4 className={`font-bold text-[15px] md:text-[18px] uppercase tracking-wider transition-colors duration-300 ${isOpen ? "text-[var(--color-accent)]" : "text-[var(--color-primary)] group-hover:text-[var(--color-accent)]"}`}>
                            {meal.name}
                          </h4>
                        </div>
                        <span className={`text-[var(--color-accent)] text-xl font-normal transition-transform duration-300 shrink-0 ${isOpen ? "rotate-45" : "rotate-0"}`}>+</span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pb-8 space-y-5 pl-12 md:pl-14">
                              {/* Image - mobile only */}
                              <div className="lg:hidden aspect-[16/9] overflow-hidden relative">
                                <img loading="lazy" src={meal.img} alt={meal.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/50 via-transparent to-transparent" />
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {meal.tags.map((tag) => (
                                  <span key={tag} className="text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1 border border-[var(--color-accent)]/40 text-[var(--color-accent)]">{tag}</span>
                                ))}
                              </div>
                              <p className="text-[14px] text-[#7A7A7A] leading-[1.4] font-normal normal-case">{meal.desc}</p>
                              <p className="text-[15px] text-[#7A7A7A]/80 leading-[1.85] font-normal normal-case border-l-2 border-[var(--color-accent)]/30 pl-4">{meal.detail}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Right: Image - desktop only, sticky */}
              <div className="hidden lg:block lg:col-span-5 sticky top-28">
                <AnimatePresence mode="wait">
                  {meals.map((meal) => meal.id === selectedMeal && (
                    <motion.div
                      key={meal.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-[4/5] overflow-hidden relative">
                        <img loading="lazy" src={meal.img} alt={meal.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/50 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 space-y-2">
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {meal.tags.map((tag) => (
                              <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[var(--color-accent)]/20 text-[var(--color-accent)] border border-[var(--color-accent)]/30">{tag}</span>
                            ))}
                          </div>
                          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] block">Dining Pass</span>
                          <h3 className="font-[family-name:var(--theme-font-heading)] text-xl font-bold text-white">{meal.name}</h3>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

        {/* 2. Baggage Calculator - Clean Typography Grid (No Box Borders) */}
        <section className="py-14 md:py-32 bg-[var(--color-bg-secondary)]">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            
            {/* Header */}
            <div className="mb-10 md:mb-20 space-y-4 max-w-[800px]">
              <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">Luggage Precheck</span>
              <h2 className="text-[clamp(1.5rem,4vw,3.5rem)] font-[family-name:var(--theme-font-heading)] font-bold text-[var(--color-primary)] uppercase tracking-tight leading-none">
                Smart Baggage Surcharge Calculator
              </h2>
              <div className="h-[2px] bg-[var(--color-accent)] w-12" />
              <p className="text-[14px] text-[#7A7A7A] normal-case leading-[1.4] font-normal pt-2">
                First Class tickets include a generous <strong className="text-[var(--color-primary)]">2 Pieces (32kg each)</strong> allowance. Slide the inputs below to calculate real-time excess luggage surcharge fees prior to check-in.
              </p>
            </div>

            {/* Completely borderless typographic controls grid */}
            <div className="grid lg:grid-cols-12 gap-10 md:gap-20 items-start">
              
              {/* Left Side: Clean Sliders and Inputs */}
              <div className="lg:col-span-6 space-y-12">
                
                {/* Luggage pieces counter */}
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline text-[14px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
                    <span className="text-sm font-semibold text-[#7A7A7A]">Luggage Pieces Count</span>
                    <span className="text-xl font-bold">{baggageCount} Bag(s)</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={baggageCount}
                    onChange={(e) => setBaggageCount(parseInt(e.target.value))}
                    className="w-full h-[1px] bg-[var(--color-border)] accent-[var(--color-accent)] cursor-pointer appearance-none outline-none"
                  />
                  <div className="flex justify-between text-[13px] text-[#7A7A7A]">
                    <span>1 Bag</span>
                    <span>5 Bags</span>
                  </div>
                </div>

                {/* Luggage weight slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline text-[14px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
                    <span className="text-sm font-semibold text-[#7A7A7A]">Max Piece Weight</span>
                    <span className="text-xl font-bold">{baggageWeight} kg</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="50"
                    value={baggageWeight}
                    onChange={(e) => setBaggageWeight(parseInt(e.target.value))}
                    className="w-full h-[1px] bg-[var(--color-border)] accent-[var(--color-accent)] cursor-pointer appearance-none outline-none"
                  />
                  <div className="flex justify-between text-[13px] text-[#7A7A7A]">
                    <span>15 kg</span>
                    <span>50 kg</span>
                  </div>
                </div>

              </div>

              {/* Right Side: Editorial Statement Layout (No Border Boxes) */}
              <div className="lg:col-span-6 space-y-8 lg:pl-10">
                <span className="text-[14px] font-bold uppercase tracking-widest text-[#7A7A7A] block">
                  Assessment Statement
                </span>

                {/* Typography alignment list */}
                <div className="space-y-4 text-[14px] font-bold normal-case text-[#7A7A7A] pb-6 border-b border-[var(--color-border)]">
                  <div className="flex justify-between items-baseline py-2">
                    <span className="font-normal">Elite Allowance Limit</span>
                    <span className="text-[var(--color-primary)] font-semibold">2 Bags (Up to 32kg each)</span>
                  </div>
                  <div className="flex justify-between items-baseline py-2">
                    <span className="font-normal">Excess Pieces Surcharge</span>
                    <span className="text-[var(--color-primary)] font-semibold">${excessPieces * excessPieceFee} USD ({excessPieces} Over)</span>
                  </div>
                  <div className="flex justify-between items-baseline py-2">
                    <span className="font-normal">Excess Weight Surcharge</span>
                    <span className="text-[var(--color-primary)] font-semibold">${excessWeight * excessBaggageFeePerKg} USD ({excessWeight}kg Over)</span>
                  </div>
                </div>

                {/* Surcharge result statement */}
                <div className="pt-4 flex flex-col gap-3">
                  <span className="text-[14px] uppercase font-bold tracking-widest text-[var(--color-primary)]">
                    Baggage Fee Due
                  </span>
                  
                  {/* Huge bold editorial number display */}
                  <div className="space-y-2">
                    <span className={`text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-none block ${
                      totalBaggageSurcharge > 0 ? "text-rose-600" : "text-[var(--color-accent)]"
                    }`}>
                      {totalBaggageSurcharge > 0 ? `$${totalBaggageSurcharge.toLocaleString()} USD` : "FREE OF CHARGE"}
                    </span>
                    <p className="text-[14px] text-[#7A7A7A] normal-case leading-[1.4] font-normal">
                      *Allowance status calculations are generated in real-time according to premier IATA weight standards and Vinus Airline structural parameters.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Global Sanctuary Services - Spacious Editorial Column Layout */}
        <section className="py-14 md:py-32 bg-white">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <span className="block text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
              Elite Lounge & Spa
            </span>
            <h2 className="font-[family-name:var(--theme-font-heading)] text-[clamp(1.5rem,5vw,3.8rem)] font-bold tracking-tight text-[var(--color-primary)] leading-tight mb-20 uppercase">
              Sky Sanctuary Services.
            </h2>

            {/* Asymmetrical elegant grid layout */}
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-24">
              {[
                { title: "Private Suites Sanctuary", desc: "Fully enclosed private suites containing custom sliding doors, personalized mini wardrobe, and 180° flatbed capability." },
                { title: "Global Culinary Dining", desc: "Multi-course gourmet plates crafted by Michelin-starred culinary professionals, integrated with vintage champagne matching." },
                { title: "In-Flight Aromatherapy Spa", desc: "Curated in-flight body wellness including skincare remedies, custom dry mist aromatherapy, and stretching guides." },
                { title: "Ultra-HD Inflight Entertainment", desc: "32-inch 4K resolution screens boasting 1,500+ hours of on-demand cultural blockbusters and live international news." }
              ].map((f, i) => (
                <div key={f.title} className="space-y-6 text-left normal-case relative pl-8 border-l-2 border-[var(--color-accent)]">
                  {/* Subtle index tag */}
                  <span className="text-[14px] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] block">
                    ZONE 0{i + 1}
                  </span>
                  <h3 className="font-[family-name:var(--theme-font-heading)] text-2xl font-bold text-[var(--color-primary)] tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-[14px] text-[#7A7A7A] leading-[1.4] font-normal">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function ExperiencePage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <ExperiencePageContent {...props} />
    </React.Suspense>
  );
}
