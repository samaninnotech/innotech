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
    numberOfColumns: number;
    isFullWidth: boolean;
  };

// Helper function to split the FAQ list into chunks based on numberOfColumns
const chunkArray = (arr: any[], chunkSize: number) => {
  let result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};

const FAQSection: FC<FAQSectionProps> = ({
  background,
  faqList,
  title,
  numberOfColumns,
  isFullWidth,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Split the FAQ list into chunks based on the number of columns
  const chunkedFAQs = chunkArray(
    faqList,
    Math.ceil(faqList.length / numberOfColumns),
  );

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Element>
      <InnerContainer1 $background={background} $isFullWidth={isFullWidth}>
        <TitlenParagraphContainer>{title}</TitlenParagraphContainer>
        <InnerContainer2>
          <InnerContainer3 numberOfColumns={numberOfColumns}>
            {chunkedFAQs.map((column, columnIndex) => (
              <div key={columnIndex}>
                {column.map((item, itemIndex) => {
                  // Calculate a unique index across all columns
                  const overallIndex =
                    columnIndex * Math.ceil(faqList.length / numberOfColumns) +
                    itemIndex;

                  return (
                    <AccordionSection
                      key={overallIndex}
                      active={activeIndex === overallIndex}
                    >
                      <AccordionTitleWrapper
                        onClick={() => toggleAccordion(overallIndex)}
                      >
                        <AccordionTitle active={activeIndex === overallIndex}>
                          {item.question}
                        </AccordionTitle>
                        <AccordionIcon active={activeIndex === overallIndex} />
                      </AccordionTitleWrapper>
                      <AccordionContent active={activeIndex === overallIndex}>
                        {item.answer}
                      </AccordionContent>
                    </AccordionSection>
                  );
                })}
              </div>
            ))}
          </InnerContainer3>
        </InnerContainer2>
      </InnerContainer1>
    </Element>
  );
};

export default FAQSection;
