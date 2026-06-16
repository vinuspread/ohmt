"use client";

import { useRef, useState } from "react";

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

export function ThumbnailField({ value, onChange }: { value: string; onChange: (url: string) => void }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [meta, setMeta] = useState<{ width: number; height: number; size: number } | null>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    setError("");
    setUploading(true);

    try {
      const presignResponse = await fetch("/api/admin/templates/thumbnail-presign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentType: file.type, size: file.size }),
      });

      if (!presignResponse.ok) {
        const result = await presignResponse.json().catch(() => null);
        setError(result?.error ?? "업로드 준비에 실패했습니다.");
        setUploading(false);
        return;
      }

      const { uploadUrl, publicUrl } = await presignResponse.json();

      const putResponse = await fetch(uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });

      if (!putResponse.ok) {
        setError("이미지 업로드에 실패했습니다.");
        setUploading(false);
        return;
      }

      const dimensions = await new Promise<{ width: number; height: number }>((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
        img.onerror = () => resolve({ width: 0, height: 0 });
        img.src = URL.createObjectURL(file);
      });

      setMeta({ ...dimensions, size: file.size });
      onChange(publicUrl);
    } catch {
      setError("이미지 업로드 중 오류가 발생했습니다.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-1 md:col-span-2">
      <span className="text-sm font-medium text-zinc-700">썸네일 이미지</span>
      <div className="flex items-start gap-3">
        <div className="w-32 h-20 flex-shrink-0 rounded-lg border border-zinc-200 bg-zinc-50 overflow-hidden flex items-center justify-center">
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value} alt="썸네일 미리보기" className="w-full h-full object-cover" />
          ) : (
            <span className="text-xs text-zinc-400">미리보기</span>
          )}
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <input
            type="text"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="https:// 또는 /templates/..."
            className="w-full px-3 py-2 text-sm border rounded-lg outline-none transition-colors border-zinc-200 focus:border-zinc-900 placeholder:text-zinc-400"
          />
          <p className="text-xs text-zinc-400">
            {meta ? `${meta.width}x${meta.height} · ${formatBytes(meta.size)}` : "이미지를 업로드하면 사이즈/용량이 표시됩니다."}
          </p>
          {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="px-3 py-2 text-sm font-medium border border-zinc-200 rounded-lg hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
        >
          {uploading ? "업로드 중..." : "이미지 찾기"}
        </button>
        <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={handleFileSelect} />
      </div>
    </div>
  );
}
