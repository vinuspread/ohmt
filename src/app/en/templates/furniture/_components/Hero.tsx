"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "./ui/Button";
export const Hero = () => {
  const searchParams = useSearchParams();
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
    "sub": `Founded on the principles of purity and precision, Vinuspread is an archive of essential interiors.`,
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
      image: "/templates/furniture/chair.png",
      subtitle: t.hero.items.item1.subtitle,
      titleLine1: t.hero.items.item1.title1,
      titleLine2: t.hero.items.item1.title2,
      desc: t.hero.items.item1.desc
    },
    {
      id: 2,
      name: "Architectural Table Lamp",
      image: "/templates/furniture/lamp.png",
      subtitle: t.hero.items.item2.subtitle,
      titleLine1: t.hero.items.item2.title1,
      titleLine2: t.hero.items.item2.title2,
      desc: t.hero.items.item2.desc
    },
    {
      id: 3,
      name: "Minimalist Solid Oak Sofa",
      image: "/templates/furniture/sofa.png",
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
    <section className="relative bg-white overflow-x-clip selection:bg-[var(--color-text)] selection:text-white min-h-[70vh] md:h-[85vh] md:min-h-[600px] flex flex-col py-10 md:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex-1 grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-12 items-center">
        {/* Left: Content */}
        <div className="z-30 relative col-span-2 sm:col-span-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col"
            >
              <span className="text-[11px] md:text-[12px] font-bold text-[var(--color-secondary)] uppercase mb-3 md:mb-6 block">{current.subtitle}</span>
              <h1 className="text-[clamp(1.8rem,5vw,3rem)] lg:text-[clamp(2.5rem,6vw,6rem)] font-bold text-[var(--color-text)] leading-[1.1] mb-3 md:mb-8 uppercase">
                {current.titleLine1}<br />{current.titleLine2}
              </h1>
              <p className="text-[13px] md:text-[17px] text-[var(--color-secondary)] font-medium leading-[1.4] max-w-lg mb-5 md:mb-10 hidden sm:block">
                {current.desc}
              </p>

              <div className="flex flex-row sm:flex-row items-center gap-3 md:gap-6">
                <Button variant="primary" className="px-5 md:px-12 py-2.5 md:py-4 text-[12px] md:text-[15px] font-bold rounded-full flex items-center gap-2 whitespace-nowrap">
                  {t.hero.cta} <ArrowRight size={14} className="md:w-[18px]" />
                </Button>
                <Button variant="ghost" className="group hidden sm:flex items-center gap-3 md:gap-4 text-[13px] md:text-[15px] font-bold whitespace-nowrap">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-500 flex-shrink-0">
                    <Play size={14} className="md:w-4" fill="currentColor" />
                  </div>
                  {t.hero.video}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Large Single Product Slider */}
        <div className="relative col-span-2 sm:col-span-1 h-[280px] sm:h-full sm:min-h-[420px] md:min-h-[520px] flex items-center justify-center overflow-visible order-first sm:order-last lg:order-2">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 300 : -300, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction > 0 ? -300 : 300, scale: 0.8 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 sm:-inset-x-8 md:-inset-x-32 sm:inset-y-0 flex items-center justify-center"
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

      {/* Slider Controls */}
      <div className="flex items-center justify-center gap-4 md:gap-10 pb-4 md:pb-8 z-30">
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
  const searchParams = useSearchParams();
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
    "sub": `Founded on the principles of purity and precision, Vinuspread is an archive of essential interiors.`,
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
    { name: "Sofas",           image: "/templates/furniture/sofa.png",       id: "sofas" },
    { name: "Bedroom",         image: "/templates/furniture/bed.png",        id: "bedroom" },
    { name: "Dining",          image: "/templates/furniture/table.png",      id: "dining" },
    { name: "Home Office",     image: "/templates/furniture/desk.png",       id: "home-office" },
    { name: "Chairs",          image: "/templates/furniture/chair.png",      id: "chairs" },
    { name: "Lighting",        image: "/templates/furniture/lamp.png",       id: "lighting" },
    { name: "Living",          image: "/templates/furniture/sidetable.png",  id: "living" },
    { name: "Storage",         image: "/templates/furniture/wardrobe.png",   id: "storage" },
  ];

  return (
    <section className="bg-white py-12 md:py-20 lg:py-24 border-b border-black/5 selection:bg-black selection:text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center mb-8">
          <span className="inline-block text-[13px] font-bold text-[var(--color-primary)] uppercase mb-4 opacity-40">{t.hero.curated}</span>
          <div className="h-[1px] w-12 bg-black/10 mx-auto" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-8 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Link key={i} href={`/en/templates/furniture/category/${cat.id}`}>
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
                  <h4 className="text-[13px] md:text-[13px] font-bold text-[var(--color-text)] uppercase group-hover:opacity-50 transition-all duration-500 line-clamp-2">
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
