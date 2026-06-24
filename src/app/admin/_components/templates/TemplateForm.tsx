"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Toast } from "../ui/Toast";
import { ThumbnailField } from "../ui/ThumbnailField";
import { ZipUpdateModal } from "./ZipUpdateModal";
import type { Category, PricingPackage, Template, TemplateLang } from "@/types/template";

type TemplateFormMode = "create" | "edit";
type ToastState = { message: string; type: "success" | "error" };
type PricingOption = Pick<PricingPackage, "slug" | "name" | "price" | "lang" | "is_active">;

const inputClassName = "w-full px-3 py-2 text-sm border rounded-lg outline-none transition-colors border-zinc-200 focus:border-zinc-900 placeholder:text-zinc-400 disabled:bg-zinc-50 disabled:text-zinc-400 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2";

const langOptions = [
  { value: "en", label: "EN" },
  { value: "ko", label: "KO" },
];

export function TemplateForm({ mode, initialData }: { mode: TemplateFormMode; initialData?: Template }) {
  const router = useRouter();
  const [slug, setSlug] = useState(initialData?.slug ?? "");
  const [lang, setLang] = useState<TemplateLang>(initialData?.lang ?? "en");
  const [name, setName] = useState(initialData?.name ?? "");
  const [category, setCategory] = useState(initialData?.category ?? "");
  const [categories, setCategories] = useState<Category[]>([]);
  const [published, setPublished] = useState(initialData?.status === "published");
  const price = initialData?.price ?? 0;
  const sortOrder = initialData?.sort_order ?? 0;
  const [isFeatured, setIsFeatured] = useState(initialData?.is_featured ?? false);
  const [requiresConsultation, setRequiresConsultation] = useState(initialData?.requires_consultation ?? false);
  const [pricingOptions, setPricingOptions] = useState<PricingOption[]>([]);
  const [thumbnailUrl, setThumbnailUrl] = useState(initialData?.thumbnail_url ?? "");
  const [tags, setTags] = useState(initialData?.tags.join(", ") ?? "");
  const [description, setDescription] = useState(initialData?.description ?? "");
  const [templateKey, setTemplateKey] = useState(initialData?.template_key ?? "");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [slugError, setSlugError] = useState("");
  const [zipModalOpen, setZipModalOpen] = useState(false);

  useEffect(() => {
    fetch("/api/admin/categories")
      .then((response) => (response.ok ? response.json() : []))
      .then((result: Category[]) => {
        setCategories(result);
        if (!initialData?.category && result.length > 0) setCategory(result[0].name);
      })
      .catch(() => {});
  }, [initialData?.category]);

  useEffect(() => {
    fetch("/api/admin/pricing")
      .then((response) => (response.ok ? response.json() : []))
      .then((result: PricingOption[]) => {
        setPricingOptions(result.filter((option) => option.lang === lang && option.is_active));
      })
      .catch(() => setPricingOptions([]));
  }, [lang]);

  const goToList = () => {
    router.push("/admin/templates");
  };

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
    template_key: templateKey.trim() || null,
    price,
    status: published ? "published" : "draft",
    sort_order: sortOrder,
    is_featured: isFeatured,
    tags: tags.split(",").map((tag) => tag.trim()).filter(Boolean),
    applicable_packages: requiresConsultation ? [] : pricingOptions.map((o) => o.slug),
    requires_consultation: requiresConsultation,
  });

  const handleSubmit = async (event: { preventDefault(): void }) => {
    event.preventDefault();

    if (slugError) return;

    if (published && !requiresConsultation && pricingOptions.length === 0) {
      setToast({ message: "공개 전환을 위해 활성화된 가격 패키지가 필요합니다. 또는 '협의필요'를 체크해주세요.", type: "error" });
      return;
    }

    setLoading(true);

    const payload = buildPayload();
    const response = await fetch(mode === "create" ? "/api/admin/templates" : `/api/admin/templates/${initialData?.id}`, {
      method: mode === "create" ? "POST" : "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mode === "create" ? payload : { ...payload, slug: undefined }),
    });

    setLoading(false);

    if (response.ok) {
      goToList();
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
        <Select
          label="카테고리"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          options={categories.map((item) => ({ value: item.name, label: item.name }))}
        />
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
        <div className="flex flex-col gap-1">
          <Input
            label="고유키"
            value={templateKey}
            onChange={(event) => setTemplateKey(event.target.value.toUpperCase())}
            placeholder="OHMT001"
          />
          <p className="text-xs text-zinc-400">ZIP 업로드 시 자동 설정. 수동 입력 후 저장 가능.</p>
        </div>
        <ThumbnailField value={thumbnailUrl} onChange={setThumbnailUrl} className="md:col-span-2" />
        <div className="md:col-span-2 space-y-3 rounded-xl border border-zinc-200 bg-zinc-50/60 p-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-zinc-700">적용 가격정책</p>
            <p className="text-xs text-zinc-400">기본적으로 Starter · Professional · Premium 전체 적용. 협의 필요한 경우에만 아래를 체크하세요.</p>
          </div>
          <label className="flex items-center gap-2 text-sm text-zinc-700">
            <input
              type="checkbox"
              checked={requiresConsultation}
              onChange={(event) => setRequiresConsultation(event.target.checked)}
              className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
            />
            협의필요
          </label>
        </div>
        <label className="md:col-span-2 flex flex-col gap-1">
          <span className="text-sm font-medium text-zinc-700">설명</span>
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} className={`${inputClassName} min-h-28 resize-y`} />
        </label>
      </div>

      <div className="flex items-center justify-between gap-3 mt-8 pt-6 border-t border-zinc-200">
        {mode === "edit" ? (
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={() => setZipModalOpen(true)}>ZIP 파일 업데이트</Button>
            <span className="font-mono text-xs text-zinc-400">
              {templateKey ? `${templateKey}-${slug}-${lang}.zip` : `${slug}-${lang}.zip`}
            </span>
          </div>
        ) : (
          <span />
        )}
        <div className="flex gap-3">
          <Button variant="ghost" onClick={goToList}>취소</Button>
          <Button variant="primary" type="submit" loading={loading}>
            {mode === "create" ? "등록" : "저장"}
          </Button>
        </div>
      </div>

      {zipModalOpen && (
        <ZipUpdateModal
          slug={slug}
          lang={lang}
          onClose={() => setZipModalOpen(false)}
          onSuccess={(key) => { if (key) setTemplateKey(key); }}
        />
      )}

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </form>
  );
}
