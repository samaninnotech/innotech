import React from "react";
import {
  Card,
  Heading,
  IconContainer,
  LearnMoreLink,
  TextContent,
} from "./SolutionCard.styled";

interface SolutionCardProps {
  icon: string;
  title: string;
  text: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, text }) => {
  const createSvgElement = (svgString: string): JSX.Element => {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: svgString }}
        style={{ width: "100%", height: "100%" }}
      />
    );
  };

  const svgElement = createSvgElement(icon);
  return (
    <Card>
      <IconContainer>{svgElement}</IconContainer>
      <Heading>{title}</Heading>
      <TextContent>{text}</TextContent>
      <LearnMoreLink href="#">
        Scopri la soluzione
        <span className="arrow-icon">→</span>
      </LearnMoreLink>
    </Card>
  );
};

export default SolutionCard;
