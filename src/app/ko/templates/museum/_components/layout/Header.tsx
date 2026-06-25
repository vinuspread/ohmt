"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, Ticket, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import ReservationDrawer from "../common/ReservationDrawer";
import TotalMenu from "./TotalMenu";
import MobileBottomTabBar from "./MobileBottomTabBar";

// 밝은(흰색) 배경을 가진 페이지 경로 목록
const LIGHT_BG_ROUTES = [
  "/ko/templates/museum/souvenir",
  "/ko/templates/museum/sacred-vatican",
  "/ko/templates/museum/curator-note",
];

export default function Header() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 50);
    setHidden(latest > previous && latest > 150);
  });

  // 현재 페이지가 밝은 배경인지 판단 (pathname이 필요하므로 hooks 추가)
  // But the goal is to remove lang logic. We still need pathname for LIGHT_BG_ROUTES.
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
        className={`fixed top-0 w-full z-50 px-6 h-14 md:h-20 flex items-center justify-between transition-[background,border-color] duration-500 ${bgStyle} ${textColor}`}
      >
        {/* 좌측: Special Exhibition / Collections / Museum Info (데스크톱 전용) */}
        <div className="flex items-center gap-8 text-[13px] tracking-tight font-bold hidden md:flex w-1/3">
          <Link
            href="/ko/templates/museum/exhibitions"
            className="hover:opacity-50 transition-opacity underline-offset-8 hover:underline"
          >
            {"특별 전시"}
          </Link>
          <Link
            href="/ko/templates/museum/collections"
            className="hover:opacity-50 transition-opacity underline-offset-8 hover:underline"
          >
            {"소장품"}
          </Link>
          <Link
            href="/ko/templates/museum/our-story"
            className="hover:opacity-50 transition-opacity underline-offset-8 hover:underline"
          >
            {"미술관 안내"}
          </Link>
        </div>

        {/* 중앙: 로고 */}
        <Link
          href="/ko/templates/museum"
          className={`text-[15px] sm:text-[18px] md:text-2xl font-serif font-bold tracking-[0.2em] -mr-[0.2em] absolute left-1/2 -translate-x-1/2 cursor-pointer uppercase drop- transition-colors duration-500 ${logoColor}`}
        >
          Oh My Template
        </Link>

        {/* 우측: Tickets / Souvenir Shop (데스크톱 전용) / 메뉴 버튼 */}
        <div className="flex items-center justify-end gap-8 text-[13px] tracking-tight font-bold flex-1 md:flex-initial md:w-1/3">
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setIsReservationOpen(true)}
              className="hover:opacity-50 transition-opacity underline-offset-8 hover:underline"
            >
              {"티켓 예매"}
            </button>
            <Link
              href="/ko/templates/museum/souvenir"
              className="hover:opacity-50 transition-opacity underline-offset-8 hover:underline"
            >
              {"기념품샵"}
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






