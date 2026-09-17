"use client";
import Image from "next/image";
import { Check } from "lucide-react";
import type { TourDay } from "@/data/tours";
import { useI18n } from "./I18nProvider";

export function TourTimeline({ days }: { days: TourDay[] }) {
  const { t } = useI18n();
  return <div className="space-y-24 md:space-y-36">{days.map((item,index) => <article key={item.day} className="grid items-center gap-8 md:grid-cols-2 md:gap-16"><div className={`media-cover aspect-[4/5] ${index % 2 ? "md:order-2" : ""}`}><Image src={item.image} alt={`${t(item.place)} — ${t(item.title)}`} fill sizes="(max-width: 768px) 180vw, 90vw" className="object-cover"/><span className="absolute left-4 top-4 bg-paper px-3 py-2 text-[.62rem] font-bold uppercase tracking-[.13em] text-jungle">{t("Day")} {String(item.day).padStart(2,"0")}</span></div><div className={index % 2 ? "md:order-1 md:pl-[8%]" : "md:pr-[8%]"}><p className="eyebrow text-cinnamon">{t(item.place)}</p><h3 className="display mt-4 text-[clamp(3rem,6vw,5.8rem)] leading-[.88]">{t(item.title)}</h3><p className="mt-6 text-base leading-7 text-black/60">{t(item.text)}</p><div className="mt-7 border-t border-black/15 pt-5"><p className="eyebrow text-black/40">{t("The day includes")}</p><ul className="mt-4 grid gap-3">{item.experiences.map((experience) => <li key={experience} className="flex items-center gap-3 text-sm"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-tea/15 text-tea"><Check size={12}/></span>{t(experience)}</li>)}</ul></div></div></article>)}</div>;
}
