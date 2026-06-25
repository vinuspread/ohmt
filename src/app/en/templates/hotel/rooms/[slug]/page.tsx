"use client";

import React from "react";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";
import { rooms } from "../../data/data";
import { Button } from "../../_components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowLeft, Calendar, ShieldCheck, HelpCircle } from "lucide-react";
import { useParams } from "next/navigation";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

function RoomDetailPageContent() {
  const params = useParams();
  const slug = params.slug as string;
  const room = rooms.find((r) => r.id === slug) || rooms[0];

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <Navbar />

        {/* Back navigation bar */}
        <div className="pt-24 md:pt-32 pb-4 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
            <Link href="/en/templates/hotel/rooms" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
              <ArrowLeft size={14} /> Back to Accommodations
            </Link>
            <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">{room.name}</span>
          </div>
        </div>

        {/* Hero Showcase */}
        <section className="relative h-[50vh] md:h-[65vh] bg-[var(--color-primary)] overflow-hidden">
          <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-10 left-0 w-full">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="text-xs font-medium text-[var(--color-accent)] uppercase tracking-[0.25em] block mb-2">{room.view}</span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-[var(--font-heading)] font-bold text-[var(--color-bg)]">{room.name}</h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Room details & specs */}
        <section className="py-20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              {/* Left Column: Info & Amenities */}
              <div className="lg:col-span-8 flex flex-col gap-10">
                <div>
                  <h2 className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-[0.2em] mb-4">Room Overview</h2>
                  <p className="text-lg text-[var(--color-text-muted)] leading-relaxed font-light">{room.desc}</p>
                  <p className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Designed to inspire peace and reflection, our suites harmonize nature's raw beauty with silent luxury. Enjoy curated furnishings, premium materials, and a spacious floor plan designed for ultimate relaxation.
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]/30 px-6">
                  <div>
                    <span className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-1">Total Area</span>
                    <span className="text-base font-semibold text-[var(--color-primary)] font-[var(--font-heading)]">{room.size}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-1">Exposure</span>
                    <span className="text-base font-semibold text-[var(--color-primary)] font-[var(--font-heading)]">{room.view}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-1">Occupancy</span>
                    <span className="text-base font-semibold text-[var(--color-primary)] font-[var(--font-heading)]">{room.capacity}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-[0.2em] mb-6">Premium Conveniences</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {room.amenities.map((a) => (
                      <div key={a} className="flex items-center gap-3 text-sm text-[var(--color-text)] border border-[var(--color-border)] p-4 rounded-sm bg-white/50">
                        <Check size={16} className="text-[var(--color-accent)] flex-shrink-0" />
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Policies */}
                <div className="border-t border-[var(--color-border)] pt-10">
                  <h3 className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-[0.2em] mb-6">Stay Rules & Policies</h3>
                  <ul className="space-y-4 text-sm text-[var(--color-text-muted)]">
                    <li className="flex items-start gap-3">
                      <ShieldCheck size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <span><strong>Check-in:</strong> From 3:00 PM. Early check-in subject to availability.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <span><strong>Check-out:</strong> Until 11:00 AM. Late check-out may incur fees.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HelpCircle size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <span><strong>Cancellation Policy:</strong> Free cancellation up to 7 days prior to arrival.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Pricing & Quick Booking Widget */}
              <div className="lg:col-span-4">
                <div className="sticky top-28 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-8 flex flex-col gap-6">
                  <div className="pb-4 border-b border-[var(--color-border)]">
                    <span className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">Starting Rate</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-[var(--color-primary)] font-[var(--font-heading)]">{room.price}</span>
                      <span className="text-xs text-[var(--color-text-muted)]">/ Night</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">Select Dates</label>
                      <button className="w-full bg-white border border-[var(--color-border)] px-4 py-3 text-left text-sm text-[var(--color-text)] flex items-center justify-between">
                        <span>Check Availability</span>
                        <Calendar size={16} className="text-[var(--color-accent)]" />
                      </button>
                    </div>

                    <Link href="/en/templates/hotel/booking" className="w-full">
                      <Button variant="primary" size="lg" className="w-full text-[11px] tracking-[0.2em] uppercase rounded-sm">Reserve This Room</Button>
                    </Link>
                  </div>

                  <p className="text-[11px] text-[var(--color-text-muted)] text-center leading-relaxed">
                    *Best Price Guarantee when booking directly on our official website.
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

export default function RoomDetailPage() {
  return (
    <React.Suspense fallback={null}>
      <RoomDetailPageContent />
    </React.Suspense>
  );
}
