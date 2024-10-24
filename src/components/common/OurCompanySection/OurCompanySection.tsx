"use client";
import { AccordionItem } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl"; // Import the icon here
import components from "../BlockContent/components";
import {
  AccordionContent,
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
            {accordionItems.map((item, index) => {
              const selected = activeIndex === index; // Determine if the current item is selected
              return (
                <AccordionSection key={index} active={selected}>
                  <AccordionTitleWrapper onClick={() => toggleAccordion(index)}>
                    <AccordionTitle active={selected}>
                      {item.title}
                    </AccordionTitle>
                    {/* Icon with rotation based on selection */}
                    <SlArrowDown
                      style={{
                        transform: selected
                          ? "rotate(-180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </AccordionTitleWrapper>
                  <AccordionContent active={selected}>
                    {item.content}
                  </AccordionContent>
                </AccordionSection>
              );
            })}
          </AccordionWrapper>
        </Column>
      </Row>
      <Spacer />
    </SectionWrapper>
  );
};

export default OurCompanySection;
