import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import type { Faq, Template } from "@/types/template";
import LandingPageClient, { type FaqItem, type TemplateItem } from "./LandingPageClient";

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
  title: "Oh My Template — 프리미엄 Next.js 웹 템플릿",
  description: "브랜드, 에이전시, 크리에이터를 위한 프리미엄 Next.js 웹 템플릿. 전문 팀이 2일 안에 커스터마이징해 드립니다.",
  alternates: {
    canonical: "https://www.ohmt.site/ko",
    languages: {
      en: "https://www.ohmt.site/en",
      ko: "https://www.ohmt.site/ko",
      "x-default": "https://www.ohmt.site/en",
    },
  },
  openGraph: {
    title: "Oh My Template — 프리미엄 Next.js 웹 템플릿",
    description: "브랜드, 에이전시, 크리에이터를 위한 프리미엄 Next.js 웹 템플릿.",
    url: "https://www.ohmt.site/ko",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Oh My Template" }],
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

  const templateRows: Template[] = error ? [] : data ?? [];
  const templates: TemplateItem[] = templateRows.map((template) => ({
    id: template.slug,
    name: template.name,
    url: `/ko/templates/${template.slug}`,
    desc: template.description ?? "",
    category: template.category,
    image: template.thumbnail_url ?? "",
    isFeatured: template.is_featured,
  }));

  const faqRows: Pick<Faq, "id" | "question" | "answer">[] = faqData ?? [];
  const faqs: FaqItem[] = faqError
    ? fallbackFaqs
    : faqRows.map((faq) => ({
        id: faq.id,
        question: faq.question,
        answer: faq.answer,
      }));

  return <LandingPageClient templates={templates} faqs={faqs} />;
}
