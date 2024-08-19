import React from 'react';
import {
  BoxImage,
  Content,
  ContentWrap,
  Heading,
  Image,
  Slide,
  SlideInner,
  TextContent
} from './ConsultationSwiperSlide.styled';

interface SwiperSlideProps {
  imageSrc: string;
  heading: string;
  text: string;
}

const ConsultationSwiperSlide: React.FC<SwiperSlideProps> = ({ imageSrc, heading, text }) => {
  return (
    <Slide>
      <SlideInner>
        <BoxImage>
          <ContentWrap>
            <Content>
              <Image src={imageSrc} alt={heading} />
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
