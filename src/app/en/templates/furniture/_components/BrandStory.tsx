"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
export const BrandStory = () => {
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
return (
    <section className="bg-white py-16 md:py-32 lg:py-48 selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-8 md:gap-16 lg:gap-40">
        {/* Left: Interactive Image Card */}
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.7,
            ease: [0.23, 1, 0.32, 1]
          }}
          className="relative lg:w-1/2 overflow-hidden group"
        >
          <img
            src="/templates/furniture/banner-lifestyle.png"
            alt="Lifestyle Craftsmanship"
            className="w-full h-auto object-cover transition-transform duration-[4s] group-hover:scale-105"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Right: Editorial Narrative */}
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              delay: 0.1,
              duration: 0.7,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-[13px] md:text-[12px] font-bold text-[var(--color-secondary)] uppercase mb-6 md:mb-10 block"
            >
              {t.story.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[clamp(1.5rem,4vw,4rem)] font-bold text-[var(--color-text)] leading-[1.05] mb-8 md:mb-12 uppercase"
            >
              {t.story.title1} <br /> {t.story.title2}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              style={{ originX: 0 }}
              className="h-[2px] w-12 md:w-16 bg-black mb-8 md:mb-12 origin-left"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-[var(--color-text)] font-bold leading-[1.4] mb-6 md:mb-10 uppercase"
            >
              {t.story.sub}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-sm md:text-base lg:text-lg text-[var(--color-secondary)] font-medium leading-[1.4] mb-10 md:mb-16 uppercase"
            >
              {t.story.desc}
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[14px] font-bold text-[var(--color-text)] border-b-2 border-black pb-2 hover:opacity-50 transition-all uppercase"
            >
              {t.story.journal}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
