"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "@/components/LocalizedLink";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/data/experiences";
import { useI18n } from "./I18nProvider";

export function ExperienceShowcase() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  return (
    <div className="mt-12 lg:grid lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
      <div className="hidden border-t border-black/15 lg:block">
        {experiences.slice(0, 7).map((item, index) => (
          <button
            type="button"
            key={item.slug}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            className={`group flex w-full items-center justify-between border-b border-black/15 py-4 text-left transition-opacity ${active !== index ? "opacity-45 hover:opacity-100" : ""}`}
          >
            <span className="display text-[2.65rem] leading-none">
              {t(item.name)}
            </span>
            <span className="eyebrow text-cinnamon">0{index + 1}</span>
          </button>
        ))}
      </div>
      <div className="relative hidden min-h-[42rem] lg:block">
        <Image
          key={experiences[active].image}
          src={experiences[active].image}
          alt={t(experiences[active].name)}
          fill
          sizes="85vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-9 text-white">
          <p className="max-w-lg text-lg leading-7">
            {t(experiences[active].short)}
          </p>
          <p className="mt-3 text-xs uppercase tracking-[.14em] text-white/60">
            {experiences[active].locations.map((value) => t(value)).join(" · ")}
          </p>
          <Link
            href={`/experiences/${experiences[active].slug}`}
            className="link-arrow mt-6"
          >
            {t("Explore experience")} <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
      <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 [scrollbar-width:none] lg:hidden">
        {experiences.slice(0, 7).map((item, index) => (
          <Link
            href={`/experiences/${item.slug}`}
            key={item.slug}
            className="relative aspect-[4/5] w-[82vw] max-w-sm shrink-0 snap-center overflow-hidden"
          >
            <Image
              src={item.image}
              alt={t(item.name)}
              fill
              sizes="155vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <span className="eyebrow text-gold">0{index + 1}</span>
              <h3 className="display mt-2 text-5xl">{t(item.name)}</h3>
              <p className="mt-3 text-sm text-white/75">{t(item.short)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
