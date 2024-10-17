import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Description,
  Marker,
  TickItemContainer,
  Title,
  TitleWrap,
} from "./TickItem.styled";

interface TickItemProps {
  title: string;
  description: string;
  listStyle: string;
  index: number; // Add index prop to keep track of the item's position
}

const TickItem: React.FC<TickItemProps> = ({
  title,
  description,
  listStyle,
  index,
}) => (
  <TickItemContainer>
    <Marker>
      {listStyle === "tick" ? (
        <FontAwesomeIcon icon={faCheck} size="1x" />
      ) : (
        <span>{(index + 1).toString().padStart(2, "0")}.</span> // Format number as two digits
      )}
    </Marker>
    <TitleWrap>
      {listStyle === "tick" ? (
        <Title fontWeight="bold">{title}</Title>
      ) : (
        <Title fontWeight="400">{title}</Title>
      )}

      <Description>{description}</Description>
    </TitleWrap>
  </TickItemContainer>
);

export default TickItem;
