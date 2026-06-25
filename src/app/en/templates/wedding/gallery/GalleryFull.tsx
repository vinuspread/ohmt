"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GalleryGrid from "../_components/sections/GalleryGrid";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";

export default function GalleryFull() {
  return (
    <>
      <Navbar solid />
      <NavSpacer />
      <main>
        <section className="bg-[var(--color-bg)] py-24 lg:py-32">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
              className="mb-16"
            >
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[var(--color-primary)] block mb-4">
                Portfolio
              </span>
              <h1
                className="font-[family-name:var(--font-heading)] font-light capitalize text-[var(--color-text)] leading-[1.05]"
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
              >
                Love Stories
              </h1>
              <p className="mt-6 text-[0.85rem] text-[var(--color-text-muted)] leading-relaxed max-w-md font-[family-name:var(--font-body)]">
                Each wedding is a unique story. Here is a selection of the love stories we have had the honour to tell.
              </p>
            </motion.div>

            <GalleryGrid />
          </div>
        </section>

        <section className="bg-[#2C241E] py-20">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
            <h2 className="font-[family-name:var(--font-heading)] font-light text-4xl lg:text-6xl capitalize text-white leading-[1.1] mb-6">
              Ready to Begin?
            </h2>
            <p className="text-sm text-white/60 mb-8 font-[family-name:var(--font-body)]">
              Your love story deserves to be told beautifully.
            </p>
            <Link
              href="/en/templates/wedding/contact"
              className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200"
            >
              Book Your Date
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function NavSpacer() {
  return <div className="h-[72px]" />;
}
