import { sanityUrlFor } from "@/sanity/sanity-client";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"; // Import a Font Awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Card,
  HeaderContainer,
  Heading,
  IconContainer,
  TextContent,
} from "./PartnerShipCard.styled";

interface PartnerShipCardProps {
  icon: string | null;
  title: string;
  text: string;
}

const PartnerShipCard: React.FC<PartnerShipCardProps> = ({
  icon,
  title,
  text,
}) => {
  return (
    <Card>
      <HeaderContainer>
        <IconContainer>
          {icon ? (
            <img
              src={sanityUrlFor(icon).url()}
              alt="icon"
              width={50}
              height={60}
            />
          ) : (
            <FontAwesomeIcon icon={faExclamationCircle} size="lg" />
          )}
        </IconContainer>
        <Heading>{title}</Heading>
      </HeaderContainer>
      <TextContent>{text}</TextContent>
    </Card>
  );
};

export default PartnerShipCard;
