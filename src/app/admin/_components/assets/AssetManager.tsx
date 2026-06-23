"use client";

import { useEffect, useRef, useState, type DragEvent } from "react";
import { CheckCircle2, Copy, FileVideo, UploadCloud, XCircle } from "lucide-react";
import { clsx } from "clsx";
import { Button } from "../ui/Button";
import { Toast } from "../ui/Toast";

type UploadStatus = "idle" | "uploading" | "success" | "error";
type ToastState = { message: string; type: "success" | "error" };
type Asset = { key: string; filename: string; publicUrl: string; size: number; lastModified: string };

export function AssetManager() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");
  const [lastUrl, setLastUrl] = useState("");
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loadingAssets, setLoadingAssets] = useState(true);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [progress, setProgress] = useState(0);

  const fetchAssets = async () => {
    setLoadingAssets(true);
    try {
      const res = await fetch("/api/admin/assets");
      if (res.ok) setAssets(await res.json());
    } finally {
      setLoadingAssets(false);
    }
  };

  useEffect(() => { fetchAssets(); }, []);

  const handleSelectFile = (nextFile: File | undefined) => {
    setError("");
    setStatus("idle");
    setLastUrl("");
    if (!nextFile) return;

    const ext = nextFile.name.toLowerCase().slice(nextFile.name.lastIndexOf("."));
    if (![".mp4", ".webm", ".mov", ".ogg"].includes(ext)) {
      setError("mp4, webm, mov, ogg 파일만 업로드 가능합니다.");
      setStatus("error");
      return;
    }
    if (nextFile.size > 500 * 1024 * 1024) {
      setError("파일 크기는 500MB 이하여야 합니다.");
      setStatus("error");
      return;
    }
    setFile(nextFile);
  };

  const handleDrop = (event: DragEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setDragging(false);
    handleSelectFile(event.dataTransfer.files[0]);
  };

  const handleUpload = async () => {
    if (!file || status === "uploading") return;
    setStatus("uploading");
    setError("");
    setProgress(0);

    let uploadUrl: string;
    let publicUrl: string;
    try {
      const res = await fetch("/api/admin/assets/presign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: file.name }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "presign 실패");
      }
      ({ uploadUrl, publicUrl } = await res.json());
    } catch (err) {
      setError(err instanceof Error ? err.message : "업로드 준비에 실패했습니다.");
      setStatus("error");
      return;
    }

    try {
      await uploadWithProgress(uploadUrl, file, setProgress);
    } catch {
      setError("파일 업로드에 실패했습니다.");
      setStatus("error");
      return;
    }

    setLastUrl(publicUrl);
    setStatus("success");
    setFile(null);
    await fetchAssets();
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setToast({ message: "URL이 복사됐습니다.", type: "success" });
    });
  };

  return (
    <div className="space-y-8">
      {/* Upload section */}
      <div className="bg-white rounded-xl border border-zinc-200 p-6 space-y-5 max-w-2xl">
        <div>
          <p className="text-sm font-semibold text-zinc-900">동영상 업로드</p>
          <p className="mt-0.5 text-xs text-zinc-500">mp4, webm, mov, ogg · 최대 500MB · R2에 영구 저장</p>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept=".mp4,.webm,.mov,.ogg,video/mp4,video/webm,video/quicktime,video/ogg"
          className="sr-only"
          onChange={(e) => handleSelectFile(e.target.files?.[0])}
        />

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          disabled={status === "uploading"}
          className={clsx(
            "w-full rounded-xl border border-dashed p-8 text-center transition-colors disabled:cursor-not-allowed disabled:opacity-60",
            dragging ? "border-blue-400 bg-blue-50" : "border-zinc-300 bg-zinc-50 hover:bg-zinc-100"
          )}
        >
          <UploadCloud className="mx-auto h-8 w-8 text-zinc-400" />
          <span className="mt-3 block text-sm font-medium text-zinc-900">파일을 드래그하거나 클릭해서 선택</span>
          <span className="mt-1 block text-xs text-zinc-500">mp4, webm, mov, ogg · 최대 500MB</span>
        </button>

        {file && (
          <div className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3">
            <FileVideo className="h-5 w-5 text-zinc-400 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-zinc-900">{file.name}</p>
              <p className="text-xs text-zinc-500">{formatSize(file.size)}</p>
            </div>
          </div>
        )}

        {status === "uploading" && (
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-zinc-100 overflow-hidden">
              <div className="h-full rounded-full bg-zinc-900 transition-all duration-200" style={{ width: `${progress}%` }} />
            </div>
            <p className="text-xs text-zinc-500 text-right">{progress}%</p>
          </div>
        )}

        {status === "success" && lastUrl && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <CheckCircle2 size={15} />
              업로드 완료
            </div>
            <div className="flex items-center gap-2">
              <code className="flex-1 truncate rounded bg-white px-3 py-1.5 text-xs text-emerald-700 border border-emerald-200">{lastUrl}</code>
              <button
                onClick={() => copyUrl(lastUrl)}
                className="flex-shrink-0 flex items-center gap-1 rounded-lg border border-emerald-300 bg-white px-3 py-1.5 text-xs font-medium text-emerald-700 hover:bg-emerald-50 transition-colors"
              >
                <Copy size={12} /> 복사
              </button>
            </div>
          </div>
        )}

        {status === "error" && (
          <p className="flex items-center gap-2 text-sm text-red-600">
            <XCircle size={14} /> {error}
          </p>
        )}

        <div className="flex justify-end pt-1 border-t border-zinc-100">
          <Button variant="primary" onClick={handleUpload} loading={status === "uploading"} disabled={!file || status === "uploading"}>
            업로드
          </Button>
        </div>
      </div>

      {/* Asset list */}
      <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
        <div className="px-5 py-3.5 border-b border-zinc-100">
          <p className="text-sm font-semibold text-zinc-900">업로드된 동영상</p>
        </div>

        {loadingAssets ? (
          <div className="px-5 py-10 text-center text-sm text-zinc-400">불러오는 중...</div>
        ) : assets.length === 0 ? (
          <div className="px-5 py-10 text-center text-sm text-zinc-400">업로드된 동영상이 없습니다.</div>
        ) : (
          <div className="divide-y divide-zinc-100">
            {assets.map((asset) => (
              <div key={asset.key} className="flex items-center gap-4 px-5 py-3">
                <FileVideo className="h-5 w-5 text-zinc-300 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-zinc-900">{asset.filename}</p>
                  <p className="text-xs text-zinc-400">{formatSize(asset.size)} · {formatDate(asset.lastModified)}</p>
                </div>
                <button
                  onClick={() => copyUrl(asset.publicUrl)}
                  className="flex-shrink-0 flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-50 transition-colors"
                >
                  <Copy size={12} /> URL 복사
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}

function formatSize(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
  return `${Math.round(bytes / 1024)}KB`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("ko-KR", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

function uploadWithProgress(url: string, file: File, onProgress: (pct: number) => void): Promise<void> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", (e) => {
      if (e.lengthComputable) onProgress(Math.round((e.loaded / e.total) * 100));
    });
    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) resolve();
      else reject(new Error(`HTTP ${xhr.status}`));
    });
    xhr.addEventListener("error", () => reject(new Error("네트워크 오류")));
    xhr.open("PUT", url);
    xhr.setRequestHeader("Content-Type", file.type || "video/mp4");
    xhr.send(file);
  });
}
