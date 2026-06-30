"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MousePointerClick, Headphones } from "lucide-react";
import React, { useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { collections } from "./data/collections";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";

import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.95] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

function HomeContent() {
  const searchParams = useSearchParams();
  const t = {
  "nav": {
    "specialExhibition": `Special Exhibition`,
    "collections": `Collections`,
    "museumInfo": `Museum Info`,
    "tickets": `Tickets`,
    "souvenirShop": `Souvenir Shop`
  },
  "hero": {
    "badge": `Musei Vaticani · OHMT Curation`,
    "title1": `THE ETERNAL`,
    "title2": `Masterpieces`,
    "cta": `Begin Journey`
  },
  "audioGuide": {
    "badge": `Enhance Your Experience`,
    "title": `Official Audio Guide`,
    "desc": `Immerse yourself deeper into the Vatican collections with our newly recorded, multi-lingual audio guide. Featuring insights from world-renowned art historians.`,
    "preview": `Listen Preview`
  },
  "gallery": {
    "badge": `Collection 01`,
    "title": `Renaissance & Antiquity`,
    "curatorNoteBadge": `Curator's Note`,
    "readEssay": `Read the Essay`
  },
  "curatorNote": {
    "editorial": `Editorial`,
    "title": `Divine Proportions`,
    "p1": `The Vatican Museums stand not only as a repository of historical objects, but as a monument to the relentless human pursuit of perfection. Walking through its halls is akin to walking through the physical manifestation of the Renaissance mind.`,
    "p2": `Our curation seeks to extract the structural brilliance from the overwhelming ornamentation. By highlighting works like the Laocoön or the delicate Pietà in an isolated, digital space, we allow their raw theological and emotional gravity to echo without the noise of the physical gallery crowd.`,
    "p3": `Every brushstroke captured by Raphael, every chisel strike endured by Michelangelo. These are not relics of the past. They are continuing dialogues on the nature of humanity, suffering, knowledge, and divinity.`,
    "curator": `Curator`,
    "curatorName": `OHMT Exhibition`
  },
  "ourStory": {
    "heritage": `MUSEI VATICANI · 500 YEARS OF HERITAGE`,
    "heroTitle": `The Soul of Stone`,
    "ch1": `Chapter I`,
    "ch1Title": `The Foundation of Light`,
    "ch1Desc": `Founded in 1506 with the discovery of the Laocoön, the Vatican Museums encompass five centuries of papal patronage and the relentless pursuit of artistic perfection.`,
    "timelineTitle": `A Line in Time.`,
    "timeline": [
      {
        "year": `1506`,
        "title": `Discovery of Laocoön`,
        "desc": `Pope Julius II purchasing the marble statue, which led to the foundation of the museum.`
      },
      {
        "year": `1512`,
        "title": `Sistine Ceiling Completed`,
        "desc": `Michelangelo unveils his masterpiece after four years of grueling work.`
      },
      {
        "year": `1771`,
        "title": `Clementine Museum`,
        "desc": `The creation of a public museum system by Pope Clement XIV.`
      },
      {
        "year": `1932`,
        "title": `New Pinacoteca`,
        "desc": `The opening of the current Pinacoteca buildings by Pope Pius XI.`
      }
    ],
    "ch2": `Chapter II`,
    "ch2Title": `St. Peter's Basilica`,
    "altar": `The High Altar`,
    "altarTitle": `Bernini's Masterpiece`,
    "altarDesc": `Stand directly under Michelangelo's dome. Gian Lorenzo Bernini's bronze Baldaquin marks the burial site of Saint Peter. This monumental structure, 29 meters tall, is the defining center-point of the basilica.`,
    "altarDate": `Construction: 1623-1634`,
    "silentVatican": `The Silent Vatican`,
    "grottoesTitle": `Papal Grottoes`,
    "grottoes": [
      {
        "name": `Saint Peter the Apostle`,
        "title": `The First Pope`,
        "desc": `Buried directly beneath the High Altar, his tomb is the foundation upon which the entire basilica was constructed.`
      },
      {
        "name": `Pope John Paul II`,
        "title": `The Great Pilgrim`,
        "desc": `His tomb remains one of the most visited sacred sites in the Christian world.`
      },
      {
        "name": `Pope Gregory the Great`,
        "title": `Doctor of the Church`,
        "desc": `Known for his contributions to liturgy and chant, his resting place is marked by austere yet magnificent marble work.`
      }
    ],
    "exploreFurther": `Explore Further`,
    "visitArchive": `Visit the Archive`,
    "exploreBtn": `Explore Collections`
  },
  "exhibitionsPage": {
    "currentFeature": `Current Feature`,
    "title": `Special Exhibitions.`,
    "specialExhibitions": [
      {
        "name": `Leonardo da Vinci: The Divine Painter`,
        "period": `2026.04.12 - 08.31`,
        "venue": `Main Gallery, Raphael Wing`,
        "desc": `A high-fidelity retrospective of the master's most delicate paintings, presented in a state-of-the-art interactive digital space.`,
        "tag": `High Renaissance`
      },
      {
        "name": `Greek Brilliance: Classical Sculptures`,
        "period": `2026.05.20 - 10.15`,
        "venue": `Statue Hall, Clementine Wing`,
        "desc": `Experience the tactile genius of ancient Greek masters, from the Laocoön to the Apollo Belvedere, in global resolution.`,
        "tag": `Classical Antiquity`
      }
    ],
    "viewCatalog": `View Catalog`,
    "discovery": `Discovery`,
    "permanentTitle": `Permanent Collection`,
    "permanentGalleries": [
      {
        "name": `Sistine Chapel`,
        "desc": `Michelangelo's zenith.`
      },
      {
        "name": `The Map Gallery`,
        "desc": `Italy's topographical legacy.`
      }
    ]
  },
  "collectionsPage": {
    "category": `Archives`,
    "title": `Vatican Masterpieces`,
    "desc": `Discover a curated selection of masterpieces. Each piece encapsulates a milestone of human engineering and spiritual devotion.`,
    "totalExhibits": `Total Exhibits`,
    "galleries": `Galleries`,
    "categories": {
      "All": `All`,
      "Sculpture": `Sculpture`,
      "Fresco": `Fresco`,
      "Marble": `Marble`
    },
    "showing": `Showing {count} of {total} pieces`,
    "exhibit": `Exhibit`,
    "loadMore": `Load More Masterpieces`,
    "noExhibits": `No masterpieces found in this category.`
  }
};
// Hero Parallax
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  // Horizontal Scroll Setup
  const horizontalRef = useRef(null);
  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"]
  });
  
  const x = useTransform(horizontalProgress, [0, 1], ["0%", "-55%"]);

  return (

    <TemplateWrapper theme={theme}>

      <>
      <Header />
      <main className="antialiased relative bg-[var(--color-primary)] text-[var(--color-accent)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]">
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0 bg-[var(--color-primary)]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[var(--color-primary)] z-10" />
          <img 
            src="/templates/OHMT021-museum/hero-bg.png" 
            alt="Vatican Ceiling"
            className="w-full h-full object-cover opacity-80"
          />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="relative z-20 pointer-events-none mt-16 md:mt-20"
        >
          <motion.span variants={fadeIn} className="inline-block text-[13px] md:text-xs uppercase tracking-[0.6em] font-medium mb-6 md:mb-8 text-[var(--color-accent)]/70">
            {t.hero.badge}
          </motion.span>
          <motion.h2
            variants={fadeIn}
            className="text-5xl md:text-6xl lg:text-[8vw] font-serif font-medium leading-[0.9] tracking-tighter mb-8 md:mb-12 text-[var(--color-accent)]"
          >
            {t.hero.title1} <br />
            <span className="font-normal text-[var(--color-accent)]/80">{t.hero.title2}</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-[13px] md:text-[15px] text-[var(--color-accent)]/50 font-normal leading-[1.4] tracking-[0.01em] max-w-[360px] mx-auto mb-10 md:mb-14"
            style={{ textWrap: "pretty" } as React.CSSProperties}
          >
            From the whisper of ancient marble to the fire of the Sistine ceiling, an encounter that five centuries of patronage have been preparing for you.
          </motion.p>
          <motion.div variants={fadeIn} className="pointer-events-auto flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link href={`/en/templates/OHMT021-museum/collections`} className="w-fit mx-auto px-8 md:px-10 py-3 md:py-4 border border-[var(--color-accent)]/30 text-xs uppercase tracking-[0.5em] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors duration-300 backdrop-blur-sm">
              {t.hero.cta}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Audio Guide Highlights Section */}
      <section className="py-6 md:py-16 bg-[var(--color-accent)] text-[var(--color-primary)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1440px] mx-auto px-6 py-4 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10"
        >
          <div className="flex-1 text-center md:text-left">
            <span className="text-[8px] md:text-[13px] uppercase font-bold tracking-[0.5em] text-black/40 block mb-2 md:mb-4">{t.audioGuide.badge}</span>
            <h3 className="text-lg md:text-3xl font-serif font-bold mb-3 md:mb-4">{t.audioGuide.title}</h3>
            <p className="text-black/60 font-normal max-w-xs md:max-w-md text-sm md:text-sm leading-[1.4]">
              {t.audioGuide.desc}
            </p>
          </div>
          <div className="flex items-center gap-3 md:gap-6 flex-shrink-0 justify-center md:justify-start">
            <button className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black flex items-center justify-center hover:opacity-80 hover:bg-black/5 transition-all duration-300 active:scale-95">
              <Headphones size={20} className="md:w-6 md:h-6" />
            </button>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[8px] md:text-[13px] uppercase tracking-widest font-bold">{t.audioGuide.preview}</span>
              <span className="text-[12px] md:text-xs text-black/40">0:00 / 1:45</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Horizontal Scroll Gallery Section */}
      <section ref={horizontalRef} className="relative bg-[var(--color-primary)]" style={{ height: "auto" }}>
        <div className="sticky top-0 min-h-screen flex flex-col justify-center overflow-hidden py-6 md:py-16 lg:pt-16">

          <div className="px-4 md:px-12 lg:px-24 mb-3 md:mb-8 lg:mb-12">
            <span className="text-[8px] md:text-[13px] uppercase font-bold tracking-[0.5em] text-white/40 block mb-2 md:mb-4">{t.gallery.badge}</span>
            <h3 className="text-xl md:text-4xl lg:text-6xl font-serif font-bold">{t.gallery.title}</h3>
          </div>

          <motion.div style={{ x }} className="flex gap-3 md:gap-6 lg:gap-16 lg:gap-24 px-4 md:px-12 lg:px-24 pb-6 md:pb-12 lg:pb-20 w-full md:w-[150vw] lg:w-[150vw] overflow-x-auto md:overflow-visible touch-pan-x">
            {collections.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                className="w-[85vw] sm:w-[80vw] md:w-[50vw] lg:w-[35vw] xl:w-[25vw] shrink-0"
              >
                <Link href={`/en/templates/OHMT021-museum/collections/${item.slug}`} className="group relative cursor-pointer block">
                  <div className="relative aspect-[3/4] bg-[var(--color-bg-secondary)] overflow-hidden mb-8">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-out brightness-75 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
                        <MousePointerClick size={20} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col border-t border-white/10 pt-6 px-1">
                    <div className="flex justify-between items-start mb-4 gap-4">
                      <h4 className="text-xl md:text-2xl font-serif tracking-tight leading-snug break-words">{item.title}</h4>
                      <span className="text-[12px] whitespace-nowrap uppercase tracking-widest text-white/50 bg-white/5 px-2 py-1 h-fit">{item.tag}</span>
                    </div>
                    <div className="flex justify-between text-xs font-normal tracking-widest text-white/60">
                      <span className="truncate pr-4">{item.artist}</span>
                      <span className="shrink-0">{item.year}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Curator Note Segment */}
      <section className="py-8 md:py-20 lg:py-28 bg-[var(--color-accent)] text-[var(--color-primary)]">
        <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-6 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="order-2 md:order-1 max-w-lg"
          >
            <span className="text-[12px] md:text-[13px] uppercase font-bold tracking-[0.5em] text-black/40 mb-4 md:mb-6 block">{t.curatorNote.editorial}</span>
            <h3 className="text-4xl md:text-7xl font-serif font-bold mb-4 md:mb-10 leading-[1.1] tracking-tighter">{t.curatorNote.title}</h3>
            <p className="text-base md:text-lg text-black/70 leading-[1.4] mb-4 md:mb-10 font-normal">
              {t.curatorNote.p1}
              <br /><br />
              {t.curatorNote.p2}
            </p>
            <Link href={`/en/templates/OHMT021-museum/curator-note`} className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.5em] group pb-2 border-b border-black">
              {t.gallery.readEssay} <ArrowRight size={14} className="group-hover:translate-x-3 transition-transform duration-300" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="order-1 md:order-2 relative aspect-[4/3] md:aspect-[3/4] overflow-hidden rounded-sm"
          >
             <img
               src="/templates/OHMT021-museum/curator.png"
               alt="Vatican Museum Interior"
               className="w-full h-full object-cover grayscale"
             />
          </motion.div>
        </div>
      </section>

      </main>
      <Footer />
    </>

    </TemplateWrapper>
);
}


export default function Home() {
  return (
    <React.Suspense fallback={null}>
      <HomeContent />
    </React.Suspense>
  );
}
