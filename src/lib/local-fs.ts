import { existsSync } from "fs";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import type { GitHubFileEntry } from "./github";
import { fetchFileFromGitHub } from "./github";

export async function writeFilesLocally(files: GitHubFileEntry[]): Promise<void> {
  for (const file of files) {
    const fullPath = path.join(process.cwd(), file.path);
    await mkdir(path.dirname(fullPath), { recursive: true });
    await writeFile(fullPath, file.content);
  }
}

export async function ensureLocalPublicFile(publicRelativePath: string): Promise<boolean> {
  if (process.env.VERCEL) return true;

  const fullPath = path.join(process.cwd(), "public", publicRelativePath);
  if (existsSync(fullPath)) return true;

  const content = await fetchFileFromGitHub(path.posix.join("public", publicRelativePath));
  if (!content) return false;

  await mkdir(path.dirname(fullPath), { recursive: true });
  await writeFile(fullPath, content);
  return true;
}
