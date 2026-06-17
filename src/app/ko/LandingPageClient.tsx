"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, X, Search, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/Logo";

export interface TemplateItem {
  id: string;
  name: string;
  url: string;
  desc: string;
  category: string;
  image: string;
  isFeatured?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const ALL_LABEL = "전체";

const POPULAR_TAGS = ["패션", "포트폴리오", "에이전시", "럭셔리", "미니멀"];

export default function LandingPageClient({ templates, faqs }: { templates: TemplateItem[]; faqs: FaqItem[] }) {
  const router = useRouter();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL_LABEL);
  const [isAdmin, setIsAdmin] = useState(false);
  const [descModalTemplate, setDescModalTemplate] = useState<TemplateItem | null>(null);
  const [featuredTemplateId, setFeaturedTemplateId] = useState<string | null>(null);

  useEffect(() => {
    import("@/lib/supabase/client").then(({ createClient }) => {
      createClient().auth.getUser().then(({ data }) => {
        if (data.user) setIsAdmin(true);
      });
    });
  }, []);

  useEffect(() => {
    const featuredList = templates.filter((template) => template.isFeatured);
    setFeaturedTemplateId(featuredList.length > 0 ? featuredList[Math.floor(Math.random() * featuredList.length)].id : null);
  }, [templates]);

  const packages = [
    {
      id: 'starter',
      name: 'Starter',
      price: '4,200,000원',
      description: '빠르게 시작하기 위한 핵심 기능 패키지',
      features: [
        '템플릿 1개 선택',
        '기본 페이지 5개 포함',
        '기본 브랜드 커스터마이징',
        '기술 지원 6개월 제공',
        '모바일 반응형 레이아웃',
        '무상 수정 2회 제공'
      ],
      duration: '2주 소요'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '6,200,000원',
      description: '브랜드 맞춤형 프리미엄 디자인 패키지',
      features: [
        '템플릿 1개 선택',
        '기본 페이지 8개 포함',
        '고급 비주얼 커스터마이징',
        '도메인 & 호스팅 1년 지원',
        '무상 수정 3회 제공',
        '1대1 전담 기술 지원 1년',
        '기본 검색엔진 최적화(SEO) 세팅'
      ],
      duration: '3주 소요',
      recommended: true
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '9,200,000원',
      description: '완전 맞춤화 및 기능 확장이 가능한 스케일 플랜',
      features: [
        '무제한 맞춤형 요구사항 지원',
        '페이지 개수 무제한 제공',
        '커스텀 레이아웃 및 컴포넌트 설계',
        '도메인 & 호스팅 2년 지원',
        '무상 수정 무제한 제공',
        '우선순위 전담 기술 지원 2년',
        '고급 SEO 및 마케팅 분석 툴 연동'
      ],
      duration: '4주 소요'
    }
  ];

