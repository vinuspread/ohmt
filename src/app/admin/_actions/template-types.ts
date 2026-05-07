"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createTemplateType, deactivateTemplateType, updateTemplateTypeLabel } from "@/lib/admin/store";

export async function createTemplateTypeAction(formData: FormData) {
  const label = String(formData.get("label") ?? "");
  await createTemplateType(label);
  revalidatePath("/admin/template-types");
}

export async function updateTemplateTypeAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const label = String(formData.get("label") ?? "");
  await updateTemplateTypeLabel(id, label);
  revalidatePath("/admin/template-types");
  revalidatePath("/admin/templates");
  redirect("/admin/template-types?toast=category_updated");
}

export async function deactivateTemplateTypeAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  await deactivateTemplateType(id);
  revalidatePath("/admin/template-types");
  revalidatePath("/admin/templates");
  revalidatePath("/");
}
