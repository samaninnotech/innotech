import { sanityUrlFor } from "@/sanity/sanity-client";
import { CustomLink, customLinkToHref } from "@/sanity/types";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // or free-regular-svg-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import {
  Card,
  Heading,
  Icon,
  IconContainer,
  LearnMoreLink,
  TextContent,
} from "./SolutionCard.styled";

interface SolutionCardProps {
  icon: string;
  title: string;
  text: string;
  link: CustomLink;
  learnMore: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  icon,
  title,
  text,
  link,
  learnMore,
}) => {
  const href = customLinkToHref(link);

  return (
    <Card href={href}>
      <IconContainer>
        <Icon
          src={sanityUrlFor(icon).url()}
          alt="icon"
          width={70}
          height={60}
        />
      </IconContainer>
      <Heading>{title}</Heading>
      <TextContent>{text}</TextContent>
      <LearnMoreLink>
        {learnMore}
        <FontAwesomeIcon icon={faArrowRight} />
      </LearnMoreLink>
    </Card>
  );
};

export default SolutionCard;
