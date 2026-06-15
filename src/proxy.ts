import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { getAllowedAdminEmails, isAllowedAdminEmail } from "@/lib/admin-auth";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAdminPage = pathname.startsWith("/admin");
  const isAdminApi = pathname.startsWith("/api/admin");

  if (!isAdminPage && !isAdminApi) return NextResponse.next();
  if (pathname === "/admin/login") return NextResponse.next();

  const response = NextResponse.next({
    request: { headers: request.headers },
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

export const config = { matcher: ["/admin/:path*", "/api/admin/:path*"] };
