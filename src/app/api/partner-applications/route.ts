import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createAdminClient } from "@/lib/supabase/admin";

interface PartnerApplicationBody {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  status?: unknown;
  experience?: unknown;
  channels?: unknown;
  industries?: unknown;
  profileUrl?: unknown;
  plan?: unknown;
  consent?: unknown;
  website?: unknown;
}

const statuses = ["프리랜서", "개인사업자", "재직 중", "기타"] as const;
const experiences = ["B2B 영업", "B2C 영업", "B2B / B2C 모두", "영업 경험 없음"] as const;
const channelOptions = ["지인 네트워크", "이메일", "카카오톡", "링크드인", "커뮤니티", "오프라인"] as const;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxBodyBytes = 16 * 1024;

let resend: Resend | null = null;

function getResend() {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

function requiredText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return null;
  const text = value.trim();
  return text && text.length <= maxLength ? text : null;
}

function optionalText(value: unknown, maxLength: number) {
  if (value === undefined || value === null || value === "") return "";
  if (typeof value !== "string") return null;
  const text = value.trim();
  return text.length <= maxLength ? text : null;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  const contentLength = request.headers.get("content-length");
  if (contentLength && Number(contentLength) > maxBodyBytes) {
    return NextResponse.json({ error: "입력 내용이 너무 깁니다." }, { status: 413 });
  }

  const body = (await request.json().catch(() => null)) as PartnerApplicationBody | null;
  if (!body) {
    return NextResponse.json({ error: "지원 정보를 확인해 주세요." }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ success: true });
  }

  const name = requiredText(body.name, 80);
  const email = requiredText(body.email, 254);
  const phone = requiredText(body.phone, 40);
  const status = requiredText(body.status, 40);
  const experience = requiredText(body.experience, 40);
  const industries = optionalText(body.industries, 300);
  const profileUrl = optionalText(body.profileUrl, 500);
  const plan = requiredText(body.plan, 2_000);
  const channels = Array.isArray(body.channels)
    ? body.channels.filter(
        (channel): channel is (typeof channelOptions)[number] =>
          typeof channel === "string" && channelOptions.includes(channel as (typeof channelOptions)[number]),
      )
    : [];

  if (
    !name ||
    !email ||
    !emailPattern.test(email) ||
    !phone ||
    !status ||
    !statuses.includes(status as (typeof statuses)[number]) ||
    !experience ||
    !experiences.includes(experience as (typeof experiences)[number]) ||
    channels.length === 0 ||
    industries === null ||
    profileUrl === null ||
    !plan ||
    body.consent !== true
  ) {
    return NextResponse.json({ error: "필수 지원 정보를 확인해 주세요." }, { status: 400 });
  }

  const applicationMessage = [
    "[영업 파트너 지원]",
    `현재 활동: ${status}`,
    `영업 경험: ${experience}`,
    `활동 채널: ${channels.join(", ")}`,
    `관심 업종 또는 네트워크: ${industries || "미입력"}`,
    `프로필 링크: ${profileUrl || "미입력"}`,
    "",
    "활동 계획",
    plan,
  ].join("\n");

  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("inquiries")
      .insert({
        lang: "ko",
        inquiry_type: "other",
        customer_name: name,
        customer_email: email,
        customer_phone: phone,
        company: status,
        role: experience,
        package_name: channels.join(", "),
        template_name: "영업 파트너 지원",
        message: applicationMessage,
      })
      .select("id")
      .single();

    if (error) {
      console.error("[Partner applications] insert error:", JSON.stringify(error));
      return NextResponse.json({ error: "지원서 저장에 실패했습니다." }, { status: 500 });
    }

    if (process.env.RESEND_API_KEY && process.env.NOTIFY_EMAIL) {
      const rows: [string, string][] = [
        ["이름", name],
        ["이메일", email],
        ["전화번호", phone],
        ["현재 활동", status],
        ["영업 경험", experience],
        ["활동 채널", channels.join(", ")],
        ["관심 업종", industries || "미입력"],
        ["프로필", profileUrl || "미입력"],
      ];
      const tableRows = rows
        .map(
          ([label, value]) =>
            `<tr><td style="width:120px;padding:8px 12px;color:#6b7280;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#18181b">${escapeHtml(value)}</td></tr>`,
        )
        .join("");

      const { error: emailError } = await getResend()!.emails.send({
        from: "Oh My Template <onboarding@resend.dev>",
        to: process.env.NOTIFY_EMAIL,
        subject: `[영업 파트너 지원] ${name}`,
        html: `
          <div style="max-width:640px;margin:0 auto;padding:32px 24px;font-family:Arial,sans-serif">
            <h1 style="margin:0 0 24px;font-size:22px;color:#18181b">새 영업 파트너 지원서</h1>
            <table style="width:100%;border-collapse:collapse;background:#f4f4f5;border-radius:12px;overflow:hidden"><tbody>${tableRows}</tbody></table>
            <div style="margin-top:24px">
              <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#71717a">활동 계획</p>
              <div style="padding:16px;border:1px solid #e4e4e7;border-radius:12px;white-space:pre-wrap;line-height:1.7;color:#18181b">${escapeHtml(plan)}</div>
            </div>
            <p style="margin:28px 0 0;font-size:12px;color:#a1a1aa">OHMT 영업 파트너 모집 폼에서 접수되었습니다.</p>
          </div>
        `,
      });

      if (emailError) {
        console.error("[Partner applications] email error:", JSON.stringify(emailError));
      }
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    console.error("[Partner applications] unexpected error:", error);
    return NextResponse.json({ error: "지원 접수 중 오류가 발생했습니다." }, { status: 500 });
  }
}
