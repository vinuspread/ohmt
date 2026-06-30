"use client";
import { useState } from "react";

export function ReserveForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const isValid = name.trim().length > 0 && email.includes("@") && phone.trim().length > 5;

  return (
    <section>
      <h2 className="font-michroma text-[clamp(18px,2vw,28px)] text-[var(--text)] leading-[1.0] tracking-[-0.02em] mb-6">
        예약 정보
      </h2>
      <div className="space-y-4">
        {[
          { label: "성명",    type: "text",  value: name,  setter: setName,  placeholder: "홍길동" },
          { label: "이메일",  type: "email", value: email, setter: setEmail, placeholder: "hong@example.com" },
          { label: "전화번호", type: "tel",   value: phone, setter: setPhone, placeholder: "010-0000-0000" },
        ].map((f) => (
          <div key={f.label}>
            <label className="font-inter text-[11px] tracking-[0.08em] text-[var(--text-muted)] uppercase block mb-2">
              {f.label}
            </label>
            <input
              type={f.type}
              value={f.value}
              onChange={(e) => f.setter(e.target.value)}
              placeholder={f.placeholder}
              className="w-full bg-[var(--bg-alt)] border border-[var(--border)] rounded-lg px-5 py-3.5 font-inter text-[14px] text-[var(--text)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>
        ))}
        <div className="pt-2">
          <button
            disabled={!isValid}
            className={`w-full py-4 rounded-full font-inter font-medium text-[13px] tracking-[0.03em] transition-all duration-200 ${
              isValid
                ? "bg-[var(--accent)] text-[var(--text-on-light)] hover:bg-[var(--accent-dark)]"
                : "bg-[var(--border)] text-[var(--text-muted)] cursor-not-allowed"
            }`}
          >
            30만 원으로 예약하기 →
          </button>
          <p className="font-inter text-[14px] text-[var(--text-muted)] text-center mt-3">
            완전 환불 가능. 어떠한 의무도 없습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
