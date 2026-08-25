const BASE = "https://ohmt.site";

const PUBLISHED_TEMPLATE_SLUGS = [
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

type SitemapEntry = {
  url: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

function buildEntries(): SitemapEntry[] {
  const pages = (["en", "ko"] as const).flatMap((lang) => [
    { url: `${BASE}/${lang}`, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE}/${lang}/contact`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE}/${lang}/privacy-policy`, changeFrequency: "yearly" as const, priority: 0.3 },
  ]);

  const templates = PUBLISHED_TEMPLATE_SLUGS.flatMap((slug) =>
    (["en", "ko"] as const).map((lang) => ({
      url: `${BASE}/${lang}/templates/${slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  );

  const templateSubpages = INDEXABLE_TEMPLATE_SUBPAGES.flatMap((path) =>
    (["en", "ko"] as const).map((lang) => ({
      url: `${BASE}/${lang}/templates/${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  );

  return [...pages, ...templates, ...templateSubpages];
}

function createSitemapXml() {
  const lastModified = new Date().toISOString();
  const urls = buildEntries()
    .map(
      ({ url, changeFrequency, priority }) => `  <url>
    <loc>${url}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export const dynamic = "force-static";

export function GET() {
  return new Response(createSitemapXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
