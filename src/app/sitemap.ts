import type { MetadataRoute } from "next";

const BASE = "https://ohmt.site";

const TEMPLATE_SLUGS = [
  "airline",
  "burger",
  "car",
  "coffee",
  "cosmetic",
  "dashboard",
  "docs",
  "exhibition",
  "fashion",
  "furniture",
  "game",
  "hotel",
  "ir",
  "jewelry",
  "kids-education",
  "magazine",
  "multi-shop",
  "museum",
  "newspaper",
  "portfolio",
  "sneaker",
  "spa",
  "studio",
  "technology",
  "wedding",
  "yoga",
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
    ...templateUrls,
  ];
}
