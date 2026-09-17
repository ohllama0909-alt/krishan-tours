"use client";
import Image from "next/image";
import Link from "@/components/LocalizedLink";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import type { Destination } from "@/data/destinations";
import { useI18n } from "./I18nProvider";

export function DestinationCard({ destination, feature = false }: { destination: Destination; feature?: boolean }) {
  const { t } = useI18n();
  return <Link href={`/destinations/${destination.slug}`} className={`group block ${feature ? "md:col-span-2" : ""}`}>
    <div className={`media-cover ${feature ? "aspect-[4/3] md:aspect-[16/9]" : "aspect-[4/5]"}`}><Image src={destination.image} alt={`${t(destination.name)}, Sri Lanka`} fill sizes={feature ? "(max-width: 768px) 115vw, 70vw" : "(max-width: 768px) 180vw, 62vw"} className="object-cover" style={{ objectPosition: destination.imagePosition }}/><div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/><span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-paper/95 text-jungle opacity-0 transition-all duration-300 group-hover:opacity-100"><ArrowUpRight size={18}/></span><div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-7"><p className="eyebrow text-white/70">{t(destination.region)} · {t(destination.category)}</p><h3 className="display mt-2 text-4xl md:text-5xl">{t(destination.name)}</h3></div></div>
    <div className="flex items-start justify-between gap-5 pt-4"><p className="max-w-md text-sm leading-6 text-black/60">{t(destination.description)}</p><span className="hidden shrink-0 items-center gap-2 text-[.63rem] font-bold uppercase tracking-[.1em] text-black/50 lg:flex"><CalendarDays size={14}/>{t(destination.bestTime)}</span></div>
  </Link>;
}
