"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "@/components/LocalizedLink";
import { ArrowRight } from "lucide-react";
import { destinations, type Destination } from "@/data/destinations";
import { useI18n } from "./I18nProvider";

// The outline and markers use the same WGS84-derived Natural Earth projection.
// Keeping these exact generation values here prevents visual pin nudging and
// guarantees that coastal locations remain inside the real boundary.
const projection = {
  minLongitude: 79.655772,
  maxLatitude: 9.829576,
  longitudeScale: 0.9905653835974711,
  scale: 271.06931531665293,
  padding: 14,
  width: 628,
  height: 1086.7541877443414,
};

function mapPoint([latitude, longitude]: Destination["coordinates"]) {
  const x = projection.padding +
    (longitude - projection.minLongitude) * projection.longitudeScale * projection.scale;
  const y = projection.padding +
    (projection.maxLatitude - latitude) * projection.scale;
  return { x, y };
}

export function SriLankaMap() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const item = destinations[active];

  return (
    <div className="grid overflow-hidden bg-jungle text-white lg:grid-cols-[1.05fr_.95fr]">
      <div className="relative flex flex-col overflow-hidden p-5 py-8 sm:p-7 md:min-h-[45rem] md:p-12">
        <div className="relative z-10">
          <p className="eyebrow text-gold">{t("Choose a real place")}</p>
          <p className="display mt-3 max-w-sm text-4xl md:text-5xl">
            {t("Small island.")}<br />{t("Beautifully different roads.")}
          </p>
        </div>

        <div
          className="relative mx-auto mt-6 w-full max-w-[22rem] shrink-0"
          role="group"
          aria-label={t("Interactive map of Sri Lanka with destination markers")}
        >
          <svg viewBox={`0 0 ${projection.width} ${projection.height}`} className="block h-auto w-full overflow-visible drop-shadow-[0_20px_35px_rgba(0,0,0,.16)]">
            <image href="/images/sri-lanka-map-natural-earth.svg" x="0" y="0" width={projection.width} height={projection.height} preserveAspectRatio="none"/>
            {destinations.map((destination, index) => {
              const isActive = active === index;
              const { x, y } = mapPoint(destination.coordinates);
              const labelWidth = Math.max(112, destination.name.length * 13 + 34);
              const labelAbove = y > projection.height - 145;
              const labelY = labelAbove ? -62 : 34;
              const labelLeft = Math.max(8, Math.min(x - labelWidth / 2, projection.width - labelWidth - 8));
              return <g key={destination.slug} transform={`translate(${x} ${y})`} role="button" tabIndex={0} aria-label={`${t("Show")} ${t(destination.name)}, ${t(destination.region)}`} aria-pressed={isActive} className="cursor-pointer outline-none" onClick={() => setActive(index)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setActive(index); } }}>
                <circle r="38" fill="transparent"/>
                {isActive && <circle r="22" fill="none" stroke="#d6aa4b" strokeWidth="8" opacity=".38"/>}
                <circle r={isActive ? 13 : 10} fill={isActive ? "#a95638" : "#fbf8f2"} stroke={isActive ? "#d6aa4b" : "#17382b"} strokeWidth="4" className="transition-all"/>
                {isActive && <g transform={`translate(${labelLeft - x} ${labelY})`}>
                  <rect width={labelWidth} height="44" y={labelAbove ? -44 : 0} fill="#17382b"/>
                  <text x={labelWidth / 2} y={labelAbove ? -17 : 28} textAnchor="middle" fill="#fff" fontSize="18" fontWeight="700" letterSpacing="2.4">{t(destination.name).toUpperCase()}</text>
                </g>}
              </g>;
            })}
          </svg>
          <div className="sr-only" aria-live="polite">{t("Selected destination:")} {t(item.name)}, {t(item.region)}</div>
        </div>

        <a
          href="https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-0-countries/"
          target="_blank"
          rel="noreferrer"
          className="relative z-10 self-start text-[.6rem] uppercase tracking-[.13em] text-white/55 transition hover:text-white"
        >
          {t("Public-domain map data")} · Natural Earth
        </a>
      </div>

      <div className="flex flex-col bg-paper text-ink" aria-live="polite">
        <div className="media-cover aspect-[16/10] lg:aspect-auto lg:min-h-[54%]">
          <Image
            key={item.image}
            src={item.image}
            alt={`${t(item.name)}, Sri Lanka`}
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
            style={{ objectPosition: item.imagePosition }}
          />
        </div>
        <div className="flex flex-1 flex-col justify-between p-7 md:p-10">
          <div>
            <p className="eyebrow text-cinnamon">
              {t(item.region)} · {t(item.category)}
            </p>
            <h3 className="display mt-3 text-6xl">{t(item.name)}</h3>
            <p className="mt-4 max-w-lg text-sm leading-6 text-black/60">
              {t(item.description)}
            </p>
          </div>
          <div className="mt-8 flex items-end justify-between gap-5">
            <span className="text-xs uppercase tracking-[.1em] text-black/65">
              {t("Best")} {t(item.bestTime)}
            </span>
            <Link href={`/destinations/${item.slug}`} className="link-arrow">
              {t("Explore")} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
