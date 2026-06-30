"use client";
import { Leaf, Shield, Truck, Recycle } from "lucide-react";
import { useSearchParams } from "next/navigation";
const icons = [
  <Leaf size={34} strokeWidth={1.5} />, 
  <Shield size={34} strokeWidth={1.5} />, 
  <Truck size={34} strokeWidth={1.5} />, 
  <Recycle size={34} strokeWidth={1.5} />
];

export function FeatureRow() {
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
    "copyright": `© 2026 OHMT.`,
    "legal": {
      "privacy": `Privacy`,
      "terms": `Terms`,
      "cookies": `Cookies`
    }
  }
};
const features = t.featureRow.items.map((item: { title: string; desc: string }, i: number) => ({
    icon: icons[i],
    title: item.title,
    desc: item.desc,
  }));

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-x-16">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-start text-left gap-4 bg-white group cursor-default"
            >
              <div className="text-black/80 transition-all duration-300 transform group-hover:-translate-y-1">
                {f.icon}
              </div>
              <div className="mt-2">
                <h4 className="text-[1.3rem] md:text-[1.4rem] font-bold text-black tracking-[-0.01em] mb-2">
                  {f.title}
                </h4>
                <p className="text-[0.98rem] md:text-[1.02rem] text-black/50 leading-relaxed break-keep font-normal">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
