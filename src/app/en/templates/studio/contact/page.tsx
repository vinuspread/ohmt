"use client";
import React, { useState } from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { PageHeader } from "../_components/PageHeader";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { useSearchParams } from "next/navigation";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
function StudioContactPageContent() {
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
const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (

      <TemplateWrapper theme={theme}>

        <main className="antialiased min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white relative overflow-hidden">
            <Header />

            <PageHeader
                category={t.contactPage.category}
                title={<>{t.contactPage.title1} <br /><span className="font-normal">{t.contactPage.title2}</span></>}
                breadcrumb={["Studio", t.nav.contact || "Contact"]}
            />

            <section className="py-12 md:py-36 bg-white">
                <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-stretch">

                        {/* Left Side */}
                        <div className="lg:col-span-6 flex flex-col justify-between gap-8 md:gap-0">
                            <div className="space-y-8 md:space-y-16">
                                <div className="space-y-4 md:space-y-6">
                                    <span className="text-[12px] md:text-[13px] text-black/40 font-bold block uppercase">
                                        {t.contactPage.globalChannels}
                                    </span>
                                    <h2 className="text-[clamp(1.8rem,4.5vw,4.5rem)] font-bold leading-[1.1] text-black break-keep">
                                        {t.contactPage.formTitle}
                                    </h2>
                                    <p className="text-[14px] text-black/50 leading-[1.4] font-normal break-keep max-w-[480px]">
                                        {t.contactPage.formDesc}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 border-t border-black/5 pt-8 md:pt-12">
                                    <div className="space-y-2 group cursor-pointer">
                                        <span className="text-[12px] md:text-[13px] font-bold text-black/50 flex items-center gap-2 uppercase">
                                            <Mail size={12} /> {t.contactPage.directContact}
                                        </span>
                                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-black hover:opacity-60 transition-opacity duration-300">
                                            hello@ohmytemplate.com
                                        </h3>
                                    </div>

                                    <div className="space-y-2 group">
                                        <span className="text-[12px] md:text-[13px] font-bold text-black/50 flex items-center gap-2 uppercase">
                                            <MapPin size={12} /> {t.contactPage.designCasingLab || "Design Casing Lab"}
                                        </span>
                                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-black leading-tight">
                                            Austin, Texas // 308 Congress Ave.
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-full flex-grow min-h-[260px] md:min-h-[350px] lg:min-h-[400px] overflow-hidden mt-4 md:mt-12">
                                <img
                                    src="/templates/studio/hero-1.jpg"
                                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                                    alt="Visual representation of tactile casing"
                                />
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="lg:col-span-6 bg-[var(--color-bg-dark)] text-white p-8 md:p-16 flex flex-col justify-center relative">
                            {submitted ? (
                                <div className="text-center py-16 space-y-6">
                                    <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center mx-auto">
                                        <span className="text-white text-2xl">✓</span>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold tracking-tight text-white break-keep">
                                            {t.contactPage.success}
                                        </h3>
                                        <p className="text-[14px] text-white/50 font-normal break-keep">
                                            {t.contactPage.successDesc}
                                        </p>
                                    </div>
                                    <button 
                                        onClick={() => setSubmitted(false)}
                                        className="text-[12px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                                    >
                                        {t.contactPage.close}
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-8 md:space-y-12 w-full" onSubmit={handleSubmit}>
                                    <div className="space-y-3 border-b border-white/5 pb-4 focus-within:border-white transition-colors duration-300">
                                        <label className="text-[12px] md:text-[13px] font-bold text-white/40 block uppercase">
                                            {t.contactPage.name}
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full bg-transparent outline-none text-[15px] font-bold text-white placeholder-white/25 placeholder:text-white/20"
                                            placeholder={t.contactPage.namePlaceholder}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-3 border-b border-white/5 pb-4 focus-within:border-white transition-colors duration-300">
                                        <label className="text-[12px] md:text-[13px] font-bold text-white/40 block uppercase">
                                            {t.contactPage.email}
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full bg-transparent outline-none text-[15px] font-bold text-white placeholder-white/25 placeholder:text-white/20"
                                            placeholder={t.contactPage.emailPlaceholder}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-3 border-b border-white/5 pb-4 focus-within:border-white transition-colors duration-300">
                                        <label className="text-[12px] md:text-[13px] font-bold text-white/40 block uppercase">
                                            {t.contactPage.message}
                                        </label>
                                        <textarea
                                            className="w-full bg-transparent outline-none text-[14.5px] font-bold text-white placeholder-white/25 placeholder:text-white/20 min-h-[100px] resize-none"
                                            placeholder={t.contactPage.messagePlaceholder}
                                            required
                                        />
                                    </div>

                                    <div className="pt-2 md:pt-4">
                                        <button
                                            type="submit"
                                            className="w-full h-[56px] md:h-[64px] bg-white hover:bg-neutral-200 text-black font-bold text-[13px] transition-all duration-300 flex items-center justify-center gap-4 group/btn"
                                        >
                                            <span className="font-bold uppercase tracking-widest text-[13px]">
                                                {t.contactPage.submit}
                                            </span>
                                            <ArrowUpRight size={14} className="text-black transition-colors duration-300" />
                                        </button>
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


export default function StudioContactPage() {
  return (
    <React.Suspense fallback={null}>
      <StudioContactPageContent />
    </React.Suspense>
  );
}
