import { SupportedLocales } from "@/i18n/settings";
import "server-only";

const dictionaries = {
  [SupportedLocales.Italian]: () =>
    import("../../dictionaries/it.json").then((module) => module.default),
  [SupportedLocales.English]: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: SupportedLocales) =>
  await dictionaries[locale]();
