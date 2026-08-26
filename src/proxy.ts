import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { getAllowedAdminEmails, isAllowedAdminEmail } from "@/lib/admin-auth";

// 구형(번호 없는) 템플릿 URL이 검색엔진에 남아 있을 수 있어 신규 OHMT 번호형 슬러그로 매핑한다.
const LEGACY_TEMPLATE_SLUGS: Record<string, string> = {
  fashion: "OHMT001-fashion",
  jewelry: "OHMT002-jewelry",
  exhibition: "OHMT003-exhibition",
  furniture: "OHMT004-furniture",
  sneaker: "OHMT005-sneaker",
  studio: "OHMT006-studio",
  portfolio: "OHMT007-portfolio",
  airline: "OHMT008-airline",
  car: "OHMT009-car",
  cosmetic: "OHMT010-cosmetic",
  ir: "OHMT011-ir",
  magazine: "OHMT012-magazine",
  docs: "OHMT014-docs",
  dashboard: "OHMT015-dashboard",
  technology: "OHMT016-technology",
  "multi-shop": "OHMT017-multi-shop",
  burger: "OHMT018-burger",
  coffee: "OHMT019-coffee",
  hotel: "OHMT020-hotel",
  museum: "OHMT021-museum",
  yoga: "OHMT022-yoga",
  game: "OHMT023-game",
  "kids-education": "OHMT024-kids-education",
  wedding: "OHMT025-wedding",
  spa: "OHMT026-spa",
  architecture: "OHMT027-architecture",
  ev: "OHMT028-ev",
  fitness: "OHMT029-fitness",
  resort: "OHMT030-resort",
  "luma-camera": "OHMT031-luma-camera",
  community: "OHMT032-community",
  foundation: "OHMT033-foundation",
  "nova-coffee": "OHMT034-nova-coffee",
  "atelier-house": "OHMT035-atelier-house",
  "amber-grove": "OHMT036-amber-grove",
  "figure-shop": "OHMT037-figure-shop",
};

const LEGACY_TEMPLATE_URL_PATTERN = /^\/(en|ko)\/templates\/([a-z0-9-]+)((?:\/.*)?)$/;

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 루트는 User-Agent나 위치와 무관하게 하나의 언어 정책을 사용한다.
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/ko", request.url), 308);
  }

  const legacyMatch = pathname.match(LEGACY_TEMPLATE_URL_PATTERN);
  if (legacyMatch) {
    const [, lang, slug, rest] = legacyMatch;
    const newSlug = LEGACY_TEMPLATE_SLUGS[slug];
    if (newSlug) {
      return NextResponse.redirect(new URL(`/${lang}/templates/${newSlug}${rest}`, request.url), 308);
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-ohmt-lang", pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ko");

  const isAdminPage = pathname.startsWith("/admin");
  const isAdminApi = pathname.startsWith("/api/admin");

  if (!isAdminPage && !isAdminApi) {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }
  if (pathname === "/admin/login") {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    if (isAdminApi) {
      return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });
    }

    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  const allowedEmails = getAllowedAdminEmails();

  if (allowedEmails.length === 0) {
    if (isAdminApi) {
      return NextResponse.json({ error: "관리자 접근 설정이 필요합니다." }, { status: 403 });
    }

    return NextResponse.redirect(new URL("/admin/login?error=admin_not_configured", request.url));
  }

  if (!isAllowedAdminEmail(user.email, allowedEmails)) {
    if (isAdminApi) {
      return NextResponse.json({ error: "권한이 없습니다." }, { status: 403 });
    }

    return NextResponse.redirect(new URL("/admin/login?error=unauthorized", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};
