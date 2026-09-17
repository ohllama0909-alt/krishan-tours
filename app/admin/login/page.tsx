import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { isAdmin } from "@/lib/admin-auth";

export const metadata: Metadata = { title: "Admin sign in", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  if (await isAdmin()) redirect("/admin");
  return <section className="admin-surface flex min-h-screen items-center bg-paper px-4 py-16">
    <div className="mx-auto max-w-md border border-ink/10 bg-ivory p-7 shadow-[0_24px_70px_rgba(23,56,43,.08)] md:p-10">
      <p className="eyebrow text-cinnamon">KrishanTours desk</p>
      <h1 className="display mt-4 text-5xl leading-none text-jungle">Welcome back.</h1>
      <p className="mt-4 text-sm leading-6 text-ink/65">Sign in to read trip requests and keep track of traveller conversations.</p>
      <AdminLoginForm />
    </div>
  </section>;
}
