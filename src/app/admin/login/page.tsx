import { redirect } from "next/navigation";

import { getAdminAllowlist, getCurrentAdminUser, isAuthConfigured } from "@/lib/admin/auth";

const errorMessageMap: Record<string, string> = {
  auth_not_configured: "인증 환경변수가 누락되어 로그인 요청을 시작할 수 없습니다.",
  oauth_start_failed: "Google 로그인 요청 생성에 실패했습니다. 잠시 후 다시 시도해 주세요.",
  callback_code_missing: "Google 인증 코드가 전달되지 않았습니다. 다시 로그인해 주세요.",
  oauth_provider_error: "Google 인증 과정에서 공급자 오류가 발생했습니다. 설정값을 확인해 주세요.",
  oauth_code_exchange_failed: "Google 인증 코드 교환에 실패했습니다. Supabase/Google OAuth 설정을 확인해 주세요.",
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; reason?: string }>;
}) {
  const configured = isAuthConfigured();
  const allowlistCount = getAdminAllowlist().length;
  const admin = await getCurrentAdminUser();
  if (admin) {
    redirect("/admin");
  }
  const params = await searchParams;
  const errorCode = params.error;
  const errorReason = params.reason;
  const errorMessage = errorCode ? errorMessageMap[errorCode] ?? "로그인 중 알 수 없는 오류가 발생했습니다." : null;

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 p-6 text-zinc-100">
      <section className="w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">TemplateHub Admin</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">관리자 로그인</h1>
        <p className="mt-3 text-sm text-zinc-400">
          Google 로그인 후 서버 allowlist(`ADMIN_ALLOWLIST_EMAILS`) 검증을 통과한 계정만 접근할 수 있습니다.
        </p>

        <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-950/60 p-4 text-sm text-zinc-300">
          <p>환경 설정 상태: {configured ? "완료" : "미설정"}</p>
          <p className="mt-1">allowlist 등록 수: {allowlistCount}명</p>
        </div>

        {errorMessage ? (
          <div className="mt-4 rounded-lg border border-rose-800/60 bg-rose-950/40 p-4 text-sm text-rose-200">
            <p className="font-medium">로그인 실패</p>
            <p className="mt-1">{errorMessage}</p>
            <p className="mt-2 text-xs text-rose-300/80">오류 코드: {errorCode}</p>
            {errorReason ? <p className="mt-1 text-xs text-rose-300/80 break-all">상세 사유: {errorReason}</p> : null}
          </div>
        ) : null}

        <div className="mt-8 space-y-3">
          <a
            href="/auth/login"
            className="block w-full rounded-lg border border-zinc-700 bg-white px-4 py-3 text-center font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            Google로 로그인
          </a>
          <a
            href="/"
            className="block w-full rounded-lg border border-zinc-800 px-4 py-3 text-center text-sm text-zinc-300 transition hover:bg-zinc-800"
          >
            템플릿허브로 돌아가기
          </a>
        </div>
      </section>
    </main>
  );
}
