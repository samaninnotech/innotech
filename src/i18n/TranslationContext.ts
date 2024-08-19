import { createContext } from "react";
import { fallbackLocale } from "./settings";

export type IntlMessages = Record<string, string>;

export type TranslationProps = {
  locale: string;
  messages: IntlMessages;
};

const TranslationContext = createContext<TranslationProps>({
  locale: fallbackLocale,
  messages: {},
});

export default TranslationContext;
