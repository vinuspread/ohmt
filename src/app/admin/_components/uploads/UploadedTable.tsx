"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import { Table, type Column } from "../ui/Table";
import { Toast } from "../ui/Toast";
import type { Template } from "@/types/template";

type ToastState = { message: string; type: "success" | "error" };

const dateFormatter = new Intl.DateTimeFormat("ko-KR", { dateStyle: "medium" });

export function UploadedTable({ data }: { data: Template[] }) {
  const router = useRouter();
  const [deleteTarget, setDeleteTarget] = useState<Template | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const handleDelete = async () => {
    if (!deleteTarget) return;

    setDeleting(true);
    const response = await fetch(`/api/admin/templates/${deleteTarget.id}`, { method: "DELETE" });
    setDeleting(false);

    if (response.ok) {
      setToast({ message: "업로드 항목이 삭제됐습니다.", type: "success" });
      router.refresh();
    } else {
      setToast({ message: "업로드 항목 삭제에 실패했습니다.", type: "error" });
    }

    setDeleteTarget(null);
  };

  const columns: Column<Template>[] = [
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
    { key: "created_at", header: "업로드일", render: (template) => dateFormatter.format(new Date(template.created_at)) },
    { key: "status", header: "상태", render: (template) => <Badge status={template.status} /> },
    {
      key: "actions",
      header: "액션",
      render: (template) => (
        <div className="flex items-center gap-1">
          <Link href={`/admin/uploads/${template.id}`}>
            <Button variant="primary" size="sm">등록하기</Button>
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
      <Table columns={columns} data={data} emptyMessage="업로드된 템플릿이 없습니다." />

      <Modal
        open={Boolean(deleteTarget)}
        onClose={() => setDeleteTarget(null)}
        title="업로드 항목 삭제"
        footer={
          <>
            <Button variant="secondary" onClick={() => setDeleteTarget(null)}>취소</Button>
            <Button variant="danger" loading={deleting} onClick={handleDelete}>삭제</Button>
          </>
        }
      >
        <p className="text-sm text-zinc-500">
          {deleteTarget?.name_en} 업로드 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
        </p>
      </Modal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
