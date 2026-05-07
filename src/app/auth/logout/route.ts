import { NextResponse } from "next/server";

import { createSupabaseRouteHandlerClient } from "@/lib/supabase/route-handler";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const { supabase, applyCookies } = await createSupabaseRouteHandlerClient();
  await supabase.auth.signOut();
  return applyCookies(NextResponse.redirect(new URL("/admin/login", requestUrl.origin)));
}
