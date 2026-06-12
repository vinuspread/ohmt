// src/app/en/page.tsx
"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, X, Search, Sparkles } from "lucide-react";
import { Logo } from "@/components/Logo";

interface TemplateItem {
  id: string;
  name: string;
  url: string;
  desc: string;
  category: string;
  image: string;
  isFeatured?: boolean;
}

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const EASE_IOS = [0.32, 0.72, 0, 1] as const;

const enTemplates: TemplateItem[] = [
  { id: 'technology', name: 'Technology', url: '/en/templates/technology', desc: 'Futuristic AI & modular robotics systems catalog.', category: 'Productivity & Docs', image: '/templates/technology/hero-bg.jpg', isFeatured: true },
  { id: 'fashion', name: 'Fashion', url: '/en/templates/fashion', desc: 'Minimalist luxury boutique & runway catalog.', category: 'Fashion & Lifestyle', image: '/templates/fashion/hero-custom.jpg' },
  { id: 'jewelry', name: 'Jewelry', url: '/en/templates/jewelry', desc: 'High-end jewelry & bespoke gem exhibition.', category: 'Luxury & Retail', image: '/templates/jewelry/thumbnail.png' },
  { id: 'exhibition', name: 'Exhibition', url: '/en/templates/exhibition', desc: 'Museum digital portal & archival gallery.', category: 'Culture & Arts', image: '/templates/exhibition/hero-bg.png' },
  { id: 'furniture', name: 'Furniture', url: '/en/templates/furniture', desc: 'Modern interior design & organic spaces.', category: 'Interior & Decor', image: '/templates/furniture/lifestyle-narrative.png' },
  { id: 'sneaker', name: 'Sneakers', url: '/en/templates/sneaker', desc: 'Urban street-style sneaker releases.', category: 'Sport & Streetwear', image: '/templates/sneaker/hero-main.jpg' },
  { id: 'studio', name: 'Studio', url: '/en/templates/studio', desc: 'Creative architecture & design agency portfolio.', category: 'Agency & Portfolio', image: '/templates/studio/hero-1.jpg' },
  { id: 'portfolio', name: 'Portfolio', url: '/en/templates/portfolio', desc: 'Personal branding & professional journal.', category: 'Personal & Creative', image: '/templates/portfolio/portfolio-hero.png' },
  { id: 'airline', name: 'Airline', url: '/en/templates/airline', desc: 'Premium aviation experience & premium travels.', category: 'Travel & Transport', image: '/templates/airline/destination-3.jpg' },
  { id: 'car', name: 'Car Concept', url: '/en/templates/car', desc: 'Futuristic luxury automotive showcase.', category: 'Automotive', image: '/templates/car/hero-1.jpg' },
  { id: 'cosmetic', name: 'Cosmetic', url: '/en/templates/cosmetic', desc: 'Advanced skincare & pure organic beauty.', category: 'Beauty & Wellness', image: '/templates/cosmetic/cosmetic-hero-luxury.jpg' },
  { id: 'ir', name: 'Investor Relations', url: '/en/templates/ir', desc: 'Corporate strategy & financial performance.', category: 'Finance & Corporate', image: '/templates/ir/ir-2.jpg' },
  { id: 'magazine', name: 'Magazine', url: '/en/templates/magazine', desc: 'Editorial culture, lifestyle & curated arts.', category: 'Media & Editorial', image: '/templates/magazine/mag-hero.jpg' },
  { id: 'newspaper', name: 'Newspaper', url: '/en/templates/newspaper', desc: 'Classic archival layout & current affairs.', category: 'News & Publishing', image: '/templates/newspaper/news-1.jpg' },
  { id: 'docs', name: 'Docs', url: '/en/templates/docs', desc: 'Notion-style collaborative documentation workspace for teams.', category: 'Productivity & Docs', image: '/templates/docs/thumbnail.png' },
  { id: 'dashboard', name: 'Dashboard', url: '/en/templates/dashboard', desc: 'Analytics & business intelligence dashboard with charts and KPIs.', category: 'Productivity & Docs', image: '/templates/dashboard/thumbnail.png' },
  { id: 'multi-shop', name: 'Multi Shop', url: '/en/templates/multi-shop', desc: 'Modern multi-category fashion retail store with full shop experience.', category: 'Fashion & Lifestyle', image: '/templates/multi-shop/hero-model.jpeg' },
];

