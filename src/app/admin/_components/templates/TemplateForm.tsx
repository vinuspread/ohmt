"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Toast } from "../ui/Toast";
import { ThumbnailField } from "../ui/ThumbnailField";
import type { Template, TemplateLang } from "@/types/template";

type TemplateFormMode = "create" | "edit";
type ToastState = { message: string; type: "success" | "error" };

const inputClassName = "w-full px-3 py-2 text-sm border rounded-lg outline-none transition-colors border-zinc-200 focus:border-zinc-900 placeholder:text-zinc-400 disabled:bg-zinc-50 disabled:text-zinc-400 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2";

const langOptions = [
  { value: "en", label: "EN" },
  { value: "ko", label: "KO" },
];

const categoryOptions = [
  { value: "retail", label: "retail" },
  { value: "corporate", label: "corporate" },
  { value: "portfolio", label: "portfolio" },
  { value: "media", label: "media" },
  { value: "service", label: "service" },
  { value: "hospitality", label: "hospitality" },
  { value: "lifestyle", label: "lifestyle" },
];

export function TemplateForm({ mode, initialData }: { mode: TemplateFormMode; initialData?: Template }) {
  const router = useRouter();
  const [slug, setSlug] = useState(initialData?.slug ?? "");
  const [lang, setLang] = useState<TemplateLang>(initialData?.lang ?? "en");
  const [name, setName] = useState(initialData?.name ?? "");
  const [category, setCategory] = useState(initialData?.category ?? "retail");
  const [published, setPublished] = useState(initialData?.status === "published");
  const price = initialData?.price ?? 0;
  const sortOrder = initialData?.sort_order ?? 0;
  const [isFeatured, setIsFeatured] = useState(initialData?.is_featured ?? false);
  const [thumbnailUrl, setThumbnailUrl] = useState(initialData?.thumbnail_url ?? "");
  const [tags, setTags] = useState(initialData?.tags.join(", ") ?? "");
  const [description, setDescription] = useState(initialData?.description ?? "");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [slugError, setSlugError] = useState("");

  const checkSlug = async () => {
    if (mode !== "create" || !slug) return;

    const response = await fetch(`/api/admin/templates?slug=${encodeURIComponent(slug)}&lang=${lang}`);
    if (!response.ok) return;

    const result = (await response.json()) as { exists: boolean };
    setSlugError(result.exists ? "이미 사용 중인 슬러그+언어 조합입니다." : "");
  };

  const buildPayload = () => ({
    slug,
    lang,
    name,
    category,
    description: description || null,
    thumbnail_url: thumbnailUrl || null,
    price,
    status: published ? "published" : "draft",
    sort_order: sortOrder,
    is_featured: isFeatured,
    tags: tags.split(",").map((tag) => tag.trim()).filter(Boolean),
  });

  const handleSubmit = async (event: { preventDefault(): void }) => {
    event.preventDefault();

    if (slugError) return;

    setLoading(true);

    const payload = buildPayload();
    const response = await fetch(mode === "create" ? "/api/admin/templates" : `/api/admin/templates/${initialData?.id}`, {
      method: mode === "create" ? "POST" : "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mode === "create" ? payload : { ...payload, slug: undefined }),
    });

    setLoading(false);

    if (response.ok) {
      router.push("/admin/templates");
      router.refresh();
      return;
    }

    setToast({ message: "저장에 실패했습니다.", type: "error" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="슬러그" value={slug} onChange={(event) => setSlug(event.target.value)} onBlur={checkSlug} disabled={mode === "edit"} error={slugError} required />
        <Select label="언어" value={lang} onChange={(event) => setLang(event.target.value as TemplateLang)} options={langOptions} disabled={mode === "edit"} />
        <Input label="이름" value={name} onChange={(event) => setName(event.target.value)} required />
        <Select label="카테고리" value={category} onChange={(event) => setCategory(event.target.value)} options={categoryOptions} />
        <label className="flex items-center gap-2 text-sm font-medium text-zinc-700">
          <input
            type="checkbox"
            checked={published}
            onChange={(event) => setPublished(event.target.checked)}
            className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
          />
          공개
        </label>
        <div className="flex flex-col gap-1">
          <label className="flex items-center gap-2 text-sm font-medium text-zinc-700">
            <input
              type="checkbox"
              checked={isFeatured}
              onChange={(event) => setIsFeatured(event.target.checked)}
              className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
            />
            대표 템플릿으로 지정
          </label>
          <p className="text-xs text-zinc-400">목록 상단에 강조해서 보여집니다. 다중 선택 가능.</p>
        </div>
        <Input label="태그" placeholder="responsive, dark-mode" value={tags} onChange={(event) => setTags(event.target.value)} />
        <ThumbnailField value={thumbnailUrl} onChange={setThumbnailUrl} className="md:col-span-2" />
        <label className="md:col-span-2 flex flex-col gap-1">
          <span className="text-sm font-medium text-zinc-700">설명</span>
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} className={`${inputClassName} min-h-28 resize-y`} />
        </label>
      </div>

      <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-zinc-200">
        <Button variant="ghost" onClick={() => router.push("/admin/templates")}>취소</Button>
        <Button variant="primary" type="submit" loading={loading}>
          {mode === "create" ? "등록" : "저장"}
        </Button>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </form>
  );
}
