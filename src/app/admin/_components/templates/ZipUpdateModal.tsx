"use client";

import { useRef, useState, type DragEvent } from "react";
import { CheckCircle2, FileArchive, UploadCloud, X, XCircle } from "lucide-react";
import { clsx } from "clsx";
import { Button } from "../ui/Button";

type UploadStatus = "idle" | "uploading" | "success" | "error";

interface Props {
  slug: string;
  lang: string;
  onClose: () => void;
  onSuccess?: (templateKey: string | null) => void;
}

export function ZipUpdateModal({ slug, lang, onClose, onSuccess }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");
  const [commitSha, setCommitSha] = useState("");

  const uploading = status === "uploading";

  const handleSelectFile = (nextFile: File | undefined) => {
    setError("");
    setStatus("idle");
    if (!nextFile) return;
    if (!nextFile.name.toLowerCase().endsWith(".zip")) {
      setError("zip 파일만 업로드 가능합니다.");
      setStatus("error");
      return;
    }
    if (nextFile.size > 50 * 1024 * 1024) {
      setError("파일 크기는 50MB 이하여야 합니다.");
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
    if (!file || uploading) return;
    setStatus("uploading");
    setError("");

    let r2Key: string;
    try {
      const presignRes = await fetch("/api/admin/templates/presign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: file.name }),
      });
      if (!presignRes.ok) throw new Error("presign 실패");
      const { uploadUrl, key } = await presignRes.json();
      r2Key = key;

      const r2Res = await fetch(uploadUrl, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": "application/zip" },
      });
      if (!r2Res.ok) throw new Error("R2 업로드 실패");
    } catch {
      setError("파일 업로드에 실패했습니다.");
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("/api/admin/templates/upload?overwrite=1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ r2Key, lang, overwrite: true, originalFilename: file.name }),
      });
      const payload = await response.json();
      if (!response.ok) {
        setError(payload.error ?? "업로드에 실패했습니다.");
        setStatus("error");
        return;
      }
      setCommitSha(payload.githubCommitSha ?? "");
      setStatus("success");
      onSuccess?.(payload.templateKey ?? null);
    } catch {
      setError("네트워크 오류로 업로드에 실패했습니다.");
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-base font-bold text-zinc-900">ZIP 파일 업데이트</h2>
            <p className="text-xs text-zinc-500 mt-0.5">
              <span className="font-mono bg-zinc-100 px-1.5 py-0.5 rounded">{slug}</span>
              <span className="ml-1.5 font-mono bg-zinc-100 px-1.5 py-0.5 rounded uppercase">{lang}</span>
              <span className="ml-1.5">템플릿을 새 zip으로 교체합니다</span>
            </p>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <X size={18} />
          </button>
        </div>

        {status === "success" ? (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-800">
              <CheckCircle2 size={16} />
              업데이트 완료
            </div>
            <p className="text-xs text-emerald-700">GitHub에 반영됐습니다. Vercel이 자동으로 재배포를 시작합니다.</p>
            {commitSha && (
              <p className="text-xs font-mono text-emerald-600">commit: {commitSha.slice(0, 12)}</p>
            )}
            <Button variant="ghost" size="sm" onClick={onClose}>닫기</Button>
          </div>
        ) : (
          <>
            <input
              ref={inputRef}
              type="file"
              accept=".zip,application/zip,application/x-zip-compressed"
              className="sr-only"
              onChange={(e) => handleSelectFile(e.target.files?.[0])}
            />

            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
              disabled={uploading}
              className={clsx(
                "w-full rounded-xl border border-dashed p-8 text-center transition-colors disabled:cursor-not-allowed disabled:opacity-60",
                dragging ? "border-blue-400 bg-blue-50" : "border-zinc-300 bg-zinc-50 hover:bg-zinc-100"
              )}
            >
              <UploadCloud className="mx-auto h-8 w-8 text-zinc-400" />
              <span className="mt-3 block text-sm font-medium text-zinc-900">zip 파일을 드래그하거나 클릭해서 선택</span>
              <span className="mt-1 block text-xs text-zinc-500">.zip 파일만 지원 · 최대 50MB</span>
            </button>

            {file && (
              <div className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3">
                <FileArchive className="h-5 w-5 text-zinc-500 flex-shrink-0" />
                <p className="truncate text-sm font-medium text-zinc-900 flex-1">{file.name}</p>
                <button onClick={() => setFile(null)} className="text-zinc-400 hover:text-zinc-900">
                  <X size={14} />
                </button>
              </div>
            )}

            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-600">
                <XCircle size={14} />
                {error}
              </p>
            )}

            <div className="flex justify-end gap-3 pt-2 border-t border-zinc-100">
              <Button variant="ghost" onClick={onClose} disabled={uploading}>취소</Button>
              <Button variant="primary" onClick={handleUpload} loading={uploading} disabled={!file || uploading}>
                업로드
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
