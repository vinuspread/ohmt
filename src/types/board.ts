export type BoardLang = "en" | "ko";

export interface BoardPost {
  id: string;
  lang: BoardLang;
  title: string;
  author_name: string;
  contact: string;
  content: string;
  password_hash: string;
  is_secret: boolean;
  answer: string | null;
  answered_at: string | null;
  created_at: string;
  updated_at: string;
}

/** Admin-facing view: excludes password_hash, which never needs to reach the client. */
export type BoardPostAdmin = Omit<BoardPost, "password_hash">;
