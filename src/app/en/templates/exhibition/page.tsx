'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { exhibitions } from './constants';
import ExhibitionCard from './_components/ExhibitionCard';
import { Navbar } from './_components/Navbar';
import { Footer } from './_components/Footer';
import { TemplateWrapper } from "./_components/TemplateWrapper";
import theme from "./theme.json";

const easeOut = [0.23, 1, 0.32, 1] as const;

type Tab = 'on-show' | 'opening-soon' | 'permanent';

const mosaicImages = Array.from({ length: 9 }, (_, i) => `/templates/OHMT003-exhibition/mosaic-0${i + 1}.jpg`);

const events = [
  {
    title: 'Artist Talk: Sophie Laurent',
    date: 'Jun 14, 2026',
    time: '15:00',
    type: 'Artist Talk',
    ageRating: '18+',
    image: '/templates/OHMT003-exhibition/event-01.jpg',
  },
  {
    title: 'Drawing Workshop',
    date: 'Jun 21, 2026',
    time: '10:00',
    type: 'Workshop',
    ageRating: '12+',
    image: '/templates/OHMT003-exhibition/event-02.jpg',
  },
  {
    title: 'Curator Tour: Echoes of Form',
    date: 'Jun 28, 2026',
    time: '14:00',
    type: 'Tour',
    ageRating: 'All',
    image: '/templates/OHMT003-exhibition/event-01.jpg',
  },
  {
    title: 'Performance: Bodies in Space',
    date: 'Jul 5, 2026',
    time: '19:30',
    type: 'Performance',
    ageRating: '16+',
    image: '/templates/OHMT003-exhibition/event-02.jpg',
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<Tab>('on-show');
  const sliderRef = useRef<HTMLDivElement>(null);

  const filtered = exhibitions.filter((ex) => ex.status === activeTab);

  const scrollSlider = (dir: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const amount = 320;
    sliderRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      {/* Section 1 - Hero */}
      <section className="min-h-screen bg-[var(--color-bg)] flex flex-col justify-between">
        <div className="max-w-[1400px] mx-auto px-6 pt-32 flex-1 flex flex-col">
          <h1
            className="font-heading font-semibold uppercase leading-none text-black"
            style={{
              fontSize: 'clamp(5rem, 10vw, 9rem)',
              letterSpacing: '-0.04em',
            }}
          >
            Oh My Template
          </h1>

          <div className="flex-1 grid md:grid-cols-2 gap-12 mt-12">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/templates/OHMT003-exhibition/hero-left.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h2
                  className="font-heading font-semibold uppercase text-black"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    letterSpacing: '-0.03em',
                    lineHeight: '0.96',
                  }}
                >
                  Bold Art<br />and New Ideas
                </h2>
                <div className="mt-10 aspect-[3/4] overflow-hidden md:hidden">
                  <img
                    src="/templates/OHMT003-exhibition/hero-right.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <Link
                  href="/en/templates/OHMT005-exhibition-en/contact"
                  className="relative overflow-hidden group inline-flex px-8 py-4 border border-black mt-10"
                >
                  <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative text-black group-hover:text-white text-[11px] font-body font-semibold uppercase tracking-[0.12em] transition-colors duration-300">
                    Get Tickets
                  </span>
                </Link>
              </div>

              <div className="hidden md:block w-[70%] aspect-[3/4] overflow-hidden self-end">
                <img
                  src="/templates/OHMT003-exhibition/hero-right.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 pb-12 mt-[200px]">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] font-body font-semibold uppercase tracking-[0.1em] text-black/60">
              Popular Now
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => scrollSlider('left')}
                className="w-8 h-8 border border-black flex items-center justify-center text-[12px] hover:bg-black hover:text-white transition-colors duration-200"
                aria-label="Previous"
              >
                &larr;
              </button>
              <button
                onClick={() => scrollSlider('right')}
                className="w-8 h-8 border border-black flex items-center justify-center text-[12px] hover:bg-black hover:text-white transition-colors duration-200"
                aria-label="Next"
              >
                &rarr;
              </button>
            </div>
          </div>
          <div
            ref={sliderRef}
            className="flex gap-10 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {exhibitions.slice(0, 3).map((ex) => (
              <div key={ex.slug} className="flex-none w-[340px]">
                <ExhibitionCard exhibition={ex} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - Mosaic */}
      <section className="relative bg-[var(--color-bg)]" style={{ height: '280vh' }}>
        <div className="sticky top-[12%] z-10 pointer-events-none max-w-[1400px] mx-auto px-6 pt-24" style={{ mixBlendMode: 'difference' }}>
          <h2
            className="font-heading font-semibold uppercase text-white"
            style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', letterSpacing: '-0.04em', lineHeight: '0.96' }}
          >
            Collect What<br />Moves You
          </h2>
          <p className="mt-6 text-[18px] font-body text-white/70 leading-relaxed max-w-[36ch]">
            Every piece is chosen to provoke, comfort, or challenge - sometimes all at once.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 pt-[40vh]">

          {/* Row 1: wide left + portrait right */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="col-span-2 aspect-[16/10] overflow-hidden">
              <img src={mosaicImages[0]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 aspect-[16/10] overflow-hidden">
              <img src={mosaicImages[1]} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Row 2: 3 equal */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {mosaicImages.slice(2, 5).map((src) => (
              <div key={src} className="aspect-[4/3] overflow-hidden">
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          {/* Row 3: portrait left + wide right */}
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1 aspect-[16/10] overflow-hidden">
              <img src={mosaicImages[5]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 aspect-[16/10] overflow-hidden">
              <img src={mosaicImages[6]} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Exhibition List */}
      <section className="bg-[var(--color-bg)] py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-[10px] font-body font-semibold uppercase tracking-[0.1em] text-black/60 mb-2">
                On View
              </p>
              <h2
                className="font-heading font-semibold uppercase text-black"
                style={{
                  fontSize: 'clamp(3.5rem, 5vw, 5rem)',
                  letterSpacing: '-0.04em',
                  lineHeight: '0.96',
                }}
              >
                Current<br />Exhibitions
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end justify-end">
              <p className="text-[11px] font-body text-black/40 uppercase tracking-[0.08em] mb-2">
                {exhibitions.length} exhibitions
              </p>
              <Link
                href="/en/templates/OHMT005-exhibition-en/exhibitions"
                className="text-[11px] font-body font-semibold uppercase tracking-[0.12em] text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
              >
                Explore All
              </Link>
            </div>
          </div>

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
                {tab === 'on-show' ? 'On Show' : tab === 'opening-soon' ? 'Opening Soon' : 'Permanent'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {filtered.map((ex) => (
              <ExhibitionCard key={ex.slug} exhibition={ex} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Visiting Details */}
      <section className="bg-[var(--color-bg-dark)] py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2
            className="font-heading font-semibold uppercase text-white mb-20"
            style={{
              fontSize: 'clamp(3.5rem, 5vw, 5rem)',
              letterSpacing: '-0.04em',
              lineHeight: '0.96',
            }}
          >
            Plan Your<br />Visit
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-14 border-t border-white/15 pt-16">
            {[
              { label: 'Address', value: '123 West 25th Street\nNew York, NY 10001' },
              { label: 'Open Hours', value: 'Tue-Fri 10am-6pm\nSat-Sun 10am-8pm\nMon Closed' },
              { label: 'Phone', value: '+1 (212) 555-0147' },
              { label: 'Email', value: 'info@formagallery.com' },
            ].map((info) => (
              <div key={info.label}>
                <p className="text-[10px] font-body font-semibold uppercase tracking-[0.12em] text-white/35 mb-4">
                  {info.label}
                </p>
                <p className="text-[1.25rem] font-heading font-semibold text-white whitespace-pre-line leading-[1.5]" style={{ letterSpacing: '-0.02em' }}>
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Events Preview */}
      <section className="bg-[var(--color-bg)] py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2
            className="font-heading font-semibold uppercase text-black mb-16"
            style={{
              fontSize: 'clamp(3.5rem, 5vw, 5rem)',
              letterSpacing: '-0.04em',
              lineHeight: '0.96',
            }}
          >
            Upcoming<br />Events
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {events.map((evt) => (
              <div key={evt.title} className="group cursor-pointer">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between mt-6">
                  <p className="text-[11px] font-body text-black/50 tracking-[0.06em] uppercase">
                    {evt.date} <span className="mx-1.5 opacity-40">·</span> {evt.time}
                  </p>
                  <span className="text-[10px] font-body font-semibold uppercase tracking-[0.1em] text-white bg-black px-2.5 py-1">
                    {evt.ageRating}
                  </span>
                </div>
                <h3 className="mt-3 text-[1.25rem] font-heading font-semibold uppercase tracking-[-0.02em] text-black leading-tight">
                  {evt.title}
                </h3>
                <p className="mt-2 text-[11px] font-body text-black/40 uppercase tracking-[0.08em]">
                  {evt.type}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              href="/en/templates/OHMT005-exhibition-en/events"
              className="text-[11px] font-body font-semibold uppercase tracking-[0.12em] text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </TemplateWrapper>
  );
}
