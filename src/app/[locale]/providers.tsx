"use client";

import { PagesConfigProps } from "@/i18n/PagesConfigContext";
import PagesConfigProvider from "@/i18n/PagesConfigProvider";
import { IntlMessages } from "@/i18n/TranslationContext";
import TranslationProvider from "@/i18n/TranslationProvider";
import GlobalStyles from "@/themes/GlobalStyles";
import { PropsWithChildren } from "react";
import StyledComponentsRegistry from "./styled-components-registry";

type ProvidersProps = PropsWithChildren<{
  locale: string;
  messages: IntlMessages;
  navbarItems: PagesConfigProps;
}>;

export default function Providers({
  children,
  messages,
  locale,
  navbarItems,
}: ProvidersProps) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <TranslationProvider locale={locale} messages={messages}>
        <PagesConfigProvider navbarItems={navbarItems}>
          {children}
        </PagesConfigProvider>
      </TranslationProvider>
    </StyledComponentsRegistry>
  );
}
