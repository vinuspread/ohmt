"use client";
import React from "react";
import { motion } from "motion/react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { locations } from "../data/data";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const ease = [0.23, 1, 0.32, 1] as const;

function LocationsPageContent() {
  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">

        {/* Hero */}
        <section className="relative bg-[var(--color-bg-dark)] h-[350px] flex items-center overflow-hidden">
          <img
            src="/templates/OHMT019-coffee/location-seongsu.png"
            alt="Locations sub visual"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-bg-dark)]/75" />
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-3">Locations</p>
              <h1 className="font-heading text-[clamp(2.8rem,5vw,5rem)] font-bold text-white leading-[1.05]">
                Find Us
              </h1>
            </div>
            <p className="text-white/40 text-sm max-w-[28ch] leading-relaxed">
              Five locations across Seoul. Open seven days a week.
            </p>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.id}
                  className="flex flex-col group transition-colors duration-300"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                >
                  {loc.image && (
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[var(--color-bg)]">
                      <img
                        src={loc.image}
                        alt={loc.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                  )}
                  <div className="py-8 flex flex-col flex-grow">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-2 block">
                      0{i + 1}
                    </span>
                    <h3 className="font-heading text-2xl font-bold mb-4">{loc.name}</h3>
                    <div className="text-sm text-[var(--color-text-muted)] leading-relaxed space-y-2 mb-8 flex-grow">
                      <p className="border-b border-[var(--color-border)] pb-2">{loc.address}</p>
                      <p className="border-b border-[var(--color-border)] pb-2">{loc.hours}</p>
                      <p className="pb-2">{loc.phone}</p>
                    </div>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center border border-[var(--color-text)] text-[var(--color-text)] px-6 py-3 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-[var(--color-text)] hover:text-white transition-colors duration-300"
                    >
                      Get Directions &rarr;
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Franchise Inquiry Form */}
        <section className="py-20 bg-[var(--color-bg)] border-t border-[var(--color-border)]">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-text-muted)] mb-3">Partnership</p>
              <h2 className="text-3xl font-bold font-heading mb-4 text-[var(--color-text)]">Franchise Inquiry</h2>
              <p className="text-sm text-[var(--color-text-muted)]">We invite partners to create a unique coffee culture with the Oh My Template brand.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert("Inquiry submitted successfully! A representative will contact you soon."); }} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-2">Name / Company</label>
                  <input required type="text" placeholder="John Doe" className="w-full bg-white border border-[var(--color-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-text)]" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-2">Phone Number</label>
                  <input required type="tel" placeholder="010-0000-0000" className="w-full bg-white border border-[var(--color-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-text)]" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-2">Email Address</label>
                <input required type="email" placeholder="example@email.com" className="w-full bg-white border border-[var(--color-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-text)]" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-2">Preferred Location & Budget</label>
                <input required type="text" placeholder="Seongsu-dong, Seoul / $100,000" className="w-full bg-white border border-[var(--color-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-text)]" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-2">Message</label>
                <textarea rows={4} placeholder="Please describe your preferred launch schedule and any questions." className="w-full bg-white border border-[var(--color-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-text)] resize-none"></textarea>
              </div>
              <div className="text-center pt-4">
                <button type="submit" className="bg-[var(--color-text)] text-white px-10 py-3 text-xs uppercase tracking-widest font-semibold hover:opacity-90 active:scale-95 transition-all">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      </TemplateWrapper>
    </>
  );
}

export default function LocationsPage() {
  return <LocationsPageContent />;
}
