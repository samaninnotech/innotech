"use client";
import { PortableText } from "@portabletext/react";
import React, { useState } from "react";
import TabItem from "./TabItem";
import {
  ContentHeading,
  ContentText,
  Header,
  TabContentContainer,
  TabContentWrapper,
  TabsContainer,
  TabsHeader,
} from "./TabItemsSection.styled";

// Define type for each content item
type ContentItem = {
  heading: string;
  text: any;
};

// Define type for each tab
type TabItemType = {
  title: string;
  content: ContentItem[];
};

type TabItemsSectionProps = {
  header: string;
  tabItems: TabItemType[];
};
const TabItemsSection: React.FC<TabItemsSectionProps> = ({
  header,
  tabItems,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true);

  const handleTabClick = (index: number) => {
    setIsContentVisible(false); // Hide current content
    setTimeout(() => {
      setActiveTab(index); // Change tab after a delay
      setIsContentVisible(true); // Show new content
    }, 300); // Delay to match the transition timing
  };

  const { content } = tabItems[activeTab]; // Get content of the active tab

  return (
    <>
      <Header>{header}</Header>
      <TabsContainer>
        <TabsHeader>
          {tabItems.map((tab, index) => (
            <TabItem
              key={index}
              title={tab.title}
              isActive={activeTab === index}
              onClick={() => handleTabClick(index)}
            />
          ))}
        </TabsHeader>
        <TabContentWrapper>
          <TabContentContainer className={isContentVisible ? "active" : ""}>
            {content.map((section, index) => (
              <div key={index}>
                <ContentHeading>{section.heading}</ContentHeading>
                <ContentText>
                  <PortableText value={section.text} />
                </ContentText>
              </div>
            ))}
          </TabContentContainer>
        </TabContentWrapper>
      </TabsContainer>
    </>
  );
};

export default TabItemsSection;
