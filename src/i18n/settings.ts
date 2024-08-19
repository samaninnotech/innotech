// export enum SupportedLocales {
//   Italian = "it",
//   German = "de",
//   French = "fr",
// }

// export const locales: SupportedLocales[] = Object.values(SupportedLocales);
// export const fallbackLocale = SupportedLocales.Italian;
// export const namespace = "public";

// export function isSupportedLocale(locale: string): locale is SupportedLocales {
//   return locales.indexOf(locale as SupportedLocales) > -1;
// }
export enum SupportedLocales {
  Italian = "it",
  English = "en", // Only include Italian and English
}

export const locales: SupportedLocales[] =  Object.values(SupportedLocales); // Only Italian and English
export const fallbackLocale = SupportedLocales.Italian; // Italian as the fallback locale
export const namespace = "public";

export function isSupportedLocale(locale: string): locale is SupportedLocales {
  return locales.indexOf(locale as SupportedLocales) > -1;
}
