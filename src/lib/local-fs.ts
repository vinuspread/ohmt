import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);

export async function pullLocalRepoIfDev(): Promise<void> {
  if (process.env.VERCEL) return;

  try {
    await execFileAsync("git", ["pull", "--ff-only", "origin", "main"], { cwd: process.cwd() });
  } catch (error) {
    console.error("로컬 git pull 동기화 실패:", error);
  }
}
