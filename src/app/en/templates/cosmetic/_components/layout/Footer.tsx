// src/app/templates/OHMT010-cosmetic/-components/layout/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export const Footer = () => {
  const searchParams = useSearchParams();
  const t = {
  "nav": {
    "shop": `Shop`,
    "story": `Story`,
    "journal": `Journal`,
    "account": `Account`,
    "banner": `Free shipping on orders over lang50 · Sustainable packaging · Dermatologist tested`
  },
  "hero": {
    "title1": `Advanced skincare`,
    "title2": `rooted in nature,`,
    "title3": `refined by science.`,
    "shop": `Shop Collection`,
    "ritual": `The Ritual`,
    "quickAdd": `Quick Add`,
    "featured": `Restorative Serum`
  },
  "grid": {
    "badge": `The Essentials`,
    "title": `Shop Skincare`,
    "addToCart": `Add to Cart`,
    "tags": {
      "essential": `Essential`,
      "new": `New`,
      "bestseller": `Best Seller`
    },
    "items": {
      "item1": `Gentle Cleanser`,
      "item2": `Hydrating Mist`,
      "item3": `Night Cream`
    }
  },
  "footer": {
    "brandDesc": `We believe in conscious beauty. Formulated without compromise, designed for results. All products are cruelty-free and vegan.`,
    "shopTitle": `Shop`,
    "aboutTitle": `About`,
    "supportTitle": `Support`,
    "links": {
      "allProducts": `All Products`,
      "newArrivals": `New Arrivals`,
      "bestSellers": `Best Sellers`,
      "skinQuiz": `Skin Quiz`,
      "ourStory": `Our Story`,
      "ingredients": `Ingredients`,
      "sustainability": `Sustainability`,
      "careers": `Careers`,
      "contactUs": `Contact Us`,
      "shipping": `Shipping`,
      "returns": `Returns`,
      "faq": `FAQ`
    },
    "copyright": `© 2026 Vinuspread Beauty. All Rights Reserved. Made in France.`
  },
  "story": {
    "title": `Conscious beauty for the modern age.`,
    "desc": `Our journey started with a simple question: why choose between performance and purity? We've spent five years perfecting formulas that deliver transformative results while honoring the planet.`,
    "cta": `Our Story`
  }
};
const shopLinks = [
    t.footer.links.allProducts,
    t.footer.links.newArrivals,
    t.footer.links.bestSellers,
    t.footer.links.skinQuiz,
  ];
  const aboutLinks = [
    t.footer.links.ourStory,
    t.footer.links.ingredients,
    t.footer.links.sustainability,
    t.footer.links.careers,
  ];
  const supportLinks = [
    t.footer.links.contactUs,
    t.footer.links.shipping,
    t.footer.links.returns,
    t.footer.links.faq,
  ];

  return (
    <footer className="bg-black text-white py-12 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-20 mb-20">
          <div>
            <Link href="/en/templates/OHMT019-cosmetic-en" className="text-[1rem] md:text-[1.15rem] font-medium md:font-black tracking-[0.12em] uppercase mb-8 block">
              VINUSPREAD
            </Link>
            <p className="text-[0.85rem] opacity-70 leading-[1.4] max-w-[320px]">
              {t.footer.brandDesc}
            </p>
          </div>
          
          <div>
            <h4 className="text-[0.75rem] font-medium uppercase tracking-widest mb-8">{t.footer.shopTitle}</h4>
            <nav className="flex flex-col gap-4">
              {shopLinks.map(item => (
                <Link key={item} href="#" className="text-[0.88rem] opacity-70 hover:opacity-100 transition-opacity">{item}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-[0.75rem] font-medium uppercase tracking-widest mb-8">{t.footer.aboutTitle}</h4>
            <nav className="flex flex-col gap-4">
              {aboutLinks.map(item => (
                <Link key={item} href="#" className="text-[0.88rem] opacity-50 hover:opacity-100 transition-opacity">{item}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-[0.75rem] font-medium uppercase tracking-widest mb-8">{t.footer.supportTitle}</h4>
            <nav className="flex flex-col gap-4">
              {supportLinks.map(item => (
                <Link key={item} href="#" className="text-[0.88rem] opacity-50 hover:opacity-100 transition-opacity">{item}</Link>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 text-[0.8rem] opacity-40 text-center md:text-left">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
};
