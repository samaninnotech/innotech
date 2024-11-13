import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

export const TickItemsSectionContainer = styled.section`
  padding: 20px;
  background-color: var(--white-color);
  width: 100%;
`;

export const InnerContainer1 = styled.div<{ $bgImg?: string }>`
  display: flex;
  justify-content: center;
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
export const HeaderContainer = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

export const SectionHeader = styled.h3`
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  margin: auto;
  margin-bottom: 4rem;
  font-size: 2rem;
  font-weight: 600;
  color: var(--black-color);
  ${mediaRules.lg} {
    max-width: 768px;
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  ${mediaRules.sm} {
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between; /* Adds spacing between two items */
  }
  ${mediaRules.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mediaRules.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
