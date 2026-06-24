// src/app/templates/airline/book/page.tsx
"use client";

import React, { useState } from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { Plane, Compass, User, Armchair, ChevronRight, Check } from "lucide-react";
import { PageHero } from "../_components/PageHero";
import { motion, AnimatePresence } from "framer-motion";

interface Seat {
  id: string;
  type: "Suite" | "Business" | "Standard";
  status: "Available" | "Occupied" | "Selected";
  perk: string;
  extraPrice: number;
}

function BookPageContent() {
  const [step, setStep] = useState(1); // 1: Search, 2: Seat Map, 3: Success
  const [destination, setDestination] = useState("Paris");
  const [cabinClass, setCabinClass] = useState("First");
  const [selectedSeat, setSelectedSeat] = useState<Seat | null>(null);
  
  // Dummy flight base prices matching destinationData
  const basePrices: Record<string, number> = {
    Paris: 6900,
    Tokyo: 2800,
    "New York": 8500,
    Dubai: 7200,
  };

  const initialSeats: Seat[] = [
    { id: "1A", type: "Suite", status: "Available", perk: "Ultra-Private Window Suite & Dom Pérignon Service", extraPrice: 500 },
    { id: "1B", type: "Suite", status: "Occupied", perk: "Center Double Suite (Ideal for Couples)", extraPrice: 450 },
    { id: "1C", type: "Suite", status: "Available", perk: "Center Double Suite & Personal Wardrobe", extraPrice: 450 },
    { id: "1D", type: "Suite", status: "Available", perk: "Ultra-Private Window Suite with Caviar Bar access", extraPrice: 500 },
    { id: "2A", type: "Suite", status: "Available", perk: "Window Suite & Integrated Ambient Light control", extraPrice: 400 },
    { id: "2B", type: "Suite", status: "Occupied", perk: "Center Private Suite", extraPrice: 350 },
    { id: "2C", type: "Suite", status: "Available", perk: "Center Private Suite", extraPrice: 350 },
    { id: "2D", type: "Suite", status: "Available", perk: "Window Suite with enhanced 32-inch 4K screen", extraPrice: 400 },
  ];

  const [seats, setSeats] = useState<Seat[]>(initialSeats);

  const handleSeatClick = (seat: Seat) => {
    if (seat.status === "Occupied") return;
    
    setSeats(prev => prev.map(s => {
      if (s.id === seat.id) {
        return { ...s, status: s.status === "Selected" ? "Available" : "Selected" };
      }
      // Unselect others
      if (s.status === "Selected") {
        return { ...s, status: "Available" };
      }
      return s;
    }));

    setSelectedSeat(prev => prev?.id === seat.id ? null : seat);
  };

  const basePrice = basePrices[destination] || 5000;
  const extraSeatPrice = selectedSeat ? selectedSeat.extraPrice : 0;
  const luxuryTax = Math.round(basePrice * 0.05);
  const totalAmount = basePrice + extraSeatPrice + luxuryTax;

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)] min-h-screen">
        <Header />

        {/* Global Cover Header */}
        <PageHero
          imageSrc="/templates/airline/airline-book-hero.png"
          imageAlt="Luxury flight silhouette"
          label="Book Premium Flight Suite"
          title={<>Configure Your <br /><span className="text-[var(--color-accent)] font-serif normal-case font-normal">A380 Sanctuary.</span></>}
          description="Tailor every dimension of your flight. Choose elite destinations, select your private structural suite, and pre-book Michelin dining elements."
        />

        {/* Interactive Booking Steps Grid */}
        <section className="py-14 md:py-32 bg-white">
          {/* Mobile price summary bar */}
          <div className="lg:hidden bg-[var(--color-primary)] text-white px-6 py-4 mb-0 flex justify-between items-center">
            <div>
              <p className="text-[0.65rem] uppercase tracking-widest text-white/40 font-bold">Total Fare</p>
              <p className="text-[1.4rem] font-extrabold text-[var(--color-accent)] leading-none">${totalAmount.toLocaleString()} USD</p>
            </div>
            <div className="text-right">
              <p className="text-[0.65rem] uppercase tracking-widest text-white/40 font-bold">Destination</p>
              <p className="text-[0.85rem] font-bold text-white">{destination}</p>
            </div>
          </div>

          <div className="max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 md:gap-20 items-start">

            {/* Left Col: Dynamic Step Flow Container */}
            <div className="lg:col-span-8 space-y-10 md:space-y-16">
              
              {/* Step Progress indicators - Editorial Clean timeline */}
              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-8">
                {[
                  { num: 1, label: "Curated Route" },
                  { num: 2, label: "Private Suite Cabin" },
                  { num: 3, label: "Bespoke Pass" }
                ].map((s) => (
                  <div key={s.num} className="flex items-center gap-4 select-none">
                    <span className={` text-xl font-bold transition-all duration-300 ${
                      step >= s.num ? "text-[var(--color-accent)]" : "text-[var(--color-border)]"
                    }`}>
                      0{s.num}
                    </span>
                    <span className={`text-[14px] font-bold uppercase tracking-widest hidden sm:inline ${
                      step >= s.num ? "text-[var(--color-primary)]" : "text-[#7A7A7A]"
                    }`}>{s.label}</span>
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                
                {/* STEP 1: DESTINATION & CABIN SELECTION */}
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-8 md:space-y-12 text-left"
                  >
                    <div className="space-y-4">
                      <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">Step 01</span>
                      <h2 className="text-[clamp(1.3rem,3vw,2.5rem)] font-[family-name:var(--theme-font-heading)] font-bold text-[var(--color-primary)] uppercase tracking-tight leading-tight">
                        Select curated route and cabin class.
                      </h2>
                      <div className="h-[2px] bg-[var(--color-accent)] w-12" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                      {/* From Field (Read-only underline input) */}
                      <div className="space-y-3">
                        <label className="text-[14px] font-bold uppercase tracking-widest text-[#7A7A7A]">Origin (Departure)</label>
                        <div className="w-full border-b border-[var(--color-border)] py-3 bg-transparent font-bold text-[18px] text-[var(--color-primary)] flex items-center justify-between">
                          <span>SEOUL CDG (South Korea)</span>
                          <Plane size={16} className="text-[var(--color-accent)]" />
                        </div>
                      </div>

                      {/* To Field (Interactive underline input) */}
                      <div className="space-y-3">
                        <label className="text-[14px] font-bold uppercase tracking-widest text-[#7A7A7A]">Destination (Arrival)</label>
                        <select 
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          className="w-full border-b border-[var(--color-border)] py-3 bg-transparent font-bold text-[18px] text-[var(--color-primary)] rounded-none focus:outline-none focus:border-[var(--color-accent)] cursor-pointer"
                        >
                          <option value="Paris">PARIS CDG (France) - $6,900</option>
                          <option value="Tokyo">TOKYO NRT (Japan) - $2,800</option>
                          <option value="New York">NEW YORK JFK (USA) - $8,500</option>
                          <option value="Dubai">DUBAI DXB (UAE) - $7,200</option>
                        </select>
                      </div>
                    </div>

                    {/* Cabin Class Selection Typographic list (No boxes) */}
                    <div className="space-y-6 pt-4">
                      <label className="text-[14px] font-bold uppercase tracking-widest text-[#7A7A7A] block">Premium Cabin Suite Class</label>
                      <div className="space-y-0 divide-y divide-[var(--color-border)]">
                        {[
                          { id: "First", name: "Flagship Private Suite", desc: "Enclosed structural room, Michelin course dining & 180° Flatbed." },
                          { id: "Business", name: "Royal Business Class", desc: "Enhanced shell privacy, Krug wine flight & direct aisle access." }
                        ].map((c) => {
                          const isSelected = cabinClass === c.id;
                          return (
                            <div
                              key={c.id}
                              onClick={() => setCabinClass(c.id)}
                              className="group py-6 cursor-pointer flex justify-between items-center transition-all duration-300 relative select-none"
                            >
                              <div className="space-y-1 flex-1">
                                <div className="flex items-center gap-3">
                                  <h4 className={`font-bold text-[16px] uppercase tracking-wider transition-colors duration-300 ${
                                    isSelected ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"
                                  }`}>
                                    {c.name}
                                  </h4>
                                  {isSelected && (
                                    <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full inline-block" />
                                  )}
                                </div>
                                <p className="text-[14px] text-[#7A7A7A] normal-case leading-[1.4] font-normal">
                                  {c.desc}
                                </p>
                              </div>

                              {isSelected && (
                                <motion.div
                                  layoutId="activeCabinUnderline"
                                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent)]"
                                  transition={{ duration: 0.3, ease: "easeOut" }}
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <button 
                      onClick={() => setStep(2)}
                      className="w-full sm:w-fit px-12 py-4 bg-[var(--color-primary)] text-[var(--color-accent)] text-[14px] font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-[var(--color-primary)]/90 transition-colors duration-300 cursor-pointer rounded-none"
                    >
                      SELECT CABIN SEAT <ChevronRight size={14} />
                    </button>
                  </motion.div>
                )}

                {/* STEP 2: INTERACTIVE A380 SEAT MAP */}
                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-8 md:space-y-12 text-left"
                  >
                    <div className="space-y-4">
                      <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">Step 02</span>
                      <h2 className="text-[clamp(1.3rem,3vw,2.5rem)] font-[family-name:var(--theme-font-heading)] font-bold text-[var(--color-primary)] uppercase tracking-tight leading-tight">
                        Interactive A380 Cabin Suite Map.
                      </h2>
                      <div className="h-[2px] bg-[var(--color-accent)] w-12" />
                      <p className="text-[14px] text-[#7A7A7A] leading-[1.4] normal-case">
                        Choose your dedicated structural zone. Click any available seat box below to view its custom physical perks and select it.
                      </p>
                    </div>

                    {/* A380 Suite Layout grid mapping (Keep matrix strictly for alignment, but styling is extremely lightweight) */}
                    <div className="p-8 space-y-8 max-w-lg mx-auto bg-[var(--color-bg-secondary)] rounded-3xl">
                      <div className="text-center pb-4 border-b border-[var(--color-border)]">
                        <span className="text-[14px] uppercase font-bold tracking-[0.4em] text-[#7A7A7A]">A380 UPPER DECK NOSE</span>
                      </div>

                      {/* Map rows */}
                      <div className="grid grid-cols-4 gap-4 justify-center">
                        {seats.map((seat) => {
                          const isOccupied = seat.status === "Occupied";
                          const isSelected = seat.status === "Selected";
                          return (
                            <button
                              key={seat.id}
                              disabled={isOccupied}
                              onClick={() => handleSeatClick(seat)}
                              className={`aspect-square flex flex-col items-center justify-center text-[14px] font-bold transition-colors duration-300 relative rounded-none cursor-pointer ${
                                isOccupied
                                  ? "bg-neutral-100 border border-neutral-200 text-neutral-400 cursor-not-allowed"
                                  : isSelected
                                    ? "bg-[var(--color-accent)] text-[var(--color-primary)]"
                                    : "bg-white border border-[var(--color-border)] text-[var(--color-primary)] hover:border-[var(--color-accent)]"
                              }`}
                            >
                              <Armchair size={18} className="mb-1" />
                              <span>{seat.id}</span>
                              
                              {/* Extra price mini tag */}
                              {!isOccupied && (
                                <span className={`absolute bottom-2 text-[13px] font-bold ${
                                  isSelected ? "text-[var(--color-primary)]/80" : "text-[#7A7A7A]"
                                }`}>+${seat.extraPrice}</span>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Map Legend */}
                      <div className="flex justify-center gap-6 pt-4 border-t border-[var(--color-border)] text-[14px] font-bold uppercase tracking-wider text-[#7A7A7A]">
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 bg-white border border-[var(--color-border)] block rounded-md" /> Available
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 bg-[var(--color-accent)] block rounded-md" /> Selected
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 bg-neutral-200 block rounded-md" /> Occupied
                        </div>
                      </div>
                    </div>

                    {/* Selected Seat detail box - Typography style */}
                    {selectedSeat && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="py-6 border-t-2 border-[var(--color-accent)] normal-case"
                      >
                        <h4 className="font-bold text-[16px] uppercase tracking-wider text-[var(--color-accent)] mb-2">Suite {selectedSeat.id} Highlighted</h4>
                        <p className="text-[14px] text-[#7A7A7A] leading-[1.4] font-normal mb-2">{selectedSeat.perk}</p>
                        <p className="text-[16px] font-bold text-[var(--color-primary)]">Cabin Surcharge: +${selectedSeat.extraPrice} USD</p>
                      </motion.div>
                    )}

                    <div className="flex gap-4">
                      <button 
                        onClick={() => setStep(1)}
                        className="px-10 py-4 border border-[var(--color-border)] text-[var(--color-primary)] text-[14px] font-bold uppercase tracking-wider hover:border-[var(--color-primary)] transition-all cursor-pointer rounded-none"
                      >
                        BACK TO ROUTE
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        disabled={!selectedSeat}
                        className="px-12 py-4 bg-[var(--color-primary)] text-[var(--color-accent)] text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-[var(--color-primary)]/90 transition-colors duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed rounded-none"
                      >
                        FINALIZE PASS
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: SUCCESS BESPOKE BOARDING PASS */}
                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-12 text-center"
                  >
                    <div className="space-y-4 text-center">
                      <div className="w-16 h-16 bg-[var(--color-accent)] flex items-center justify-center mx-auto mb-6 rounded-full">
                        <Check size={28} className="text-[var(--color-primary)] font-bold" />
                      </div>
                      <h2 className="text-3xl font-[family-name:var(--theme-font-heading)] font-bold text-[var(--color-primary)]">Bespoke Boarding Pass Generated.</h2>
                      <p className="text-[14px] text-[#7A7A7A] max-w-md mx-auto leading-[1.4] normal-case">
                        Your private sanctuary is reserved. Review your luxury skyline ticket invoice summary.
                      </p>
                    </div>

                    {/* Highly stylized Skyline boarding ticket pass */}
                    <div className="p-8 max-w-xl mx-auto bg-[var(--color-primary)] text-white relative overflow-hidden rounded-[32px]">
                      <div className="absolute right-[-40px] top-[-40px] w-32 h-32 bg-white/5 rounded-full" />
                      
                      {/* Pass details */}
                      <div className="flex justify-between items-start border-b border-white/10 pb-6 mb-8">
                        <div>
                          <p className="text-[14px] uppercase tracking-[0.3em] text-[var(--color-accent)] font-bold">Vinus Airlines Premium Pass</p>
                          <h3 className="font-[family-name:var(--theme-font-heading)] text-xl font-bold tracking-tight text-white mt-1">FIRST CLASS SUITE</h3>
                        </div>
                        <span className="text-[18px] text-[var(--color-accent)] font-black bg-[var(--color-accent)]/10 px-4 py-1.5 rounded-full">{selectedSeat?.id}</span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left normal-case mb-8">
                        <div>
                          <p className="text-[14px] uppercase tracking-[0.2em] text-white/30 font-bold">Passenger</p>
                          <p className="text-[14px] font-bold text-white pt-1">Bespoke Guest</p>
                        </div>
                        <div>
                          <p className="text-[14px] uppercase tracking-[0.2em] text-white/30 font-bold">Route</p>
                          <p className="text-[14px] font-bold text-white pt-1">ICN → CDG</p>
                        </div>
                        <div>
                          <p className="text-[14px] uppercase tracking-[0.2em] text-white/30 font-bold">Date</p>
                          <p className="text-[14px] font-bold text-white pt-1">26 MAY 2026</p>
                        </div>
                        <div>
                          <p className="text-[14px] uppercase tracking-[0.2em] text-white/30 font-bold">Sanctuary</p>
                          <p className="text-[14px] font-bold text-[var(--color-accent)] pt-1">Suite {selectedSeat?.id}</p>
                        </div>
                      </div>

                      <div className="border-t border-dashed border-white/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div className="text-left">
                          <p className="text-[14px] uppercase tracking-[0.2em] text-white/30 font-bold">Total Fare Charged</p>
                          <p className="text-[22px] font-extrabold text-[var(--color-accent)]">${totalAmount.toLocaleString()} USD</p>
                        </div>
                        <span className="text-[14px] uppercase font-bold tracking-widest border border-[var(--color-accent)]/45 px-6 py-2.5 rounded-full">
                          ACTIVE SKYPASS
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center pt-4">
                      <button 
                        onClick={() => {
                          setStep(1);
                          setSelectedSeat(null);
                        }}
                        className="px-12 py-4 bg-[var(--color-primary)] text-[var(--color-accent)] text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-[var(--color-primary)]/90 transition-colors duration-300 cursor-pointer rounded-none"
                      >
                        BOOK ANOTHER FLIGHT
                      </button>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

            </div>

            {/* Right Col: Real-time Live Invoice Summary - desktop only */}
            <div className="hidden lg:block lg:col-span-4 space-y-8 sticky top-28 lg:pl-10">
              <h3 className="font-[family-name:var(--theme-font-heading)] text-lg font-bold text-[var(--color-primary)] uppercase tracking-wider pb-4 border-b-2 border-[var(--color-primary)]">
                Skyline Summary
              </h3>

              <div className="space-y-4 text-[14px] font-bold normal-case text-[#7A7A7A] pb-6 border-b border-[var(--color-border)]">
                <div className="flex justify-between items-baseline py-1">
                  <span className="font-normal">Base Cabin Fare ({destination})</span>
                  <span className="text-[var(--color-primary)]">${basePrice.toLocaleString()} USD</span>
                </div>
                <div className="flex justify-between items-baseline py-1">
                  <span className="font-normal">Suite Zone Surcharge ({selectedSeat ? selectedSeat.id : "None"})</span>
                  <span className="text-[var(--color-primary)]">+${extraSeatPrice} USD</span>
                </div>
                <div className="flex justify-between items-baseline py-1">
                  <span className="font-normal">Elite Service Tax (5%)</span>
                  <span className="text-[var(--color-primary)]">${luxuryTax} USD</span>
                </div>
              </div>

              {/* Total Row */}
              <div className="pt-4 flex flex-col gap-3">
                <span className="text-[14px] uppercase font-bold tracking-widest text-[var(--color-primary)]">
                  Total Amount
                </span>
                <div>
                  <span className="text-[32px] font-extrabold text-[var(--color-accent)] leading-none block">
                    ${totalAmount.toLocaleString()} USD
                  </span>
                  <p className="text-[14px] text-[#7A7A7A] normal-case leading-[1.4] font-normal mt-3">
                    *Taxes, luxury airport lounge access, champagne flights, and Michelin-star meal sets are fully integrated in the final premium skypass rate.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function BookPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <BookPageContent {...props} />
    </React.Suspense>
  );
}
