"use client";
import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";
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
  padding: 2rem 0rem;
  background-image: url(${({ $bgImg }) => $bgImg});
  background-size: auto;
  background-position: center right;
  background-repeat: no-repeat;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
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
`;

export const OnlyTextContainer = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    margin: auto;
    ${mediaRules.lg} {
      max-width: 768px;
    }
}`;
export const InnerContainer2 = styled.div`
    display: grid;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;

    ${mediaRules.xsm} {
      max-width: 576px;
    }
    ${mediaRules.sm} {
      max-width: 720px;
    }
    ${mediaRules.md} {
      max-width: 940px;
      grid-template-columns: 50% 50%;
    }
    ${mediaRules.lg} {
      max-width: 1170px;
    }
}`;

export const InnerContainerLeft = styled.div<{
  $textColor?: string;
  $textAlign?: string;
}>`
  padding-left: 0.5rem;
  font-size: 1.15rem;
  line-height: 1.75rem;
  color: ${({ $textColor }) => $textColor || "var(--text-light-color)"};
  text-align: ${({ $textAlign }) => $textAlign || "left"};
  text-wrap: pretty;
  overflow-wrap: break-word;
  word-break: break-word;
  margin: 0 !important;
  h2 {
    font-size: 25px;
  }
  ${mediaRules.sm} {
    h2 {
      font-size: 40px;
    }
  }
`;
export const InnerContainerRight = styled(GenericSection)`
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    background: ${({ $background }) => $background || ""};

    img {
      margin: auto;
    }

}`;

export const HeroLinksContainer = styled.div<{ $textAlign?: string }>`
  align-items: ${({ $textAlign }) => $textAlign || "left"};
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
type ElementProps = { $height?: string };

export const Element = styled(GenericSection)<ElementProps>`
  background: ${({ $background }) => $background || ""};
  margin: 2rem 0;
  width: 100%;
  height: ${({ $height }) => $height || "auto"} !important;
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 80%;
  max-width: 800px;
  max-height: 450px;
  background: var(--black-color);

  ${mediaRules.sm} {
    width: 90%;
    height: 90%;
  }

  ${mediaRules.lg} {
    width: 100%;
    height: 80%;
  }
`;
