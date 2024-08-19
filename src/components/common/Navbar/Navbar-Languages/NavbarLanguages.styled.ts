"use client";

import Link from "@/i18n/Link";
import styled, { css } from "styled-components";

export const NavbarLanguagesStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  max-height: 2.5em;
`;

export const LanguagesListStyled = styled.ul`
  display: flex;
`;

type LanguageElementProps = { $selected: boolean };
export const LanguageElementStyled = styled(Link)<LanguageElementProps>`
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  ${({ $selected }) =>
    $selected &&
    css`
      font-weight: bold;
    `}
`;
