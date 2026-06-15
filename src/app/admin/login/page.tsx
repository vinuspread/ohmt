"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../_components/ui/Button";
import { Input } from "../_components/ui/Input";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: { preventDefault(): void }) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (loginError) {
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
      return;
    }

    router.push("/admin/templates");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-50">
      <section className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <div>
          <h1 className="text-lg font-semibold text-zinc-900">Oh My Template</h1>
          <p className="text-sm text-zinc-500 mt-1">Admin</p>
        </div>
        <div className="mt-6 border-t border-zinc-200" />

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <Input
            label="이메일"
            type="email"
            placeholder="admin@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <Input
            label="비밀번호"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" variant="primary" className="w-full justify-center" loading={loading}>
            로그인
          </Button>
        </form>
      </section>
    </main>
  );
}
