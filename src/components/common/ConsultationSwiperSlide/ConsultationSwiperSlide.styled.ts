import Image from "next/image";
import styled from "styled-components";

// Define styles for the hover state and movement
export const Slide = styled.div`
  width: 90%;
  flex-shrink: 0;
  position: relative;
  background-color: white;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  border-radius: 5px;
  margin: 12px 0;
  &:hover {
    background-color: #25567a;
    color: white;
    transform: translateY(-5px); // This moves the entire slide up
  }

  @media (min-width: 1200px) {
    width: 95%;
  }

  @media (min-width: 990px) and (max-width: 1199px) {
    width: 95%;
  }

  @media (min-width: 768px) and (max-width: 989px) {
    width: 90%;
  }

  @media (max-width: 767px) {
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
    filter: brightness(0) invert(1); /* Change image color on hover */
  }
`;

export const Heading = styled.h4`
  margin: 16px 0;
`;

export const TextContent = styled.p`
  margin: 0;
`;
