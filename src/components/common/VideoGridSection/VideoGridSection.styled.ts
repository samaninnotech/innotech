import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

type GridProps = {
  numberOfColumns: number;
};
export const VideoGridContainer = styled.section`
  background-color: var(--white-color);
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
  gap: 0;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-flow: dense;
  grid-row-gap: 10px;
  height: auto;
  ${mediaRules.xsm} {
    grid-template-columns: repeat(1, 1fr);
    height: 800px;
  }
  ${mediaRules.sm} {
    grid-template-columns: repeat(
      ${({ numberOfColumns }) => numberOfColumns - 1},
      1fr
    );
    gap: 15px;
    height: 600px;
  }
  ${mediaRules.md} {
    grid-template-columns: repeat(
      ${({ numberOfColumns }) => numberOfColumns},
      1fr
    );
    height: 250px;
  }
  ${mediaRules.lg} {
    grid-template-columns: repeat(
      ${({ numberOfColumns }) => numberOfColumns},
      1fr
    );
    height: 350px;
  }
`;
export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  background: var(--black-color);

  ${mediaRules.sm} {
    width: 100%;
    height: 100%;
  }

  ${mediaRules.lg} {
    width: 100%;
    height: 100%;
  }
`;