const CATEGORIES = [
  "All",
  "Fashion & Lifestyle",
  "Luxury & Retail",
  "Culture & Arts",
  "Agency & Portfolio",
  "Media & Editorial",
  "Finance & Corporate",
  "Productivity & Docs"
];

const POPULAR_TAGS = ["Fashion", "Portfolio", "Agency", "Luxury", "Minimalist"];

export default function LandingPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  const packages = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$4,200',
      description: 'Essential package to get started fast',
      features: [
        '1 template selection',
        '5 pages included',
        'Basic brand customization',
        '6 months tech support',
        'Responsive mobile layout',
        '2 revision rounds'
      ],
      duration: '2 weeks'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$6,200',
      description: 'Tailored premium design package',
      features: [
        '1 template selection',
        '8 pages included',
        'Advanced visual customization',
        '1 year hosting & domain',
        '3 revision rounds',
        '1 year dedicated support',
        'Basic SEO setup'
      ],
      duration: '3 weeks',
      recommended: true
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$9,200',
      description: 'Fully bespoke customization package',
      features: [
        'Unlimited custom features',
        'Unlimited pages',
        'Custom layout & structure',
        '2 years hosting & domain',
        'Unlimited revisions',
        '2 years priority support',
        'Advanced SEO & Analytics'
      ],
      duration: '4 weeks'
    }
  ];

  const faqs = [
    {
      q: 'What if I need additional revisions?',
      a: 'Starter includes 2, Professional includes 3, and Premium includes unlimited revisions. Additional revisions beyond these can be scheduled as an extra service.'
    },
    {
      q: 'Do you manage domain and hosting?',
      a: 'Yes, we manage domain setup and cloud hosting setup during your package period. We send renewal notifications before expiration.'
    },
    {
      q: 'What level of SEO support is included?',
      a: 'Basic SEO (optimized meta tags, semantic HTML hierarchy, and Google Search Console registration) is included in all packages.'
    },
    {
      q: 'Will my site look similar to others using the same template?',
      a: 'No. Every template is uniquely customized with your specific typography, color palette, custom imagery, and content hierarchy. Each resulting site feels entirely bespoke.'
    },
    {
      q: 'What happens if something breaks after launch?',
      a: 'Dedicated technical support is fully active during your package support period. Afterward, you can extend support with a flexible maintenance plan.'
    }
  ];

  const filteredTemplates = useMemo(() => {
    return enTemplates.filter(t => {
      const matchCategory = activeCategory === "All" || t.category === activeCategory;
      const matchSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.desc.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchTerm]);

  // Featured Item: If activeCategory is "All" and search is empty, show the designated featured item on top
  const featuredItem = useMemo(() => {
    if (activeCategory !== "All" || searchTerm !== "") return null;
    return enTemplates.find(t => t.isFeatured) || null;
  }, [activeCategory, searchTerm]);

  // Grid Items: Exclude the featured item if it is shown on top
  const gridItems = useMemo(() => {
    if (featuredItem) {
      return filteredTemplates.filter(t => t.id !== featuredItem.id);
    }
    return filteredTemplates;
  }, [filteredTemplates, featuredItem]);

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
    setSubmitted(false);
  };

  const closePackage = () => {
    setSelectedPackage(null);
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const companyName = (form.elements.namedItem('companyName') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const selectedPkg = packages.find(p => p.id === selectedPackage);
    const subject = `Website Project Inquiry: ${selectedPkg?.name || 'Consultation'}`;
    const body = `Company: ${companyName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

    window.location.href = `mailto:contact@ohmytemplate.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
      <main className="min-h-screen bg-[#FCFCFD] text-zinc-900 font-sans selection:bg-[#F1B100] selection:text-zinc-900 overflow-x-hidden antialiased dark:bg-zinc-950 dark:text-zinc-100">
        
        {/* Header */}
        <header className="bg-white border-b border-zinc-200/60 px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-40 dark:bg-zinc-900 dark:border-zinc-800">
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
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden sm:inline-flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-white text-xs uppercase tracking-widest font-bold px-5 py-2.5 transition-colors duration-200 rounded-md dark:bg-zinc-700 dark:hover:bg-zinc-600"
            >
              Get Started
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-white border-b border-zinc-200/50 relative overflow-hidden dark:bg-zinc-900 dark:border-zinc-800">
          {/* Ambient Glows */}
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#F1B100]/8 via-[#F1B100]/4 to-transparent blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center px-6 space-y-8 relative z-10">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-bold uppercase tracking-wider rounded-full dark:bg-zinc-800 dark:text-zinc-300">
                <Sparkles size={12} className="text-[#F1B100]" />
                Vinuspread Templates
              </span>
              <h1 className="text-[3.2rem] md:text-[4.8rem] font-bold tracking-tight leading-[1.05] text-zinc-900 dark:text-zinc-100">
                Find the perfect <span className="text-[#F1B100]">Template</span> <br className="hidden sm:block" />
                for your next website.
              </h1>
              <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto font-normal leading-relaxed dark:text-zinc-400">
                Premium, hand-crafted web templates for brands that demand quality. Fully customized and deployed by our team in 2 weeks.
              </p>
            </div>

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

              {/* Popular Tags */}
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
          </div>

          {/* Infinite Horizontal Scroll Marquee */}
          <div className="relative mt-16 w-full overflow-hidden select-none pointer-events-auto">
            {/* Left/Right Vignette Shadows */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none dark:from-zinc-900" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none dark:from-zinc-900" />
            
            {/* Double the list of templates for continuous loop */}
            <div className="animate-marquee flex gap-6 py-8">
              {[...enTemplates, ...enTemplates].map((template, idx) => (
                <Link
                  href={template.url}
                  key={`${template.id}-${idx}`}
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
                      <span className="text-[0.55rem] font-bold text-[#F1B100] border border-[#F1B100]/30 px-1 rounded bg-[#F1B100]/5">Premium</span>
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
          
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 border-b border-zinc-200/60 no-scrollbar dark:border-zinc-800">
            {CATEGORIES.map((cat) => (
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
          {(searchTerm || activeCategory !== "All") && (
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
                      setActiveCategory("All");
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
                        <Link href={featuredItem.url} className="relative h-[280px] md:h-[420px] block overflow-hidden bg-zinc-50 dark:bg-zinc-700">
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
                            <p className="text-sm text-zinc-500 leading-relaxed font-normal dark:text-zinc-400">{featuredItem.desc}</p>
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
                                onClick={() => handlePackageSelect('professional')}
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
                        <Link href={template.url} className="relative h-56 block overflow-hidden bg-zinc-50 dark:bg-zinc-700">
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
                              <span className="inline-block bg-zinc-100 text-zinc-600 text-[0.62rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded dark:bg-zinc-700 dark:text-zinc-400">
                                Premium
                              </span>
                            </div>
                            <p className="text-[0.65rem] text-zinc-400 font-bold uppercase tracking-wider dark:text-zinc-500">{template.category}</p>
                          </div>
                          <p className="text-sm text-zinc-500 leading-relaxed font-normal dark:text-zinc-400">{template.desc}</p>
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
                              onClick={() => handlePackageSelect('professional')}
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
                    pkg.recommended
                      ? 'border-[#F1B100] border-2 shadow-lg relative'
                      : 'border-zinc-200/60 hover:border-zinc-300 dark:hover:border-zinc-600'
                  }`}
                >
                  {pkg.recommended && (
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
                    onClick={() => handlePackageSelect(pkg.id)}
                    className={`w-full mt-8 py-3 text-xs uppercase tracking-widest font-bold transition-all duration-150 rounded-md ${
                      pkg.recommended
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
                  key={idx}
                  className="border border-zinc-200/60 rounded-xl overflow-hidden bg-[#FCFCFD] hover:border-zinc-300 transition-all duration-300 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-zinc-50 transition-colors duration-300 dark:hover:bg-zinc-700"
                  >
                    <span className="font-bold text-left text-sm text-zinc-800 dark:text-zinc-200">{faq.q}</span>
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
                        <div className="px-6 py-5 text-sm text-zinc-500 leading-relaxed font-normal dark:text-zinc-400">
                          {faq.a}
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
              <a href="mailto:contact@ohmytemplate.com" className="hover:text-zinc-950 transition-colors dark:hover:text-zinc-100">Contact</a>
            </div>
          </div>
          <div className="max-w-6xl mx-auto text-[0.62rem] font-bold text-zinc-400 uppercase tracking-widest mt-8 border-t border-zinc-100 pt-6 dark:text-zinc-500 dark:border-zinc-800">
            &copy; 2026 Oh My Template. All rights reserved.
          </div>
        </footer>

        {/* Package Selection Modal */}
        <AnimatePresence>
          {selectedPackage && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closePackage}
              />
              <motion.aside
                className="fixed top-0 right-0 h-full w-full sm:w-[440px] bg-white border-l border-zinc-200 z-50 flex flex-col shadow-2xl overflow-y-auto dark:bg-zinc-900 dark:border-zinc-800"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.5, ease: EASE_IOS }}
              >
                <div className="p-8 border-b border-zinc-200 flex items-start justify-between gap-4 flex-shrink-0 dark:border-zinc-800">
                  <div className="space-y-2">
                    <span className="text-[0.62rem] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Package Inquiry</span>
                    <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                      {packages.find(p => p.id === selectedPackage)?.name}
                    </h3>
                  </div>
                  <button
                    onClick={closePackage}
                    className="text-zinc-400 hover:text-zinc-900 transition-colors mt-1 flex-shrink-0 dark:text-zinc-500 dark:hover:text-zinc-100"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-8">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center justify-center h-full text-center gap-6 py-16"
                    >
                      <div className="w-12 h-12 rounded-full border border-[#F1B100] flex items-center justify-center">
                        <span className="text-[#F1B100] text-lg">✓</span>
                      </div>
                      <div className="space-y-2">
                      <p className="text-zinc-950 text-sm font-bold dark:text-zinc-100">Email App Opened</p>
                      <p className="text-xs text-zinc-400 font-normal dark:text-zinc-500">We will review your request and contact you within 24 hours.</p>
                      </div>
                      <button
                        onClick={closePackage}
                        className="text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-zinc-950 transition-colors pt-4 dark:text-zinc-500 dark:hover:text-zinc-100"
                      >
                        Close
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="text-[0.62rem] uppercase tracking-widest text-zinc-500 font-bold mb-2 block dark:text-zinc-400">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          required
                          className="bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-zinc-900 outline-none text-zinc-900 placeholder:text-zinc-400 px-4 py-3 text-xs w-full transition-all rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:focus:bg-zinc-800 dark:focus:border-zinc-500 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                          placeholder="Company name"
                        />
                      </div>

                      <div>
                        <label className="text-[0.62rem] uppercase tracking-widest text-zinc-500 font-bold mb-2 block dark:text-zinc-400">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-zinc-900 outline-none text-zinc-900 placeholder:text-zinc-400 px-4 py-3 text-xs w-full transition-all rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:focus:bg-zinc-800 dark:focus:border-zinc-500 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                          placeholder="Email address"
                        />
                      </div>

                      <div>
                        <label className="text-[0.62rem] uppercase tracking-widest text-zinc-500 font-bold mb-2 block dark:text-zinc-400">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          className="bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-zinc-900 outline-none text-zinc-900 placeholder:text-zinc-400 px-4 py-3 text-xs w-full transition-all rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:focus:bg-zinc-800 dark:focus:border-zinc-500 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                          placeholder="+1-000-000-0000"
                        />
                      </div>

                      <div>
                        <label className="text-[0.62rem] uppercase tracking-widest text-zinc-500 font-bold mb-2 block dark:text-zinc-400">
                          Special Requests
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          className="bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-zinc-900 outline-none text-zinc-900 placeholder:text-zinc-400 px-4 py-3 text-xs w-full resize-none transition-all rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:focus:bg-zinc-800 dark:focus:border-zinc-500 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                          placeholder="Describe your goals..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#F1B100] hover:bg-[#D9A000] text-zinc-900 font-bold uppercase tracking-widest text-xs py-3.5 transition-all rounded-lg"
                      >
                        Submit Inquiry
                      </button>
                    </form>
                  )}
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </main>
  );
}
