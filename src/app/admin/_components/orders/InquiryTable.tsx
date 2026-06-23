"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { clsx } from "clsx";
import { Eye } from "lucide-react";
import { Modal } from "../ui/Modal";
import { Table, type Column } from "../ui/Table";
import { Toast } from "../ui/Toast";
import type { Inquiry, InquiryStatus, InquiryType } from "@/types/template";

type InquiryFilter = "all" | InquiryStatus;
type ToastState = { message: string; type: "success" | "error" };

const filters: InquiryFilter[] = ["all", "new", "in_progress", "done", "cancelled"];

const STATUS_LABELS: Record<InquiryStatus, string> = {
  new: "신규",
  in_progress: "진행 중",
  done: "완료",
  cancelled: "취소",
};

const TYPE_LABELS: Record<InquiryType, string> = {
  template: "템플릿 기반",
  custom: "맞춤 제작",
  other: "기타",
};

const statusClasses: Record<InquiryStatus, string> = {
  new: "bg-amber-50 text-amber-700",
  in_progress: "bg-blue-50 text-blue-700",
  done: "bg-emerald-50 text-emerald-700",
  cancelled: "bg-zinc-100 text-zinc-500",
};

function DetailRow({ label, value }: { label: string; value: string | null }) {
  if (!value) return null;

  return (
    <div className="grid grid-cols-[88px_1fr] gap-3 text-sm">
      <dt className="font-medium text-zinc-500">{label}</dt>
      <dd className="text-zinc-900 break-words">{value}</dd>
    </div>
  );
}

export function InquiryTable({ data }: { data: Inquiry[] }) {
  const router = useRouter();
  const [filter, setFilter] = useState<InquiryFilter>("all");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [note, setNote] = useState("");
  const [savingNote, setSavingNote] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const filteredData = useMemo(() => {
    return filter === "all" ? data : data.filter((inquiry) => inquiry.status === filter);
  }, [data, filter]);

  const openDetail = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setNote(inquiry.note ?? "");
  };

  const closeDetail = () => setSelectedInquiry(null);

  const handleStatusChange = async (id: string, status: InquiryStatus) => {
    const response = await fetch(`/api/admin/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    if (response.ok) {
      setToast({ message: "문의 상태가 변경됐습니다.", type: "success" });
      router.refresh();
      return;
    }

    setToast({ message: "문의 상태 변경에 실패했습니다.", type: "error" });
  };

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
      setToast({ message: "문의 메모가 저장됐습니다.", type: "success" });
      closeDetail();
      router.refresh();
      return;
    }

    setToast({ message: "문의 메모 저장에 실패했습니다.", type: "error" });
  };

  const columns: Column<Inquiry>[] = [
    { key: "created_at", header: "접수일", render: (inquiry) => new Date(inquiry.created_at).toLocaleDateString("ko-KR") },
    { key: "inquiry_type", header: "유형", render: (inquiry) => TYPE_LABELS[inquiry.inquiry_type] },
    {
      key: "lang",
      header: "언어",
      render: (inquiry) => (
        <span className="inline-flex rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600">
          {inquiry.lang.toUpperCase()}
        </span>
      ),
    },
    { key: "customer_name", header: "이름", render: (inquiry) => <span className="font-medium text-zinc-900">{inquiry.customer_name}</span> },
    { key: "customer_email", header: "이메일", render: (inquiry) => inquiry.customer_email },
    { key: "package_name", header: "패키지", render: (inquiry) => inquiry.package_name ?? "-" },
    {
      key: "status",
      header: "상태",
      render: (inquiry) => (
        <div className="flex items-center gap-2">
          <span className={clsx("inline-flex rounded-full px-2 py-1 text-xs font-medium", statusClasses[inquiry.status])}>
            {STATUS_LABELS[inquiry.status]}
          </span>
          <select
            value={inquiry.status}
            onChange={(event) => handleStatusChange(inquiry.id, event.target.value as InquiryStatus)}
            className="text-xs border border-zinc-200 rounded px-2 py-1 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
          >
            {filters.filter((item) => item !== "all").map((status) => (
              <option key={status} value={status}>{STATUS_LABELS[status]}</option>
            ))}
          </select>
        </div>
      ),
    },
    {
      key: "detail",
      header: "상세",
      width: "90px",
      render: (inquiry) => (
        <button
          type="button"
          onClick={() => openDetail(inquiry)}
          className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 px-2.5 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
        >
          <Eye aria-hidden="true" className="h-3.5 w-3.5" />
          보기
        </button>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="flex gap-1 bg-zinc-100 p-1 rounded-lg mb-6 w-fit">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 ${
              filter === item ? "bg-white shadow-sm text-zinc-900" : "text-zinc-500 hover:text-zinc-700"
            }`}
          >
            {item === "all" ? "전체" : STATUS_LABELS[item]}
          </button>
        ))}
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
              className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
            >
              닫기
            </button>
            <button
              type="button"
              onClick={handleSaveNote}
              disabled={savingNote}
              className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
            >
              {savingNote ? "저장 중..." : "메모 저장"}
            </button>
          </>
        }
      >
        {selectedInquiry && (
          <div className="space-y-5">
            <dl className="space-y-3">
              <DetailRow label="이름" value={selectedInquiry.customer_name} />
              <DetailRow label="이메일" value={selectedInquiry.customer_email} />
              <DetailRow label="전화번호" value={selectedInquiry.customer_phone} />
              <DetailRow label="회사" value={selectedInquiry.company} />
              <DetailRow label="직책" value={selectedInquiry.role} />
              <DetailRow label="패키지" value={selectedInquiry.package_name} />
              <DetailRow label="템플릿" value={selectedInquiry.template_name} />
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
                onChange={(event) => setNote(event.target.value)}
                rows={4}
                className="w-full resize-y rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none transition-colors focus:border-zinc-900 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
                placeholder="내부 확인 메모를 남겨주세요."
              />
            </div>
          </div>
        )}
      </Modal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
