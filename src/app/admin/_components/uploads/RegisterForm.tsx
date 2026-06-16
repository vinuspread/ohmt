"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Toast } from "../ui/Toast";
import type { Template } from "@/types/template";

type ToastState = { message: string; type: "success" | "error" };

const inputClassName = "w-full px-3 py-2 text-sm border rounded-lg outline-none transition-colors border-zinc-200 focus:border-zinc-900 placeholder:text-zinc-400 disabled:bg-zinc-50 disabled:text-zinc-400 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2";

const categoryOptions = [
  { value: "retail", label: "retail" },
  { value: "lifestyle", label: "lifestyle" },
  { value: "corporate", label: "corporate" },
  { value: "portfolio", label: "portfolio" },
  { value: "media", label: "media" },
  { value: "hospitality", label: "hospitality" },
  { value: "service", label: "service" },
  { value: "uncategorized", label: "uncategorized" },
];

export function RegisterForm({ template }: { template: Template }) {
  const router = useRouter();
  const [name, setName] = useState(template.name);
  const [category, setCategory] = useState(template.category);
  const [description, setDescription] = useState(template.description ?? "");
  const [thumbnailUrl, setThumbnailUrl] = useState(template.thumbnail_url ?? "");
  const [published, setPublished] = useState(template.status === "published");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [nameError, setNameError] = useState("");

  useEffect(() => {
    if (!toast || toast.type !== "success") return;

    const timer = window.setTimeout(() => {
      router.push("/admin/templates");
      router.refresh();
    }, 600);

    return () => window.clearTimeout(timer);
  }, [router, toast]);

  const handleSubmit = async (event: { preventDefault(): void }) => {
    event.preventDefault();

    if (!name.trim()) {
      setNameError("템플릿명은 필수입니다.");
      return;
    }

    setNameError("");
    setLoading(true);

    const response = await fetch(`/api/admin/templates/${template.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        category,
        description: description.trim() || null,
        thumbnail_url: thumbnailUrl.trim() || null,
        status: published ? "published" : "draft",
      }),
    });

    setLoading(false);

    if (response.ok) {
      setToast({ message: "서비스 등록이 완료됐습니다.", type: "success" });
      return;
    }

    setToast({ message: "서비스 등록에 실패했습니다.", type: "error" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="text-xs font-mono uppercase text-zinc-500">언어: {template.lang}</div>
        <Input label="템플릿명" value={name} onChange={(event) => setName(event.target.value)} error={nameError} required />
        <Select label="카테고리" value={category} onChange={(event) => setCategory(event.target.value)} options={categoryOptions} required />
        <div className="flex flex-col gap-2">
          <Input label="썸네일 URL" value={thumbnailUrl} onChange={(event) => setThumbnailUrl(event.target.value)} />
          {thumbnailUrl.trim() && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumbnailUrl.trim()}
              alt="썸네일 미리보기"
              className="h-40 w-auto max-w-full rounded-lg border border-zinc-200 object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
              onLoad={(event) => {
                event.currentTarget.style.display = "block";
              }}
            />
          )}
        </div>
        <label className="flex items-center gap-2 text-sm font-medium text-zinc-700">
          <input
            type="checkbox"
            checked={published}
            onChange={(event) => setPublished(event.target.checked)}
            className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
          />
          공개
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-zinc-700">설명</span>
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} className={`${inputClassName} min-h-28 resize-y`} />
        </label>
      </div>

      <div className="flex justify-end gap-3 pt-6 border-t border-zinc-200">
        <Button variant="secondary" onClick={() => router.push("/admin/uploads")}>취소</Button>
        <Button variant="primary" type="submit" loading={loading}>서비스 등록</Button>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </form>
  );
}
