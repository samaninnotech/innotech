"use client";

import Link from "@/i18n/Link";
import styled, { css } from "styled-components";
import { ImageAlignment, ImageSize } from "./ImageBlock";

/* Block Parts */
export const Title = styled.h2``;

export const Subtitle = styled.h3`
  font-weight: 600;
`;
export const Normal = styled.p`
  margin: 0 !important;
`;
export const BlockQuote = styled.h3`
  margin: 0 !important;
`;
export const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: underline !important;
  color: var(--accent-color);
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
