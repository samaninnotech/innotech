"use client";
import { FAQ as FAQType } from "@/sanity/types";
import { ComponentPropsWithoutRef, FC, useState } from "react";
import { GenericSectionProps } from "../GenericSection";
import {
  AccordionContent,
  AccordionIcon,
  AccordionSection,
  AccordionTitle,
  AccordionTitleWrapper,
  Element,
  InnerContainer1,
  InnerContainer2,
  InnerContainer3,
  TitlenParagraphContainer,
} from "./FAQ-section.styled";

type FAQSectionProps = GenericSectionProps &
  ComponentPropsWithoutRef<"div"> & {
    faqList: FAQType[];
    title: string;
  };
const FAQSection: FC<FAQSectionProps> = ({ background, faqList, title }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Split the FAQ list into two columns
  const midPoint = Math.ceil(faqList.length / 2);
  const leftColumnFAQs = faqList.slice(0, midPoint);
  const rightColumnFAQs = faqList.slice(midPoint);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Element>
      <InnerContainer1 $background={background}>
        <TitlenParagraphContainer>{title}</TitlenParagraphContainer>
        <InnerContainer2>
          <InnerContainer3>
            <div>
              {leftColumnFAQs.map((item, index) => (
                <AccordionSection key={index} active={activeIndex === index}>
                  <AccordionTitleWrapper onClick={() => toggleAccordion(index)}>
                    <AccordionTitle active={activeIndex === index}>
                      {item.question}
                    </AccordionTitle>
                    <AccordionIcon active={activeIndex === index} />
                  </AccordionTitleWrapper>
                  <AccordionContent active={activeIndex === index}>
                    {item.answer}
                  </AccordionContent>
                </AccordionSection>
              ))}
            </div>
            <div>
              {rightColumnFAQs.map((item, index) => (
                <AccordionSection
                  key={index + midPoint}
                  active={activeIndex === index + midPoint}
                >
                  <AccordionTitleWrapper
                    onClick={() => toggleAccordion(index + midPoint)}
                  >
                    <AccordionTitle active={activeIndex === index + midPoint}>
                      {item.question}
                    </AccordionTitle>
                    <AccordionIcon active={activeIndex === index + midPoint} />
                  </AccordionTitleWrapper>
                  <AccordionContent active={activeIndex === index + midPoint}>
                    {item.answer}
                  </AccordionContent>
                </AccordionSection>
              ))}
            </div>
          </InnerContainer3>
        </InnerContainer2>
      </InnerContainer1>
    </Element>
  );
};

export default FAQSection;
