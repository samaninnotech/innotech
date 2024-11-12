"use client";

import Link from "@/i18n/Link";
import { mediaRules } from "@/themes/media-breakpoints";
import styled, { css } from "styled-components";
import { ImageAlignment, ImageSize } from "./ImageBlock";

/* Block Parts */
export const Title = styled.h2`
  text-align: left;
`;

export const Subtitle = styled.h3`
  font-weight: 600;
`;
export const Normal = styled.p`
  margin: 0 !important;
`;
export const BlockQuoteContainer = styled.div`
  padding-left: 1rem;
  border-left: 5px solid gray;
`;
export const BlockQuote = styled.h3`
  margin: 0 !important;
`;
export const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none !important;
  color: black;
`;

export const UnorderedList = styled.div`
  width: fit-content;

  ul {
    width: fit-content;
    margin-left: 1.5rem;
  }

  li {
    list-style-type: disc;
  }
`;

/* Video Block */
export const IframeBlock = styled.iframe`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
`;

export const VideoBlock = styled.div`
  margin: 2em 0;
`;

/* Image Block */
type ImageBlockProps = {
  $ratio: number;
  $alignment?: ImageAlignment;
  $size?: ImageSize;
};
export const ImageBlock = styled.div<ImageBlockProps>`
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  align-items: ${({ $alignment }) => {
    if ($alignment === ImageAlignment.Left) {
      return "flex-start";
    } else if ($alignment === ImageAlignment.Right) {
      return "flex-end";
    }

    return "center";
  }};

  figure {
    position: relative;
    display: block;
    aspect-ratio: ${({ $ratio }) => $ratio};
    z-index: 0;

    > img {
      z-index: 0;
      object-fit: contain;
    }
  }

  ${({ $size }) => {
    if ($size === ImageSize.FullWidth) {
      return css`
        figure,
        figcaption {
          width: 100%;
        }
      `;
    }
  }}

  figcaption {
    text-align: center;
    font-style: italic;
    font-size: 0.8rem;
    line-height: 1.4;
    margin: 0.5em 0;
  }
`;

/* Tweet Block */
export const TweetPlaceholder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 0.5rem;
  border: solid 1px rgb(207, 217, 222);
  border-radius: 0.5rem;
`;

type TweetLogoContainerProps = { animated?: boolean };
export const TweetLogoContainer = styled.div<TweetLogoContainerProps>`
  background: var(--black-color);
  padding: 0.5rem;
  border-radius: 0.25rem;
  filter: brightness(1);
  animation: ${({ animated }) =>
    animated ? "brightness-oscillation 1s ease-in-out infinite alternate" : ""};

  @keyframes brightness-oscillation {
    0% {
      filter: brightness(1);
    }
    50% {
      filter: brightness(0.5);
    }
    100% {
      filter: brightness(0.25);
    }
  }
`;

export const TweetBlock = styled(Link)`
  display: block;
  width: 100%;
  margin: 2em 0;
  padding: 0.5rem 1rem;
  border: solid 1px rgb(207, 217, 222);
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 300;

  * {
    text-decoration: none !important;
  }

  p {
    font-size: 1rem;
    font-weight: normal;
    font-style: italic;
  }
`;

export const ImageTextContainer = styled.div<{
  imagePosition: "left" | "right";
}>`
  display: flex;
  flex-direction: ${({ imagePosition }) =>
    imagePosition === "left" ? "column" : "column-reverse"};
  width: 100%;
  margin: 3rem 0;
  
  ${mediaRules.md} {
    flex-direction: ${({ imagePosition }) =>
    imagePosition === "left" ? "row" : "row-reverse"};
  }
`;

export const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 0 1rem;

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

interface ImageTextProps {
  imagePosition: "left" | "right";
}

export const TextColumn = styled.div<ImageTextProps>`
  flex: 1;
  margin: 0;

  ${mediaRules.md} {
    margin: ${({ imagePosition }) =>
    imagePosition === "left" ? "0  0  0 1.5rem" : "0 1.5rem 0 0 "};
  }
`;
