"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "@/components/LocalizedLink";
import { ArrowRight, ChevronDown, Pause, Play } from "lucide-react";
import { useI18n } from "./I18nProvider";

export function VideoHero() {
  const { t } = useI18n();
  const video = useRef<HTMLVideoElement>(null); const [useVideo,setUseVideo] = useState(false); const [playing,setPlaying] = useState(true);
  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const allowed = !window.matchMedia("(prefers-reduced-motion: reduce)").matches && !connection?.saveData && window.innerWidth >= 768;
    queueMicrotask(() => setUseVideo(allowed));
  }, []);
  const toggle = () => { if (!video.current) return; if (video.current.paused) { video.current.play(); setPlaying(true); } else { video.current.pause(); setPlaying(false); } };
  return <section className="grain relative flex min-h-[100svh] items-end overflow-hidden bg-jungle text-white">
    <Image src="/images/coast.webp" alt={t("Palm-lined Sri Lankan coast seen from above")} fill priority sizes="(max-width: 767px) 1200px, 100vw" className="object-cover"/>
    {useVideo && <video ref={video} className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/images/coast.webp"><source src="/video/sri-lanka-coast.mp4" type="video/mp4"/></video>}
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,19,14,.64),rgba(8,19,14,.08)_65%),linear-gradient(0deg,rgba(8,19,14,.58),transparent_55%)]"/>
    <div className="shell relative z-10 pb-16 pt-36 md:pb-20">
      <p className="eyebrow text-gold">{t("Krishan Tours Sri Lanka")}</p>
      <h1 className="display mt-5 max-w-[62rem] text-[clamp(4.2rem,10.5vw,9.8rem)] leading-[.78] tracking-[-.05em] text-balance">{t("Private Tours &")}<br/><em>{t("Driver in Sri Lanka")}</em></h1>
      <div className="mt-8 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"><div><p className="max-w-xl text-base leading-7 text-white/85 md:text-lg">{t("Krishan Tours Sri Lanka is a Panadura-based private tour and driver service offering custom trips throughout Sri Lanka.")}</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/plan-your-trip" className="btn-light">{t("Plan my journey")} <ArrowRight size={16}/></Link><Link href="/sri-lanka-private-driver" className="btn-outline">{t("Private Driver Guide")}</Link></div></div><div className="flex items-center gap-5"><a href="#many-worlds" className="flex items-center gap-2 text-[.62rem] font-bold uppercase tracking-[.15em] text-white/65">{t("Scroll to explore")} <ChevronDown size={15}/></a>{useVideo&&<button type="button" onClick={toggle} aria-label={t(playing?"Pause background video":"Play background video")} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40">{playing?<Pause size={14}/>:<Play size={14}/>}</button>}</div></div>
    </div>
  </section>;
}
