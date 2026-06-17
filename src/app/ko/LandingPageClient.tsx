"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, X, Search, Sparkles } from "lucide-react";
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

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const EASE_IOS = [0.32, 0.72, 0, 1] as const;

const ALL_LABEL = "전체";

const POPULAR_TAGS = ["패션", "포트폴리오", "에이전시", "럭셔리", "미니멀"];

export default function LandingPageClient({ templates }: { templates: TemplateItem[] }) {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL_LABEL);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [descModalTemplate, setDescModalTemplate] = useState<TemplateItem | null>(null);

  useEffect(() => {
    import("@/lib/supabase/client").then(({ createClient }) => {
      createClient().auth.getUser().then(({ data }) => {
        if (data.user) setIsAdmin(true);
      });
    });
  }, []);

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

  const faqs = [
    {
      q: '추가 수정이 필요한 경우는 어떻게 되나요?',
      a: 'Starter 패키지는 2회, Professional은 3회, Premium은 무제한 수정이 포함되어 있습니다. 무상 범위를 초과하는 수정 요청은 별도의 협의를 거쳐 작업해 드립니다.'
    },
    {
      q: '도메인과 호스팅도 관리해 주시나요?',
      a: '네, 선택하신 패키지에 명시된 무상 기간 동안 도메인 연결 및 클라우드 호스팅 인프라 설정을 전적으로 지원하고 대행해 드립니다. 계약 만료 시점 전에 갱신 안내를 전달해 드립니다.'
    },
    {
      q: '검색엔진 최적화(SEO) 지원 수준은 어떻게 되나요?',
      a: '기본적인 SEO(검색 노출을 위한 메타 태그 최적화, 시맨틱 구조 마크업 설계, Google Search Console 등록 대행)는 모든 패키지에 기본 탑재되어 제공됩니다.'
    },
    {
      q: '동일한 템플릿을 선택하면 다른 회사 사이트와 유사해 보이지 않나요?',
      a: '그렇지 않습니다. 로고, 전용 서체, 브랜드 고유의 컬러 파레트, 맞춤형 이미지 리소스와 카피라이팅이 1대1로 적용되기 때문에, 결과물은 완전히 유니크하며 브랜드 전용으로 기획 및 개발된 느낌을 줍니다.'
    },
    {
      q: '사이트 오픈 이후 오류가 생기거나 수정이 안 되면 어쩌죠?',
      a: '패키지별 기술 지원 약정 기간 동안 전담 유지보수가 제공됩니다. 해당 기간이 지난 후에도 월 단위의 유연한 유지보수 플랜으로 편리하게 서비스를 연장할 수 있습니다.'
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
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
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

  // 대표로 지정된 템플릿이 여러 개면 페이지 진입 시 랜덤으로 하나 선택 (재진입 시까지 고정)
  const randomFeaturedItem = useMemo(() => {
    const featuredList = templates.filter((t) => t.isFeatured);
    if (featuredList.length === 0) return null;
    return featuredList[Math.floor(Math.random() * featuredList.length)];
  }, [templates]);

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

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
    setSubmitted(false);
  };

  const closePackage = () => {
    setSelectedPackage(null);
    setFormErrors({});
    setSubmitted(false);
    setSubmitted(false);
  };

  const handleSubmit = (e: { preventDefault(): void; currentTarget: HTMLFormElement }) => {
    e.preventDefault();
    const form = e.currentTarget;
    const companyName = (form.elements.namedItem('companyName') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

    const errors: Record<string, string> = {};
    if (!companyName) errors.companyName = "회사 / 단체명을 입력해주세요.";
    if (!email) errors.email = "이메일 주소를 입력해주세요.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "올바른 이메일 주소를 입력해주세요.";
    if (!phone) errors.phone = "연락처를 입력해주세요.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    const selectedPkg = packages.find(p => p.id === selectedPackage);
    const subject = `웹사이트 개발 프로젝트 문의: ${selectedPkg?.name || '일반 상담'}`;
    const body = `회사/단체명: ${companyName}\n이메일 주소: ${email}\n연락처: ${phone}\n\n상세 요청사항:\n${message}`;

    window.location.href = `mailto:contact@ohmytemplate.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
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
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden sm:inline-flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-white text-xs uppercase tracking-widest font-bold px-5 py-2.5 transition-colors duration-200 rounded-md dark:bg-zinc-700 dark:hover:bg-zinc-600"
            >상담 시작하기</button>
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
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" size={16} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="템플릿 검색..."
                className="w-full pl-10 pr-10 py-2.5 bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-zinc-900 outline-none text-zinc-900 placeholder:text-zinc-400 text-sm transition-all rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:focus:bg-zinc-800 dark:focus:border-zinc-500 dark:text-zinc-100 dark:placeholder:text-zinc-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-900 transition-colors dark:text-zinc-500 dark:hover:text-zinc-100"
                >
                  <X size={14} />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {POPULAR_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchTerm(tag)}
                  className="px-2.5 py-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-500 transition-colors rounded dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-400"
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
                            <p className="text-sm text-zinc-500 leading-relaxed font-normal whitespace-pre-line dark:text-zinc-400">{featuredItem.desc}</p>
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
                                onClick={() => handlePackageSelect('professional')}
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
                            <span className="text-xs text-zinc-400 font-medium dark:text-zinc-500">by Oh My Template</span>
                            <Link
                              href={template.url}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 hover:text-zinc-600 transition-colors dark:text-zinc-100 dark:hover:text-zinc-400"
                            >
                              데모 확인하기 <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
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
                    onClick={() => handlePackageSelect(pkg.id)}
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
                  key={idx}
                  className="border border-zinc-200/60 rounded-xl overflow-hidden bg-[#FCFCFD] hover:border-zinc-300 transition-all duration-300 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-zinc-50 transition-colors duration-300 dark:hover:bg-zinc-700"
                  >
                    <span className="font-bold text-left text-sm text-zinc-800 dark:text-zinc-200">{faq.q}</span>
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
                        <div className="px-6 py-5 text-sm text-zinc-500 leading-relaxed font-light dark:text-zinc-400">
                          {faq.a}
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

        {/* Package Selection Modal */}
        <AnimatePresence>
          {selectedPackage && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closePackage}
              />
              <motion.aside
                className="fixed top-0 right-0 h-full w-full sm:w-[440px] bg-white border-l border-zinc-200 z-50 flex flex-col shadow-2xl overflow-y-auto dark:bg-zinc-900 dark:border-zinc-800"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.5, ease: EASE_IOS }}
              >
                <div className="p-8 border-b border-zinc-200 flex items-start justify-between gap-4 flex-shrink-0 dark:border-zinc-800">
                  <div className="space-y-2">
                    <span className="text-[0.62rem] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Package Inquiry</span>
                    <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                      {packages.find(p => p.id === selectedPackage)?.name} 플랜 신청
                    </h3>
                  </div>
                  <button
                    onClick={closePackage}
                    className="text-zinc-400 hover:text-zinc-900 transition-colors mt-1 flex-shrink-0 dark:text-zinc-500 dark:hover:text-zinc-100"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-8">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center justify-center h-full text-center gap-6 py-16"
                    >
                      <div className="w-12 h-12 rounded-full border border-orange-500 flex items-center justify-center">
                        <span className="text-orange-500 text-lg">v</span>
                      </div>
                      <div className="space-y-2">
                      <p className="text-zinc-950 text-sm font-bold dark:text-zinc-100">이메일 클라이언트 연동 완료</p>
                      <p className="text-xs text-zinc-400 font-light dark:text-zinc-500">작성해주신 메일 문의를 확인 후 24시간 내에 신속히 회신해 드리겠습니다.</p>
                      </div>
                      <button
                        onClick={closePackage}
                        className="text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-zinc-950 transition-colors pt-4 dark:text-zinc-500 dark:hover:text-zinc-100"
                      >
                        닫기
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <div>
                        <label className="text-[0.62rem] uppercase tracking-widest text-zinc-500 font-bold mb-2 block dark:text-zinc-400">
                          회사 / 단체명
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          className={`bg-zinc-50 border focus:bg-white outline-none text-zinc-900 placeholder:text-zinc-400 px-4 py-3 text-xs w-full transition-all rounded-lg dark:bg-zinc-800 dark:focus:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 ${formErrors.companyName ? "border-red-400 focus:border-red-400 dark:border-red-500" : "border-zinc-200 focus:border-zinc-900 dark:border-zinc-700 dark:focus:border-zinc-500"}`}
                          placeholder="회사 또는 단체명 입력"
                        />
                        {formErrors.companyName && <p className="mt-1.5 text-xs text-red-500">{formErrors.companyName}</p>}
                      </div>

                      <div>
                        <label className="text-[0.62rem] uppercase tracking-widest text-zinc-500 font-bold mb-2 block dark:text-zinc-400">
                          이메일 주소
                        </label>
                        <input
                          type="email"
                          name="email"
                          className={`bg-zinc-50 border focus:bg-white outline-none text-zinc-900 placeholder:text-zinc-400 px-4 py-3 text-xs w-full transition-all rounded-lg dark:bg-zinc-800 dark:focus:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 ${formErrors.email ? "border-red-400 focus:border-red-400 dark:border-red-500" : "border-zinc-200 focus:border-zinc-900 dark:border-zinc-700 dark:focus:border-zinc-500"}`}
                          placeholder="your-email@example.com"
                        />
                        {formErrors.email && <p className="mt-1.5 text-xs text-red-500">{formErrors.email}</p>}
                      </div>

                      <div>
                        <label className="text-[0.62rem] uppercase tracking-widest text-zinc-500 font-bold mb-2 block dark:text-zinc-400">
                          연락처
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          className={`bg-zinc-50 border focus:bg-white outline-none text-zinc-900 placeholder:text-zinc-400 px-4 py-3 text-xs w-full transition-all rounded-lg dark:bg-zinc-800 dark:focus:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 ${formErrors.phone ? "border-red-400 focus:border-red-400 dark:border-red-500" : "border-zinc-200 focus:border-zinc-900 dark:border-zinc-700 dark:focus:border-zinc-500"}`}
                          placeholder="010-0000-0000"
                        />
                        {formErrors.phone && <p className="mt-1.5 text-xs text-red-500">{formErrors.phone}</p>}
                      </div>

                      <div>
                        <label className="text-[0.62rem] uppercase tracking-widest text-zinc-500 font-bold mb-2 block dark:text-zinc-400">
                          상세 요청사항
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          className="bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-zinc-900 outline-none text-zinc-900 placeholder:text-zinc-400 px-4 py-3 text-xs w-full resize-none transition-all rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:focus:bg-zinc-800 dark:focus:border-zinc-500 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                          placeholder="개발하고자 하는 브랜드 웹사이트의 특장점이나 필요 기능들을 자세히 공유해주세요..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-widest text-xs py-3.5 transition-all rounded-lg"
                      >
                        신청 메일 발송하기
                      </button>
                    </form>
                  )}
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

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
