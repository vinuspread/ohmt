"use client";

import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight, Menu, X, Search, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/Logo";
import { WebMcpTemplateSearch } from "@/components/WebMcpTemplateSearch";
import type { PricingPackage } from "@/types/template";

const HERO_SLIDES = [
  {
    heading: <>Proven design,<br className="hidden sm:block" /> <span className="text-[#F1B100]">built into your brand.</span></>,
    desc: "20 years of expertise, refined down to every detail.",
  },
  {
    heading: <>Custom features,<br /> <span className="text-[#F1B100]">built for your goals.</span></>,
    desc: "From memberships to bookings, extended exactly as you need.",
  },
  {
    heading: <>Ongoing support,<br className="hidden sm:block" /> <span className="text-[#F1B100]">even after launch.</span></>,
    desc: "Our dedicated team handles updates and fixes, fast.",
  },
];

export interface TemplateItem {
  id: string;
  name: string;
  url: string;
  desc: string;
  categories: string[];
  image: string;
  isFeatured?: boolean;
  slug: string;
  applicablePackages: string[];
  requiresConsultation: boolean;
  applicableIndustries: string[];
  hashtags: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const ALL_LABEL = "All";
const POPULAR_TAGS = ["Fashion", "Portfolio", "Agency", "Luxury", "Minimalist"];
const MOBILE_NAV_ITEMS_EN = [
  { href: "#directions", label: "How It Works" },
  { href: "#templates", label: "Design" },
  { href: "#pricing", label: "Pricing" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "/en/contact", label: "Get Started", isCta: true },
];
const MOBILE_MENU_LIST_VARIANTS = {
  hidden: {},
  visible: { transition: { delayChildren: 0.38, staggerChildren: 0.065 } },
};
const MOBILE_MENU_ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 24, transition: { duration: 0.16 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE_OUT } },
};

const serviceCardsEn = [
  {
    title: "Without dedicated specialists, planning content and building pages can feel overwhelming.",
    case1: "It is hard to know which pages you need or how to arrange copy and content so it connects with your audience.",
    case2: "Weeks can disappear into messaging, navigation, and image sourcing when you should be focused on your business.",
    solution: "A professional planner helps shape your page structure, messaging, navigation, and imagery.",
  },
  {
    title: "High outsourcing costs still make timelines and quality difficult to guarantee.",
    case1: "Custom development can become expensive quickly, while repeated revisions continue to push the launch date back.",
    case2: "Starting every project from scratch increases both the budget and the risk of a longer production timeline.",
    solution: "Faster decisions reduce both cost and production time.",
  },
  {
    title: "Even small post-launch edits mean finding another agency or freelancer.",
    case1: "Once the site launches, the original vendor may become hard to reach and even minor changes can cost extra time and money.",
    case2: "There is often no dedicated team to handle ongoing copy, image, and feature updates after launch.",
    solution: "A dedicated team supports ongoing edits and maintenance after launch.",
  },
];

const caseAvatarsEn = [
  ["/icons/avata_03.png", "/icons/avata_01.png"],
  ["/icons/avata_01.png", "/icons/avata_02.png"],
  ["/icons/avata_02.png", "/icons/avata_03.png"],
];

const modelStepsEn = [
  { step: "01", title: "Choose a direction", desc: "Pick the template direction that fits your industry and brand tone first." },
  { step: "02", title: "Expert production", desc: "Designers and developers adjust color, copy, imagery, and structure to fit your real brand." },
  { step: "03", title: "Launch and operate", desc: "After deployment, a Care plan carries you through edits, updates, and ongoing support." },
];

const directionsEn = [
  { badge: "Recommended", title: "Brand Launch", desc: "Recommended when building a new brand's website.", category: "Brand & Creative", filterCategory: "corporate" },
  { badge: "Recommended", title: "Clinic / Hospital", desc: "Recommended for trustworthy medical and professional-service sites.", category: "Professional Services", filterCategory: "corporate" },
  { badge: "Recommended", title: "Studio / Portfolio", desc: "Great for a portfolio structure where the work takes center stage.", category: "Portfolio & Agency", filterCategory: "portfolio" },
  { badge: "By Industry", title: "F&B / Storefront", desc: "Fits a structure centered on menu, storefront, and reservations.", category: "F&B", filterCategory: "retail" },
  { badge: "By Industry", title: "B2B Service", desc: "Recommended when trust signals and inquiries need to stand out.", category: "Business & Tech", filterCategory: "corporate" },
  { badge: "By Industry", title: "Event / Promotion", desc: "Fits a campaign structure built for short bursts of impact.", category: "Event & Campaign", filterCategory: "retail" },
];

