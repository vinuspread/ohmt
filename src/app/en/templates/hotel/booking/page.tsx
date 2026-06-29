"use client";

import React, { useState } from "react";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { Button } from "../_components/ui/Button";
import { motion } from "framer-motion";
import { CalendarDays, Users, BedDouble, CheckCircle2 } from "lucide-react";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const EASE = [0.23, 1, 0.32, 1] as const;

const rooms = [
  { id: "deluxe", name: "Deluxe Ocean Room", size: "42 m²", price: "$320 / night" },
  { id: "suite", name: "Serenity Suite", size: "78 m²", price: "$580 / night" },
  { id: "villa", name: "Private Villa", size: "150 m²", price: "$1,200 / night" },
];

function BookingPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState("deluxe");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <Navbar />

        <section className="relative h-[40vh] md:h-[50vh] flex items-center bg-[var(--color-primary)] overflow-hidden">
          <div className="absolute inset-0">
            <img src="/templates/hotel/booking-bg.jpg" alt="Reservation" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-20">
            <motion.div initial={{ opacity: 0, y: 24, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.75, ease: EASE }}>
              <span className="text-[11px] font-medium text-[var(--color-accent)] uppercase tracking-[0.25em] block mb-3">Plan Your Stay</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] font-bold text-[var(--color-bg)]">Reservation</h1>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

              <div className="lg:col-span-4 flex flex-col gap-8">
                <div>
                  <span className="text-[11px] font-semibold text-[var(--color-accent)] uppercase tracking-[0.2em] block mb-3">Select Room Type</span>
                  <h2 className="text-2xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-6">Choose Your Accommodation</h2>
                  <div className="flex flex-col gap-3">
                    {rooms.map((r) => (
                      <button
                        key={r.id}
                        onClick={() => setSelected(r.id)}
                        className={`w-full text-left p-4 border transition-all duration-300 ${selected === r.id ? "border-[var(--color-accent)] bg-[var(--color-bg-secondary)]" : "border-[var(--color-border)] hover:border-[var(--color-primary)]/40"}`}
                      >
                        <div className="flex items-start gap-3">
                          <BedDouble size={18} className={`mt-0.5 flex-shrink-0 transition-colors ${selected === r.id ? "text-[var(--color-accent)]" : "text-[var(--color-text-muted)]"}`} />
                          <div>
                            <p className="text-sm font-semibold text-[var(--color-primary)]">{r.name}</p>
                            <p className="text-sm text-[var(--color-text-muted)] mt-0.5">{r.size}</p>
                            <p className="text-sm font-medium text-[var(--color-accent)] mt-1">{r.price}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-5 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-sm text-[var(--color-text-muted)] leading-relaxed">
                  <p className="font-semibold text-[var(--color-primary)] text-xs uppercase tracking-wider mb-2">Booking Policy</p>
                  <ul className="flex flex-col gap-1.5">
                    <li>Free cancellation up to 48 hours before arrival</li>
                    <li>Check-in from 3:00 PM, Check-out by 12:00 PM</li>
                    <li>Breakfast included in all room types</li>
                    <li>Airport transfer available upon request</li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-8 bg-white border border-[var(--color-border)] p-8 md:p-12">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, ease: EASE }} className="text-center py-16 flex flex-col items-center gap-6">
                    <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center text-[var(--color-accent)]">
                      <CheckCircle2 size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-2">Reservation Confirmed</h2>
                      <p className="text-sm text-[var(--color-text-muted)] max-w-md mx-auto">
                        Thank you for choosing OHMT. Your reservation request has been received. Our team will contact you within 24 hours to confirm your booking details.
                      </p>
                    </div>
                    <Button variant="primary" size="md" onClick={() => setSubmitted(false)} className="text-[11px] tracking-[0.2em] uppercase rounded-sm mt-2">Make Another Reservation</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-2xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-2">Guest Information</h3>
                      <p className="text-sm text-[var(--color-text-muted)]">Complete the form below and our concierge team will confirm your reservation.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">First Name *</label>
                        <input required type="text" placeholder="John" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">Last Name *</label>
                        <input required type="text" placeholder="Doe" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">Email Address *</label>
                        <input required type="email" placeholder="john.doe@example.com" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">Phone Number</label>
                        <input type="tel" placeholder="+1 234 567 890" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">
                          <CalendarDays size={10} className="inline mr-1" />Check-In *
                        </label>
                        <input required type="date" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm text-[var(--color-text)]" />
                      </div>
                      <div>
                        <label className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">
                          <CalendarDays size={10} className="inline mr-1" />Check-Out *
                        </label>
                        <input required type="date" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm text-[var(--color-text)]" />
                      </div>
                      <div>
                        <label className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">
                          <Users size={10} className="inline mr-1" />Guests *
                        </label>
                        <select required className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm appearance-none text-[var(--color-text)]">
                          <option value="1">1 Adult</option>
                          <option value="2">2 Adults</option>
                          <option value="3">3 Adults</option>
                          <option value="4">4 Adults</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">Special Requests</label>
                      <textarea rows={4} placeholder="Dietary requirements, celebration arrangements, accessibility needs, etc." className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none rounded-sm" />
                    </div>

                    <div>
                      <Button variant="primary" size="lg" className="w-full text-[11px] tracking-[0.2em] uppercase rounded-sm">
                        Request Reservation
                      </Button>
                      <p className="text-[14px] text-[var(--color-text-muted)] text-center mt-3">No payment required at this stage. Our team will contact you to confirm.</p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function BookingPage() {
  return (
    <React.Suspense fallback={null}>
      <BookingPageContent />
    </React.Suspense>
  );
}
