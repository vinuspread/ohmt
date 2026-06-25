"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { PageHeader } from "../_components/PageHeader";
import { SplitScreenSection } from "../_components/SplitScreenSection";
import { ArrowUpRight, Award } from "lucide-react";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
function StudioAboutPageContent() {
    const searchParams = useSearchParams();
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
    "copyright": `© 2026 Vinuspread Studio. All rights reserved.`,
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
const stats = t.aboutPage.stats;
    const history = t.aboutPage.awards;
    
    const teamMembers = t.aboutPage.team;
    const team = [
        { name: teamMembers[0].name, role: teamMembers[0].role, image: '/templates/studio/team-1.jpg' },
        { name: teamMembers[1].name, role: teamMembers[1].role, image: '/templates/studio/team-2.jpg' },
        { name: teamMembers[2].name, role: teamMembers[2].role, image: '/templates/studio/team-3.jpg' }
    ];

    return (

      <TemplateWrapper theme={theme}>

        <main className="antialiased min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white relative overflow-hidden">
            <Header />
            <PageHeader 
                category={t.aboutPage.category} 
                title={<>{t.aboutPage.title1} <br /><span className="font-normal">{t.aboutPage.title2}</span></>} 
                breadcrumb={[t.nav.about || "About"]} 
            />

            {/* 2. Philosophy */}
            <section className="py-12 md:py-36 bg-white text-black border-t border-b border-black/5">
                <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="grid lg:grid-cols-12 gap-8 md:gap-20 items-start">
                        <div className="lg:col-span-5 space-y-3 md:space-y-4">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-[1.1] text-black break-keep">
                                {t.aboutPage.philosophy.title}
                            </h2>
                        </div>
                        <div className="lg:col-span-7 space-y-8 md:space-y-20">
                            <p className="text-[15px] md:text-[16px] lg:text-[18px] text-black/50 leading-[1.4] font-normal break-keep">
                                {t.aboutPage.philosophy.desc}
                            </p>
                            {/* Stats - 모바일 1열 */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 border-t border-black/5 pt-8 md:pt-12">
                                {stats.map((s: any, idx: number) => (
                                    <div key={idx} className="flex sm:flex-col gap-4 sm:gap-0 items-center sm:items-start sm:space-y-4">
                                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-black shrink-0">{s.value}</div>
                                        <div className="space-y-1 sm:space-y-2">
                                            <h4 className="text-[13px] font-bold text-black/50 uppercase">{s.label}</h4>
                                            <p className="text-[13px] md:text-[14px] text-black/60 leading-[1.4] font-normal break-keep">{s.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Split Screen */}
            <SplitScreenSection bgClass="bg-white" textColorClass="text-black" borderColorClass="border-transparent" imageSrc="/templates/studio/hero-2.jpg" imageAlt="Studio interior showcase" imagePosition="left">
                <div className="space-y-3 md:space-y-4">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-black break-keep">
                        {t.aboutPage.splitTitle1} <br />{t.aboutPage.splitTitle2}
                    </h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-black/50 leading-[1.4] font-normal break-keep">
                    {t.aboutPage.splitDesc}
                </p>
                <div className="pt-2 md:pt-4">
                    <Link href={`/en/templates/OHMT006-studio-EN/contact`} className="group inline-flex items-center gap-4 border-b-2 border-black pb-2 text-[13px] font-bold text-black transition-opacity hover:opacity-60 uppercase">
                        {t.aboutPage.splitCta} <ArrowUpRight size={14} />
                    </Link>
                </div>
            </SplitScreenSection>

            {/* 4. Awards */}
            <section className="py-12 md:py-36 bg-[var(--color-bg-dark)] text-white">
                <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24 space-y-8 md:space-y-16">
                    <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white leading-none break-keep">
                        {t.aboutPage.awardsTitle1} <br />{t.aboutPage.awardsTitle2}
                    </h2>
                    <div className="border-t border-white/5 divide-y divide-white/5">
                        {history.map((h: any, idx: number) => (
                            <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-2 md:gap-6 py-6 md:py-10 items-start group hover:bg-white/5 px-2 md:px-4 transition-colors duration-300">
                                <div className="sm:col-span-2 text-[13px] text-white/40 font-bold">{h.year}</div>
                                <div className="sm:col-span-6 text-base md:text-xl font-bold text-white">{h.title}</div>
                                <div className="sm:col-span-3 text-[12px] md:text-[13px] font-bold text-white/40 uppercase">{h.category}</div>
                                <div className="sm:col-span-1 text-right hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Award size={18} className="text-white ml-auto" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rhythm Layer 2 */}
            <section className="py-10 md:py-24 bg-white">
                <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
                        <div className="md:col-span-6 aspect-[4/3] overflow-hidden">
                            <img loading="lazy" src="/templates/studio/hero-3.jpg" alt="Travertine light curation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out" />
                        </div>
                        <div className="md:col-span-6 aspect-[4/3] overflow-hidden md:mt-16">
                            <img loading="lazy" src="/templates/studio/project-3.jpg" alt="Aluminum geometric casing" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Team */}
            <section className="py-12 md:py-36 bg-white border-t border-black/5">
                <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24 space-y-8 md:space-y-16">
                    <div className="text-center max-w-xl mx-auto">
                        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black leading-none break-keep">
                            {t.aboutPage.teamTitle}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                        {team.map((t, idx) => (
                            <div key={idx} className="group relative overflow-hidden bg-white">
                                <div className="aspect-[3/4] overflow-hidden relative">
                                    <img loading="lazy" src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out" />
                                </div>
                                <div className="py-6 md:p-8 space-y-1 md:space-y-1.5 bg-white relative z-10">
                                    <h4 className="text-xl md:text-2xl font-bold text-black">{t.name}</h4>
                                    <p className="text-[13px] font-bold text-black/50 uppercase">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>

      </TemplateWrapper>
);
}


export default function StudioAboutPage() {
  return (
    <React.Suspense fallback={null}>
      <StudioAboutPageContent />
    </React.Suspense>
  );
}
