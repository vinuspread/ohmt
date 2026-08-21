"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Buildings,
  Check,
  CheckCircle,
  Handshake,
  PresentationChart,
  ShieldCheck,
  UserFocus,
} from "@phosphor-icons/react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { Logo } from "@/components/Logo";

const statusOptions = ["독립 컨설턴트", "에이전시 / 법인", "현직 업계 전문가", "기타"];
const experienceOptions = ["B2B 세일즈 / 컨설팅", "웹·IT 프로젝트", "광고 / 마케팅 대행", "기타 관련 경험"];
const channelOptions = ["보유 고객사", "업계 네트워크", "제휴 채널", "전문 커뮤니티", "콘텐츠 / 미디어", "오프라인 영업"];

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "status" | "experience" | "channels" | "plan" | "consent", string>>;

const inputClass =
  "mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3.5 text-[15px] text-zinc-950 outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-zinc-500 focus:border-[#A87500] focus:ring-4 focus:ring-[#A87500]/10";

function FieldError({ id, children }: { id: string; children?: string }) {
  if (!children) return null;
  return <p id={id} className="mt-2 text-sm font-semibold text-red-700" role="alert">{children}</p>;
}

const operatingSteps = [
  {
    title: "사업 기회 발굴",
    body: "웹사이트 구축이나 개편이 필요한 기업을 찾고, 고객의 과제와 의사결정 구조를 확인합니다.",
  },
  {
    title: "프로젝트 검토",
    body: "OHMT가 요구사항과 일정, 예산을 검토해 제안 가능 여부와 다음 절차를 정리합니다.",
  },
  {
    title: "제안과 계약",
    body: "서비스 설명, 견적 제안, 계약과 프로젝트 수행은 OHMT가 책임지고 진행합니다.",
  },
  {
    title: "성과 정산",
    body: "계약이 성사되면 환불 기간이 지난 결제 금액을 기준으로 월 단위 정산합니다.",
  },
];

