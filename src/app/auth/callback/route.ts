import { NextResponse } from "next/server";

import { getAdminAllowlist, isAuthConfigured } from "@/lib/admin/auth";
import { createSupabaseRouteHandlerClient } from "@/lib/supabase/route-handler";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const providerError = requestUrl.searchParams.get("error");
  const providerErrorDescription = requestUrl.searchParams.get("error_description");
  const origin = requestUrl.origin;

  const redirectWithError = (errorCode: string, reason?: string | null) => {
    const target = new URL(`/admin/login?error=${encodeURIComponent(errorCode)}`, origin);
    if (reason) {
      target.searchParams.set("reason", reason);
    }
    return NextResponse.redirect(target);
  };

  if (providerError) {
    console.error("[auth/callback] OAuth provider returned error", {
      providerError,
      providerErrorDescription,
      callbackUrl: request.url,
    });
    return redirectWithError("oauth_provider_error", providerErrorDescription ?? providerError);
  }

  if (!isAuthConfigured() || !code) {
    return redirectWithError(
      !isAuthConfigured() ? "auth_not_configured" : "callback_code_missing",
      !isAuthConfigured() ? "supabase_env_missing" : "code_parameter_not_found",
    );
  }

  const { supabase, applyCookies } = await createSupabaseRouteHandlerClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    console.error("[auth/callback] Failed to exchange code for session", error);
    return applyCookies(redirectWithError("oauth_code_exchange_failed", error.message));
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const email = user?.email?.trim().toLowerCase();
  const allowlist = getAdminAllowlist();

  if (!email || !allowlist.includes(email)) {
    await supabase.auth.signOut();
    return applyCookies(NextResponse.redirect(new URL("/not-authorized", origin)));
  }

  return applyCookies(NextResponse.redirect(new URL("/admin", origin)));
}
