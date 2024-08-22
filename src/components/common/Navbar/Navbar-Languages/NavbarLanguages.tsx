"use client";

import { locales } from "@/i18n/settings";
import useTranslation from "@/i18n/useTranslation";
import Image from "next/image";
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
          <LanguageElement language={l} key={l.language} />
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

  // Choose the correct flag image based on the locale
  const flagSrc = locale === "it" ? "/italy.png" : "/england.svg"; // Assuming the flag images are in the public/flags directory

  return (
    <LanguageElementStyled
      href={href}
      $selected={language.selected}
      locale={language.language}
    >
      <Image src={flagSrc} alt={`${locale} flag`} width={30} height={20} />
    </LanguageElementStyled>
  );
};

export default NavbarLanguages;
