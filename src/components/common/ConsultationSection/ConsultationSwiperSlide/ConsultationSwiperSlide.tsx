import { sanityUrlFor } from "@/sanity/sanity-client";
import React from "react";
import {
  BoxImage,
  Content,
  ContentWrap,
  Heading,
  Slide,
  SlideInner,
  SwiperImage,
  TextContent,
} from "./ConsultationSwiperSlide.styled";

interface SwiperSlideProps {
  imageSrc: string;
  heading: string;
  text: string;
}

const ConsultationSwiperSlide: React.FC<SwiperSlideProps> = ({
  imageSrc,
  heading,
  text,
}) => {
  return (
    <Slide>
      <SlideInner>
        <BoxImage>
          <ContentWrap>
            <Content>
              <SwiperImage
                src={sanityUrlFor(imageSrc).url()}
                alt={heading}
                width={100}
                height={100}
              />
              <Heading>{heading}</Heading>
              <TextContent>{text}</TextContent>
            </Content>
          </ContentWrap>
        </BoxImage>
      </SlideInner>
    </Slide>
  );
};

export default ConsultationSwiperSlide;
