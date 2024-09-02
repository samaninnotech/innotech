"use client";
import { AccordionItem } from '@/sanity/types';
import React, { useState } from 'react';
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
  MarkedText,
  Row,
  SectionWrapper,
  Spacer,
} from './OurCompanySection.styled';


export type OurCompanySectionProps = {
  accordionItems: AccordionItem[];
};


const OurCompanySection: React.FC<OurCompanySectionProps> = ({
  accordionItems,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <SectionWrapper>
      <Spacer />
      <HeadingSmall>La nostra azienda</HeadingSmall>
      <Spacer />
      <HeadingLarge>
        Abbiamo l’ambizione di portare <MarkedText>l’innovazione tecnologica</MarkedText> nel mondo attraverso <MarkedText>soluzioni e progetti di implementazione tecnologica.</MarkedText>
      </HeadingLarge>
      <Row>
        <Column md={6}>
          <LeftColumn>
            <MarkedNumber>29</MarkedNumber> Team People
          </LeftColumn>
          <LeftColumnText>
            Lavoriamo insieme per <MarkedText>985 ore alla settimana.</MarkedText> Costruiamo progetti di successo con i nostri partner.
          </LeftColumnText>
          <Spacer />
        </Column>
        <Column md={6}>
          <AccordionWrapper>
            {accordionItems.map((item, index) => (
              <AccordionSection key={index} active={activeIndex === index}>
                <AccordionTitleWrapper onClick={() => toggleAccordion(index)}>
                  <AccordionTitle active={activeIndex === index}>{item.title}</AccordionTitle>
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
