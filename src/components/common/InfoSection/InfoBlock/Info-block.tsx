import { sanityUrlFor } from "@/sanity/sanity-client";
import React from "react";
import {
  ContentWrap,
  Heading,
  Image,
  ImageContainer,
  InfoBlockContainer,
  Text,
} from "./Info-block.styled";

// Function to convert description into a list
const formatDescription = (description: string) => {
  const lines = description
    .split("\n")
    .filter((line) => line.trim().length > 0);
  return (
    <ul>
      {lines.map((line, index) => (
        <li key={index}>{line.trim()}</li>
      ))}
    </ul>
  );
};

interface InfoBlockProps {
  imageSrc: string;
  altText: string;
  header: string;
  description: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({
  imageSrc,
  altText,
  header,
  description,
}) => (
  <InfoBlockContainer>
    <ContentWrap>
      <ImageContainer>
        <Image src={sanityUrlFor(imageSrc).url()} alt={altText} />
      </ImageContainer>
      <Heading>{header}</Heading>
      <Text>{formatDescription(description)}</Text>
    </ContentWrap>
  </InfoBlockContainer>
);

export default InfoBlock;