const carePlansEn = [
  {
    title: "Basic Care",
    price: "$150/mo (excl. VAT)",
    desc: "We handle error checks and simple copy or image edits.",
    features: ["Error fixes within the original scope", "Copy and image swaps", "Link and inquiry form checks", "2 small edit requests per month"],
    note: "New pages or features aren't included.",
  },
  {
    title: "Growth Care",
    price: "$300/mo (excl. VAT)",
    desc: "For sites that need regular content updates.",
    features: ["Everything in Basic Care", "4 content update requests per month", "Improvements to existing pages", "Event and promotion rollout"],
    note: "New feature development or major structural changes require a separate quote.",
  },
  {
    title: "Managed Care",
    price: "Custom quote",
    desc: "A plan for companies that want to hand off day-to-day site operations to a dedicated team.",
    features: ["A dedicated account manager", "Regular content updates", "Edits on your operating schedule", "Monthly activity summary"],
    note: "We provide a quote after reviewing your operating scope and request frequency.",
  },
];

function SectionHeadingEn({ label, title, desc, titleClassName }: { label?: string; title: React.ReactNode; desc?: React.ReactNode; titleClassName?: string }) {
  return (
    <div className="ohmt-section-heading">
      {label && <span className="ohmt-section-label">{label}</span>}
      <h2 className={`ohmt-section-title${titleClassName ? ` ${titleClassName}` : ""}`}>{title}</h2>
      {desc && <p className="ohmt-section-desc text-pretty">{desc}</p>}
    </div>
  );
}

