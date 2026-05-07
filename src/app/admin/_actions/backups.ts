"use server";

import { revalidatePath } from "next/cache";

import { createBackupSnapshot, restoreBackupSnapshot } from "@/lib/admin/store";

export async function createBackupAction() {
  await createBackupSnapshot();
  revalidatePath("/admin");
}

export async function restoreBackupAction(formData: FormData) {
  const backupId = String(formData.get("backupId") ?? "");
  await restoreBackupSnapshot(backupId);

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/templates");
  revalidatePath("/admin/requests");
}
