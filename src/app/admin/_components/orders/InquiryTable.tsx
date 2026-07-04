"use client";

import { useMemo, useState } from "react";
import { Search, Trash2 } from "lucide-react";
import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";
import { Table, type Column } from "../ui/Table";
import type { Inquiry, InquiryType } from "@/types/template";

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

function InfoRow({ label, value }: { label: string; value: string | null | undefined }) {
  if (!value) return null;
  return (
    <div className="space-y-0.5">
      <p className="text-[0.62rem] uppercase tracking-widest text-zinc-400 font-bold">{label}</p>
      <p className="text-sm text-zinc-900">{value}</p>
    </div>
  );
}

export function InquiryTable({ data, templates }: { data: Inquiry[]; templates: TemplateInfo[] }) {
  const [search, setSearch] = useState("");
  const [inquiries, setInquiries] = useState<Inquiry[]>(data);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Inquiry | null>(null);
  const [deleting, setDeleting] = useState(false);

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

  const handleDelete = async () => {
    if (!deleteTarget || deleting) return;
    setDeleting(true);
    const res = await fetch(`/api/admin/inquiries/${deleteTarget.id}`, { method: "DELETE" });
    setDeleting(false);
    if (res.ok) {
      setInquiries((prev) => prev.filter((i) => i.id !== deleteTarget.id));
      if (selectedInquiry?.id === deleteTarget.id) setSelectedInquiry(null);
    }
    setDeleteTarget(null);
  };

  const filteredData = useMemo(() => {
    if (!search.trim()) return inquiries;
    const q = search.toLowerCase();
    return inquiries.filter((inquiry) =>
      inquiry.customer_name.toLowerCase().includes(q) ||
      inquiry.customer_email.toLowerCase().includes(q) ||
      (inquiry.message ?? "").toLowerCase().includes(q) ||
      (inquiry.company ?? "").toLowerCase().includes(q)
    );
  }, [inquiries, search]);

  const columns: Column<Inquiry>[] = [
    {
      key: "created_at",
      header: "접수일",
      width: "108px",
      render: (inquiry) => (
        <span className="whitespace-nowrap text-xs text-zinc-500">
          {new Date(inquiry.created_at).toLocaleDateString("ko-KR")}
        </span>
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
      width: "100px",
      render: (inquiry) => (
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setSelectedInquiry(inquiry)}
            className="rounded-md border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900"
          >
            보기
          </button>
          <button
            type="button"
            onClick={() => setDeleteTarget(inquiry)}
            className="rounded-md border border-zinc-200 p-1.5 text-zinc-400 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            title="삭제"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
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
        open={deleteTarget !== null}
        onClose={() => setDeleteTarget(null)}
        title="문의 삭제"
        footer={
          <>
            <Button variant="secondary" onClick={() => setDeleteTarget(null)}>취소</Button>
            <Button variant="danger" loading={deleting} onClick={handleDelete}>삭제</Button>
          </>
        }
      >
        {deleteTarget && (
          <div className="space-y-3">
            <p className="text-sm text-zinc-700">아래 문의를 삭제하시겠습니까? <strong>삭제 후 복구가 불가능합니다.</strong></p>
            <div className="rounded-lg bg-zinc-50 border border-zinc-200 px-4 py-3 space-y-1">
              <p className="text-sm font-medium text-zinc-900">{deleteTarget.customer_name}</p>
              <p className="text-xs text-zinc-500">{deleteTarget.customer_email}</p>
              <p className="text-xs text-zinc-400">{new Date(deleteTarget.created_at).toLocaleString("ko-KR")}</p>
            </div>
          </div>
        )}
      </Modal>

      <Modal
        open={selectedInquiry !== null}
        onClose={() => setSelectedInquiry(null)}
        title="문의 상세"
        size="xl"
        footer={
          <div className="flex w-full items-center justify-between">
            <button
              type="button"
              onClick={() => { setDeleteTarget(selectedInquiry); setSelectedInquiry(null); }}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
            >
              <Trash2 className="h-3.5 w-3.5" />
              삭제
            </button>
            <button
              type="button"
              onClick={() => setSelectedInquiry(null)}
              className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
            >
              닫기
            </button>
          </div>
        }
      >
        {selectedInquiry && (() => {
          const tmpl = getTemplateInfo(selectedInquiry);
          const isTemplate = selectedInquiry.inquiry_type === "template" && selectedInquiry.template_name;
          return (
            <div className="space-y-6">
              {/* 상단: 템플릿 정보 + 신청자 정보 */}
              <div className="grid grid-cols-2 gap-5">
                {/* 좌: 선택 템플릿 */}
                <div>
                  <p className="text-[0.62rem] uppercase tracking-widest text-zinc-400 font-bold mb-2">선택한 템플릿</p>
                  {isTemplate ? (
                    <div className="rounded-xl border border-zinc-200 overflow-hidden">
                      {tmpl?.thumbnail_url ? (
                        <img src={tmpl.thumbnail_url} alt={selectedInquiry.template_name!} className="w-full h-40 object-cover" />
                      ) : (
                        <div className="w-full h-40 bg-zinc-100 flex items-center justify-center text-xs text-zinc-400">이미지 없음</div>
                      )}
                      <div className="p-3 bg-zinc-50 space-y-1">
                        <p className="text-sm font-bold text-zinc-900">{selectedInquiry.template_name}</p>
                        {tmpl?.slug && (
                          <a
                            href={`/${selectedInquiry.lang}/templates/${tmpl.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-zinc-400 hover:text-zinc-700 underline"
                          >
                            템플릿 보기 →
                          </a>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-xl border border-zinc-100 bg-zinc-50 h-40 flex items-center justify-center text-sm text-zinc-400">
                      템플릿 미선택
                    </div>
                  )}
                </div>

                {/* 우: 신청자 정보 */}
                <div>
                  <p className="text-[0.62rem] uppercase tracking-widest text-zinc-400 font-bold mb-2">신청자 정보</p>
                  <div className="space-y-3">
                    <InfoRow label="이름" value={selectedInquiry.customer_name} />
                    <InfoRow label="이메일" value={selectedInquiry.customer_email} />
                    <InfoRow label="전화번호" value={selectedInquiry.customer_phone} />
                    <InfoRow label="회사" value={selectedInquiry.company} />
                    <InfoRow label="직책" value={selectedInquiry.role} />
                    <InfoRow label="예산 및 패키지" value={selectedInquiry.package_name} />
                    <InfoRow label="접수일" value={new Date(selectedInquiry.created_at).toLocaleString("ko-KR")} />
                  </div>
                </div>
              </div>

              {/* 하단: 문의 내용 */}
              <div>
                <p className="text-[0.62rem] uppercase tracking-widest text-zinc-400 font-bold mb-2">문의 내용</p>
                <p className="whitespace-pre-wrap rounded-xl bg-zinc-50 border border-zinc-100 px-4 py-3 text-sm leading-relaxed text-zinc-800">
                  {selectedInquiry.message}
                </p>
              </div>

              {/* 첨부파일 */}
              {selectedInquiry.attachment_url && (
                <div>
                  <p className="text-[0.62rem] uppercase tracking-widest text-zinc-400 font-bold mb-2">첨부파일</p>
                  <a
                    href={selectedInquiry.attachment_url}
                    download={selectedInquiry.attachment_name ?? true}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-700 hover:border-zinc-400 hover:bg-white transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" />
                    </svg>
                    {selectedInquiry.attachment_name ?? "첨부파일 다운로드"}
                  </a>
                </div>
              )}
            </div>
          );
        })()}
      </Modal>
    </div>
  );
}
