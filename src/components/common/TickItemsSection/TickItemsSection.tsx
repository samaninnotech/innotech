"use client";
import React from 'react';
import TickItem from '../TickItem';
import {
    HeadingContainer,
    ItemsContainer,
    SectionHeading,
    TickItemsSectionContainer,
} from './TickItemsSection.styled';

interface TickItemData {
  title: string;
  description: string;
}

interface TickItemsSectionProps {
  header: string;
  items: TickItemData[];
}

  
const TickItemsSection: React.FC<TickItemsSectionProps> = ({ header, items }) => {
  return (
    <TickItemsSectionContainer>
      <HeadingContainer>
        <SectionHeading>{header}</SectionHeading>
      </HeadingContainer>
      <ItemsContainer>
        {items.map((item, index) => (
          <TickItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </ItemsContainer>
    </TickItemsSectionContainer>
  );
};

export default TickItemsSection;
