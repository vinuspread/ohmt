"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
export const PromoBanner = () => {
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
    "title1": `Rule the Streets.`,
    "title2": `Raw Emotion.`,
    "desc": `Uncompromised speed, unreleased grails. Rewrite the laws of urban velocity.`,
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
        "desc": `1?? business days shipping`
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
    "copyright": `© 2026 Vinus. All rights reserved.`,
    "legal": {
      "privacy": `Privacy`,
      "terms": `Terms`,
      "cookies": `Cookies`
    }
  }
};
return (
    <section className="relative overflow-hidden bg-black text-white py-12 md:py-24">
      <div className="absolute inset-0 z-0">
        <img 
          src="/templates/OHMT005-sneaker/promo-bg.jpg" 
          alt="Promo Background" 
          className="w-full h-full object-cover opacity-50 brightness-75"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-white/60 block mb-3">{t.promoBanner.label}</span>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black tracking-[-0.03em] uppercase leading-tight mb-6">
            {t.promoBanner.title1} {t.promoBanner.title2}
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 text-white/80">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[0.85rem] opacity-75">{t.promoBanner.codeLabel}:</span>
              <span className="font-mono text-[0.95rem] font-bold bg-white/10 border border-white/20 px-3 py-1 rounded">WEEKEND20</span>
            </div>
            <div className="w-[1px] h-4 bg-white/20 hidden sm:block" />
            <p className="text-[0.85rem] opacity-75">{t.promoBanner.disclaimer}</p>
          </div>
          <Link href="/en/templates/OHMT009-sneaker-en/shop-all"
            className="inline-flex items-center gap-3 bg-white text-black text-[0.82rem] font-bold uppercase tracking-[0.08em] px-8 py-4 hover:bg-black/90 transition-colors">
            {t.promoBanner.cta} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
