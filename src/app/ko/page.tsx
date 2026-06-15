import { createClient } from "@/lib/supabase/server";
import type { Template } from "@/types/template";
import LandingPageClient, { type TemplateItem } from "./LandingPageClient";

export default async function Page() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("templates")
    .select("*")
    .eq("status", "published")
    .order("sort_order", { ascending: true });

  const templateRows: Template[] = error ? [] : data ?? [];
  const templates: TemplateItem[] = templateRows.map((template) => ({
    id: template.slug,
    name: template.name_ko ?? template.name_en,
    url: `/ko/templates/${template.slug}`,
    desc: template.description_ko ?? template.description_en ?? "",
    category: template.category,
    image: template.thumbnail_url ?? "",
    isFeatured: template.is_featured,
  }));

  return <LandingPageClient templates={templates} />;
}
