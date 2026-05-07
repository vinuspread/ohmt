import { NextResponse } from "next/server";

import { isAuthConfigured } from "@/lib/admin/auth";
import { createSupabaseRouteHandlerClient } from "@/lib/supabase/route-handler";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const origin = url.origin;

  const redirectWithError = (code: string) =>
    NextResponse.redirect(new URL(`/admin/login?error=${encodeURIComponent(code)}`, origin));

  if (!isAuthConfigured()) {
    return redirectWithError("auth_not_configured");
  }

  const { supabase, applyCookies } = await createSupabaseRouteHandlerClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  });

  if (error || !data.url) {
    console.error("[auth/login] Failed to start Google OAuth", error);
    return applyCookies(redirectWithError("oauth_start_failed"));
  }

  return applyCookies(NextResponse.redirect(data.url));
}
