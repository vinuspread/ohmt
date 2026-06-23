// src/app/templates/OHMT005-sneaker/-components/sections/Hero.tsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
export const Hero = () => {
  const searchParams = useSearchParams();
  const t = {
  "nav": {
    "categories": `Categories`,
    "shop": `Shop`,
    "about": `About`,
    "blog": `Blog`,
    "contact": `Contact`
  },
  "hero": {
    "badge": `NEW RELEASE`,
    "badgeText": `New Collection - 2026`,
    "title1": `Rule the Streets,`,
    "title2": `Redefining Urban Velocity.`,
    "desc": `Uncompromised speed, unreleased grails. We rewrite the rules of urban velocity.`,
    "cta": `ENTER DRAW`,
    "cta2": `View All`
  },
  "categoryBanners": {
    "title": `Categories`,
    "viewAll": `View All`,
    "items": {
      "sneakers": `Sneakers`,
      "boots": `Boots`,
      "formal": `Formal`,
      "running": `Running`,
      "oxford": `Oxford`,
      "sports": `Sports`,
      "highNeck": `High Neck`,
      "loafers": `Loafers`
    }
  },
  "productGrid": {
    "viewAll": `View All`,
    "badges": {
      "bestSeller": `Best Seller`,
      "percent20": `20% Off`,
      "percent15": `15% Off`,
      "percent12": `12% Off`,
      "new": `New`
    }
  },
  "reviews": {
    "label": `Testimonials`,
    "title": `What Our Customers Say`,
    "basedOn": `Based on {count} reviews`,
    "items": [
      {
        "name": `James K.`,
        "text": `Best sneakers I've owned. The build quality is exceptional and they look even better in person.`,
        "product": `Air Stride Pro`,
        "date": `May 2026`
      },
      {
        "name": `Sarah M.`,
        "text": `Wore these to work for a month straight. Incredibly comfortable and still look brand new.`,
        "product": `Pearl Low`,
        "date": `Apr 2026`
      },
      {
        "name": `David L.`,
        "text": `Great design and very comfortable. Shipping was fast and packaging was minimal and eco-friendly.`,
        "product": `Shadow Runner`,
        "date": `Apr 2026`
      },
      {
        "name": `Emma R.`,
        "text": `Ordered two pairs. The quality justifies the price. Will definitely be back for more.`,
        "product": `Urban Classic`,
        "date": `Mar 2026`
      }
    ]
  },
  "blogSection": {
    "title": `From the Blog`,
    "allPosts": `All Posts`,
    "readMore": `Read More`,
    "posts": [
      {
        "title": `How to Style Sneakers for Any Occasion`,
        "category": `Style`,
        "date": `May 20, 2026`
      },
      {
        "title": `The Rise of Sustainable Footwear`,
        "category": `Sustainability`,
        "date": `May 14, 2026`
      },
      {
        "title": `Complete Sneaker Care Guide`,
        "category": `Care`,
        "date": `May 8, 2026`
      },
      {
        "title": `Top Sneaker Trends for 2026`,
        "category": `Trends`,
        "date": `May 1, 2026`
      }
    ]
  },
  "sectionTitles": {
    "bestSellers": `Best Sellers`,
    "newArrivals": `New Arrivals`
  },
  "featureRow": {
    "items": [
      {
        "title": `Sustainable Materials`,
        "desc": `Eco-friendly fabrics sourced responsibly`
      },
      {
        "title": `6-Month Warranty`,
        "desc": `Full coverage on all products`
      },
      {
        "title": `Fast Delivery`,
        "desc": `1–2 business days shipping`
      },
      {
        "title": `Eco Packaging`,
        "desc": `100% recyclable materials`
      }
    ]
  },
  "promoBanner": {
    "label": `Limited Time`,
    "title1": `Weekend`,
    "title2": `Special Offer`,
    "codeLabel": `Use code at checkout`,
    "code": `WEEKEND20`,
    "disclaimer": `20% off all orders · Ends Sunday midnight`,
    "cta": `Shop the Sale`
  },
  "footer": {
    "brandDesc": `Premium footwear merging sustainability and style.`,
    "sections": {
      "shop": `Shop`,
      "categories": `Categories`,
      "help": `Help`
    },
    "links": {
      "allProducts": `All Products`,
      "newArrivals": `New Arrivals`,
      "bestSellers": `Best Sellers`,
      "sale": `Sale`,
      "sneakers": `Sneakers`,
      "running": `Running`,
      "formal": `Formal`,
      "boots": `Boots`,
      "loafers": `Loafers`,
      "sizingGuide": `Sizing Guide`,
      "shipping": `Shipping`,
      "returns": `Returns`,
      "contact": `Contact`
    },
    "copyright": `© 2026 Vinuspread. All rights reserved.`,
    "legal": {
      "privacy": `Privacy`,
      "terms": `Terms`,
      "cookies": `Cookies`
    }
  }
};
  return (
    <section className="pt-24 pb-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Top Typography */}
        <div className="mb-12 md:mb-16">
          <span className="text-[0.8rem] font-bold uppercase tracking-[0.25em] text-black/40 mb-4 block">
            {t.hero.badgeText}
          </span>
          
          <h1 className="text-[clamp(2.2rem,5.5vw,5rem)] tracking-[-0.03em] leading-[1.0] text-black uppercase mb-6">
            <span className="block mb-1">{t.hero.title1}</span>
            <span className="font-black block">{t.hero.title2}</span>
          </h1>

          <div className="flex flex-col gap-8">
            <p className="text-[1.05rem] text-black/60 leading-relaxed max-w-[500px]">
              {t.hero.desc}
            </p>
            <div className="flex items-center gap-4 shrink-0 flex-wrap">
              <Link href={`/en/templates/OHMT009-sneaker-en/shop-all`}
                className="group inline-flex items-center gap-3 bg-black text-white text-[0.9rem] font-bold uppercase tracking-[0.1em] px-9 py-4.5 hover:bg-black/80 transition-all duration-300">
                {t.hero.cta} <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <Link href={`/en/templates/OHMT009-sneaker-en/shop-all`}
                className="inline-flex items-center justify-center bg-white text-black border border-black text-[0.9rem] font-bold uppercase tracking-[0.1em] px-9 py-4.5 hover:bg-black hover:text-white transition-all duration-300">
                {t.hero.cta2}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Asymmetric Double Media Grid (Acomik Style) */}
        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-6 items-stretch">
          {/* Left Big Image */}
          <div className="relative aspect-[16/10] md:aspect-auto md:h-[540px] overflow-hidden group">
            <img
              src="/templates/OHMT005-sneaker/hero-main.jpg"
              alt="Premium Sneaker Street"
              className="w-full h-full object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
            {/* Bottom Right Product Card */}
            <div className="absolute bottom-6 right-6 bg-black/95 backdrop-blur-md border border-white/10 px-6 py-5 rounded-none shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:translate-y-[-2px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-red-500 animate-pulse"></span>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-white/50">Featured</p>
              </div>
              <p className="text-[1.25rem] font-black text-white tracking-tight uppercase mb-0.5">Air Max Pro</p>
              <p className="text-[0.9rem] font-mono tracking-widest text-white/60">$240.00 USD</p>
            </div>
          </div>

          {/* Right Vertical Image */}
          <div className="hidden md:block relative h-[540px] overflow-hidden group">
            <img
              src="/templates/OHMT005-sneaker/hero-detail.jpg"
              alt="Premium Sneaker Product Detail Zoom"
              className="w-full h-full object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
