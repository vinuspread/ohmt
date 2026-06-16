import type { MetadataRoute } from "next";
import { createClient } from "@/lib/supabase/server";

const siteUrl = "https://www.ohmt.site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createClient();
  const { data: templates } = await supabase
    .from("templates")
    .select("slug, updated_at")
    .eq("status", "published");

  const templateUrls: MetadataRoute.Sitemap = (templates ?? []).flatMap((template) => [
    {
      url: `${siteUrl}/en/templates/${template.slug}`,
      lastModified: template.updated_at ? new Date(template.updated_at) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/ko/templates/${template.slug}`,
      lastModified: template.updated_at ? new Date(template.updated_at) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]);

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/ko`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...templateUrls,
  ];
}
