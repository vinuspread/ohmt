import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import type { Faq, PricingPackage, Template } from "@/types/template";
import LandingPageClient, { type FaqItem, type TemplateItem } from "./LandingPageClient";

const fallbackPricingPackages: PricingPackage[] = [
  {
    id: "fallback-ko-pricing-0",
    lang: "ko",
    slug: "starter",
    name: "Starter",
    price: "4,200,000원",
    description: "빠르게 시작하기 위한 핵심 기능 패키지",
    features: ["템플릿 1개 선택", "기본 페이지 5개 포함", "기본 브랜드 커스터마이징", "기술 지원 6개월 제공", "모바일 반응형 레이아웃", "무상 수정 2회 제공"],
    duration: "2주 소요",
    is_recommended: false,
    is_active: true,
    sort_order: 0,
    created_at: "",
    updated_at: "",
  },
  {
    id: "fallback-ko-pricing-1",
    lang: "ko",
    slug: "professional",
    name: "Professional",
    price: "6,200,000원",
    description: "브랜드 맞춤형 프리미엄 디자인 패키지",
    features: ["템플릿 1개 선택", "기본 페이지 8개 포함", "고급 비주얼 커스터마이징", "도메인 & 호스팅 1년 지원", "무상 수정 3회 제공", "1대1 전담 기술 지원 1년", "기본 검색엔진 최적화(SEO) 세팅"],
    duration: "3주 소요",
    is_recommended: true,
    is_active: true,
    sort_order: 1,
    created_at: "",
    updated_at: "",
  },
  {
    id: "fallback-ko-pricing-2",
    lang: "ko",
    slug: "premium",
    name: "Premium",
    price: "9,200,000원",
    description: "완전 맞춤화 및 기능 확장이 가능한 스케일 플랜",
    features: ["무제한 맞춤형 요구사항 지원", "페이지 개수 무제한 제공", "커스텀 레이아웃 및 컴포넌트 설계", "도메인 & 호스팅 2년 지원", "무상 수정 무제한 제공", "우선순위 전담 기술 지원 2년", "고급 SEO 및 마케팅 분석 툴 연동"],
    duration: "4주 소요",
    is_recommended: false,
    is_active: true,
    sort_order: 2,
    created_at: "",
    updated_at: "",
  },
];

const fallbackFaqs: FaqItem[] = [
  {
    id: "fallback-ko-0",
    question: "추가 수정이 필요한 경우는 어떻게 되나요?",
    answer: "Starter 패키지는 2회, Professional은 3회, Premium은 무제한 수정이 포함되어 있습니다. 무상 범위를 초과하는 수정 요청은 별도의 협의를 거쳐 작업해 드립니다.",
  },
  {
    id: "fallback-ko-1",
    question: "도메인과 호스팅도 관리해 주시나요?",
    answer: "네, 선택하신 패키지에 명시된 무상 기간 동안 도메인 연결 및 클라우드 호스팅 인프라 설정을 전적으로 지원하고 대행해 드립니다. 계약 만료 시점 전에 갱신 안내를 전달해 드립니다.",
  },
  {
    id: "fallback-ko-2",
    question: "검색엔진 최적화(SEO) 지원 수준은 어떻게 되나요?",
    answer: "기본적인 SEO(검색 노출을 위한 메타 태그 최적화, 시맨틱 구조 마크업 설계, Google Search Console 등록 대행)는 모든 패키지에 기본 탑재되어 제공됩니다.",
  },
  {
    id: "fallback-ko-3",
    question: "동일한 템플릿을 선택하면 다른 회사 사이트와 유사해 보이지 않나요?",
    answer: "그렇지 않습니다. 로고, 전용 서체, 브랜드 고유의 컬러 파레트, 맞춤형 이미지 리소스와 카피라이팅이 1대1로 적용되기 때문에, 결과물은 완전히 유니크하며 브랜드 전용으로 기획 및 개발된 느낌을 줍니다.",
  },
  {
    id: "fallback-ko-4",
    question: "사이트 오픈 이후 오류가 생기거나 수정이 안 되면 어쩌죠?",
    answer: "패키지별 기술 지원 약정 기간 동안 전담 유지보수가 제공됩니다. 해당 기간이 지난 후에도 월 단위의 유연한 유지보수 플랜으로 편리하게 서비스를 연장할 수 있습니다.",
  },
];

export const metadata: Metadata = {
  title: "오마이템플릿",
  description: "OHMT는 비즈니스 목적에 맞는 프리미엄 웹사이트 템플릿과 맞춤형 홈페이지 제작 서비스를 제공합니다. 템플릿 선택부터 커스터마이징, 기능 개발까지 상담을 통해 진행합니다.",
  alternates: {
    canonical: "https://ohmt.site/ko",
    languages: {
      en: "https://ohmt.site/en",
      ko: "https://ohmt.site/ko",
      "x-default": "https://ohmt.site/en",
    },
  },
  openGraph: {
    title: "오마이템플릿",
    description: "브랜드에 맞춘 디자인과 개발, 운영까지 제공하는 프리미엄 템플릿 서비스입니다.",
    url: "https://ohmt.site/ko",
    siteName: "오마이템플릿",
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
    images: [{ url: "/og-image-v2.png", width: 1200, height: 630, alt: "오마이템플릿 - 프리미엄 웹사이트 템플릿" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "오마이템플릿",
    description: "브랜드에 맞춘 디자인과 개발, 운영까지 제공하는 프리미엄 템플릿 서비스입니다.",
    images: ["/og-image-v2.png"],
  },
};

export default async function Page() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("templates")
    .select("*")
    .eq("status", "published")
    .eq("lang", "ko")
    .order("sort_order", { ascending: true });

  const { data: faqData, error: faqError } = await supabase
    .from("faqs")
    .select("id, question, answer")
    .eq("lang", "ko")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  const { data: pricingData, error: pricingError } = await supabase
    .from("pricing_packages")
    .select("*")
    .eq("lang", "ko")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  const templateRows: Template[] = error ? [] : data ?? [];
  const templates: TemplateItem[] = templateRows.map((template) => ({
    id: template.slug,
    name: template.name,
    url: `/ko/templates/${template.slug}`,
    desc: template.description ?? "",
    category: template.category,
    image: template.thumbnail_url ?? "",
    isFeatured: template.is_featured,
    slug: template.slug,
    applicablePackages: template.applicable_packages ?? [],
    requiresConsultation: template.requires_consultation ?? false,
  }));

  const faqRows: Pick<Faq, "id" | "question" | "answer">[] = faqData ?? [];
  const faqs: FaqItem[] = faqError
    ? fallbackFaqs
    : faqRows.map((faq) => ({
        id: faq.id,
        question: faq.question,
        answer: faq.answer,
      }));

  const packages: PricingPackage[] = pricingError ? fallbackPricingPackages : pricingData ?? [];

  return <LandingPageClient templates={templates} faqs={faqs} packages={packages} />;
}
