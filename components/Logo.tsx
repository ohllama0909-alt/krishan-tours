import Link from "@/components/LocalizedLink";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="Krishan Tours Sri Lanka" className={`group inline-flex items-center gap-2.5 ${light ? "text-white" : "text-jungle"}`}>
      <svg aria-hidden="true" viewBox="0 0 40 40" className="h-9 w-9" fill="none">
        <path d="M20 3.5C12.8 8.8 8.4 15.5 8.4 23.2c0 7.2 4.7 12 11.6 13.3 6.9-1.3 11.6-6.1 11.6-13.3C31.6 15.5 27.2 8.8 20 3.5Z" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M20 8.5v22M14 18c3.8.2 6-2.3 6-6M26 22c-3.8.2-6-2.3-6-6M14.2 27.2c2.9-.2 4.9 1.3 5.8 3.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
      <span className="leading-none">
        <span className="display block text-[1.35rem] tracking-[-.04em]">Krishan Tours</span>
        <span className="mt-1 block text-[.52rem] font-bold uppercase tracking-[.27em] opacity-70">Sri Lanka</span>
      </span>
    </Link>
  );
}
