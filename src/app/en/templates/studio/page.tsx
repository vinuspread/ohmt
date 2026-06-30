"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { TeamSection } from "./_components/TeamSection";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";
function StudioHomeContent() {
    const [activeHeroIndex, setActiveHeroIndex] = useState<number>(0);
    const videoRef = React.useRef<HTMLVideoElement>(null);
    React.useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
        }
    }, []);
    const t = {
  "hero": {
    "badge": `ARCHITECTURE STUDIO`,
    "title1": `Invisible Proportions,`,
    "title2": `Timeless Architecture.`,
    "desc": `Designing the essence beyond physical form. Structural integrity in organic dialogue with time.`,
    "cta": `VIEW ARCHIVE`,
    "fields": [
      {
        "title": `Spatial Curation`,
        "subTitle": `Geometric Silence`,
        "location": `Austin, Texas`,
        "desc": `Redefining raw structural boundaries through silent geometric density and material rigor. Every surface is calculated to evoke deep spatial presence, where form follows a discipline of restraint and tactile honesty.`
      },
      {
        "title": `Bespoke Interior`,
        "subTitle": `Organic Light`,
        "location": `Kyoto, Japan`,
        "desc": `A flawless symphony of customized tactile textures and high-end material alignments. Custom travertine panels meet soft ambient luminance, composing an interior language that breathes with quiet sophistication.`
      },
      {
        "title": `Object Curation`,
        "subTitle": `Sculpted Objects`,
        "location": `Oslo, Norway`,
        "desc": `Precision-crafted functional sculptures designed to command absolute architectural light. Each object is shaped through rigorous material study, existing at the threshold between furniture and spatial art.`
      }
    ]
  },
  "manifesto": {
    "label": `Spatial Manifesto`,
    "titlePart1": `We speak through`,
    "titlePart2": `tactile shadows.`,
    "desc": `Every corner, surface, and void we touch is calculated to evoke deep emotional resonance. Our architectural discipline ensures that massive spatial layouts retain microscopic structural detail and material excellence.`,
    "stats": {
      "precision": `Precision`,
      "spaces": `Spaces`,
      "years": `Years`
    }
  },
  "rhythm": {
    "label": `Curated Void`,
    "title": `Rigorous material alignment.`,
    "desc": `A continuous physical flow where custom-cut travertine tiles merge seamlessly into structured aluminum mullions.`
  },
  "portfolio": {
    "title": `Selected Portfolios`,
    "viewAll": `View All [02]`
  },
  "common": {
    "established": `Established in 2026`,
    "spatialRigor": `Spatial Rigor`,
    "minimalArch": `Minimal Architecture`,
    "scrollSense": `Scroll for Sense`
  },
  "nav": {
    "services": `Services`,
    "projects": `Projects`,
    "contact": `Contact`,
    "about": `About`
  },
  "cta": `Start Project`,
  "footer": {
    "copyright": `© 2026 OHMT.`,
    "contact": `Austin, Texas · hello@ohmytemplate.com`
  },
  "aboutPage": {
    "category": `Architectural Core`,
    "title1": `ABOUT`,
    "title2": `VINUSPREAD.`,
    "philosophy": {
      "title": `Space as a canvas.`,
      "desc": `We operate at the convergence of architecture, spatial brand experience, and tactile interaction. Our design lab is dedicated to executing systems that evoke silence, celebrate material honesty, and command physical space with ultimate rigor.`
    },
    "stats": [
      {
        "value": `98.69%`,
        "label": `Precision`,
        "desc": `Our spatial design limits margins of error to near zero.`
      },
      {
        "value": `450+`,
        "label": `Spaces`,
        "desc": `Premium architectural and interior works globally realized.`
      },
      {
        "value": `25+`,
        "label": `Awards`,
        "desc": `Honored with major global architecture & design awards.`
      }
    ],
    "splitTitle1": `Micro-Curated Casing,`,
    "splitTitle2": `furniture & light.`,
    "splitDesc": `Every detail matters. From the grand architectural structure to the custom curation of custom lighting, textured materials, and bespoke furniture, we design custom interior networks that align precisely with aesthetic standards.`,
    "splitCta": `Start Project Now`,
    "awardsTitle1": `Honored with`,
    "awardsTitle2": `distinction.`,
    "awards": [
      {
        "year": `2026`,
        "title": `Grand Prix of Spatial Architecture`,
        "category": `Global Design Association`
      },
      {
        "year": `2024`,
        "title": `Sustainable Interior of the Year`,
        "category": `Eco Architecture Institute`
      },
      {
        "year": `2022`,
        "title": `Top 50 Spatial Visionaries`,
        "category": `Creative Narrative Council`
      }
    ],
    "teamTitle": `Spatial visionaries.`,
    "team": [
      {
        "name": `Jessica Point`,
        "role": `Principal Architect`
      },
      {
        "name": `Ryan Baser`,
        "role": `Object & Furniture Curator`
      },
      {
        "name": `Carrie Vath`,
        "role": `Lead Interior Stylist`
      }
    ]
  },
  "servicesPage": {
    "category": `Capabilities`,
    "title1": `OUR`,
    "title2": `SERVICES.`,
    "sectionTitle": `Explore our architectural disciplines & systems.`,
    "items": [
      {
        "idx": `01`,
        "category": `Spatial Architecture`,
        "title": `Corporate Curation`,
        "desc": `Early schematic optimization. We align raw physical footprints with functional high-density structures and breathing zones.`
      },
      {
        "idx": `02`,
        "category": `Bespoke Interior`,
        "title": `Tactile Curation`,
        "desc": `Micro material alignment. A perfect integration of acoustic surfaces, light engineering, and high-end materials.`
      },
      {
        "idx": `03`,
        "category": `Object Curation`,
        "title": `Bespoke Furniture`,
        "desc": `Custom furniture design. Handcrafted functional sculptures custom-built to interact with architectural lighting.`
      },
      {
        "idx": `04`,
        "category": `Strategic Oversight`,
        "title": `Construction Control`,
        "desc": `Master craftsman coordination. Seamlessly executing massive site designs under rigorous quality metrics.`
      }
    ],
    "ctaTitle": `Ready to build your spatial system?`,
    "ctaBtn": `Start Journey`
  },
  "projectsPage": {
    "category": `Portfolio`,
    "title1": `COMPLETED`,
    "title2": `WORKS.`,
    "tagAll": `All`,
    "tagArchitecture": `Architecture`,
    "tagInterior": `Interior`,
    "tagObject": `Object`,
    "projectDesc": `Rigorous spatial geometry manifesting in custom textures and forms.`
  },
  "contactPage": {
    "category": `Contact Us`,
    "title1": `INITIATE`,
    "title2": `PROJECT.`,
    "formTitle": `Design Casing Lab consultation`,
    "formDesc": `Please share your project scale, budget parameters, and aesthetic aspirations. We will analyze your proposal and get back to you shortly.`,
    "name": `Name`,
    "namePlaceholder": `Your full name`,
    "email": `Email Address`,
    "emailPlaceholder": `your@email.com`,
    "message": `Project Details`,
    "messagePlaceholder": `Tell us about your spatial project...`,
    "submit": `Submit Proposal`,
    "success": `Proposal Submitted.`,
    "successDesc": `Our design curator has received your submission and will contact you shortly.`,
    "close": `Close`,
    "directContact": `Direct Contact`,
    "globalChannels": `Global Channels`,
    "designCasingLab": `Design Casing Lab`
  }
};
const fields = t.hero.fields.map((f: any, i: number) => ({
        ...f,
        idx: `0${i + 1}`,
        image: `/templates/OHMT006-studio/hero-${i + 1}.jpg`
    }));

    const featuredProjects = [
        {
            id: "proj-1",
            title: "Nordic Monolith Office",
            category: "Corporate Curation",
            year: "2026",
            location: "Oslo, Norway",
            image: "/templates/OHMT006-studio/project-1.jpg"
        },
        {
            id: "proj-2",
            title: "The Alabaster Residence",
            category: "Private Mansion",
            year: "2025",
            location: "Kyoto, Japan",
            image: "/templates/OHMT006-studio/project-2.jpg"
        }
    ];

    const activeHeroField = fields[activeHeroIndex];

    const handleNext = () => setActiveHeroIndex((prev) => (prev + 1) % fields.length);
    const handlePrev = () => setActiveHeroIndex((prev) => (prev - 1 + fields.length) % fields.length);

    return (
        <TemplateWrapper theme={theme}>
            <main className="antialiased min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white relative overflow-hidden">
                <Header />

                {/* Side Tickers - xl only */}
                <div className="hidden xl:flex fixed left-10 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-40 pointer-events-none mix-blend-difference">
                    <span className="text-[12px] text-white/40 font-bold whitespace-nowrap [writing-mode:vertical-rl] rotate-180">{t.common.established}</span>
                    <div className="w-[1px] h-16 bg-white/25" />
                    <span className="text-[12px] text-white/80 font-bold whitespace-nowrap [writing-mode:vertical-rl] rotate-180">{t.common.spatialRigor}</span>
                </div>
                <div className="hidden xl:flex fixed right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-40 pointer-events-none mix-blend-difference">
                    <span className="text-[12px] text-white/40 font-bold whitespace-nowrap [writing-mode:vertical-rl]">{t.common.minimalArch}</span>
                    <div className="w-[1px] h-16 bg-white/25" />
                    <span className="text-[12px] text-white/60 font-bold whitespace-nowrap [writing-mode:vertical-rl]">{t.common.scrollSense}</span>
                </div>

                {/* 1. Hero */}
                <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-between">
                    <div className="absolute inset-0 z-0">
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover brightness-[0.78] transition-opacity duration-1000"
                        >
                            <source src="/templates/OHMT006-studio/hero-bg.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />
                    </div>

                    {/* SNS */}
                    <div className="absolute left-6 bottom-32 z-20 hidden md:flex flex-col items-center gap-6 bg-white/90 backdrop-blur-md py-6 px-4 border border-black/5">
                        <a href="#" className="text-[13px] font-bold text-black/50 hover:text-black">Fb</a>
                        <a href="#" className="text-[13px] font-bold text-black/50 hover:text-black">Tw</a>
                        <a href="#" className="text-[13px] font-bold text-black/50 hover:text-black">Ig</a>
                    </div>

                    {/* Heading */}
                    <div className="relative z-20 max-w-[1720px] mx-auto w-full px-6 md:px-16 lg:px-24 h-full flex flex-col justify-center">
                        <div className="space-y-5 md:space-y-8 max-w-5xl">
                            <span className="text-[13px] font-bold text-white/60 block">{t.hero.badge}</span>
                            <h1 className="text-[clamp(3rem,8.5vw,7.5rem)] font-bold leading-[1.0] text-white">
                                {t.hero.title1}<br /><span className="font-serif not-italic font-normal lowercase text-white">{t.hero.title2}</span>
                            </h1>
                            <div className="pt-2 md:pt-4">
                                <Link
                                    href="/en/templates/OHMT006-studio/contact"
                                    className="inline-flex items-center gap-4 border border-white bg-white/10 hover:bg-white hover:text-black text-white px-6 md:px-8 py-3 md:py-4 text-[13px] font-bold backdrop-blur-md transition-all duration-300 rounded-none"
                                >
                                    {t.hero.cta}
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Info Bar */}
                    <div className="relative z-20 w-full">
                        <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
                            <div className="w-full flex items-stretch bg-[#111111]">
                                {/* Thumbnail - md+ only */}
                                <div className="hidden md:block w-2/5 shrink-0 relative overflow-hidden group/thumb cursor-pointer md:h-[240px]">
                                    <img
                                        src={fields[(activeHeroIndex + 1) % fields.length].image}
                                        alt="Next slide"
                                        className="w-full h-full object-cover opacity-70 group-hover/thumb:opacity-100 group-hover/thumb:scale-105 transition-all duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover/thumb:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                        <Play size={12} className="fill-white text-white opacity-70" />
                                    </div>
                                </div>

                                {/* Text + Arrows */}
                                <div className="flex-1 min-w-0 flex flex-col justify-center gap-3 px-6 md:px-10 py-6 md:py-0 md:h-[240px]">
                                    <div className="flex flex-col gap-1.5">
                                        <div className="flex flex-wrap items-center gap-2 md:gap-4">
                                            <h3 className="text-[16px] md:text-[20px] font-bold text-white">{activeHeroField.subTitle}</h3>
                                            <span className="text-[13px] font-mono text-white/40">- {activeHeroField.location}</span>
                                        </div>
                                        <p className="text-[15px] md:text-[14px] text-white/50 font-normal leading-[1.4] line-clamp-3 md:line-clamp-none">{activeHeroField.desc}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button onClick={handlePrev} className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/20 hover:border-white text-white flex items-center justify-center transition-colors">
                                            <ChevronLeft size={13} />
                                        </button>
                                        <button onClick={handleNext} className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/20 hover:border-white text-white flex items-center justify-center transition-colors">
                                            <ChevronRight size={13} />
                                        </button>
                                        <span className="text-[13px] text-white/40 ml-1">0{activeHeroIndex + 1} / 03</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Manifesto */}
                <section className="bg-[var(--color-bg-dark)] text-white py-16 md:py-40 border-b border-white/10">
                    <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
                            <div className="lg:col-span-5 space-y-3 md:space-y-4">
                                <span className="text-[13px] text-white/40 font-bold block">{t.manifesto.label}</span>
                                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-[1.1] text-white">
                                    {t.manifesto.titlePart1} <br />{t.manifesto.titlePart2}
                                </h2>
                            </div>
                            <div className="lg:col-span-7 space-y-10 md:space-y-16">
                                <p className="text-[15px] md:text-[16px] lg:text-[18px] text-white/60 leading-[1.4] font-normal">
                                    {t.manifesto.desc}
                                </p>
                                <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-white/10 pt-8 md:pt-12">
                                    <div className="space-y-2">
                                        <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">98.69%</div>
                                        <span className="text-[13px] font-bold text-white/40 block">{t.manifesto.stats.precision}</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">450+</div>
                                        <span className="text-[13px] font-bold text-white/40 block">{t.manifesto.stats.spaces}</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">25+</div>
                                        <span className="text-[13px] font-bold text-white/40 block">{t.manifesto.stats.years}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Rhythm Layer */}
                <section className="py-14 md:py-32 bg-white">
                    <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
                            <div className="md:col-span-4 aspect-[3/4] overflow-hidden border border-black/10 relative">
                                <img loading="lazy" src="/templates/OHMT006-studio/hero-2.jpg" alt={t.rhythm.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                            </div>
                            <div className="md:col-span-5 space-y-5 md:space-y-6 lg:px-12">
                                <span className="text-[13px] font-mono text-black/40 font-bold block">{t.rhythm.label}</span>
                                <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-black leading-[1.1]">
                                    {t.rhythm.title}
                                </h3>
                                <p className="text-[15px] md:text-[16px] lg:text-[18px] text-black/50 leading-[1.4] font-normal">
                                    {t.rhythm.desc}
                                </p>
                            </div>
                            <div className="md:col-span-3 aspect-[1/1] overflow-hidden border border-black/10 self-end md:mb-12">
                                <img loading="lazy" src="/templates/OHMT006-studio/project-1.jpg" alt="Material swatch" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Selected Portfolios */}
                <section className="py-14 md:py-32 bg-white border-t border-black/10">
                    <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
                        <div className="flex justify-between items-baseline pb-8 md:pb-12 border-b border-black/10 mb-10 md:mb-20">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black">{t.portfolio.title}</h2>
                            <Link href="/en/templates/OHMT006-studio/projects" className="text-[13px] font-bold border-b-2 border-black pb-1 hover:opacity-60 transition-all shrink-0 ml-4 whitespace-nowrap">
                                {t.portfolio.viewAll}
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20">
                            {featuredProjects.map((project, idx) => (
                                <Link
                                    href={`/en/templates/OHMT006-studio/projects/${project.id}`}
                                    key={project.id}
                                    className={`group block lg:col-span-6 ${idx === 1 ? "lg:mt-24" : ""}`}
                                >
                                    <div className="relative aspect-[16/10] w-full overflow-hidden border border-black/10">
                                        <img loading="lazy" src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" />
                                        <div className="absolute top-4 left-4 md:top-6 md:left-6">
                                            <span className="bg-white px-3 py-1 md:px-3.5 md:py-1.5 text-[12px] font-bold border border-black/10 text-black">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-5 md:mt-8 flex justify-between items-start border-b border-black/5 pb-5 md:pb-6">
                                        <div className="space-y-1">
                                            <h3 className="text-xl md:text-2xl font-bold text-black">{project.title}</h3>
                                            <p className="text-[14px] text-black/40">{project.location}</p>
                                        </div>
                                        <span className="text-[14px] text-black/40">{project.year}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <TeamSection />

                <Footer />
            </main>
        </TemplateWrapper>
    );
}


export default function StudioHome() {
  return (
    <React.Suspense fallback={null}>
      <StudioHomeContent />
    </React.Suspense>
  );
}
