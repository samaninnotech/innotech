"use client";
import { mediaRules } from "@/themes/media-breakpoints";
import { SlArrowDown } from "react-icons/sl";
import styled from "styled-components";
import GenericSection from "../GenericSection";

export const InnerContainer1 = styled.div<{
  $background?: string;
  $isFullWidth: boolean;
}>`
  padding: 1rem 1rem;
  background: ${({ $background }) => $background || ""};
  width: 100%;
  margin: 0 auto;

  ${({ $isFullWidth }) =>
    !$isFullWidth &&
    `
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
  `}
`;

export const TitlenParagraphContainer = styled.h1`
  color: white;
  text-wrap: pretty;
  text-align: center;
  font-size: 46px !important;
  margin: 1rem 0;
`;
export const InnerContainer2 = styled.div`
  margin: 0px auto;
  
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
  
}`;

export const InnerContainer3 = styled.div<{ numberOfColumns: number }>`
  display: grid;
  gap: 0;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-flow: dense;

  ${mediaRules.xsm} {
    grid-template-columns: repeat(1, 1fr);
  }
  ${mediaRules.sm} {
    grid-template-columns: repeat(1, 1fr);
  }
  ${mediaRules.md} {
    grid-template-columns: repeat(
      ${({ numberOfColumns }) => numberOfColumns},
      1fr
    );
    gap: 15px;
  }
  ${mediaRules.lg} {
    grid-template-columns: repeat(
      ${({ numberOfColumns }) => numberOfColumns},
      1fr
    );
    gap: 15px;
  }
`;

export const Element = styled(GenericSection)``;
export const AccordionWrapper = styled.div`
  margin-top: 60px;
`;

export const AccordionSection = styled.div<{ active: boolean }>`
  margin: 0 10px 15px 10px;
  border-radius: 5px;
  background-color: ${({ active }) =>
    active ? "var(--innotech-color)" : "white"};
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
  color: ${({ active }) =>
    active ? "var(--white-color)" : "var(--text-black-color)"};
`;

export const AccordionIcon = styled(SlArrowDown)<{ active: boolean }>`
  transition:
    transform 0.4s ease,
    color 0.4s ease;
  ${({ active }) => active && `transform: rotate(180deg);`}
  color: ${({ active }) =>
    active ? "var(--white-color)" : "var(--text-black-color)"};
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
