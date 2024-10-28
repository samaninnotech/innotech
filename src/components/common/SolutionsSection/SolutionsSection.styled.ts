import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
  transition: opacity 0.5s ease;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const InnerContainer1 = styled.div`
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

export const InnerContainer2 = styled.div`
  width: 100%;
`;

export const InnerContainer3 = styled.div`
  // Any additional styling needed here
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 100%;
  justify-content: space-between;
  max-width: 1170px;
  padding: 0 1rem;
  p {
    color: var(--text-light-color);
  }
  ${mediaRules.xsm} {
    padding: 0 1rem;
  }
  ${mediaRules.sm} {
    padding: 0;
  }
`;

export const Paragraph = styled.div`
  flex: 0 0 100%;
  text-align: left;
  margin-bottom: 20px;
  color: var(--text-black-color);

  ${mediaRules.md} {
    flex: 0 0 60%;
  }
  ${mediaRules.lg} {
    flex: 0 0 55%;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;

  ${mediaRules.sm} {
    flex-direction: column;
    align-items: center;
  }
  ${mediaRules.md} {
    justify-content: center;
  }
  ${mediaRules.lg} {
    justify-content: center;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-column-gap: 1px;
  grid-row-gap: 5px;
  max-width: 1170px;
  width: 100%;
  justify-items: center;
  ${mediaRules.xsm} {
    grid-template-columns: 2fr; 
  ${mediaRules.sm} {
    grid-template-columns: repeat(2, 1fr); 
  }
  ${mediaRules.md} {
    grid-template-columns: repeat(4, 1fr); 
  }
  ${mediaRules.lg} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Spacer = styled.div`
  height: 124px;
`;
