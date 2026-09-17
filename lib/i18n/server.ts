import { cookies, headers } from "next/headers";
import { createTranslator, getCatalog } from "./catalog";
import { defaultLocale, isLocale } from "./config";

export async function getI18n() {
  const value = (await headers()).get("x-krishantours-locale") || (await cookies()).get("krishantours_locale")?.value;
  const locale = isLocale(value) ? value : defaultLocale;
  return { locale, t: createTranslator(locale), catalog: getCatalog(locale) };
}
