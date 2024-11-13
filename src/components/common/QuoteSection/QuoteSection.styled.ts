"use client";
import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";
import GenericSection from "../GenericSection";

export const Header = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  margin: auto;
  margin-bottom: 4rem;
  font-size: 2rem;
  font-weight: 600;
  color: var(--black-color);
  h2 {
    text-align: center;
    font-size: 20px;
  }
  ${mediaRules.sm} {
    h2 {
      font-size: 25px;
    }
  }
  ${mediaRules.md} {
    max-width: 768px;
    h2 {
      font-size: 30px;
    }
  }
`;

export const InnerContainer1 = styled.div<{ $bgImg?: string }>`
  padding-left: 1rem;
  padding-right: 1rem;
  background-image: url(${({ $bgImg }) => $bgImg});
  background-size: cover;
  background-position: center;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  ${mediaRules.xsm} {
    max-width: 520px;
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
`;

export const InnerContainer2 = styled.div`
  display: flex;
  margin-right: -0.5rem;
  flex-wrap: wrap;
  align-items: flex-start;
  text-align: center;
  flex-direction: column;
  ${mediaRules.md} {
    text-align: left;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
  }
`;

export const InnerContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  flex: 1 !important;
  padding-left: 2rem;
  margin-bottom: 2.5rem;
  margin-right: 4rem;
  font-size: 1.5rem;
  color: var(--text-light-color);
  text-align: left;
  border-left: 5px solid var(--innotech-color);

  h3 {
    font-size: 15px;
    margin: 0;
  }
  margin-bottom: 2rem;
  ${mediaRules.xsm} {
    width: 100%;
    h3 {
      font-size: 25px;
      margin: 0;
    }
  }
  height: fit-content;
  ${mediaRules.sm} {
    width: 100%;
    h3 {
      font-size: 25px;
      margin: 0;
    }
  }

  ${mediaRules.md} {
    h3 {
      font-size: 20px;
      margin: 0;
    }
  }
`;

export const InnerContainerRight = styled.div`
  flex: 2 !important;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-bottom: 2.5rem;
  font-size: 1.15rem;
  line-height: 1.75rem;
  color: #949494;
  text-align: left;
  text-wrap: pretty;
  overflow-wrap: break-word;
  word-break: break-word;

  ${mediaRules.lg} {
    font-size: 1.25rem;
    margin-top: 0;
  }
`;

export const Element = styled(GenericSection)`
  padding: 0rem 1rem;
  background: ${({ $background }) => $background || ""};
  height: auto;
  margin: 5rem 0 0rem 0;
`;
