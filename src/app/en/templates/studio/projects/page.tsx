"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { PageHeader } from "../_components/PageHeader";
import { SplitScreenSection } from "../_components/SplitScreenSection";
import { ProjectListItem } from "../_components/ProjectListItem";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
function StudioProjectsPageContent() {
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
    "copyright": `© 2026 Oh My Template.`,
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
const [filter, setFilter] = useState("all");

    const projects = [
        {
            id: "proj-1",
            title: "Nordic Monolith Office",
            category: t.servicesPage.items[0].title,
            year: "2026",
            location: "Oslo, Norway",
            image: "/templates/OHMT006-studio/project-1.jpg",
            type: "corporate"
        },
        {
            id: "proj-2",
            title: "The Alabaster Residence",
            category: t.manifesto.label,
            year: "2025",
            location: "Kyoto, Japan",
            image: "/templates/OHMT006-studio/project-2.jpg",
            type: "residential"
        },
        {
            id: "proj-3",
            title: "Geometric Timber Pavillion",
            category: t.servicesPage.items[2].category,
            year: "2025",
            location: "Basel, Switzerland",
            image: "/templates/OHMT006-studio/project-3.jpg",
            type: "exhibition"
        }
    ];

    const filteredProjects = filter === "all" ? projects : projects.filter(p => p.type === filter);

    return (

      <TemplateWrapper theme={theme}>

        <main className="antialiased min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white relative overflow-hidden">
            <Header />

            <PageHeader
                category={t.projectsPage.category}
                title={<>{t.projectsPage.title1} <br /><span className="font-normal">{t.projectsPage.title2}</span></>}
                breadcrumb={["Studio", t.nav.projects || "Projects"]}
            />

            <section className="py-12 md:py-36 bg-white">
                <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col gap-10 md:gap-24">

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10 border-b border-black/5 pb-6 md:pb-10">
                        <div className="max-w-[680px]">
                            <h2 className="text-[clamp(1.8rem,4.5vw,4.5rem)] font-bold leading-[1.1] text-black break-keep">
                                {t.projectsPage.projectDesc}
                            </h2>
                        </div>

                        <div className="flex gap-6 md:gap-8 text-[13px] font-bold mb-0 md:mb-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
                            {[
                                { key: "all", label: t.projectsPage.tagAll },
                                { key: "corporate", label: t.projectsPage.tagArchitecture },
                                { key: "residential", label: t.projectsPage.tagInterior },
                                { key: "exhibition", label: t.projectsPage.tagObject },
                            ].map(({ key, label }) => (
                                <button
                                    key={key}
                                    onClick={() => setFilter(key)}
                                    className={`pb-2 border-b-2 transition-all whitespace-nowrap shrink-0 ${filter === key ? "border-black text-black" : "border-transparent text-black/40 hover:text-black"}`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-12 md:gap-24">
                        {filteredProjects.slice(0, 2).map((project) => (
                            <ProjectListItem key={project.id} project={project} />
                        ))}
                    </div>

                </div>
            </section>

            <SplitScreenSection
                bgClass="bg-[var(--color-bg-dark)]"
                textColorClass="text-white"
                borderColorClass="border-white/5"
                imageSrc="/templates/OHMT006-studio/hero-3.jpg"
                imageAlt="High-end furniture close up"
                imagePosition="right"
            >
                <div className="space-y-4 max-w-[480px]">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] break-keep">
                        {t.servicesPage.items[2].title} <br />
                        {t.servicesPage.items[2].category}
                    </h3>
                </div>
                <p className="text-[14px] text-white/50 leading-[1.4] font-normal max-w-[460px] break-keep">
                    {t.servicesPage.items[2].desc}
                </p>
            </SplitScreenSection>

            <section className="py-12 md:py-36 bg-white">
                <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col gap-12 md:gap-24">
                    <div className="grid grid-cols-1 gap-12 md:gap-24">
                        {filteredProjects.slice(2).map((project) => (
                            <ProjectListItem key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>

      </TemplateWrapper>
);
}


export default function StudioProjectsPage() {
  return (
    <React.Suspense fallback={null}>
      <StudioProjectsPageContent />
    </React.Suspense>
  );
}
