import { Octokit } from "@octokit/rest";

export interface GitHubFileEntry {
  path: string;
  content: Buffer;
}

const textExtensions = [".ts", ".tsx", ".js", ".jsx", ".css", ".json", ".md", ".txt", ".svg"];

export async function pushFilesToGitHub(files: GitHubFileEntry[], commitMessage: string): Promise<string> {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;

  if (!token || !owner || !repo) {
    throw new Error("GitHub 환경변수가 설정되지 않았습니다.");
  }

  const octokit = new Octokit({ auth: token });

  const { data: ref } = await octokit.git.getRef({ owner, repo, ref: "heads/main" });
  const latestCommitSha = ref.object.sha;

  const { data: commit } = await octokit.git.getCommit({ owner, repo, commit_sha: latestCommitSha });
  const baseTreeSha = commit.tree.sha;

  const tree = await Promise.all(
    files.map(async (file) => {
      const isText = isTextFile(file.path);
      const { data: blob } = await octokit.git.createBlob({
        owner,
        repo,
        content: isText ? file.content.toString("utf-8") : file.content.toString("base64"),
        encoding: isText ? "utf-8" : "base64",
      });

      return {
        path: file.path,
        mode: "100644" as const,
        type: "blob" as const,
        sha: blob.sha,
      };
    })
  );

  const { data: newTree } = await octokit.git.createTree({
    owner,
    repo,
    base_tree: baseTreeSha,
    tree,
  });

  const { data: newCommit } = await octokit.git.createCommit({
    owner,
    repo,
    message: commitMessage,
    tree: newTree.sha,
    parents: [latestCommitSha],
  });

  await octokit.git.updateRef({
    owner,
    repo,
    ref: "heads/main",
    sha: newCommit.sha,
  });

  return newCommit.sha;
}

function isTextFile(path: string): boolean {
  return textExtensions.some((extension) => path.endsWith(extension));
}

export async function fetchFileFromGitHub(filePath: string): Promise<Buffer | null> {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;

  if (!token || !owner || !repo) {
    throw new Error("GitHub 환경변수가 설정되지 않았습니다.");
  }

  const octokit = new Octokit({ auth: token });

  try {
    const { data } = await octokit.repos.getContent({ owner, repo, path: filePath, ref: "heads/main" });
    if (Array.isArray(data) || data.type !== "file" || !data.content) return null;
    return Buffer.from(data.content, "base64");
  } catch (error) {
    if (isNotFoundError(error)) return null;
    throw error;
  }
}

function isNotFoundError(error: unknown): boolean {
  return typeof error === "object" && error !== null && "status" in error && (error as { status: number }).status === 404;
}
