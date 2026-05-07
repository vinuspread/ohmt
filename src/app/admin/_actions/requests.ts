"use server";

import { revalidatePath } from "next/cache";

import { updateTemplateRequestStatus } from "@/lib/admin/store";
import type { RequestStatus } from "@/lib/admin/types";

export async function updateRequestStatusAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "RECEIVED") as RequestStatus;
  const memo = String(formData.get("adminMemo") ?? "");

  await updateTemplateRequestStatus(id, status, memo);
  revalidatePath("/admin/requests");
  revalidatePath(`/admin/requests/${id}`);
}
