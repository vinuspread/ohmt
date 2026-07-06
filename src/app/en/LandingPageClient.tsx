"use client";

import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight, X, Search, Sparkles, Wrench, ImageOff, Shuffle, ClipboardList, PackageOpen } from "lucide-react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/Logo";
import type { PricingPackage } from "@/types/template";

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
  applicableIndustries: string[];
  hashtags: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const ALL_LABEL = "All";
const POPULAR_TAGS = ["Fashion", "Portfolio", "Agency", "Luxury", "Minimalist"];

const serviceCardsEn = [
  { icon: Wrench, title: "DIY loses polish fast", desc: "Tools may feel simple, but structure, imagery, and copy quickly expose the limits of a self-made site." },
  { icon: ImageOff, title: "Content becomes the blocker", desc: "A good layout still needs real words and images before it can become a launchable website." },
  { icon: Shuffle, title: "The right flow is hard to judge", desc: "Without a clear first screen, section order, and inquiry path, the whole build keeps shifting." },
  { icon: ClipboardList, title: "Outsourcing gets heavy early", desc: "Quotes, timelines, and feedback loops can turn even a small site into a large project." },
  { icon: PackageOpen, title: "Launch is not the end", desc: "A site still needs edits, updates, and maintenance after purchase or production." },
];

const modelStepsEn = [
  { step: "01", title: "Choose a direction", desc: "Pick the template direction that fits your industry and brand tone first." },
  { step: "02", title: "Expert production", desc: "Designers and developers adjust color, copy, imagery, and structure to fit your real brand." },
  { step: "03", title: "Launch and operate", desc: "After deployment, a Care plan carries you through edits, updates, and ongoing support." },
];

const directionsEn = [
  { badge: "Recommended", title: "Brand Launch", desc: "Get a new brand's first official site live, fast.", category: "Brand & Creative" },
  { badge: "Recommended", title: "Clinic / Hospital", desc: "Build a medical or professional-services site where trust comes first.", category: "Food & Hospitality" },
  { badge: "Recommended", title: "Studio / Portfolio", desc: "Choose a portfolio structure where the work is the main character.", category: "Brand & Creative" },
  { badge: "By Industry", title: "F&B / Storefront", desc: "Start with a structure centered on menu, storefront, and reservation flow.", category: "Food & Hospitality" },
  { badge: "By Industry", title: "B2B Service", desc: "Set up a structure where trust signals and inquiries are clearly visible.", category: "Business & Tech" },
  { badge: "By Industry", title: "Event / Promotion", desc: "A campaign-style flow built for short bursts of impact.", category: "Retail & Commerce" },
];

const carePlansEn = [
  { title: "Basic Care", price: "$150/mo (excl. VAT)", desc: "Covers error response and small fixes to keep operations stable." },
  { title: "Growth Care", price: "$300/mo (excl. VAT)", desc: "Includes content updates, page additions, and campaign rollout." },
  { title: "Managed Care", price: "Custom quote", desc: "For teams that need full operational handling, SLAs, and always-on support." },
];

function SectionHeadingEn({ label, title, desc }: { label?: string; title: React.ReactNode; desc?: string }) {
  return (
    <div className="ohmt-section-heading">
      {label && <span className="ohmt-section-label">{label}</span>}
      <h2 className="ohmt-section-title">{title}</h2>
      {desc && <p className="ohmt-section-desc text-pretty">{desc}</p>}
    </div>
  );
}

