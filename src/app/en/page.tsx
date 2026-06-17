import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import type { Faq, Template } from "@/types/template";
import LandingPageClient, { type FaqItem, type TemplateItem } from "./LandingPageClient";

const fallbackFaqs: FaqItem[] = [
  {
    id: "fallback-en-0",
    question: "What if I need additional revisions?",
    answer: "Starter includes 2, Professional includes 3, and Premium includes unlimited revisions. Additional revisions beyond these can be scheduled as an extra service.",
  },
  {
    id: "fallback-en-1",
    question: "Do you manage domain and hosting?",
    answer: "Yes, we manage domain setup and cloud hosting setup during your package period. We send renewal notifications before expiration.",
  },
  {
    id: "fallback-en-2",
    question: "What level of SEO support is included?",
    answer: "Basic SEO (optimized meta tags, semantic HTML hierarchy, and Google Search Console registration) is included in all packages.",
  },
  {
    id: "fallback-en-3",
    question: "Will my site look similar to others using the same template?",
    answer: "No. Every template is uniquely customized with your specific typography, color palette, custom imagery, and content hierarchy. Each resulting site feels entirely bespoke.",
  },
  {
    id: "fallback-en-4",
    question: "What happens if something breaks after launch?",
    answer: "Dedicated technical support is fully active during your package support period. Afterward, you can extend support with a flexible maintenance plan.",
  },
];

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

  const { data: faqData, error: faqError } = await supabase
    .from("faqs")
    .select("id, question, answer")
    .eq("lang", "en")
    .eq("is_active", true)
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
