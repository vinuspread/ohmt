"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createTemplateRequest, getTemplateBySlug } from "@/lib/admin/store";

export async function submitTemplateRequestAction(formData: FormData) {
  const slug = String(formData.get("templateSlug") ?? "");
  const template = await getTemplateBySlug(slug);
  if (!template) {
    throw new Error("신청할 템플릿을 찾을 수 없습니다.");
  }

  await createTemplateRequest({
    templateId: template.id,
    applicantName: String(formData.get("applicantName") ?? ""),
    applicantContact: String(formData.get("applicantContact") ?? ""),
    companyName: String(formData.get("companyName") ?? ""),
    message: String(formData.get("message") ?? ""),
  });

  revalidatePath("/admin/requests");
  redirect(`/${slug}/apply?submitted=1`);
}
