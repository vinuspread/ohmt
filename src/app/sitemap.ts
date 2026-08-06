import type { MetadataRoute } from "next";

const BASE = "https://ohmt.site";

const TEMPLATE_SLUGS = [
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
  "OHMT034-nova-coffee",
  "OHMT035-atelier-house",
  "OHMT036-amber-grove",
  "OHMT037-figure-shop",
] as const;

const NOW = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const templateUrls: MetadataRoute.Sitemap = TEMPLATE_SLUGS.flatMap((slug) => [
    {
      url: `${BASE}/en/templates/${slug}`,
      lastModified: NOW,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE}/ko/templates/${slug}`,
      lastModified: NOW,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ]);

  return [
    {
      url: BASE,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/en`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/ko`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/en/contact`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/ko/contact`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/en/privacy-policy`,
      lastModified: NOW,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/ko/privacy-policy`,
      lastModified: NOW,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...templateUrls,
  ];
}
