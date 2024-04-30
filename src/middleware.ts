import { NextRequest, NextResponse } from "next/server";

let locales = ["en-US", "tr-TR"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  const locale = request.cookies.get("locale")?.value || locales[0];
  console.log("Locale", locale);
  if (locales.includes(locale)) return locale;

  // Fallback to the first locale
  return locales[0];
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
