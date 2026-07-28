"use client";

import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight, Menu, X, Search, Sparkles, Wrench, ImageOff, Shuffle, ClipboardList, PackageOpen } from "lucide-react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/Logo";
import type { PricingPackage } from "@/types/template";

export interface TemplateItem {
  id: string;
  name: string;
  url: string;
  desc: string;
  category: string;
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
const ALL_LABEL = "전체";
const POPULAR_TAGS = ["패션", "포트폴리오", "에이전시", "럭셔리", "미니멀"];

const HERO_SLIDES = [
  {
    heading: <>완성된 시스템으로 <br className="hidden sm:block" /><span className="text-[#FFB800]">비즈니스를 시작하세요.</span></>,
    desc: "수많은 프리미엄 템플릿과 전담 팀의 커스터마이징으로\n2주 안에 완성된 웹사이트를 제공합니다.",
  },
  {
    heading: <>원하는 기능을 <br className="hidden sm:block" /><span className="text-[#FFB800]">그대로 담아드립니다.</span></>,
    desc: "구현하고 싶은 기능이 있으신가요?\n회원 연동, 예약, 결제까지 비즈니스에 맞게 추가해 완성합니다.",
  },
  {
    heading: <>관리와 유지보수도 <br className="hidden sm:block" /><span className="text-[#FFB800]">안심하세요.</span></>,
    desc: "비즈니스는 런칭 후부터 시작됩니다.\n운영 중 발생하는 문제를 전담 팀이 신속하게 대응합니다.",
  },
];

const serviceCardsKo = [
  { icon: Wrench, title: "제작 과정의 많은 선택", desc: "디자인, 문구, 이미지, 구성, 기능까지 하나씩 결정하다 보면 예상보다 많은 시간과 에너지가 필요합니다." },
  { icon: ImageOff, title: "콘텐츠 준비의 막막함", desc: "무엇을 넣어야 할지, 어떤 순서로 보여줘야 할지 정리되지 않으면 제작은 시작해도 오픈까지 이어지기 어렵습니다." },
  { icon: Shuffle, title: "화면보다 중요한 흐름", desc: "보기 좋은 디자인도 중요하지만, 고객이 이해하고 신뢰하고 문의하게 만드는 구조가 함께 필요합니다." },
  { icon: ClipboardList, title: "처음부터 부담스러운 외주", desc: "기획, 디자인, 개발을 모두 새로 시작하면 비용과 일정이 커지고 결정해야 할 것도 많아집니다." },
  { icon: PackageOpen, title: "오픈 이후의 운영 부담", desc: "웹사이트는 완성 후에도 문구 수정, 이미지 교체, 오류 확인, 콘텐츠 업데이트가 계속 필요합니다." },
];

const modelStepsKo = [
  { step: "01", title: "방향성 선택", desc: "업종과 브랜드 톤에 맞는 템플릿 방향을 고릅니다." },
  { step: "02", title: "전문가 제작", desc: "카피, 이미지, 구조를 브랜드에 맞게 조정합니다." },
  { step: "03", title: "오픈과 운영", desc: "배포 후 수정과 업데이트를 이어갑니다." },
];

const directionsKo = [
  { badge: "추천", title: "브랜드 런칭", desc: "신규 브랜드의 첫 공식 사이트를 빠르게 엽니다.", category: "브랜드 & 크리에이티브" },
  { badge: "추천", title: "병원/클리닉", desc: "신뢰가 먼저 보이는 의료, 전문직 사이트를 만듭니다.", category: "F&B & 서비스업" },
  { badge: "추천", title: "스튜디오/포트폴리오", desc: "작업물이 주인공이 되는 포트폴리오 구조를 고릅니다.", category: "브랜드 & 크리에이티브" },
  { badge: "업종별", title: "F&B / 매장", desc: "메뉴, 매장, 예약 흐름이 중심인 구조로 시작합니다.", category: "F&B & 서비스업" },
  { badge: "업종별", title: "B2B 서비스", desc: "신뢰 지표와 도입 문의가 잘 보이는 구조를 잡습니다.", category: "비즈니스 & 테크" },
  { badge: "업종별", title: "이벤트/프로모션", desc: "짧은 기간에 임팩트가 필요한 캠페인형 흐름입니다.", category: "리테일 & 커머스" },
];

const carePlansKo = [
  { title: "Basic Care", price: "월 20만원 (VAT별도)", desc: "오류 대응과 작은 수정으로 운영 안정성을 챙깁니다." },
  { title: "Growth Care", price: "월 40만원 (VAT별도)", desc: "콘텐츠 업데이트, 페이지 보완, 캠페인 반영을 포함합니다." },
  { title: "Managed Care", price: "별도협의", desc: "운영 대행, SLA, 상시 응대가 필요한 팀용 플랜입니다." },
];

function SectionHeadingKo({ label, title, desc }: { label?: string; title: React.ReactNode; desc?: React.ReactNode }) {
  return (
    <div className="ohmt-section-heading">
      {label && <span className="ohmt-section-label">{label}</span>}
      <h2 className="ohmt-section-title">{title}</h2>
      {desc && <p className="ohmt-section-desc text-pretty">{desc}</p>}
    </div>
  );
}

export default function LandingPageClient({ templates, faqs, packages }: { templates: TemplateItem[]; faqs: FaqItem[]; packages: PricingPackage[] }) {
  const router = useRouter();
  const [heroIndex, setHeroIndex] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL_LABEL);
  const [showAllTemplates, setShowAllTemplates] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [descModalTemplate, setDescModalTemplate] = useState<TemplateItem | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) {
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

  const restartInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
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
        description: "브랜드, 에이전시, 크리에이터를 위한 프리미엄 Next.js 웹 템플릿 서비스.",
        inLanguage: ["en", "ko"],
        potentialAction: {
          "@type": "SearchAction",
          target: "https://ohmt.site/ko?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://ohmt.site/#organization",
        name: "Oh My Template",
        url: "https://ohmt.site",
        email: "vinus@vinus.co.kr",
        description: "브랜드, 에이전시, 크리에이터를 위한 프리미엄 Next.js 웹 템플릿 서비스.",
        sameAs: [],
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Oh My Template — 템플릿 컬렉션",
    description: "프리미엄 Next.js 웹 템플릿",
    url: "https://ohmt.site/ko",
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
      if (!seen.has(t.category)) {
        seen.add(t.category);
        result.push(t.category);
      }
    }
    return result;
  }, [templates]);

  const filteredTemplates = useMemo(() => {
    return templates.filter(t => {
      const matchCategory = activeCategory === ALL_LABEL || t.category === activeCategory;
      const matchSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.category.toLowerCase().includes(searchTerm.toLowerCase());
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
      params.set("category", template.category);
      params.set("template_slug", template.slug);
    }
    router.push(`/ko/contact?${params.toString()}`);
  };

  const scrollToTemplates = (category?: string) => {
    if (category) setActiveCategory(category);
    document.getElementById("templates")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-[#FCFCFD] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white overflow-x-hidden antialiased break-keep dark:bg-zinc-950 dark:text-zinc-100 pt-[64px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteOrganizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <header className={`bg-white border-b border-zinc-200/60 px-5 sm:px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-40 transition-transform duration-300 dark:bg-zinc-900 dark:border-zinc-800 ${headerVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex items-center gap-8">
          <Link href="/ko" className="flex items-center gap-3 h-6">
            <Logo className="h-6 w-auto block" />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-[0.82rem] font-bold text-zinc-500 tracking-wider dark:text-zinc-400">
            <a href="#directions" className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">서비스소개</a>
            <a href="#templates" className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">템플릿</a>
            <a href="#pricing" className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">가격</a>
            <a href="#process" className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">프로세스</a>
            <a href="#faq" className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">FAQ</a>
          </nav>
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <Link href="/en" className="hidden sm:inline-flex text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors font-bold dark:text-zinc-500 dark:hover:text-zinc-100">
            EN
          </Link>
          <Link
            href="/ko/contact"
            className="inline-flex items-center justify-center bg-[#F1B100] hover:bg-[#d99e00] text-zinc-900 text-[0.7rem] sm:text-xs font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 transition-colors duration-200 rounded-md whitespace-nowrap"
          >
            제작 상담 신청
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden flex items-center justify-center w-8 h-8 text-zinc-700 hover:text-zinc-900 transition-colors dark:text-zinc-300 dark:hover:text-zinc-100"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden fixed top-[64px] left-0 right-0 z-30 bg-white border-b border-zinc-200/60 px-5 py-4 flex flex-col gap-4 text-sm font-bold text-zinc-600 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300"
          >
            <a href="#directions" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">서비스소개</a>
            <a href="#templates" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">템플릿</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">가격</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">프로세스</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">FAQ</a>
            <Link href="/en" onClick={() => setMobileMenuOpen(false)} className="sm:hidden text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors dark:text-zinc-500 dark:hover:text-zinc-100">
              EN
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-20 pb-9 bg-white border-b border-zinc-200/50 relative overflow-hidden dark:bg-zinc-900 dark:border-zinc-800">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-amber-500/5 via-orange-500/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

        <div className="relative">
          <button onClick={goPrev} aria-label="이전" className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 bg-white/80 hover:bg-white text-zinc-400 hover:text-zinc-900 backdrop-blur-sm transition-all dark:border-zinc-700 dark:bg-zinc-800/80 dark:hover:bg-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-100">
            <ChevronLeft size={18} />
          </button>
          <button onClick={goNext} aria-label="다음" className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 bg-white/80 hover:bg-white text-zinc-400 hover:text-zinc-900 backdrop-blur-sm transition-all dark:border-zinc-700 dark:bg-zinc-800/80 dark:hover:bg-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-100">
            <ChevronRight size={18} />
          </button>

          <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-bold uppercase tracking-wider rounded-full dark:bg-zinc-800 dark:text-zinc-300">
              <Sparkles size={12} className="text-orange-500" />
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
                  className="text-[3rem] md:text-[4.8rem] font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100"
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
                className="mt-6 text-lg md:text-xl text-zinc-500 font-normal leading-relaxed tracking-tight whitespace-pre-line max-w-2xl mx-auto dark:text-zinc-400"
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
                  aria-label={`${i + 1}번 메시지`}
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
                className="group flex-shrink-0 w-[240px] md:w-[280px] bg-white border border-zinc-200/60 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-300 pointer-events-auto dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:shadow-zinc-900/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-50 dark:bg-zinc-700">
                  <img src={template.image} alt={template.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out" />
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[0.6rem] font-bold text-zinc-400 uppercase tracking-widest dark:text-zinc-500">{template.category}</span>
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
          <SectionHeadingKo
            title="웹사이트가 필요한 순간, 대부분 여기서 막힙니다."
            desc="직접 만들면 오래 걸리고, 외주는 부담스럽습니다. OHMT는 바로 실행할 수 있는 제작 기준을 제공합니다."
          />
          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-6">
            {serviceCardsKo.map((item, idx) => (
              <div key={item.title} className={`flex gap-4 bg-white border border-zinc-200/60 rounded-xl p-5 hover:border-zinc-300 transition-colors sm:block sm:p-6 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600 ${idx < 3 ? "md:col-span-2" : "md:col-span-3"}`}>
                <item.icon size={28} strokeWidth={1.7} className="mt-0.5 shrink-0 text-zinc-900 sm:mt-0 dark:text-zinc-100" />
                <div className="min-w-0">
                  <h3 className="text-[15px] font-bold text-zinc-900 sm:mt-4 sm:text-[17px] dark:text-zinc-100">{item.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-6 text-zinc-500 sm:mt-2 sm:text-sm sm:leading-relaxed dark:text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-4 rounded-xl bg-zinc-950 p-5 md:grid-cols-[220px_1fr] md:items-center md:p-6 dark:bg-white">
            <p className="text-sm font-extrabold text-white dark:text-zinc-950">Ohmytemplate의 해결방식</p>
            <div className="grid gap-3 text-sm text-zinc-300 dark:text-zinc-700 md:grid-cols-3 md:divide-x md:divide-zinc-700 dark:md:divide-zinc-200">
              {["제작 범위를 먼저 정리합니다.", "카피와 이미지를 실제 브랜드에 맞춥니다.", "오픈 후 수정과 운영 기준을 남깁니다."].map((text, idx) => (
                <div key={text} className="flex items-start gap-3 md:px-5 first:md:pl-0 last:md:pr-0">
                  <span className="font-mono text-xs font-bold text-[#F1B100]">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="leading-6">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Model Section */}
      <section className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-28 bg-white border-b border-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="max-w-[1440px] mx-auto space-y-9 md:space-y-12">
          <SectionHeadingKo
            title={<>OHMT는 템플릿 판매 사이트가 아닙니다.<br />템플릿 기반의 맞춤 제작 서비스입니다.</>}
            desc={<>완전히 빈 화면에서 시작하지 않습니다.<br />검증된 템플릿을 기준으로 방향을 고르고, 실제 브랜드에 맞게 완성합니다.</>}
          />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-0 md:divide-x md:divide-zinc-200 dark:md:divide-zinc-700">
            {modelStepsKo.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center gap-3 rounded-xl border border-zinc-200/60 bg-white p-4 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:px-8 first:md:pl-0 last:md:pr-0 dark:border-zinc-700 dark:bg-zinc-800 dark:md:bg-transparent">
                <span className="inline-flex w-9 h-9 shrink-0 rounded-full bg-zinc-900 dark:bg-zinc-100 items-center justify-center text-xs font-extrabold font-mono text-white dark:text-zinc-950 md:w-11 md:h-11 md:text-sm">{item.step}</span>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-bold text-zinc-900 md:mt-5 md:text-lg dark:text-zinc-100">{item.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-6 text-zinc-500 md:mt-3 md:text-sm md:leading-relaxed dark:text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-zinc-950 px-6 py-7 text-center text-white md:px-8 dark:bg-black">
            <p className="mx-auto text-[15px] font-bold tracking-tight sm:text-lg md:text-xl">저렴한 진입 가격, 전문가 커스터마이즈, 운영 지원까지 한 번의 계약으로 이어집니다.</p>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section id="directions" className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-28 bg-[#FCFCFD] border-b border-zinc-200/50 dark:bg-zinc-950 dark:border-zinc-800">
        <div className="max-w-[1440px] mx-auto space-y-9 md:space-y-12">
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <SectionHeadingKo
              label="Direction"
              title={<>템플릿은 상품이 아니라,<br />제작 방향을 고르는 기준입니다.</>}
              desc="업종과 목적에 맞는 방향을 고르면 아래 갤러리로 바로 이동합니다."
            />
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/ko/contact" className="inline-flex items-center justify-center rounded-md bg-[#222222] px-6 py-3.5 text-xs font-extrabold text-[#F1B100] transition-colors hover:bg-[#2B2B2B] hover:text-[#F1B100]">
                상담하기
              </Link>
              <button onClick={() => scrollToTemplates(ALL_LABEL)} className="bg-white border border-zinc-200/70 hover:border-zinc-400 text-zinc-800 text-xs font-bold px-5 py-3 rounded-md transition-colors dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100">
                전체 템플릿 보기
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {directionsKo.map((item) => (
              <button
                key={item.title}
                onClick={() => scrollToTemplates(item.category)}
                className="group text-left bg-white border border-zinc-200/60 rounded-xl p-4 sm:p-5 md:p-7 hover:border-zinc-400 transition-colors dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-500"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[0.62rem] font-bold text-[#F1B100]">{item.badge}</span>
                  <span className="text-[0.62rem] font-bold text-zinc-400">{item.category}</span>
                </div>
                <h3 className="mt-2 text-base sm:text-lg md:text-xl font-bold text-zinc-900 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">{item.title}</h3>
                <p className="mt-2 text-[13px] sm:text-sm leading-6 sm:leading-relaxed text-zinc-500 dark:text-zinc-400">{item.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="px-5 sm:px-6 md:px-12 lg:px-20 py-10 md:py-12 bg-[#F7F7F8] dark:bg-zinc-950">
        <div className="max-w-[1440px] mx-auto space-y-8 md:space-y-12">
          <div className="max-w-3xl mx-auto space-y-3 text-center">
            <span className="ohmt-section-label">Templates Gallery</span>
            <h2 className="ohmt-section-title">완성품이 아닙니다.<br />당신 브랜드에 맞게 처음부터 만들어집니다.</h2>
            <p className="text-sm sm:text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">아래 템플릿은 빠르게 시작하기 위한 검증된 출발점입니다.</p>
          </div>

          {/* Search */}
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" size={18} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="템플릿 검색 (예: 패션, 에이전시, 에디토리얼...)"
                className="w-full rounded-lg border border-zinc-200 bg-white py-3.5 pl-12 pr-10 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100">
                  <X size={16} />
                </button>
              )}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="font-medium text-zinc-400 dark:text-zinc-500">빠른 선택:</span>
              {POPULAR_TAGS.map((tag) => (
                <button key={tag} onClick={() => setSearchTerm(tag)} className="rounded bg-white px-2.5 py-1 text-zinc-600 transition-colors hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700">
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="md:hidden">
            <label className="mb-2 block text-[0.62rem] font-extrabold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">카테고리</label>
            <select
              value={activeCategory}
              onChange={(e) => { setActiveCategory(e.target.value); setSearchTerm(""); }}
              className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-bold text-zinc-900 outline-none transition-colors focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-500"
            >
              {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div className="hidden md:flex justify-center gap-2 border-b border-zinc-200/60 pb-2 dark:border-zinc-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setSearchTerm(""); }}
                className={`px-4 py-2.5 text-xs font-bold tracking-wider relative whitespace-nowrap transition-colors ${activeCategory === cat ? "text-zinc-950 font-extrabold dark:text-zinc-100" : "text-zinc-400 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-100"}`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div layoutId="activeCategoryBorderKo" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F1B100]" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
              </button>
            ))}
          </div>

          {(searchTerm || activeCategory !== ALL_LABEL) && (
            <div className="text-xs text-zinc-500 font-bold tracking-wider dark:text-zinc-400">
              {filteredTemplates.length}개의 템플릿
            </div>
          )}

          {/* Grid */}
          <div className="space-y-6 md:space-y-8">
            {filteredTemplates.length === 0 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center space-y-4">
                <p className="text-zinc-400 font-medium dark:text-zinc-500">검색 결과가 없습니다.</p>
                <button onClick={() => { setSearchTerm(""); setActiveCategory(ALL_LABEL); }} className="text-xs font-bold text-zinc-900 border-b border-zinc-900 pb-0.5 dark:text-zinc-100 dark:border-zinc-100">
                  필터 초기화
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
                        <Link href={template.url} target="_blank" rel="noopener noreferrer" className="relative aspect-[16/8] sm:aspect-[16/9] lg:aspect-[16/10] block overflow-hidden bg-zinc-50 dark:bg-zinc-700">
                          <img src={template.image} alt={template.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" />
                        </Link>
                        <div className="p-4 sm:p-5 lg:p-6 space-y-3 lg:space-y-4">
                          <div className="space-y-1">
                            <h4 className="truncate text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100">{template.name}</h4>
                            <p className="flex items-center gap-1.5 text-[0.65rem] text-zinc-400 font-bold tracking-wider dark:text-zinc-500">
                              <span>{template.category}</span>
                              <span className="text-zinc-300 dark:text-zinc-600">·</span>
                              <span className="font-mono">{template.slug}</span>
                            </p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal dark:text-zinc-400 line-clamp-2">{template.desc}</p>
                            {template.desc && (
                              <button onClick={() => setDescModalTemplate(template)} className="text-[10px] font-bold text-zinc-400 hover:text-zinc-700 transition-colors dark:text-zinc-500 dark:hover:text-zinc-300">
                                더보기
                              </button>
                            )}
                          </div>
                          <div className="flex items-center justify-between gap-2 pt-2 sm:pt-4 border-t border-zinc-100 dark:border-zinc-700">
                            <Link
                              href={template.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 whitespace-nowrap text-zinc-500 hover:text-zinc-900 text-[10px] sm:text-[11px] font-bold transition-colors dark:text-zinc-400 dark:hover:text-zinc-100"
                            >
                              템플릿보기 <ArrowUpRight size={11} />
                            </Link>
                            <button
                              onClick={() => goToContact('professional', template)}
                              className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap bg-zinc-900 hover:bg-zinc-700 text-white text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1.5 rounded transition-colors dark:bg-zinc-700 dark:hover:bg-zinc-600"
                            >
                              상담하기
                            </button>
                          </div>
                        </div>
                    </motion.div>
                  ))}
                </div>
                {!showAllTemplates && filteredTemplates.length > 8 && (
                  <button onClick={() => setShowAllTemplates(true)} className="ohmt-show-more-btn">
                    템플릿 더보기
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-32 bg-[#FCFCFD] border-t border-zinc-200/50 dark:bg-zinc-950 dark:border-zinc-800">
        <div className="max-w-[1440px] mx-auto space-y-10 md:space-y-16">
          <div className="space-y-4 text-center">
            <span className="ohmt-section-label">Price Package</span>
            <h2 className="ohmt-section-title">외주보다 빠르고, DIY보다 완성도 있습니다.</h2>
            <p className="ohmt-section-desc">정확한 견적은 상담 후 확정됩니다. 먼저 필요한 제작 밀도와 운영 범위를 가늠할 수 있게 가격대를 공개합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-xl p-6 border transition-all duration-300 dark:bg-zinc-800 dark:border-zinc-700 ${
                  pkg.is_recommended ? 'border-[#F1B100]/50 dark:border-[#F1B100]/40' : 'border-zinc-200/60 hover:border-zinc-300 dark:hover:border-zinc-600'
                }`}
              >
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{pkg.name}</h3>
                    <p className="text-sm text-zinc-400 dark:text-zinc-500">{pkg.description}</p>
                  </div>
                  <div className="border-t border-zinc-100 dark:border-zinc-700 pt-6">
                    <span className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">{pkg.price}</span>
                    <span className="text-xs text-zinc-400 font-medium block mt-1 dark:text-zinc-500">평균 소요 기간: {pkg.duration} / 부가세별도</span>
                  </div>
                  <ul className="space-y-3.5 pt-6 border-t border-zinc-100 dark:border-zinc-700">
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx} className="flex gap-2.5 items-start text-sm text-zinc-600 dark:text-zinc-400">
                        <span className="text-[#F1B100] font-bold flex-shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p className="ohmt-note-line">
            가격 표기 원칙: 페이지 수, 커스터마이징 범위, 기능 연동, 운영 빈도에 따라 최종 견적이 달라집니다. 상담에서 먼저 범위를 좁힌 뒤 확정 견적을 드립니다.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-32 bg-white border-t border-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="max-w-[1440px] mx-auto space-y-10 md:space-y-16">
          <div className="space-y-4 text-center">
            <span className="ohmt-section-label">Process</span>
            <h2 className="ohmt-section-title">상담에서 운영까지 이어지는 5단계</h2>
            <p className="ohmt-section-desc">템플릿 선택만으로 끝내지 않고, 방향 설정부터 오픈 이후 대응까지 같은 흐름에서 관리합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 md:gap-2">
            {[
              { step: "01", title: '상담', desc: '업종, 목적, 예산, 오픈 희망일을 확인합니다.' },
              { step: "02", title: '방향 선택', desc: '브랜드 톤에 맞는 방향과 섹션을 정합니다.' },
              { step: "03", title: '제작', desc: '카피, 이미지, 구조를 브랜드에 맞게 조정합니다.' },
              { step: "04", title: '오픈', desc: '반응형, 링크, 메타, 문의 흐름을 확인합니다.' },
              { step: "05", title: '운영', desc: '수정, 업데이트, 기능 보완을 이어갑니다.' }
            ].map((item, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="flex items-start gap-4 bg-[#FCFCFD] border border-zinc-200/60 p-4 sm:p-6 rounded-xl text-left sm:gap-6 hover:border-zinc-300 transition-colors duration-200 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600 md:flex-col md:items-center md:gap-3 md:text-center">
                  <span className="w-9 shrink-0 text-lg font-bold leading-none text-zinc-400 font-mono dark:text-zinc-500 sm:w-auto sm:text-xl">{item.step}</span>
                  <div className="flex-1 space-y-1 md:flex-none">
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                    <p className="text-[13px] sm:text-sm text-zinc-500 leading-relaxed font-normal dark:text-zinc-400">{item.desc}</p>
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
        <div className="max-w-[1440px] mx-auto space-y-9 md:space-y-12">
          <SectionHeadingKo
            label="Maintenance"
            title={<>오픈이 끝이 아닙니다.<br />진짜 운영은 그 다음부터입니다.</>}
            desc="사이트는 오픈한 날 끝나지 않습니다. 오류 대응, 콘텐츠 업데이트, 운영 대행까지 필요한 빈도에 맞춰 이어갑니다."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:items-center">
            {carePlansKo.map((plan, idx) => (
              <div
                key={plan.title}
                className={idx === 1
                  ? "bg-zinc-950 text-white rounded-xl p-6 sm:p-7 md:p-8 shadow-xl dark:bg-black"
                  : "bg-white border border-zinc-200/60 rounded-xl p-5 sm:p-6 md:p-7 hover:border-zinc-300 transition-colors dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600"
                }
              >
                <div className="flex flex-col gap-2">
                  <h3 className={idx === 1 ? "text-lg font-bold text-white" : "text-lg font-bold text-zinc-900 dark:text-zinc-100"}>{plan.title}</h3>
                  <p className="text-lg font-extrabold leading-none text-[#F1B100] md:text-xl">{plan.price}</p>
                </div>
                <p className={idx === 1 ? "mt-4 text-sm leading-relaxed text-zinc-300" : "mt-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400"}>{plan.desc}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-zinc-400 sm:text-sm dark:text-zinc-500">추가 기능은 기능 난이도보다 운영 빈도로 판단합니다.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="ohmt-final-cta">
        <div className="ohmt-final-cta-inner">
          <div className="space-y-3">
            <h2 className="ohmt-final-cta-title">나의 브랜드에 맞는 사이트, 빠르게 시작해보세요</h2>
            <p className="ohmt-final-cta-desc">업종 방향과 템플릿 후보만 정해도 상담을 시작할 수 있습니다.</p>
            <Link href="/ko/contact" className="ohmt-text-cta">
              상담하기
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-32 bg-white border-t border-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="max-w-[1440px] mx-auto space-y-10 md:space-y-16">
          <div className="space-y-4 text-center">
            <span className="ohmt-section-label">FAQ</span>
            <h2 className="text-[1.375rem] sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-100">자주 묻는 질문</h2>
            <p className="ohmt-section-desc">제작 전 자주 받는 질문을 정리했습니다. 추가로 궁금한 점은 상담 시 바로 확인하실 수 있습니다.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={faq.id} className="border border-zinc-200/60 rounded-xl overflow-hidden bg-[#FCFCFD] hover:border-zinc-300 transition-all duration-300 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600">
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
      <footer className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 border-t border-zinc-200/60 bg-[#FCFCFD] dark:border-zinc-800 dark:bg-zinc-950">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <Link href="/ko" className="flex items-center gap-3 h-6">
            <Logo className="h-6 w-auto block" />
          </Link>
          <div className="flex gap-8 text-xs font-bold text-zinc-400 tracking-widest dark:text-zinc-500">
            <Link href="/en" className="hover:text-zinc-950 transition-colors dark:hover:text-zinc-100">English</Link>
            <Link href="/ko/contact" className="hover:text-zinc-950 transition-colors dark:hover:text-zinc-100">문의</Link>
            {isAdmin && (
              <Link href="/admin/templates" className="hover:text-zinc-950 transition-colors dark:hover:text-zinc-100">관리자</Link>
            )}
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto text-center md:text-left text-[0.62rem] font-bold text-zinc-400 tracking-widest mt-8 border-t border-zinc-100 pt-6 dark:text-zinc-500 dark:border-zinc-800">
          &copy; 2026 Oh My Template. All rights reserved.
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
                      <span className="text-[0.65rem] text-zinc-400 font-bold uppercase tracking-wider dark:text-zinc-500">{descModalTemplate.category}</span>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{descModalTemplate.name}</h3>
                    </div>
                    <button type="button" onClick={() => setDescModalTemplate(null)} className="text-zinc-400 hover:text-zinc-900 transition-colors dark:text-zinc-500 dark:hover:text-zinc-100" aria-label="닫기">
                      <X size={20} />
                    </button>
                  </div>
                  {descModalTemplate.applicableIndustries.length > 0 && (
                    <div className="space-y-1">
                      <p className="text-[0.65rem] text-zinc-400 font-bold uppercase tracking-wider dark:text-zinc-500">이런 업종에 적용 가능합니다.</p>
                      <p className="text-base font-medium" style={{ color: "#F1B100" }}>
                        {descModalTemplate.applicableIndustries.join(", ")}
                      </p>
                    </div>
                  )}
                  <p className="text-base text-zinc-900 leading-relaxed font-normal whitespace-pre-line dark:text-white">{descModalTemplate.desc}</p>
                  {descModalTemplate.hashtags.length > 0 && (
                    <p className="text-sm text-zinc-400 dark:text-zinc-500">{descModalTemplate.hashtags.join(" ")}</p>
                  )}
                  <Link href={descModalTemplate.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 hover:text-zinc-600 transition-colors dark:text-zinc-100 dark:hover:text-zinc-400">
                    데모 확인하기 <ArrowUpRight size={12} />
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
