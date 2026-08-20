"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  Coins,
  Handshake,
  PaperPlaneTilt,
  ShieldCheck,
} from "@phosphor-icons/react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { Logo } from "@/components/Logo";

const statusOptions = ["프리랜서", "개인사업자", "재직 중", "기타"];
const experienceOptions = ["B2B 영업", "B2C 영업", "B2B / B2C 모두", "영업 경험 없음"];
const channelOptions = ["지인 네트워크", "이메일", "카카오톡", "링크드인", "커뮤니티", "오프라인"];

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "status" | "experience" | "channels" | "plan" | "consent", string>>;

const inputClass =
  "mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 text-[15px] text-zinc-950 outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-zinc-500 focus:border-[#D85B25] focus:ring-4 focus:ring-[#D85B25]/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500";

function FieldError({ id, children }: { id: string; children?: string }) {
  if (!children) return null;
  return (
    <p id={id} className="mt-2 text-sm font-medium text-red-700 dark:text-red-400" role="alert">
      {children}
    </p>
  );
}

export function PartnerRecruitment() {
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const clearError = (field: keyof FieldErrors) => {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const toggleChannel = (channel: string) => {
    setSelectedChannels((current) =>
      current.includes(channel) ? current.filter((item) => item !== channel) : [...current, channel],
    );
    clearError("channels");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const status = String(formData.get("status") ?? "");
    const experience = String(formData.get("experience") ?? "");
    const plan = String(formData.get("plan") ?? "").trim();
    const consent = formData.get("consent") === "on";
    const nextErrors: FieldErrors = {};

    if (!name) nextErrors.name = "이름을 입력해 주세요.";
    if (!email) nextErrors.email = "이메일을 입력해 주세요.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "이메일 형식을 확인해 주세요.";
    if (!phone) nextErrors.phone = "연락처를 입력해 주세요.";
    if (!status) nextErrors.status = "현재 활동 형태를 선택해 주세요.";
    if (!experience) nextErrors.experience = "영업 경험을 선택해 주세요.";
    if (selectedChannels.length === 0) nextErrors.channels = "활동할 채널을 하나 이상 선택해 주세요.";
    if (!plan) nextErrors.plan = "간단한 활동 계획을 입력해 주세요.";
    if (!consent) nextErrors.consent = "개인정보 수집과 이용에 동의해 주세요.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      requestAnimationFrame(() => {
        const firstError = form.querySelector<HTMLElement>("[aria-invalid='true']");
        firstError?.focus();
      });
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const response = await fetch("/api/partner-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          status,
          experience,
          channels: selectedChannels,
          industries: String(formData.get("industries") ?? ""),
          profileUrl: String(formData.get("profileUrl") ?? ""),
          plan,
          consent,
          website: String(formData.get("website") ?? ""),
        }),
      });

      const result = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) throw new Error(result?.error || "지원서를 접수하지 못했습니다.");
      setSubmitted(true);
      form.reset();
      setSelectedChannels([]);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "잠시 후 다시 시도해 주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  const enter = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  return (
    <MotionConfig reducedMotion="user">
    <main className="min-h-[100dvh] bg-[#F4F5F2] font-sans text-zinc-950 antialiased selection:bg-[#D85B25]/20 dark:bg-[#111210] dark:text-zinc-100">
      <header className="border-b border-zinc-300/70 bg-[#F4F5F2]/95 dark:border-zinc-800 dark:bg-[#111210]/95">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/ko" aria-label="OHMT 홈" className="flex h-7 items-center">
            <Logo className="h-7 w-auto" />
          </Link>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-bold text-white transition-transform duration-150 active:scale-[0.97] dark:bg-zinc-100 dark:text-zinc-950"
          >
            지원하기
            <ArrowRight size={16} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </header>

      <section className="mx-auto grid min-h-[calc(100dvh-72px)] max-w-[1400px] grid-cols-1 items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-12">
        <motion.div {...enter} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }} className="lg:col-span-6 lg:pr-6">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#B84416] dark:text-[#F18A60]">
            OHMT Sales Partner
          </p>
          <h1 className="max-w-[760px] text-[clamp(3rem,5.4vw,5.2rem)] font-black leading-[0.96] tracking-[-0.065em]">
            고객과 OHMT를<br />연결하세요.
          </h1>
          <p className="mt-7 max-w-[520px] text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            원하는 시간에 활동하고, 연결한 고객의 결제 금액에서 10%를 받으세요.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#D85B25] px-6 py-3.5 text-[15px] font-bold text-white transition-transform duration-150 active:scale-[0.97]"
            >
              파트너 지원
              <ArrowRight size={17} weight="bold" aria-hidden="true" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center whitespace-nowrap rounded-full border border-zinc-400 px-6 py-3.5 text-[15px] font-bold text-zinc-900 transition-colors duration-200 hover:border-zinc-950 dark:border-zinc-600 dark:text-zinc-100 dark:hover:border-zinc-300"
            >
              활동 방식 보기
            </a>
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-6"
        >
          <div className="relative aspect-[4/5] max-h-[700px] overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800">
            <Image
              src="/sales-partner-hero.webp"
              alt="노트북과 스마트폰으로 고객 연락을 준비하는 독립 영업 파트너"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.figure>
      </section>

      <section className="border-y border-zinc-300/80 dark:border-zinc-800" aria-label="파트너 주요 조건">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 px-5 sm:px-8 md:grid-cols-3 lg:px-12">
          {[
            { value: "10%", label: "결제 완료 금액 기준 커미션" },
            { value: "자율", label: "출퇴근 없이 원하는 시간에 활동" },
            { value: "지원", label: "소개서, 메시지, FAQ 영업 키트" },
          ].map((item, index) => (
            <div
              key={item.value}
              className={`py-8 md:px-8 ${index > 0 ? "border-t border-zinc-300/80 md:border-l md:border-t-0 dark:border-zinc-800" : ""}`}
            >
              <p className="text-3xl font-black tracking-tight text-[#B84416] dark:text-[#F18A60]">{item.value}</p>
              <p className="mt-2 text-sm font-medium leading-6 text-zinc-700 dark:text-zinc-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-start"
        >
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-black leading-[1.08] tracking-[-0.045em] sm:text-5xl">
              소개에 필요한 준비는<br />OHMT가 합니다.
            </h2>
            <p className="mt-6 max-w-[480px] text-base leading-7 text-zinc-700 dark:text-zinc-300">
              고객을 찾고 연결하는 데 집중하세요. 서비스 설명과 실적 확인에 필요한 자료는 선정 후 모두 제공합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            <article className="rounded-2xl bg-[#E7E8E4] p-7 dark:bg-zinc-900 sm:row-span-2 sm:flex sm:flex-col sm:justify-between">
              <Handshake size={32} weight="duotone" className="text-[#B84416] dark:text-[#F18A60]" aria-hidden="true" />
              <div className="mt-16 sm:mt-32">
                <h3 className="text-xl font-black">고객 연결</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">본인 네트워크와 온라인 채널에서 OHMT를 소개합니다.</p>
              </div>
            </article>
            <article className="rounded-2xl border border-zinc-300 bg-transparent p-7 dark:border-zinc-700">
              <PaperPlaneTilt size={28} weight="duotone" className="text-[#B84416] dark:text-[#F18A60]" aria-hidden="true" />
              <h3 className="mt-10 text-xl font-black">전용 링크 공유</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">추천 링크와 메시지 템플릿으로 상담과 결제를 연결합니다.</p>
            </article>
            <article className="rounded-2xl bg-[#D85B25] p-7 text-white">
              <Coins size={28} weight="duotone" aria-hidden="true" />
              <h3 className="mt-10 text-xl font-black">성과 정산</h3>
              <p className="mt-3 text-sm leading-6 text-white/85">환불 기간이 지난 결제 건을 기준으로 월 단위 정산합니다.</p>
            </article>
          </div>
        </motion.div>
      </section>

      <section id="apply" className="border-t border-zinc-300/80 px-5 py-20 sm:px-8 lg:px-12 lg:py-28 dark:border-zinc-800">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-10">
              <h2 className="text-4xl font-black leading-[1.08] tracking-[-0.045em] sm:text-5xl">파트너 지원</h2>
              <p className="mt-5 max-w-[460px] text-base leading-7 text-zinc-700 dark:text-zinc-300">
                영업 경력보다 고객과 신뢰를 쌓는 방식을 봅니다. 핵심 내용만 짧게 남겨주세요.
              </p>
              <div className="mt-10 space-y-5">
                {[
                  "접수 내용을 확인한 뒤 개별 연락드립니다.",
                  "선정 후 전용 추천 링크와 영업 자료를 드립니다.",
                  "세부 정산 일정과 활동 기준은 계약 전에 안내합니다.",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-[#D85B25]" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                  className="flex min-h-[520px] flex-col items-start justify-center rounded-2xl border border-zinc-300 bg-white p-8 sm:p-12 dark:border-zinc-700 dark:bg-zinc-900"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D85B25] text-white">
                    <Check size={28} weight="bold" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 text-3xl font-black tracking-tight">지원이 접수되었습니다.</h3>
                  <p className="mt-4 max-w-[480px] leading-7 text-zinc-700 dark:text-zinc-300">
                    남겨주신 활동 계획을 확인한 뒤 연락드리겠습니다. OHMT에 관심을 가져주셔서 감사합니다.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 whitespace-nowrap rounded-full border border-zinc-400 px-5 py-3 text-sm font-bold transition-transform duration-150 active:scale-[0.97] dark:border-zinc-600"
                  >
                    다른 지원서 작성
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-2xl border border-zinc-300 bg-white p-6 shadow-[0_24px_70px_rgba(39,36,30,0.07)] sm:p-9 dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-none"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      이름 <span className="text-[#B84416] dark:text-[#F18A60]">필수</span>
                      <input name="name" autoComplete="name" maxLength={80} className={inputClass} placeholder="홍길동" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} onChange={() => clearError("name")} />
                      <FieldError id="name-error">{errors.name}</FieldError>
                    </label>
                    <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      연락처 <span className="text-[#B84416] dark:text-[#F18A60]">필수</span>
                      <input name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={40} className={inputClass} placeholder="010-0000-0000" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} onChange={() => clearError("phone")} />
                      <FieldError id="phone-error">{errors.phone}</FieldError>
                    </label>
                  </div>

                  <label className="mt-6 block text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    이메일 <span className="text-[#B84416] dark:text-[#F18A60]">필수</span>
                    <input name="email" type="email" autoComplete="email" maxLength={254} className={inputClass} placeholder="name@example.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} onChange={() => clearError("email")} />
                    <FieldError id="email-error">{errors.email}</FieldError>
                  </label>

                  <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      현재 활동 형태 <span className="text-[#B84416] dark:text-[#F18A60]">필수</span>
                      <select name="status" defaultValue="" className={inputClass} aria-invalid={Boolean(errors.status)} aria-describedby={errors.status ? "status-error" : undefined} onChange={() => clearError("status")}>
                        <option value="" disabled>선택해 주세요</option>
                        {statusOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                      </select>
                      <FieldError id="status-error">{errors.status}</FieldError>
                    </label>
                    <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      영업 경험 <span className="text-[#B84416] dark:text-[#F18A60]">필수</span>
                      <select name="experience" defaultValue="" className={inputClass} aria-invalid={Boolean(errors.experience)} aria-describedby={errors.experience ? "experience-error" : undefined} onChange={() => clearError("experience")}>
                        <option value="" disabled>선택해 주세요</option>
                        {experienceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                      </select>
                      <FieldError id="experience-error">{errors.experience}</FieldError>
                    </label>
                  </div>

                  <fieldset className="mt-7">
                    <legend className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      활동 가능한 채널 <span className="text-[#B84416] dark:text-[#F18A60]">필수</span>
                    </legend>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">복수 선택할 수 있습니다.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {channelOptions.map((channel) => {
                        const selected = selectedChannels.includes(channel);
                        return (
                          <label key={channel} className={`cursor-pointer rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${selected ? "border-[#D85B25] bg-[#D85B25] text-white" : "border-zinc-300 bg-transparent text-zinc-700 hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"}`}>
                            <input type="checkbox" name="channels" value={channel} checked={selected} onChange={() => toggleChannel(channel)} className="sr-only" />
                            <span className="inline-flex items-center gap-1.5">{selected && <Check size={14} weight="bold" aria-hidden="true" />}{channel}</span>
                          </label>
                        );
                      })}
                    </div>
                    <FieldError id="channels-error">{errors.channels}</FieldError>
                  </fieldset>

                  <label className="mt-7 block text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    관심 업종 또는 보유 네트워크
                    <input name="industries" maxLength={300} className={inputClass} placeholder="예: 병원, 쇼핑몰, 스타트업 대표 네트워크" />
                  </label>

                  <label className="mt-6 block text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    프로필 또는 소개 링크
                    <input name="profileUrl" type="url" inputMode="url" maxLength={500} className={inputClass} placeholder="링크드인, 블로그, 포트폴리오 등" />
                  </label>

                  <label className="mt-6 block text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    활동 계획 <span className="text-[#B84416] dark:text-[#F18A60]">필수</span>
                    <textarea name="plan" rows={5} maxLength={2000} className={`${inputClass} resize-y`} placeholder="어떤 고객에게, 어떤 방식으로 OHMT를 소개하고 싶은지 편하게 적어 주세요." aria-invalid={Boolean(errors.plan)} aria-describedby={errors.plan ? "plan-error" : "plan-help"} onChange={() => clearError("plan")} />
                    <span id="plan-help" className="mt-2 block text-sm font-normal text-zinc-600 dark:text-zinc-400">간단히 2-3문장만 적어도 충분합니다.</span>
                    <FieldError id="plan-error">{errors.plan}</FieldError>
                  </label>

                  <div className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0" aria-hidden="true">
                    <label>웹사이트<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
                  </div>

                  <label className="mt-7 flex cursor-pointer items-start gap-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                    <input name="consent" type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-400 accent-[#D85B25]" aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "consent-error" : undefined} onChange={() => clearError("consent")} />
                    <span>
                      지원 검토와 연락을 위한 개인정보 수집 및 이용에 동의합니다. <Link href="/ko/privacy-policy" target="_blank" className="font-bold underline underline-offset-4">내용 보기</Link>
                    </span>
                  </label>
                  <FieldError id="consent-error">{errors.consent}</FieldError>

                  {submitError && (
                    <div role="alert" className="mt-6 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm font-medium text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#D85B25] px-6 py-4 text-[15px] font-bold text-white transition-transform duration-150 active:scale-[0.97] disabled:cursor-wait disabled:opacity-70"
                  >
                    {submitting ? "지원서 접수 중" : "지원서 보내기"}
                    {!submitting && <ArrowRight size={17} weight="bold" aria-hidden="true" />}
                  </button>
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                    <ShieldCheck size={16} weight="duotone" aria-hidden="true" />
                    입력한 정보는 파트너 선정 목적으로만 사용합니다.
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-300/80 px-5 py-10 text-sm text-zinc-600 sm:px-8 lg:px-12 dark:border-zinc-800 dark:text-zinc-400">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/ko" aria-label="OHMT 홈" className="flex h-6 items-center">
            <Logo className="h-6 w-auto" />
          </Link>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/ko/privacy-policy" className="hover:text-zinc-950 dark:hover:text-zinc-100">개인정보처리방침</Link>
            <a href="mailto:vinus@vinus.co.kr" className="hover:text-zinc-950 dark:hover:text-zinc-100">vinus@vinus.co.kr</a>
          </div>
        </div>
      </footer>
    </main>
    </MotionConfig>
  );
}
