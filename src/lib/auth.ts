import type { AstroGlobal } from 'astro';
import { getUserById } from './db';
import type { User } from './db';

const SESSION_COOKIE = 'clc_session';
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export function setSessionCookie(response: Response | AstroGlobal, userId: string) {
  // We'll use simple base64 encoding for the session token
  const token = Buffer.from(JSON.stringify({ userId, ts: Date.now() })).toString('base64');
  const cookie = `${SESSION_COOKIE}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_MAX_AGE}`;
  return { token, cookie };
}

export function getSessionUser(request: Request): User | null {
  const cookieHeader = request.headers.get('cookie') || '';
  const cookies = parseCookies(cookieHeader);
  const token = cookies[SESSION_COOKIE];
  if (!token) return null;
  try {
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString('utf-8'));
    if (!decoded?.userId) return null;
    return getUserById(decoded.userId) || null;
  } catch {
    return null;
  }
}

export function clearSessionCookie(): string {
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}

export function parseCookies(cookieHeader: string): Record<string, string> {
  const result: Record<string, string> = {};
  cookieHeader.split(';').forEach(part => {
    const [key, ...vals] = part.trim().split('=');
    if (key) result[key.trim()] = decodeURIComponent(vals.join('=').trim());
  });
  return result;
}

// Parse cart from cookie
export interface CartItem {
  productId: string;
  qty: number;
}

export function getCart(request: Request): CartItem[] {
  const cookies = parseCookies(request.headers.get('cookie') || '');
  const cartStr = cookies['clc_cart'];
  if (!cartStr) return [];
  try {
    return JSON.parse(Buffer.from(cartStr, 'base64').toString('utf-8')) as CartItem[];
  } catch {
    return [];
  }
}

export function encodeCart(items: CartItem[]): string {
  return Buffer.from(JSON.stringify(items)).toString('base64');
}
