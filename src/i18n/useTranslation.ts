import { useCallback, useContext } from "react";
import TranslationContext from "./TranslationContext";

export type TranslateFn = (key: string, params?: Record<string, any>) => string;
type UseTranslationResult = { t: TranslateFn; locale: string };
type UseTranslationFn = () => UseTranslationResult;

const useTranslation: UseTranslationFn = () => {
  const { locale, messages } = useContext(TranslationContext);

  const handleTranslate = useCallback<TranslateFn>(
    (key, params) => {
      let translation = messages[key];
      if (!translation) {
        return key;
      }

      if (params && Object.entries(params).length) {
        Object.entries(params).forEach(([key, value]) => {
          translation = translation!.replace(`{{${key}}}`, String(value));
        });
      }

      return translation;
    },
    [messages],
  );

  return {
    t: handleTranslate,
    locale,
  };
};

export default useTranslation;
