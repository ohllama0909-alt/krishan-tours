import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { TourFilters } from "@/components/TourFilters";
import { Suspense } from "react";
import { getI18n } from "@/lib/i18n/server";
import { localizedMetadata } from "@/lib/i18n/metadata";

export const generateMetadata=():Promise<Metadata>=>localizedMetadata({title:"Private Sri Lanka Tours & Itineraries",description:"Explore private Sri Lanka itineraries from 6 to 14 days. Every journey is tailored around your dates, pace and travel style.",path:"/tours"});

export default async function ToursPage(){const {t}=await getI18n();return <><PageHero eyebrow={t("Private journeys")} title={t("Routes with room to wander.")} intro={t("Six considered ways across Sri Lanka. Keep what fits, change what doesn’t and make the route entirely yours.")} image="/images/nine-arches.webp"/><section className="py-24 md:py-36"><div className="shell"><SectionHeading eyebrow={t("Curated itineraries")} title={<>{t("Choose a shape.")}<br/><em>{t("We’ll make it yours.")}</em></>} intro={t("All journeys include a private vehicle and on-island support. Hotels, pace and activities are tailored before you book.")}/><div className="mt-14"><Suspense><TourFilters/></Suspense></div></div></section></>}
