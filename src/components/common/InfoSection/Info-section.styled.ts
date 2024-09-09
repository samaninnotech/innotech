import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

type GridProps = {
  numberOfColumns: number;
};
export const InfoSectionContainer = styled.section`
  padding: 20px;
  background-color: #fff; /* Optional: Light background for the entire section */
  margin: 0 5rem;
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

export const GridWrapper = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.numberOfColumns || "3"},
    1fr
  ); /* 3 columns */
  gap: 40px;
`;
