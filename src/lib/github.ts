import { Octokit } from "@octokit/rest";

export interface GitHubFileEntry {
  path: string;
  content: Buffer;
}

const textExtensions = [".ts", ".tsx", ".js", ".jsx", ".css", ".json", ".md", ".txt", ".svg"];

export async function pushFilesToGitHub(
  files: GitHubFileEntry[],
  commitMessage: string,
  replacePrefixes: string[] = []
): Promise<string> {
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

  const normalizedPrefixes = replacePrefixes.map((prefix) => prefix.replace(/\/+$/, ""));
  const incomingPaths = new Set(files.map((file) => file.path));
  const deletions: Array<{
    path: string;
    mode: "100644";
    type: "blob";
    sha: null;
  }> = [];

  if (normalizedPrefixes.length > 0) {
    const { data: existingTree } = await octokit.git.getTree({
      owner,
      repo,
      tree_sha: baseTreeSha,
      recursive: "true",
    });

    if (existingTree.truncated) {
      throw new Error("GitHub 트리 조회 결과가 잘려 안전하게 템플릿을 교체할 수 없습니다.");
    }

    for (const item of existingTree.tree) {
      if (item.type !== "blob" || !item.path) continue;
      const isInReplacementScope = normalizedPrefixes.some(
        (prefix) => item.path === prefix || item.path.startsWith(`${prefix}/`)
      );
      if (!isInReplacementScope || incomingPaths.has(item.path)) continue;

      deletions.push({
        path: item.path,
        mode: "100644",
        type: "blob",
        sha: null,
      });
    }
  }

  const additions = await Promise.all(
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
  const tree = [...deletions, ...additions];

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
