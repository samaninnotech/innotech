"use client";
import { TickItemType } from "@/sanity/types";
import React from "react";
import TickItem from "./TickItem";
import {
  HeaderContainer,
  InnerContainer1,
  ItemsContainer,
  SectionHeader,
  TickItemsSectionContainer,
} from "./TickItemsSection.styled";

interface TickItemsSectionProps {
  header: string;
  listStyle: string;
  tickItems: TickItemType[];
}

const TickItemsSection: React.FC<TickItemsSectionProps> = ({
  header,
  listStyle,
  tickItems = [],
}) => {
  return (
    <TickItemsSectionContainer>
      <HeaderContainer>
        <SectionHeader>{header}</SectionHeader>
      </HeaderContainer>
      <InnerContainer1>
        <ItemsContainer>
          {tickItems.map((item, index) => (
            <TickItem
              key={index}
              title={item.title}
              description={item.description}
              listStyle={listStyle}
              index={index} // Pass the index here
            />
          ))}
        </ItemsContainer>
      </InnerContainer1>
    </TickItemsSectionContainer>
  );
};

export default TickItemsSection;
