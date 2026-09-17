import { createHash, createHmac, randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { cookies } from "next/headers";
import { getAdminPasswordHash, setAdminPasswordHash } from "@/lib/inquiries-db";

export const adminCookieName = "krishantours_admin";
const sessionLength = 12 * 60 * 60;
const deriveKey = promisify(scrypt);

function secret() {
  const value = process.env.ADMIN_SESSION_SECRET;
  if (!value || value.length < 32) throw new Error("ADMIN_SESSION_SECRET must be configured");
  return value;
}

function signature(payload: string) {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

function credentialVersion() {
  const username = process.env.ADMIN_USERNAME || "krishan";
  const stored = getAdminPasswordHash(username) || process.env.ADMIN_PASSWORD_HASH || "";
  return createHash("sha256").update(stored).digest("base64url").slice(0, 22);
}

export function createAdminSession() {
  const payload = Buffer.from(JSON.stringify({ exp: Math.floor(Date.now() / 1000) + sessionLength, cv: credentialVersion() })).toString("base64url");
  return `${payload}.${signature(payload)}`;
}

export function verifyAdminSession(token?: string) {
  if (!token) return false;
  const [payload, suppliedSignature] = token.split(".");
  if (!payload || !suppliedSignature) return false;
  const expectedSignature = signature(payload);
  const expected = Buffer.from(expectedSignature);
  const supplied = Buffer.from(suppliedSignature);
  if (expected.length !== supplied.length || !timingSafeEqual(expected, supplied)) return false;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as { exp?: number; cv?: string };
    return typeof data.exp === "number" && data.exp > Math.floor(Date.now() / 1000) && data.cv === credentialVersion();
  } catch {
    return false;
  }
}

export async function isAdmin() {
  return verifyAdminSession((await cookies()).get(adminCookieName)?.value);
}

export async function verifyAdminPassword(username: string, password: string) {
  const expectedUsername = process.env.ADMIN_USERNAME || "krishan";
  const stored = getAdminPasswordHash(expectedUsername) || process.env.ADMIN_PASSWORD_HASH || "";
  const [salt, encodedHash] = stored.split(":");
  if (!salt || !encodedHash || username !== expectedUsername) return false;
  const supplied = await deriveKey(password, salt, 64) as Buffer;
  const expected = Buffer.from(encodedHash, "hex");
  return supplied.length === expected.length && timingSafeEqual(supplied, expected);
}

export async function changeAdminPassword(username: string, password: string) {
  const salt = randomBytes(16).toString("hex");
  const encodedHash = (await deriveKey(password, salt, 64) as Buffer).toString("hex");
  setAdminPasswordHash(username, `${salt}:${encodedHash}`);
}

export const adminSessionMaxAge = sessionLength;
