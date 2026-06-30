// src/app/templates/OHMT010-cosmetic/-components/sections/Hero.tsx
"use client";

export const Hero = () => {
  const t = {
  "nav": {
    "shop": `Shop`,
    "story": `Story`,
    "journal": `Journal`,
    "account": `Account`,
    "banner": `Free shipping on orders over $50 · Sustainable packaging · Dermatologist tested`
  },
  "hero": {
    "title1": `Advanced skincare`,
    "title2": `rooted in nature,`,
    "title3": `refined by science.`,
    "shop": `Collection`,
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
    "copyright": `© 2026 Oh My Template.`
  },
  "story": {
    "title": `Conscious beauty for the modern age.`,
    "desc": `Our journey started with a simple question: why choose between performance and purity? We've spent five years perfecting formulas that deliver transformative results while honoring the planet.`,
    "cta": `Our Story`
  }
};
return (
    <section className="bg-[var(--color-bg)] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center py-12 mt-20 gap-16">
          <div className="flex-1 max-w-[860px]">
            <h1 className="text-[22px] md:text-[36px] md:text-[56px] font-normal leading-[1.0] mb-12 [text-wrap:balance] break-keep [overflow-wrap:normal]">
              {`${t.hero.title1} ${t.hero.title2} ${t.hero.title3}`}
            </h1>
            <div className="flex gap-5">
              <button className="px-7 py-3 bg-black text-white text-[0.85rem] font-bold uppercase tracking-wider hover:opacity-80 transition-all whitespace-nowrap">
                {t.hero.shop}
              </button>
              <button className="px-7 py-3 border border-black text-black text-[0.85rem] font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all whitespace-nowrap">
                {t.hero.ritual}
              </button>
            </div>
          </div>
          
          <div className="hidden md:block w-[240px] border border-black/10 bg-white p-6 shrink-0 group">
            <img 
              src="/templates/OHMT010-cosmetic/cosmetic-1.jpg" 
              className="w-full h-[180px] object-cover mb-4 grayscale group-hover:grayscale-0 transition-all duration-300" 
              alt="Featured product" 
            />
            <div className="text-[0.85rem] font-bold mb-1">{t.hero.featured}</div>
            <div className="text-base font-bold mb-4">$85.00</div>
            <button className="text-[0.75rem] font-bold uppercase border-b border-black/20 pb-0.5 hover:border-black transition-all">
              {t.hero.quickAdd}
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full h-[50vh] overflow-hidden">
        <img 
          src="/templates/OHMT010-cosmetic/cosmetic-5.jpg" 
          className="w-full h-full object-cover object-center" 
          alt="Hero background" 
        />
      </div>
    </section>
  );
};
