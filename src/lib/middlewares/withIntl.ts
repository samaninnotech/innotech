// import { fallbackLocale } from "@/i18n/settings";
// import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
// import { MiddlewareFactory, NextMiddleware } from "./types";
// import { extractLngFromPath } from "./utils";

// // acceptLanguage.languages(locales);

// const intlMiddleware = (
//   request: NextRequest,
//   _next: NextFetchEvent,
//   next: NextMiddleware,
// ) => {
//   const { locale, explicit, pathname } = extractLngFromPath(
//     request.nextUrl.pathname,
//   );

//   if (explicit && locale === fallbackLocale) {
//     return NextResponse.redirect(new URL(pathname, request.url));
//   }

//   if (!explicit) {
//     return NextResponse.rewrite(
//       new URL(`/${fallbackLocale}${pathname}`, request.url),
//     );
//   }

//   return next(request, _next);
// };

// export const withIntl: MiddlewareFactory =
//   (next: NextMiddleware) =>
//   async (request: NextRequest, _next: NextFetchEvent) => {
//     const isFile = request.nextUrl.pathname.includes(".");
//     const isApi = request.nextUrl.pathname.startsWith("/api/");
//     const isNext = request.nextUrl.pathname.startsWith("/_next/");

//     if (isFile || isApi || isNext) {
//       return next(request, _next);
//     }

//     return intlMiddleware(request, _next, next);
//   };
import { fallbackLocale } from "@/i18n/settings";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { MiddlewareFactory, NextMiddleware } from "./types";
import { extractLngFromPath } from "./utils";

// Middleware logic for internationalization
const intlMiddleware = (
  request: NextRequest,
  _next: NextFetchEvent,
  next: NextMiddleware,
) => {
  // Extract locale and pathname from the request path
  const { locale, explicit, pathname } = extractLngFromPath(
    request.nextUrl.pathname,
  );

  // Redirect to the correct locale path if the extracted locale is the fallback locale
  if (explicit && locale === fallbackLocale) {
    return NextResponse.redirect(new URL(pathname, request.url));
  }

  // Rewrite URL to include fallback locale if locale is not explicitly provided
  if (!explicit) {
    return NextResponse.rewrite(
      new URL(`/${fallbackLocale}${pathname}`, request.url),
    );
  }

  // Proceed to the next middleware or request handler
  return next(request, _next);
};

// Middleware factory to conditionally apply intlMiddleware
export const withIntl: MiddlewareFactory =
  (next: NextMiddleware) =>
  async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;
    const isFile = pathname.includes(".");
    const isApi = pathname.startsWith("/api/");
    const isNext = pathname.startsWith("/_next/");

    // Skip middleware for static files, API routes, and Next.js internal routes
    if (isFile || isApi || isNext) {
      return next(request, _next);
    }

    // Apply the internationalization middleware
    return intlMiddleware(request, _next, next);
  };
