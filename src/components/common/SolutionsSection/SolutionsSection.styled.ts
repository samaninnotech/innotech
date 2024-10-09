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
    max-width: 1200px;
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
  max-width: 1200px;
  p {
    color: var(--text-light-color);
  }
`;

export const Paragraph = styled.div`
  flex: 0 0 100%; /* Takes 55% of the width on larger screens */
  text-align: left;
  margin-bottom: 20px;
  color: var(--text-black-color);

  ${mediaRules.md} {
    flex: 0 0 60%; /* Takes full width on small screens */
  }
  ${mediaRules.lg} {
    flex: 0 0 55%; /* Takes full width on extra small screens */
  }
`;

export const RightBox = styled.div`
  flex: 0 0 25%; /* Takes 25% of the width on larger screens */

  ${mediaRules.sm} {
    display: none; /* Hide on small screens */
  }
  ${mediaRules.xsm} {
    display: none; /* Hide on extra small screens */
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
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  max-width: 1200px;
  width: 100%;
  ${mediaRules.xsm} {
    grid-template-columns: 2fr; /* 1 card per row for the smallest screens */
  }
  ${mediaRules.sm} {
    grid-template-columns: repeat(2, 1fr); /* Adjust for very small screens */
  }
  ${mediaRules.md} {
    grid-template-columns: repeat(4, 1fr); /* Adjust for smaller screens */
  }
  ${mediaRules.lg} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Spacer = styled.div`
  height: 124px; /* Adjust spacer height as needed */
`;
