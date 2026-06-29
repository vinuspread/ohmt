"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Header from "../_components/layout/Header";
import Footer from "../_components/layout/Footer";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
function CuratorNotePageContent() {
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
    "badge": `Musei Vaticani - OHMT Curation`,
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
    "curatorName": `OHMT Exhibition`
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
return (
  <TemplateWrapper theme={theme}>
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-accent)] text-[var(--color-primary)] pt-20 md:pt-40 pb-16 md:pb-32">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-black/40 block mb-6">{t.curatorNote.editorial}</span>
          <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] tracking-tighter break-keep">{t.curatorNote.title}</h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="aspect-[21/9] w-full bg-black mb-24 overflow-hidden relative"
        >
          <img 
            src="/templates/museum/curator.png" 
            alt="Curator Note Architecture"
            className="w-full h-full object-cover grayscale opacity-90"
          />
        </motion.div>

        <motion.article 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="prose prose-lg md:prose-xl font-serif mx-auto text-black/80 leading-[1.4]"
        >
          <p className="first-letter:text-7xl first-letter:font-bold first-letter:float-left first-letter:mr-4 first-letter:mt-2 break-keep">
            {t.curatorNote.p1}
          </p>
          <p className="mt-8 break-keep">
            {t.curatorNote.p2}
          </p>
          <p className="mt-8 break-keep">
            {t.curatorNote.p3}
          </p>
          
          <div className="border-t border-black/20 mt-20 pt-10">
            <span className="text-xs uppercase tracking-[0.4em] font-bold block mb-2">{t.curatorNote.curator}</span>
            <span className="font-serif text-2xl">{t.curatorNote.curatorName}</span>
          </div>
        </motion.article>

      </div>
      </main>
      <Footer />
    </>
  </TemplateWrapper>
);
}


export default function CuratorNotePage() {
  return (
    <React.Suspense fallback={null}>
      <CuratorNotePageContent />
    </React.Suspense>
  );
}
