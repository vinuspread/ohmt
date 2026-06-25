"use client";

import { useState } from "react";

const basePath = "/ko/templates/spa";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  if (sent) {
    return (
      <div className="rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-8 lg:p-12 text-center">
        <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center mx-auto text-white text-xl font-bold">✓</div>
        <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-[var(--color-text)]">감사합니다</h3>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">메시지가 전송되었습니다. 24시간 이내에 답변드리겠습니다.</p>
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
          <input id="email" type="email" required placeholder="your@email.com" className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-text)] focus:outline-none transition-colors" />
        </div>
      </div>
      <div>
        <label htmlFor="treatment" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2 block">관심 트리트먼트</label>
        <select id="treatment" className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-text)] focus:border-[var(--color-text)] focus:outline-none transition-colors">
          <option value="">트리트먼트 선택</option>
          <option value="laser-resurfacing">레이저 스킨 리서페이싱</option>
          <option value="chemical-peels">케미컬 필</option>
          <option value="hydrafacial">하이드라페이셜</option>
          <option value="microneedling">마이크로니들링</option>
          <option value="body-massage">딥 티슈 마사지</option>
          <option value="aromatherapy">아로마테라피</option>
          <option value="consultation">일반 상담</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2 block">메시지</label>
        <textarea id="message" rows={4} placeholder="목표나 질문을 알려주세요..." className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-text)] focus:outline-none transition-colors resize-none" />
      </div>
      <button type="submit" className="w-full rounded-full bg-[var(--color-primary)] text-[var(--color-text-contrast)] px-6 py-3.5 text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-150">보내기</button>
      <p className="text-xs text-[var(--color-text-muted)] text-center">24시간 이내에 답변드립니다. 개인정보는 안전하게 보관됩니다.</p>
    </form>
  );
}
