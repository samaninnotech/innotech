import { mediaRules } from "@/themes/media-breakpoints";
import Image from "next/image";
import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
`;

export const BannerImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: var(--background-gray-color);
`;

export const InnerContainer = styled.div`
  width: 100%;
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
    max-width: 1200px;
  }
  padding: 0;
`;
export const Description = styled.div`
  font-size: 15px;
  font-weight: 350;
  color: var(--text-gray-color);
  margin-bottom: 0 !important;
  align-self: flex-start;
`;

export const LargeHeader = styled.div`
  margin-top: 0rem;
  font-size: 2rem;
  font-weight: 600;
  color: var(--black-color);
  h2,
  h3 {
    text-align: left;
    font-size: 20px;
  }
  ${mediaRules.sm} {
    h2,
    h3 {
      font-size: 25px;
    }
  }
  ${mediaRules.md} {
    max-width: 768px;
    h2,
    h3 {
      font-size: 30px;
    }
  }
`;
