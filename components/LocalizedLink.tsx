"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { useI18n } from "./I18nProvider";
import { localizeHref } from "@/lib/i18n/config";

type Props = LinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & { children: ReactNode };

export default function LocalizedLink({ href, ...props }: Props) {
  const { locale } = useI18n();
  const localized = typeof href === "string" ? localizeHref(href, locale) : href;
  return <Link href={localized} {...props}/>;
}
