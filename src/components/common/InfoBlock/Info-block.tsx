import { sanityUrlFor } from '@/sanity/sanity-client';
import React from 'react';
import {
  ContentWrap,
  Heading,
  Image,
  ImageContainer,
  InfoBlockContainer,
  LinkSecret,
  Text,
} from './Info-block.styled';

// Function to convert description into a list
const formatDescription = (description: string) => {
  const lines = description.split('\n').filter(line => line.trim().length > 0);

  if (lines[0].startsWith('Consente')) {
    lines.shift();
  }

  return (
    <ul>
      {lines.map((line, index) => (
        <li key={index}>{line.replace(/^-\s*/, '')}</li>
      ))}
    </ul>
  );
};

interface InfoBlockProps {
  imageSrc: string;
  altText: string;
  heading: string;
  description: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ imageSrc, altText, heading, description }) => (
  <InfoBlockContainer>
    <LinkSecret href="#">
      <ContentWrap>
        <ImageContainer>
          <Image src={sanityUrlFor(imageSrc).url()} alt={altText} />
        </ImageContainer>
        <Heading>{heading}</Heading>
        <Text>{formatDescription(description)}</Text>
      </ContentWrap>
    </LinkSecret>
  </InfoBlockContainer>
);

export default InfoBlock;
