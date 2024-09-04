"use client";
import { InfoBlockType } from '@/sanity/types';
import React from 'react';
import InfoBlock from '../InfoBlock';
import {
  GridWrapper,
  HeadingContainer,
  InfoSectionContainer,
  SectionHeading,
} from './Info-section.styled';

interface InfoSectionProps {
  header: string;
  numberOfColumns: number
  infoBlocks: InfoBlockType[];
}

const InfoSection: React.FC<InfoSectionProps> = ({header, numberOfColumns, infoBlocks }) => {
  return (
    <InfoSectionContainer>
      <HeadingContainer>
        <SectionHeading>{header}</SectionHeading>
      </HeadingContainer>
      <GridWrapper numberOfColumns={numberOfColumns}>
        {infoBlocks.map((block, index) => (
          <InfoBlock
            key={index}
            imageSrc={block.imageSrc}
            altText={block.altText}
            header={block.header}
            description={block.description}
          />
        ))}
      </GridWrapper>
    </InfoSectionContainer>
  );
};

export default InfoSection;
