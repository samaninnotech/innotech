import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

export const TickItemsSectionContainer = styled.section`
  padding: 20px;
  background-color: #fff;
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

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  ${mediaRules.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mediaRules.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mediaRules.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
