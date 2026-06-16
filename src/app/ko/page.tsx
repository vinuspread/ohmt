import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import type { Template } from "@/types/template";
import LandingPageClient, { type TemplateItem } from "./LandingPageClient";

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

  return <LandingPageClient templates={templates} />;
}
