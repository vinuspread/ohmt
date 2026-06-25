"use client";
import React from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { PageHeader } from "../_components/PageHeader";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const services = [
  {
    idx: "01",
    category: "Spatial Architecture",
    title: "Corporate Curation",
    tagline: "Where raw geometry meets operational precision.",
    desc: "We transform raw physical footprints into high-density, functionally optimized environments. Every breathing zone, structural boundary, and material decision is calculated to serve how people actually inhabit the space.",
    stats: [
      { value: "98.6%", label: "Precision Rate" },
      { value: "6??4 wks", label: "Timeline" },
      { value: "450+", label: "Spaces" },
    ],
    process: [
      { step: "01", title: "Site Intelligence", desc: "Dimensional survey, structural load analysis, environmental audit." },
      { step: "02", title: "Schematic Layout", desc: "Density mapping and spatial sequencing. Every square meter assigned a function." },
      { step: "03", title: "Material Specification", desc: "Surface-by-surface selection aligned with acoustic, thermal, and tactile criteria." },
      { step: "04", title: "Execution Oversight", desc: "On-site presence at critical milestones, holding tolerances most firms ignore." },
    ],
    image: "/templates/studio/hero-1.jpg",
  },
  {
    idx: "02",
    category: "Bespoke Interior",
    title: "Tactile Curation",
    tagline: "Every surface is a decision. Every decision is a statement.",
    desc: "Material selection is never intuitive - it is measured against acoustics, light behavior, and emotional register. We curate from a library of 1,200+ samples and test every candidate under the actual lighting conditions of your project.",
    stats: [
      { value: "1,200+", label: "Material Library" },
      { value: "0.1mm", label: "Tolerance" },
      { value: "12", label: "Countries Sourced" },
    ],
    process: [
      { step: "01", title: "Sensory Audit", desc: "Evaluate acoustic, thermal, and visual qualities of the existing space." },
      { step: "02", title: "Curation Board", desc: "Shortlisted materials tested in-situ under real lighting conditions." },
      { step: "03", title: "Light Engineering", desc: "Lighting modeled as an active material across every surface at every hour." },
      { step: "04", title: "Installation Control", desc: "Direct coordination with specialists at every critical installation milestone." },
    ],
    image: "/templates/studio/hero-2.jpg",
  },
  {
    idx: "03",
    category: "Object Curation",
    title: "Bespoke Furniture",
    tagline: "Functional sculpture. Built for the space it inhabits.",
    desc: "Each piece is the only one in existence that fits exactly where it belongs. We work with a network of master craftsmen across metalwork, solid timber, and stone - with the patience that catalog furniture never requires.",
    stats: [
      { value: "100%", label: "Custom-built" },
      { value: "8??0 wks", label: "Per Piece" },
      { value: "18", label: "Craft Partners" },
    ],
    process: [
      { step: "01", title: "Spatial Analysis", desc: "Measure the space experientially - what the piece must anchor, what it must not obscure." },
      { step: "02", title: "Form Development", desc: "Sketches, scale models, and 3D geometry resolved before any material is committed." },
      { step: "03", title: "Craft Selection", desc: "Match the right specialist to the specific demands of each piece." },
      { step: "04", title: "Calibration", desc: "Placement adjusted to the nearest millimeter until the piece occupies the space as designed." },
    ],
    image: "/templates/studio/hero-3.jpg",
  },
  {
    idx: "04",
    category: "Strategic Oversight",
    title: "Construction Control",
    tagline: "From signed drawings to perfect execution - without deviation.",
    desc: "Design integrity rarely survives contact with construction. We act as the design's last line of defense on site - logging every deviation, escalating every substitution, and resolving every issue before it compounds into something permanent.",
    stats: [
      { value: "< 0.5%", label: "Deviation Rate" },
      { value: "3×/week", label: "Site Presence" },
      { value: "Zero", label: "Compromised Jobs" },
    ],
    process: [
      { step: "01", title: "Pre-Construction", desc: "Every tolerance and substitution policy documented and agreed before ground breaks." },
      { step: "02", title: "Milestone Sign-off", desc: "Each phase inspected and approved before the next begins. No exceptions." },
      { step: "03", title: "Deviation Register", desc: "Live log of every RFI, substitution request, and non-conformance - nothing verbal." },
      { step: "04", title: "Final Commissioning", desc: "Room-by-room walkthrough against original specification. Snag list resolved before handover." },
    ],
    image: "/templates/studio/project-1.jpg",
  },
];

function StudioServicesPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
        <Header />

        <PageHeader
          category="Capabilities"
          title={<>OUR <br /><span className="font-normal">SERVICES.</span></>}
          breadcrumb={["Studio", "Services"]}
        />

        {/* Services */}
        <div className="divide-y divide-black/8">
          {services.map((s, i) => (
            <section key={s.idx} className="py-16 md:py-24">
              <div className="max-w-[1720px] mx-auto px-8 md:px-16 lg:px-24">

                {/* Top: index + category */}
                <div className="flex items-baseline justify-between mb-10 md:mb-14">
                  <span className="text-[clamp(3.5rem,8vw,7rem)] font-bold text-black/6 leading-none select-none">
                    {s.idx}
                  </span>
                  <span className="text-[12px] text-black/35 uppercase tracking-[0.2em]">
                    {s.category}
                  </span>
                </div>

                {/* Main grid: image + content */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>

                  {/* Image */}
                  <div className="overflow-hidden bg-black aspect-[4/3]">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-[1.03] transition-all duration-[1.5s] ease-out"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center space-y-8 md:space-y-10">
                    <div>
                      <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] text-black mb-3">
                        {s.title}
                      </h2>
                      <p className="text-[15px] text-black/40 font-normal">{s.tagline}</p>
                    </div>

                    <p className="text-[16px] md:text-[17px] text-black/65 leading-[1.75] font-normal max-w-[520px]">
                      {s.desc}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-0 border border-black/8 divide-x divide-black/8">
                      {s.stats.map((stat, j) => (
                        <div key={j} className="px-6 py-4 text-center">
                          <p className="text-[1.1rem] md:text-[1.3rem] font-bold text-black leading-none mb-1">{stat.value}</p>
                          <p className="text-[11px] text-black/35 uppercase tracking-wider">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Process */}
                    <div className="space-y-0 divide-y divide-black/8 border-t border-black/8" spellCheck={false}>
                      {s.process.map((phase) => (
                        <div key={phase.step} className="flex gap-6 py-4">
                          <span className="text-[11px] text-black/25 shrink-0 pt-1">{phase.step}</span>
                          <div className="space-y-0.5">
                            <p className="text-[14px] font-semibold text-black leading-snug">{phase.title}</p>
                            <p className="text-[13px] text-black/45 font-normal leading-[1.4]">{phase.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="bg-[var(--color-bg-dark)] text-white py-16 md:py-24">
          <div className="max-w-[1720px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h3 className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1.1] mb-4">
                Ready to build your<br />spatial system?
              </h3>
              <div className="flex flex-wrap gap-6 text-[12px] font-bold text-white/35">
                <span>??98.6% Precision</span>
                <span>??Zero Compromised Completions</span>
                <span>??450+ Spaces Globally</span>
              </div>
            </div>
            <Link
              href="/en/templates/OHMT006-studio-EN/contact"
              className="group shrink-0 flex items-center gap-4 px-8 py-4 border border-white bg-white text-black text-[13px] font-bold uppercase tracking-widest hover:bg-transparent hover:text-white transition-all duration-300"
            >
              Start Project
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function StudioServicesPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <StudioServicesPageContent {...props} />
    </React.Suspense>
  );
}
