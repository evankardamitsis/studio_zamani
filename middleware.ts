import { NextRequest, NextResponse } from "next/server";

const PREVIEW_SECRET = process.env.PREVIEW_SECRET ?? "zamani-preview";
const COOKIE_NAME = "sz_preview";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow: coming soon page, preview route, static assets, fonts, images
  if (
    pathname.startsWith("/coming-soon") ||
    pathname.startsWith("/preview") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/fonts") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/studio-zamani-logo") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Check for bypass cookie
  const cookie = request.cookies.get(COOKIE_NAME);
  if (cookie?.value === PREVIEW_SECRET) {
    return NextResponse.next();
  }

  // Redirect everything else to coming soon
  return NextResponse.redirect(new URL("/coming-soon", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
