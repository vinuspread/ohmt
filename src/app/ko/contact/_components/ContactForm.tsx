"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, LayoutTemplate, Wand2, MessageCircle, X } from "lucide-react";
import { trackLead } from "@/lib/metaPixel";
import { trackGenerateLead } from "@/lib/googleTag";

type InquiryType = "template" | "custom" | "other" | null;

export interface PackageOption {
  id: string;
  name: string;
}

export interface TemplateItem {
  name: string;
  slug: string;
  thumbnail_url: string | null;
  applicable_industries?: string[];
  description?: string | null;
}

const INQUIRY_TYPES = [
  {
    id: "template" as InquiryType,
    title: "템플릿 기반 제작",
    desc: "선택한 템플릿을 기준으로 브랜드에 맞게 완성합니다.",
    icon: LayoutTemplate,
  },
  {
    id: "custom" as InquiryType,
    title: "맞춤 웹사이트 제작",
    desc: "고객의 요구조건에 맞게 기획, 디자인, 개발을 진행합니다.",
    icon: Wand2,
  },
  {
    id: "other" as InquiryType,
    title: "기타 문의",
    desc: "견적, 일정, 제휴 등 궁금한 내용을 편하게 문의하세요.",
    icon: MessageCircle,
  },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SUBMIT_LABEL: Record<"template" | "custom" | "other", string> = {
  template: "제작 상담 신청",
  custom: "맞춤 제작 상담 신청",
  other: "문의 보내기",
};

const INPUT_CLASS = "ohmt-contact-input bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-zinc-900 outline-none text-zinc-900 placeholder:text-zinc-400 px-4 py-3 text-sm w-full transition-all rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:focus:bg-zinc-800 dark:focus:border-zinc-500 dark:text-zinc-100 dark:placeholder:text-zinc-500";
const SELECT_TRIGGER_CLASS = "bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-zinc-900 outline-none px-4 py-3 text-sm w-full transition-all rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:focus:bg-zinc-800 dark:focus:border-zinc-500 flex items-center justify-between gap-2 text-left";
const INPUT_ERROR_CLASS = "border-red-400 bg-red-50 focus:border-red-500 dark:border-red-500/70 dark:bg-red-950/20 dark:focus:border-red-500";
const LABEL_CLASS = "text-[0.62rem] uppercase tracking-widest text-zinc-500 font-bold mb-2 block dark:text-zinc-400";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-500 dark:text-red-400">
      <span className="inline-block h-1 w-1 rounded-full bg-red-500 dark:bg-red-400" />
      {message}
    </p>
  );
}

