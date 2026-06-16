"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Modal } from "../ui/Modal";
import { Table, type Column } from "../ui/Table";
import { Toast } from "../ui/Toast";
import type { Category } from "@/types/template";

type ToastState = { message: string; type: "success" | "error" };
type ModalState = { mode: "create" } | { mode: "edit"; category: Category } | null;

export function CategoryManager({ data }: { data: Category[] }) {
  const router = useRouter();
  const [modal, setModal] = useState<ModalState>(null);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const openCreate = () => {
    setName("");
    setError("");
    setModal({ mode: "create" });
  };

  const openEdit = (category: Category) => {
    setName(category.name);
    setError("");
    setModal({ mode: "edit", category });
  };

  const closeModal = () => setModal(null);

  const handleSubmit = async () => {
    if (!name.trim()) {
      setError("카테고리 이름을 입력해주세요.");
      return;
    }

    setLoading(true);

    const response =
      modal?.mode === "edit"
        ? await fetch(`/api/admin/categories/${modal.category.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: name.trim() }),
          })
        : await fetch("/api/admin/categories", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: name.trim(), sort_order: data.length }),
          });

    setLoading(false);

    if (response.ok) {
      setToast({ message: modal?.mode === "edit" ? "카테고리가 수정됐습니다." : "카테고리가 추가됐습니다.", type: "success" });
      closeModal();
      router.refresh();
      return;
    }

    const result = (await response.json().catch(() => null)) as { error?: string } | null;
    setError(result?.error ?? "저장에 실패했습니다.");
  };

  const handleDelete = async (category: Category) => {
    if (!window.confirm(`"${category.name}" 카테고리를 삭제하시겠습니까?`)) return;

    const response = await fetch(`/api/admin/categories/${category.id}`, { method: "DELETE" });

    if (response.ok) {
      setToast({ message: "카테고리가 삭제됐습니다.", type: "success" });
      router.refresh();
      return;
    }

    const result = (await response.json().catch(() => null)) as { error?: string } | null;
    setToast({ message: result?.error ?? "삭제에 실패했습니다.", type: "error" });
  };

  const columns: Column<Category>[] = [
    { key: "name", header: "카테고리명", render: (category) => <span className="font-medium text-zinc-900">{category.name}</span> },
    {
      key: "actions",
      header: "",
      width: "120px",
      render: (category) => (
        <div className="flex items-center justify-end gap-1">
          <button
            type="button"
            onClick={() => openEdit(category)}
            aria-label="수정"
            className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
          >
            <Pencil aria-hidden="true" className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleDelete(category)}
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
      <div className="flex justify-end">
        <Button variant="primary" onClick={openCreate}>카테고리 추가</Button>
      </div>

      <Table columns={columns} data={data} emptyMessage="등록된 카테고리가 없습니다" />

      <Modal
        open={modal !== null}
        onClose={closeModal}
        title={modal?.mode === "edit" ? "카테고리 수정" : "카테고리 추가"}
        footer={
          <>
            <Button variant="ghost" onClick={closeModal}>취소</Button>
            <Button variant="primary" onClick={handleSubmit} loading={loading}>저장</Button>
          </>
        }
      >
        <Input
          label="카테고리 이름"
          value={name}
          onChange={(event) => setName(event.target.value)}
          error={error}
          autoFocus
        />
        {modal?.mode === "edit" && (
          <p className="mt-2 text-xs text-zinc-400">이름을 변경하면 이 카테고리를 사용 중인 모든 템플릿에도 함께 반영됩니다.</p>
        )}
      </Modal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
