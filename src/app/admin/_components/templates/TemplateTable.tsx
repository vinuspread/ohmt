"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Reorder, useDragControls } from "framer-motion";
import { useRouter } from "next/navigation";
import { CheckIcon, GripVertical, Search } from "lucide-react";
import { clsx } from "clsx";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import { Toast } from "../ui/Toast";
import type { Template } from "@/types/template";

type TemplateFilter = "all" | "published" | "private";
type LangFilter = "all" | "en" | "ko";
type ToastState = { message: string; type: "success" | "error" };

const filters: { value: TemplateFilter; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "published", label: "공개" },
  { value: "private", label: "비공개" },
];

const langFilters: { value: LangFilter; label: string }[] = [
  { value: "all", label: "ALL" },
  { value: "en", label: "EN" },
  { value: "ko", label: "KR" },
];

const templateGridClass = "grid-cols-[28px_72px_minmax(150px,1.4fr)_64px_minmax(110px,0.9fr)_88px_48px_132px]";

function matchesFilters(template: Template, filter: TemplateFilter, langFilter: LangFilter, query: string) {
  const published = template.status === "published";
  const statusLabel = published ? "공개" : "비공개";
  const matchesFilter = filter === "all" || (filter === "published" ? published : !published);
  const matchesLang = langFilter === "all" || template.lang === langFilter;
  const matchesSearch =
    query.length === 0 ||
    template.name.toLowerCase().includes(query) ||
    (query === "공개" ? published : query === "비공개" ? !published : statusLabel.includes(query));

  return matchesFilter && matchesLang && matchesSearch;
}

