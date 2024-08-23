"use client";
// PartnerShipSection.tsx
import { PartnerShipCardType } from '@/sanity/types';
import { faChalkboardTeacher, faCheckSquare, faCogs, faEuroSign, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PartnerShipCard from '../PartnerShipCard/PartnerShipCard';
import { CardsContainer, Container, Header, InnerContainer } from './PartnershipSection.styled';

// Define icons
const iconMapping: { [key: string]: IconDefinition } = {
  euroSign: faEuroSign,
  checkSquare: faCheckSquare,
  cogs: faCogs,
  chalkboardTeacher: faChalkboardTeacher,
};

type PartnerShipSectionProps = {
  partnershipCards: PartnerShipCardType[]; // Make it optional to handle undefined cases
  header: string;
}

const PartnerShipSection: React.FC<PartnerShipSectionProps> = ({ partnershipCards = [], header }) => (
  <Container>
    <InnerContainer>
      <Header>
        <h4>{header}</h4>
      </Header>
      <CardsContainer>
        {partnershipCards.length > 0 ? (
          partnershipCards.map((data, index) => (
            <PartnerShipCard 
              key={index}
              icon={<FontAwesomeIcon icon={iconMapping[data.icon] || faCheckSquare} />}
              title={data.title}
              text={data.text} 
              _key={data._key || ''} // Make sure to pass a valid key
            />
          ))
        ) : (
          <p>No partnership cards available</p> // Handle the case when there are no cards
        )}
      </CardsContainer>
    </InnerContainer>
  </Container>
);

export default PartnerShipSection;
