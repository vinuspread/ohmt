import { NextResponse } from "next/server";
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

  return NextResponse.json({ success: true, id: data.id });
}
