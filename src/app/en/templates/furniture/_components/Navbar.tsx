"use client";
import React, { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
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
    "sub": `Founded on the principles of purity and precision, OHMT is an archive of essential interiors.`,
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full h-14 md:h-20 z-50 transition-all duration-500 flex items-center ${
          scrolled || mobileOpen ? "bg-white/95 backdrop-blur-xl border-b border-black/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href={`/en/templates/OHMT004-furniture`} className="text-xl md:text-2xl font-black lowercase text-[var(--color-text)]">
            OHMT
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-[13px] font-medium text-[var(--color-secondary)]">
            <Link href={`/en/templates/OHMT004-furniture/category/living`} className="hover:text-[var(--color-primary)] transition-colors uppercase">{t.nav.living}</Link>
            <Link href={`/en/templates/OHMT004-furniture/category/bedroom`} className="hover:text-[var(--color-primary)] transition-colors uppercase">{t.nav.bedroom}</Link>
            <Link href={`/en/templates/OHMT004-furniture/category/dining`} className="hover:text-[var(--color-primary)] transition-colors uppercase">{t.nav.dining}</Link>
            <Link href={`/en/templates/OHMT004-furniture/category/workspace`} className="hover:text-[var(--color-primary)] transition-colors uppercase">{t.nav.workspace}</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 text-[var(--color-text)]">
            <button className="hover:text-[var(--color-primary)] transition-all">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <Link href={`/en/templates/OHMT004-furniture/cart`} className="relative hover:text-[var(--color-primary)] transition-all">
              <ShoppingBag size={20} strokeWidth={1.5} />
            </Link>
            <button 
              className="md:hidden p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>
 
      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-x-0 top-14 z-40 bg-white border-b border-black/5 transition-all duration-300 md:hidden overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col px-6 text-[14px] font-medium text-[var(--color-secondary)]">
          {/* Categories */}
          <div className="flex flex-col gap-1 border-b border-black/5 pb-4 mb-4">
            <span className="text-[13px] font-bold tracking-[0.2em] text-[var(--color-text)]/40 mb-2 uppercase">{t.nav.categories}</span>
            <Link 
              href={`/en/templates/OHMT004-furniture/category/living`} 
              onClick={() => setMobileOpen(false)}
              className="hover:text-[var(--color-primary)] py-2 transition-colors uppercase"
            >
              {t.nav.living}
            </Link>
            <Link 
              href={`/en/templates/OHMT004-furniture/category/bedroom`} 
              onClick={() => setMobileOpen(false)}
              className="hover:text-[var(--color-primary)] py-2 transition-colors uppercase"
            >
              {t.nav.bedroom}
            </Link>
            <Link 
              href={`/en/templates/OHMT004-furniture/category/dining`} 
              onClick={() => setMobileOpen(false)}
              className="hover:text-[var(--color-primary)] py-2 transition-colors uppercase"
            >
              {t.nav.dining}
            </Link>
            <Link 
              href={`/en/templates/OHMT004-furniture/category/workspace`} 
              onClick={() => setMobileOpen(false)}
              className="hover:text-[var(--color-primary)] py-2 transition-colors uppercase"
            >
              {t.nav.workspace}
            </Link>
          </div>
 
          {/* Account & Shop Utilities */}
          <div className="flex flex-col gap-1">
            <span className="text-[13px] font-bold tracking-[0.2em] text-[var(--color-text)]/40 mb-2 uppercase">{t.nav.menu}</span>
            <Link 
              href={`/en/templates/OHMT004-furniture/cart`} 
              onClick={() => setMobileOpen(false)}
              className="hover:text-[var(--color-primary)] py-2 transition-colors uppercase flex justify-between items-center"
            >
              <span>{t.nav.shoppingBag}</span>
            </Link>
            <Link 
              href={`/en/templates/OHMT004-furniture`} 
              onClick={() => setMobileOpen(false)}
              className="hover:text-[var(--color-primary)] py-2 transition-colors uppercase"
            >
              {t.nav.account}
            </Link>
            <Link 
              href={`/en/templates/OHMT004-furniture`} 
              onClick={() => setMobileOpen(false)}
              className="hover:text-[var(--color-primary)] py-2 transition-colors uppercase"
            >
              {t.nav.myPage}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
