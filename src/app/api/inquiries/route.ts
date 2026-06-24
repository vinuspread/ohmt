import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createAdminClient } from "@/lib/supabase/admin";
import type { InquiryType, TemplateLang } from "@/types/template";

interface InquiryPostBody {
  lang?: unknown;
  inquiry_type?: unknown;
  customer_name?: unknown;
  customer_email?: unknown;
  customer_phone?: unknown;
  company?: unknown;
  role?: unknown;
  package_name?: unknown;
  template_name?: unknown;
  message?: unknown;
  website?: unknown;
}

const resend = new Resend(process.env.RESEND_API_KEY);

const TYPE_LABELS: Record<InquiryType, string> = {
  template: "템플릿 기반 제작",
  custom: "맞춤 웹사이트 제작",
  other: "기타 문의",
};

const langs: TemplateLang[] = ["ko", "en"];
const inquiryTypes: InquiryType[] = ["template", "custom", "other"];
const maxBodyBytes = 20_000;

const textLimits = {
  customer_name: 80,
  customer_email: 254,
  customer_phone: 40,
  company: 120,
  role: 80,
  package_name: 120,
  template_name: 120,
  message: 4_000,
};

function isTemplateLang(value: unknown): value is TemplateLang {
  return typeof value === "string" && langs.includes(value as TemplateLang);
}

function isInquiryType(value: unknown): value is InquiryType {
  return typeof value === "string" && inquiryTypes.includes(value as InquiryType);
}

function isTooLarge(request: Request) {
  const contentLength = request.headers.get("content-length");
  return contentLength !== null && Number(contentLength) > maxBodyBytes;
}

function toOptionalText(value: unknown, maxLength: number) {
  if (value === undefined || value === null || value === "") return { value: null, valid: true };
  if (typeof value !== "string") return { value: null, valid: false };

  const trimmed = value.trim();
  if (!trimmed) return { value: null, valid: true };
  return { value: trimmed, valid: trimmed.length <= maxLength };
}

function toRequiredText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return { value: "", valid: false };

  const trimmed = value.trim();
  return { value: trimmed, valid: Boolean(trimmed) && trimmed.length <= maxLength };
}

export async function POST(request: Request) {
  if (isTooLarge(request)) {
    return NextResponse.json({ error: "문의 입력값이 너무 깁니다." }, { status: 413 });
  }

  const body = (await request.json().catch(() => null)) as InquiryPostBody | null;

  if (!body || !isTemplateLang(body.lang) || !isInquiryType(body.inquiry_type)) {
    return NextResponse.json({ error: "문의 입력값이 올바르지 않습니다." }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ success: true });
  }

  const customerName = toRequiredText(body.customer_name, textLimits.customer_name);
  const customerEmail = toRequiredText(body.customer_email, textLimits.customer_email);
  const customerPhone = toOptionalText(body.customer_phone, textLimits.customer_phone);
  const company = toOptionalText(body.company, textLimits.company);
  const role = toOptionalText(body.role, textLimits.role);
  const packageName = toOptionalText(body.package_name, textLimits.package_name);
  const templateName = toOptionalText(body.template_name, textLimits.template_name);
  const message = toRequiredText(body.message, textLimits.message);

  if (
    !customerName.valid ||
    !customerEmail.valid ||
    !customerEmail.value.includes("@") ||
    !customerPhone.valid ||
    !company.valid ||
    !role.valid ||
    !packageName.valid ||
    !templateName.valid ||
    !message.valid
  ) {
    return NextResponse.json({ error: "필수 문의 정보를 확인해주세요." }, { status: 400 });
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("inquiries")
    .insert({
      lang: body.lang,
      inquiry_type: body.inquiry_type,
      customer_name: customerName.value,
      customer_email: customerEmail.value,
      customer_phone: customerPhone.value,
      company: company.value,
      role: role.value,
      package_name: packageName.value,
      template_name: templateName.value,
      message: message.value,
    })
    .select("id")
    .single();

  if (error) return NextResponse.json({ error: "문의 저장에 실패했습니다." }, { status: 500 });

  // 이메일 알림 (실패해도 문의 저장은 성공으로 처리)
  if (process.env.RESEND_API_KEY && process.env.NOTIFY_EMAIL) {
    const rowData: [string, string][] = [
      ["유형", TYPE_LABELS[body.inquiry_type as InquiryType]],
      ["이름", customerName.value],
      ["이메일", customerEmail.value],
      ...(customerPhone.value ? [["전화번호", customerPhone.value] as [string, string]] : []),
      ...(company.value ? [["회사", company.value] as [string, string]] : []),
      ...(role.value ? [["직책", role.value] as [string, string]] : []),
      ...(packageName.value ? [["예산 및 패키지", packageName.value] as [string, string]] : []),
      ...(templateName.value ? [["관심 템플릿", templateName.value] as [string, string]] : []),
    ];
    const rows = rowData
      .map(([label, value]) => `<tr><td style="padding:6px 12px;color:#6b7280;width:120px;vertical-align:top">${label}</td><td style="padding:6px 12px;color:#111827">${value}</td></tr>`)
      .join("");

    await resend.emails.send({
      from: "Oh My Template <onboarding@resend.dev>",
      to: process.env.NOTIFY_EMAIL,
      subject: `[문의] ${TYPE_LABELS[body.inquiry_type as InquiryType]} - ${customerName.value}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px 24px">
          <h2 style="font-size:18px;font-weight:700;color:#111827;margin:0 0 24px">새 문의가 접수됐습니다</h2>
          <table style="width:100%;border-collapse:collapse;background:#f9fafb;border-radius:8px;overflow:hidden">
            <tbody>${rows}</tbody>
          </table>
          <div style="margin-top:24px">
            <p style="font-size:12px;color:#6b7280;margin:0 0 8px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em">문의 내용</p>
            <div style="background:#f9fafb;border-radius:8px;padding:16px;font-size:14px;color:#111827;line-height:1.6;white-space:pre-wrap">${message.value}</div>
          </div>
          <div style="margin-top:32px;padding-top:24px;border-top:1px solid #e5e7eb;display:flex;align-items:center;justify-content:space-between">
            <p style="font-size:12px;color:#9ca3af;margin:0">Oh My Template · contact@ohmytemplate.com</p>
            <a href="https://ohmytemplate.com/admin/orders" style="font-size:12px;font-weight:600;color:#111827;text-decoration:none;background:#f3f4f6;padding:6px 14px;border-radius:6px">관리자 문의 보기 →</a>
          </div>
        </div>
      `,
    }).catch(() => {});
  }

  return NextResponse.json({ success: true, id: data.id });
}
