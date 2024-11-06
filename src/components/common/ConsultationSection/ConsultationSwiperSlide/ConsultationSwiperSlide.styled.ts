import { mediaRules } from "@/themes/media-breakpoints";
import Image from "next/image";
import styled from "styled-components";

export const Slide = styled.div`
  width: 70%;
  flex-shrink: 0;
  position: relative;
  background-color: white;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  border-radius: 5px;
  margin: 12px 0;
  &:hover {
    background-color: var(--innotech-color);
    color: white;
    transform: translateY(-5px);
  }
  min-height: 300px;

  ${mediaRules.xsm} {
    width: 70%;
  }
  ${mediaRules.sm} {
    width: 90%;
  }
  ${mediaRules.md} {
    width: 95%;
  }
  ${mediaRules.lg} {
    width: 95%;
  }
`;

export const SlideInner = styled.div`
  position: relative;
`;

export const BoxImage = styled.div`
  position: relative;
`;

export const ContentWrap = styled.div`
  padding: 16px;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const SwiperImage = styled(Image)`
  width: 100px;
  height: 100px;
  object-fit: cover;
  transition: filter 0.3s ease;

  ${BoxImage}:hover & {
    filter: brightness(0) invert(1);
  }
`;

export const Heading = styled.h4`
  margin: 16px 0;
`;

export const TextContent = styled.p`
  margin: 0;
`;
