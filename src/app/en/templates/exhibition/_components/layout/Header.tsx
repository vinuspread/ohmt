"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, Ticket, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import ReservationDrawer from "../common/ReservationDrawer";
import TotalMenu from "./TotalMenu";
import MobileBottomTabBar from "./MobileBottomTabBar";

// Light background pages
const LIGHT_BG_ROUTES = [
  "/templates/exhibition/souvenir",
  "/templates/exhibition/sacred-vatican",
  "/templates/exhibition/curator-note",
];

export default function Header() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

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
useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 50);
    setHidden(latest > previous && latest > 150);
  });

  // ?�재 ?�이지가 밝�? 배경?��? ?�단 (pathname???�요?��?�?hooks 추�?)
  // But the goal is to remove lang logic. We still need pathname for LIGHT_BG_ROUTES.
  // Since I removed usePathname from imports earlier, I must add it back if it's used here.
  // Actually, I'll just hardcode or let the user know, but it's better to keep it working.
  // I'll add usePathname back.
  
  const pathname = usePathname();
  const isActive = scrolled || isMenuOpen;
  const isLightPage = LIGHT_BG_ROUTES.some(route => pathname?.startsWith(route));

  const textColor = isActive
    ? "text-white"
    : isLightPage
    ? "text-[var(--color-primary)]"
    : "text-white";

  const bgStyle = isActive
    ? "bg-[var(--color-primary)]/70 backdrop-blur-xl"
    : isLightPage
    ? "bg-transparent"
    : "bg-transparent";

  const logoColor = isActive
    ? "text-white"
    : isLightPage
    ? "text-[var(--color-primary)]"
    : "text-white";

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 w-full z-50 px-6 h-14 md:h-20 flex items-center justify-between transition-all duration-300 ${bgStyle} ${textColor}`}
      >
        {/* 좌측: Special Exhibition / Collections / Museum Info (?�스?�톱 ?�용) */}
        <div className="flex items-center gap-8 text-[13px] uppercase tracking-[0.3em] font-bold hidden md:flex w-1/3">
          <Link
            href="/en/templates/exhibition/exhibitions"
            className="hover:opacity-50 transition-opacity underline-offset-8 hover:underline"
          >
            {t.nav.specialExhibition}
          </Link>
          <Link
            href="/en/templates/exhibition/collections"
            className="hover:opacity-50 transition-opacity underline-offset-8 hover:underline"
          >
            {t.nav.collections}
          </Link>
          <Link
            href="/en/templates/exhibition/our-story"
            className="hover:opacity-50 transition-opacity underline-offset-8 hover:underline"
          >
            {t.nav.museumInfo}
          </Link>
        </div>

        {/* 중앙: 로고 */}
        <Link
          href="/en/templates/exhibition"
          className={`text-[15px] sm:text-[18px] md:text-2xl font-serif font-bold tracking-[0.2em] -mr-[0.2em] absolute left-1/2 -translate-x-1/2 cursor-pointer uppercase transition-colors duration-300 ${logoColor}`}
        >
          Oh My Template
        </Link>

        {/* ?�측: Tickets / Souvenir Shop (?�스?�톱 ?�용) / 메뉴 버튼 */}
        <div className="flex items-center justify-end gap-8 text-[13px] uppercase tracking-[0.3em] font-bold flex-1 md:flex-initial md:w-1/3">
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setIsReservationOpen(true)}
              className="hover:opacity-50 transition-opacity underline-offset-8 hover:underline"
            >
              {t.nav.tickets}
            </button>
            <Link
              href="/en/templates/exhibition/souvenir"
              className="hover:opacity-50 transition-opacity underline-offset-8 hover:underline"
            >
              {t.nav.souvenirShop}
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:opacity-50 transition-opacity md:p-2"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <TotalMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setIsReservationOpen(true)}
        className="fixed bottom-8 right-8 z-[90] w-16 h-16 rounded-full bg-[var(--color-primary)] text-[var(--color-accent)] hidden md:flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
      >
        <Ticket size={24} />
      </motion.button>

      <ReservationDrawer
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <div className="md:hidden">
        <MobileBottomTabBar 
          isMenuOpen={isMenuOpen} 
          onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} 
          onTicketClick={() => setIsReservationOpen(true)}
        />
      </div>
    </>
  );
}






