import { locales } from "@/i18n/settings";

export const iubendaSiteId = process.env.IUBENDA_SITE_ID || "";

export const iubendaPolicyIds = locales.map((locale) => {
  const propName = `IUBENDA_POLICY_ID_${locale.toLocaleUpperCase()}`;
  return { locale, policyId: process.env[propName] };
});
