"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckIcon } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import { Table, type Column } from "../ui/Table";
import { Toast } from "../ui/Toast";
import type { Template, TemplateStatus } from "@/types/template";

type TemplateFilter = "all" | TemplateStatus;
type ToastState = { message: string; type: "success" | "error" };

const filters: TemplateFilter[] = ["all", "published", "draft", "archived"];

export function TemplateTable({ data }: { data: Template[] }) {
  const router = useRouter();
  const [filter, setFilter] = useState<TemplateFilter>("all");
  const [deleteTarget, setDeleteTarget] = useState<Template | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const filteredData = useMemo(() => {
    return filter === "all" ? data : data.filter((template) => template.status === filter);
  }, [data, filter]);

  const handleDelete = async () => {
    if (!deleteTarget) return;

    setDeleting(true);
    const response = await fetch(`/api/admin/templates/${deleteTarget.id}`, { method: "DELETE" });
    setDeleting(false);

    if (response.ok) {
      setToast({ message: "삭제됐습니다.", type: "success" });
      router.refresh();
    } else {
      setToast({ message: "삭제에 실패했습니다.", type: "error" });
    }

    setDeleteTarget(null);
  };

  const columns: Column<Template>[] = [
    { key: "sort_order", header: "#", width: "64px", render: (template) => template.sort_order },
    {
      key: "slug",
      header: "Slug",
      render: (template) => <span className="font-mono text-xs text-zinc-600">{template.slug}</span>,
    },
    {
      key: "name",
      header: "이름",
      render: (template) => (
        <div>
          <p className="font-medium text-zinc-900">{template.name_en}</p>
          <p className="text-xs text-zinc-400">{template.name_ko}</p>
        </div>
      ),
    },
    { key: "category", header: "카테고리", render: (template) => template.category },
    { key: "status", header: "상태", render: (template) => <Badge status={template.status} /> },
    {
      key: "price",
      header: "가격",
      render: (template) => (template.price === 0 ? "무료" : `${template.price.toLocaleString()}원`),
    },
    {
      key: "is_featured",
      header: "Featured",
      render: (template) => (template.is_featured ? <CheckIcon aria-label="Featured" className="w-4 h-4 text-emerald-500" /> : "-"),
    },
    {
      key: "actions",
      header: "액션",
      render: (template) => (
        <div className="flex items-center gap-1">
          <Link href={`/admin/templates/${template.id}`}>
            <Button variant="ghost" size="sm">수정</Button>
          </Link>
          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700" onClick={() => setDeleteTarget(template)}>
            삭제
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-1 bg-zinc-100 p-1 rounded-lg">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 ${
                filter === item ? "bg-white shadow-sm text-zinc-900" : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              {item === "all" ? "전체" : item}
            </button>
          ))}
        </div>
        <Link href="/admin/templates/new">
          <Button variant="primary" size="sm">+ 새 템플릿</Button>
        </Link>
      </div>

      <Table columns={columns} data={filteredData} />

      <Modal
        open={Boolean(deleteTarget)}
        onClose={() => setDeleteTarget(null)}
        title="템플릿 삭제"
        footer={
          <>
            <Button variant="secondary" onClick={() => setDeleteTarget(null)}>취소</Button>
            <Button variant="danger" loading={deleting} onClick={handleDelete}>삭제</Button>
          </>
        }
      >
        <p className="text-sm text-zinc-500">
          {deleteTarget?.name_en} 템플릿을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
        </p>
      </Modal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
