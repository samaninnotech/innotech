"use client";
import { mediaRules } from "@/themes/media-breakpoints";
import styled, { css } from "styled-components";
import GenericSection from "../GenericSection";

export const HeroTitle = styled.h2`
  margin-top: 1.25rem;
  margin-bottom: 2.5rem;
  font-size: 3rem;
  font-weight: 600;
  text-wrap: pretty;
  overflow-wrap: break-word;
  word-break: break-word;
  color: var(--black-color);
`;

export const HeroSubtitle = styled.span`
  display: block;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: var(--black-color);
`;

export const HeroParagraph = styled.p`
  margin-bottom: 2.5rem;
`;

export const InnerContainer1 = styled.div<{ $bgImg?: string }>`
  padding-left: 1rem;
  padding-right: 1rem;
  background-image: url(${({ $bgImg }) => $bgImg || "none"});
  background-size: cover;
  background-position: center;
  height: 100%;
  display: flex;
  justify-content: center;
`;

/* TODO gestione colore del testo (leggibilità) */
export const OnlyTextContainer = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    margin: auto;
    ${mediaRules.lg} {
      max-width: 768px;
    }
}`;
type InnerContainer2Props = { $revertOnMobile: boolean };
export const InnerContainer2 = styled.div<InnerContainer2Props>`
    display: flex;
    ${({ $revertOnMobile }) =>
      $revertOnMobile
        ? css`
            flex-direction: column-reverse;
          `
        : css`
            flex-direction: column;
          `}
    margin-right: -0.5rem;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;

    ${mediaRules.lg} {
      text-align: left;
      display: grid;
      grid-template-columns: 50% 50%;
  }
}`;

export const InnerContainerLeft = styled.div<{ $textColor?: string; $textAlign?: string }>`
  padding-left: 0.5rem;
  margin-top: -2rem;
  margin-bottom: 2.5rem;
  font-size: 1.15rem;
  line-height: 1.75rem;
  color: ${({ $textColor }) => $textColor || 'var(--text-light-color)'};
  text-align: ${({ $textAlign }) => $textAlign || "left"};
  text-wrap: pretty;
  overflow-wrap: break-word;
  word-break: break-word;
`;
export const InnerContainerRight = styled.div`
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    img {
      margin: auto;
    }

}`;

export const HeroLinksContainer = styled.div<{ $textAlign?: string }>`
  align-items: ${({ $textAlign }) =>  $textAlign || "left"};
  column-gap: 1em;
  margin-top: 3rem;
  color: var(--black-color);

  ${mediaRules.lg} {
    align-items: left;
  }

  a {
    display: inline-block;
  }
`;

export const Element = styled(GenericSection)`
  padding: 0rem 1rem;
  background: ${({ $background }) => $background || ""};
  height: 400px;
`;