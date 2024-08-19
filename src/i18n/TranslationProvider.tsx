import { FC, PropsWithChildren, useMemo } from "react";
import TranslationContext, { TranslationProps } from "./TranslationContext";

const TranslationProvider: FC<PropsWithChildren<TranslationProps>> = ({
  locale,
  messages,
  children,
}) => {
  const value: TranslationProps = useMemo(
    () => ({ locale, messages }),
    [locale, messages],
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;
