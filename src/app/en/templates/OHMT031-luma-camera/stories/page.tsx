"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function StoriesPageEn() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const navItems = [
    { label: "Products", href: "/en/templates/OHMT031-luma-camera/shop" },
    { label: "Optical Engine", href: "/en/templates/OHMT031-luma-camera/image-engine" },
    { label: "Shooting Scenes", href: "/en/templates/OHMT031-luma-camera/scenes" },
    { label: "Case Studies", href: "/en/templates/OHMT031-luma-camera/stories" },
  ];

  const stories = [
    {
      company: "Bailey + Klein",
      industry: "Pharmaceutical & Optical Analysis",
      metric: "-82%",
      metricLabel: "Reporting Overhead Reduction",
      title: "Maintaining Strict Optical Compliance While Significantly Reducing Reporting Overhead.",
      desc: "Automated micro-optical transmittance inspection in pharmaceutical facilities, cutting quarterly reporting time by over 80% and mastering quality variance control.",
      quote: "“LUMA enabled our engineering teams to refocus time previously spent on tolerance correction back into core optical R&D.”",
      author: "Claire Klein — VP of Engineering",
      image: "/templates/OHMT031-luma-camera/lab-microscope-optical.png?v=20260703a",
    },
    {
      company: "Morance Precision",
      industry: "Automotive & Precision Optics",
      metric: "99.98%",
      metricLabel: "Global Yield Stability Rate",
      title: "Integrating Complex Workflows into a Unified System Across 3 Global Manufacturing Plants.",
      desc: "Deployed LUMA hardware feedback modules across 3 global production lines, stabilizing defect rates below 0.02%.",
      quote: "“Unplanned line-stopping incidents dropped noticeably almost overnight after introducing LUMA monitoring.”",
      author: "Lucas Boyd — Chief Operating Officer",
      image: "/templates/OHMT031-luma-camera/app-recipe-view.jpg?v=20260703a",
    },
    {
      company: "Vault Labs",
      industry: "Aerospace & Optical Measurement",
      metric: "+3.5X",
      metricLabel: "Inspection Speed Acceleration",
      title: "Accelerating Cryogenic Lens Reflectance Sensing Tests by 3.5X.",
      desc: "Utilized LUMA modules sampling lens reflectivity at 120Hz inside extreme cold chambers, drastically reducing iteration cycles.",
      quote: "“Real-time feedback data streams drastically shortened our prototype calibration feedback loops.”",
      author: "David Chestnut — Lead Scientist",
      image: "/templates/OHMT031-luma-camera/aerospace-testing-chamber.png?v=20260703a",
    },
    {
      company: "Cinema Works",
      industry: "Commercial Lens Rental & Care",
      metric: "100%",
      metricLabel: "Lens Accuracy Verification",
      title: "Precision Wear Lifecycle Management for Commercial Cinema Lenses Down to the Millimeter.",
      desc: "Passing rental lenses through LUMA 45MP inspection rigs before and after dispatches to track micro-scratches and resolution loss.",
      quote: "“We can now confidently guarantee zero-drift optical perfection to directors and camera operators on set.”",
      author: "Michael Sorenson — Master Technician",
      image: "/templates/OHMT031-luma-camera/blue-hour.jpg?v=20260703a",
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
                <span className="badge-text">CUSTOMER STORIES</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-white mb-6">
                Customer Stories & Case Studies
              </h1>
              <p className="text-lg md:text-xl text-[#888d99] max-w-3xl leading-relaxed">
                From pharma optics labs to aerospace test chambers and cinema lens care, discover how leading organizations achieve reliability with LUMA.
              </p>
            </motion.div>

            {/* 4 Corporate Case Studies */}
            <div className="space-y-20">
              {stories.map((story, idx) => (
                <motion.div
                  key={story.company}
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
                  className="grid grid-cols-1 gap-10 md:grid-cols-12 items-center pt-10 border-t border-white/15 group w-full"
                >
                  <div className="md:col-span-6 relative aspect-[16/10] overflow-hidden bg-[#050608]">
                    <Image
                      unoptimized
                      src={story.image}
                      alt={story.company}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 bg-black/85 border border-white/20 px-5 py-3 backdrop-blur-md">
                      <div className="text-3xl font-bold text-white">{story.metric}</div>
                      <div className="font-sans text-[10px] uppercase tracking-wider text-[#888d99] mt-0.5">{story.metricLabel}</div>
                    </div>
                  </div>

                  <div className="md:col-span-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4 font-sans text-xs uppercase tracking-wider">
                        <span className="text-white font-bold">{story.company}</span>
                        <span className="text-[#888d99]">{story.industry}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 leading-[1.05]">
                        {story.title}
                      </h3>
                      <p className="text-sm text-[#888d99] leading-relaxed mb-6">
                        {story.desc}
                      </p>
                      <blockquote className="border-l-2 border-white/30 pl-4 py-2 text-sm italic text-white/90 mb-6 bg-white/5 p-4">
                        {story.quote}
                        <footer className="not-italic text-xs font-sans uppercase tracking-wider text-[#888d99] mt-2">— {story.author}</footer>
                      </blockquote>
                    </div>
                    <div>
                      <motion.div whileHover={{ x: 4 }} className="inline-block">
                        <Link href="/en/templates/OHMT031-luma-camera/shop" className="button-glass">
                          <span>Inquire About Solutions</span>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
