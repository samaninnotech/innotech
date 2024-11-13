import { mediaRules } from "@/themes/media-breakpoints";
import { SlArrowDown } from "react-icons/sl";
import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 50px 0;
  text-align: center;
  width: 100%;
`;

export const Spacer = styled.div`
  margin: 20px 0;
`;

export const HeadingSmall = styled.h6`
  font-size: 1rem;
  color: var(--text-light-color);
  text-transform: uppercase;
`;

export const HeadingLarge = styled.div`
  color: var(--black-color);
  margin: 0 auto;
  line-height: 1.5;
  width: 60%;
  text-align: center;
  max-width: 1170px;
  h2 {
    font-size: 20px;
    margin: 0;
    text-align: center;
  }
  margin-bottom: 2rem;
  ${mediaRules.xsm} {
    h2 {
      font-size: 25px;
      margin: 0;
    }
  }
  ${mediaRules.sm} {
    h2 {
      font-size: 30px;
      margin: 0;
    }
  }

  ${mediaRules.md} {
    h2 {
      font-size: 45px;
      margin: 0;
    }
  }
`;
export const LeftColumn = styled.h3`
  color: var(--black-color);
  text-align: left;
  margin: 0;
  color: var(--text-light-color);

  mark {
    color: var(--innotech-color);
    font-weight: bold;
  }
`;
export const LeftColumnText = styled.div`
  color: var(--black-color);
  text-align: left;
  font-size: 30px;
  width: 100%;
  margin: 0;

  mark {
    color: var(--innotech-color);
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
  flex: ${({ md }) => (md ? `0 0 ${(md / 12) * 100}%` : "1 1 100%")};
  max-width: 100%;
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
  background-color: ${({ active }) =>
    active ? "var(--innotech-color)" : "transparent"};
  transition: background-color 0.4s ease;

  &:hover {
    background-color: var(--innotech-color);
    h6 {
      color: var(--white-color);
    }

    svg {
      color: var(--white-color);
    }
  }
`;

export const AccordionTitleWrapper = styled.div`
  cursor: pointer;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AccordionTitle = styled.h6<{ active: boolean }>`
  font-size: 1rem;
  color: var(--text-black-color);
  color: ${({ active }) =>
    active ? "var(--white-color)" : "var(--text-black-color)"};
`;

export const AccordionIcon = styled(SlArrowDown)<{ active: boolean }>`
  transition: transform 0.4s ease;
  transform: ${({ active }) => (active ? "rotate(180deg)" : "rotate(0deg)")};
  color: ${({ active }) => (active ? "var(--black-color)" : "#888")};
`;

export const AccordionContent = styled.div<{ active: boolean }>`
  font-size: 1rem;
  color: var(--text-gray-color);
  padding: ${({ active }) => (active ? "25px" : "0 25px")};
  text-align: left;
  background-color: var(--white-color);
  overflow: hidden;
  height: ${({ active }) => (active ? "auto" : "10px")};
  max-height: ${({ active }) => (active ? "700px" : "10px")};
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition:
    max-height 0.2s ease,
    opacity 0.2s ease,
    height 0.2s ease,
    padding 0.2s ease;
`;

export const MarkedNumber = styled.mark`
  font-weight: bold;
  font-size: 155px;
  background-color: white;
  ${mediaRules.md} {
    font-size: 175px;
  }
`;