const partnerProfiles = [
  { icon: UserFocus, title: "독립 컨설턴트", body: "기업의 사업 과제를 가까이에서 듣고 해결 방향을 제안하는 분" },
  { icon: Buildings, title: "에이전시·법인", body: "기존 고객에게 웹 구축 역량을 확장해 제공하려는 조직" },
  { icon: PresentationChart, title: "업계 전문가", body: "특정 산업의 의사결정자와 지속적인 접점을 보유한 분" },
  { icon: Handshake, title: "제휴 파트너", body: "고객 발굴부터 제안까지 장기 협업 체계를 만들고 싶은 분" },
];

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

    if (!name) nextErrors.name = "성명 또는 담당자명을 입력해 주세요.";
    if (!email) nextErrors.email = "업무 이메일을 입력해 주세요.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "이메일 형식을 확인해 주세요.";
    if (!phone) nextErrors.phone = "연락처를 입력해 주세요.";
    if (!status) nextErrors.status = "사업 형태를 선택해 주세요.";
    if (!experience) nextErrors.experience = "관련 경험을 선택해 주세요.";
    if (selectedChannels.length === 0) nextErrors.channels = "주요 고객 접점을 하나 이상 선택해 주세요.";
    if (!plan) nextErrors.plan = "파트너십 제안을 입력해 주세요.";
    if (!consent) nextErrors.consent = "개인정보 수집과 이용에 동의해 주세요.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      requestAnimationFrame(() => form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus());
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
      if (!response.ok) throw new Error(result?.error || "신청서를 접수하지 못했습니다.");
      setSubmitted(true);
      form.reset();
      setSelectedChannels([]);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "잠시 후 다시 시도해 주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-[100dvh] bg-[#F3F4F5] font-sans text-[#15171A] antialiased selection:bg-[#A87500]/20">
        <header className="border-b border-zinc-300/80 bg-[#F3F4F5]/95 backdrop-blur-sm">
          <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
            <Link href="/ko" aria-label="OHMT 홈" className="flex h-7 items-center">
              <Logo className="h-7 w-auto" />
            </Link>
            <a href="#apply" className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-[#15171A] px-5 py-2.5 text-sm font-bold text-white transition-transform duration-150 active:translate-y-px">
              파트너십 신청
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </header>

        <section className="mx-auto grid min-h-[calc(100dvh-72px)] max-w-[1400px] grid-cols-1 items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-12">
          <motion.div initial={{ opacity: 1, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }} className="lg:col-span-6 lg:pr-6">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#8A6100]">OHMT Business Partner Program</p>
            <h1 className="max-w-[760px] text-[clamp(2.9rem,5.2vw,5rem)] font-black leading-[0.98] tracking-[-0.06em]">
              기업의 웹 프로젝트를<br />함께 발굴합니다.
            </h1>
            <p className="mt-7 max-w-[540px] text-lg leading-8 text-zinc-700">
              고객의 사업 과제를 파악하고 OHMT의 기획·디자인·개발 역량과 연결하는 공식 비즈니스 파트너 프로그램입니다.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#apply" className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-[#15171A] px-6 py-3.5 text-[15px] font-bold text-white transition-transform duration-150 active:translate-y-px">
                파트너십 신청
                <ArrowRight size={17} weight="bold" aria-hidden="true" />
              </a>
              <a href="#operating-model" className="inline-flex items-center whitespace-nowrap rounded-lg border border-zinc-400 px-6 py-3.5 text-[15px] font-bold text-zinc-900 transition-colors duration-200 hover:border-zinc-950">
                운영 기준 확인
              </a>
            </div>
          </motion.div>

          <motion.figure initial={{ opacity: 1, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} className="relative lg:col-span-6">
            <div className="relative aspect-[4/5] max-h-[700px] overflow-hidden rounded-xl bg-zinc-300">
              <Image src="/business-partner-hero.webp" alt="기업 웹 프로젝트 제안서를 함께 검토하는 비즈니스 파트너와 담당자" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </motion.figure>
        </section>

        <section className="border-y border-zinc-300/90" aria-label="파트너 프로그램 운영 기준">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
            {[
              ["파트너 역할", "사업 기회 발굴과 고객 과제 파악"],
              ["OHMT 역할", "제안·계약·프로젝트 수행"],
              ["성과 보상", "계약 결제 금액의 10%"],
              ["정산 기준", "환불 기간 경과 후 월 단위"],
            ].map(([title, body], index) => (
              <div key={title} className={`py-7 md:px-7 ${index > 0 ? "border-t border-zinc-300/90 md:border-l md:border-t-0" : ""} ${index === 2 ? "md:border-t lg:border-t-0" : ""}`}>
                <p className="text-xs font-bold text-[#8A6100]">{title}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-zinc-800">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="operating-model" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <motion.div initial={{ opacity: 1, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <h2 className="max-w-[760px] text-4xl font-black leading-[1.08] tracking-[-0.045em] sm:text-5xl">역할과 절차를 분명히 나눈<br className="hidden sm:block" /> 협업 구조입니다.</h2>
            <p className="mt-6 max-w-[620px] text-base leading-7 text-zinc-700">파트너는 고객 관계와 사업 기회에 집중하고, OHMT는 전문 제안과 프로젝트 수행을 맡습니다.</p>
            <ol className="mt-14 grid grid-cols-1 border-t border-zinc-400 md:grid-cols-2 lg:grid-cols-4">
              {operatingSteps.map((step, index) => (
                <li key={step.title} className={`min-h-[250px] border-b border-zinc-300 py-7 md:px-7 ${index % 2 === 1 ? "md:border-l" : ""} ${index > 0 ? "lg:border-l" : ""} lg:border-b-0`}>
                  <span className="text-sm font-black tabular-nums text-[#8A6100]">0{index + 1}</span>
                  <h3 className="mt-12 text-xl font-black tracking-tight">{step.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-700">{step.body}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </section>

        <section className="border-y border-zinc-300/90 bg-[#ECEDEF]">
          <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
            <h2 className="text-4xl font-black leading-[1.08] tracking-[-0.045em] sm:text-5xl">이런 파트너와 함께합니다.</h2>
            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {partnerProfiles.map(({ icon: Icon, title, body }) => (
                <article key={title} className="border-l-2 border-[#A87500] pl-5">
                  <Icon size={27} weight="duotone" className="text-[#8A6100]" aria-hidden="true" />
                  <h3 className="mt-7 text-lg font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="apply" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-10">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#8A6100]">Partnership Application</p>
                <h2 className="text-4xl font-black leading-[1.08] tracking-[-0.045em] sm:text-5xl">비즈니스 파트너십 신청</h2>
                <p className="mt-5 max-w-[470px] text-base leading-7 text-zinc-700">보유 네트워크와 관련 경험을 검토한 뒤 프로그램 운영 기준과 협업 절차를 개별 안내합니다.</p>
                <div className="mt-10 space-y-5">
                  {["접수 내용을 검토한 뒤 개별 연락드립니다.", "협업이 확정되면 제안 자료와 실적 확인 수단을 제공합니다.", "세부 보상과 정산 기준은 파트너 계약서에 명시합니다."].map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-6 text-zinc-700">
                      <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-[#8A6100]" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success" initial={{ opacity: 1, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.28 }} className="flex min-h-[520px] flex-col items-start justify-center rounded-xl border border-zinc-300 bg-white p-8 sm:p-12">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#15171A] text-white"><Check size={28} weight="bold" aria-hidden="true" /></div>
                    <h3 className="mt-8 text-3xl font-black tracking-tight">신청이 접수되었습니다.</h3>
                    <p className="mt-4 max-w-[480px] leading-7 text-zinc-700">남겨주신 경험과 파트너십 제안을 검토한 뒤 연락드리겠습니다.</p>
                    <button type="button" onClick={() => setSubmitted(false)} className="mt-8 whitespace-nowrap rounded-lg border border-zinc-400 px-5 py-3 text-sm font-bold active:translate-y-px">다른 신청서 작성</button>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} onSubmit={handleSubmit} noValidate className="rounded-xl border border-zinc-300 bg-white p-6 shadow-[0_24px_70px_rgba(24,29,36,0.06)] sm:p-9">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <label className="block text-sm font-bold">성명 / 담당자명 <span className="text-[#8A6100]">필수</span><input name="name" autoComplete="name" maxLength={80} className={inputClass} placeholder="홍길동" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} onChange={() => clearError("name")} /><FieldError id="name-error">{errors.name}</FieldError></label>
                      <label className="block text-sm font-bold">연락처 <span className="text-[#8A6100]">필수</span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={40} className={inputClass} placeholder="010-0000-0000" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} onChange={() => clearError("phone")} /><FieldError id="phone-error">{errors.phone}</FieldError></label>
                    </div>

                    <label className="mt-6 block text-sm font-bold">업무 이메일 <span className="text-[#8A6100]">필수</span><input name="email" type="email" autoComplete="email" maxLength={254} className={inputClass} placeholder="name@company.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} onChange={() => clearError("email")} /><FieldError id="email-error">{errors.email}</FieldError></label>

                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <label className="block text-sm font-bold">사업 형태 <span className="text-[#8A6100]">필수</span><select name="status" defaultValue="" className={inputClass} aria-invalid={Boolean(errors.status)} aria-describedby={errors.status ? "status-error" : undefined} onChange={() => clearError("status")}><option value="" disabled>선택해 주세요</option>{statusOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select><FieldError id="status-error">{errors.status}</FieldError></label>
                      <label className="block text-sm font-bold">관련 경험 <span className="text-[#8A6100]">필수</span><select name="experience" defaultValue="" className={inputClass} aria-invalid={Boolean(errors.experience)} aria-describedby={errors.experience ? "experience-error" : undefined} onChange={() => clearError("experience")}><option value="" disabled>선택해 주세요</option>{experienceOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select><FieldError id="experience-error">{errors.experience}</FieldError></label>
                    </div>

                    <fieldset className="mt-7">
                      <legend className="text-sm font-bold">주요 고객 접점 <span className="text-[#8A6100]">필수</span></legend>
                      <p className="mt-1 text-sm text-zinc-600">복수 선택할 수 있습니다.</p>
                      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {channelOptions.map((channel) => {
                          const selected = selectedChannels.includes(channel);
                          return <label key={channel} className={`cursor-pointer rounded-lg border px-3 py-2.5 text-center text-sm font-semibold transition-colors duration-200 ${selected ? "border-[#15171A] bg-[#15171A] text-white" : "border-zinc-300 text-zinc-700 hover:border-zinc-500"}`}><input type="checkbox" name="channels" value={channel} checked={selected} onChange={() => toggleChannel(channel)} className="sr-only" /><span className="inline-flex items-center gap-1.5">{selected && <Check size={14} weight="bold" aria-hidden="true" />}{channel}</span></label>;
                        })}
                      </div>
                      <FieldError id="channels-error">{errors.channels}</FieldError>
                    </fieldset>

                    <label className="mt-7 block text-sm font-bold">주요 산업군 또는 고객 네트워크<input name="industries" maxLength={300} className={inputClass} placeholder="예: 병원, 커머스, 스타트업 경영진 네트워크" /></label>
                    <label className="mt-6 block text-sm font-bold">회사 / 프로필 링크<input name="profileUrl" type="url" inputMode="url" maxLength={500} className={inputClass} placeholder="회사 홈페이지, 링크드인, 포트폴리오 등" /></label>
                    <label className="mt-6 block text-sm font-bold">파트너십 제안 <span className="text-[#8A6100]">필수</span><textarea name="plan" rows={6} maxLength={2000} className={`${inputClass} resize-y`} placeholder="주요 고객군, 사업 기회를 발굴하는 방식, OHMT와 기대하는 협업 형태를 적어 주세요." aria-invalid={Boolean(errors.plan)} aria-describedby={errors.plan ? "plan-error" : "plan-help"} onChange={() => clearError("plan")} /><span id="plan-help" className="mt-2 block text-sm font-normal text-zinc-600">검토에 필요한 핵심 내용만 작성해 주세요.</span><FieldError id="plan-error">{errors.plan}</FieldError></label>

                    <div className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0" aria-hidden="true"><label>웹사이트<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label></div>
                    <label className="mt-7 flex cursor-pointer items-start gap-3 text-sm leading-6 text-zinc-700"><input name="consent" type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-400 accent-[#A87500]" aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "consent-error" : undefined} onChange={() => clearError("consent")} /><span>신청 검토와 연락을 위한 개인정보 수집 및 이용에 동의합니다. <Link href="/ko/privacy-policy" target="_blank" className="font-bold underline underline-offset-4">내용 보기</Link></span></label>
                    <FieldError id="consent-error">{errors.consent}</FieldError>

                    {submitError && <div role="alert" className="mt-6 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">{submitError}</div>}
                    <button type="submit" disabled={submitting} className="mt-8 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#15171A] px-6 py-4 text-[15px] font-bold text-white transition-transform duration-150 active:translate-y-px disabled:cursor-wait disabled:opacity-70">{submitting ? "신청서 접수 중" : "파트너십 신청서 제출"}{!submitting && <ArrowRight size={17} weight="bold" aria-hidden="true" />}</button>
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-600"><ShieldCheck size={16} weight="duotone" aria-hidden="true" />입력한 정보는 파트너 검토 목적으로만 사용합니다.</div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <footer className="border-t border-zinc-300/90 px-5 py-10 text-sm text-zinc-600 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/ko" aria-label="OHMT 홈" className="flex h-6 items-center"><Logo className="h-6 w-auto" /></Link>
            <div className="flex flex-wrap gap-x-5 gap-y-2"><Link href="/ko/privacy-policy" className="hover:text-zinc-950">개인정보처리방침</Link><a href="mailto:vinus@vinus.co.kr" className="hover:text-zinc-950">vinus@vinus.co.kr</a></div>
          </div>
        </footer>
      </main>
    </MotionConfig>
  );
}
