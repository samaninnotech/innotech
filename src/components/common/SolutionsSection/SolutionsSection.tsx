"use client";
import { SolutionCardType } from "@/sanity/types";
import { FC } from "react";
import SolutionCard from "../SolutionCard/SolutionCard";
import {
  CardsContainer,
  Container,
  Header,
  InnerContainer1,
  InnerContainer2,
  InnerContainer3,
  Paragraph,
  RightBox,
  Row,
} from "./SolutionsSection.styled";

type SolutionsSectionProps = {
  title?: string;
  text?: string;
  solutionCards?: SolutionCardType[];
};
// SolutionsSection Component
export const SolutionsSection: FC<SolutionsSectionProps> = ({
  title,
  text,
  solutionCards,
}) => {
  return (
    <Container>
      <InnerContainer1>
        <InnerContainer2>
          <InnerContainer3>
            <Header>
              <Paragraph>
                <p>{title}</p>
                <h2>{text}</h2>
              </Paragraph>
              <RightBox>{/* Right box content here if needed */}</RightBox>
            </Header>

            <CardsContainer>
              <Row>
                {solutionCards &&
                  solutionCards.map((solution, index) => (
                    <SolutionCard
                      key={index}
                      icon={solution.icon}
                      title={solution.title}
                      text={solution.text}
                    />
                  ))}
              </Row>
            </CardsContainer>
          </InnerContainer3>
        </InnerContainer2>
      </InnerContainer1>
    </Container>
  );
};

export default SolutionsSection;
