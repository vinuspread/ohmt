import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET() {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("templates")
    .select("id, slug, lang, name, applicable_industries, hashtags, status")
    .eq("status", "published")
    .limit(5);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ templates: data });
}
