"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle, LayoutTemplate, Wand2, MessageCircle } from "lucide-react";

type InquiryType = "template" | "custom" | "other" | null;

export interface PackageOption {
  id: string;
  name: string;
}

const INQUIRY_TYPES = [
  {
    id: "template" as InquiryType,
    title: "템플릿 기반 제작",
    desc: "선택한 템플릿으로 커스터마이징 합니다.",
    icon: LayoutTemplate,
  },
  {
    id: "custom" as InquiryType,
    title: "맞춤 웹사이트 제작",
    desc: "템플릿 없이 처음부터 기획·디자인·개발까지 함께합니다",
    icon: Wand2,
  },
  {
    id: "other" as InquiryType,
    title: "기타 문의",
    desc: "견적, 일정, 파트너십 등 궁금한 점은 무엇이든 물어보세요",
    icon: MessageCircle,
  },
];

const INPUT_CLASS = "bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-zinc-900 outline-none text-zinc-900 placeholder:text-zinc-400 px-4 py-3 text-sm w-full transition-all rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:focus:bg-zinc-800 dark:focus:border-zinc-500 dark:text-zinc-100 dark:placeholder:text-zinc-500";
const LABEL_CLASS = "text-[0.62rem] uppercase tracking-widest text-zinc-500 font-bold mb-2 block dark:text-zinc-400";

export function ContactForm({ packages, requiresConsultation = false }: { packages: PackageOption[]; requiresConsultation?: boolean }) {
  const searchParams = useSearchParams();
  const templateParam = searchParams.get("template") || "";
  const packageParam = searchParams.get("package") || "";
  const imageParam = searchParams.get("image") || "";
  const categoryParam = searchParams.get("category") || "";

  const hasTemplate = Boolean(templateParam && imageParam);
  const [type, setType] = useState<InquiryType>(hasTemplate ? "template" : null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [heroError, setHeroError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value || "";
    const pkg = (form.elements.namedItem("package") as HTMLSelectElement)?.value || "";
    const packageName = packages.find((item) => item.id === pkg)?.name ?? pkg;
    const template = (form.elements.namedItem("template") as HTMLInputElement)?.value || "";
    const company = (form.elements.namedItem("company") as HTMLInputElement)?.value || "";
    const role = (form.elements.namedItem("role") as HTMLInputElement)?.value || "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    try {
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
        }),
      });

      if (!res.ok) throw new Error("서버 오류");
      setSubmitted(true);
    } catch {
      setError("문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-24 text-center">
        <CheckCircle size={40} className="text-[#F1B100]" strokeWidth={1.5} />
        <div className="space-y-2">
          <p className="text-zinc-900 text-base font-bold dark:text-zinc-100">문의가 접수되었습니다</p>
          <p className="text-sm text-zinc-400 font-normal dark:text-zinc-500">문의를 검토 후 24시간 이내에 연락드립니다.</p>
        </div>
        <Link href="/ko" className="mt-4 text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-zinc-900 transition-colors dark:text-zinc-500 dark:hover:text-zinc-100">
          템플릿으로 돌아가기
        </Link>
      </div>
    );
  }

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
              onClick={() => !isDisabled && setType(t.id)}
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

      {type && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <div className="col-span-1 sticky top-24 space-y-3">
            {type === "template" && templateParam && imageParam ? (
              <>
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                  <img src={imageParam} alt={templateParam} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="text-[0.58rem] uppercase tracking-widest text-white/50 font-bold mb-0.5">선택한 템플릿</p>
                    <p className="text-lg font-bold text-white tracking-tight leading-tight">{templateParam}</p>
                    {categoryParam && <p className="text-xs text-white/40 mt-1">{categoryParam}</p>}
                  </div>
                </div>
                <div className="space-y-1.5 px-1">
                  {["프리미엄 템플릿 포함", "디자인 커스터마이징", "24시간 내 응답 보장"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
                      <span className="w-1 h-1 rounded-full bg-[#F1B100] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="pt-2 space-y-5">
                <div className="space-y-2">
                  <p className="text-[0.58rem] uppercase tracking-widest text-zinc-400 font-bold dark:text-zinc-500">
                    {type === "custom" ? "맞춤 제작" : "기타 문의"}
                  </p>
                  <p className="text-base font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                    {type === "custom" ? "함께 특별한 것을 만들어봐요." : "궁금한 점이 있으신가요?"}
                  </p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed">
                    {type === "custom"
                      ? "기획부터 런칭까지 모든 디테일을 함께 챙겨드립니다."
                      : "어떤 문의든 편하게 남겨주세요."}
                  </p>
                </div>
                <div className="space-y-1.5">
                  {(type === "custom"
                    ? ["전략 & UX 기획", "맞춤 디자인 시스템", "풀스택 개발", "런칭 & 유지보수"]
                    : ["24시간 내 빠른 답변", "부담 없는 문의", "담당자 직접 응대"]
                  ).map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
                      <span className="w-1 h-1 rounded-full bg-[#F1B100] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-5 bg-white border border-zinc-200 rounded-2xl p-8 dark:bg-zinc-900 dark:border-zinc-800">
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
                <input type="text" name="name" required className={INPUT_CLASS} placeholder="성함을 입력하세요" />
              </div>
              <div>
                <label className={LABEL_CLASS}>이메일</label>
                <input type="email" name="email" required className={INPUT_CLASS} placeholder="your@email.com" />
              </div>
            </div>

            {type === "other" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={LABEL_CLASS}>회사 / 기관</label>
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
              {type !== "other" && !requiresConsultation && packages.length > 0 && (
                <div>
                  <label className={LABEL_CLASS}>패키지 <span className="text-zinc-400 normal-case tracking-normal font-normal">(선택)</span></label>
                  <select name="package" defaultValue={packageParam} className={INPUT_CLASS}>
                    <option value="">패키지를 선택하세요</option>
                    {packages.map((p) => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {type === "template" && (
              <div>
                <label className={LABEL_CLASS}>관심 템플릿</label>
                <input type="text" name="template" defaultValue={templateParam} className={INPUT_CLASS} placeholder="예: 스파 웰니스, 패션, 호텔..." />
              </div>
            )}

            <div>
              <label className={LABEL_CLASS}>{type === "other" ? "문의 내용" : "프로젝트 목표"}</label>
              <textarea
                name="message" rows={6} required className={`${INPUT_CLASS} resize-none`}
                placeholder={
                  type === "template" ? "프로젝트 목표와 커스터마이징 요구사항을 알려주세요..."
                  : type === "custom" ? "브랜드, 타겟 고객, 필요한 기능을 설명해 주세요..."
                  : "무엇을 도와드릴까요?"
                }
              />
            </div>

            {error && <p className="text-sm text-red-500 text-center">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#F1B100] hover:bg-[#D9A000] disabled:opacity-50 disabled:cursor-not-allowed text-zinc-900 font-bold uppercase tracking-widest text-xs py-4 transition-all rounded-lg"
            >
              {submitting ? "제출 중..." : "문의 제출하기"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
