import { NextResponse } from "next/server";

import { createBackupSnapshot } from "@/lib/admin/store";

export async function GET(request: Request) {
  const cronHeader = request.headers.get("x-vercel-cron");
  const bearerToken = request.headers.get("authorization");
  const expected = process.env.BACKUP_CRON_SECRET;

  const validByHeader = cronHeader === "1";
  const validByToken = expected && bearerToken === `Bearer ${expected}`;

  if (!validByHeader && !validByToken) {
    return NextResponse.json({ ok: false, message: "unauthorized" }, { status: 401 });
  }

  const backup = await createBackupSnapshot();
  return NextResponse.json({ ok: true, backup: { id: backup.id, name: backup.name } });
}
