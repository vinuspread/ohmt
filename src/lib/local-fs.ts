import { mkdir, writeFile } from "fs/promises";
import path from "path";
import type { GitHubFileEntry } from "./github";

export async function writeFilesLocally(files: GitHubFileEntry[]): Promise<void> {
  for (const file of files) {
    const fullPath = path.join(process.cwd(), file.path);
    await mkdir(path.dirname(fullPath), { recursive: true });
    await writeFile(fullPath, file.content);
  }
}
