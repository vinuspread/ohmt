"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Trash2 } from "lucide-react";
import { clsx } from "clsx";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Modal } from "../ui/Modal";
import { Select } from "../ui/Select";
import { Table, type Column } from "../ui/Table";
import { Toast } from "../ui/Toast";
import type { PricingPackage, TemplateLang } from "@/types/template";

type ToastState = { message: string; type: "success" | "error" };
type ModalState = { mode: "create" } | { mode: "edit"; pricingPackage: PricingPackage } | null;

interface FormState {
  lang: TemplateLang;
  slug: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  featuresText: string;
  is_recommended: boolean;
  is_active: boolean;
  sort_order: string;
}

const emptyForm: FormState = {
  lang: "ko",
  slug: "",
  name: "",
  description: "",
  price: "",
  duration: "",
  featuresText: "",
  is_recommended: false,
  is_active: true,
  sort_order: "0",
};

const tabs: { label: string; value: TemplateLang }[] = [
  { label: "KO", value: "ko" },
  { label: "EN", value: "en" },
];

function toFeatures(text: string) {
  return text.split("\n").map((feature) => feature.trim()).filter(Boolean);
}

function toForm(pricingPackage: PricingPackage): FormState {
  return {
    lang: pricingPackage.lang,
    slug: pricingPackage.slug,
    name: pricingPackage.name,
    description: pricingPackage.description,
    price: pricingPackage.price,
    duration: pricingPackage.duration,
    featuresText: pricingPackage.features.join("\n"),
    is_recommended: pricingPackage.is_recommended,
    is_active: pricingPackage.is_active,
    sort_order: String(pricingPackage.sort_order),
  };
}

