"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Modal } from "../ui/Modal";
import { Table, type Column } from "../ui/Table";
import { Toast } from "../ui/Toast";
import type { Inquiry, InquiryType } from "@/types/template";

type ToastState = { message: string; type: "success" | "error" };

const TYPE_LABELS: Record<InquiryType, string> = {
  template: "템플릿 기반",
  custom: "맞춤 제작",
  other: "기타",
};

const TYPE_CLASSES: Record<InquiryType, string> = {
  template: "bg-violet-50 text-violet-700",
  custom: "bg-blue-50 text-blue-700",
  other: "bg-zinc-100 text-zinc-600",
};

interface TemplateInfo {
  name: string;
  slug: string;
  thumbnail_url: string | null;
  lang: string;
}

function DetailRow({ label, value }: { label: string; value: string | null }) {
  if (!value) return null;
  return (
    <div className="grid grid-cols-[120px_1fr] gap-3 text-sm">
      <dt className="font-medium text-zinc-500">{label}</dt>
      <dd className="text-zinc-900 break-words">{value}</dd>
    </div>
  );
}

export function InquiryTable({ data, templates }: { data: Inquiry[]; templates: TemplateInfo[] }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [note, setNote] = useState("");
  const [savingNote, setSavingNote] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const templateMap = useMemo(() => {
    const map = new Map<string, TemplateInfo>();
    for (const t of templates) {
      map.set(`${t.lang}:${t.name}`, t);
    }
    return map;
  }, [templates]);

  const getTemplateInfo = (inquiry: Inquiry): TemplateInfo | null => {
    if (!inquiry.template_name) return null;
    return templateMap.get(`${inquiry.lang}:${inquiry.template_name}`) ?? null;
  };

  const filteredData = useMemo(() => {
    if (!search.trim()) return data;
    const q = search.toLowerCase();
    return data.filter((inquiry) =>
      inquiry.customer_name.toLowerCase().includes(q) ||
      inquiry.customer_email.toLowerCase().includes(q) ||
      (inquiry.message ?? "").toLowerCase().includes(q) ||
      (inquiry.company ?? "").toLowerCase().includes(q)
    );
  }, [data, search]);

  const openDetail = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setNote(inquiry.note ?? "");
  };

  const closeDetail = () => setSelectedInquiry(null);

  const handleSaveNote = async () => {
    if (!selectedInquiry) return;
    setSavingNote(true);
    const response = await fetch(`/api/admin/inquiries/${selectedInquiry.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ note }),
    });
    setSavingNote(false);
    if (response.ok) {
      setToast({ message: "메모가 저장됐습니다.", type: "success" });
      closeDetail();
      router.refresh();
      return;
    }
    setToast({ message: "메모 저장에 실패했습니다.", type: "error" });
  };

  const columns: Column<Inquiry>[] = [
    {
      key: "created_at",
      header: "접수일",
      width: "108px",
      render: (inquiry) => (
        <span className="whitespace-nowrap text-xs text-zinc-500">{new Date(inquiry.created_at).toLocaleDateString("ko-KR")}</span>
      ),
    },
    {
      key: "inquiry_type",
      header: "유형",
      width: "108px",
      render: (inquiry) => (
        <span className={`whitespace-nowrap inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${TYPE_CLASSES[inquiry.inquiry_type]}`}>
          {TYPE_LABELS[inquiry.inquiry_type]}
        </span>
      ),
    },
    {
      key: "customer_name",
      header: "이름",
      width: "140px",
      render: (inquiry) => (
        <div>
          <p className="font-medium text-zinc-900 text-sm">{inquiry.customer_name}</p>
          {inquiry.company && <p className="text-xs text-zinc-400 mt-0.5">{inquiry.company}</p>}
        </div>
      ),
    },
    {
      key: "customer_email",
      header: "이메일",
      render: (inquiry) => <span className="text-sm text-zinc-600">{inquiry.customer_email}</span>,
    },
    {
      key: "package_name",
      header: "예산 및 패키지",
      width: "160px",
      render: (inquiry) => <span className="text-sm text-zinc-600">{inquiry.package_name ?? "-"}</span>,
    },
    {
      key: "template_name",
      header: "관심 템플릿",
      render: (inquiry) => {
        if (inquiry.inquiry_type !== "template" || !inquiry.template_name) {
          return <span className="text-zinc-300 text-sm">-</span>;
        }
        const tmpl = getTemplateInfo(inquiry);
        return (
          <div className="flex items-center gap-2">
            {tmpl?.thumbnail_url ? (
              <img src={tmpl.thumbnail_url} alt={inquiry.template_name} className="w-10 h-7 object-cover rounded flex-shrink-0" />
            ) : (
              <div className="w-10 h-7 bg-zinc-100 rounded flex-shrink-0" />
            )}
            <span className="text-sm text-zinc-700 font-medium">{inquiry.template_name}</span>
          </div>
        );
      },
    },
    {
      key: "detail",
      header: "",
      width: "60px",
      render: (inquiry) => (
        <button
          type="button"
          onClick={() => openDetail(inquiry)}
          className="rounded-md border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900"
        >
          보기
        </button>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="relative mb-6 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
        <input
          type="text"
          placeholder="이름, 이메일, 문의 내용 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm border border-zinc-200 rounded-lg bg-zinc-50 outline-none focus:border-zinc-400 focus:bg-white transition-all placeholder:text-zinc-400"
        />
      </div>

      <Table columns={columns} data={filteredData} emptyMessage="접수된 문의가 없습니다" />

      <Modal
        open={selectedInquiry !== null}
        onClose={closeDetail}
        title="문의 상세"
        footer={
          <>
            <button
              type="button"
              onClick={closeDetail}
              className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
            >
              닫기
            </button>
            <button
              type="button"
              onClick={handleSaveNote}
              disabled={savingNote}
              className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {savingNote ? "저장 중..." : "메모 저장"}
            </button>
          </>
        }
      >
        {selectedInquiry && (() => {
          const tmpl = getTemplateInfo(selectedInquiry);
          return (
            <div className="space-y-5">
              {selectedInquiry.inquiry_type === "template" && selectedInquiry.template_name && (
                <div className="rounded-xl border border-zinc-200 overflow-hidden">
                  {tmpl?.thumbnail_url && (
                    <img src={tmpl.thumbnail_url} alt={selectedInquiry.template_name} className="w-full h-36 object-cover" />
                  )}
                  <div className="p-3 bg-zinc-50">
                    <p className="text-[0.6rem] uppercase tracking-widest text-zinc-400 font-bold mb-0.5">선택 템플릿</p>
                    <p className="text-sm font-bold text-zinc-900">{selectedInquiry.template_name}</p>
                    {tmpl?.slug && (
                      <a
                        href={`/${selectedInquiry.lang}/templates/${tmpl.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-zinc-400 hover:text-zinc-700 underline mt-0.5 inline-block"
                      >
                        템플릿 보기 →
                      </a>
                    )}
                  </div>
                </div>
              )}

              <dl className="space-y-3">
                <DetailRow label="이름" value={selectedInquiry.customer_name} />
                <DetailRow label="이메일" value={selectedInquiry.customer_email} />
                <DetailRow label="전화번호" value={selectedInquiry.customer_phone} />
                <DetailRow label="회사" value={selectedInquiry.company} />
                <DetailRow label="직책" value={selectedInquiry.role} />
                <DetailRow label="예산 및 패키지" value={selectedInquiry.package_name} />
              </dl>

              <div>
                <p className="mb-2 text-sm font-medium text-zinc-500">문의 내용</p>
                <p className="whitespace-pre-wrap rounded-lg bg-zinc-50 p-3 text-sm leading-relaxed text-zinc-800">{selectedInquiry.message}</p>
              </div>

              <div>
                <label htmlFor="inquiry-note" className="mb-2 block text-sm font-medium text-zinc-700">관리 메모</label>
                <textarea
                  id="inquiry-note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={4}
                  className="w-full resize-y rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none transition-colors focus:border-zinc-900"
                  placeholder="내부 확인 메모를 남겨주세요."
                />
              </div>
            </div>
          );
        })()}
      </Modal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
