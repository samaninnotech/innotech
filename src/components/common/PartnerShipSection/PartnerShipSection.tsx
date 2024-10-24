"use client";
// PartnerShipSection.tsx
import { PartnerShipCardType } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import React from "react";
import components from "../BlockContent/components";
import PartnerShipCard from "./PartnerShipCard/PartnerShipCard";
import {
  CardsContainer,
  Container,
  Header,
  InnerContainer,
} from "./PartnerShipSection.styled";

type PartnerShipSectionProps = {
  partnershipCards: PartnerShipCardType[];
  header: any;
};

const PartnerShipSection: React.FC<PartnerShipSectionProps> = ({
  partnershipCards,
  header,
}) => (
  <Container>
    <InnerContainer>
      <Header>
        <PortableText value={header} components={components} />
      </Header>
      <CardsContainer>
        {partnershipCards.length > 0 ? (
          partnershipCards.map((data, index) => (
            <PartnerShipCard
              key={index}
              icon={data.icon}
              title={data.title}
              text={data.text}
            />
          ))
        ) : (
          <p>No partnership cards available</p>
        )}
      </CardsContainer>
    </InnerContainer>
  </Container>
);

export default PartnerShipSection;
