"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const MOBILE_NAV_ITEMS_KO = [
  { href: "/ko#templates", label: "디자인" },
  { href: "/ko#pricing", label: "가격" },
  { href: "/ko#process", label: "진행 과정" },
  { href: "/ko#faq", label: "FAQ" },
  { href: "/ko/contact", label: "제작 상담", isCta: true },
];

const MOBILE_MENU_LIST_VARIANTS = {
  hidden: {},
  visible: { transition: { delayChildren: 0.38, staggerChildren: 0.065 } },
};

const MOBILE_MENU_ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 24, transition: { duration: 0.16 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE_OUT } },
};

export function SiteHeader() {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuOrigin, setMenuOrigin] = useState({ x: 0, y: 0 });
  const [menuRadius, setMenuRadius] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const lastScrollY = useRef(0);
  const navScrollLockRef = useRef(false);
  const navScrollLockTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hamburgerBtnRef = useRef<HTMLButtonElement | null>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const measureMenuOrigin = useCallback(() => {
    const rect = hamburgerBtnRef.current?.getBoundingClientRect();
    const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
    const origin = rect
      ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
      : { x: viewportWidth - 36, y: 32 };
    const corners = [
      { x: 0, y: 0 },
      { x: viewportWidth, y: 0 },
      { x: 0, y: viewportHeight },
      { x: viewportWidth, y: viewportHeight },
    ];
    const radius = Math.max(...corners.map((corner) => Math.hypot(corner.x - origin.x, corner.y - origin.y)));
    return { origin, radius };
  }, []);

  const handleOpenMenu = useCallback(() => {
    const { origin, radius } = measureMenuOrigin();
    setMenuOrigin(origin);
    setMenuRadius(radius);
    setMobileMenuOpen(true);
  }, [measureMenuOrigin]);

  const handleCloseMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const seedOrigin = () => {
      if (mobileMenuOpen) return;
      const { origin, radius } = measureMenuOrigin();
      setMenuOrigin(origin);
      setMenuRadius(radius);
    };
    seedOrigin();
    window.addEventListener("resize", seedOrigin);
    return () => window.removeEventListener("resize", seedOrigin);
  }, [measureMenuOrigin, mobileMenuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const triggerButton = hamburgerBtnRef.current;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => firstMenuItemRef.current?.focus());
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseMenu();
        return;
      }
      if (event.key !== "Tab" || !overlayRef.current) return;
      const focusable = overlayRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      triggerButton?.focus({ preventScroll: true });
    };
  }, [handleCloseMenu, mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (navScrollLockRef.current) {
        setHeaderVisible(true);
      } else if (currentY < 10) {
        setHeaderVisible(true);
      } else if (currentY < lastScrollY.current) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavAnchorClick = useCallback(() => {
    navScrollLockRef.current = true;
    setHeaderVisible(true);
    if (navScrollLockTimeoutRef.current) clearTimeout(navScrollLockTimeoutRef.current);
    navScrollLockTimeoutRef.current = setTimeout(() => {
      navScrollLockRef.current = false;
    }, 1000);
  }, []);

  return (
    <>
      <header className={`bg-white border-b border-zinc-200/60 px-5 sm:px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-40 transition-transform duration-300 dark:bg-zinc-900 dark:border-zinc-800 ${headerVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex items-center gap-8">
          <Link href="/ko" className="flex items-center gap-3 h-6">
            <Logo className="h-6 w-auto block" />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-[0.82rem] font-bold text-zinc-500 tracking-wider dark:text-zinc-400">
            <a href="/ko#templates" onClick={handleNavAnchorClick} className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">디자인</a>
            <a href="/ko#pricing" onClick={handleNavAnchorClick} className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">가격</a>
            <a href="/ko#process" onClick={handleNavAnchorClick} className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">진행 과정</a>
            <a href="/ko#faq" onClick={handleNavAnchorClick} className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">FAQ</a>
          </nav>
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <Link href="/en/contact" className="hidden sm:inline-flex text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors font-bold dark:text-zinc-500 dark:hover:text-zinc-100">
            EN
          </Link>
          <Link
            href="/ko/contact"
            className="inline-flex items-center justify-center bg-[#F1B100] hover:bg-[#d99e00] text-zinc-900 text-[0.7rem] sm:text-xs font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 transition-colors duration-200 rounded-full whitespace-nowrap"
          >
            제작 상담
          </Link>
          <button
            ref={hamburgerBtnRef}
            type="button"
            onClick={() => (mobileMenuOpen ? handleCloseMenu() : handleOpenMenu())}
            aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu-ko-board"
            className="md:hidden flex items-center justify-center w-8 h-8 text-zinc-700 hover:text-zinc-900 transition-colors dark:text-zinc-300 dark:hover:text-zinc-100"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <div
            ref={overlayRef}
            id="mobile-menu-ko-board"
            role="dialog"
            aria-modal="true"
            aria-label="모바일 메뉴"
            className="fixed inset-0 z-50 md:hidden"
          >
            <motion.div
              aria-hidden="true"
              initial={prefersReducedMotion ? { opacity: 0 } : { scale: 0, opacity: 1 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { scale: 0, opacity: 1 }}
              transition={prefersReducedMotion
                ? { duration: 0.2, ease: EASE_OUT }
                : { duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              style={{
                position: "fixed",
                left: menuOrigin.x - menuRadius,
                top: menuOrigin.y - menuRadius,
                width: menuRadius * 2,
                height: menuRadius * 2,
                borderRadius: "9999px",
                willChange: "transform",
              }}
              className="bg-zinc-950"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: prefersReducedMotion ? 0 : 0.32, duration: 0.2 } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="relative flex h-full flex-col text-white"
            >
              <div className="flex min-h-16 items-center justify-between gap-2 px-5 py-4 sm:px-6">
                <Link href="/ko" onClick={handleCloseMenu} className="flex h-6 shrink-0 items-center" aria-label="OH! MY TEMPLATES 홈">
                  <Image src="/logo_white.svg" alt="Oh My Template" width={228} height={62} className="block h-6 w-auto" style={{ height: "100%", width: "auto" }} priority />
                </Link>
                <button
                  type="button"
                  onClick={handleCloseMenu}
                  aria-label="메뉴 닫기"
                  className="flex h-10 w-10 shrink-0 items-center justify-center text-white outline-none transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F1B100] active:text-[#F1B100]"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex min-h-0 flex-1 flex-col justify-center px-5 pb-6 sm:px-6">
                <motion.ul
                  variants={MOBILE_MENU_LIST_VARIANTS}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="flex flex-col gap-2"
                >
                  {MOBILE_NAV_ITEMS_KO.map((item, index) => (
                    <motion.li key={item.href} variants={MOBILE_MENU_ITEM_VARIANTS}>
                      {item.href === "/ko/contact" ? (
                        <Link
                          ref={index === 0 ? firstMenuItemRef : undefined}
                          href={item.href}
                          onClick={handleCloseMenu}
                          className={`flex min-h-11 w-full items-center text-[clamp(1.5rem,9vw,2.75rem)] font-bold leading-[1.05] outline-none transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F1B100] active:translate-x-1 ${item.isCta ? "text-[#F1B100] active:text-[#d99e00]" : "text-white active:text-[#F1B100]"}`}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          ref={index === 0 ? firstMenuItemRef : undefined}
                          href={item.href}
                          onClick={() => { handleCloseMenu(); handleNavAnchorClick(); }}
                          className="flex min-h-11 w-full items-center text-[clamp(1.5rem,9vw,2.75rem)] font-bold leading-[1.05] text-white outline-none transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F1B100] active:translate-x-1 active:text-[#F1B100]"
                        >
                          {item.label}
                        </a>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: prefersReducedMotion ? 0 : 0.68, duration: 0.25, ease: EASE_OUT },
                  }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  className="mt-8 border-t border-zinc-800 pt-5"
                >
                  <Link href="/en/contact" onClick={handleCloseMenu} className="inline-flex min-h-11 items-center text-[1.375rem] font-bold text-zinc-300 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F1B100] active:text-[#F1B100]">
                    English
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
