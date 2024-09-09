"use client";
import { TickItemType } from "@/sanity/types";
import React from "react";
import TickItem from "../TickItem";
import {
  HeaderContainer,
  ItemsContainer,
  SectionHeader,
  TickItemsSectionContainer,
} from "./TickItemsSection.styled";

interface TickItemsSectionProps {
  header: string;
  tickItems: TickItemType[];
}

const TickItemsSection: React.FC<TickItemsSectionProps> = ({
  header,
  tickItems = [],
}) => {
  return (
    <TickItemsSectionContainer>
      <HeaderContainer>
        <SectionHeader>{header}</SectionHeader>
      </HeaderContainer>
      <ItemsContainer>
        {tickItems.map((item, index) => (
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