  const websiteOrganizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.ohmt.site/#website",
        url: "https://www.ohmt.site",
        name: "Oh My Template",
        description: "브랜드, 에이전시, 크리에이터를 위한 프리미엄 Next.js 웹 템플릿 서비스.",
        inLanguage: ["en", "ko"],
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.ohmt.site/ko?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.ohmt.site/#organization",
        name: "Oh My Template",
        url: "https://www.ohmt.site",
        email: "contact@ohmytemplate.com",
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
    url: "https://www.ohmt.site/ko",
    numberOfItems: templates.length,
    itemListElement: templates.map((template, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: template.name,
      description: template.desc,
      url: `https://www.ohmt.site${template.url}`,
      image: template.image ? `https://www.ohmt.site${template.image}` : undefined,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
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

  const randomFeaturedItem = useMemo(() => {
    if (!featuredTemplateId) return null;
    return templates.find((template) => template.id === featuredTemplateId) ?? null;
  }, [featuredTemplateId, templates]);

  // Featured Item: 첫 진입 시(카테고리 전체, 검색어 없음) 대표 템플릿 강조
  const featuredItem = useMemo(() => {
    if (activeCategory !== ALL_LABEL || searchTerm !== "") return null;
    return randomFeaturedItem;
  }, [activeCategory, searchTerm, randomFeaturedItem]);

  // Grid Items: Featured 아이템 제외 리스트업
  const gridItems = useMemo(() => {
    if (featuredItem) {
      return filteredTemplates.filter(t => t.id !== featuredItem.id);
    }
    return filteredTemplates;
  }, [filteredTemplates, featuredItem]);

  const goToContact = (packageId?: string, template?: TemplateItem) => {
    const params = new URLSearchParams();
    if (packageId) params.set("package", packageId);
    if (template) {
      params.set("template", template.name);
      params.set("image", template.image);
      params.set("category", template.category);
    }
    router.push(`/ko/contact?${params.toString()}`);
  };

  return (
      <main className="min-h-screen bg-[#FCFCFD] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white overflow-x-hidden antialiased break-keep dark:bg-zinc-950 dark:text-zinc-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteOrganizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        
        {/* Header */}
        <header className="bg-white border-b border-zinc-200/60 px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-40 dark:bg-zinc-900 dark:border-zinc-800">
          <div className="flex items-center gap-8">
            <Link href="/ko" className="flex items-center gap-3 h-6">
              <Logo className="h-6 w-auto block" />
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-[0.82rem] font-bold text-zinc-500 uppercase tracking-wider dark:text-zinc-400">
              <a href="#templates" className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">템플릿</a>
              <a href="#pricing" className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">가격 설정</a>
              <a href="#process" className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">프로세스</a>
              <a href="#faq" className="hover:text-zinc-900 transition-colors dark:hover:text-zinc-100">자주 묻는 질문</a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/en" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors font-bold dark:text-zinc-500 dark:hover:text-zinc-100">
              EN
            </Link>
            <Link
              href="/ko/contact"
              className="hidden sm:inline-flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-white text-xs uppercase tracking-widest font-bold px-5 py-2.5 transition-colors duration-200 rounded-md dark:bg-zinc-700 dark:hover:bg-zinc-600"
            >상담 시작하기</Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-white border-b border-zinc-200/50 relative overflow-hidden dark:bg-zinc-900 dark:border-zinc-800">
          {/* Ambient Glows */}
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-amber-500/5 via-orange-500/5 to-transparent blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center px-6 space-y-8 relative z-10">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-bold uppercase tracking-wider rounded-full dark:bg-zinc-800 dark:text-zinc-300">
                <Sparkles size={12} className="text-orange-500" />
                Oh My Template Templates
              </span>
              <h1 className="text-[3rem] md:text-[4.8rem] font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100">
                비즈니스의 가치를 높여줄 <br className="hidden sm:block" />
                완벽한 <span className="text-[#FFB800]">프리미엄 템플릿</span>을 만나보세요.
              </h1>
              <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto font-normal leading-relaxed tracking-tight dark:text-zinc-400">
                디테일에 민감한 브랜드를 위한 고품격 웹 템플릿입니다. 비즈니스 방향성에 맞추어 저희 전담 팀이 2주 만에 맞춤 커스터마이징하고 배포까지 완료해 드립니다.
              </p>
            </div>
          </div>

          {/* Infinite Horizontal Scroll Marquee */}
          <div className="relative mt-16 w-full overflow-hidden select-none pointer-events-auto">
            {/* Left/Right Vignette Shadows */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none dark:from-zinc-900" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none dark:from-zinc-900" />
            
            <div className="flex gap-6 py-8 animate-marquee">
              {[...templates, ...templates].map((template, idx) => (
                <Link
                  href={template.url}
                  key={`${template.id}-${idx}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 w-[240px] md:w-[320px] bg-white border border-zinc-200/60 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-300 pointer-events-auto dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:shadow-zinc-900/50"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-50 dark:bg-zinc-700">
                    <img
                      src={template.image}
                      alt={template.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[0.6rem] font-bold text-zinc-400 uppercase tracking-widest dark:text-zinc-500">{template.category}</span>
                      <span className="text-[0.55rem] font-bold text-orange-500 border border-orange-200/60 px-1 rounded bg-orange-50/50">Premium</span>
                    </div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{template.name}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Templates Marketplace Section */}
        <section id="templates" className="px-6 md:px-12 lg:px-20 py-12 max-w-[1440px] mx-auto space-y-12">

          {/* Search Input Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" size={18} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="원하는 키워드로 검색 (예: 패션, 에이전시, 에디토리얼...)"
                className="w-full pl-12 pr-10 py-3.5 bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-zinc-900 outline-none text-zinc-900 placeholder:text-zinc-400 text-sm transition-all rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:focus:bg-zinc-800 dark:focus:border-zinc-500 dark:text-zinc-100 dark:placeholder:text-zinc-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-900 transition-colors dark:text-zinc-500 dark:hover:text-zinc-100"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 mt-4 text-xs">
              <span className="text-zinc-400 font-medium dark:text-zinc-500">인기 검색어:</span>
              {POPULAR_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchTerm(tag)}
                  className="px-2.5 py-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors rounded dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-400"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 border-b border-zinc-200/60 no-scrollbar dark:border-zinc-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSearchTerm("");
                }}
                className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider relative whitespace-nowrap transition-colors ${
                  activeCategory === cat ? "text-zinc-950 font-extrabold dark:text-zinc-100" : "text-zinc-400 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-100"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategoryBorder"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-zinc-900"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Results Summary */}
          {(searchTerm || activeCategory !== ALL_LABEL) && (
            <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider dark:text-zinc-400">
              총 {filteredTemplates.length}개의 템플릿 검색됨
            </div>
          )}

          {/* Template Layout: Featured + Grid */}
          <div className="space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredTemplates.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-20 text-center space-y-4"
                >
                  <p className="text-zinc-400 font-medium dark:text-zinc-500">검색어와 부합하는 템플릿을 찾지 못했습니다.</p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setActiveCategory(ALL_LABEL);
                    }}
                    className="text-xs font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-900 pb-0.5 dark:text-zinc-100 dark:border-zinc-100"
                  >
                    필터 초기화
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-8">
                  {/* Featured Large Row (전체 보기 및 검색어가 없을 때 최상단 노출) */}
                  {featuredItem && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="group bg-white border border-zinc-200/60 rounded-xl overflow-hidden hover:border-zinc-300 transition-all duration-300 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-0">
                        <Link href={featuredItem.url} target="_blank" rel="noopener noreferrer" className="relative h-[280px] md:h-[420px] block overflow-hidden bg-zinc-50 dark:bg-zinc-700">
                          <img
                            src={featuredItem.image}
                            alt={featuredItem.name}
                            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                          />
                          <span className="absolute top-4 left-4 bg-zinc-900 text-white text-[0.62rem] font-bold uppercase tracking-widest px-3 py-1 rounded dark:bg-zinc-700">
                            FEATURED TEMPLATE
                          </span>
                        </Link>
                        <div className="p-8 md:p-12 flex flex-col justify-between space-y-8">
                          <div className="space-y-4">
                            <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">{featuredItem.category}</span>
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">{featuredItem.name}</h3>
                            <div>
                              <p className="text-sm text-zinc-500 leading-relaxed font-normal line-clamp-3 dark:text-zinc-400">{featuredItem.desc}</p>
                              {featuredItem.desc.length > 80 && (
                                <button
                                  onClick={() => setDescModalTemplate(featuredItem)}
                                  className="mt-2 text-xs text-zinc-400 hover:text-zinc-600 underline underline-offset-2 transition-colors dark:text-zinc-500 dark:hover:text-zinc-300"
                                >
                                  더보기
                                </button>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-6 border-t border-zinc-100 dark:border-zinc-700">
                            <div className="flex items-center gap-3">
                              <Link
                                href={featuredItem.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 border border-zinc-300 hover:border-[#F1B100] hover:text-[#D9A000] text-zinc-500 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded transition-colors outline-none focus:outline-none dark:border-zinc-600 dark:text-zinc-400"
                              >
                                데모 확인하기 <ArrowUpRight size={13} />
                              </Link>
                              <button
                                onClick={() => goToContact('professional', featuredItem)}
                                className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-700 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded transition-colors dark:bg-zinc-700 dark:hover:bg-zinc-600"
                              >
                                상담 시작하기
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* General Grid */}
                  <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gridItems.map((template) => (
                      <motion.div
                        key={template.id}
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="group bg-white border border-zinc-200/60 hover:border-zinc-300 transition-all duration-300 rounded-xl overflow-hidden dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600"
                      >
                        <Link href={template.url} target="_blank" rel="noopener noreferrer" className="relative h-56 block overflow-hidden bg-zinc-50 dark:bg-zinc-700">
                          <img
                            src={template.image}
                            alt={template.name}
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                          />
                        </Link>
                        <div className="p-6 space-y-4">
                          <div className="space-y-1">
                            <div className="flex justify-between items-start">
                              <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{template.name}</h4>
                              <span className="inline-block bg-zinc-100 text-zinc-600 text-[0.62rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded dark:bg-zinc-700 dark:text-zinc-400">
                                Premium
                              </span>
                            </div>
                            <p className="text-[0.65rem] text-zinc-400 font-bold uppercase tracking-wider dark:text-zinc-500">{template.category}</p>
                          </div>
                          <div>
                            <p
                              className={`text-sm text-zinc-500 leading-relaxed font-light whitespace-pre-line line-clamp-2 dark:text-zinc-400 ${
                                template.desc.length > 40 ? "cursor-pointer hover:text-zinc-700 dark:hover:text-zinc-300" : ""
                              }`}
                              onClick={() => {
                                if (template.desc.length > 40) setDescModalTemplate(template);
                              }}
                            >
                              {template.desc}
                            </p>
                            {template.desc.length > 40 && (
                              <button
                                type="button"
                                onClick={() => setDescModalTemplate(template)}
                                className="mt-1 text-xs font-bold text-zinc-400 hover:text-zinc-600 transition-colors dark:text-zinc-500 dark:hover:text-zinc-300"
                              >
                                더보기
                              </button>
                            )}
                          </div>
                          <div className="flex justify-between items-center pt-4 border-t border-zinc-100 dark:border-zinc-700">
                            <Link
                              href={template.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-600 transition-colors outline-none focus:outline-none dark:text-zinc-500 dark:hover:text-zinc-400"
                            >
                              템플릿보기 <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                            <button
                              onClick={() => goToContact('professional', template)}
                              className="inline-flex items-center gap-1.5 border border-zinc-300 hover:border-[#F1B100] hover:text-[#D9A000] text-zinc-500 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded transition-colors dark:border-zinc-600 dark:text-zinc-400"
                            >
                              상담하기
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Section 6: Process */}
        <section id="process" className="px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-white border-t border-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4 text-center">
              <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-orange-600">Methodology</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">구축을 위한 5단계 프로세스</h2>
              <p className="text-base text-zinc-500 max-w-xl mx-auto leading-relaxed font-light dark:text-zinc-400">인프라 세팅부터 브랜드 현지화, 레이아웃 정교화까지 개발팀이 전담하여 처리합니다.</p>
            </div>

            <div className="space-y-4">
              {[
                { step: "01", title: '템플릿 선택 및 계약', desc: '고객사 타겟 고객과 비주얼 아이덴티티에 적합한 13종의 프리미엄 템플릿 중 하나를 정밀 탐색 후 낙점합니다.', duration: '1일차' },
                { step: "02", title: '전략 설계 및 기획 컨설팅', desc: '도메인 정보, 브랜드 키컬러, 글꼴 체계, 기획 레이아웃 개편 및 다국어 맵핑 구성을 전략 수립합니다.', duration: '2일차' },
                { step: "03", title: '전담 엔지니어 맞춤 개발', desc: '당사 전문 개발진이 개별 컴포넌트 텍스트 재구성, 이미지 애셋 교체 및 세부 레이아웃을 맞춤 조정합니다.', duration: '1주차' },
                { step: "04", title: 'QA 디테일 감사 및 수정', desc: '화면 깨짐 검사 및 E2E 기능 품질 테스팅을 거치며 완성도 극대화를 위해 2~3회 수정 피드백을 진행합니다.', duration: '2주차' },
                { step: "05", title: '서버 론칭 및 이관', desc: '독립적인 클라우드 호스팅 환경에 라이브 배포하고 최종 네임서버 및 DNS 맵핑을 완료합니다.', duration: '14일차' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start bg-[#FCFCFD] border border-zinc-200/60 p-6 md:p-8 rounded-xl hover:border-zinc-300 transition-colors duration-200 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-600">
                  <span className="text-xl font-bold text-zinc-400 font-mono dark:text-zinc-500">{item.step}</span>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed font-light dark:text-zinc-400">{item.desc}</p>
                  </div>
                  <span className="text-[0.65rem] font-bold text-zinc-400 uppercase tracking-widest bg-white border border-zinc-200/60 px-2.5 py-1 rounded dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-500">{item.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Pricing */}
        <section id="pricing" className="px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-[#FCFCFD] border-t border-zinc-200/50 dark:bg-zinc-950 dark:border-zinc-800">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="space-y-4 text-center">
              <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-orange-600">Pricing Packages</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">투명하고 합리적인 예산 플랜</h2>
              <p className="text-base text-zinc-500 max-w-xl mx-auto leading-relaxed font-light dark:text-zinc-400">비즈니스 목표와 예산 규모에 적합한 최적의 패키지를 검토해보세요.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`bg-white rounded-xl p-8 border flex flex-col justify-between transition-all duration-300 dark:bg-zinc-800 dark:border-zinc-700 ${
                    pkg.recommended
                      ? 'border-orange-500 border-2 shadow-lg relative'
                      : 'border-zinc-200/60 hover:border-zinc-300 dark:hover:border-zinc-600'
                  }`}
                >
                  {pkg.recommended && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[0.62rem] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      RECOMMENDED
                    </span>
                  )}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{pkg.name}</h3>
                      <p className="text-sm text-zinc-400 mt-1 dark:text-zinc-500">{pkg.description}</p>
                    </div>
                    <div>
                      <span className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">{pkg.price}</span>
                      <span className="text-xs text-zinc-400 font-medium block mt-1 dark:text-zinc-500">평균 소요 기간: {pkg.duration}</span>
                    </div>
                    <ul className="space-y-3.5 pt-6 border-t border-zinc-100 dark:border-zinc-700">
                      {pkg.features.map((feature, fidx) => (
                        <li key={fidx} className="flex gap-2.5 items-start text-sm text-zinc-600 dark:text-zinc-400">
                          <span className="text-orange-500 font-bold flex-shrink-0">v</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => goToContact(pkg.id)}
                    className={`w-full mt-8 py-3 text-xs uppercase tracking-widest font-bold transition-all duration-150 rounded-md ${
                      pkg.recommended
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'bg-zinc-900 hover:bg-zinc-800 text-white'
                    }`}
                  >
                    플랜 선택하기
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section id="faq" className="px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-white border-t border-zinc-200/50 dark:bg-zinc-900 dark:border-zinc-800">
          <div className="max-w-3xl mx-auto space-y-16">
            <div className="space-y-4 text-center">
              <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-orange-600">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">자주 묻는 질문들</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={faq.id}
                  className="border border-zinc-200/60 rounded-xl overflow-hidden bg-[#FCFCFD] hover:border-zinc-300 transition-all duration-300 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-zinc-50 transition-colors duration-300 dark:hover:bg-zinc-700"
                  >
                    <span className="font-bold text-left text-sm text-zinc-800 dark:text-zinc-200">{faq.question}</span>
                    <ChevronDown
                      size={16}
                      className={`flex-shrink-0 text-zinc-400 transition-transform duration-300 dark:text-zinc-500 ${
                        openFAQ === idx ? 'rotate-180' : ''
                      }`}
                    />
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
        <footer className="px-6 md:px-12 py-12 border-t border-zinc-200/60 bg-[#FCFCFD] dark:border-zinc-800 dark:bg-zinc-950">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <Link href="/ko" className="flex items-center gap-3 h-6">
              <Logo className="h-6 w-auto block" />
            </Link>
            <div className="flex gap-8 text-xs font-bold text-zinc-400 uppercase tracking-widest dark:text-zinc-500">
              <Link href="/en" className="hover:text-zinc-950 transition-colors dark:hover:text-zinc-100">English</Link>
              <a href="mailto:contact@ohmytemplate.com" className="hover:text-zinc-950 transition-colors dark:hover:text-zinc-100">이메일 문의</a>
              {isAdmin && (
                <Link href="/admin/templates" className="hover:text-zinc-950 transition-colors dark:hover:text-zinc-100">관리자</Link>
              )}
            </div>
          </div>
          <div className="max-w-6xl mx-auto text-[0.62rem] font-bold text-zinc-400 uppercase tracking-widest mt-8 border-t border-zinc-100 pt-6 dark:text-zinc-500 dark:border-zinc-800">
            (c) 2026 Oh My Template. All rights reserved.
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
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
              >
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
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{descModalTemplate.name}</h3>
                      </div>
                      <button
                        type="button"
                        onClick={() => setDescModalTemplate(null)}
                        className="text-zinc-400 hover:text-zinc-900 transition-colors dark:text-zinc-500 dark:hover:text-zinc-100"
                        aria-label="닫기"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed font-light whitespace-pre-line dark:text-zinc-400">
                      {descModalTemplate.desc}
                    </p>
                    <Link
                      href={descModalTemplate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 hover:text-zinc-600 transition-colors dark:text-zinc-100 dark:hover:text-zinc-400"
                    >
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
