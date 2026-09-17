import { NextRequest, NextResponse } from "next/server";
import { changeAdminPassword, isAdmin, verifyAdminPassword } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!(await isAdmin())) return NextResponse.json({ ok: false, message: "Your session has expired. Please sign in again." }, { status: 401 });

  let body: { currentPassword?: string; newPassword?: string };
  try { body = await request.json(); } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const username = process.env.ADMIN_USERNAME || "krishan";
  if (!(await verifyAdminPassword(username, body.currentPassword || ""))) {
    return NextResponse.json({ ok: false, message: "The current password is incorrect." }, { status: 400 });
  }

  const password = body.newPassword || "";
  if (password.length < 12 || password.length > 128 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
    return NextResponse.json({ ok: false, message: "Use at least 12 characters with uppercase, lowercase and a number." }, { status: 400 });
  }
  if (password === body.currentPassword) {
    return NextResponse.json({ ok: false, message: "Choose a password you have not just used." }, { status: 400 });
  }

  await changeAdminPassword(username, password);
  return NextResponse.json({ ok: true });
}
