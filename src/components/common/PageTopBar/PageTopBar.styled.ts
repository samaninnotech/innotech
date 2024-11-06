import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

export const PageTopBarContainer = styled.div`
  background-color: transparent;
  color: white;
  top: 0;
  left: 0;
  right: 0;
  font-weight: 400;
  width: 100%;
  z-index: 1000;
  position: absolute;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 14px;
  line-height: 1.78;
  margin: 0 auto;
  a {
    &:hover {
      color: var(--innotech-color);
      text-decoration: none;
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  padding: 0 15px;
  display: none;
  width: 100%;

  ${mediaRules.md} {
    display: block;
    max-width: 940px;
  }

  ${mediaRules.lg} {
    max-width: 1170px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  margin: 0 -15px;
`;

export const TopBarWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
`;

export const TopBarLeft = styled.div``;

export const TopBarRight = styled.div``;

export const TopBarInfo = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  &:hover {
    color: var(--innotech-color);
    text-decoration: none;
  }
`;

export const PhoneContact = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
`;

export const InfoIcon = styled.i`
  margin: 2px 5px 0 0;
  transform: scaleX(-1);
`;

export const PhoneContactLink = styled.a`
  font-weight: bold;
`;
