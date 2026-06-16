import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import type { Template } from "@/types/template";
import LandingPageClient, { type TemplateItem } from "./LandingPageClient";

export const metadata: Metadata = {
  title: "Oh My Template — Premium Next.js Web Templates",
  description: "Premium Next.js web templates for brands, agencies, and creators. Fully customized by our team in 2 days.",
  alternates: {
    canonical: "https://www.ohmt.site/en",
    languages: {
      en: "https://www.ohmt.site/en",
      ko: "https://www.ohmt.site/ko",
      "x-default": "https://www.ohmt.site/en",
    },
  },
  openGraph: {
    title: "Oh My Template — Premium Next.js Web Templates",
    description: "Premium Next.js web templates for brands, agencies, and creators. Fully customized by our team in 2 days.",
    url: "https://www.ohmt.site/en",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Oh My Template" }],
  },
};

export default async function Page() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("templates")
    .select("*")
    .eq("status", "published")
    .eq("lang", "en")
    .order("sort_order", { ascending: true });

  const templateRows: Template[] = error ? [] : data ?? [];
  const templates: TemplateItem[] = templateRows.map((template) => ({
    id: template.slug,
    name: template.name,
    url: `/en/templates/${template.slug}`,
    desc: template.description ?? "",
    category: template.category,
    image: template.thumbnail_url ?? "",
    isFeatured: template.is_featured,
  }));

  return <LandingPageClient templates={templates} />;
}
