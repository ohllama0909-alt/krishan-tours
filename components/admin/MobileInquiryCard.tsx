import { CalendarDays, ChevronDown, Mail, MapPin, Phone, Users } from "lucide-react";
import type { InquiryRecord } from "@/lib/inquiries-db";
import { InquiryManager } from "@/components/admin/InquiryManager";

function readable(value: string) {
  return value ? value.replaceAll("-", " ") : "—";
}

export function MobileInquiryCard({ inquiry }: { inquiry: InquiryRecord }) {
  const received = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", timeZone: "Asia/Colombo" }).format(new Date(inquiry.receivedAt));

  return <details className="group border border-ink/10 bg-ivory shadow-[0_10px_32px_rgba(23,56,43,.05)] md:hidden">
    <summary className="flex min-h-24 cursor-pointer list-none items-center gap-3 p-4 marker:hidden">
      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${inquiry.status === "new" ? "bg-cinnamon" : inquiry.status === "confirmed" ? "bg-tea" : "bg-ink/25"}`}/>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2"><span className="display truncate text-[1.75rem] leading-none text-jungle">{inquiry.name}</span>{inquiry.type === "planner" && <span className="shrink-0 bg-jungle/8 px-2 py-1 text-[.52rem] font-bold uppercase tracking-[.1em] text-jungle">Trip plan</span>}</span>
        <span className="mt-2 block truncate text-xs text-ink/45">{received} · {inquiry.month || inquiry.timing || inquiry.email}</span>
      </span>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-ink/10 text-jungle"><ChevronDown size={16} className="transition-transform group-open:rotate-180"/></span>
    </summary>

    <div className="border-t border-ink/10 p-4">
      <div className="grid gap-3 border-b border-ink/10 pb-5 text-sm">
        <a href={`mailto:${inquiry.email}`} className="flex min-w-0 items-center gap-2"><Mail size={15} className="shrink-0 text-cinnamon"/><span className="truncate">{inquiry.email}</span></a>
        {inquiry.phone && <a href={`tel:${inquiry.phone}`} className="flex items-center gap-2"><Phone size={15} className="text-cinnamon"/>{inquiry.phone}</a>}
        <span className="flex items-center gap-2"><MapPin size={15} className="text-cinnamon"/>{readable(inquiry.country)}</span>
        <span className="flex items-center gap-2"><CalendarDays size={15} className="text-cinnamon"/>{readable(inquiry.month || inquiry.timing)}</span>
      </div>

      {inquiry.message && <div className="py-5"><p className="eyebrow text-ink/40">Traveller&apos;s message</p><p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-ink/75">{inquiry.message}</p></div>}

      {inquiry.type === "planner" && <div className="grid grid-cols-2 gap-x-4 gap-y-5 bg-white/70 p-4 text-sm">
        <div><p className="eyebrow text-ink/40">Duration</p><p className="mt-1 capitalize">{readable(inquiry.duration)}</p></div>
        <div><p className="eyebrow text-ink/40">Travellers</p><p className="mt-1 flex items-center gap-2 capitalize"><Users size={14}/>{readable(inquiry.group)}</p></div>
        <div><p className="eyebrow text-ink/40">Pace</p><p className="mt-1 capitalize">{readable(inquiry.pace)}</p></div>
        <div><p className="eyebrow text-ink/40">Stay</p><p className="mt-1 capitalize">{readable(inquiry.stay)}</p></div>
        <div className="col-span-2"><p className="eyebrow text-ink/40">Budget</p><p className="mt-1 capitalize">{readable(inquiry.budget)}</p></div>
        {inquiry.interests.length > 0 && <div className="col-span-2"><p className="eyebrow text-ink/40">Interests</p><p className="mt-1 capitalize">{inquiry.interests.map(readable).join(" · ")}</p></div>}
      </div>}
      <InquiryManager id={inquiry.id} currentStatus={inquiry.status} currentNote={inquiry.adminNote}/>
    </div>
  </details>;
}
