"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Header from "../_components/layout/Header";
import Footer from "../_components/layout/Footer";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
function SpecialExhibitionsContent() {
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
const specialExhibitionsData = t.exhibitionsPage.specialExhibitions;
  const specialExhibitions = [
    { ...specialExhibitionsData[0], img: "/templates/OHMT021-museum/exhibition-poster-vinci.png" },
    { ...specialExhibitionsData[1], img: "/templates/OHMT021-museum/exhibition-poster-greek.png" }
  ];

  const permanentGalleriesData = t.exhibitionsPage.permanentGalleries;
  const permanentGalleries = [
    { ...permanentGalleriesData[0], img: "/templates/OHMT021-museum/hero-bg.png" },
    { ...permanentGalleriesData[1], img: "/templates/OHMT021-museum/vatican-hallway.png" }
  ];

  return (

    <TemplateWrapper theme={theme}>

      <>
      <Header />
      <main className="antialiased bg-[var(--color-primary)] min-h-screen text-[var(--color-accent)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)] pb-16 md:pb-32 pt-20 md:pt-40">

      {/* Intro Section */}
      <section className="px-6 md:px-12 mb-20 md:mb-32 lg:mb-40 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <span className="text-[13px] uppercase font-bold tracking-[0.5em] text-white/40 mb-8 block font-sans">{t.exhibitionsPage.currentFeature}</span>
          <h2 className="text-5xl md:text-[7vw] font-serif leading-none tracking-tighter mb-12 break-keep">{t.exhibitionsPage.title}</h2>
        </motion.div>
      </section>

      {/* Poster Style Special Exhibitions */}
      <section className="max-w-[1440px] mx-auto px-6 space-y-20 md:space-y-32 lg:space-y-40 mb-32 md:mb-48 lg:mb-60">
        {specialExhibitions.map((exhib: any, i: number) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className={`relative aspect-[3/4] md:aspect-[4/5] overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}
            >
              <img 
                src={exhib.img} 
                alt={exhib.name} 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[3s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent opacity-60" />
            </motion.div>
            
            <div className={`space-y-6 ${i % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
              <span className="text-[12px] uppercase font-bold tracking-[0.6em] text-white/30 block mb-4 font-sans">{exhib.tag}</span>
              <h3 className="text-4xl md:text-6xl font-serif tracking-tighter leading-none mb-6 break-keep">{exhib.name}</h3>
              
              <div className={`flex flex-col gap-3 text-xs font-medium uppercase tracking-normal text-white/40 font-sans ${i % 2 === 1 ? 'lg:items-end' : ''}`}>
                 <div className="flex items-center gap-3"><Calendar size={14} strokeWidth={1.5} /> {exhib.period}</div>
                 <div className="flex items-center gap-3"><MapPin size={14} strokeWidth={1.5} /> {exhib.venue}</div>
              </div>

              <p className={`text-base md:text-lg text-white/60 font-normal leading-[1.4] max-w-md font-serif break-keep ${i % 2 === 1 ? 'lg:ml-auto' : ''}`}>
                "{exhib.desc}"
              </p>

              <div className={`pt-6 ${i % 2 === 1 ? 'lg:flex lg:justify-end' : ''}`}>
                <Link href={`/en/templates/OHMT021-museum/collections`} className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-normal group/btn px-8 py-3 border border-white/20 hover:bg-white hover:text-black transition-all">
                   {t.exhibitionsPage.viewCatalog} <ArrowRight size={13} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Permanent Gallery Selection */}
      <section className="py-10 md:py-20 md:py-32 lg:py-40 border-t border-white/5 px-6">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="mb-20">
            <span className="text-[13px] uppercase font-bold tracking-[0.5em] text-white/40 block mb-6">{t.exhibitionsPage.discovery}</span>
            <h3 className="text-4xl font-serif break-keep">{t.exhibitionsPage.permanentTitle}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {permanentGalleries.map((item: any, i: number) => (
                <div key={i} className="group cursor-pointer">
                   <div className="aspect-[21/9] overflow-hidden mb-8 bg-white/5 relative">
                      <img loading="lazy" src={item.img} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 brightness-50 group-hover:brightness-100" />
                   </div>
                   <h4 className="text-xl font-serif mb-2 tracking-wide break-keep">{item.name}</h4>
                   <p className="text-xs text-white/40 uppercase tracking-widest break-keep">{item.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </>

    </TemplateWrapper>
);
}


export default function SpecialExhibitions() {
  return (
    <React.Suspense fallback={null}>
      <SpecialExhibitionsContent />
    </React.Suspense>
  );
}