export default function LandingPageClient({ templates, faqs, packages }: { templates: TemplateItem[]; faqs: FaqItem[]; packages: PricingPackage[] }) {
  const router = useRouter();
  const [heroIndex, setHeroIndex] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL_LABEL);
  const [showAllTemplates, setShowAllTemplates] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [descModalTemplate, setDescModalTemplate] = useState<TemplateItem | null>(null);
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
        description: "Premium Next.js web templates for brands, agencies, and creators. Fully customized by our team in 2 weeks.",
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
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
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

  useEffect(() => {
    setShowAllTemplates(false);
  }, [filteredTemplates]);

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

  const scrollToTemplates = (category?: string) => {
    if (category) setActiveCategory(category);
    document.getElementById("templates")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-[#FCFCFD] text-zinc-900 font-sans selection:bg-[#F1B100] selection:text-zinc-900 overflow-x-hidden antialiased dark:bg-zinc-950 dark:text-zinc-100 pt-[64px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteOrganizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <header className={`bg-white border-b border-zinc-200/60 px-5 sm:px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-40 transition-transform duration-300 dark:bg-zinc-900 dark:border-zinc-800 ${headerVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex items-center gap-8">
          <Link href="/en" className="flex items-center gap-3 h-6">
            <Logo className="h-6 w-auto block" />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-[0.82rem] font-bold text-zinc-500 uppercase tracking-wider dark:text-zinc-400">
            <a href="#directions" className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">Direction</a>
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
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#F1B100]/8 via-[#F1B100]/4 to-transparent blur-[120px] rounded-full pointer-events-none" />

        <div className="relative">
          <button onClick={goPrev} aria-label="Previous" className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 bg-white/80 hover:bg-white text-zinc-400 hover:text-zinc-900 backdrop-blur-sm transition-all dark:border-zinc-700 dark:bg-zinc-800/80 dark:hover:bg-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-100">
            <ChevronLeft size={18} />
          </button>
          <button onClick={goNext} aria-label="Next" className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 bg-white/80 hover:bg-white text-zinc-400 hover:text-zinc-900 backdrop-blur-sm transition-all dark:border-zinc-700 dark:bg-zinc-800/80 dark:hover:bg-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-100">
            <ChevronRight size={18} />
          </button>

          <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
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

        {/* Marquee */}
        <div className="relative mt-10 sm:mt-16 w-full overflow-hidden select-none pointer-events-auto">
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none dark:from-zinc-900" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none dark:from-zinc-900" />
          <div className="flex gap-4 sm:gap-6 py-6 sm:py-8 animate-marquee">
            {[...templates, ...templates].map((template, idx) => (
              <Link
                href={template.url}
                key={`${template.id}-${idx}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-shrink-0 w-[240px] md:w-[320px] bg-white border border-zinc-200/60 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-300 pointer-events-auto dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:shadow-zinc-900/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-50 dark:bg-zinc-700">
                  <img src={template.image} alt={template.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out" />
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[0.6rem] font-bold text-zinc-400 uppercase tracking-widest dark:text-zinc-500">{template.category}</span>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{template.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-28 bg-[#FCFCFD] border-b border-zinc-200/50 dark:bg-zinc-950 dark:border-zinc-800">
        <div className="max-w-[1440px] mx-auto space-y-9 md:space-y-12">
          <SectionHeadingEn
            title={<>When you need a website,<br />this is where work gets stuck.</>}
            desc="DIY takes too long. Outsourcing can feel too big. OHMT gives you a clear production standard in between."
          />
          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-6">
            {serviceCardsEn.map((item, idx) => (
              <div key={item.title} className={`flex gap-4 bg-white border border-zinc-200/60 rounded-xl p-5 hover:border-zinc-300 transition-colors sm:block sm:p-6 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600 ${idx < 3 ? "md:col-span-2" : "md:col-span-3"}`}>
                <item.icon size={28} strokeWidth={1.7} className="mt-0.5 shrink-0 text-zinc-900 sm:mt-0 dark:text-zinc-100" />
                <div className="min-w-0">
                  <h3 className="text-[15px] font-bold text-zinc-900 sm:mt-4 sm:text-[17px] dark:text-zinc-100">{item.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-6 text-zinc-500 sm:mt-2 sm:text-sm sm:leading-relaxed dark:text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-4 rounded-xl border border-zinc-200/70 bg-white p-5 md:grid-cols-[220px_1fr] md:items-center md:p-6 dark:border-zinc-700 dark:bg-zinc-800">
            <p className="text-sm font-extrabold text-zinc-950 dark:text-zinc-100">How OHMT solves it</p>
            <div className="grid gap-3 text-sm text-zinc-600 md:grid-cols-3 md:divide-x md:divide-zinc-200 dark:text-zinc-300 dark:md:divide-zinc-700">
              {["We define the production scope first.", "We fit copy and imagery to the real brand.", "We leave clear rules for edits and operation."].map((text, idx) => (
                <div key={text} className="flex items-start gap-3 md:px-5 first:md:pl-0 last:md:pr-0">
                  <span className="font-mono text-xs font-bold text-[#F1B100]">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="leading-6">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Model Section */}
      <section className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-28 bg-white border-b border-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="max-w-[1440px] mx-auto space-y-9 md:space-y-12">
          <SectionHeadingEn
            title={<>OHMT doesn't sell templates.<br />It builds from them.</>}
            desc="Start from a proven direction, not a blank screen. We finish it around your real brand."
          />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-0 md:divide-x md:divide-zinc-200 dark:md:divide-zinc-700">
            {modelStepsEn.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center gap-3 rounded-xl border border-zinc-200/60 bg-white p-4 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:px-8 first:md:pl-0 last:md:pr-0 dark:border-zinc-700 dark:bg-zinc-800 dark:md:bg-transparent">
                <span className="inline-flex w-9 h-9 shrink-0 rounded-full bg-zinc-900 dark:bg-zinc-100 items-center justify-center text-xs font-extrabold font-mono text-white dark:text-zinc-950 md:w-11 md:h-11 md:text-sm">{item.step}</span>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-bold text-zinc-900 md:mt-5 md:text-lg dark:text-zinc-100">{item.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-6 text-zinc-500 md:mt-3 md:text-sm md:leading-relaxed dark:text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-zinc-950 px-6 py-7 text-center text-white md:px-8 dark:bg-black">
            <p className="mx-auto text-[15px] font-bold tracking-tight sm:text-lg md:text-xl">Affordable entry pricing, expert customization, and ongoing support, all in a single flow.</p>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section id="directions" className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-28 bg-[#FCFCFD] border-b border-zinc-200/50 dark:bg-zinc-950 dark:border-zinc-800">
        <div className="max-w-[1440px] mx-auto space-y-9 md:space-y-12">
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <SectionHeadingEn
              label="Direction"
              title={<>A template isn't the product.<br />It's how you choose a direction.</>}
              desc="Choose the direction that fits your industry, then jump to that gallery category."
            />
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/en/contact" className="inline-flex items-center justify-center rounded-md bg-[#222222] px-6 py-3.5 text-xs font-extrabold uppercase tracking-widest text-[#F1B100] transition-colors hover:bg-[#2B2B2B] hover:text-[#F1B100]">
                Get Started
              </Link>
              <button onClick={() => scrollToTemplates(ALL_LABEL)} className="bg-white border border-zinc-200/70 hover:border-zinc-400 text-zinc-800 text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-md transition-colors dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100">
                Browse All Templates
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {directionsEn.map((item) => (
              <button
                key={item.title}
                onClick={() => scrollToTemplates(item.category)}
                className="group text-left bg-white border border-zinc-200/60 rounded-xl p-4 sm:p-5 md:p-7 hover:border-zinc-400 transition-colors dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-500"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[0.62rem] font-bold uppercase tracking-widest text-[#F1B100]">{item.badge}</span>
                  <span className="text-[0.62rem] font-bold text-zinc-400">{item.category}</span>
                </div>
                <h3 className="mt-2 text-base sm:text-lg md:text-xl font-bold text-zinc-900 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">{item.title}</h3>
                <p className="mt-2 text-[13px] sm:text-sm leading-6 sm:leading-relaxed text-zinc-500 dark:text-zinc-400">{item.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="px-5 sm:px-6 md:px-12 lg:px-20 py-10 md:py-12 bg-[#F7F7F8] dark:bg-zinc-950">
        <div className="max-w-[1440px] mx-auto space-y-8 md:space-y-12">
          <div className="max-w-[760px] mx-auto space-y-3 text-center">
            <span className="ohmt-section-label">Templates Gallery</span>
            <h2 className="ohmt-section-title">Not a finished product.<br />Built to match your brand.</h2>
            <p className="mx-auto max-w-[62ch] text-sm sm:text-lg leading-relaxed text-zinc-500 text-pretty dark:text-zinc-400">The templates below are proven starting points, built to help you move fast.</p>
          </div>

          {/* Search */}
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" size={18} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search templates (e.g. fashion, agency, editorial...)"
                className="w-full rounded-lg border border-zinc-200 bg-white py-3.5 pl-12 pr-10 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100">
                  <X size={16} />
                </button>
              )}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="font-medium text-zinc-400 dark:text-zinc-500">Popular:</span>
              {POPULAR_TAGS.map((tag) => (
                <button key={tag} onClick={() => setSearchTerm(tag)} className="rounded bg-white px-2.5 py-1 text-zinc-600 transition-colors hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700">
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="md:hidden">
            <label className="mb-2 block text-[0.62rem] font-extrabold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Category</label>
            <select
              value={activeCategory}
              onChange={(e) => { setActiveCategory(e.target.value); setSearchTerm(""); }}
              className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-bold text-zinc-900 outline-none transition-colors focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-500"
            >
              {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div className="hidden md:flex justify-center gap-2 border-b border-zinc-200/60 pb-2 dark:border-zinc-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setSearchTerm(""); }}
                className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider relative whitespace-nowrap transition-colors ${activeCategory === cat ? "text-zinc-950 font-extrabold dark:text-zinc-100" : "text-zinc-400 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-100"}`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div layoutId="activeCategoryBorderEn" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F1B100]" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
              </button>
            ))}
          </div>

          {(searchTerm || activeCategory !== ALL_LABEL) && (
            <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider dark:text-zinc-400">
              Found {filteredTemplates.length} templates
            </div>
          )}

          {/* Grid */}
          <div className="space-y-6 md:space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredTemplates.length === 0 ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-20 text-center space-y-4">
                  <p className="text-zinc-400 font-medium dark:text-zinc-500">No templates match your search.</p>
                  <button onClick={() => { setSearchTerm(""); setActiveCategory(ALL_LABEL); }} className="text-xs font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-900 pb-0.5 dark:text-zinc-100 dark:border-zinc-100">
                    Reset Filters
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-6 md:space-y-8">
                  <motion.div layout className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-6">
                    {(showAllTemplates ? filteredTemplates : filteredTemplates.slice(0, 8)).map((template) => (
                      <motion.div
                        key={template.id}
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="group bg-white border border-zinc-200/60 hover:border-zinc-300 transition-all duration-300 rounded-xl overflow-hidden dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600"
                      >
                        <Link href={template.url} target="_blank" rel="noopener noreferrer" className="relative aspect-[16/8] sm:aspect-[16/9] lg:aspect-[16/10] block overflow-hidden bg-zinc-50 dark:bg-zinc-700">
                          <img src={template.image} alt={template.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" />
                        </Link>
                        <div className="p-4 sm:p-5 lg:p-6 space-y-3 lg:space-y-4">
                          <div className="space-y-1">
                            <div className="flex justify-between items-start">
                              <div className="min-w-0">
                                <h4 className="truncate text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100">{template.name}</h4>
                              </div>
                              <span className="hidden sm:inline-block bg-zinc-100 text-zinc-600 text-[0.62rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded dark:bg-zinc-700 dark:text-zinc-400 ml-2 flex-shrink-0">
                                Premium
                              </span>
                            </div>
                            <p className="text-[0.65rem] text-zinc-400 font-bold tracking-wider dark:text-zinc-500">{template.category}</p>
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal dark:text-zinc-400 line-clamp-2">{template.desc}</p>
                          <div className="flex items-center justify-between gap-2 pt-2 sm:pt-4 border-t border-zinc-100 dark:border-zinc-700">
                            <Link
                              href={template.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 whitespace-nowrap text-zinc-500 hover:text-zinc-900 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-colors dark:text-zinc-400 dark:hover:text-zinc-100"
                            >
                              Live Preview <ArrowUpRight size={11} />
                            </Link>
                            <button
                              onClick={() => goToContact('professional', template)}
                              className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap bg-zinc-900 hover:bg-zinc-700 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1.5 rounded transition-colors dark:bg-zinc-700 dark:hover:bg-zinc-600"
                            >
                              Get Started
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                  {!showAllTemplates && filteredTemplates.length > 8 && (
                    <button onClick={() => setShowAllTemplates(true)} className="ohmt-show-more-btn">
                      Show More Templates
                    </button>
                  )}
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-32 bg-[#FCFCFD] border-t border-zinc-200/50 dark:bg-zinc-950 dark:border-zinc-800">
        <div className="max-w-[1440px] mx-auto space-y-10 md:space-y-16">
          <div className="mx-auto max-w-[840px] space-y-4 text-center">
            <span className="ohmt-section-label">Price Package</span>
            <h2 className="ohmt-section-title mx-auto max-w-[820px]">Faster than outsourcing,<br />more polished than DIY.</h2>
            <p className="ohmt-section-desc max-w-[72ch] text-pretty">Quotes are confirmed after consultation. Use these prices to gauge production depth and support scope.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-xl p-6 border flex flex-col justify-between transition-all duration-300 dark:bg-zinc-800 dark:border-zinc-700 ${
                  pkg.is_recommended ? 'border-[#F1B100]/50 dark:border-[#F1B100]/40' : 'border-zinc-200/60 hover:border-zinc-300 dark:hover:border-zinc-600'
                }`}
              >
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{pkg.name}</h3>
                    <p className="text-sm text-zinc-400 dark:text-zinc-500">{pkg.description}</p>
                  </div>
                  <div className="border-t border-zinc-100 dark:border-zinc-700 pt-6">
                    <span className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">{pkg.price}</span>
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
                    pkg.is_recommended ? 'bg-[#F1B100] hover:bg-[#D9A000] text-zinc-900' : 'bg-zinc-900 hover:bg-zinc-800 text-white'
                  }`}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
          <p className="ohmt-note-line">
            Pricing note: page count, customization scope, feature integrations, and operational cadence affect the final quote. We narrow the scope during consultation before confirming your quote.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-32 bg-white border-t border-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="max-w-[1440px] mx-auto space-y-10 md:space-y-16">
          <div className="mx-auto max-w-[840px] space-y-4 text-center">
            <span className="ohmt-section-label">Process</span>
            <h2 className="ohmt-section-title mx-auto max-w-[820px]">Five steps,<br />from consultation to operation</h2>
            <p className="ohmt-section-desc max-w-[68ch] text-pretty">Template choice is only the start. Direction, production, and post-launch support stay in one flow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 md:gap-2">
            {[
              { step: "01", title: 'Consultation', desc: 'We confirm industry, purpose, budget, and target launch date, then narrow the production scope.' },
              { step: "02", title: 'Choose Direction', desc: 'Pick a template direction matching your brand tone and goals, and define the sections you need.' },
              { step: "03", title: 'Production', desc: 'Copy, imagery, color, and structure are adjusted to fit your real brand.' },
              { step: "04", title: 'Launch', desc: 'We verify responsive layout, links, meta tags, basic SEO, and inquiry flow, then deploy.' },
              { step: "05", title: 'Operate', desc: 'A Care plan carries you through edits, content updates, and feature improvements.' }
            ].map((item, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="flex items-start gap-4 bg-[#FCFCFD] border border-zinc-200/60 p-4 sm:p-6 rounded-xl text-left sm:gap-6 hover:border-zinc-300 transition-colors duration-200 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600 md:flex-col md:items-center md:gap-3 md:text-center">
                  <span className="w-9 shrink-0 text-lg font-bold leading-none text-zinc-400 font-mono dark:text-zinc-500 sm:w-auto sm:text-xl">{item.step}</span>
                  <div className="flex-1 space-y-1 md:flex-none">
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed font-normal dark:text-zinc-400">{item.desc}</p>
                  </div>
                </div>
                {idx < arr.length - 1 && (
                  <div className="hidden md:flex items-center justify-center text-zinc-300 dark:text-zinc-600">
                    <ChevronRight size={20} strokeWidth={2.5} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Care Section */}
      <section id="care" className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-32 bg-[#FCFCFD] border-t border-zinc-200/50 dark:bg-zinc-950 dark:border-zinc-800">
        <div className="max-w-[1440px] mx-auto space-y-9 md:space-y-12">
          <SectionHeadingEn
            label="Maintenance"
            title={<>Launch isn't the finish line.<br />Real operation starts after that.</>}
            desc="Launch day is not the end. We continue with fixes, content updates, and operational support as needed."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:items-center">
            {carePlansEn.map((plan, idx) => (
              <div
                key={plan.title}
                className={idx === 1
                  ? "bg-zinc-950 text-white rounded-xl p-6 sm:p-7 md:p-8 shadow-xl dark:bg-black"
                  : "bg-white border border-zinc-200/60 rounded-xl p-5 sm:p-6 md:p-7 hover:border-zinc-300 transition-colors dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600"
                }
              >
                <div className="flex flex-col gap-2">
                  <h3 className={idx === 1 ? "text-lg font-bold text-white" : "text-lg font-bold text-zinc-900 dark:text-zinc-100"}>{plan.title}</h3>
                  <p className="text-lg font-extrabold leading-none text-[#F1B100] md:text-xl">{plan.price}</p>
                </div>
                <p className={idx === 1 ? "mt-4 text-sm leading-relaxed text-zinc-300" : "mt-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400"}>{plan.desc}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-zinc-400 sm:text-sm dark:text-zinc-500">New features are judged by operating frequency, not technical difficulty.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="ohmt-final-cta">
        <div className="ohmt-final-cta-inner">
          <div className="space-y-3">
            <h2 className="ohmt-final-cta-title">Start fast with a site built for your brand</h2>
            <p className="ohmt-final-cta-desc">Choose an industry direction and a candidate template, and the consultation can start.</p>
            <Link href="/en/contact" className="ohmt-text-cta">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-32 bg-white border-t border-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="max-w-[1440px] mx-auto space-y-10 md:space-y-16">
          <div className="mx-auto max-w-[840px] space-y-4 text-center">
            <span className="ohmt-section-label">FAQ</span>
            <h2 className="text-[1.375rem] sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-100">Frequently Asked Questions</h2>
            <p className="ohmt-section-desc max-w-[68ch] text-pretty">Common pre-project questions are collected here. We can answer the rest during consultation.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={faq.id} className="border border-zinc-200/60 rounded-xl overflow-hidden bg-[#FCFCFD] hover:border-zinc-300 transition-all duration-300 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600">
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-zinc-50 transition-colors duration-300 dark:hover:bg-zinc-700"
                >
                  <span className="font-bold text-left text-[15px] md:text-base text-zinc-800 dark:text-zinc-200">{faq.question}</span>
                  <ChevronDown size={16} className={`flex-shrink-0 text-zinc-400 transition-transform duration-300 dark:text-zinc-500 ${openFAQ === idx ? 'rotate-180' : ''}`} />
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
      <footer className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 border-t border-zinc-200/60 bg-[#FCFCFD] dark:border-zinc-800 dark:bg-zinc-950">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <Link href="/en" className="flex items-center gap-3 h-6">
            <Logo className="h-6 w-auto block" />
          </Link>
          <div className="flex gap-8 text-xs font-bold text-zinc-400 uppercase tracking-widest dark:text-zinc-500">
            <Link href="/ko" className="hover:text-zinc-950 transition-colors dark:hover:text-zinc-100">Korean</Link>
            <Link href="/en/contact" className="hover:text-zinc-950 transition-colors dark:hover:text-zinc-100">Contact</Link>
            {isAdmin && (
              <Link href="/admin/templates" className="hover:text-zinc-950 transition-colors dark:hover:text-zinc-100">Admin</Link>
            )}
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto text-center md:text-left text-[0.62rem] font-bold text-zinc-400 uppercase tracking-widest mt-8 border-t border-zinc-100 pt-6 dark:text-zinc-500 dark:border-zinc-800">
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
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{descModalTemplate.name}</h3>
                    </div>
                    <button type="button" onClick={() => setDescModalTemplate(null)} className="text-zinc-400 hover:text-zinc-900 transition-colors dark:text-zinc-500 dark:hover:text-zinc-100" aria-label="Close">
                      <X size={20} />
                    </button>
                  </div>
                  {descModalTemplate.applicableIndustries.length > 0 && (
                    <div className="space-y-1">
                      <p className="text-[0.65rem] text-zinc-400 font-bold uppercase tracking-wider dark:text-zinc-500">Applicable Industries</p>
                      <p className="text-base font-medium" style={{ color: "#F1B100" }}>
                        {descModalTemplate.applicableIndustries.join(", ")}
                      </p>
                    </div>
                  )}
                  <p className="text-base text-zinc-900 leading-relaxed font-normal whitespace-pre-line dark:text-white">{descModalTemplate.desc}</p>
                  {descModalTemplate.hashtags.length > 0 && (
                    <p className="text-sm text-zinc-400 dark:text-zinc-500">{descModalTemplate.hashtags.join(" ")}</p>
                  )}
                  <Link href={descModalTemplate.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 hover:text-zinc-600 transition-colors dark:text-zinc-100 dark:hover:text-zinc-400">
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
