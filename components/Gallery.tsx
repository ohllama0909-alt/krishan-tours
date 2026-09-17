"use client";
import Image from "next/image";
import { useI18n } from "./I18nProvider";

export function Gallery({ images, title = "In the frame" }: { images: { src: string; alt: string }[]; title?: string }) {
  const { t } = useI18n();
  return <div><p className="eyebrow text-cinnamon">{t(title)}</p><div className="mt-7 grid auto-rows-[14rem] grid-cols-2 gap-3 md:auto-rows-[22rem] md:grid-cols-4">{images.map((image,index) => <div key={`${image.src}-${index}`} className={`media-cover ${index === 0 ? "col-span-2 row-span-2" : ""} ${index === 3 ? "col-span-2" : ""}`}><Image src={image.src} alt={t(image.alt)} fill sizes={index === 0 ? "(max-width: 768px) 170vw, 75vw" : "(max-width: 768px) 75vw, 38vw"} className="object-cover"/></div>)}</div></div>;
}
