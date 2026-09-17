"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { commonFaqs } from "@/data/faqs";
import { useI18n } from "./I18nProvider";

export function FAQ({ items = commonFaqs }: { items?: { q: string; a: string }[] }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(0);
  return <div className="border-t border-black/15">{items.map((item,index) => <div key={item.q} className="border-b border-black/15"><button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index} className="flex min-h-16 w-full items-center justify-between gap-5 py-4 text-left"><span className="display text-2xl md:text-3xl">{t(item.q)}</span><Plus size={18} className={`shrink-0 transition-transform ${open === index ? "rotate-45" : ""}`}/></button><div className={`grid transition-[grid-template-rows] duration-500 ${open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><div className="overflow-hidden"><p className="max-w-2xl pb-6 text-sm leading-7 text-black/60">{t(item.a)}</p></div></div></div>)}</div>;
}
