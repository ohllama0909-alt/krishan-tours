import { NextRequest, NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { InquiryStatus, updateInquiry } from "@/lib/inquiries-db";

export const runtime = "nodejs";

const statuses: InquiryStatus[] = ["new", "contacted", "confirmed", "archived"];

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ ok: false }, { status: 401 });
  let body: { status?: string; adminNote?: string };
  try { body = await request.json(); } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }
  if (!statuses.includes(body.status as InquiryStatus)) {
    return NextResponse.json({ ok: false, message: "Invalid status." }, { status: 400 });
  }
  const { id } = await params;
  const result = updateInquiry(id, body.status as InquiryStatus, typeof body.adminNote === "string" ? body.adminNote : "");
  if (result.changes === 0) return NextResponse.json({ ok: false, message: "Inquiry not found." }, { status: 404 });
  return NextResponse.json({ ok: true });
}
