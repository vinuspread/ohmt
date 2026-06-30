"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight, X, Search, Sparkles } from "lucide-react";

const HERO_SLIDES = [
  {
    heading: <>Launch your business<br className="hidden sm:block" /> <span className="text-[#F1B100]">with a complete system.</span></>,
    desc: "Premium templates, fully customized by our team.\nYour website, ready to go in 2 weeks.",
  },
  {
    heading: <>Every feature you need,<br className="hidden sm:block" /> <span className="text-[#F1B100]">built exactly as you want.</span></>,
    desc: "Got a specific feature in mind?\nMembership, bookings, payments — we build it all to fit your business.",
  },
  {
    heading: <>Ongoing support<br className="hidden sm:block" /> <span className="text-[#F1B100]">you can count on.</span></>,
    desc: "Business starts after launch.\nOur dedicated team responds quickly to any issues that arise.",
  },
];
import { useRouter } from "next/navigation";
import { Logo } from "@/components/Logo";
import type { PricingPackage } from "@/types/template";

export interface TemplateItem {
  id: string;
  name: string;
  url: string;
  desc: string;
  category: string;
  image: string;
  isFeatured?: boolean;
  slug: string;
  applicablePackages: string[];
  requiresConsultation: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const ALL_LABEL = "All";

const POPULAR_TAGS = ["Fashion", "Portfolio", "Agency", "Luxury", "Minimalist"];

export default function LandingPageClient({ templates, faqs, packages }: { templates: TemplateItem[]; faqs: FaqItem[]; packages: PricingPackage[] }) {
  const router = useRouter();
  const [heroIndex, setHeroIndex] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL_LABEL);
  const [isAdmin, setIsAdmin] = useState(false);
  const [descModalTemplate, setDescModalTemplate] = useState<TemplateItem | null>(null);
  const [featuredTemplateId, setFeaturedTemplateId] = useState<string | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) {
        setHeaderVisible(true);
      } else if (currentY < lastScrollY.current) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const restartInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
  }, []);

  const goPrev = useCallback(() => {
    setHeroIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    restartInterval();
  }, [restartInterval]);

  const goNext = useCallback(() => {
    setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    restartInterval();
  }, [restartInterval]);

  useEffect(() => {
    import("@/lib/supabase/client").then(({ createClient }) => {
      createClient().auth.getUser().then(({ data }) => {
        if (data.user) setIsAdmin(true);
      });
    });
  }, []);

  useEffect(() => {
    const featuredList = templates.filter((template) => template.isFeatured);
    setFeaturedTemplateId(featuredList.length > 0 ? featuredList[Math.floor(Math.random() * featuredList.length)].id : null);
  }, [templates]);

  useEffect(() => {
    restartInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [restartInterval]);

  const websiteOrganizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://ohmt.site/#website",
        url: "https://ohmt.site",
        name: "Oh My Template",
        description: "Premium Next.js web templates for brands, agencies, and creators.",
        inLanguage: ["en", "ko"],
        potentialAction: {
          "@type": "SearchAction",
          target: "https://ohmt.site/en?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://ohmt.site/#organization",
        name: "Oh My Template",
        url: "https://ohmt.site",
        email: "vinus@vinus.co.kr",
        description: "Premium Next.js web templates for brands, agencies, and creators. Fully customized by our team in 2 days.",
        sameAs: [],
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Oh My Template — Template Collection",
    description: "Premium Next.js web templates",
    url: "https://ohmt.site/en",
    numberOfItems: templates.length,
    itemListElement: templates.map((template, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: template.name,
      description: template.desc,
      url: `https://ohmt.site${template.url}`,
      image: template.image ? `https://ohmt.site${template.image}` : undefined,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const categories = useMemo(() => {
    const seen = new Set<string>();
    const result: string[] = [ALL_LABEL];
    for (const t of templates) {
      if (!seen.has(t.category)) {
        seen.add(t.category);
        result.push(t.category);
      }
    }
    return result;
  }, [templates]);

  const filteredTemplates = useMemo(() => {
    return templates.filter(t => {
      const matchCategory = activeCategory === ALL_LABEL || t.category === activeCategory;
      const matchSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.desc.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchTerm, templates]);

  const randomFeaturedItem = useMemo(() => {
    if (!featuredTemplateId) return null;
    return templates.find((template) => template.id === featuredTemplateId) ?? null;
  }, [featuredTemplateId, templates]);

  // Featured Item: If activeCategory is "All" and search is empty, show the designated featured item on top
  const featuredItem = useMemo(() => {
    if (activeCategory !== ALL_LABEL || searchTerm !== "") return null;
    return randomFeaturedItem;
  }, [activeCategory, searchTerm, randomFeaturedItem]);

  // Grid Items: Exclude the featured item if it is shown on top
  const gridItems = useMemo(() => {
    if (featuredItem) {
      return filteredTemplates.filter(t => t.id !== featuredItem.id);
    }
    return filteredTemplates;
  }, [filteredTemplates, featuredItem]);

  const goToContact = (packageId?: string, template?: TemplateItem) => {
    const params = new URLSearchParams();
    if (packageId) params.set("package", packageId);
    if (template) {
      params.set("template", template.name);
      params.set("image", template.image);
      params.set("category", template.category);
      params.set("template_slug", template.slug);
    }
    router.push(`/en/contact?${params.toString()}`);
  };

  return (
      <main className="min-h-screen bg-[#FCFCFD] text-zinc-900 font-sans selection:bg-[#F1B100] selection:text-zinc-900 overflow-x-hidden antialiased dark:bg-zinc-950 dark:text-zinc-100 pt-[64px]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteOrganizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        
        {/* Header */}
        <header className={`bg-white border-b border-zinc-200/60 px-6 md:px-12 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-40 transition-transform duration-300 dark:bg-zinc-900 dark:border-zinc-800 ${headerVisible ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="flex items-center gap-8">
            <Link href="/en" className="flex items-center gap-3 h-6">
              <Logo className="h-6 w-auto block" />
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-[0.82rem] font-bold text-zinc-500 uppercase tracking-wider dark:text-zinc-400">
              <a href="#templates" className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">Templates</a>
              <a href="#pricing" className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">Pricing</a>
              <a href="#process" className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">Process</a>
              <a href="#faq" className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">FAQ</a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/ko" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors font-bold dark:text-zinc-500 dark:hover:text-zinc-100">
              KR
            </Link>
            <Link
              href="/en/contact"
              className="hidden sm:inline-flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-white text-xs uppercase tracking-widest font-bold px-5 py-2.5 transition-colors duration-200 rounded-md dark:bg-zinc-700 dark:hover:bg-zinc-600"
            >
              Get Started
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-20 pb-9 bg-white border-b border-zinc-200/50 relative overflow-hidden dark:bg-zinc-900 dark:border-zinc-800">
          {/* Ambient Glows */}
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#F1B100]/8 via-[#F1B100]/4 to-transparent blur-[120px] rounded-full pointer-events-none" />

          <div className="relative">
          <button onClick={goPrev} aria-label="Previous" className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 bg-white/80 hover:bg-white text-zinc-400 hover:text-zinc-900 backdrop-blur-sm transition-all dark:border-zinc-700 dark:bg-zinc-800/80 dark:hover:bg-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-100">
            <ChevronLeft size={18} />
          </button>
          <button onClick={goNext} aria-label="Next" className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 bg-white/80 hover:bg-white text-zinc-400 hover:text-zinc-900 backdrop-blur-sm transition-all dark:border-zinc-700 dark:bg-zinc-800/80 dark:hover:bg-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-100">
            <ChevronRight size={18} />
          </button>

          <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-bold uppercase tracking-wider rounded-full dark:bg-zinc-800 dark:text-zinc-300">
                <Sparkles size={12} className="text-[#F1B100]" />
                OH! MY TEMPLATES
              </span>
              <div className="mt-10">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={`heading-${heroIndex}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.45, ease: EASE_OUT }}
                    className="text-[2.8rem] md:text-[4.25rem] font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100"
                  >
                    {HERO_SLIDES[heroIndex].heading}
                  </motion.h1>
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${heroIndex}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.05 }}
                  className="mt-6 text-lg md:text-xl text-zinc-500 font-normal leading-relaxed tracking-tight whitespace-pre-line max-w-2xl mx-auto dark:text-zinc-400"
                >
                  {HERO_SLIDES[heroIndex].desc}
                </motion.p>
              </AnimatePresence>
              <div className="flex justify-center gap-1.5 mt-10">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === heroIndex ? "bg-zinc-500 w-4 dark:bg-zinc-400" : "w-1.5 bg-zinc-300 dark:bg-zinc-600"}`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          </div>{/* /relative wrapper for arrows */}

          {/* Infinite Horizontal Scroll Marquee */}
          <div className="relative mt-16 w-full overflow-hidden select-none pointer-events-auto">
            {/* Left/Right Vignette Shadows */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none dark:from-zinc-900" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none dark:from-zinc-900" />
            
            <div className="flex gap-6 py-8 animate-marquee">
              {[...templates, ...templates].map((template, idx) => (
                <Link
                  href={template.url}
                  key={`${template.id}-${idx}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 w-[240px] md:w-[320px] bg-white border border-zinc-200/60 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-300 pointer-events-auto dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:shadow-zinc-900/50"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-50 dark:bg-zinc-700">
                    <img
                      src={template.image}
                      alt={template.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[0.6rem] font-bold text-zinc-400 uppercase tracking-widest dark:text-zinc-500">{template.category}</span>
                      {template.isFeatured && (
                        <span className="text-[0.55rem] font-bold text-[#F1B100] border border-[#F1B100]/30 px-1 rounded bg-[#F1B100]/5">Premium</span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{template.name}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Templates Marketplace Section */}
        <section id="templates" className="px-6 md:px-12 lg:px-20 py-12 max-w-[1440px] mx-auto space-y-12">

          {/* Search Input Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" size={18} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search templates (e.g. fashion, agency, editorial...)"
                className="w-full pl-12 pr-10 py-3.5 bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-zinc-900 outline-none text-zinc-900 placeholder:text-zinc-400 text-sm transition-all rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:focus:bg-zinc-800 dark:focus:border-zinc-500 dark:text-zinc-100 dark:placeholder:text-zinc-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-900 transition-colors dark:text-zinc-500 dark:hover:text-zinc-100"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 mt-4 text-xs">
              <span className="text-zinc-400 font-medium dark:text-zinc-500">Popular:</span>
              {POPULAR_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchTerm(tag)}
                  className="px-2.5 py-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors rounded dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-400"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 border-b border-zinc-200/60 no-scrollbar dark:border-zinc-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSearchTerm("");
                }}
                className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider relative whitespace-nowrap transition-colors ${
                  activeCategory === cat ? "text-zinc-950 font-extrabold dark:text-zinc-100" : "text-zinc-400 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-100"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategoryBorder"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F1B100]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Results Summary */}
          {(searchTerm || activeCategory !== ALL_LABEL) && (
            <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider dark:text-zinc-400">
              Found {filteredTemplates.length} templates
            </div>
          )}

          {/* Template Layout: Featured + Grid */}
          <div className="space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredTemplates.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-20 text-center space-y-4"
                >
                  <p className="text-zinc-400 font-medium dark:text-zinc-500">No templates match your search criteria.</p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setActiveCategory(ALL_LABEL);
                    }}
                    className="text-xs font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-900 pb-0.5 dark:text-zinc-100 dark:border-zinc-100"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-8">
                  {/* Featured Large Row (Only shown when not searching and category is All) */}
                  {featuredItem && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="group bg-white border border-zinc-200/60 rounded-xl overflow-hidden hover:border-zinc-300 transition-all duration-300 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-0">
                        <Link href={featuredItem.url} target="_blank" rel="noopener noreferrer" className="relative h-[280px] md:h-[420px] block overflow-hidden bg-zinc-50 dark:bg-zinc-700">
                          <img
                            src={featuredItem.image}
                            alt={featuredItem.name}
                            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                          />
                          <span className="absolute top-4 left-4 bg-zinc-900 text-white text-[0.62rem] font-bold uppercase tracking-widest px-3 py-1 rounded dark:bg-zinc-700">
                            FEATURED TEMPLATE
                          </span>
                        </Link>
                        <div className="p-8 md:p-12 flex flex-col justify-between space-y-8">
                          <div className="space-y-4">
                            <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">{featuredItem.category}</span>
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">{featuredItem.name}</h3>
                            <div>
                              <p className="text-sm text-zinc-500 leading-relaxed font-normal line-clamp-3 dark:text-zinc-400">{featuredItem.desc}</p>
                              {featuredItem.desc.length > 80 && (
                                <button
                                  onClick={() => setDescModalTemplate(featuredItem)}
                                  className="mt-2 text-xs text-zinc-400 hover:text-zinc-600 underline underline-offset-2 transition-colors dark:text-zinc-500 dark:hover:text-zinc-300"
                                >
                                  Read more
                                </button>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-6 border-t border-zinc-100 dark:border-zinc-700">
                            <div className="flex items-center gap-3">
                              <Link
                                href={featuredItem.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 border border-zinc-300 hover:border-[#F1B100] hover:text-[#D9A000] text-zinc-500 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded transition-colors outline-none focus:outline-none dark:border-zinc-600 dark:text-zinc-400"
                              >
                                Live Preview <ArrowUpRight size={13} />
                              </Link>
                              <button
                                onClick={() => goToContact('professional', featuredItem)}
                                className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-700 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded transition-colors dark:bg-zinc-700 dark:hover:bg-zinc-600"
                              >
                                Get Started
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* General Grid */}
                  <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gridItems.map((template) => (
                      <motion.div
                        key={template.id}
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="group bg-white border border-zinc-200/60 hover:border-zinc-300 transition-all duration-300 rounded-xl overflow-hidden dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600"
                      >
                        <Link href={template.url} target="_blank" rel="noopener noreferrer" className="relative h-56 block overflow-hidden bg-zinc-50 dark:bg-zinc-700">
                          <img
                            src={template.image}
                            alt={template.name}
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                          />
                        </Link>
                        <div className="p-6 space-y-4">
                          <div className="space-y-1">
                            <div className="flex justify-between items-start">
                              <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{template.name}</h4>
                              {template.isFeatured && (
                                <span className="inline-block bg-zinc-100 text-zinc-600 text-[0.62rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded dark:bg-zinc-700 dark:text-zinc-400">
                                  Premium
                                </span>
                              )}
                            </div>
                            <p className="text-[0.65rem] text-zinc-400 font-bold uppercase tracking-wider dark:text-zinc-500">{template.category}</p>
                          </div>
                          <div>
                            <p
                              className={`text-sm text-zinc-500 leading-relaxed font-normal whitespace-pre-line line-clamp-2 dark:text-zinc-400 ${
                                template.desc.length > 40 ? "cursor-pointer hover:text-zinc-700 dark:hover:text-zinc-300" : ""
                              }`}
                              onClick={() => {
                                if (template.desc.length > 40) setDescModalTemplate(template);
                              }}
                            >
                              {template.desc}
                            </p>
                            {template.desc.length > 40 && (
                              <button
                                type="button"
                                onClick={() => setDescModalTemplate(template)}
                                className="mt-1 text-xs font-bold text-zinc-400 hover:text-zinc-600 transition-colors dark:text-zinc-500 dark:hover:text-zinc-300"
                              >
                                Read more
                              </button>
                            )}
                          </div>
                          <div className="flex justify-between items-center pt-4 border-t border-zinc-100 dark:border-zinc-700">
                            <Link
                              href={template.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-600 transition-colors outline-none focus:outline-none dark:text-zinc-500 dark:hover:text-zinc-400"
                            >
                              Live Preview <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                            <button
                              onClick={() => goToContact('professional', template)}
                              className="inline-flex items-center gap-1.5 border border-zinc-300 hover:border-[#F1B100] hover:text-[#D9A000] text-zinc-500 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded transition-colors dark:border-zinc-600 dark:text-zinc-400"
                            >
                              Get Started
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Section 6: Process */}
        <section id="process" className="px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-white border-t border-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4 text-center">
              <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-[#F1B100]">Methodology</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Our 5-Step Process</h2>
              <p className="text-base text-zinc-500 max-w-xl mx-auto leading-relaxed font-normal dark:text-zinc-400">We take care of all technical setup, customization, and layout alignments.</p>
            </div>

            <div className="space-y-4">
              {[
                { step: "01", title: 'Choose Your Template', desc: 'Select from 13 premium templates based on your target market and aesthetic direction.', duration: 'Day 1' },
                { step: "02", title: 'Strategic Consultation', desc: 'Align on brand color schemes, typography, layout changes, and domain mappings.', duration: 'Day 2' },
                { step: "03", title: 'Component Customization', desc: 'Our developers rebuild component texts, localize assets, and tweak layout codes.', duration: 'Week 1' },
                { step: "04", title: 'Refinement & QA', desc: 'Execute E2E alignment audits and review feedback cycles for pixel-perfection.', duration: 'Week 2' },
                { step: "05", title: 'Deployment', desc: 'Launch on cloud hosting networks and wire domain DNS records.', duration: 'Day 14' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start bg-[#FCFCFD] border border-zinc-200/60 p-6 md:p-8 rounded-xl hover:border-zinc-300 transition-colors duration-200 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600">
                  <span className="text-xl font-bold text-zinc-400 font-mono dark:text-zinc-500">{item.step}</span>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed font-normal dark:text-zinc-400">{item.desc}</p>
                  </div>
                  <span className="text-[0.65rem] font-bold text-zinc-400 uppercase tracking-widest bg-white border border-zinc-200/60 px-2.5 py-1 rounded dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-500">{item.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Pricing */}
        <section id="pricing" className="px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-[#FCFCFD] border-t border-zinc-200/50 dark:bg-zinc-950 dark:border-zinc-800">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="space-y-4 text-center">
              <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-[#F1B100]">Pricing Packages</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Simple, Transparent Pricing</h2>
              <p className="text-base text-zinc-500 max-w-xl mx-auto leading-relaxed font-normal dark:text-zinc-400">Choose the best package for your business scale. No hidden fees.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`bg-white rounded-xl p-8 border flex flex-col justify-between transition-all duration-300 dark:bg-zinc-800 dark:border-zinc-700 ${
                    pkg.is_recommended
                      ? 'border-[#F1B100] border-2 shadow-lg relative'
                      : 'border-zinc-200/60 hover:border-zinc-300 dark:hover:border-zinc-600'
                  }`}
                >
                  {pkg.is_recommended && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F1B100] text-zinc-900 text-[0.62rem] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      RECOMMENDED
                    </span>
                  )}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{pkg.name}</h3>
                      <p className="text-sm text-zinc-400 mt-1 dark:text-zinc-500">{pkg.description}</p>
                    </div>
                    <div>
                      <span className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">{pkg.price}</span>
                      <span className="text-xs text-zinc-400 font-medium block mt-1 dark:text-zinc-500">Delivery: {pkg.duration}</span>
                    </div>
                    <ul className="space-y-3.5 pt-6 border-t border-zinc-100 dark:border-zinc-700">
                      {pkg.features.map((feature, fidx) => (
                        <li key={fidx} className="flex gap-2.5 items-start text-sm text-zinc-600 dark:text-zinc-400">
                          <span className="text-[#F1B100] font-bold flex-shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => goToContact(pkg.slug)}
                    className={`w-full mt-8 py-3 text-xs uppercase tracking-widest font-bold transition-all duration-150 rounded-md ${
                      pkg.is_recommended
                        ? 'bg-[#F1B100] hover:bg-[#D9A000] text-zinc-900'
                        : 'bg-zinc-900 hover:bg-zinc-800 text-white'
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section id="faq" className="px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-white border-t border-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800">
          <div className="max-w-3xl mx-auto space-y-16">
            <div className="space-y-4 text-center">
              <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-[#F1B100]">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={faq.id}
                  className="border border-zinc-200/60 rounded-xl overflow-hidden bg-[#FCFCFD] hover:border-zinc-300 transition-all duration-300 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-zinc-50 transition-colors duration-300 dark:hover:bg-zinc-700"
                  >
                    <span className="font-bold text-left text-sm text-zinc-800 dark:text-zinc-200">{faq.question}</span>
                    <ChevronDown
                      size={16}
                      className={`flex-shrink-0 text-zinc-400 transition-transform duration-300 dark:text-zinc-500 ${
                        openFAQ === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFAQ === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: EASE_OUT }}
                        className="overflow-hidden border-t border-zinc-200/60 bg-white dark:border-zinc-700 dark:bg-zinc-800"
                      >
                        <div className="px-6 py-5 text-sm text-zinc-500 leading-relaxed font-normal whitespace-pre-line dark:text-zinc-400">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-12 py-12 border-t border-zinc-200/60 bg-[#FCFCFD] dark:border-zinc-800 dark:bg-zinc-950">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <Link href="/en" className="flex items-center gap-3 h-6">
              <Logo className="h-6 w-auto block" />
            </Link>
            <div className="flex gap-8 text-xs font-bold text-zinc-400 uppercase tracking-widest dark:text-zinc-500">
              <Link href="/ko" className="hover:text-zinc-950 transition-colors dark:hover:text-zinc-100">Korean</Link>
              <a href="mailto:vinus@vinus.co.kr" className="hover:text-zinc-950 transition-colors dark:hover:text-zinc-100">Contact</a>
              {isAdmin && (
                <Link href="/admin/templates" className="hover:text-zinc-950 transition-colors dark:hover:text-zinc-100">Admin</Link>
              )}
            </div>
          </div>
          <div className="max-w-6xl mx-auto text-[0.62rem] font-bold text-zinc-400 uppercase tracking-widest mt-8 border-t border-zinc-100 pt-6 dark:text-zinc-500 dark:border-zinc-800">
            &copy; 2026 Oh My Template. All rights reserved.
          </div>
        </footer>

        {/* Template Description Modal */}
        <AnimatePresence>
          {descModalTemplate && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setDescModalTemplate(null)}
              />
              <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none">
                <motion.div
                  className="pointer-events-auto bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-700 rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl"
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-[0.65rem] text-zinc-400 font-bold uppercase tracking-wider dark:text-zinc-500">{descModalTemplate.category}</span>
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{descModalTemplate.name}</h3>
                      </div>
                      <button
                        type="button"
                        onClick={() => setDescModalTemplate(null)}
                        className="text-zinc-400 hover:text-zinc-900 transition-colors dark:text-zinc-500 dark:hover:text-zinc-100"
                        aria-label="Close"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed font-normal whitespace-pre-line dark:text-zinc-400">
                      {descModalTemplate.desc}
                    </p>
                    <Link
                      href={descModalTemplate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 hover:text-zinc-600 transition-colors dark:text-zinc-100 dark:hover:text-zinc-400"
                    >
                      Live Preview <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </main>
  );
}
