"use client";

import Link from "@/i18n/Link";
import { mediaRules } from "@/themes/media-breakpoints";

import styled, { css } from "styled-components";

type NavbarLinksProps = { $showMenu: boolean };
export const NavbarLinksStyled = styled.nav<NavbarLinksProps>`
  display: flex;
  justify-content: space-between;
  padding: 0rem 1rem;
  width: 100%;
  align-items: center;

  ${mediaRules.lg} {
    justify-content: flex-start;
    position: relative;
  }

  ${({ $showMenu }) =>
    $showMenu &&
    css`
      > ${MainLinksContainerStyled} {
        display: flex;
      }
    `}
`;

export const LogoContainerStyled = styled.div`
  max-height: 50px;

  ${mediaRules.lg} {
    max-height: unset;
  }
`;

export const MainLinksContainerStyled = styled.div`
  display: none;
  background-color: var(--white-color);
  flex-direction: column;
  left: 0;
  padding: 0.75rem;
  position: absolute;
  top: 100%;
  width: 100%;
  height: calc(100vh - 50px - 2.5em);
  height: calc(100dvh - 50px - 2.5em);
  justify-content: space-between;

  ${mediaRules.lg} {
    align-items: baseline;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    position: initial;
    width: auto;
    height: auto;
  }
`;

export const GenericLinksContainerStyled = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 0 calc((100vw - 660px) / 2);

  ${mediaRules.md} {
    padding: 0 calc((100vw - 768px) / 2);
  }

  ${mediaRules.lg} {
    align-items: baseline;
    display: flex;
    flex-direction: row;
    margin: initial;
    margin-top: 0.5rem;
    max-width: initial;
    padding: initial;
    position: initial;
    width: auto;
  }
`;

export const PageLinksContainerStyled = styled(GenericLinksContainerStyled)`
  padding-bottom: 0.75rem;

  ${mediaRules.lg} {
    padding-bottom: 0;
  }
`;

export const SideLinksContainerStyled = styled(GenericLinksContainerStyled)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-top: solid 1px var(--accent-color);
  width: 100%;
  padding-top: 1rem;

  ${mediaRules.lg} {
    padding-top: initial;
    margin-left: auto;
    position: relative;
    width: auto;
    border: none;
  }
`;

export const ComplexNavbarLinkContainer = styled.div<{ $selected?: boolean }>`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;

  
`;

export const NavbarElementStyled = styled(Link)<{ $selected?: boolean }>`
  margin-top: 0.75rem;
  width: 100%;
  padding: 0.2rem 1rem;
  text-decoration: none;
  position: relative;
  overflow: hidden;

  ${mediaRules.lg} {
    margin-left: 2rem;
    margin-top: 0;
    width: auto;
  }

  /* Default state: no border */
  border-bottom: none;

  /* Selected state: show the border without transition */
  ${({ $selected }) =>
    $selected &&
    css`
      border-bottom: 2px solid blue;
    `}

  &:hover {
    text-decoration: none;
  }

  /* Hover effect for unselected items */
  ${({ $selected }) =>
    !$selected &&
    css`
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: blue;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.5s ease-in-out;
      }

      &:hover:before {
        transform: scaleX(1); /* Transition the border in from left to right */
      }
    `}
`;



export const NavbarMenuStyled = styled.span<{ $selected?: boolean }>`
  cursor: pointer;
  margin-top: 0.75rem;
  width: 100%;
  padding: 0.2rem 0;
  text-decoration: none;
  position: relative;
  overflow: hidden;

  ${mediaRules.lg} {
    margin-left: 2rem;
    margin-top: 0;
    width: auto;
    border-bottom: none;
  }

  /* Default state: no border */
  border-bottom: none;

  /* If the item is selected, keep the border-bottom visible */
  ${({ $selected }) =>
    $selected &&
    css`
      border-bottom: 2px solid blue;
    `}

  &:hover {
    text-decoration: none;
  }

  /* Hover effect for unselected items */
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: blue;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease-in-out;
  }

  &:hover:before {
    transform: scaleX(1); /* Transition the border in from left to right */
  }
`;

export const NavbarLinkButtonStyled = styled(Link)`
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  font-weight: 600;
  color: var(--black-color);
  background-color: var(--accent-color);
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);

  ${mediaRules.lg} {
    margin-left: 2rem;
  }

  &:hover {
    background-color: var(--black-color);
    color: var(--accent-color);
  }
`;

export const SideLinkStyled = styled(Link)<{ $selected?: boolean }>`
  /* Default state: no border */
  border-bottom: none;

  /* If the item is selected, keep the border-bottom visible */
  ${({ $selected }) =>
    $selected &&
    css`
      border-bottom: 2px solid blue;
    `}

  &:hover {
    border-bottom: 2px solid blue;
    text-decoration: none;
  }
`;

export const BurgerMenuButton = styled.button`
  display: block;
  font-size: 1.5rem;
  padding: 0 0.75rem;
  place-content: center;
  color: white;
  background-color: transparent;
  ${mediaRules.lg} {
    display: none;
  }
`;
