import React from "react";
import {
  Card,
  HeaderContainer,
  Heading,
  IconContainer,
  TextContent,
} from "./PartnerShipCard.styled";

interface PartnerShipCardProps {
  icon: React.ReactElement; // Accept ReactElement for icon
  title: string;
  text: string;
  _key: string; // Adjust type if needed
}

const PartnerShipCard: React.FC<PartnerShipCardProps> = ({
  icon,
  title,
  text,
}) => (
  <Card>
    <HeaderContainer>
      <IconContainer>{icon}</IconContainer>
      <Heading>{title}</Heading>
    </HeaderContainer>
    <TextContent>{text}</TextContent>
  </Card>
);

export default PartnerShipCard;
