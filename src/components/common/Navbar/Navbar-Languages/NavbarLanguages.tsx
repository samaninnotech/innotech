"use client";

import { locales } from "@/i18n/settings";
import useTranslation from "@/i18n/useTranslation";
import { FC } from "react";
import { SlugMapping } from "../types";
import {
  LanguageElementStyled,
  LanguagesListStyled,
  NavbarLanguagesStyled,
} from "./NavbarLanguages.styled";

export type LanguageItem = {
  label: string;
  language: string;
  selected: boolean;
  slug: string;
};

type NavbarLanguagesProps = { slugMapping: SlugMapping };
const NavbarLanguages: FC<NavbarLanguagesProps> = ({ slugMapping }) => {
  const { locale: currentLocale } = useTranslation();
  const languages: LanguageItem[] = locales.map((l) => ({
    label: l.toUpperCase(),
    language: l,
    selected: l === currentLocale,
    slug: slugMapping && slugMapping[l] ? (slugMapping[l] as string) : "",
  }));

  return (
    <NavbarLanguagesStyled>
      <LanguagesListStyled>
        {languages.map((l) => (
          <LanguageElement language={l} key={l.language}></LanguageElement>
        ))}
      </LanguagesListStyled>
    </NavbarLanguagesStyled>
  );
};

type LanguageElementProps = { language: LanguageItem };
const LanguageElement: FC<LanguageElementProps> = ({ language }) => {
  const { language: locale, slug } = language;
  let href = `/${locale}`;

  if (slug) {
    href += `/${slug}`;
  }

  return (
    <LanguageElementStyled
      href={href}
      $selected={language.selected}
      locale={language.language}
    >
      {language.label}
    </LanguageElementStyled>
  );
};

export default NavbarLanguages;
