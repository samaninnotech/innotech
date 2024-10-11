"use client";
import { AccordionItem } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import React, { useState } from "react";
import components from "../BlockContent/components";
import {
  AccordionContent,
  AccordionIcon,
  AccordionSection,
  AccordionTitle,
  AccordionTitleWrapper,
  AccordionWrapper,
  Column,
  HeadingLarge,
  HeadingSmall,
  LeftColumn,
  LeftColumnText,
  MarkedNumber,
  Row,
  SectionWrapper,
  Spacer,
} from "./OurCompanySection.styled";

export type OurCompanySectionProps = {
  smallHeader: string;
  largeHeader: any;
  leftColumnText: any;
  membersNumber: string;
  accordionItems: AccordionItem[];
};

const OurCompanySection: React.FC<OurCompanySectionProps> = ({
  smallHeader,
  largeHeader,
  leftColumnText,
  membersNumber,
  accordionItems,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <SectionWrapper>
      <Spacer />
      <HeadingSmall>{smallHeader}</HeadingSmall>
      <Spacer />
      <HeadingLarge>
        <PortableText value={largeHeader} components={components} />
      </HeadingLarge>
      <Row>
        <Column md={6}>
          <LeftColumn>
            <MarkedNumber>{membersNumber}</MarkedNumber> Team People
          </LeftColumn>
          <LeftColumnText>
            <PortableText value={leftColumnText} components={components} />
          </LeftColumnText>
        </Column>
        <Column md={6}>
          <AccordionWrapper>
            {accordionItems.map((item, index) => (
              <AccordionSection key={index} active={activeIndex === index}>
                <AccordionTitleWrapper onClick={() => toggleAccordion(index)}>
                  <AccordionTitle active={activeIndex === index}>
                    {item.title}
                  </AccordionTitle>
                  <AccordionIcon active={activeIndex === index} />
                </AccordionTitleWrapper>
                <AccordionContent active={activeIndex === index}>
                  {item.content}
                </AccordionContent>
              </AccordionSection>
            ))}
          </AccordionWrapper>
        </Column>
      </Row>
      <Spacer />
    </SectionWrapper>
  );
};

export default OurCompanySection;
