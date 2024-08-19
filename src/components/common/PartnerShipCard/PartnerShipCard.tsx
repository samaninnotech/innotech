// PartnerShipCard.tsx
import React from 'react';
import { Card, HeaderContainer, Heading, IconContainer, TextContent } from './PartnerShipCard.styled';

interface PartnerShipCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const PartnerShipCard: React.FC<PartnerShipCardProps> = ({ icon, title, text }) => (
  <Card>
    <HeaderContainer>
    <IconContainer>{icon}</IconContainer>
    <Heading>{title}</Heading>
    </HeaderContainer>
    <TextContent>{text}</TextContent>
  </Card>
);

export default PartnerShipCard;
