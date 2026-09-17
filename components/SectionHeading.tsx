import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({ eyebrow, title, intro, action, align = "left" }: { eyebrow: string; title: ReactNode; intro?: string; action?: ReactNode; align?: "left" | "center" }) {
  return <Reveal className={`${align === "center" ? "mx-auto text-center" : ""}`}><p className="eyebrow text-cinnamon">{eyebrow}</p><div className={`mt-5 flex flex-col gap-6 ${align === "left" ? "md:flex-row md:items-end md:justify-between" : "items-center"}`}><div><h2 className="display max-w-4xl text-[clamp(3.4rem,7vw,7rem)] leading-[.84] text-balance">{title}</h2>{intro && <p className={`mt-6 max-w-xl text-[.95rem] leading-7 text-black/60 ${align === "center" ? "mx-auto" : ""}`}>{intro}</p>}</div>{action}</div></Reveal>;
}