function shuffleTemplates(list: TemplateItem[]): TemplateItem[] {
  const result = [...list];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function LandingPageClient({ templates: templatesProp, faqs, packages }: { templates: TemplateItem[]; faqs: FaqItem[]; packages: PricingPackage[] }) {
  const router = useRouter();
  const [templates, setTemplates] = useState(templatesProp);
  useEffect(() => {
    setTemplates(shuffleTemplates(templatesProp));
  }, [templatesProp]);
  const [heroIndex, setHeroIndex] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuOrigin, setMenuOrigin] = useState({ x: 0, y: 0 });
  const [menuRadius, setMenuRadius] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL_LABEL);
  const [showAllTemplates, setShowAllTemplates] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [descModalTemplate, setDescModalTemplate] = useState<TemplateItem | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
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

  // Seed the hamburger button's real position as soon as it's mounted (and keep it
  // fresh on resize/orientation change) so the very first open never falls back to
  // the {0,0} default, which some Android browsers were observed to briefly paint.
  useEffect(() => {
    const seedOrigin = () => {
      if (mobileMenuOpen) return; // never move the origin out from under an open/animating menu
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

  const restartInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7800);
  }, []);

  const goPrev = useCallback(() => {
    setHeroIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    restartInterval();
  }, [restartInterval]);

  const goNext = useCallback(() => {
    setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    restartInterval();
  }, [restartInterval]);

  useEffect(() => {
    import("@/lib/supabase/client").then(({ createClient }) => {
      createClient().auth.getUser().then(({ data }) => {
        if (data.user) setIsAdmin(true);
      });
    });
  }, []);

  useEffect(() => {
    restartInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [restartInterval]);

  const websiteOrganizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://ohmt.site/#website",
        url: "https://ohmt.site",
        name: "Oh My Template",
        description: "Premium Next.js web templates for brands, agencies, and creators.",
        inLanguage: ["en", "ko"],
        potentialAction: {
          "@type": "SearchAction",
          target: "https://ohmt.site/en?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://ohmt.site/#organization",
        name: "Oh My Template",
        url: "https://ohmt.site",
        email: "vinus@vinus.co.kr",
        description: "Premium Next.js web templates for brands, agencies, and creators. Fully customized by our team in 2 weeks.",
        sameAs: [],
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Oh My Template — Template Collection",
    description: "Premium Next.js web templates",
    url: "https://ohmt.site/en",
    numberOfItems: templates.length,
    itemListElement: templates.map((template, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: template.name,
      description: template.desc,
      url: `https://ohmt.site${template.url}`,
      image: template.image ? `https://ohmt.site${template.image}` : undefined,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const categories = useMemo(() => {
    const seen = new Set<string>();
    const result: string[] = [ALL_LABEL];
    for (const t of templates) {
      for (const c of t.categories) {
        if (!seen.has(c)) {
          seen.add(c);
          result.push(c);
        }
      }
    }
    return result;
  }, [templates]);

  const filteredTemplates = useMemo(() => {
    return templates.filter(t => {
      const matchCategory = activeCategory === ALL_LABEL || t.categories.includes(activeCategory);
      const matchSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.categories.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          t.hashtags.some((h) => h.replace(/^#/, "").toLowerCase().includes(searchTerm.toLowerCase())) ||
                          t.applicableIndustries.some((i) => i.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchTerm, templates]);

  useEffect(() => {
    setShowAllTemplates(false);
  }, [filteredTemplates]);

  const goToContact = (packageId?: string, template?: TemplateItem) => {
    const params = new URLSearchParams();
    if (packageId) params.set("package", packageId);
    if (template) {
      params.set("template", template.name);
      params.set("image", template.image);
      params.set("category", template.categories.join(", "));
      params.set("template_slug", template.slug);
    }
    router.push(`/en/contact?${params.toString()}`);
  };

  const scrollToTemplates = (category?: string) => {
    if (category) setActiveCategory(category);
    document.getElementById("templates")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-[#FCFCFD] text-zinc-900 font-sans selection:bg-[#F1B100] selection:text-zinc-900 overflow-x-hidden antialiased dark:bg-zinc-950 dark:text-zinc-100 pt-[64px]">
      <WebMcpTemplateSearch lang="en" templates={templatesProp} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteOrganizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <header className={`bg-white border-b border-zinc-200/60 px-5 sm:px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-40 transition-transform duration-300 dark:bg-zinc-900 dark:border-zinc-800 ${headerVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex items-center gap-8">
          <Link href="/en" className="flex items-center gap-3 h-6">
            <Logo className="h-6 w-auto block" />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-[0.82rem] font-bold text-zinc-500 uppercase tracking-wider dark:text-zinc-400">
            <a href="#directions" onClick={handleNavAnchorClick} className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">How It Works</a>
            <a href="#templates" onClick={handleNavAnchorClick} className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">Design</a>
            <a href="#pricing" onClick={handleNavAnchorClick} className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">Pricing</a>
            <a href="#process" onClick={handleNavAnchorClick} className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">Process</a>
            <a href="#faq" onClick={handleNavAnchorClick} className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">FAQ</a>
          </nav>
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <Link href="/ko" className="hidden sm:inline-flex text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors font-bold dark:text-zinc-500 dark:hover:text-zinc-100">
            KR
          </Link>
          <Link
            href="/en/contact"
            className="inline-flex items-center justify-center bg-[#F1B100] hover:bg-[#d99e00] text-zinc-900 text-[0.7rem] sm:text-xs uppercase tracking-widest font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 transition-colors duration-200 rounded-full whitespace-nowrap"
          >
            Get Started
          </Link>
          <button
            ref={hamburgerBtnRef}
            type="button"
            onClick={() => (mobileMenuOpen ? handleCloseMenu() : handleOpenMenu())}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu-en"
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
            id="mobile-menu-en"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Reveal background: a circle scaled from the hamburger button's
                center. transform: scale() is reliably GPU-composited on every
                platform (unlike clip-path, which some Android Chrome builds
                animate unreliably), so this is the actual visual "circular
                reveal" rather than an inline-style clip-path animation. */}
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
              <Link href="/en" onClick={handleCloseMenu} className="flex h-6 shrink-0 items-center" aria-label="OH! MY TEMPLATES home">
                <Image src="/logo_white.svg" alt="Oh My Template" width={228} height={62} className="block h-6 w-auto" style={{ height: "100%", width: "auto" }} priority />
              </Link>
              <button
                type="button"
                onClick={handleCloseMenu}
                aria-label="Close menu"
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
                {MOBILE_NAV_ITEMS_EN.map((item, index) => (
                  <motion.li key={item.href} variants={MOBILE_MENU_ITEM_VARIANTS}>
                    {item.href.startsWith("/") ? (
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
                <Link href="/ko" onClick={handleCloseMenu} className="inline-flex min-h-11 items-center text-[1.375rem] font-bold text-zinc-300 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F1B100] active:text-[#F1B100]">
                  Korean
                </Link>
              </motion.div>
            </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-20 pb-9 bg-white border-b border-zinc-200/50 relative overflow-hidden dark:bg-zinc-900 dark:border-zinc-800">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#F1B100]/8 via-[#F1B100]/4 to-transparent blur-[120px] rounded-full pointer-events-none" />

        <div className="relative">
          <button onClick={goPrev} aria-label="Previous" className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 items-center justify-center rounded-full border border-zinc-200 bg-white/80 hover:bg-white text-zinc-400 hover:text-zinc-900 backdrop-blur-sm transition-all dark:border-zinc-700 dark:bg-zinc-800/80 dark:hover:bg-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-100">
            <ChevronLeft size={18} />
          </button>
          <button onClick={goNext} aria-label="Next" className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 items-center justify-center rounded-full border border-zinc-200 bg-white/80 hover:bg-white text-zinc-400 hover:text-zinc-900 backdrop-blur-sm transition-all dark:border-zinc-700 dark:bg-zinc-800/80 dark:hover:bg-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-100">
            <ChevronRight size={18} />
          </button>

          <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-bold uppercase tracking-wider rounded-full dark:bg-zinc-800 dark:text-zinc-300">
              <Sparkles size={12} className="text-[#F1B100]" />
              OH! MY TEMPLATES
            </span>
            <div className="mt-10">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`heading-${heroIndex}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: EASE_OUT }}
                  className="text-[2.1rem] sm:text-[2.8rem] md:text-[4.25rem] font-bold tracking-tight leading-[1.25] md:leading-[1.1] text-zinc-900 dark:text-zinc-100"
                >
                  {HERO_SLIDES[heroIndex].heading}
                </motion.h1>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${heroIndex}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.05 }}
                className="mt-3 md:mt-6 text-[1rem] md:text-xl text-zinc-500 font-normal leading-relaxed tracking-tight whitespace-pre-line max-w-2xl mx-auto dark:text-zinc-400"
              >
                {HERO_SLIDES[heroIndex].desc}
              </motion.p>
            </AnimatePresence>
            <div className="flex justify-center gap-1.5 mt-10">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === heroIndex ? "bg-zinc-500 w-4 dark:bg-zinc-400" : "w-1.5 bg-zinc-300 dark:bg-zinc-600"}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative mt-10 sm:mt-16 w-full overflow-hidden select-none pointer-events-auto">
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none dark:from-zinc-900" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none dark:from-zinc-900" />
          <div className="flex gap-4 sm:gap-6 py-6 sm:py-8 animate-marquee">
            {[...templates, ...templates].map((template, idx) => (
              <Link
                href={template.url}
                key={`${template.id}-${idx}`}
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
                className="group flex-shrink-0 w-[192px] md:w-[320px] bg-white border border-zinc-200/60 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-300 pointer-events-auto dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:shadow-zinc-900/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-50 dark:bg-zinc-700">
                  <img src={template.image} alt={template.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out" />
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[0.6rem] font-bold text-zinc-400 uppercase tracking-widest dark:text-zinc-500">{template.categories.join(", ")}</span>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{template.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-28 bg-[#FCFCFD] border-b border-zinc-200/50 dark:bg-zinc-950 dark:border-zinc-800">
        <div className="max-w-[1440px] mx-auto space-y-9 md:space-y-12">
          <SectionHeadingEn
            title={<>When you start building a website,<br /><span className="text-[#F1B100]">this is where most people get stuck.</span></>}
            desc={<>DIY takes too long, and outsourcing feels like too much.<br />OHMT gives you a way to start right away.</>}
            titleClassName="text-[28px]! sm:text-4xl! md:text-5xl!"
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
            {serviceCardsEn.map((item, idx) => (
              <div key={item.title} className="flex h-full flex-col rounded-xl border border-zinc-200/60 bg-white p-6 lg:p-7 dark:border-zinc-700 dark:bg-zinc-800">
                <h3 className="w-full text-balance text-left text-lg font-bold leading-snug text-zinc-900 md:min-h-[56px] md:text-xl dark:text-zinc-100">{item.title}</h3>
                <div className="mb-6 mt-5 space-y-3">
                  <div className="flex items-start gap-3 rounded-xl border border-amber-200/70 bg-amber-50 p-4 dark:border-amber-900/40 dark:bg-amber-500/10">
                    <Image src={caseAvatarsEn[idx][0]} alt="" width={28} height={28} className="mt-0.5 shrink-0 rounded-full" />
                    <p className="text-[13px] leading-6 text-zinc-600 dark:text-zinc-300">{item.case1}</p>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-amber-200/70 bg-amber-50 p-4 dark:border-amber-900/40 dark:bg-amber-500/10">
                    <Image src={caseAvatarsEn[idx][1]} alt="" width={28} height={28} className="mt-0.5 shrink-0 rounded-full" />
                    <p className="text-[13px] leading-6 text-zinc-600 dark:text-zinc-300">{item.case2}</p>
                  </div>
                </div>
                <div className="mt-auto flex items-start gap-3 border-t border-zinc-200/60 pt-5 dark:border-zinc-700">
                  <Image src="/icon.png" alt="" width={28} height={28} className="mt-0.5 shrink-0 rounded-full" />
                  <p className="text-[13px] font-bold leading-6 text-zinc-900 dark:text-zinc-100">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Model Section */}
      <section className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-28 bg-white border-b border-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="max-w-[1440px] mx-auto space-y-9 md:space-y-12">
          <SectionHeadingEn
            title={<>We don&apos;t sell templates.<br /><span className="text-[#F1B100]">We customize them to your brand.</span></>}
            desc={<>Choose a template that fits your concept,<br />and we build a website optimized for your brand.</>}
          />
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-0">
            {modelStepsEn.map((item, idx) => (
              <React.Fragment key={item.step}>
                <div className="flex-1 flex flex-col items-center text-center gap-3 rounded-xl border border-zinc-200/60 bg-white p-4 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:px-8 dark:border-zinc-700 dark:bg-zinc-800 dark:md:bg-transparent">
                  <span className="inline-flex w-9 h-9 shrink-0 rounded-full bg-zinc-900 dark:bg-zinc-100 items-center justify-center text-xs font-extrabold font-mono text-white dark:text-zinc-950 md:w-11 md:h-11 md:text-sm">{item.step}</span>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-bold text-zinc-900 md:mt-5 md:text-lg dark:text-zinc-100">{item.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-6 text-zinc-500 md:mt-3 md:text-sm md:leading-relaxed dark:text-zinc-400">{item.desc}</p>
                  </div>
                </div>
                {idx < modelStepsEn.length - 1 && (
                  <div className="flex items-center justify-center text-zinc-300 dark:text-zinc-600" aria-hidden="true">
                    <ChevronDown size={20} className="md:hidden" />
                    <ChevronRight size={20} className="hidden md:block" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section id="directions" className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-28 bg-[#FCFCFD] border-b border-zinc-200/50 dark:bg-zinc-950 dark:border-zinc-800">
        <div className="max-w-[1440px] mx-auto space-y-9 md:space-y-12">
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <SectionHeadingEn
              label="Direction"
              title={<>A template isn&apos;t the final product,<br /><span className="text-[#F1B100]">it&apos;s where your brand direction starts.</span></>}
              desc={<>Choose the direction that fits your industry and goals,<br />and jump straight to the recommended template list.</>}
            />
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/en/contact" className="w-[140px] sm:w-[200px] md:w-[240px] inline-flex items-center justify-center rounded-full bg-[#F1B100] px-6 md:px-8 py-3.5 md:py-4 text-xs sm:text-sm md:text-base font-extrabold text-zinc-900 transition-colors hover:bg-[#d99e00] whitespace-nowrap">
                Book a Consultation
              </Link>
              <button onClick={() => scrollToTemplates(ALL_LABEL)} className="w-[140px] sm:w-[200px] md:w-[240px] bg-white border border-zinc-200/70 hover:border-zinc-400 text-zinc-800 text-xs sm:text-sm md:text-base font-bold px-5 md:px-8 py-3 md:py-4 rounded-full transition-colors whitespace-nowrap">
                View All Templates
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {directionsEn.map((item) => (
              <button
                key={item.title}
                onClick={() => scrollToTemplates(item.filterCategory)}
                className="group relative text-left bg-white border border-zinc-200/60 rounded-xl p-4 sm:p-5 md:p-7 hover:border-zinc-400 transition-colors dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-500"
              >
                <span className="absolute top-4 right-4 sm:top-5 sm:right-5 md:top-7 md:right-7 inline-flex items-center justify-center w-8 h-8 rounded-full border border-zinc-200 text-zinc-400 transition-colors group-hover:border-zinc-400 group-hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-500 dark:group-hover:border-zinc-500 dark:group-hover:text-zinc-100">
                  <ArrowUpRight size={16} />
                </span>
                <div className="flex items-center gap-3 pr-10">
                  <span className="text-[0.62rem] font-bold uppercase tracking-widest text-[#F1B100]">{item.badge}</span>
                </div>
                <h3 className="mt-2 pr-10 text-base sm:text-lg md:text-xl font-bold text-zinc-900 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">{item.title}</h3>
                <p className="mt-2 text-[13px] sm:text-sm leading-6 sm:leading-relaxed text-zinc-500 dark:text-zinc-400">{item.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="px-5 sm:px-6 md:px-12 lg:px-20 py-10 md:py-12 bg-[#F7F7F8] dark:bg-zinc-950">
        <div className="max-w-[1440px] mx-auto space-y-8 md:space-y-12">
          <div className="max-w-[760px] mx-auto space-y-3 text-center">
            <span className="ohmt-section-label">Templates Gallery</span>
            <h2 className="ohmt-section-title">Find the template you&apos;re looking for.</h2>
            <p className="mx-auto max-w-[62ch] text-sm sm:text-lg leading-relaxed text-zinc-500 text-pretty dark:text-zinc-400">Our experts customize it to match your brand.</p>
          </div>

          {/* Search */}
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" size={18} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search templates by industry or style"
                className="w-full rounded-lg border border-zinc-200 bg-white py-3.5 pl-12 pr-10 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100">
                  <X size={16} />
                </button>
              )}
            </div>
            <div className="mt-4 flex flex-nowrap items-center gap-2 overflow-x-auto scrollbar-hide text-xs md:flex-wrap md:justify-center md:overflow-visible">
              <span className="shrink-0 font-medium text-zinc-400 dark:text-zinc-500">Popular keywords:</span>
              {POPULAR_TAGS.map((tag) => (
                <button key={tag} onClick={() => setSearchTerm(tag)} className="shrink-0 rounded bg-white px-2.5 py-1 text-zinc-600 transition-colors hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700">
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-start gap-2 overflow-x-auto scrollbar-hide border-b border-zinc-200/60 md:justify-center md:overflow-visible dark:border-zinc-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setSearchTerm(""); }}
                className={`relative shrink-0 px-4 pb-4 pt-2.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${activeCategory === cat ? "text-zinc-950 font-extrabold dark:text-zinc-100" : "text-zinc-400 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-100"}`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div layoutId="activeCategoryBorderEn" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F1B100]" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
              </button>
            ))}
          </div>

          {(searchTerm || activeCategory !== ALL_LABEL) && (
            <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider dark:text-zinc-400">
              Found {filteredTemplates.length} templates
            </div>
          )}

          {/* Grid */}
          <div className="space-y-6 md:space-y-8">
            {filteredTemplates.length === 0 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center space-y-4">
                <p className="text-zinc-400 font-medium dark:text-zinc-500">No templates match your search.</p>
                <button onClick={() => { setSearchTerm(""); setActiveCategory(ALL_LABEL); }} className="text-xs font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-900 pb-0.5 dark:text-zinc-100 dark:border-zinc-100">
                  Reset Filters
                </button>
              </motion.div>
            ) : (
              <div className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-6">
                  {(showAllTemplates ? filteredTemplates : filteredTemplates.slice(0, 8)).map((template, idx) => (
                    <motion.div
                      key={template.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25, delay: showAllTemplates && idx >= 8 ? (idx - 8) * 0.04 : 0 }}
                      className="group bg-white border border-zinc-200/60 hover:border-zinc-300 transition-all duration-300 rounded-xl overflow-hidden dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600"
                    >
                        <Link href={template.url} target="_blank" rel="noopener noreferrer" prefetch={false} className="relative aspect-[16/8] sm:aspect-[16/9] lg:aspect-[16/10] block overflow-hidden bg-zinc-50 dark:bg-zinc-700">
                          <img src={template.image} alt={template.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" />
                        </Link>
                        <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-2 lg:gap-3">
                          <div>
                            <div className="flex items-center justify-between gap-2">
                              <h4 className="truncate text-base sm:text-lg font-bold leading-tight text-zinc-900 dark:text-zinc-100">{template.name}</h4>
                              <button
                                onClick={() => goToContact('professional', template)}
                                className="shrink-0 inline-flex items-center justify-center whitespace-nowrap bg-zinc-900 hover:bg-zinc-700 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-colors dark:bg-zinc-700 dark:hover:bg-zinc-600"
                              >
                                Get Started
                              </button>
                            </div>
                            <p className="mt-0.5 font-mono text-[0.7rem] leading-tight text-zinc-400 dark:text-zinc-500">{template.slug}</p>
                          </div>
                          <div className="space-y-3">
                            <p
                              onClick={() => template.desc && setDescModalTemplate(template)}
                              className={`text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal dark:text-zinc-400 line-clamp-1 ${template.desc ? "cursor-pointer hover:text-zinc-700 dark:hover:text-zinc-300" : ""}`}
                            >
                              {template.desc}
                            </p>
                            {template.desc && (
                              <button onClick={() => setDescModalTemplate(template)} className="block leading-none text-[10px] font-bold text-zinc-400 hover:text-zinc-700 transition-colors dark:text-zinc-500 dark:hover:text-zinc-300">
                                More
                              </button>
                            )}
                          </div>
                        </div>
                    </motion.div>
                  ))}
                </div>
                {!showAllTemplates && filteredTemplates.length > 8 && (
                  <button onClick={() => setShowAllTemplates(true)} className="ohmt-show-more-btn">
                    Show More Templates
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-32 bg-[#FCFCFD] border-t border-zinc-200/50 dark:bg-zinc-950 dark:border-zinc-800">
        <div className="max-w-[1280px] mx-auto space-y-10 md:space-y-16">
          <div className="mx-auto max-w-[840px] space-y-4 text-center">
            <span className="ohmt-section-label">Price Package</span>
            <h2 className="ohmt-section-title mx-auto max-w-[820px]">Choose the package that fits your project.</h2>
            <p className="ohmt-section-desc max-w-[72ch] text-pretty">
              Pricing varies based on the number of pages, revision scope,<br className="hidden sm:block" />
              {" "}additional features, and ongoing support.
            </p>
          </div>

          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-5 px-5 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`shrink-0 w-[68%] sm:w-[280px] snap-center relative min-w-0 rounded-xl p-5 border-2 transition-all duration-300 md:w-auto md:shrink md:snap-none md:p-6 ${
                  pkg.is_recommended
                    ? 'bg-[#FFFBEB] border-[#F1B100] shadow-lg shadow-[#F1B100]/10 dark:bg-zinc-800 dark:border-[#F1B100]'
                    : 'bg-white border-transparent border-zinc-200/60 hover:border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600'
                }`}
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{pkg.name}</h3>
                      {pkg.is_recommended && (
                        <span className="inline-flex items-center rounded-full bg-[#F1B100] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-zinc-900">
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-zinc-400 dark:text-zinc-500">{pkg.description}</p>
                  </div>
                  <div>
                    <span className="break-words text-3xl font-extrabold text-zinc-900 [overflow-wrap:anywhere] sm:text-4xl dark:text-zinc-100">{pkg.price}</span>
                    <span className="text-xs text-zinc-400 font-medium block mt-1 dark:text-zinc-500">Delivery: {pkg.duration}</span>
                  </div>
                  <ul className="space-y-3.5 pt-6 border-t border-zinc-100 dark:border-zinc-700">
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx} className="flex min-w-0 items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                        <span className="text-[#F1B100] font-bold flex-shrink-0">✓</span>
                        <span className="min-w-0 break-words [overflow-wrap:anywhere]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-[720px] space-y-2 text-center text-xs font-normal leading-relaxed text-zinc-600 sm:text-sm dark:text-zinc-400">
            <p className="text-pretty">
              After you submit an inquiry, our team will confirm the scope<br className="hidden sm:block" />
              {" "}by email or an online meeting and provide a detailed quote.
            </p>
            {!packages.some((pkg) => /\b(?:VAT|tax(?:es)?)\b/i.test(pkg.price)) && (
              <p>Taxes, if applicable, are quoted separately.</p>
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-32 bg-white border-t border-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="max-w-[1440px] mx-auto space-y-10 md:space-y-16">
          <div className="mx-auto max-w-[840px] space-y-4 text-center">
            <span className="ohmt-section-label">Process</span>
            <h2 className="ohmt-section-title mx-auto max-w-[820px]">How your website comes together.</h2>
            <p className="ohmt-section-desc max-w-[68ch] text-pretty">From consultation to planning, production, and post-launch support, all in one flow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 md:gap-2">
            {[
              { step: "01", title: 'Consultation', desc: <>We confirm your industry, purpose, budget,<br />and target launch date.</> },
              { step: "02", title: 'Choose Direction', desc: <>We settle on a template and page structure<br />that fits your brand.</> },
              { step: "03", title: 'Production', desc: <>Copy, imagery, and layout are built out<br />to match your brand.</> },
              { step: "04", title: 'Launch', desc: <>We QA every feature,<br />then launch the site.</> },
              { step: "05", title: 'Operate', desc: <>Basic support is included,<br />with professional Care plans available for more.</> }
            ].map((item, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="flex items-start gap-4 bg-[#FCFCFD] border border-zinc-200/60 p-4 sm:p-6 rounded-xl text-left sm:gap-6 hover:border-zinc-300 transition-colors duration-200 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600 md:flex-col md:items-center md:gap-3 md:text-center">
                  <span className="w-9 shrink-0 text-lg font-bold leading-none text-zinc-400 font-mono dark:text-zinc-500 sm:w-auto sm:text-xl">{item.step}</span>
                  <div className="flex-1 space-y-1 md:flex-none">
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed font-normal dark:text-zinc-400">{item.desc}</p>
                  </div>
                </div>
                {idx < arr.length - 1 && (
                  <div className="hidden md:flex items-center justify-center text-zinc-300 dark:text-zinc-600">
                    <ChevronRight size={20} strokeWidth={2.5} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Care Section */}
      <section id="care" className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-32 bg-[#FCFCFD] border-t border-zinc-200/50 dark:bg-zinc-950 dark:border-zinc-800">
        <div className="max-w-[1280px] mx-auto space-y-9 md:space-y-12">
          <SectionHeadingEn
            label="Maintenance"
            title={<>The support you need most after launch,<br />we can handle that too.</>}
            desc={<>From fixing errors to updating copy, images, and content,<br />choose the plan that matches what you need.</>}
          />
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-5 px-5 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:items-stretch">
            {carePlansEn.map((plan, idx) => (
              <div
                key={plan.title}
                className={idx === 1
                  ? "shrink-0 w-[72%] sm:w-[300px] snap-center flex flex-col gap-4 bg-[#FFFBEB] border-2 border-[#F1B100] rounded-xl p-5 shadow-lg shadow-[#F1B100]/10 md:w-auto md:shrink md:snap-none md:gap-5 md:p-7 dark:bg-zinc-800 dark:border-[#F1B100]"
                  : "shrink-0 w-[72%] sm:w-[300px] snap-center flex flex-col gap-4 bg-white border border-zinc-200/60 rounded-xl p-4 hover:border-zinc-300 transition-colors md:w-auto md:shrink md:snap-none md:gap-5 md:p-7 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600"
                }
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">{plan.title}</h3>
                  <p className="text-base sm:text-lg font-extrabold leading-none text-[#F1B100] md:text-xl">{plan.price}</p>
                  <p className="text-xs sm:text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{plan.desc}</p>
                </div>
                <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-[#F1B100] font-bold flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-4 sm:pt-5 border-t border-zinc-100 text-[11px] sm:text-xs leading-relaxed text-zinc-400 dark:border-zinc-700 dark:text-zinc-500">{plan.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="ohmt-final-cta">
        <div className="ohmt-final-cta-inner">
          <div className="space-y-3">
            <h2 className="ohmt-final-cta-title">Start fast with a site built for your brand</h2>
            <p className="ohmt-final-cta-desc">Choose an industry direction and a candidate template, and the consultation can start.</p>
            <Link href="/en/contact" className="ohmt-text-cta">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-32 bg-white border-t border-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="max-w-[1440px] mx-auto space-y-10 md:space-y-16">
          <div className="mx-auto max-w-[840px] space-y-4 text-center">
            <span className="ohmt-section-label">FAQ</span>
            <h2 className="text-[1.375rem] sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-100">Frequently Asked Questions</h2>
            <p className="ohmt-section-desc max-w-[68ch] text-pretty">Common pre-project questions are collected here. We can answer the rest during consultation.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-xl border bg-[#FCFCFD] transition-colors duration-200 dark:bg-zinc-800 ${
                  openFAQ === idx
                    ? 'border-[#F1B100] dark:border-[#F1B100]'
                    : 'border-zinc-200/60 hover:border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-600'
                }`}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-zinc-50 transition-colors duration-300 dark:hover:bg-zinc-700"
                >
                  <span className="font-bold text-left text-[15px] md:text-base text-zinc-800 dark:text-zinc-200">{faq.question}</span>
                  <ChevronDown size={16} className={`flex-shrink-0 text-zinc-400 transition-transform duration-300 dark:text-zinc-500 ${openFAQ === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {openFAQ === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: EASE_OUT }}
                      className="overflow-hidden border-t border-zinc-200/60 bg-white dark:border-zinc-700 dark:bg-zinc-800"
                    >
                      <div className="px-6 py-5 text-sm text-zinc-500 leading-relaxed font-normal whitespace-pre-line dark:text-zinc-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200/60 bg-[#FCFCFD] px-5 py-12 sm:px-6 sm:py-14 md:px-12 lg:px-20 lg:py-16 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col items-start justify-between gap-9 md:flex-row md:gap-12">
            <div>
              <Link href="/en" className="flex h-6 w-fit items-center" aria-label="OH! MY TEMPLATES Home">
                <Logo className="block h-6 w-auto" />
              </Link>
              <p className="mt-5 text-sm font-normal leading-[1.7] text-zinc-600 dark:text-zinc-400">
                We build brand-fit websites on proven templates.
              </p>
            </div>

            <nav aria-label="Footer navigation" className="flex flex-row flex-wrap items-center gap-3 text-sm font-bold text-zinc-600 dark:text-zinc-400">
              <Link href="/en/contact" className="text-[#F1B100] transition-colors hover:text-[#d99e00]">Get Started</Link>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">|</span>
              <Link href="/en/privacy-policy" className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-100">Privacy Policy</Link>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">|</span>
              <Link href="/ko" className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-100">Korean</Link>
              {isAdmin && (
                <>
                  <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">|</span>
                  <Link href="/admin/templates" className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-100">Admin</Link>
                </>
              )}
            </nav>
          </div>

          <div className="mt-10 border-t border-zinc-200/80 pt-8 text-[0.75rem] font-normal leading-[1.8] text-zinc-600 sm:text-[0.8125rem] dark:border-zinc-800 dark:text-zinc-400">
            <div className="hidden space-y-0.5 md:block">
              <p>Vinus Spread Inc. <span aria-hidden="true">|</span> CEO Sungyoung Han <span aria-hidden="true">|</span> Business Reg. No. 305-86-09778</p>
              <p>12F 1202, 227 Gonghang-daero, Gangseo-gu, Seoul, South Korea (Magok-dong, Magok Central Tower 1)</p>
              <p>
                Tel <a href="tel:02-3661-1907" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">02-3661-1907</a>
                <span aria-hidden="true"> | </span>
                Site <a href="https://www.vinus.co.kr" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">https://www.vinus.co.kr</a>
                <span aria-hidden="true"> | </span>
                Email <a href="mailto:vinus@vinus.co.kr" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">vinus@vinus.co.kr</a>
              </p>
            </div>

            <div className="space-y-5 md:hidden">
              <div>
                <p>Vinus Spread Inc. · CEO Sungyoung Han</p>
                <p>Business Reg. No. 305-86-09778</p>
              </div>
              <address className="not-italic">
                12F 1202, 227 Gonghang-daero,<br />
                Gangseo-gu, Seoul, South Korea
              </address>
              <div className="flex flex-col items-start">
                <a href="tel:02-3661-1907" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">02-3661-1907</a>
                <a href="https://www.vinus.co.kr" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">https://www.vinus.co.kr</a>
                <a href="mailto:vinus@vinus.co.kr" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">vinus@vinus.co.kr</a>
              </div>
            </div>
          </div>

          <p className="mt-6 text-[0.6875rem] font-normal leading-relaxed text-zinc-500 dark:text-zinc-500">
            &copy; 2026 Oh My Template by Vinus Spread. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Template Description Modal */}
      <AnimatePresence>
        {descModalTemplate && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDescModalTemplate(null)}
            />
            <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none">
              <motion.div
                className="pointer-events-auto bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-700 rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl"
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[0.65rem] text-zinc-400 font-bold uppercase tracking-wider dark:text-zinc-500">{descModalTemplate.categories.join(", ")}</span>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{descModalTemplate.name}</h3>
                    </div>
                    <button type="button" onClick={() => setDescModalTemplate(null)} className="text-zinc-400 hover:text-zinc-900 transition-colors dark:text-zinc-500 dark:hover:text-zinc-100" aria-label="Close">
                      <X size={20} />
                    </button>
                  </div>
                  {descModalTemplate.applicableIndustries.length > 0 && (
                    <div className="space-y-1">
                      <p className="text-[0.65rem] text-zinc-400 font-bold uppercase tracking-wider dark:text-zinc-500">Applicable Industries</p>
                      <p className="text-base font-medium" style={{ color: "#F1B100" }}>
                        {descModalTemplate.applicableIndustries.join(", ")}
                      </p>
                    </div>
                  )}
                  <p className="text-base text-zinc-900 leading-relaxed font-normal whitespace-pre-line dark:text-white">{descModalTemplate.desc}</p>
                  {descModalTemplate.hashtags.length > 0 && (
                    <p className="text-sm text-zinc-400 dark:text-zinc-500">{descModalTemplate.hashtags.join(" ")}</p>
                  )}
                  <Link href={descModalTemplate.url} target="_blank" rel="noopener noreferrer" prefetch={false} className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 hover:text-zinc-600 transition-colors dark:text-zinc-100 dark:hover:text-zinc-400">
                    Live Preview <ArrowUpRight size={12} />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
