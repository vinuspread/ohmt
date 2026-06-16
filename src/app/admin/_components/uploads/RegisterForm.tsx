"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Toast } from "../ui/Toast";
import type { Template } from "@/types/template";

type RegistrationStatus = "draft" | "published";
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

const statusOptions = [
  { value: "draft", label: "draft" },
  { value: "published", label: "published" },
];

export function RegisterForm({ template }: { template: Template }) {
  const router = useRouter();
  const [nameEn, setNameEn] = useState(template.name_en);
  const [nameKo, setNameKo] = useState(template.name_ko ?? "");
  const [category, setCategory] = useState(template.category);
  const [descriptionEn, setDescriptionEn] = useState(template.description_en ?? "");
  const [descriptionKo, setDescriptionKo] = useState(template.description_ko ?? "");
  const [thumbnailUrl, setThumbnailUrl] = useState(template.thumbnail_url ?? "");
  const [status, setStatus] = useState<RegistrationStatus>("draft");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [nameEnError, setNameEnError] = useState("");

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

    if (!nameEn.trim()) {
      setNameEnError("템플릿명 EN은 필수입니다.");
      return;
    }

    setNameEnError("");
    setLoading(true);

    const response = await fetch(`/api/admin/templates/${template.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name_en: nameEn.trim(),
        name_ko: nameKo.trim() || null,
        category,
        description_en: descriptionEn.trim() || null,
        description_ko: descriptionKo.trim() || null,
        thumbnail_url: thumbnailUrl.trim() || null,
        status,
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
        <Input label="템플릿명 (EN)" value={nameEn} onChange={(event) => setNameEn(event.target.value)} error={nameEnError} required />
        <Input label="템플릿명 (KO)" value={nameKo} onChange={(event) => setNameKo(event.target.value)} />
        <Select label="카테고리" value={category} onChange={(event) => setCategory(event.target.value)} options={categoryOptions} required />
        <Input label="썸네일 URL" value={thumbnailUrl} onChange={(event) => setThumbnailUrl(event.target.value)} />
        <Select label="공개 여부" value={status} onChange={(event) => setStatus(event.target.value as RegistrationStatus)} options={statusOptions} required />
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-zinc-700">설명 (EN)</span>
          <textarea value={descriptionEn} onChange={(event) => setDescriptionEn(event.target.value)} className={`${inputClassName} min-h-28 resize-y`} />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-zinc-700">설명 (KO)</span>
          <textarea value={descriptionKo} onChange={(event) => setDescriptionKo(event.target.value)} className={`${inputClassName} min-h-28 resize-y`} />
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