export function PricingTable({ data }: { data: PricingPackage[] }) {
  const router = useRouter();
  const [activeLang, setActiveLang] = useState<TemplateLang>("ko");
  const [modal, setModal] = useState<ModalState>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const visiblePackages = data.filter((pricingPackage) => pricingPackage.lang === activeLang);

  const openCreate = () => {
    setForm({ ...emptyForm, lang: activeLang, sort_order: String(visiblePackages.length) });
    setError("");
    setModal({ mode: "create" });
  };

  const openEdit = (pricingPackage: PricingPackage) => {
    setForm(toForm(pricingPackage));
    setError("");
    setModal({ mode: "edit", pricingPackage });
  };

  const closeModal = () => setModal(null);

  const handleSubmit = async () => {
    const sortOrder = Number(form.sort_order);
    const features = toFeatures(form.featuresText);

    if (!form.slug.trim() || !form.name.trim() || !form.description.trim() || !form.price.trim() || !form.duration.trim() || features.length === 0) {
      setError("모든 필수 항목을 입력해주세요.");
      return;
    }

    if (!Number.isFinite(sortOrder)) {
      setError("순서는 숫자로 입력해주세요.");
      return;
    }

    setLoading(true);

    const payload = {
      lang: form.lang,
      slug: form.slug.trim(),
      name: form.name.trim(),
      description: form.description.trim(),
      price: form.price.trim(),
      duration: form.duration.trim(),
      features,
      is_recommended: form.is_recommended,
      is_active: form.is_active,
      sort_order: sortOrder,
    };

    const response =
      modal?.mode === "edit"
        ? await fetch(`/api/admin/pricing/${modal.pricingPackage.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: payload.name,
              description: payload.description,
              price: payload.price,
              duration: payload.duration,
              features: payload.features,
              is_recommended: payload.is_recommended,
              is_active: payload.is_active,
              sort_order: payload.sort_order,
            }),
          })
        : await fetch("/api/admin/pricing", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

    setLoading(false);

    if (response.ok) {
      setToast({ message: modal?.mode === "edit" ? "가격 패키지가 수정됐습니다." : "가격 패키지가 추가됐습니다.", type: "success" });
      closeModal();
      router.refresh();
      return;
    }

    const result = (await response.json().catch(() => null)) as { error?: string } | null;
    setError(result?.error ?? "저장에 실패했습니다.");
  };

  const handleToggle = async (pricingPackage: PricingPackage, key: "is_recommended" | "is_active") => {
    const response = await fetch(`/api/admin/pricing/${pricingPackage.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [key]: !pricingPackage[key] }),
    });

    if (response.ok) {
      setToast({ message: "가격 패키지가 수정됐습니다.", type: "success" });
      router.refresh();
      return;
    }

    const result = (await response.json().catch(() => null)) as { error?: string } | null;
    setToast({ message: result?.error ?? "수정에 실패했습니다.", type: "error" });
  };

  const handleDelete = async (pricingPackage: PricingPackage) => {
    if (!window.confirm(`"${pricingPackage.name}" 가격 패키지를 삭제하시겠습니까?`)) return;

    const response = await fetch(`/api/admin/pricing/${pricingPackage.id}`, { method: "DELETE" });

    if (response.ok) {
      setToast({ message: "가격 패키지가 삭제됐습니다.", type: "success" });
      router.refresh();
      return;
    }

    const result = (await response.json().catch(() => null)) as { error?: string } | null;
    setToast({ message: result?.error ?? "삭제에 실패했습니다.", type: "error" });
  };

  const columns: Column<PricingPackage>[] = [
    {
      key: "sort_order",
      header: "순서",
      width: "80px",
      render: (pricingPackage) => <span className="font-medium text-zinc-900">{pricingPackage.sort_order}</span>,
    },
    {
      key: "name",
      header: "플랜명",
      render: (pricingPackage) => (
        <div>
          <p className="font-medium text-zinc-900">{pricingPackage.name}</p>
          <p className="mt-1 text-xs text-zinc-500">{pricingPackage.slug}</p>
        </div>
      ),
    },
    {
      key: "price",
      header: "가격",
      width: "140px",
      render: (pricingPackage) => <span className="font-semibold text-zinc-900">{pricingPackage.price}</span>,
    },
    {
      key: "duration",
      header: "기간",
      width: "140px",
      render: (pricingPackage) => <span>{pricingPackage.duration}</span>,
    },
    {
      key: "is_recommended",
      header: "추천 여부",
      width: "120px",
      render: (pricingPackage) => (
        <button
          type="button"
          onClick={() => handleToggle(pricingPackage, "is_recommended")}
          className={clsx(
            "inline-flex rounded-full px-2 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2",
            pricingPackage.is_recommended ? "bg-amber-50 text-amber-700" : "bg-zinc-100 text-zinc-500 hover:text-zinc-900"
          )}
        >
          {pricingPackage.is_recommended ? "추천" : "일반"}
        </button>
      ),
    },
    {
      key: "is_active",
      header: "활성 여부",
      width: "120px",
      render: (pricingPackage) => (
        <button
          type="button"
          onClick={() => handleToggle(pricingPackage, "is_active")}
          className={clsx(
            "inline-flex rounded-full px-2 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2",
            pricingPackage.is_active ? "bg-emerald-50 text-emerald-700" : "bg-zinc-100 text-zinc-500 hover:text-zinc-900"
          )}
        >
          {pricingPackage.is_active ? "활성" : "비활성"}
        </button>
      ),
    },
    {
      key: "actions",
      header: "액션",
      width: "120px",
      render: (pricingPackage) => (
        <div className="flex items-center justify-end gap-1">
          <button
            type="button"
            onClick={() => openEdit(pricingPackage)}
            aria-label="수정"
            className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
          >
            <Pencil aria-hidden="true" className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleDelete(pricingPackage)}
            aria-label="삭제"
            className="p-1.5 rounded-md text-zinc-400 hover:text-red-600 hover:bg-red-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
          >
            <Trash2 aria-hidden="true" className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="inline-flex w-fit rounded-lg border border-zinc-200 bg-white p-1">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveLang(tab.value)}
              className={clsx(
                "rounded-md px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2",
                activeLang === tab.value ? "bg-zinc-900 text-white" : "text-zinc-500 hover:text-zinc-900"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <Button variant="primary" onClick={openCreate}>패키지 추가</Button>
      </div>

      <Table columns={columns} data={visiblePackages} emptyMessage="등록된 가격 패키지가 없습니다" />

      <Modal
        open={modal !== null}
        onClose={closeModal}
        title={modal?.mode === "edit" ? "가격 패키지 수정" : "가격 패키지 추가"}
        footer={
          <>
            <Button variant="ghost" onClick={closeModal}>취소</Button>
            <Button variant="primary" onClick={handleSubmit} loading={loading}>저장</Button>
          </>
        }
      >
        <div className="space-y-4">
          <Select
            label="언어"
            value={form.lang}
            onChange={(event) => setForm((current) => ({ ...current, lang: event.target.value as TemplateLang }))}
            disabled={modal?.mode === "edit"}
            options={tabs.map((tab) => ({ value: tab.value, label: tab.label }))}
          />
          <Input
            label="슬러그"
            value={form.slug}
            onChange={(event) => setForm((current) => ({ ...current, slug: event.target.value }))}
            disabled={modal?.mode === "edit"}
            autoFocus
          />
          <Input label="플랜명" value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} />
          <Input label="설명" value={form.description} onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Input label="가격" value={form.price} onChange={(event) => setForm((current) => ({ ...current, price: event.target.value }))} />
            <Input label="기간" value={form.duration} onChange={(event) => setForm((current) => ({ ...current, duration: event.target.value }))} />
            <Input label="순서" type="number" value={form.sort_order} onChange={(event) => setForm((current) => ({ ...current, sort_order: event.target.value }))} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="pricing-features" className="text-sm font-medium text-zinc-700">기능 목록</label>
            <textarea
              id="pricing-features"
              value={form.featuresText}
              onChange={(event) => setForm((current) => ({ ...current, featuresText: event.target.value }))}
              className="min-h-40 w-full resize-y rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none transition-colors focus:border-zinc-900 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
            />
            <p className="text-xs text-zinc-400">한 줄에 하나씩 입력합니다.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 text-sm font-medium text-zinc-700">
              <input
                type="checkbox"
                checked={form.is_recommended}
                onChange={(event) => setForm((current) => ({ ...current, is_recommended: event.target.checked }))}
                className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
              />
              추천 패키지
            </label>
            <label className="flex items-center gap-2 text-sm font-medium text-zinc-700">
              <input
                type="checkbox"
                checked={form.is_active}
                onChange={(event) => setForm((current) => ({ ...current, is_active: event.target.checked }))}
                className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
              />
              활성
            </label>
          </div>
          {error && <p className="text-xs text-red-500" role="alert">{error}</p>}
        </div>
      </Modal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
