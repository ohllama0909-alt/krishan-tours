import Image from "next/image";
import Link from "@/components/LocalizedLink";
import { ArrowLeft } from "lucide-react";
import { getI18n } from "@/lib/i18n/server";

export default async function NotFound(){const {t}=await getI18n();return <section className="relative flex min-h-screen items-end overflow-hidden bg-jungle pb-24 pt-36 text-white"><Image src="/images/rainforest.webp" alt={t("A quiet forest road in Sri Lanka")} fill priority sizes="(max-width: 767px) 1200px, 100vw" className="object-cover opacity-55"/><div className="absolute inset-0 bg-gradient-to-t from-jungle via-jungle/30 to-black/25"/><div className="shell relative"><p className="eyebrow text-gold">404 · {t("A wrong turn")}</p><h1 className="display mt-5 text-[clamp(5rem,14vw,13rem)] leading-[.7]">{t("This road")}<br/><em>{t("ends here.")}</em></h1><p className="mt-9 max-w-md text-base leading-7 text-white/65">{t("It happens on the best journeys. Let’s take the next turning back to the island.")}</p><Link href="/" className="btn-light mt-8"><ArrowLeft size={15}/> {t("Return home")}</Link></div></section>}
