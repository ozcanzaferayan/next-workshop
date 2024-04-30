import { auth as authMiddleware } from "@/auth";
import { i18nRouter } from "next-i18n-router";
import { NextRequest } from "next/server";
import i18nConfig from "./i18nConfig";

export function middleware(request: NextRequest) {
  // Define a regex pattern for private URLs
  const excludePattern =
    "^(/(" + i18nConfig.locales.join("|") + "))?/admin/?.*?$";
  const publicPathnameRegex = RegExp(excludePattern, "i");
  const isPublicPage = !publicPathnameRegex.test(request.nextUrl.pathname);

  if (isPublicPage) {
    // Apply Next-Intl middleware for public pages
    console.log("IFFF");
    return i18nRouter(request, i18nConfig);
  } else {
    console.log("ELSEEE");
    // Apply Next-Auth middleware for private pages
    return (authMiddleware as any)(request);
  }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
