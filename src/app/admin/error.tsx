"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle } from "lucide-react";

export default function AdminError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error("[Admin Error]", error);
  }, [error]);

  const isChunkError =
    error.message.includes("ChunkLoadError") ||
    error.message.includes("Loading chunk") ||
    error.message.includes("Failed to fetch");

  useEffect(() => {
    if (isChunkError) {
      window.location.reload();
    }
  }, [isChunkError]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <div className="max-w-md w-full bg-white rounded-2xl border border-zinc-200 p-8 space-y-5 text-center">
        <div className="flex justify-center">
          <AlertTriangle className="w-10 h-10 text-amber-400" />
        </div>
        <div className="space-y-2">
          <h2 className="text-base font-bold text-zinc-900">오류가 발생했습니다</h2>
          <p className="text-sm text-zinc-500">
            {isChunkError
              ? "새 배포로 인해 페이지를 다시 불러옵니다..."
              : "예기치 않은 오류가 발생했습니다. 다시 시도하거나 페이지를 새로고침하세요."}
          </p>
        </div>
        {!isChunkError && (
          <div className="flex justify-center gap-3">
            <button
              onClick={reset}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-zinc-900 text-white hover:bg-zinc-700 transition-colors"
            >
              다시 시도
            </button>
            <button
              onClick={() => router.push("/admin/templates")}
              className="px-4 py-2 text-sm font-medium rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-50 transition-colors"
            >
              목록으로
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
