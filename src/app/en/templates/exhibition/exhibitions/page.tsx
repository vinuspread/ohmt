'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { exhibitions } from '../constants';
import ExhibitionCard from '../_components/ExhibitionCard';
import { Navbar } from '../_components/Navbar';
import { Footer } from '../_components/Footer';
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";

type Tab = 'on-show' | 'opening-soon' | 'permanent';

export default function ExhibitionsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('on-show');

  const filtered = exhibitions.filter((ex) => ex.status === activeTab);

  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main>
        <section className="bg-[var(--color-bg)] pt-40 pb-16 border-b border-[var(--color-border)]">
          <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1
              className="font-heading font-semibold uppercase text-black leading-none"
              style={{ fontSize: 'clamp(4rem, 7vw, 7rem)', letterSpacing: '-0.04em' }}
            >
              Exhibitions
            </h1>
            <p className="text-[14px] font-body text-black/50 leading-relaxed max-w-[32ch] md:text-right">
              Every work tells a story. Explore our current, upcoming, and permanent exhibitions.
            </p>
          </div>
        </section>

        {/* Featured Exhibition */}
        <section className="border-b border-[var(--color-border)]">
          <div className="grid md:grid-cols-[3fr_2fr] h-[75vh]">
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={exhibitions[0].heroImage}
                alt={exhibitions[0].name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-8 left-8 text-[10px] font-body font-semibold uppercase tracking-[0.15em] text-white/70 bg-black/40 px-3 py-1.5">
                Featured
              </span>
            </div>
            {/* Info */}
            <div className="flex flex-col justify-between p-12 md:p-16 border-l border-[var(--color-border)]">
              <div>
                <p className="text-[10px] font-body font-semibold uppercase tracking-[0.12em] text-black/35 mb-8">
                  {exhibitions[0].tags.genre} <span className="mx-1">·</span> {exhibitions[0].tags.theme}
                </p>
                <h2
                  className="font-heading font-semibold uppercase text-black leading-[0.95]"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', letterSpacing: '-0.04em' }}
                >
                  {exhibitions[0].name}
                </h2>
                <p className="mt-6 text-[14px] font-body text-black/55 leading-[1.7]">
                  {exhibitions[0].description.slice(0, 160)}...
                </p>
              </div>
              <div>
                <div className="flex flex-col gap-0 mb-10">
                  {[
                    { label: 'Artist', value: exhibitions[0].artist },
                    { label: 'Period', value: `${exhibitions[0].dateFrom} – ${exhibitions[0].dateTo}` },
                    { label: 'Venue', value: exhibitions[0].showroom },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-baseline py-4 border-b border-[var(--color-border)]">
                      <p className="text-[10px] font-body font-semibold uppercase tracking-[0.1em] text-black/35">{item.label}</p>
                      <p className="text-[15px] font-body font-semibold text-black">{item.value}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/en/templates/OHMT003-exhibition/exhibitions/${exhibitions[0].slug}`}
                  className="relative overflow-hidden group inline-flex px-8 py-4 border border-black"
                >
                  <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative text-black group-hover:text-white text-[11px] font-body font-semibold uppercase tracking-[0.12em] transition-colors duration-300">
                    View Exhibition
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-bg)] pt-16 pb-32">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex gap-10 mb-12 border-b border-[var(--color-border)]">
              {(['on-show', 'opening-soon', 'permanent'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="pb-3 text-[11px] font-body font-semibold uppercase tracking-[0.12em] transition-colors duration-200"
                  style={{
                    color: activeTab === tab ? '#000000' : 'rgba(0,0,0,0.4)',
                    borderBottom: activeTab === tab ? '2px solid #000000' : '2px solid transparent',
                  }}
                >
                  {tab === 'on-show' ? 'On Show' : tab === 'opening-soon' ? 'Opening Soon' : 'Permanent Display'}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
              >
                {filtered.map((ex) => (
                  <ExhibitionCard key={ex.slug} exhibition={ex} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
