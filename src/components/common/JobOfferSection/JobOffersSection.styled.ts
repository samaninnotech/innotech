import { mediaRules } from '@/themes/media-breakpoints';
import styled from 'styled-components';

export const JobOffersContainer = styled.div`
  width: 90%;
  padding: 20px;
  margin: 0 auto;
`;

export const Heading = styled.h2`
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
