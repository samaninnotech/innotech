import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

type GridProps = {
  numberOfColumns: number;
};
export const InfoSectionContainer = styled.section`
  padding: 20px;
  background-color: var(--white-color);
  width: 100%;
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
  margin: 0 auto;
  gap: 0;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-flow: dense;
  grid-row-gap: 10px;
  height: auto;
  justify-items: center;
  grid-auto-flow: dense;

  ${mediaRules.xsm} {
    grid-template-columns: repeat(1, 1fr);
  }
  grid-row-gap: 10px;

  ${mediaRules.sm} {
    grid-template-columns: repeat(
      ${({ numberOfColumns }) => numberOfColumns - 1},
      1fr
    );
    gap: 5px;
    max-width: 720px;
    grid-row-gap: 15px;
  }
  ${mediaRules.md} {
    grid-template-columns: repeat(
      ${({ numberOfColumns }) => numberOfColumns},
      1fr
    );
    gap: 1px;
    max-width: 940px;
  }
  ${mediaRules.lg} {
    grid-template-columns: repeat(
      ${({ numberOfColumns }) => numberOfColumns},
      1fr
    );
    max-width: 1170px;
  }
`;
