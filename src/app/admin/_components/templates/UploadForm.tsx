"use client";

import { useRef, useState, type DragEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckCircle2, FileArchive, UploadCloud, XCircle } from "lucide-react";
import { clsx } from "clsx";
import { Button } from "../ui/Button";
import { Select } from "../ui/Select";
import { Toast } from "../ui/Toast";

type UploadStatus = "idle" | "uploading" | "success" | "error";
type UploadLanguage = "en" | "ko";
type ToastState = { message: string; type: "success" | "error" };
type UploadResult = { slug: string; name: string; githubCommitSha: string; templateUrl: string };

const languageOptions = [
  { value: "en", label: "EN" },
  { value: "ko", label: "KO" },
];

export function UploadForm() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [lang, setLang] = useState<UploadLanguage>("en");
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<UploadResult | null>(null);
  const [toast, setToast] = useState<ToastState | null>(null);

  const uploading = status === "uploading";

  const handleSelectFile = (nextFile: File | undefined) => {
    setResult(null);
    setError("");
    setStatus("idle");

    if (!nextFile) return;

    if (!nextFile.name.toLowerCase().endsWith(".zip")) {
      setFile(null);
      setError("zip 파일만 업로드 가능합니다.");
      setStatus("error");
      return;
    }

    if (nextFile.size > 50 * 1024 * 1024) {
      setFile(null);
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
    setResult(null);

    // Step 1: presigned URL 발급
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

      // Step 2: R2에 직접 업로드
      const r2Res = await fetch(uploadUrl, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": "application/zip" },
      });
      if (!r2Res.ok) throw new Error("R2 업로드 실패");
    } catch {
      setError("파일 업로드에 실패했습니다.");
      setStatus("error");
      setToast({ message: "파일 업로드에 실패했습니다.", type: "error" });
      return;
    }

    // Step 3: 서버에서 처리
    let response: Response;
    try {
      response = await fetch("/api/admin/templates/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ r2Key, lang }),
      });
    } catch {
      setError("네트워크 오류로 업로드에 실패했습니다.");
      setStatus("error");
      setToast({ message: "네트워크 오류로 업로드에 실패했습니다.", type: "error" });
      return;
    }

    let payload: Partial<UploadResult> & { error?: string } = {};
    try {
      payload = (await response.json()) as Partial<UploadResult> & { error?: string };
    } catch {}

    if (!response.ok) {
      const message = payload.error ?? "업로드에 실패했습니다.";
      setError(message);
      setStatus("error");
      setToast({ message, type: "error" });
      return;
    }

    const uploadResult = payload as UploadResult;
    setResult(uploadResult);
    setStatus("success");
    setToast({ message: `${uploadResult.slug} 업로드가 완료됐습니다.`, type: "success" });
    router.push("/admin/templates");
    router.refresh();
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-zinc-900">zip 파일</p>
        <p className="mt-1 text-sm text-zinc-500">템플릿 루트 폴더와 public/templates/[slug] 이미지를 포함한 zip 파일을 업로드합니다.</p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept=".zip,application/zip,application/x-zip-compressed"
        className="sr-only"
        onChange={(event) => handleSelectFile(event.target.files?.[0])}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        disabled={uploading}
        className={clsx(
          "w-full rounded-xl border border-dashed p-10 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
          dragging ? "border-blue-400 bg-blue-50" : "border-zinc-300 bg-zinc-50 hover:bg-zinc-100"
        )}
      >
        <UploadCloud aria-hidden="true" className="mx-auto h-10 w-10 text-zinc-400" />
        <span className="mt-4 block text-sm font-medium text-zinc-900">zip 파일을 드래그하거나 클릭해서 선택</span>
        <span className="mt-1 block text-xs text-zinc-500">.zip 파일만 지원, 최대 50MB</span>
      </button>

      {file && (
        <div className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3">
          <FileArchive aria-hidden="true" className="h-5 w-5 text-zinc-500" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-zinc-900">{file.name}</p>
            <p className="text-xs text-zinc-500">{formatFileSize(file.size)}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setFile(null)} disabled={uploading}>
            제거
          </Button>
        </div>
      )}

      <Select label="언어" value={lang} onChange={(event) => setLang(event.target.value as UploadLanguage)} options={languageOptions} disabled={uploading} />

      <div className="flex items-center justify-between gap-4 border-t border-zinc-200 pt-6">
        <StatusMessage status={status} error={error} result={result} />
        <Button variant="primary" onClick={handleUpload} loading={uploading} disabled={!file || uploading}>
          업로드
        </Button>
      </div>

      {result && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          <div className="flex items-center gap-2 font-medium">
            <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
            업로드 완료
          </div>
          <dl className="mt-3 grid gap-2 text-xs">
            <div className="flex gap-2">
              <dt className="w-24 text-emerald-700">slug</dt>
              <dd className="font-mono">{result.slug}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-24 text-emerald-700">commit</dt>
              <dd className="font-mono">{result.githubCommitSha}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-24 text-emerald-700">templateUrl</dt>
              <dd className="font-mono">{result.templateUrl}</dd>
            </div>
          </dl>
          <div className="mt-4 flex gap-2">
            <Link href="/admin/templates">
              <Button variant="secondary" size="sm">
                목록으로 이동
              </Button>
            </Link>
            <Link href={result.templateUrl} target="_blank">
              <Button variant="ghost" size="sm">
                템플릿 보기
              </Button>
            </Link>
          </div>
        </div>
      )}

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}

function StatusMessage({ status, error, result }: { status: UploadStatus; error: string; result: UploadResult | null }) {
  if (status === "uploading") return <p className="text-sm text-zinc-500">업로드 중입니다. 검증 후 GitHub에 배포합니다.</p>;
  if (status === "success" && result) return <p className="text-sm text-emerald-700">{result.slug} 템플릿이 등록됐습니다.</p>;
  if (status === "error") {
    return (
      <p className="flex items-center gap-2 text-sm text-red-600" role="alert">
        <XCircle aria-hidden="true" className="h-4 w-4" />
        {error}
      </p>
    );
  }
  return <p className="text-sm text-zinc-500">파일을 선택한 뒤 업로드를 시작하세요.</p>;
}

function formatFileSize(size: number): string {
  if (size < 1024 * 1024) return `${Math.max(1, Math.round(size / 1024)).toLocaleString()}KB`;
  return `${(size / (1024 * 1024)).toFixed(1)}MB`;
}
