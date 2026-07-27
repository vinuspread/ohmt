"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";
export const Hero = () => {
  const t = {
  "nav": {
    "living": `Living Room`,
    "bedroom": `Bedroom`,
    "dining": `Dining`,
    "workspace": `Workspace`,
    "shoppingBag": `Shopping Bag`,
    "account": `Account / Login`,
    "myPage": `My Page`,
    "categories": `Categories`,
    "menu": `Menu`
  },
  "hero": {
    "cta": `Shop Piece`,
    "video": `Watch Film`,
    "curated": `Explore Curated Series`,
    "items": {
      "item1": {
        "subtitle": `New Arrival // 2026`,
        "title1": `The Art of`,
        "title2": `Living Well.`,
        "desc": `Experience unmatched comfort and timeless design with our handcrafted lounge series. A masterpiece in every detail.`
      },
      "item2": {
        "subtitle": `Limited Edition`,
        "title1": `Illuminate`,
        "title2": `Your Vision.`,
        "desc": `Sleek lines meet warm radiance. Our latest lighting system brings professional ambiance to any modern workspace.`
      },
      "item3": {
        "subtitle": `Modern Classic`,
        "title1": `Simplicity`,
        "title2": `Reimagined.`,
        "desc": `Sustainability and aesthetics in perfect harmony. Designed for the discerning individual who values purity of form.`
      }
    }
  },
  "story": {
    "badge": `Our Story / Narrative`,
    "title1": `Between material`,
    "title2": `and space.`,
    "sub": `Founded on the principles of purity and precision, OHMT is an archive of essential interiors.`,
    "desc": `Each piece in our collection is a dialogue. We explore the tension between raw material and refined form, creating objects that bring a sense of serenity to the modern home. 01 Edition.`,
    "journal": `Read the Journal`
  },
  "grid": {
    "badge": `The Collection`,
    "title1": `Essential pieces for`,
    "title2": `modern living.`,
    "cta": `See All Items`,
    "action": `Shop Piece`
  },
  "products": {
    "item1": {
      "name": `Siero Lounge Chair`,
      "desc": `A timeless masterpiece of comfort and form. The Siero Lounge Chair is designed to provide unparalleled ergonomic support while maintaining a slim, architectural profile.`
    },
    "item2": {
      "name": `Velvet Mono Sofa`,
      "desc": `A timeless masterpiece of comfort, featuring premium Italian linen and deep-seated ergonomics.`
    },
    "item3": {
      "name": `Oak Dining Table`,
      "desc": `Crafted from sustainable European oak, this table defines the heart of a modern home.`
    },
    "item4": {
      "name": `Walnut Lounge Chair`,
      "desc": `Sculptural silhouette meets unmatched comfort in this hand-finished American Walnut chair.`
    },
    "item5": {
      "name": `Ceramic Pendant Lamp`,
      "desc": `A delicate balance of raw texture and refined form, providing soft, ambient glows.`
    },
    "item6": {
      "name": `Brutalist Side Table`,
      "desc": `Cast in lightweight concrete with a honed finish, celebrating raw materiality.`
    },
    "item7": {
      "name": `Floating Wall Desk`,
      "desc": `A space-saving architect's desk that mounts seamlessly to any wall surface.`
    },
    "item8": {
      "name": `Linen Platform Bed`,
      "desc": `The ultimate sanctuary, featuring a low-profile frame and padded linen headboard.`
    }
  }
};
const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const HERO_PRODUCTS = [
    {
      id: 1,
      name: "Sculptural Lounge Chair",
      image: "/templates/OHMT004-furniture/chair.png",
      subtitle: t.hero.items.item1.subtitle,
      titleLine1: t.hero.items.item1.title1,
      titleLine2: t.hero.items.item1.title2,
      desc: t.hero.items.item1.desc
    },
    {
      id: 2,
      name: "Architectural Table Lamp",
      image: "/templates/OHMT004-furniture/lamp.png",
      subtitle: t.hero.items.item2.subtitle,
      titleLine1: t.hero.items.item2.title1,
      titleLine2: t.hero.items.item2.title2,
      desc: t.hero.items.item2.desc
    },
    {
      id: 3,
      name: "Minimalist Solid Oak Sofa",
      image: "/templates/OHMT004-furniture/sofa.png",
      subtitle: t.hero.items.item3.subtitle,
      titleLine1: t.hero.items.item3.title1,
      titleLine2: t.hero.items.item3.title2,
      desc: t.hero.items.item3.desc
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % HERO_PRODUCTS.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + HERO_PRODUCTS.length) % HERO_PRODUCTS.length);
  };

  const current = HERO_PRODUCTS[index];

  return (
    <section className="relative bg-white overflow-x-clip selection:bg-[var(--color-text)] selection:text-white flex flex-col pt-10 pb-4 sm:pt-0 lg:pb-0" style={{ minHeight: "clamp(600px, 88vh, 1000px)" }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex-1 grid grid-cols-1 sm:grid-cols-[0.9fr_1.1fr] lg:grid-cols-2 gap-0 sm:gap-6 lg:gap-0 items-stretch w-full">
        {/* Left: Content */}
        <div className="z-10 relative flex flex-col justify-center order-last sm:order-first py-0 sm:py-12 md:py-16 lg:py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col"
            >
              <span className="text-xs font-bold text-[var(--color-secondary)] uppercase mb-4 sm:mb-6 lg:mb-8 block tracking-wider">{current.subtitle}</span>
              <h1 className="text-[length:var(--text-h3)] sm:text-[length:var(--text-h2)] lg:text-[length:var(--text-display)] font-bold text-[var(--color-text)] leading-[var(--leading-heading)] mb-4 sm:mb-6 lg:mb-10 uppercase [text-wrap:balance] lg:[text-wrap:normal]">
                {current.titleLine1}<br />{current.titleLine2}
              </h1>
              <p className="text-sm text-[var(--color-secondary)] font-normal leading-relaxed max-w-sm sm:max-w-md mb-6 sm:mb-10 lg:mb-12">
                {current.desc}
              </p>

              <div className="hidden sm:flex items-center gap-4 lg:gap-6">
                <Button variant="primary" className="px-7 lg:px-10 py-4 text-sm font-bold rounded-full flex items-center gap-3 whitespace-nowrap">
                  {t.hero.cta} <ArrowRight size={16} />
                </Button>
                <Button variant="ghost" className="group flex items-center gap-3 text-sm font-bold whitespace-nowrap">
                  <div className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-500 flex-shrink-0">
                    <Play size={13} fill="currentColor" />
                  </div>
                  {t.hero.video}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Large Single Product Slider */}
        <div className="relative h-[360px] sm:h-auto sm:min-h-[520px] md:min-h-[560px] order-first sm:order-2 overflow-visible">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 260 : -260, scale: 0.85 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction > 0 ? -260 : 260, scale: 0.85 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -inset-x-8 sm:-inset-x-10 lg:-inset-x-16 inset-y-0 sm:-inset-y-4 lg:-inset-y-8 flex items-center justify-center"
              >
                 <motion.img
                   src={current.image}
                   className="w-full h-full object-contain hover:scale-105 transition-transform duration-[2s] pointer-events-none"
                   alt={current.name}
                 />
              </motion.div>
            </AnimatePresence>
        </div>
      </div>

      {/* Mobile Actions */}
      <div className="flex sm:hidden items-center justify-start gap-4 px-6 pt-6 pb-6 z-30">
        <Button variant="primary" className="px-6 py-3 text-xs font-bold rounded-full flex items-center gap-2 whitespace-nowrap">
          {t.hero.cta} <ArrowRight size={14} />
        </Button>
        <Button variant="ghost" className="group flex items-center gap-2 text-xs font-bold whitespace-nowrap">
          <div className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-500 flex-shrink-0">
            <Play size={12} fill="currentColor" />
          </div>
          {t.hero.video}
        </Button>
      </div>

      {/* Slider Controls */}
      <div className="flex items-center justify-center gap-4 md:gap-10 pb-6 lg:pb-10 z-30">
          <button
            onClick={prevSlide}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-white hover:border-black/20 transition-all shadow-sm hover:shadow-md flex-shrink-0"
          >
            <ArrowLeft size={14} className="md:w-4" strokeWidth={1.5} />
          </button>

          <div className="flex items-center gap-2 md:gap-3">
            {HERO_PRODUCTS.map((_, i) => (
              <div
                key={i}
                className={`transition-all duration-700 rounded-full ${index === i ? "w-6 md:w-8 h-[2px] bg-black" : "w-1.5 h-1.5 bg-black/10"}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-white hover:border-black/20 transition-all shadow-sm hover:shadow-md flex-shrink-0"
          >
            <ArrowRight size={14} className="md:w-4" strokeWidth={1.5} />
          </button>
      </div>

    </section>
  );
};

export const CategoryNav = () => {
  const t = {
  "nav": {
    "living": `Living Room`,
    "bedroom": `Bedroom`,
    "dining": `Dining`,
    "workspace": `Workspace`,
    "shoppingBag": `Shopping Bag`,
    "account": `Account / Login`,
    "myPage": `My Page`,
    "categories": `Categories`,
    "menu": `Menu`
  },
  "hero": {
    "cta": `Shop Piece`,
    "video": `Watch Film`,
    "curated": `Explore Curated Series`,
    "items": {
      "item1": {
        "subtitle": `New Arrival // 2026`,
        "title1": `The Art of`,
        "title2": `Living Well.`,
        "desc": `Experience unmatched comfort and timeless design with our handcrafted lounge series. A masterpiece in every detail.`
      },
      "item2": {
        "subtitle": `Limited Edition`,
        "title1": `Illuminate`,
        "title2": `Your Vision.`,
        "desc": `Sleek lines meet warm radiance. Our latest lighting system brings professional ambiance to any modern workspace.`
      },
      "item3": {
        "subtitle": `Modern Classic`,
        "title1": `Simplicity`,
        "title2": `Reimagined.`,
        "desc": `Sustainability and aesthetics in perfect harmony. Designed for the discerning individual who values purity of form.`
      }
    }
  },
  "story": {
    "badge": `Our Story / Narrative`,
    "title1": `Between material`,
    "title2": `and space.`,
    "sub": `Founded on the principles of purity and precision, OHMT is an archive of essential interiors.`,
    "desc": `Each piece in our collection is a dialogue. We explore the tension between raw material and refined form, creating objects that bring a sense of serenity to the modern home. 01 Edition.`,
    "journal": `Read the Journal`
  },
  "grid": {
    "badge": `The Collection`,
    "title1": `Essential pieces for`,
    "title2": `modern living.`,
    "cta": `See All Items`,
    "action": `Shop Piece`
  },
  "products": {
    "item1": {
      "name": `Siero Lounge Chair`,
      "desc": `A timeless masterpiece of comfort and form. The Siero Lounge Chair is designed to provide unparalleled ergonomic support while maintaining a slim, architectural profile.`
    },
    "item2": {
      "name": `Velvet Mono Sofa`,
      "desc": `A timeless masterpiece of comfort, featuring premium Italian linen and deep-seated ergonomics.`
    },
    "item3": {
      "name": `Oak Dining Table`,
      "desc": `Crafted from sustainable European oak, this table defines the heart of a modern home.`
    },
    "item4": {
      "name": `Walnut Lounge Chair`,
      "desc": `Sculptural silhouette meets unmatched comfort in this hand-finished American Walnut chair.`
    },
    "item5": {
      "name": `Ceramic Pendant Lamp`,
      "desc": `A delicate balance of raw texture and refined form, providing soft, ambient glows.`
    },
    "item6": {
      "name": `Brutalist Side Table`,
      "desc": `Cast in lightweight concrete with a honed finish, celebrating raw materiality.`
    },
    "item7": {
      "name": `Floating Wall Desk`,
      "desc": `A space-saving architect's desk that mounts seamlessly to any wall surface.`
    },
    "item8": {
      "name": `Linen Platform Bed`,
      "desc": `The ultimate sanctuary, featuring a low-profile frame and padded linen headboard.`
    }
  }
};
const categories = [
    { name: "Sofas",           image: "/templates/OHMT004-furniture/sofa.png",       id: "sofas" },
    { name: "Bedroom",         image: "/templates/OHMT004-furniture/bed.png",        id: "bedroom" },
    { name: "Dining",          image: "/templates/OHMT004-furniture/table.png",      id: "dining" },
    { name: "Home Office",     image: "/templates/OHMT004-furniture/desk.png",       id: "home-office" },
    { name: "Chairs",          image: "/templates/OHMT004-furniture/chair.png",      id: "chairs" },
    { name: "Lighting",        image: "/templates/OHMT004-furniture/lamp.png",       id: "lighting" },
    { name: "Living",          image: "/templates/OHMT004-furniture/sidetable.png",  id: "living" },
    { name: "Storage",         image: "/templates/OHMT004-furniture/wardrobe.png",   id: "storage" },
  ];

  return (
    <section className="bg-white py-12 md:py-20 lg:py-24 border-b border-black/5 selection:bg-black selection:text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center mb-8">
          <span className="inline-block text-xs font-bold text-[var(--color-primary)] uppercase mb-4 opacity-40">{t.hero.curated}</span>
          <div className="h-[1px] w-12 bg-black/10 mx-auto" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-8 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Link key={i} href={`/en/templates/OHMT004-furniture/category/${cat.id}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 8 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.5,
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="group cursor-pointer flex flex-col items-center"
              >
                <div className="w-full aspect-square mb-2 md:mb-4 lg:mb-6 flex items-center justify-center p-2 md:p-4 transition-all duration-700 relative overflow-hidden">
                  <motion.img
                    src={cat.image}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    alt={cat.name}
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xs md:text-xs font-bold text-[var(--color-text)] uppercase group-hover:opacity-50 transition-all duration-500 line-clamp-2">
                    {cat.name}
                  </h4>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
