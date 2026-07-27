"use client";

import { useState } from "react";
import TemplateSelect from '../TemplateSelect'

const basePath = "/ko/templates/OHMT026-spa";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  if (sent) {
    return (
      <div className="rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-8 lg:p-12 text-center">
        <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center mx-auto text-white text-xl font-bold">✓</div>
        <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-[var(--color-text)]">감사합니다</h3>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">문의가 접수되었습니다. 내용을 확인한 뒤 1일 이내에 답변드리겠습니다.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2 block">이름</label>
          <input id="name" required placeholder="이름을 입력하세요" className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-text)] focus:outline-none transition-colors" />
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2 block">이메일</label>
          <input id="email" type="email" required placeholder="email@example.com" className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-text)] focus:outline-none transition-colors" />
        </div>
      </div>
      <div>
        <label htmlFor="treatment" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2 block">관심 있는 케어</label>
        <TemplateSelect id="treatment" className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-text)] focus:border-[var(--color-text)] focus:outline-none transition-colors">
          <option value="">케어 선택</option>
          <option value="laser-resurfacing">레이저 피부 관리</option>
          <option value="chemical-peels">필링 케어</option>
          <option value="hydrafacial">수분 페이셜</option>
          <option value="microneedling">마이크로니들 케어</option>
          <option value="body-massage">딥 티슈 마사지</option>
          <option value="aromatherapy">아로마테라피</option>
          <option value="consultation">상담만 진행</option>
        </TemplateSelect>
      </div>
      <div>
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2 block">메시지</label>
        <textarea id="message" rows={4} placeholder="피부 고민이나 원하는 케어를 알려주세요." className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-text)] focus:outline-none transition-colors resize-none" />
      </div>
      <button type="submit" className="w-full rounded-full bg-[var(--color-primary)] text-[var(--color-text-contrast)] px-6 py-3.5 text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-150">문의 보내기</button>
      <p className="text-sm text-[var(--color-text-muted)] text-center">문의 내용은 상담을 위해서만 사용하며, 확인 후 빠르게 답변드립니다.</p>
    </form>
  );
}
