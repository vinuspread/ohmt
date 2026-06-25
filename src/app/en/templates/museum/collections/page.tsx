"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { collections } from "../data/collections";
import { Plus } from "lucide-react";
import Header from "../_components/layout/Header";
import Footer from "../_components/layout/Footer";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
const LIMIT_PER_PAGE = 10;

function CollectionsPageContent() {
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
    "badge": `Musei Vaticani - Oh My Template Curation`,
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
    "p3": `Every brushstroke captured by Raphael, every chisel strike endured by Michelangelo - these are not relics of the past. They are continuing dialogues on the nature of humanity, suffering, knowledge, and divinity.`,
    "curator": `Curator`,
    "curatorName": `Oh My Template Exhibition`
  },
  "ourStory": {
    "heritage": `MUSEI VATICANI - 500 YEARS OF HERITAGE`,
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
    "altarDate": `Construction: 1623 - 1634`,
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
const CATEGORIES = ["All", "Sculpture", "Fresco", "Marble"] as const;
  const categoryLabels: Record<string, string> = t.collectionsPage.categories || {
    "All": "All",
    "Sculpture": "Sculpture",
    "Fresco": "Fresco",
    "Marble": "Marble"
  };

  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("All");
  const [visibleCount, setVisibleCount] = useState(LIMIT_PER_PAGE);

  // Filter items based on active category
  const filteredItems = collections.filter(item => 
    activeCategory === "All" || item.category === activeCategory
  );

  // Reset count whenever category changes
  useEffect(() => {
    setVisibleCount(LIMIT_PER_PAGE);
  }, [activeCategory]);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + LIMIT_PER_PAGE);
  };

  return (

    <TemplateWrapper theme={theme}>

      <>
      <Header />
      <main className="antialiased min-h-screen bg-[var(--color-primary)] text-[var(--color-accent)] pt-16 md:pt-28 pb-20">
      
      {/* Intro & Stats Section */}
      <div className="px-6 md:px-16 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-6 items-end"
        >
          <div>
            <span className="text-[13px] uppercase font-bold tracking-[0.5em] text-white/40 block mb-6 px-1">{t.collectionsPage.category}</span>
            <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] tracking-tighter break-keep">{t.collectionsPage.title}</h1>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:gap-12 md:border-l md:border-white/10 md:pl-16 pt-4 md:pt-0 border-t border-white/10 md:border-t-0">
            <p className="text-sm md:text-base text-white/50 font-normal leading-[1.4] max-w-sm flex-1 break-keep">
              {t.collectionsPage.desc}
            </p>
            <div className="flex gap-8 md:gap-12 shrink-0">
              <div className="flex flex-col">
                <span className="text-5xl md:text-8xl font-serif leading-none">{collections.length}</span>
                <span className="text-[8px] uppercase tracking-widest text-white/30 mt-2">{t.collectionsPage.totalExhibits}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl md:text-8xl font-serif leading-none">54</span>
                <span className="text-[8px] uppercase tracking-widest text-white/30 mt-2">{t.collectionsPage.galleries}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="px-6 md:px-16 mb-10">
        <div className="flex items-center gap-2 pb-4 overflow-x-auto">
          <div className="flex gap-2 shrink-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-[13px] uppercase font-medium tracking-normal transition-all border whitespace-nowrap ${
                  activeCategory === cat 
                  ? "bg-[var(--color-accent)] text-[var(--color-primary)] border-[var(--color-accent)]" 
                  : "text-white/40 border-white/10 hover:border-white/40"
                }`}
              >
                {categoryLabels[cat] || cat}
              </button>
            ))}
          </div>
        </div>
        <div className="border-b border-white/10 pb-3">
          <span className="text-[13px] uppercase tracking-widest text-white/30 font-medium break-keep">
            {t.collectionsPage.showing.replace('{count}', displayedItems.length.toString()).replace('{total}', filteredItems.length.toString())}
          </span>
        </div>
      </div>

      {/* Optimized Asymmetric Grid (Preventing Flickers) */}
      <div className="px-6 md:px-16 min-h-[500px]">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence initial={false}>
            {displayedItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative group overflow-hidden bg-[var(--color-primary)] aspect-[3/4]"
                >
                  <Link href={`/en/templates/OHMT021-museum/collections/${item.slug}`} className="block w-full h-full cursor-pointer">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-[2s] ease-out grayscale group-hover:grayscale-0 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 md:p-12">
                         <span className="text-[12px] uppercase tracking-[0.4em] text-white/50 mb-3 block">{item.tag}</span>
                         <h3 className="text-2xl md:text-4xl font-serif break-keep">
                            {item.title}
                         </h3>
                    </div>

                    <div className="absolute top-8 left-8 mix-blend-difference overflow-hidden">
                       <span className="text-[13px] opacity-50 block group-hover:-translate-y-full transition-transform duration-300">{t.collectionsPage.exhibit}</span>
                    </div>
                  </Link>
                </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LOAD MORE BUTTON */}
        {hasMore && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 flex justify-center"
          >
            <button 
              onClick={handleLoadMore}
              className="group flex flex-col items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-all duration-300">
                <Plus size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              </div>
              <span className="text-[13px] uppercase font-medium tracking-normal text-white/40 group-hover:text-white transition-colors break-keep">
                {t.collectionsPage.loadMore}
              </span>
            </button>
          </motion.div>
        )}

        {filteredItems.length === 0 && (
          <div className="py-40 text-center w-full">
            <p className="text-xl font-serif text-white/30 break-keep">{t.collectionsPage.noExhibits}</p>
          </div>
        )}
      </div>

      </main>
      <Footer />
    </>

    </TemplateWrapper>
);
}


export default function CollectionsPage() {
  return (
    <React.Suspense fallback={null}>
      <CollectionsPageContent />
    </React.Suspense>
  );
}
