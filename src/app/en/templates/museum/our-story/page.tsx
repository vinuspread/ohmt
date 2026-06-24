"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, History } from "lucide-react";
import Header from "../_components/layout/Header";
import Footer from "../_components/layout/Footer";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

function MuseumInfoContent() {
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
    "badge": `Musei Vaticani ??Oh My Template Curation`,
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
    "p3": `Every brushstroke captured by Raphael, every chisel strike endured by Michelangelo ??these are not relics of the past. They are continuing dialogues on the nature of humanity, suffering, knowledge, and divinity.`,
    "curator": `Curator`,
    "curatorName": `Oh My Template Exhibition`
  },
  "ourStory": {
    "heritage": `MUSEI VATICANI ??500 YEARS OF HERITAGE`,
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
    "altarDate": `Construction: 1623 ??1634`,
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
const timelineData = t.ourStory.timeline;
  const grottoesData = t.ourStory.grottoes;
  
  const grottoes = [
    { ...grottoesData[0], img: "/templates/museum/papal-tombs.png" },
    { ...grottoesData[1], img: "/templates/museum/curator.png" },
    { ...grottoesData[2], img: "/templates/museum/vatican-hallway.png" },
  ];

  return (

    <TemplateWrapper theme={theme}>

      <>
      <Header />
      <main className="antialiased bg-[var(--color-primary)] text-[var(--color-accent)] min-h-screen selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="/templates/museum/st-peters-exterior.png"
            alt="The Vatican Sanctuary"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[var(--color-primary)]" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="inline-block text-[13px] uppercase font-bold tracking-[0.5em] text-white/40 mb-8"
          >
            {t.ourStory.heritage}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="text-5xl md:text-8xl font-serif font-medium leading-none tracking-tighter break-keep"
          >
            {t.ourStory.heroTitle}
          </motion.h1>
        </div>
      </section>

      {/* Chapter I ??Foundation */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-16 py-10 md:py-20 md:py-32 lg:py-40 border-b border-white/5">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-24 items-center mb-40"
        >
          <motion.div variants={fadeIn} className="space-y-10">
            <span className="text-[13px] uppercase font-bold tracking-[0.5em] text-white/40">{t.ourStory.ch1}</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tighter break-keep">
              {t.ourStory.ch1Title}
            </h2>
            <p className="text-lg text-white/60 leading-[1.4] font-normal break-keep">
              {t.ourStory.ch1Desc}
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="relative aspect-[4/5] overflow-hidden">
            <img loading="lazy" src="/templates/museum/vatican-hallway.png" alt="Museum Corridor" className="w-full h-full object-cover grayscale-[0.3] hover:scale-105 transition-transform duration-[2s]" />
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-6 mb-16 text-white/20">
            <History size={28} strokeWidth={1} />
            <h3 className="text-xl font-serif uppercase tracking-widest">{t.ourStory.timelineTitle}</h3>
          </div>
          <div className="flex flex-col gap-20 relative">
            <div className="absolute left-[20px] top-0 bottom-0 w-px bg-white/10" />
            {timelineData.map((evt: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }} className="pl-16 relative">
                <div className="absolute left-[16px] top-3 w-2 h-2 rounded-full bg-[var(--color-accent)]/60 ring-8 ring-[var(--color-primary)]" />
                <span className="text-3xl font-serif mb-3 block text-white/25">{evt.year}</span>
                <h4 className="text-sm font-bold uppercase tracking-[0.3em] mb-3 break-keep">{evt.title}</h4>
                <p className="text-sm text-white/50 font-normal leading-[1.4] max-w-xl break-keep">{evt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter II ??Basilica */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-16 py-10 md:py-20 md:py-32 lg:py-40 border-b border-white/5">
        <div className="mb-24">
          <span className="text-[13px] uppercase font-bold tracking-[0.5em] text-white/40 block mb-6">{t.ourStory.ch2}</span>
          <h2 className="text-5xl md:text-7xl font-serif tracking-tighter leading-[1.1] break-keep">
            {t.ourStory.ch2Title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-24 items-center mb-40">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="aspect-[4/5] overflow-hidden">
            <img loading="lazy" src="/templates/museum/baldaquin.png" alt="Bernini's Baldaquin" className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-[2s]" />
          </motion.div>
          <div className="space-y-10">
            <span className="text-[13px] uppercase font-bold tracking-[0.5em] text-white/40">{t.ourStory.altar}</span>
            <h3 className="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tighter break-keep">
              {t.ourStory.altarTitle}
            </h3>
            <p className="text-lg text-white/60 font-normal leading-[1.4] break-keep">
              {t.ourStory.altarDesc}
            </p>
            <span className="text-[13px] uppercase font-bold tracking-[0.5em] text-white/20">{t.ourStory.altarDate}</span>
          </div>
        </div>

        {/* Papal Grottoes */}
        <div className="border-t border-white/5 pt-12 md:pt-24">
          <div className="mb-16">
            <span className="text-[13px] uppercase font-bold tracking-[0.5em] text-white/40 block mb-6">{t.ourStory.silentVatican}</span>
            <h3 className="text-4xl md:text-6xl font-serif tracking-tighter leading-[1.1] break-keep">
              {t.ourStory.grottoesTitle}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {grottoes.map((item: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }} className="group">
                <div className="aspect-[3/4] bg-white/5 mb-6 overflow-hidden">
                  <img loading="lazy" src={item.img} alt={item.name} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
                </div>
                <span className="text-[12px] uppercase font-bold tracking-[0.5em] text-white/40 mb-2 block">{item.title}</span>
                <h4 className="text-xl font-serif mb-3 break-keep">{item.name}</h4>
                <p className="text-sm font-normal leading-[1.4] text-white/50 break-keep">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20 md:py-32 lg:py-40 text-center px-6">
        <span className="text-[13px] uppercase font-bold tracking-[0.5em] text-white/40 block mb-8">{t.ourStory.exploreFurther}</span>
        <h3 className="text-5xl md:text-7xl font-serif tracking-tighter mb-16 break-keep">
          {t.ourStory.visitArchive}
        </h3>
        <Link
          href={`/en/templates/OHMT021-museum-EN/collections`}
          className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.5em] border border-white/20 px-10 py-6 hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 group"
        >
          {t.ourStory.exploreBtn}
          <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </section>

      </main>
      <Footer />
    </>

    </TemplateWrapper>
);
}


export default function MuseumInfo() {
  return (
    <React.Suspense fallback={null}>
      <MuseumInfoContent />
    </React.Suspense>
  );
}
