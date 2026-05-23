import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "km"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  // Temporary: Disabling the auto-redirect until the user creates the [locale] folder
  // so the site doesn't 404 in the meantime.
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, public assets)
    "/((?!_next/static|_next/image|favicon.ico|logo.png|logo-transparent.png|hero.png).*)",
  ],
};
