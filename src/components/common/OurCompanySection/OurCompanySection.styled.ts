import { mediaRules } from '@/themes/media-breakpoints';
import { SlArrowDown } from "react-icons/sl";
import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 50px 0;
  text-align: center;
  width: 100%;
`;

export const Spacer = styled.div`
  margin: 20px 0;
`;

export const HeadingSmall = styled.h6`
  font-size: 1.25rem;
  color: #333;
  text-transform: uppercase;
`;

export const HeadingLarge = styled.h3`
  font-size: 2.5rem;
  color: #000;
  margin: 0 auto;
  line-height: 1.5;
  width: 60%;
  text-align: center;
  max-width: 1170px;
  mark {
    background: none;
    color: #0073e6;
    font-weight: bold;
  }
`;
export const LeftColumn = styled.h3`
  color: #000;
  text-align: left;
  margin: 0;
  mark {
    background: none;
    color: #25567a;
    font-weight: bold;
  }
`;
export const LeftColumnText = styled.h3`
  color: #000;
  text-align: left;
  font-size: 30px;
  width: 100%;
  margin: 0;

  mark {
    background: none;
    color: #0073e6;
    font-weight: bold;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  ${mediaRules.sm} {
    max-width: 720px;

}
  ${mediaRules.md} {
    max-width: 940px;

}
  ${mediaRules.lg} {
      flex-direction: row;
      max-width: 1170px;
  }
`;

export const Column = styled.div<{ md?: number }>`
  flex: ${({ md }) => (md ? `0 0 ${(md / 12) * 100}%` : '1 1 100%')};
  max-width: 100%;;
  padding: 15px;
  width: 100%;
   ${mediaRules.sm} {
    max-width: 100%;

  }
  ${mediaRules.md} {
    max-width: 100%;

}
  ${mediaRules.lg} {
      max-width: 50%;
  }
`;

export const AccordionWrapper = styled.div`
  margin-top: 60px;
`;

export const AccordionSection = styled.div<{ active: boolean }>`
  border: 1px solid #ddd;
  margin: 10px 0;
  border-radius: 5px;
  background-color: ${({ active }) => (active ? '#25567a' : 'transparent')};
  transition: background-color 0.4s ease;  /* Smooth background transition */

  &:hover {
    background-color: #25567a;
 h6 {
      color: #fff;
    }

    svg {
      color: #fff;
    }  }
`;

export const AccordionTitleWrapper = styled.div`
  cursor: pointer;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

export const AccordionTitle = styled.h6<{ active: boolean }>`
  font-size: 1.25rem;
  color: #333;
  color: ${({ active }) => (active ? '#fff' : '#333')};

`;

export const AccordionIcon = styled(SlArrowDown)<{ active: boolean }>`
  transition: transform 0.4s ease, color 0.4s ease;  /* Smooth transform and color transition */
  ${({ active }) => active && `transform: rotate(180deg);`}
  color: ${({ active }) => (active ? '#fff' : '#333')};

`;

export const AccordionContent = styled.div<{ active: boolean }>`
  font-size: 1rem;
  color: #666;
  padding: ${({ active }) => (active ? '25px' : '0 25px')}; /* Maintain horizontal padding, but adjust vertical padding */
  text-align: left;
  background-color: #fff;
  overflow: hidden;
  height: ${({ active }) => (active ? 'auto' : '10px')}; /* Set initial height to 10px when inactive */
  max-height: ${({ active }) => (active ? '700px' : '10px')}; /* Keep a small height when inactive */
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: max-height 0.2s ease, opacity 0.2s ease, height 0.2s ease, padding 0.2s ease;

`;

export const MarkedText = styled.mark`
  background: none;
  color: #0073e6;
  font-weight: bold;
`;

export const MarkedNumber = styled.mark`
  background: none;
  color: #0073e6;
  font-weight: bold;
  font-size: 175px;
`;
