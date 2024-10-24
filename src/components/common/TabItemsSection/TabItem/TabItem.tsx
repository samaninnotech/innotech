import React from "react";
import { TabButton } from "./TabItem.styled";

interface TabItemProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const TabItem: React.FC<TabItemProps> = ({ title, isActive, onClick }) => {
  return (
    <TabButton isActive={isActive} onClick={onClick}>
      {title}
    </TabButton>
  );
};

export default TabItem;
