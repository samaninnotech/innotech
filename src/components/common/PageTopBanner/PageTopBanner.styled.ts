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
  max-height: 650px; // Set max height similar to the original
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
