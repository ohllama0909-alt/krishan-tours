"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { Catalog } from "@/lib/i18n/catalog";
import type { Locale } from "@/lib/i18n/config";

type Translator = (source: string, values?: Record<string, string | number>) => string;
type I18nValue = { locale: Locale; t: Translator };
const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ locale, catalog, children }: { locale: Locale; catalog: Catalog; children: ReactNode }) {
  const value = useMemo(() => ({ locale, t: ((source, values) => {
    let translated = catalog[source] || source;
    if (values) for (const [key, item] of Object.entries(values)) translated = translated.replaceAll(`{${key}}`, String(item));
    return translated;
  }) satisfies Translator }), [locale, catalog]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside I18nProvider");
  return value;
}
