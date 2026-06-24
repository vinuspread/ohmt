"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { products } from "../data/data";
import themeData from "../theme.json";
import Link from "next/link";
const theme = themeData.theme;


const ProductCard = ({ product, index }: { product: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: (index % 4) * 0.08,
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }}
      className="group cursor-pointer"
    >
      <Link href={`/en/templates/OHMT004-furniture-EN/product/${product.id}`}>
        <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden mb-4 sm:mb-8 flex items-center justify-center">
          <motion.img
            src={product.image}
            alt={product.name}
            className={`max-w-full max-h-full object-contain ${theme.interaction.card_hover}`}
          />

          {/* Black Iconic Button on Hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <motion.div
              className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-all duration-300 active:scale-95 pointer-events-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.97 }}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        </div>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          delay: (index % 4) * 0.08 + 0.1,
          duration: 0.5,
          ease: [0.23, 1, 0.32, 1]
        }}
        className="px-2 mt-3 flex flex-col gap-1"
      >
        <Link href={`/en/templates/OHMT004-furniture-EN/product/${product.id}`} className="min-w-0">
          <h3 className="text-[17px] font-bold text-[var(--color-text)] group-hover:text-black transition-colors uppercase">{product.name}</h3>
        </Link>
        <p className={`text-[13px] text-zinc-500 font-medium leading-[1.4] w-full ${theme.typography.body.style}`}>
          {product.desc}
        </p>
        <span className="text-[16px] font-bold text-[var(--color-text)] mt-1">{product.price}</span>
      </motion.div>
    </motion.div>
  );
};

export const ProductGrid = () => {
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
const localProducts = products.map((p) => {
    const key = `item${p.id}` as keyof typeof t.products;
    const itemTranslation = t.products[key];
    return {
      ...p,
      name: itemTranslation ? itemTranslation.name : p.name,
      desc: itemTranslation ? itemTranslation.desc : p.desc
    };
  });

  return (
    <section className="bg-white py-12 md:py-24 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 lg:mb-24 gap-4 md:gap-12 border-b border-black/5 pb-6 md:pb-12">
          <div className="max-w-2xl">
            <span className="text-[12px] md:text-[13px] font-bold text-[var(--color-primary)] uppercase mb-2 md:mb-6 block">{t.grid.badge}</span>
            <h2 className="text-[24px] sm:text-[clamp(1.5rem,3.5vw,3.5rem)] font-bold text-[var(--color-text)] leading-[1.1] sm:leading-[1.1]">
              {t.grid.title1} <br />
              <span className="text-[var(--color-secondary)]">{t.grid.title2}</span>
            </h2>
          </div>
          <button className="text-[13px] md:text-[15px] font-bold text-[var(--color-text)] border-b-2 border-black pb-1 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all whitespace-nowrap self-start sm:self-auto">
            {t.grid.cta}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-8">
          {localProducts.slice(0, 8).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
