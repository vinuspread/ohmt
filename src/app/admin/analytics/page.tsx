import { AdminShell } from "@/app/admin/_components/layout/AdminShell";

export default function AnalyticsPage() {
  return (
    <AdminShell title="Analytics">
      <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden" style={{ height: "calc(100vh - 120px)" }}>
        <iframe
          src="https://datastudio.google.com/embed/reporting/7d7c3aa7-e71a-4b26-bc81-b74329f88283/page/ep21F"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          title="Google Looker Studio Analytics"
        />
      </div>
    </AdminShell>
  );
}
