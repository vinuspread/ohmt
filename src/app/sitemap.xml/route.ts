import { createClient } from "@supabase/supabase-js";

const BASE = "https://ohmt.site";
const LANGUAGES = ["en", "ko"] as const;

const FALLBACK_PUBLISHED_TEMPLATE_SLUGS = [
  "OHMT001-fashion",
  "OHMT002-jewelry",
  "OHMT003-exhibition",
  "OHMT004-furniture",
  "OHMT005-sneaker",
  "OHMT006-studio",
  "OHMT007-portfolio",
  "OHMT008-airline",
  "OHMT009-car",
  "OHMT010-cosmetic",
  "OHMT011-ir",
  "OHMT012-magazine",
  "OHMT014-docs",
  "OHMT015-dashboard",
  "OHMT016-technology",
  "OHMT017-multi-shop",
  "OHMT018-burger",
  "OHMT019-coffee",
  "OHMT020-hotel",
  "OHMT021-museum",
  "OHMT022-yoga",
  "OHMT023-game",
  "OHMT024-kids-education",
  "OHMT025-wedding",
  "OHMT026-spa",
  "OHMT027-architecture",
  "OHMT028-ev",
  "OHMT029-fitness",
  "OHMT030-resort",
  "OHMT031-luma-camera",
  "OHMT032-community",
  "OHMT033-foundation",
  "OHMT035-atelier-house",
  "OHMT036-amber-grove",
  "OHMT037-figure-shop",
] as const;

const INDEXABLE_TEMPLATE_SUBPAGES = [
  "OHMT025-wedding/about",
  "OHMT025-wedding/contact",
  "OHMT025-wedding/gallery",
  "OHMT025-wedding/pricing",
  "OHMT027-architecture/about",
  "OHMT027-architecture/projects",
  "OHMT027-architecture/services",
] as const;

type Language = (typeof LANGUAGES)[number];
type ChangeFrequency = "weekly" | "monthly" | "yearly";
type TemplateRecord = { slug: string; lang: Language; updated_at: string | null };
type ContentRecord = { lang: Language; updated_at: string | null };

type SitemapEntry = {
  path: string;
  lang: Language;
  alternatePath: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  lastModified?: string;
};

function latestDate(records: ContentRecord[], lang: Language) {
  const timestamps = records
    .filter((record) => record.lang === lang && record.updated_at)
    .map((record) => Date.parse(record.updated_at as string))
    .filter(Number.isFinite);

  return timestamps.length > 0 ? new Date(Math.max(...timestamps)).toISOString() : undefined;
}

async function getPublishedContent() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return { templates: [] as TemplateRecord[], landingContent: [] as ContentRecord[] };
  }

  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });

  try {
    const [templateResult, faqResult, pricingResult] = await Promise.all([
      supabase.from("templates").select("slug, lang, updated_at").eq("status", "published"),
      supabase.from("faqs").select("lang, updated_at").eq("is_active", true),
      supabase.from("pricing_packages").select("lang, updated_at").eq("is_active", true),
    ]);

    return {
      templates: templateResult.error ? [] : (templateResult.data as TemplateRecord[]),
      landingContent: [
        ...(faqResult.error ? [] : (faqResult.data as ContentRecord[])),
        ...(pricingResult.error ? [] : (pricingResult.data as ContentRecord[])),
        ...(templateResult.error ? [] : (templateResult.data as TemplateRecord[])),
      ],
    };
  } catch {
    return { templates: [] as TemplateRecord[], landingContent: [] as ContentRecord[] };
  }
}

function addLanguagePair(
  pathWithoutLanguage: string,
  changeFrequency: ChangeFrequency,
  priority: number,
  getLastModified?: (lang: Language) => string | undefined,
): SitemapEntry[] {
  return LANGUAGES.map((lang) => ({
    path: `/${lang}${pathWithoutLanguage}`,
    lang,
    alternatePath: `/${lang === "en" ? "ko" : "en"}${pathWithoutLanguage}`,
    changeFrequency,
    priority,
    lastModified: getLastModified?.(lang),
  }));
}

async function buildEntries(): Promise<SitemapEntry[]> {
  const { templates, landingContent } = await getPublishedContent();
  const templateSlugs = templates.length > 0
    ? [...new Set(templates.map((record) => record.slug))].sort()
    : [...FALLBACK_PUBLISHED_TEMPLATE_SLUGS];
  const templateDates = new Map(
    templates.map((record) => [`${record.lang}:${record.slug}`, record.updated_at ?? undefined]),
  );

  const pages = [
    ...addLanguagePair("", "weekly", 1, (lang) => latestDate(landingContent, lang)),
    ...addLanguagePair("/contact", "monthly", 0.6, (lang) => latestDate(landingContent, lang)),
    // The policy source has no authoritative content date, so lastmod is intentionally omitted.
    ...addLanguagePair("/privacy-policy", "yearly", 0.3),
  ];

  const templateEntries = templateSlugs.flatMap((slug) =>
    addLanguagePair(`/templates/${slug}`, "weekly", 0.7, (lang) => {
      const updatedAt = templateDates.get(`${lang}:${slug}`);
      return updatedAt ? new Date(updatedAt).toISOString() : undefined;
    }),
  );

  // These paths are source-controlled and do not have a reliable record-level date.
  const templateSubpages = INDEXABLE_TEMPLATE_SUBPAGES.flatMap((path) =>
    addLanguagePair(`/templates/${path}`, "monthly", 0.6),
  );

  return [...pages, ...templateEntries, ...templateSubpages];
}

function escapeXml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

async function createSitemapXml() {
  const urls = (await buildEntries())
    .map(({ path, lang, alternatePath, changeFrequency, priority, lastModified }) => {
      const alternateLang = lang === "en" ? "ko" : "en";
      return `  <url>
    <loc>${BASE}${path}</loc>${lastModified ? `\n    <lastmod>${escapeXml(lastModified)}</lastmod>` : ""}
    <xhtml:link rel="alternate" hreflang="${lang}" href="${BASE}${path}" />
    <xhtml:link rel="alternate" hreflang="${alternateLang}" href="${BASE}${alternatePath}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}${path.replace(/^\/en(?=\/|$)/, "/ko")}" />
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
}

export const dynamic = "force-static";

export async function GET() {
  return new Response(await createSitemapXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
