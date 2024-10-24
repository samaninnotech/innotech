"use client";
import { VisionCardType } from "@/sanity/types";
import React from "react";
import VisionCard from "./VisionCard";
import {
  GridWrapper,
  Heading,
  SectionWrapper,
  Spacer,
} from "./VisionsSection.styled";

type VisionsSectionProps = {
  sectionTitle?: string;
  topHeading: string;
  footerText: string;
  visionCards?: VisionCardType[];
};

const VisionsSection: React.FC<VisionsSectionProps> = ({
  sectionTitle,
  topHeading,
  footerText,
  visionCards,
}) => {
  return (
    <SectionWrapper>
      <Spacer />
      {sectionTitle && <Heading>{sectionTitle}</Heading>}
      <Spacer />
      <Heading large>{topHeading}</Heading>
      <Spacer />
      <Spacer />
      <GridWrapper>
        {visionCards?.map((vision, index) => (
          <VisionCard key={index} {...vision} />
        ))}
      </GridWrapper>
      <Spacer />
      <Spacer />
      <Heading large>{footerText}</Heading>
      <Spacer />
    </SectionWrapper>
  );
};

export default VisionsSection;
