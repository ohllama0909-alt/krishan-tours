"use client";

import { useState } from "react";
import { Check, LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import type { InquiryStatus } from "@/lib/inquiries-db";

export function InquiryManager({ id, currentStatus, currentNote }: { id: string; currentStatus: InquiryStatus; currentNote: string }) {
  const router = useRouter();
  const [status, setStatus] = useState(currentStatus);
  const [adminNote, setAdminNote] = useState(currentNote);
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");

  async function save() {
    setState("saving");
    try {
      const response = await fetch(`/api/admin/inquiries/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status, adminNote }) });
      if (!response.ok) throw new Error();
      setState("saved");
      router.refresh();
      window.setTimeout(() => setState("idle"), 1800);
    } catch { setState("error"); }
  }

  return <div className="mt-6 border-t border-ink/10 pt-5">
    <div className="grid gap-4 md:grid-cols-[12rem_1fr_auto] md:items-end">
      <label className="grid gap-2 text-xs font-bold uppercase tracking-[.1em] text-ink/55">Status<select value={status} onChange={(event) => setStatus(event.target.value as InquiryStatus)} className="min-h-11 border border-ink/20 bg-white px-3 text-sm normal-case tracking-normal text-ink"><option value="new">New</option><option value="contacted">Contacted</option><option value="confirmed">Confirmed</option><option value="archived">Archived</option></select></label>
      <label className="grid gap-2 text-xs font-bold uppercase tracking-[.1em] text-ink/55">Private note<input value={adminNote} onChange={(event) => setAdminNote(event.target.value)} placeholder="e.g. Called on WhatsApp" className="min-h-11 border border-ink/20 bg-white px-3 text-sm normal-case tracking-normal text-ink" /></label>
      <button onClick={save} disabled={state === "saving"} className="btn-primary min-w-32">{state === "saving" ? <LoaderCircle className="animate-spin" size={15}/> : <Check size={15}/>} {state === "saved" ? "Saved" : state === "error" ? "Retry" : "Save"}</button>
    </div>
  </div>;
}
