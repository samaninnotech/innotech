import React from 'react';
import { CardWrapper, ContentWrapper, ImageWrapper, Text, Title } from './VisionCard.styled';

interface VisionCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  text: string;
}

const VisionCard: React.FC<VisionCardProps> = ({ imgSrc, imgAlt, title, text }) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <img src={imgSrc} alt={imgAlt} />
      </ImageWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default VisionCard;
