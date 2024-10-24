"use client";
import { SolutionCardType } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import { FC } from "react";
import components from "../BlockContent/components";
import SolutionCard from "./SolutionCard/SolutionCard";
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
  text?: any;
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
                <PortableText value={text} components={components} />
              </Paragraph>
              <RightBox />
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
                      link={solution.link}
                      learnMore={solution.learnMore}
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
