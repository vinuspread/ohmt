"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ShopPageEn() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const navItems = [
    { label: "Products", href: "/en/templates/OHMT031-luma-camera/shop" },
    { label: "Optical Engine", href: "/en/templates/OHMT031-luma-camera/image-engine" },
    { label: "Shooting Scenes", href: "/en/templates/OHMT031-luma-camera/scenes" },
    { label: "Case Studies", href: "/en/templates/OHMT031-luma-camera/stories" },
  ];

  const products = [
    {
      name: "LUMA One Essential Kit",
      price: "$3,250 USD",
      tag: "Compact Studio Module",
      image: "/templates/OHMT031-luma-camera/shop-one-kit.jpg?v=20260702e",
      features: [
        "45MP Aspherical Wide Sensor",
        "Stock 35mm f/1.8 Premium Prime Lens",
        "Real-time I/O Optical Monitoring App Sync",
        "Magnesium Alloy Weather-Sealed Chassis",
        "1-Year Hardware Warranty & Inspection Support",
      ],
    },
    {
      name: "LUMA Pro Master Power Kit",
      price: "$4,950 USD",
      tag: "Pro & Enterprise Line",
      image: "/templates/OHMT031-luma-camera/shop-pro-kit.jpg?v=20260702e",
      features: [
        "45MP Dual Nano ISO Noise Reduction Sensor",
        "35mm f/1.4 + 85mm f/1.2 Master Lens Set",
        "120Hz Closed-Loop Autofocus Module",
        "Ceramic Sandblasted Premium Housing",
        "3-Year Hardware Engineer Onsite Warranty",
      ],
    },
    {
      name: "LUMA Cinema Studio Package",
      price: "$7,800 USD",
      tag: "Commercial Cinema Production",
      image: "/templates/OHMT031-luma-camera/blue-hour.jpg?v=20260703a",
      features: [
        "16-Bit RAW Uncompressed Dynamic Sensor",
        "24mm / 35mm / 85mm Pro Cinema Lens Trio",
        "Real-time 4K HDMI I/O Monitoring Receiver",
        "Aviation Magnesium Hardcase & Dual Battery Pack",
        "24/7 Global Priority Optical Care",
      ],
    },
    {
      name: "LUMA Lab R&D Rig Module",
      price: "$10,500 USD",
      tag: "R&D Labs & Optical Manufacturing",
      image: "/templates/OHMT031-luma-camera/lab-microscope-optical.png?v=20260703a",
      features: [
        "+300nm Precision Calibration Rig Bench",
        "Real-time Wave Transmittance Analysis SDK",
        "Automated Light Drift Warning Sensors",
        "Custom Lens Deposition Calibrator Sync",
        "Dedicated Onsite Engineer Installation",
      ],
    },
  ];

  const faqs = [
    {
      q: "How long does shipping and setup take after placing an order?",
      a: "Essential and Pro kits ship within 3-5 business days in custom heavy-duty pelican cases. For Lab R&D modules, delivery and onsite engineer calibration are scheduled within 7-10 business days.",
    },
    {
      q: "Is the LUMA body compatible with existing commercial cinema lenses?",
      a: "Yes, all LUMA camera bodies ship with universal cinema mount adapters, guaranteeing 100% compatibility with standard 35mm full-frame lenses and studio optical rigs.",
    },
    {
      q: "What does the hardware warranty and maintenance cover?",
      a: "Every unit undergoes 48 hours of ultra-precise optical calibration before dispatch and is backed by a 1 to 3 year warranty covering free component replacement and annual health audits.",
    },
  ];

  return (
    <TemplateWrapper>
      <div className="luma-camera-template min-h-screen bg-[#050608] text-white">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050608]/90 backdrop-blur-md">
          <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-12">
            <Link href="/en/templates/OHMT031-luma-camera" className="text-xl font-bold tracking-tight text-white">
              LUMA
            </Link>

            <nav className="hidden items-center gap-10 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-4 md:flex">
              <Link href="/en/templates/OHMT031-luma-camera/shop" className="button-glass hover:border-white">
                <span>Purchase</span>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-sm font-bold text-white md:hidden uppercase tracking-wider"
              aria-label="Toggle menu"
            >
              {mobileOpen ? "CLOSE" : "MENU"}
            </button>
          </div>

          {mobileOpen && (
            <div className="border-t border-white/10 bg-[#050608] px-6 py-6 md:hidden">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-white/90"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/en/templates/OHMT031-luma-camera/shop"
                  onClick={() => setMobileOpen(false)}
                  className="button-blue mt-4 w-full justify-center"
                >
                  Purchase
                </Link>
              </div>
            </div>
          )}
        </header>

        <main className="py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-8"
            >
              <Link href="/en/templates/OHMT031-luma-camera" className="inline-block font-sans text-xs font-semibold uppercase tracking-wider text-[#888d99] hover:text-white transition-colors">
                ← Back to Main
              </Link>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-16"
            >
              <div className="dot-title mb-6">
                <span className="square-dot" />
                <span className="badge-text">HARDWARE SHOP</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-white mb-6">
                LUMA Hardware Kits & Orders
              </h1>
              <p className="text-lg md:text-xl text-[#888d99] max-w-3xl leading-relaxed">
                Select your preferred hardware system from our 4 specialized kits engineered for pro studios, commercial cinema, and R&D facilities.
              </p>
            </motion.div>

            {/* 4 Hardware Lineup Grid */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 mb-28">
              {products.map((p, idx) => (
                <motion.div
                  key={p.name}
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
                  className="group pt-6 border-t border-white/15 w-full flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden mb-8 bg-[#050608]">
                      <Image
                        unoptimized
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#888d99]">
                        {p.tag}
                      </span>
                      <span className="text-xl md:text-2xl font-bold text-white">{p.price}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">{p.name}</h3>

                    <ul className="space-y-3 mb-8">
                      {p.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3 text-sm text-[#888d99]">
                          <span className="font-sans text-xs font-bold text-white/60">—</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="button-blue w-full justify-center py-4 text-sm font-bold"
                    >
                      <span>Reserve Hardware Order</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FAQ Accordion Section */}
            <div className="pt-16 border-t border-white/15">
              <div className="mb-12">
                <div className="dot-title mb-4">
                  <span className="square-dot" />
                  <span className="badge-text">FREQUENTLY ASKED QUESTIONS</span>
                </div>
                <h2 className="text-3xl font-bold md:text-5xl text-white">
                  Frequently Asked Questions (FAQ)
                </h2>
              </div>

              <div className="space-y-4 max-w-4xl">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.q}
                    className="border border-white/15 bg-[#07090c] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-white text-base md:text-lg"
                    >
                      <span>{faq.q}</span>
                      <span className="font-mono text-sm text-[#888d99] ml-4">
                        {activeFaq === index ? "[ - ]" : "[ + ]"}
                      </span>
                    </button>
                    {activeFaq === index && (
                      <div className="px-6 pb-6 text-sm text-[#888d99] leading-relaxed border-t border-white/10 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#020304] px-6 py-16 md:px-12 mt-20">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-6 md:flex-row md:items-center md:justify-between font-sans text-xs text-[#888d99]">
            <div className="flex items-center gap-2 text-white font-bold">
              <span className="square-dot" />
              <span>LUMA — Hardware Optical Architecture</span>
            </div>
            <div>
              © 2026 OHMT. English Hardware Camera Template based on Webflow Hardware Technology Consulting.
            </div>
          </div>
        </footer>
      </div>
    </TemplateWrapper>
  );
}
