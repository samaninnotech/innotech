"use client";

import Link from "@/i18n/Link";
import { mediaRules } from "@/themes/media-breakpoints";
import styled, { css } from "styled-components";

export const NavbarLanguagesStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  max-height: 2.5em;
  padding-left: 1rem;
`;

export const LanguagesListStyled = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 2.5em;

  ${mediaRules.lg} {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

type LanguageElementProps = { $selected: boolean };
export const LanguageElementStyled = styled(Link)<LanguageElementProps>`
  text-transform: uppercase;
  padding: 1rem 0rem;
  border-top: 1px solid gray;
  ${({ $selected }) =>
    $selected &&
    css`
      font-weight: bold;
    `}
  ${mediaRules.lg} {
    border-top: none;
    padding: 0.5rem 1rem;

  }
`;
