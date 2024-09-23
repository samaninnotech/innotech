"use client";
// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/skyblue";

import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { GenericSectionProps } from "../GenericSection";
import {
  CarouselContent,
  CarouselTitleContainer,
  Element,
  InnerContainer1,
  InnerContainer2,
} from "./Carousel.styled";

export const CustomSplideSlide = styled.div`
  // Your custom styles for each slide
`;

type CarouselProps = GenericSectionProps &
  ComponentPropsWithoutRef<"div"> & {
    imgSrc: string[];
    title?: string;
    imgWidth: number;
    imgHeight: number;
  };
const options = {
  rewind: true,
  perPage: 1,
  type: "loop",
  fixedWidth: 470,
  fixedHeight: 200,
  gap: -10,
  pauseOnHover: false,
  autoplay: true,
  height: "15rem",
  interval: 1500,
  arrows: false,
  pagination: false,
};

const Carousel: React.FC<CarouselProps> = ({
  imgSrc,
  title,
  imgWidth,
  imgHeight,
  background,
}) => {
  return (
    <Element $background={background}>
      <InnerContainer1>
        <InnerContainer2>
          <CarouselTitleContainer>
            <h2>{title}</h2>
          </CarouselTitleContainer>
          <CarouselContent>
            <Splide
              tag="section"
              aria-label="My Favorite Images"
              hasTrack={false}
              options={options}
            >
              <SplideTrack>
                {imgSrc.map((img, index) => (
                  <SplideSlide key={index}>
                    <Image
                      src={img}
                      alt={`Slide ${index + 1}`}
                      width={imgWidth}
                      height={imgHeight}
                    />
                  </SplideSlide>
                ))}
              </SplideTrack>
            </Splide>
          </CarouselContent>
        </InnerContainer2>
      </InnerContainer1>
    </Element>
  );
};

export default Carousel;
