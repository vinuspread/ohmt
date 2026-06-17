"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Trash2 } from "lucide-react";
import { clsx } from "clsx";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Modal } from "../ui/Modal";
import { Table, type Column } from "../ui/Table";
import { Toast } from "../ui/Toast";
import type { Faq, TemplateLang } from "@/types/template";

type ToastState = { message: string; type: "success" | "error" };
type ModalState = { mode: "create" } | { mode: "edit"; faq: Faq } | null;

interface FormState {
  lang: TemplateLang;
  question: string;
  answer: string;
  is_active: boolean;
}

const emptyForm: FormState = {
  lang: "en",
  question: "",
  answer: "",
  is_active: true,
};

const tabs: { label: string; value: TemplateLang }[] = [
  { label: "EN", value: "en" },
  { label: "KO", value: "ko" },
];

export function FaqManager({ data }: { data: Faq[] }) {
  const router = useRouter();
  const [activeLang, setActiveLang] = useState<TemplateLang>("en");
  const [modal, setModal] = useState<ModalState>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const visibleFaqs = data.filter((faq) => faq.lang === activeLang);

  const openCreate = () => {
    setForm({ ...emptyForm, lang: activeLang });
    setError("");
    setModal({ mode: "create" });
  };

  const openEdit = (faq: Faq) => {
    setForm({ lang: faq.lang, question: faq.question, answer: faq.answer, is_active: faq.is_active });
    setError("");
    setModal({ mode: "edit", faq });
  };

  const closeModal = () => setModal(null);

  const handleSubmit = async () => {
    if (!form.question.trim() || !form.answer.trim()) {
      setError("질문과 답변을 모두 입력해주세요.");
      return;
    }

    setLoading(true);
    const payload = {
      lang: form.lang,
      question: form.question.trim(),
      answer: form.answer.trim(),
      sort_order: modal?.mode === "edit" ? modal.faq.sort_order : data.filter((faq) => faq.lang === form.lang).length,
      is_active: form.is_active,
    };

    const response =
      modal?.mode === "edit"
        ? await fetch(`/api/admin/faqs/${modal.faq.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              question: payload.question,
              answer: payload.answer,
              sort_order: payload.sort_order,
              is_active: payload.is_active,
            }),
          })
        : await fetch("/api/admin/faqs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

    setLoading(false);

    if (response.ok) {
      setToast({ message: modal?.mode === "edit" ? "FAQ가 수정됐습니다." : "FAQ가 추가됐습니다.", type: "success" });
      closeModal();
      router.refresh();
      return;
    }

    const result = (await response.json().catch(() => null)) as { error?: string } | null;
    setError(result?.error ?? "저장에 실패했습니다.");
  };

  const handleDelete = async (faq: Faq) => {
    if (!window.confirm("이 FAQ를 삭제하시겠습니까?")) return;

    const response = await fetch(`/api/admin/faqs/${faq.id}`, { method: "DELETE" });

    if (response.ok) {
      setToast({ message: "FAQ가 삭제됐습니다.", type: "success" });
      router.refresh();
      return;
    }

    const result = (await response.json().catch(() => null)) as { error?: string } | null;
    setToast({ message: result?.error ?? "삭제에 실패했습니다.", type: "error" });
  };

  const columns: Column<Faq>[] = [
    {
      key: "lang",
      header: "언어",
      width: "80px",
      render: (faq) => <span className="font-medium uppercase text-zinc-900">{faq.lang}</span>,
    },
    {
      key: "question",
      header: "질문",
      render: (faq) => (
        <div className="max-w-2xl">
          <p className="font-medium text-zinc-900 line-clamp-1">{faq.question}</p>
          <p className="mt-1 text-xs text-zinc-500 line-clamp-2">{faq.answer}</p>
        </div>
      ),
    },
    {
      key: "status",
      header: "공개 여부",
      width: "120px",
      render: (faq) => (
        <span
          className={clsx(
            "inline-flex rounded-full px-2 py-1 text-xs font-medium",
            faq.is_active ? "bg-emerald-50 text-emerald-700" : "bg-zinc-100 text-zinc-500"
          )}
        >
          {faq.is_active ? "공개" : "비공개"}
        </span>
      ),
    },
    {
      key: "actions",
      header: "옵션",
      width: "120px",
      render: (faq) => (
        <div className="flex items-center justify-end gap-1">
          <button
            type="button"
            onClick={() => openEdit(faq)}
            aria-label="수정"
            className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
          >
            <Pencil aria-hidden="true" className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleDelete(faq)}
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
        <Button variant="primary" onClick={openCreate}>FAQ 추가</Button>
      </div>

      <Table columns={columns} data={visibleFaqs} emptyMessage="등록된 FAQ가 없습니다" />

      <Modal
        open={modal !== null}
        onClose={closeModal}
        title={modal?.mode === "edit" ? "FAQ 수정" : "FAQ 추가"}
        footer={
          <>
            <Button variant="ghost" onClick={closeModal}>취소</Button>
            <Button variant="primary" onClick={handleSubmit} loading={loading}>저장</Button>
          </>
        }
      >
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="faq-lang" className="text-sm font-medium text-zinc-700">언어</label>
            <select
              id="faq-lang"
              value={form.lang}
              onChange={(event) => setForm((current) => ({ ...current, lang: event.target.value as TemplateLang }))}
              disabled={modal?.mode === "edit"}
              className="w-full px-3 py-2 text-sm border rounded-lg outline-none transition-colors border-zinc-200 focus:border-zinc-900 disabled:bg-zinc-50 disabled:text-zinc-400 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
            >
              <option value="en">EN</option>
              <option value="ko">KO</option>
            </select>
          </div>
          <Input
            label="질문"
            value={form.question}
            onChange={(event) => setForm((current) => ({ ...current, question: event.target.value }))}
            autoFocus
          />
          <div className="flex flex-col gap-1">
            <label htmlFor="faq-answer" className="text-sm font-medium text-zinc-700">답변</label>
            <textarea
              id="faq-answer"
              value={form.answer}
              onChange={(event) => setForm((current) => ({ ...current, answer: event.target.value }))}
              className="min-h-32 w-full resize-y rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none transition-colors focus:border-zinc-900 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
            />
          </div>
          <label className="flex items-center gap-2 text-sm font-medium text-zinc-700">
            <input
              type="checkbox"
              checked={form.is_active}
              onChange={(event) => setForm((current) => ({ ...current, is_active: event.target.checked }))}
              className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
            />
            공개
          </label>
          {error && <p className="text-xs text-red-500" role="alert">{error}</p>}
        </div>
      </Modal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
