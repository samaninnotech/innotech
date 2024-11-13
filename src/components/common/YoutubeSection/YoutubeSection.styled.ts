// YoutubeSection.styled.ts
import { mediaRules } from "@/themes/media-breakpoints";
import Image from "next/image";
import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: var(--background-gray-color);
`;

export const SmallHeader = styled.h3`
  font-size: 18px;
  color: var(--text-gray-color);
  margin-bottom: 0 !important;
`;

export const LargeHeader = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 0rem;
  h2 {
    text-align: center;
  }
  ${mediaRules.sm} {
    font-size: 28px;
  }
`;

export const Logo = styled(Image)`
  max-width: 100%;
  height: auto;
`;
