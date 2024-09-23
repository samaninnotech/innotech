"use client";
import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";
import GenericSection from "../GenericSection";

export const InnerContainer1 = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto;
`;

export const InnerContainer2 = styled.div`
  ${mediaRules.lg} {
    display: flex;
    flex-direction: row;
    margin: auto;
    flex-wrap: wrap;
    align-items: center;
  }
`;
export const CarouselTitleContainer = styled.div`
  margin-bottom: 1rem;

  ${mediaRules.md} {
    margin-bottom: 0;
  }

  h2 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: bold;
    line-height: 1.25;
    text-align: left;

    ${mediaRules.md} {
      text-align: left;
    }
  }

  ${mediaRules.md} {
    margin-bottom: 1rem;
    padding: 0;
  }
`;
export const CarouselContent = styled.div`
  overflow-x: hidden;
  flex: 3;
`;

export const Element = styled(GenericSection)`
  padding: 1rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-top: 2.75rem;
  margin-bottom: 2.75rem;
  width: 100%;
`;
