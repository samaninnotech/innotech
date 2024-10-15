import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  ${mediaRules.xsm} {
    max-width: 576px;
  }

  ${mediaRules.sm} {
    max-width: 720px;
  }

  ${mediaRules.md} {
    max-width: 940px;
  }

  ${mediaRules.lg} {
    max-width: 1170px;
  }
`;

export const NavbarInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  ${mediaRules.sm} {
    max-width: 720px;
  }

  ${mediaRules.md} {
    max-width: 940px;
  }

  ${mediaRules.lg} {
    max-width: 1170px;
  }
`;

export const MainNavbarStyled = styled.header<{ isVisible: boolean }>`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: transparent;
  color: white;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  z-index: 50;
`;

export const SecondaryNavbarStyled = styled.header<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  color: black;
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  transform: translateY(${({ isVisible }) => (isVisible ? "0" : "-100%")});
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  z-index: 50;
  height: 15%;
  display: flex;
  align-content: center;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2); /* Subtle shadow at the bottom */
`;
