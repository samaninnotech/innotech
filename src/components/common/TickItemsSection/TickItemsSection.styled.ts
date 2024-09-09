import { mediaRules } from '@/themes/media-breakpoints';
import styled from 'styled-components';

export const TickItemsSectionContainer = styled.section`
  padding: 20px;
  background-color: #fff;
  margin: 0 5rem;
`;

export const HeadingContainer = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

export const SectionHeading = styled.h4`
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
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
