'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from "react";
import { X } from 'lucide-react';
export function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
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
    "copyright": `© 2026 Oh My Template Studio. All rights reserved.`,
    "contact": `Austin, Texas · hello@ohmytemplate.com`
  },
  "aboutPage": {
    "category": `Architectural Core`,
    "title1": `ABOUT`,
    "title2": `Oh My Template.`,
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
useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const navItems = [
        { name: t.nav.services, href: '/en/templates/studio/services' },
        { name: t.nav.projects, href: '/en/templates/studio/projects' },
        { name: t.nav.contact, href: '/en/templates/studio/contact' },
        { name: t.nav.about, href: '/en/templates/studio/about' },
    ];

    const isMainPage = /^\/(en|ko)?\/?templates\/studio\/?$/.test(pathname);
    const isProjectDetail = pathname.includes('/projects/') && !pathname.endsWith('/projects');
    const isLight = scrolled || (!isMainPage && !isProjectDetail);

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-[64px] transition-all duration-500 flex justify-between items-center ${
                scrolled ? 'bg-white/95 backdrop-blur-xl py-3 md:py-6 border-b border-black/5 shadow-sm' : 'bg-transparent py-4 md:py-10'
            }`}>
                {/* Logo */}
                <Link
                    href="/en/templates/studio"
                    className={`text-[18px] md:text-[20px] font-black tracking-[-0.5px] uppercase transition-colors duration-500 ${isLight ? 'text-black' : 'text-white'}`}
                >
                    Oh My Template<span className="font-normal">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-[64px]">
                    <div className="flex gap-[48px]">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-[13px] font-bold tracking-[3px] uppercase transition-colors duration-500 ${isLight ? 'text-black/60 hover:text-black' : 'text-white/70 hover:text-white'}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="/en/templates/studio/contact"
                        className={`h-[40px] px-8 rounded-full border text-[13px] font-bold tracking-[2.5px] uppercase transition-all duration-500 flex items-center justify-center ${
                            isLight ? 'border-black/15 text-black hover:bg-black hover:text-white' : 'border-white/30 text-white bg-white/10 hover:bg-white hover:text-black'
                        }`}
                    >
                        {t.cta}
                    </Link>
                </nav>

                {/* Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-[5px] cursor-pointer p-2 -mr-2"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <X size={20} className={isLight ? 'text-black' : 'text-white'} />
                    ) : (
                        <>
                            <div className={`w-[22px] h-[1.5px] transition-colors duration-500 ${isLight ? 'bg-black' : 'bg-white'}`} />
                            <div className={`w-[22px] h-[1.5px] transition-colors duration-500 ${isLight ? 'bg-black' : 'bg-white'}`} />
                        </>
                    )}
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-[#111111] flex flex-col transition-all duration-500 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex-1 flex flex-col justify-center px-8 gap-8">
                    {navItems.map((item, idx) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-[clamp(2rem,8vw,3.5rem)] font-bold text-white hover:text-white/60 transition-colors border-b border-white/10 pb-6"
                            style={{ transitionDelay: menuOpen ? `${idx * 60}ms` : '0ms' }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="px-8 pb-12">
                    <Link
                        href="/en/templates/studio/contact"
                        onClick={() => setMenuOpen(false)}
                        className="inline-flex items-center justify-center w-full h-[52px] rounded-full border border-white/30 text-white text-[13px] font-bold tracking-[2px] uppercase hover:bg-white hover:text-black transition-all duration-500"
                    >
                        {t.cta}
                    </Link>
                </div>
            </div>
        </>
    );
}
