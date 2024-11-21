"use client";

import Link from "@/i18n/Link";
import { mediaRules } from "@/themes/media-breakpoints";
import styled, { css } from "styled-components";

export const NavbarLanguagesStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-left: 1rem;
  ${mediaRules.lg} {
    width: 20%;
    height: 100%;
  }
`;

export const LanguagesListStyled = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 2.7em;

  ${mediaRules.lg} {
    flex-direction: row;
    justify-content: space-around;
    height: 3.5rem;
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
      img {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
      }
    `}
  ${mediaRules.lg} {
    border-top: none;
    padding: 0.5rem 1rem;
    position: relative;
    overflow: hidden;
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 40%;
      height: 4px;
      background-color: #287ca4;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.5s ease-in-out;
    }

    &:hover:before {
      transform: scaleX(1);
    }
  }
`;
