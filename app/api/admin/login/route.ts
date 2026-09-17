import { NextRequest, NextResponse } from "next/server";
import { adminCookieName, adminSessionMaxAge, createAdminSession, verifyAdminPassword } from "@/lib/admin-auth";
import { clientIp, createRateLimiter, readJsonObject } from "@/lib/request-security";

export const runtime = "nodejs";

const loginRateLimit = createRateLimiter(8, 15 * 60_000);

export async function POST(request: NextRequest) {
  const ip = clientIp(request);
  const rate = loginRateLimit.check(ip);
  if (rate.limited) return NextResponse.json({ ok: false, message: "Too many attempts. Try again in 15 minutes." }, { status: 429, headers: { "Retry-After": String(rate.retryAfter) } });

  let body: { username?: string; password?: string };
  try { body = await readJsonObject(request) as typeof body; } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  if (!(await verifyAdminPassword(body.username?.trim() || "", body.password || ""))) {
    return NextResponse.json({ ok: false, message: "Incorrect username or password." }, { status: 401 });
  }

  loginRateLimit.reset(ip);

  const response = NextResponse.json({ ok: true });
  response.cookies.set(adminCookieName, createAdminSession(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: adminSessionMaxAge,
  });
  return response;
}
