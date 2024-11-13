import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
  transition: opacity 0.5s ease;
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled.div`
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
  padding: 0;
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 100%;
  justify-content: center;
  color: var(--text-black-color);
  h2 {
    font-size: 22px !important;
    text-align: center;
  }
  ${mediaRules.xsm} {
    h2 {
      font-size: 26px !important;
    }
  }
  ${mediaRules.sm} {
    h2 {
      font-size: 34px !important;
    }
  }
  ${mediaRules.sm} {
    h2 {
      font-size: 38px !important;
    }
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  width: 100%;
  ${mediaRules.xsm} {
    grid-template-columns: 2fr;
  }
  ${mediaRules.sm} {
    justify-content: space-around;
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaRules.md} {
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaRules.lg} {
    justify-content: space-between;
    grid-template-columns: repeat(2, 1fr);
  }
`;