function SelectField({
  name,
  value,
  onChange,
  options,
  placeholder,
}: {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const selectedLabel = options.find((o) => o.value === value)?.label ?? placeholder;

  return (
    <div ref={containerRef} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`${SELECT_TRIGGER_CLASS} ${value ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-400 dark:text-zinc-500"}`}
      >
        <span className="truncate">{selectedLabel}</span>
        <ChevronDown size={16} className={`flex-shrink-0 text-zinc-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute z-20 mt-1.5 w-full max-h-60 overflow-y-auto rounded-lg border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-800">
          {options.map((opt) => (
            <button
              key={opt.value || "__placeholder"}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`block w-full px-4 py-2.5 text-left text-sm transition-colors ${
                opt.value === value
                  ? "bg-[#F1B100]/10 font-semibold text-zinc-900 dark:text-zinc-100"
                  : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-700/60"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function ContactForm({ packages, requiresConsultation = false, templateList = [] }: { packages: PackageOption[]; requiresConsultation?: boolean; templateList?: TemplateItem[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const templateParam = searchParams.get("template") || "";
  const packageParam = searchParams.get("package") || "";
  const imageParam = searchParams.get("image") || "";
  const categoryParam = searchParams.get("category") || "";

  const hasTemplate = Boolean(templateParam && imageParam);
  const [type, setType] = useState<InquiryType>(hasTemplate ? "template" : null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [heroError, setHeroError] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerSearch, setPickerSearch] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateItem | null>(null);
  const [attachmentFile, setAttachmentFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [budget, setBudget] = useState("");
  const [pkgValue, setPkgValue] = useState(packageParam);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const clearFieldError = (field: string) => {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const MAX_FILE_BYTES = 5 * 1024 * 1024;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file && file.size > MAX_FILE_BYTES) {
      setFileError("파일 크기가 5MB를 초과합니다.");
      e.target.value = "";
      setAttachmentFile(null);
      return;
    }
    setFileError(null);
    setAttachmentFile(file ?? null);
  };

  const readFileAsBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve((reader.result as string).split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const nextFieldErrors: Record<string, string> = {};
    if (!name.trim()) nextFieldErrors.name = "이름을 입력해 주세요.";
    if (!email.trim()) nextFieldErrors.email = "이메일을 입력해 주세요.";
    else if (!EMAIL_PATTERN.test(email.trim())) nextFieldErrors.email = "올바른 이메일 형식이 아닙니다.";
    if (!message.trim()) nextFieldErrors.message = "문의 내용을 입력해 주세요.";

    if (Object.keys(nextFieldErrors).length > 0) {
      setFieldErrors(nextFieldErrors);
      return;
    }
    setFieldErrors({});
    setSubmitting(true);

    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value || "";
    const pkg = (form.elements.namedItem("package") as HTMLSelectElement)?.value || "";
    const budget = (form.elements.namedItem("budget") as HTMLSelectElement)?.value || "";
    const packageName = type === "custom" ? budget : (packages.find((item) => item.id === pkg)?.name ?? pkg);
    const template = selectedTemplate?.name || (form.elements.namedItem("template") as HTMLInputElement)?.value || templateParam;
    const company = (form.elements.namedItem("company") as HTMLInputElement)?.value || "";
    const role = (form.elements.namedItem("role") as HTMLInputElement)?.value || "";

    try {
      const attachment = attachmentFile
        ? { name: attachmentFile.name, type: attachmentFile.type, data: await readFileAsBase64(attachmentFile) }
        : null;

      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lang: "ko",
          inquiry_type: type,
          customer_name: name,
          customer_email: email,
          customer_phone: phone || null,
          company: company || null,
          role: role || null,
          package_name: packageName || null,
          template_name: template || null,
          message,
          attachment,
        }),
      });

      if (!res.ok) throw new Error("서버 오류");
      trackLead();
      trackGenerateLead();
      router.push("/ko/contact/complete");
    } catch {
      setError("문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-10">
      {!heroError && (
        <div className="relative w-full aspect-[21/7] lg:aspect-auto lg:h-[280px] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <img
            src="/contact-hero.jpg"
            alt="Oh My Template 스튜디오"
            className="w-full h-full object-cover [object-position:center_calc(50%-30px)]"
            onError={() => setHeroError(true)}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {INQUIRY_TYPES.map((t) => {
          const isSelected = type === t.id;
          const isDisabled = hasTemplate && t.id !== "template";
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                if (isDisabled) return;
                if (t.id === "template" && !hasTemplate && !selectedTemplate) {
                  setPickerOpen(true);
                } else {
                  setType(t.id);
                }
              }}
              className={`relative flex flex-col gap-4 p-6 rounded-2xl border-2 transition-all duration-200 text-left bg-white dark:bg-zinc-900 ${
                isSelected
                  ? "border-zinc-900 dark:border-zinc-100"
                  : isDisabled
                  ? "border-zinc-100 opacity-30 cursor-default dark:border-zinc-800"
                  : "border-zinc-200 hover:border-zinc-400 cursor-pointer dark:border-zinc-700 dark:hover:border-zinc-500"
              }`}
            >
              {isSelected && <span className="absolute top-3.5 right-3.5 w-2 h-2 rounded-full bg-[#F1B100]" />}
              <div className="space-y-1.5 flex-1">
                <p className="text-base font-bold leading-snug text-zinc-900 dark:text-zinc-100">
                  {t.title}
                </p>
                <p className="text-sm leading-relaxed text-zinc-400 dark:text-zinc-500">
                  {t.desc}
                </p>
              </div>
              <div className={`w-full py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-center transition-all ${
                isSelected ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
              }`}>
                {isSelected ? "선택됨 ✓" : "선택하기"}
              </div>
            </button>
          );
        })}
      </div>

      {pickerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={() => setPickerOpen(false)}>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100">템플릿 선택</h2>
              <button type="button" onClick={() => setPickerOpen(false)} className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="px-6 py-3 border-b border-zinc-100 dark:border-zinc-800">
              <input
                type="text"
                placeholder="템플릿 검색..."
                value={pickerSearch}
                onChange={(e) => setPickerSearch(e.target.value)}
                className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2 text-sm outline-none focus:border-zinc-400 dark:focus:border-zinc-500 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
              />
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto"><div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {templateList
                .filter((t) => t.name.toLowerCase().includes(pickerSearch.toLowerCase()))
                .map((t) => (
                  <button
                    key={t.slug}
                    type="button"
                    onClick={() => {
                      setSelectedTemplate(t);
                      setType("template");
                      setPickerOpen(false);
                      setPickerSearch("");
                    }}
                    className="group flex flex-col gap-2 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all text-left"
                  >
                    <div className="aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                      {t.thumbnail_url ? (
                        <img src={t.thumbnail_url} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-300 dark:text-zinc-600 text-xs">이미지 없음</div>
                      )}
                    </div>
                    <p className="px-3 pb-3 text-xs font-semibold text-zinc-700 dark:text-zinc-300 leading-tight">{t.name}</p>
                  </button>
                ))}
            </div></div>
          </div>
        </div>
      )}

      {type && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <div className="col-span-1 md:sticky md:top-24 space-y-3">
            {type === "template" && (templateParam || selectedTemplate) ? (
              <>
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                  <img src={selectedTemplate?.thumbnail_url || imageParam} alt={selectedTemplate?.name || templateParam} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="text-[0.58rem] uppercase tracking-widest text-white/50 font-bold mb-0.5">선택한 템플릿</p>
                    <p className="text-lg font-bold text-white tracking-tight leading-tight">{selectedTemplate?.name || templateParam}</p>
                    {!selectedTemplate && categoryParam && <p className="text-xs text-white/40 mt-1">{categoryParam}</p>}
                  </div>
                  {selectedTemplate && (
                    <button type="button" onClick={() => setPickerOpen(true)} className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white text-[0.6rem] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-lg transition-all">변경</button>
                  )}
                </div>
                {(() => {
                  const tpl = selectedTemplate ?? templateList.find((t) => t.name === templateParam);
                  if (!tpl) return null;
                  const industries = tpl.applicable_industries ?? [];
                  const desc = tpl.description;
                  if (industries.length === 0 && !desc) return null;
                  return (
                    <div className="space-y-3 px-1 pt-1">
                      {industries.length > 0 && (
                        <div className="space-y-1">
                          <p className="text-[0.58rem] uppercase tracking-widest text-zinc-400 font-bold dark:text-zinc-500">적용 가능 업종</p>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{industries.join(", ")}</p>
                        </div>
                      )}
                      {desc && (
                        <div className="space-y-1">
                          <p className="text-[0.58rem] uppercase tracking-widest text-zinc-400 font-bold dark:text-zinc-500">소개</p>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{desc}</p>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </>
            ) : (
              <div className="pt-2 space-y-6">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold dark:text-zinc-500">
                    {type === "custom" ? "맞춤 제작" : "기타 문의"}
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                    {type === "custom" ? "필요한 웹사이트를 처음부터 설계합니다." : "궁금한 내용을 편하게 문의해 주세요."}
                  </p>
                  <p className="text-sm text-zinc-400 dark:text-zinc-500 leading-relaxed">
                    {type === "custom"
                      ? "기획부터 디자인, 개발과 오픈까지 전담 팀이 진행합니다."
                      : "견적, 일정, 제휴 등 문의 내용을 확인한 뒤 담당자가 답변드립니다."}
                  </p>
                </div>
                <div className="space-y-2.5">
                  {(type === "custom"
                    ? ["서비스 기획 및 UX 설계", "맞춤 디자인", "웹사이트 개발", "오픈 및 기술 지원"]
                    : ["확인 후 빠른 답변(최대 12시간)", "견적·일정·제휴 문의", "담당자 직접 응대"]
                  ).map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F1B100] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} noValidate className="md:col-span-2 space-y-5 bg-white border border-zinc-200 rounded-2xl p-8 dark:bg-zinc-900 dark:border-zinc-800">
            {requiresConsultation && (
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
                <p className="text-sm font-bold text-amber-800 dark:text-amber-400">이 템플릿은 별도 협의가 필요합니다</p>
                <p className="mt-1 text-xs leading-relaxed text-amber-700 dark:text-amber-500">
                  요구사항과 기능 범위에 따라 가격이 달라질 수 있습니다. 문의를 남겨주시면 담당자가 직접 안내해 드립니다.
                </p>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={LABEL_CLASS}>이름</label>
                <input
                  type="text" name="name" required
                  className={`${INPUT_CLASS} ${fieldErrors.name ? INPUT_ERROR_CLASS : ""}`}
                  placeholder="성함을 입력하세요"
                  onChange={() => clearFieldError("name")}
                />
                <FieldError message={fieldErrors.name} />
              </div>
              <div>
                <label className={LABEL_CLASS}>이메일</label>
                <input
                  type="email" name="email" required
                  className={`${INPUT_CLASS} ${fieldErrors.email ? INPUT_ERROR_CLASS : ""}`}
                  placeholder="your@email.com"
                  onChange={() => clearFieldError("email")}
                />
                <FieldError message={fieldErrors.email} />
              </div>
            </div>

            {type === "other" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={LABEL_CLASS}>회사·기관명</label>
                  <input type="text" name="company" className={INPUT_CLASS} placeholder="회사 또는 기관명" />
                </div>
                <div>
                  <label className={LABEL_CLASS}>직책</label>
                  <input type="text" name="role" className={INPUT_CLASS} placeholder="예: 마케팅 팀장" />
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={LABEL_CLASS}>전화번호</label>
                <input type="tel" name="phone" className={INPUT_CLASS} placeholder="010-0000-0000" />
              </div>
              {type === "custom" && (
                <div>
                  <label className={LABEL_CLASS}>가용 예산 <span className="text-zinc-400 normal-case tracking-normal font-normal">(선택)</span></label>
                  <SelectField
                    name="budget"
                    value={budget}
                    onChange={setBudget}
                    placeholder="예산 범위를 선택하세요"
                    options={[
                      { value: "500만원 이내", label: "500만원 이내" },
                      { value: "1천만원 이내", label: "1천만원 이내" },
                      { value: "2천만원 이내", label: "2천만원 이내" },
                      { value: "협의 필요", label: "협의 필요" },
                    ]}
                  />
                </div>
              )}
              {type === "template" && !requiresConsultation && packages.length > 0 && (
                <div>
                  <label className={LABEL_CLASS}>패키지 <span className="text-zinc-400 normal-case tracking-normal font-normal">(선택)</span></label>
                  <SelectField
                    name="package"
                    value={pkgValue}
                    onChange={setPkgValue}
                    placeholder="패키지를 선택하세요"
                    options={packages.map((p) => ({ value: p.id, label: p.name }))}
                  />
                </div>
              )}
            </div>

            {type === "template" && (
              <div>
                <label className={LABEL_CLASS}>관심 템플릿</label>
                {selectedTemplate ? (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-700">
                    {selectedTemplate.thumbnail_url && (
                      <img src={selectedTemplate.thumbnail_url} alt={selectedTemplate.name} className="w-12 h-9 object-cover rounded flex-shrink-0" />
                    )}
                    <span className="flex-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">{selectedTemplate.name}</span>
                    <button type="button" onClick={() => setPickerOpen(true)} className="text-xs text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors underline">변경</button>
                  </div>
                ) : (
                  <input type="text" name="template" defaultValue={templateParam} className={INPUT_CLASS} placeholder="예: 스파 웰니스, 패션, 호텔..." />
                )}
              </div>
            )}

            <div>
              <label className={LABEL_CLASS}>문의 상세</label>
              <textarea
                name="message" rows={6} required
                className={`${INPUT_CLASS} resize-none ${fieldErrors.message ? INPUT_ERROR_CLASS : ""}`}
                placeholder={
                  type === "template" ? "커스터마이징 요구사항과 프로젝트 목표를 알려주세요..."
                  : type === "custom" ? "필요한 웹사이트, 서비스에 대한 기능과 예상 일정을 알려주세요."
                  : "무엇을 도와드릴까요?"
                }
                onChange={() => clearFieldError("message")}
              />
              <FieldError message={fieldErrors.message} />
            </div>

            <div>
              <label className={LABEL_CLASS}>파일 첨부 <span className="text-zinc-400 normal-case tracking-normal font-normal">(선택)</span></label>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.gif,.zip"
                onChange={handleFileChange}
                className="w-full text-sm text-zinc-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:uppercase file:tracking-widest file:bg-zinc-100 file:text-zinc-600 hover:file:bg-zinc-200 file:transition-colors file:cursor-pointer cursor-pointer"
              />
              {fileError
                ? <p className="mt-1.5 text-xs text-red-500">{fileError}</p>
                : <p className="mt-1.5 text-xs text-zinc-400">PDF, JPG, PNG, GIF, ZIP · 최대 5MB</p>
              }
            </div>

            {error && <p className="text-sm text-red-500 text-center">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#F1B100] hover:bg-[#D9A000] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 text-zinc-900 font-bold uppercase tracking-widest text-xs py-4 transition-all rounded-lg"
            >
              {submitting ? "제출 중..." : SUBMIT_LABEL[type ?? "other"]}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
