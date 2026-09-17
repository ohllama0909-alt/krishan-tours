"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";

export function AdminLoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: form.get("username"), password: form.get("password") }),
      });
      const result = await response.json() as { ok: boolean; message?: string };
      if (!response.ok) throw new Error(result.message || "Unable to sign in.");
      router.replace("/admin");
      router.refresh();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to sign in.");
      setBusy(false);
    }
  }

  return <form onSubmit={submit} className="mt-9 grid gap-5">
    <label className="grid gap-2 text-sm font-semibold">Username<input name="username" autoComplete="username" required className="min-h-12 border border-ink/20 bg-white px-4 outline-none focus:border-cinnamon" /></label>
    <label className="grid gap-2 text-sm font-semibold">Password<input name="password" type="password" autoComplete="current-password" required className="min-h-12 border border-ink/20 bg-white px-4 outline-none focus:border-cinnamon" /></label>
    {error && <p role="alert" className="text-sm text-red-800">{error}</p>}
    <button className="btn-primary mt-2 w-full" disabled={busy}>{busy ? "Signing in…" : "Open inquiry desk"}<ArrowRight size={16}/></button>
    <p className="flex items-center justify-center gap-2 text-xs text-ink/50"><LockKeyhole size={13}/> Private KrishanTours administration</p>
  </form>;
}
