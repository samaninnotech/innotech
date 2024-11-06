// Navbar-Links.styled.ts
"use client";

import Link from "@/i18n/Link";
import { mediaRules } from "@/themes/media-breakpoints";
import styled, { css } from "styled-components";

type NavbarLinksProps = { $showMenu: boolean };
export const NavbarLinksStyled = styled.nav<NavbarLinksProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  &.text-white {
    color: white;
  }

  &.text-black {
    color: black;
  }
  ${mediaRules.lg} {
    justify-content: flex-start;
    position: relative;
    padding: 0rem;
  }
`;

export const LogoContainerStyled = styled.div`
  max-height: 50px;
  margin-right: 2rem;
  ${mediaRules.lg} {
    max-height: none;
  }
`;

export const MainLinksContainerStyled = styled.div`
  display: none;
  flex-direction: column;
  left: 0;
  padding: 0rem;
  position: absolute;
  top: 100%;
  width: 100%;
  height: calc(100vh - 50px - 2.5em);
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

export const SidebarStyled = styled.div<{ $showMenu: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100vh;
  background-color: #2d5c7f;
  color: white;
  transition: transform 0.3s ease-in-out;
  transform: translateX(100%);
  z-index: 99999;
  ${({ $showMenu }) =>
    $showMenu &&
    css`
      display: block;
      transform: translateX(0);
    `}

  ${mediaRules.lg} {
    display: none;
  }
`;

export const SidebarContentStyled = styled.div`
  padding: 1rem;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;
export const SideBarLogoButtonContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--white-color);
  margin: -1rem;
  padding: 1rem;

  img {
    flex: 1;
    padding-left: 1rem;
  }

  svg {
    color: black;
    font-size: 2rem;
    cursor: pointer;
    margin-left: 1rem;
  }
`;

export const BurgerMenuButton = styled.button<{ $burgerButtoncolor: string }>`
  display: block;
  font-size: 1.5rem;
  padding: 0 0.75rem;
  place-content: center;
  color: ${({ $burgerButtoncolor }) => $burgerButtoncolor};
  background-color: transparent;
  z-index: 100001;
  position: relative;

  ${mediaRules.lg} {
    display: none;
  }
`;

export const OverlayStyled = styled.div<{ $showOverlay: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  cursor: pointer;
  overflow: hidden;
  display: ${({ $showOverlay }) => ($showOverlay ? "block" : "none")};
`;

export const GenericLinksContainerStyled = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  padding-top: 2rem;

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

export const ComplexNavbarLinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  ${mediaRules.lg} {
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    padding-left: 1rem;
  }
`;

export const NavbarElementStyled = styled(Link)<{ $selected?: boolean }>`
  margin-top: 0.75rem;
  padding: 1rem 0rem;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;

  border-top: 1px solid gray;

  &:first-child {
    border-top: none;
  }

  ${mediaRules.lg} {
    margin-left: 2rem;
    margin-top: 0;
    width: fit-content;
    border-top: none;
    width: fit-content;
    ${({ $selected }) =>
      $selected &&
      css`
        border-bottom: 4px solid #287ca4;
        padding-bottom: 0.7rem;
      `};
  }

  &:hover {
    text-decoration: none;
  }

  ${({ $selected }) =>
    !$selected &&
    css`
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: #287ca4;
        transform: scaleX(0);
        transform-origin: left;

        ${mediaRules.lg} {
          transition: transform 0.5s ease-in-out;
        }
      }

      ${mediaRules.lg} {
        &:hover:before {
          transform: scaleX(2);
        }
      }
    `}
`;

export const NavbarMenuStyled = styled.span<{ $selected?: boolean }>`
  cursor: pointer;
  margin-top: 0.75rem;
  width: 100%;
  padding: 1rem 0rem;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  border-top: 1px solid gray;

  ${mediaRules.lg} {
    margin-left: 2rem;
    margin-top: 0;
    width: auto;
    border: none;
    padding: 0.4rem 0rem;
  }

  border-bottom: none;

  ${mediaRules.lg} {
    ${({ $selected }) =>
      $selected &&
      css`
        color: var(--innotech-color);
      `}
  }

  &:hover {
    text-decoration: none;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #287ca4;
    transform: scaleX(0);
    transform-origin: left;

    ${mediaRules.lg} {
      transition: transform 0.5s ease-in-out;
    }
  }

  ${mediaRules.lg} {
    &:hover:before {
      transform: scaleX(2);
    }
  }
`;

export const SVGContainer = styled.div`
  display: inline-flex; 
  align-items: center;
  justify-content: center; 
  background-color: #3b6788; 
  border-radius: 0.25rem; 
  padding: 0.5rem 1rem; 
  svg {
    width: 10px;
    height: 20px;
  }
  ${mediaRules.lg} {
    background-color: transparent; 
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
  border-bottom: none;

  ${mediaRules.lg} {
    border-bottom: none;
  }
`;
export const SearchIconContainer = styled.div`
  display: flex;
  align-items: right;
  cursor: pointer;
  font-size: 1.5rem;

  ${mediaRules.lg} {
    margin-left: 1rem;
  }

  svg {
    color: inherit;
  }

  &:hover svg {
    color: #555;
  }
`;
