import React from "react";
import {
  CardWrapper,
  ContentWrapper,
  ImageWrapper,
  Text,
  Title,
  VisionImage,
} from "./VisionCard.styled";

type VisionCardProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  text: string;
};

const VisionCard: React.FC<VisionCardProps> = ({ imgSrc, title, text }) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <VisionImage src={imgSrc} alt={"visioncard"} width={700} height={500} />
      </ImageWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default VisionCard;
