import { mediaRules } from "@/themes/media-breakpoints";
import Image from "next/image";
import styled from "styled-components";
// Container for the entire banner
export const BannerContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
`;

// Wrapper for the banner to handle positioning
export const BannerWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
`;

// Image within the banner, making it full width and height
export const BannerImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover; // Ensure the image covers the area without distortion
  position: relative;
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align items horizontally */
  padding: 2rem; /* Add some padding */
  background-color: #f9f9f9; /* Background color for the section */
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
export const Description = styled.h3`
  font-size: 15px;
  font-weight: 350;
  color: var(--text-gray-color); /* Customize the color */
  margin-bottom: 0 !important; /* Spacing below the small header */
  align-self: flex-start;
`;

export const LargeHeader = styled.h1`
  font-size: 28px;
  text-align: center; /* Center the text */
  margin-top: 0rem; /* Spacing below the large header */
`;