export function TemplateTable({ data }: { data: Template[] }) {
  const router = useRouter();
  const [templates, setTemplates] = useState(data);
  const [filter, setFilter] = useState<TemplateFilter>("all");
  const [langFilter, setLangFilter] = useState<LangFilter>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<Template | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [savingOrder, setSavingOrder] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const persistedOrderRef = useRef(new Map(data.map((template, index) => [template.id, index])));
  const pendingOrderRef = useRef<Template[] | null>(null);

  useEffect(() => {
    setTemplates(data);
    persistedOrderRef.current = new Map(data.map((template, index) => [template.id, index]));
  }, [data]);

  const counts = useMemo(() => {
    const published = templates.filter((template) => template.status === "published").length;
    return { published, private: templates.length - published };
  }, [templates]);

  const filteredData = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return templates.filter((template) => matchesFilters(template, filter, langFilter, query));
  }, [filter, langFilter, searchTerm, templates]);

  const handleDelete = async () => {
    if (!deleteTarget) return;

    setDeleting(true);
    const response = await fetch(`/api/admin/templates/${deleteTarget.id}`, { method: "DELETE" });
    setDeleting(false);

    if (response.ok) {
      setTemplates((current) => current.filter((template) => template.id !== deleteTarget.id).map((template, index) => ({ ...template, sort_order: index })));
      setToast({ message: "삭제됐습니다.", type: "success" });
      router.refresh();
    } else {
      setToast({ message: "삭제에 실패했습니다.", type: "error" });
    }

    setDeleteTarget(null);
  };

  const handleReorder = (nextVisible: Template[]) => {
    const query = searchTerm.trim().toLowerCase();

    setTemplates((prevTemplates) => {
      const visibleIds = new Set(
        prevTemplates.filter((template) => matchesFilters(template, filter, langFilter, query)).map((template) => template.id)
      );
      let visibleIndex = 0;

      // 드래그 중에는 배열 순서만 바꾸고, 움직이지 않은 항목의 객체 참조는 유지한다.
      // 매번 모든 항목을 새 객체로 복제하면 Reorder.Group이 value 참조로 추적하는
      // 내부 드래그 위치 상태가 매 이벤트마다 리셋되어 다른 행들이 같이 흔들린다.
      const nextTemplates = prevTemplates.map((template) =>
        visibleIds.has(template.id) ? nextVisible[visibleIndex++] : template
      );

      pendingOrderRef.current = nextTemplates;
      return nextTemplates;
    });
  };

  const persistOrder = async () => {
    const pending = pendingOrderRef.current;
    if (!pending || savingOrder) return;

    const nextTemplates = pending.map((template, index) => ({ ...template, sort_order: index }));
    const changedTemplates = nextTemplates.filter((template, index) => persistedOrderRef.current.get(template.id) !== index);
    pendingOrderRef.current = null;

    if (changedTemplates.length === 0) return;

    setSavingOrder(true);

    const responses = await Promise.all(
      changedTemplates.map((template) =>
        fetch(`/api/admin/templates/${template.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sort_order: template.sort_order }),
        })
      )
    );

    setSavingOrder(false);

    if (responses.every((response) => response.ok)) {
      setTemplates(nextTemplates);
      persistedOrderRef.current = new Map(nextTemplates.map((template, index) => [template.id, index]));
      setToast({ message: "노출 순서가 저장됐습니다.", type: "success" });
      router.refresh();
      return;
    }

    setToast({ message: "노출 순서 저장에 실패했습니다.", type: "error" });
    router.refresh();
  };

  return (
    <div className="p-6">
      <div className="flex flex-col gap-4 mb-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="flex gap-1 bg-zinc-100 p-1 rounded-lg">
            {filters.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setFilter(item.value)}
                className={clsx(
                  "px-3 py-1.5 text-sm rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2",
                  filter === item.value ? "bg-white shadow-sm text-zinc-900" : "text-zinc-500 hover:text-zinc-700"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex gap-1 bg-zinc-100 p-1 rounded-lg">
            {langFilters.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setLangFilter(item.value)}
                className={clsx(
                  "px-3 py-1.5 text-sm rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2",
                  langFilter === item.value ? "bg-white shadow-sm text-zinc-900" : "text-zinc-500 hover:text-zinc-700"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="text-sm text-zinc-500">
            공개 : <span className="font-semibold text-zinc-900">{counts.published}</span>개, 비공개 : <span className="font-semibold text-zinc-900">{counts.private}</span>개
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
          <label className="relative block md:w-64">
            <Search aria-hidden="true" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <span className="sr-only">템플릿 검색</span>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="이름 또는 상태 검색"
              className="w-full rounded-lg border border-zinc-200 py-2 pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
            />
          </label>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
        <div className={clsx("grid gap-3 border-b border-zinc-200 bg-zinc-50 px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500", templateGridClass)}>
          <div aria-hidden="true" />
          <div>썸네일</div>
          <div>이름</div>
          <div>언어</div>
          <div>카테고리</div>
          <div>상태</div>
          <div>대표</div>
          <div>옵션</div>
        </div>

        {filteredData.length === 0 ? (
          <div className="px-4 py-16 text-center text-sm text-zinc-500">조건에 맞는 템플릿이 없습니다.</div>
        ) : (
          <Reorder.Group axis="y" values={filteredData} onReorder={handleReorder} className="divide-y divide-zinc-100" as="div">
            {filteredData.map((template) => (
              <TemplateRow
                key={template.id}
                template={template}
                onPreview={setPreviewUrl}
                onDelete={setDeleteTarget}
                onDragEnd={persistOrder}
              />
            ))}
          </Reorder.Group>
        )}
      </div>

      {savingOrder && <p className="mt-3 text-xs text-zinc-400">순서를 저장하는 중입니다.</p>}

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
          {deleteTarget?.name} ({deleteTarget?.lang}) 템플릿을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
        </p>
      </Modal>

      {previewUrl && (
        <button type="button" className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6" onClick={() => setPreviewUrl(null)} aria-label="썸네일 확대 보기 닫기">
          <span
            aria-hidden="true"
            style={{ width: "500px", backgroundImage: `url(${previewUrl})` }}
            className="block aspect-[4/3] max-h-[90vh] rounded-lg bg-contain bg-center bg-no-repeat shadow-2xl"
          />
        </button>
      )}

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}

function TemplateRow({
  template,
  onPreview,
  onDelete,
  onDragEnd,
}: {
  template: Template;
  onPreview: (url: string) => void;
  onDelete: (template: Template) => void;
  onDragEnd: () => void;
}) {
  const dragControls = useDragControls();
  const templateUrl = `/${template.lang}/templates/${template.slug}`;

  return (
    <Reorder.Item
      value={template}
      dragListener={false}
      dragControls={dragControls}
      onDragEnd={onDragEnd}
      whileDrag={{ scale: 1.01, boxShadow: "0 12px 30px rgba(15, 23, 42, 0.14)", zIndex: 20 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className={clsx("grid items-center gap-3 bg-white px-4 py-3 text-sm text-zinc-700 transition-colors hover:bg-zinc-50", templateGridClass)}
    >
      <button
        type="button"
        aria-label="순서 변경"
        onPointerDown={(event) => dragControls.start(event)}
        className="flex h-7 w-7 cursor-grab items-center justify-center rounded-md text-zinc-300 transition-colors hover:bg-zinc-100 hover:text-zinc-500 active:cursor-grabbing focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
      >
        <GripVertical aria-hidden="true" className="h-4 w-4" />
      </button>
      <TemplateThumbnail template={template} onPreview={onPreview} />
      <div className="min-w-0">
        <Link href={templateUrl} target="_blank" rel="noopener noreferrer" className="block truncate font-medium text-zinc-900 transition-colors hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2">
          {template.name}
        </Link>
        <p className="truncate font-mono text-xs text-zinc-400">{template.slug}</p>
      </div>
      <span className="font-mono text-xs uppercase text-zinc-500">{template.lang}</span>
      <span className="truncate">{template.category}</span>
      <StatusPill published={template.status === "published"} />
      <div>{template.is_featured ? <CheckIcon aria-label="대표 템플릿" className="w-4 h-4 text-emerald-500" /> : <span className="text-zinc-300">-</span>}</div>
      <div className="flex items-center gap-1">
        <Link href={`/admin/templates/${template.id}`}>
          <Button variant="ghost" size="sm">수정</Button>
        </Link>
        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700" onClick={() => onDelete(template)}>
          삭제
        </Button>
      </div>
    </Reorder.Item>
  );
}

function TemplateThumbnail({ template, onPreview }: { template: Template; onPreview: (url: string) => void }) {
  if (!template.thumbnail_url) {
    return <div className="flex h-8 w-12 items-center justify-center rounded bg-zinc-100 text-[10px] text-zinc-400">없음</div>;
  }

  return (
    <button type="button" onClick={() => onPreview(template.thumbnail_url ?? "")} className="h-8 w-12 overflow-hidden rounded bg-zinc-100 ring-1 ring-zinc-200 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2">
      <span
        aria-hidden="true"
        style={{ backgroundImage: `url(${template.thumbnail_url})` }}
        className="block h-full w-full bg-cover bg-center"
      />
      <span className="sr-only">{template.name} 썸네일 확대 보기</span>
    </button>
  );
}

function StatusPill({ published }: { published: boolean }) {
  return (
    <span className={clsx("inline-flex w-fit items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium", published ? "bg-emerald-50 text-emerald-700" : "bg-zinc-100 text-zinc-600")}>
      <span aria-hidden="true" className={clsx("h-1.5 w-1.5 rounded-full", published ? "bg-emerald-500" : "bg-zinc-400")} />
      {published ? "공개" : "비공개"}
    </span>
  );
}
