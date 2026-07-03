import { AdminShell } from "@/app/admin/_components/layout/AdminShell";

export default function AnalyticsPage() {
  return (
    <AdminShell title="Analytics">
      <div className="flex flex-col gap-4 h-[calc(100vh-120px)]">
        {/* 상단 바로가기 */}
        <div className="flex items-center gap-3">
          <a
            href="https://analytics.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors text-zinc-700"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google Analytics (GA4)
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
          <span className="text-xs text-zinc-400">GA4 측정 ID: G-TN2XSY9H59</span>
        </div>

        {/* Umami 대시보드 */}
        <div className="flex-1 bg-white rounded-xl border border-zinc-200 overflow-hidden">
          <iframe
            src="https://cloud.umami.is/share/sckJRqy2Qyma2cNs"
            className="w-full h-full border-0"
            loading="lazy"
            title="Umami Analytics"
          />
        </div>
      </div>
    </AdminShell>
  );
}
