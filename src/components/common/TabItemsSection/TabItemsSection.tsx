"use client";
import { PortableText } from "@portabletext/react";
import React, { useEffect, useState } from "react";
import TabItem from "./TabItem";
import {
  ContentHeading,
  ContentText,
  Header,
  TabContentContainer,
  TabContentWrapper,
  TabItemsSectionContainer,
  TabsContainer,
  TabsHeader,
} from "./TabItemsSection.styled";

type ContentItem = {
  heading: string;
  text: any;
};

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
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check if screen is small and set accordion mode
  useEffect(() => {
    const handleResize = () => {
      const isCurrentlySmallScreen = window.innerWidth <= 768;
      setIsSmallScreen(isCurrentlySmallScreen);

      // Reset content visibility when switching from small to large screen
      if (!isCurrentlySmallScreen) {
        setIsContentVisible(true); // Ensure content is visible on larger screens
      }
    };
    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabClick = (index: number) => {
    if (isSmallScreen && activeTab === index) {
      setIsContentVisible(!isContentVisible);
    } else {
      setIsContentVisible(false);
      setTimeout(() => {
        setActiveTab(index);
        setIsContentVisible(true);
      }, 300);
    }
  };

  return (
    <TabItemsSectionContainer>
      <Header>{header}</Header>
      <TabsContainer>
        <TabsHeader>
          {tabItems.map((tab, index) => (
            <React.Fragment key={index}>
              <TabItem
                title={tab.title}
                isActive={activeTab === index}
                onClick={() => handleTabClick(index)}
              />
              {isSmallScreen && activeTab === index && isContentVisible && (
                <TabContentWrapper>
                  <TabContentContainer className="active">
                    {tab.content.map((section, idx) => (
                      <div key={idx}>
                        <ContentHeading>{section.heading}</ContentHeading>
                        <ContentText>
                          <PortableText value={section.text} />
                        </ContentText>
                      </div>
                    ))}
                  </TabContentContainer>
                </TabContentWrapper>
              )}
            </React.Fragment>
          ))}
        </TabsHeader>

        {/* Display content for larger screens only */}
        {!isSmallScreen && (
          <TabContentWrapper>
            <TabContentContainer className={isContentVisible ? "active" : ""}>
              {tabItems[activeTab].content.map((section, index) => (
                <div key={index}>
                  <ContentHeading>{section.heading}</ContentHeading>
                  <ContentText>
                    <PortableText value={section.text} />
                  </ContentText>
                </div>
              ))}
            </TabContentContainer>
          </TabContentWrapper>
        )}
      </TabsContainer>
    </TabItemsSectionContainer>
  );
};

export default TabItemsSection;
