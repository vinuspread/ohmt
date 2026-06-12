"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
export const Footer = () => {
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
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div className="col-span-2 md:col-span-1">
            <span className="text-[1.4rem] font-black tracking-[-0.04em] uppercase block mb-4">Vinuspread</span>
            <p className="text-[0.8rem] text-white/50 leading-[1.4] max-w-[200px]">
              {t.footer.brandDesc}
            </p>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-white/40 mb-5">{t.footer.sections.shop}</h4>
            <ul className="space-y-3">
              {[
                { label: t.footer.links.allProducts, href: "/en/templates/sneaker/shop-all" },
                { label: t.footer.links.newArrivals, href: "/en/templates/sneaker/shop-all" },
                { label: t.footer.links.bestSellers, href: "/en/templates/sneaker/shop-all" },
                { label: t.footer.links.sale, href: "/en/templates/sneaker/shop-all" },
              ].map(l => (
                <li key={l.label}><Link href={l.href} className="text-[0.85rem] text-white/70 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-white/40 mb-5">{t.footer.sections.categories}</h4>
            <ul className="space-y-3">
              {[
                { label: t.footer.links.sneakers, href: "/en/templates/sneaker/shop-all" },
                { label: t.footer.links.running, href: "/en/templates/sneaker/shop-all" },
                { label: t.footer.links.formal, href: "/en/templates/sneaker/shop-all" },
                { label: t.footer.links.boots, href: "/en/templates/sneaker/shop-all" },
                { label: t.footer.links.loafers, href: "/en/templates/sneaker/shop-all" },
              ].map(l => (
                <li key={l.label}><Link href={l.href} className="text-[0.85rem] text-white/70 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-white/40 mb-5">{t.footer.sections.help}</h4>
            <ul className="space-y-3">
              {[
                { label: t.footer.links.sizingGuide, href: "/en/templates/sneaker/shop-all" },
                { label: t.footer.links.shipping, href: "/en/templates/sneaker/shop-all" },
                { label: t.footer.links.returns, href: "/en/templates/sneaker/shop-all" },
                { label: t.footer.links.contact, href: "/en/templates/sneaker/contact" },
              ].map(l => (
                <li key={l.label}><Link href={l.href} className="text-[0.85rem] text-white/70 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.75rem] text-white/30">{t.footer.copyright}</p>
          <div className="flex gap-6">
            {[
              { label: t.footer.legal.privacy, href: "#" },
              { label: t.footer.legal.terms, href: "#" },
              { label: t.footer.legal.cookies, href: "#" },
            ].map(l => (
              <Link key={l.label} href={l.href} className="text-[0.75rem] text-white/30 hover:text-white/60 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
