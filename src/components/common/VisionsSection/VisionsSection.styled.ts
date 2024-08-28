import { mediaRules } from '@/themes/media-breakpoints';
import styled from 'styled-components';

export const SectionWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  background-color: #f8f8f8;
  margin: 0 auto;
`;

export const Heading = styled.h3<{ large?: boolean }>`
  text-align: center;
  font-size: ${(props) => (props.large ? '36px' : '20px')};
  line-height: 1.2;
  color: #696969;
  margin: 0;
  padding: 0;

  mark {
    background-color: transparent;
    color: #007aff;
  }
`;

export const Spacer = styled.div`
  height: 40px;
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 60px;
  margin: 0 auto;
  align-content: center;
  ${mediaRules.md} {
    max-width: 910px;
    flex-direction: row;
    gap: 20px;

  }
  ${mediaRules.lg} {
    max-width: 1200px;
    flex-direction: row;
    gap: 60px;

  }
`;
