import type { MetadataRoute } from "next";

const BASE = "https://ohmt.site";

// Keep this list aligned with Supabase templates rows whose status is "published".
// Draft and uploaded templates remain directly previewable, but are intentionally
// excluded from the sitemap and marked noindex in their template layouts.
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

const NOW = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const templateUrls: MetadataRoute.Sitemap = PUBLISHED_TEMPLATE_SLUGS.flatMap((slug) =>
    (["en", "ko"] as const).map((lang) => ({
      url: `${BASE}/${lang}/templates/${slug}`,
      lastModified: NOW,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  );

  const templateSubpageUrls: MetadataRoute.Sitemap = INDEXABLE_TEMPLATE_SUBPAGES.flatMap((path) =>
    (["en", "ko"] as const).map((lang) => ({
      url: `${BASE}/${lang}/templates/${path}`,
      lastModified: NOW,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  );

  return [
    ...(["en", "ko"] as const).flatMap((lang) => [
      {
        url: `${BASE}/${lang}`,
        lastModified: NOW,
        changeFrequency: "weekly" as const,
        priority: 1.0,
      },
      {
        url: `${BASE}/${lang}/contact`,
        lastModified: NOW,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      },
      {
        url: `${BASE}/${lang}/privacy-policy`,
        lastModified: NOW,
        changeFrequency: "yearly" as const,
        priority: 0.3,
      },
    ]),
    ...templateUrls,
    ...templateSubpageUrls,
  ];
}
