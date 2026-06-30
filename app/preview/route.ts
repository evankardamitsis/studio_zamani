import { NextRequest, NextResponse } from "next/server";

const PREVIEW_SECRET = process.env.PREVIEW_SECRET ?? "zamani-preview";
const COOKIE_NAME = "sz_preview";

export function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key");

  if (key !== PREVIEW_SECRET) {
    return NextResponse.redirect(new URL("/coming-soon", request.url));
  }

  const response = NextResponse.redirect(new URL("/", request.url));
  response.cookies.set(COOKIE_NAME, PREVIEW_SECRET, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
  return response;
}
