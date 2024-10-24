"use client";
import { InfoBlockType } from "@/sanity/types";
import React from "react";
import {
  GridWrapper,
  HeaderContainer,
  InfoSectionContainer,
  SectionHeader,
} from "./Info-section.styled";
import InfoBlock from "./InfoBlock";

interface InfoSectionProps {
  header: string;
  numberOfColumns: number;
  infoBlocks: InfoBlockType[];
}

const InfoSection: React.FC<InfoSectionProps> = ({
  header,
  numberOfColumns,
  infoBlocks,
}) => {
  return (
    <InfoSectionContainer>
      <HeaderContainer>
        <SectionHeader>{header}</SectionHeader>
      </HeaderContainer>
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
