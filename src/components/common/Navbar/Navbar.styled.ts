import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MainNavbarStyled = styled.header<{ isVisible: boolean }>`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: transparent;
  color: white;
  transition: opacity 0.3s ease-in-out, top 0.3s ease-in-out;
  z-index: 50;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  height: 60px;

  ${mediaRules.sm} {
    max-width: 720px;
  }
  ${mediaRules.md} {
    max-width: 940px;
  }
  ${mediaRules.lg} {
    max-width: 1400px;
  }
`;

export const SecondaryNavbarStyled = styled.header<{ isVisible: boolean }>`
  position: fixed;
  top: ${({ isVisible }) => (isVisible ? '0' : '-100px')}; /* Slide down effect */
  left: 0;
  width: 100%;
  background-color: white;
  color: black;
  transition: top 0.5s ease-in-out;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;

  ${mediaRules.sm} {
    max-width: 720px;
  }
  ${mediaRules.md} {
    max-width: 940px;
  }
  ${mediaRules.lg} {
    max-width: 1400px;
  }
`;
