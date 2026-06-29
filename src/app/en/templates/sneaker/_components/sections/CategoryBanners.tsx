"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
export function CategoryBanners() {
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
    "copyright": `© 2026 Oh My Template.`,
    "legal": {
      "privacy": `Privacy`,
      "terms": `Terms`,
      "cookies": `Cookies`
    }
  }
};
const categories = [
    { label: t.categoryBanners.items.sneakers, img: "/templates/sneaker/cat-sneakers-new.jpg" },
    { label: t.categoryBanners.items.boots, img: "/templates/sneaker/cat-boots.jpg" },
    { label: t.categoryBanners.items.formal, img: "/templates/sneaker/category-formal.jpg" },
    { label: t.categoryBanners.items.running, img: "/templates/sneaker/category-running-new.jpg" },
    { label: t.categoryBanners.items.oxford, img: "/templates/sneaker/cat-oxford-new.jpg" },
    { label: t.categoryBanners.items.sports, img: "/templates/sneaker/cat-sports.jpg" },
    { label: t.categoryBanners.items.highNeck, img: "/templates/sneaker/cat-highneck.jpg" },
    { label: t.categoryBanners.items.loafers, img: "/templates/sneaker/cat-loafers-new.jpg" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-black tracking-[-0.03em] uppercase">{t.categoryBanners.title}</h2>
          <Link href="/en/templates/sneaker/shop-all" className="text-[0.85rem] font-bold uppercase tracking-[0.15em] text-black/50 hover:text-black transition-colors border-b-2 border-black/20 pb-0.5">
            {t.categoryBanners.viewAll}
          </Link>
        </div>
        <div className="flex overflow-x-auto gap-4 pb-4 md:grid md:grid-cols-8 md:gap-5 md:pb-0 scrollbar-none [scrollbar-width:none]">
          {categories.map((cat) => (
            <Link key={cat.label} href="/en/templates/sneaker/shop-all" className="group flex flex-col items-center shrink-0 w-[95px] md:w-auto">
              <div className="w-full aspect-square overflow-hidden bg-[var(--color-bg-secondary)] group-hover:bg-[var(--color-bg-secondary)] transition-all duration-300 mb-3 relative flex items-center justify-center p-0 rounded-none">
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="text-[0.82rem] md:text-[0.9rem] font-black uppercase tracking-[0.05em] text-center text-black/80 group-hover:text-black transition-colors">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
