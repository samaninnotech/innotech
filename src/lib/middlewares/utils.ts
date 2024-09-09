import { fallbackLocale, locales } from "@/i18n/settings";

const toLocale = (token: string) => {
  return token.length === 2 && locales.some((l) => l === token) ? token : null;
};

type ExtractLngFromPathResult = {
  locale: string;
  explicit: boolean;
  pathname: string;
};

type ExtractLngFromPathFn = (pathname: string) => ExtractLngFromPathResult;

export const extractLngFromPath: ExtractLngFromPathFn = (pathname) => {
  if (!pathname.startsWith("/")) {
    throw new Error("Invalid pathname");
  }

  const parts = pathname.substring(1).split("/");

  if (!parts.length || (parts.length === 1 && !parts[0])) {
    return {
      locale: fallbackLocale,
      explicit: false,
      pathname: "/",
    };
  }

  const localeToken = parts[0].toLowerCase();
  const locale = toLocale(localeToken);

  if (!locale) {
    return {
      locale: fallbackLocale,
      explicit: false,
      pathname: `/${parts.join("/")}`,
    };
  }

  return {
    locale,
    explicit: true,
    pathname: `/${parts.filter((_, i) => i > 0).join("/")}`,
  };
};

export const findBestMatchingLng = (acceptLangHeader: string) => {
  return fallbackLocale;
};
