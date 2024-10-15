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

  ${mediaRules.lg} {
    max-width: 768px;
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
`;

export const InnerContainer2 = styled.div`
  display: flex;
  margin-right: -0.5rem;
  flex-wrap: wrap;
  align-items: flex-start; /* Align items to the top */
  text-align: center;
  flex-direction: column;
  ${mediaRules.lg} {
    text-align: left;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
  }
`;

export const InnerContainerLeft = styled.div`
  flex: 1 !important;
  padding-left: 2rem;
  margin-bottom: 2.5rem;
  margin-right: 4rem;
  font-size: 1.5rem;
  color: var(--text-light-color);
  text-align: left;
  border-left: 5px solid #25567a;

  ${mediaRules.lg} {
    font-size: 1.75rem;
    margin-top: 0; /* Remove negative margin */
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
    margin-top: 0; /* Remove negative margin */
  }
`;

export const Element = styled(GenericSection)`
  padding: 0rem 1rem;
  background: ${({ $background }) => $background || ""};
  height: auto;
  margin: 5rem 4rem 0rem 4rem;
`;
