"use client";

import { useMemo, useState } from "react";
import { LockKeyhole, Search, Trash2 } from "lucide-react";
import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";
import { Table, type Column } from "../ui/Table";
import type { BoardPost } from "@/types/board";

function InfoRow({ label, value }: { label: string; value: string | null | undefined }) {
  if (!value) return null;
  return (
    <div className="space-y-0.5">
      <p className="text-[0.62rem] uppercase tracking-widest text-zinc-400 font-bold">{label}</p>
      <p className="text-sm text-zinc-900">{value}</p>
    </div>
  );
}

export function BoardTable({ data }: { data: BoardPost[] }) {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState<BoardPost[]>(data);
  const [selectedPost, setSelectedPost] = useState<BoardPost | null>(null);
  const [answerDraft, setAnswerDraft] = useState("");
  const [saving, setSaving] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<BoardPost | null>(null);
  const [deleting, setDeleting] = useState(false);

  const openPost = (post: BoardPost) => {
    setSelectedPost(post);
    setAnswerDraft(post.answer ?? "");
  };

  const handleSaveAnswer = async () => {
    if (!selectedPost || saving) return;
    setSaving(true);
    const res = await fetch(`/api/admin/board/${selectedPost.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer: answerDraft }),
    });
    setSaving(false);
    if (res.ok) {
      const updated = (await res.json()) as BoardPost;
      setPosts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
      setSelectedPost(updated);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget || deleting) return;
    setDeleting(true);
    const res = await fetch(`/api/admin/board/${deleteTarget.id}`, { method: "DELETE" });
    setDeleting(false);
    if (res.ok) {
      setPosts((prev) => prev.filter((p) => p.id !== deleteTarget.id));
      if (selectedPost?.id === deleteTarget.id) setSelectedPost(null);
    }
    setDeleteTarget(null);
  };

  const filteredData = useMemo(() => {
    if (!search.trim()) return posts;
    const q = search.toLowerCase();
    return posts.filter((post) =>
      post.title.toLowerCase().includes(q) ||
      post.author_name.toLowerCase().includes(q) ||
      post.contact.toLowerCase().includes(q)
    );
  }, [posts, search]);

  const columns: Column<BoardPost>[] = [
    {
      key: "title",
      header: "제목",
      render: (post) => (
        <button type="button" onClick={() => openPost(post)} className="flex items-center gap-1.5 text-left font-medium text-zinc-900 hover:underline">
          {post.is_secret && <LockKeyhole className="h-3.5 w-3.5 shrink-0 text-zinc-400" aria-label="비밀글" />}
          <span className="truncate">{post.title}</span>
        </button>
      ),
    },
    { key: "lang", header: "언어", render: (post) => <span className="font-mono text-xs uppercase text-zinc-500">{post.lang}</span> },
    { key: "author_name", header: "작성자", render: (post) => post.author_name },
    { key: "answer", header: "답변상태", render: (post) => (post.answer ? <span className="text-emerald-600 text-xs font-medium">답변완료</span> : <span className="text-zinc-400 text-xs">대기중</span>) },
    { key: "created_at", header: "작성일", render: (post) => new Date(post.created_at).toLocaleString("ko-KR") },
    {
      key: "actions",
      header: "",
      render: (post) => (
        <button
          type="button"
          onClick={() => setDeleteTarget(post)}
          className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
        >
          <Trash2 className="h-3.5 w-3.5" />
          삭제
        </button>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-3 border-b border-zinc-200 p-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="제목, 작성자, 연락처 검색"
            className="w-full rounded-lg border border-zinc-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-zinc-900"
          />
        </div>
      </div>

      <Table columns={columns} data={filteredData} emptyMessage="접수된 문의가 없습니다" />

      <Modal
        open={Boolean(selectedPost)}
        onClose={() => setSelectedPost(null)}
        title="문의 상세"
        size="lg"
        footer={
          <div className="flex w-full items-center justify-between">
            <button
              type="button"
              onClick={() => selectedPost && setDeleteTarget(selectedPost)}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
            >
              <Trash2 className="h-3.5 w-3.5" />
              삭제
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
              >
                닫기
              </button>
              <Button onClick={handleSaveAnswer} loading={saving}>답변 저장</Button>
            </div>
          </div>
        }
      >
        {selectedPost && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-5">
              <InfoRow label="작성자" value={selectedPost.author_name} />
              <InfoRow label="연락처" value={selectedPost.contact} />
              <InfoRow label="언어" value={selectedPost.lang.toUpperCase()} />
              <InfoRow label="작성일" value={new Date(selectedPost.created_at).toLocaleString("ko-KR")} />
            </div>

            <div>
              <p className="mb-2 text-[0.62rem] uppercase tracking-widest text-zinc-400 font-bold">문의 내용</p>
              <p className="whitespace-pre-wrap rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3 text-sm leading-relaxed text-zinc-800">
                {selectedPost.content}
              </p>
            </div>

            <div>
              <p className="mb-2 text-[0.62rem] uppercase tracking-widest text-zinc-400 font-bold">답변</p>
              <textarea
                value={answerDraft}
                onChange={(event) => setAnswerDraft(event.target.value)}
                rows={6}
                placeholder="답변을 입력하면 게시판에 공개됩니다."
                className="w-full resize-y rounded-lg border border-zinc-200 px-3 py-2.5 text-sm outline-none focus:border-zinc-900"
              />
            </div>
          </div>
        )}
      </Modal>

      <Modal
        open={Boolean(deleteTarget)}
        onClose={() => setDeleteTarget(null)}
        title="문의 삭제"
        footer={
          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setDeleteTarget(null)} className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100">취소</button>
            <Button onClick={handleDelete} loading={deleting} variant="danger">삭제</Button>
          </div>
        }
      >
        <p className="text-sm text-zinc-600">
          &ldquo;{deleteTarget?.title}&rdquo; 게시글을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
        </p>
      </Modal>
    </div>
  );
}
